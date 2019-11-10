const request = require('request-promise-native')
const cheerio = require('cheerio')
const Response = require('../response')

async function makeResponse(errorMessage) {
    try {
        const answerList = await getAnswerList(errorMessage)
        const responseDataList = answerList.map(value => {
            return {
                "title": value.title,
                "description": `${value.content}\n${value.link}`,
                "thumbnail": {
                    "imageUrl": value.metaImage
                },
                "buttons": [
                    {
                        "action": "webLink",
                        "label": "이동하기",
                        "webLinkUrl" : value.link
                    }
                ]
            }
        })
        const response = new Response(responseDataList).carousel()
        return response
    } catch (e) {
        throw e
    }
    
}

async function getAnswerList(errorMessage) {
    const eLen = errorMessage.length

    try {
        const options = {
            mehtod : 'get'
            , headers : {
                'cookie' : `CGIC=InZ0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbDtxPTAuOSxpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44LGFwcGxpY2F0aW9uL3NpZ25lZC1leGNoYW5nZTt2PWIz; ANID=OPT_OUT; SID=mgfdr_WDQhgq05RoTrbmO4ZCwfGOxIdGmZTlwlCQdSzonYOlgEtDflpkf51jUApWtZgiCA.; HSID=AU9t5vF0bFk66g5RP; SSID=AanNfaHshtLB6vrRp; APISID=KUAAxhqzGsgcfimy/AvqSsYc97I5-szz6b; SAPISID=mb9DbCKNVXNUWsND/AugNeLp1WvH7l-psv; CONSENT=YES+KR.ko+20170226-18-0; SEARCH_SAMESITE=CgQIjY4B; NID=190=iSNVlv94KmFPhojLPtQNxLyhHYXdUWrN8JpRsqiVIbZMIZWpXepzcYzStC_u1x5-RfMEFGjXYozY2vmpRDFP0aLxruaPHbzoogarLJSHqPhwL-mok2HD1X5h0JsNCK6DFKZNe6EQgxAysGjWQKjop-AkoM1GG4ccOIhB_SfYeniDY_x-TO2rCYM-mA25D2FPMg0MUtj7cFET8prjVkW5gZY89BP10TG8Ogchk9KUJ7XyFcUCd5nS3JZUpKr9mZjcICM6Lz0PkX-Vhve53rSFRrhkjA1OuevVEA; DV=A4j-jzyHKnJHECBuCtWvdH0XNp0M5FbFnRULTMb8fQAAAOALj3ahC0cLKgAAALgHGACE7GREFQAAAA; SIDCC=AN0-TYu1jYg29OdrQQ8uFj39h-Cs6ZH8nAEor-mnjctYFM6ok3bOkZifBA4Bv_RyhS2t0g1FXWcW; 1P_JAR=2019-11-6-12`
                , 'user-agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36'
                , 'x-client-data' : 'CI22yQEIpLbJAQjBtskBCKmdygEI4qjKAQjOsMoBCPa0ygEYq6TKAQ=='
            }
            , encoding : 'utf-8'
            , uri : encodeURI(`https://www.google.com/search?q=${errorMessage}`)
        }

        console.log(options.uri)
        const body = await request(options)
        const $ = cheerio.load(body)

        const itemList = []
        const divLen = $('#rso > div').length

        const topTitle = $('#rso > div:nth-child(1) > div > div > div > div > div > div > div > div > div.r > a > h3').text()
        const topLink =  $('#rso > div:nth-child(1) > div > div > div > div > div > div > div > div > div.r > a').attr('href')
        if(topTitle !== '') {
            itemList.push({
                title : topTitle
                , content : $('#rso > div:nth-child(1) > div > div > div > div > div > div > div > span > span').text()
                , link : $('#rso > div:nth-child(1) > div > div > div > div > div > div > div > div > div.r > a').attr('href')
                , metaImage : 'https://storage.cloud.google.com/devi_storage_1518/lani/background.jpg'
                // , metaImage : await getMetaImage(topLink)
                , score : 1
                , isTop : true
            })
        }

        for(let i=1; i<=divLen; i++) {
            const listLen = $(`#rso > div:nth-child(${i}) > div > div`).length

            if(listLen >= 1) {
                for(let j=1; j<=listLen; j++) {
                    const title = $(`#rso > div:nth-child(${i}) > div > div:nth-child(${j}) > div > div > div.r > a > h3`).text()
                    const content = $(`#rso > div:nth-child(${i}) > div > div:nth-child(${j}) > div > div > div.s > div > span`).text()
                    const link = $(`#rso > div:nth-child(${i}) > div > div:nth-child(${j}) > div > div > div.r > a`).attr('href')
                    // const metaImage = await getMetaImage(link)
                    if(title !== '' && content !== '') {
                        itemList.push({
                            title : title
                            , content : content
                            , link : link
                            , metaImage : 'https://storage.cloud.google.com/devi_storage_1518/lani/background.jpg'
                            , score : 1
                            , isTop : false
                        })
                    }    
                }

                // await Promise.all(itemList.map(value => {
                //     itemList['metaImage'] = getMetaImage(value.link)
                // }))
            }
            else {
                console.log('why')
            }
        }

        const valueLen = itemList.length

        for(let i=0; i<valueLen; i++) {
            const titleStr = itemList[i].title.toLowerCase()
            const contentStr = itemList[i].content.toLowerCase()

            let titleDistance = 1;
            let contentDistance = 1;

            if(titleStr.length > eLen) {
                for(let i=0; i<titleStr.length - eLen; i++) {
                    const dis = getDistance(errorMessage, titleStr.slice(i, i+eLen)) / eLen
                    titleDistance = titleDistance < dis ? titleDistance : dis;
                }
            }
            else {
                titleDistance = getDistance(errorMessage, titleStr) / titleStr.length
            }

            if(contentStr.length > eLen) {
                for(let i=0; i<contentStr.length - eLen; i++) {
                    const dis = getDistance(errorMessage, contentStr.slice(i, i+eLen)) / eLen
                    contentDistance = contentDistance < dis ? contentDistance : dis;
                }
            }
            else {
                contentDistance = getDistance(errorMessage, contentStr) / contentStr.length
            }

            console.log(`${i}'th index : ${titleDistance} + ${contentDistance}`)
            itemList[i].score = (titleDistance + contentDistance) / 2

            if(itemList[i].isTop) {
                itemList[i].score -= 0.15
            }
        }

        itemList.sort((a, b) => {
            return a.score > b.score;
        })
        // console.log(itemList)
        return itemList

    } catch (e) {
        throw e
    }
}

async function getMetaImage(link) {
    try {
        if(isEmpty(link)) {
            return 'https://storage.cloud.google.com/devi_storage_1518/lani/background.jpg'
        }
        console.log(link)
        const options = {
            method : 'get'
            , uri : link
        }

        const body = await request(options)
        const $ = cheerio.load(body)

        const metaImage = $("meta[property='og:image']").attr("content")
        return metaImage
    } catch (e) {
        throw e
    }
}

function getDistance(s1, s2) {
    
    let longStrLen = s1.length + 1;
    let shortStrLen = s2.length + 1; // 긴 단어 만큼 크기가 나올 것이므로, 가장 긴단어 에 맞춰 Cost를 계산

    let cost = new Array(longStrLen);
    let newcost = new Array(longStrLen); // 초기 비용을 가장 긴 배열에 맞춰서 초기화 시킨다.
    for (let i = 0; i < longStrLen; i++) { cost[i] = i; } // 짧은 배열을 한바퀴 돈다.
    for (let j = 1; j < shortStrLen; j++) {
      // 초기 Cost는 1, 2, 3, 4...
      newcost[0] = j; // 긴 배열을 한바퀴 돈다.
      for (let i = 1; i < longStrLen; i++) {
        // 원소가 같으면 0, 아니면 1
        let match = 0;
        if (s1.charAt(i - 1) != s2.charAt(j - 1)) { match = 1; }      
        // 대체, 삽입, 삭제의 비용을 계산한다.
        let replace = cost[i - 1] + match;
        let insert = cost[i] + 1;
        let del = newcost[i - 1] + 1;
        // 가장 작은 값을 비용에 넣는다.
        newcost[i] = Math.min(Math.min(insert, del), replace);
      } // 기존 코스트 & 새 코스트 스위칭 int[] 
      let temp = cost; 
      cost = newcost; 
      newcost = temp;
    }
    return cost[longStrLen - 1];
}

module.exports = {
    response : makeResponse
}