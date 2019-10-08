const c = {}
const Response = require('../response')
const language = 'c'
//객체를 

c.operator = function(){
    return {
        "outputs": [
            {
                "basicCard": {
                    "title": "C언어 연산자",
                    "description": "C언어 연산자에 대한 설명입니다. 더 자세히 알아보고 싶은 정보를 클릭해주세요.",
                    "buttons": [
                        {
                            "action": "",
                            "label": "사진으로 볼래요?",
                            "imageUrl": "http://www.qaupot.com/lect/C/img/Operator/2.png"
                        },
                        {
                            "action": "block",
                            "blockId": "c.operator_detail",
                            "label": "말로 설명해줄께요!"
                        }
                    ]
                }
            }
        ]
    }
}
c.operator_detail = function(){
    return{
        "outputs": [
            {
                "simpleText":{
                    "text": `다음 중 궁금한 연산자를 선택해주세요!`
                }
            },
            {
                "quickreplies":[
                    {
                        "label": "=",
                        "action": "message",
                        "messageText": "대입연산자입니다."                    

                    },
                    {
                        "label": "+, -, /, %, *",
                        "action": "message",
                        "messageText": "산술연산자입니다."                    

                    },
                    {
                        "label": "!, ~, ++, --, *, &,",
                        "action": "message",
                        "messageText": "단항연산자입니다."                    

                    },
                    {
                        "label": "&, ^, |",
                        "action": "message",
                        "messageText": "논리연산자입니다."                    

                    },
                    {
                        "label": ">>, <<",
                        "action": "message",
                        "messageText": "이동연산자입니다."                    

                    },
                    {
                        "label": "<, >, <=, >=, ==, !=",
                        "action": "message",
                        "messageText": "관계연산자입니다."                    

                    },
                    {
                        "label": "&&, ||",
                        "action": "message",
                        "messageText": "논리연산자입니다."                    

                    },
                    {
                        "label": "?:",
                        "action": "message",
                        "messageText": "삼항연산자입니다."                    

                    },
                    {
                        "label": "*=, +=, -=....",
                        "action": "message",
                        "messageText": "복합대입연산자입니다."                    

                    },
                    
                ]
            }

        ]
    }

}




c.comments = function(){
    return{
        "output": [
            {
                "simpleText":{
                    "text": `c언어에서 주석을 사용하려면
                    한줄주석은 '//'뒤에 붙이고
                    여러줄 주석은 '/*'와 '*/'사이에 넣으면 됩니다.`
                }
            }
        ]
    }
}
c.dataformat = function(){
    return{
        "output": [
            {
                "simpleImage":{
                    "imageUrl" : "https://storage.googleapis.com/devi_storage_1518/lani/c_%EC%9E%90%EB%A3%8C%ED%98%95.png",
                    "altText": "c언어의 자료형입니다."

                }
            }
        ]
    }
}

module.exports = c;
