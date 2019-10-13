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
    return res.listCard()
}

python.for_loop = function() {
    const res = new Response({}, 'for_loop', language, true)
    return res.basicCard()
}

python.inner_function = function() {
    const res = new Response({}, 'inner_function', language)
    return res.simpleText()
}

python.outer_function = function() {
    const res = new Response({}, 'outer_function', language)
    return res.simpleText()
}

python.test = function() {
    return {
        "outputs": [
            {
                "simpleText": {
                    "text": "되나"
                }
                , "nextAction": [ "1000", "2000", "3000" ]
                , "quickReplies": [ { "action": "message", "label": "🇰🇷한국어", "messageText": "한국어로 번역을 시작해줘" }, { "action": "message", "label": "🇺🇸영어", "messageText": "영어로 번역을 시작해줘" }, { "action": "message", "label": "🇯🇵일본어", "messageText": "일본어로 번역을 시작해줘" } ]
            }
        ]
    }
}
module.exports = python