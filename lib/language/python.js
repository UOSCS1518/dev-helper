const Response = require('../response')
const python = {}

python.list = function() {
    const res = new Response({}, 'LIST', 'PYTHON')
    return res.simpleText();
}

python.array = function() {
    const res = new Response({}, 'ARRAY', 'PYTHON')
    return res.simpleText();
}

python.function = function() {
    const res = new Response({}, 'FUNCTION', 'PYTHON')
    return res.simpleImage();
}

python.dtype = function() {
    const res = new Response({}, 'DTYPE', 'PYTHON')
    return res.simpleImage()
}

module.exports = python;
