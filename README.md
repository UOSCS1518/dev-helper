# Devi


---------------

[Reference](https://i.kakao.com/docs/skill-response-format#detailparams) <- 클릭
## Request
```json
{
 "userRequest": {
    "timezone": "Asia/Seoul",
    "params": {},
    "block": {
      "id": "<블록 id>",
      "name": "<블록 이름>"
    },
    "utterance": "<사용자 발화>",
    "lang": "kr",
    "user": {
      "id": "<사용자 botUserKey>",
      "type": "botUserKey",
      "properties": {
        "plusfriendUserKey": "<카카오톡 채널 사용자 id>"
      }
    }
  },
  "contexts": [],
  "bot": {
    "id": "<봇 id>",
    "name": "<봇 이름>"
  },
  "action": {
    "name": "<스킬 이름>",
    "clientExtra": null,
    "params": {},
    "id": "<스킬 id>",
    "detailParams": {}
  }
}
```

## Response
### - Simple Text
```json
{
    "version": "2.0",
    "template": {
        "outputs": [
            {
                "simpleText": {
                    "text": "간단한 텍스트 요소입니다."
                }
            }
        ]
    }
}
```
### - Simple Image
```json
{
    "version": "2.0",
    "template": {
        "outputs": [
            {
                "simpleImage": {
                    "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
                    "altText": "보물상자입니다"
                }
            }
        ]
    }
}
```

### - Basic Card
```json
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "basicCard": {
          "title": "보물상자",
          "description": "보물상자 안에는 뭐가 있을까",
          "thumbnail": {
            "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
          },
          "profile": {
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
            "nickname": "보물상자"
          },
          "social": {
            "like": 1238,
            "comment": 8,
            "share": 780
          },
          "buttons": [
            {
              "action": "message",
              "label": "열어보기",
              "messageText": "짜잔! 우리가 찾던 보물입니다"
            },
            {
              "action":  "webLink",
              "label": "구경하기",
              "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
            }
          ]
        }
      }
    ]
  }
}
```

### - List Card
```json
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "listCard": {
          "header": {
            "title": "카카오 i 디벨로퍼스를 소개합니다",
            "imageUrl": "http://k.kakaocdn.net/dn/xsBdT/btqqIzbK4Hc/F39JI8XNVDMP9jPvoVdxl1/2x1.jpg"
          },
          "items": [
            {
              "title": "Kakao i Developers",
              "description": "새로운 AI의 내일과 일상의 변화",
              "imageUrl": "http://k.kakaocdn.net/dn/APR96/btqqH7zLanY/kD5mIPX7TdD2NAxgP29cC0/1x1.jpg",
              "link": {
                "web": "https://namu.wiki/w/%EB%9D%BC%EC%9D%B4%EC%96%B8(%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88)"
              }
            },
            {
              "title": "Kakao i Open Builder",
              "description": "카카오톡 채널 챗봇 만들기",
              "imageUrl": "http://k.kakaocdn.net/dn/N4Epz/btqqHCfF5II/a3kMRckYml1NLPEo7nqTmK/1x1.jpg",
              "link": {
                "web": "https://namu.wiki/w/%EB%AC%B4%EC%A7%80(%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88)"
              }
            },
            {
              "title": "Kakao i Voice Service",
              "description": "보이스봇 / KVS 제휴 신청하기",
              "imageUrl": "http://k.kakaocdn.net/dn/bE8AKO/btqqFHI6vDQ/mWZGNbLIOlTv3oVF1gzXKK/1x1.jpg",
              "link": {
                "web": "https://namu.wiki/w/%EC%96%B4%ED%94%BC%EC%B9%98"
              }
            }
          ],
          "buttons": [
            {
              "label": "구경가기",
              "action": "webLink",
              "webLinkUrl": "https://namu.wiki/w/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88"
            }
          ]
        }
      }
    ]
  }
}
```

### - Carousel
```json
{
  "version": "2.0",
  "template": {
    "outputs": [
      {
        "carousel": {
          "type": "basicCard",
          "items": [
            {
              "title": "보물상자",
              "description": "보물상자 안에는 뭐가 있을까",
              "thumbnail": {
                "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
              },
              "buttons": [
                {
                  "action": "message",
                  "label": "열어보기",
                  "messageText": "짜잔! 우리가 찾던 보물입니다"
                },
                {
                  "action":  "webLink",
                  "label": "구경하기",
                  "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                }
              ]
            },
            {
              "title": "보물상자2",
              "description": "보물상자2 안에는 뭐가 있을까",
              "thumbnail": {
                "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
              },
              "buttons": [
                {
                  "action": "message",
                  "label": "열어보기",
                  "messageText": "짜잔! 우리가 찾던 보물입니다"
                },
                {
                  "action":  "webLink",
                  "label": "구경하기",
                  "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                }
              ]
            },
            {
              "title": "보물상자3",
              "description": "보물상자3 안에는 뭐가 있을까",
              "thumbnail": {
                "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
              },
              "buttons": [
                {
                  "action": "message",
                  "label": "열어보기",
                  "messageText": "짜잔! 우리가 찾던 보물입니다"
                },
                {
                  "action":  "webLink",
                  "label": "구경하기",
                  "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                }
              ]
            }
          ]
        }
      }
    ]
  }
}
```