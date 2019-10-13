const lan = 'Java'

const Response = require('../response')
const java = {}

java.father = function(){
    const res = new Response({},'FATGER', 'JAVA')
    return res.simpleText()
}
java.list = function(){
    const res = new Response({}, 'LIST', 'JAVA')
    return res.simpleText()
}
java.number = function(){
    const res = new Response({}, 'NUMBER', 'JAVA')
    return res.simpleText();
}
java.char = function(){
    const res = new Response({}, 'CHAR', 'JAVA')
    return res.simpleText();
}
java.variable = function(){
    const res = new Response({}, 'VARIABLE', 'JAVA')
    return res.simpleText();
}
java.comments = function(){
    const res = new Response({}, 'COMMENTS', 'JAVA')
    return res.simpleText();
}
java.semi_colon = function(){
    const res = new Response({}, 'SEMI_COLON', 'JAVA')
    return res.simpleText();
}
java.constant = function(){
    const res = new Response({}, 'CONSTANT', 'JAVA')
    return res.simpleText();
}
java.operator = function(){
    const res = new Response({}, 'OPERATOR', 'JAVA')
    return res.simpleText();
}
java.boolean = function(){
    const res = new Response({}, 'BOOLEAN', 'JAVA')
    return res.simpleText();
}
java.const = function(){
    const res = new Response({}, 'CONST', 'JAVA')
    return res.simpleText();
}
java.scope = function(){
    const res = new Response({}, 'SCOPE', 'JAVA')
    return res.simpleText();
}
java.class = function(){
    const res = new Response({}, 'CLASS', 'JAVA')
    return res.simpleText();
}
java.inheritance = function(){
    const res = new Response({}, 'INHERITANCE', 'JAVA')
    return res.simpleText();
}
java.methods = function(){
    const res = new Response({}, 'METHODS', 'JAVA')
    return res.simpleText();
}

module.exports = java