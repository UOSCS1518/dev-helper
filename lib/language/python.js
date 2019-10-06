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
    return res.simpleImage();
}

python.data_type = function() {
    const res = new Response({}, 'data_type', language, true)
    return res.simpleImage()
}

python.for_loop = function() {
    const res = new Response({}, 'for_loop', language, true)
    return res.simpleImage()
}

module.exports = python