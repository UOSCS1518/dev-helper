const c = {}

c.comments = function{
    return{
        "output": [
            {
                "simpleText":{
                    "text": "c언어에서 주석을 사용하려면
                    한줄주석은 '//'뒤에 붙이고
                    여러줄 주석은 '/*'와 '*/'사이에 넣으면 됩니다."
                }
            }
        ]
    }
}
c.dataformat = function{
    return{
        "output": [
            {
                "simpleImage":{
                    "imageUrl" : "https://storage.googleapis.com/devi_storage_1518/lani/c_%EC%9E%90%EB%A3%8C%ED%98%95.png"
                    "altText": "c언어의 자료형입니다."

                }
            }
        ]
    }
}

module.exports = c;
