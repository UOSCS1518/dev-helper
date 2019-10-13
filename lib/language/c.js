const Response = require('../response')
const c = {}
const language = 'c'

c.operator = function(){
    const res = new Response({}, 'operator', language)
    return res.basicCard();
}
c.operator_img = function(){
    const res = new Response({}, 'operator_img', language)
    return res.simpleImage();
}
//수정중
c.operator_detail = function(){
    const res = new Response({},'operator_details', language)
    return res.simpleText();
}
c.comments = function(){
    const res = new Response({},'comments', language)
    return res.simpleText();
}
c.format_specifier = function(){
    const res = new Response({}, 'format_specifier', language)
    return res.basicCard();
}

module.exports = c;
