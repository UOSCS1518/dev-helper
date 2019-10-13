const Response = require('../response')
const python = {}
const language = 'python'

python.list = function() {
    const res = new Response({}, 'list', language)
    return res.simpleText();
}

python.array = function() {
    const res = new Response({}, 'array', language)
    return res.simpleText();
}

python.function = function() {
    const res = new Response({}, 'function', language, true)
    return res.basicCard();
}

python.data_type = function() {
    const res = new Response({}, 'data_type', language)
    // return res.listCard()
    return {
        "outputs": [
            {
                "listCard": {
                    "header": {
                        "title": "python의 자료형 목록입니다."
                    },
                    "items": [
                        {
                            "title": "리스트 자료형",
                            "imageUrl": "",
                            "link": "https://wikidocs.net/14"
                        },
                        {
                            "title": "튜플 자료형",
                            "imageUrl": "",
                            "link": "https://wikidocs.net/15"
                        }
                    ]
                }
            }
        ]
    }
}

python.for_loop = function() {
    const res = new Response({}, 'for_loop', language, true)
    return res.basicCard()
}

module.exports = python