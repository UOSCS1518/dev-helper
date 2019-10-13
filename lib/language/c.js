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
//quick 1안 : 한 선언 내부에서 다른 두개의 res를 부른다. +기호로 배열이 합쳐질지 걸림
c.operator_detail = function(){
    const res1 = new Response({},'operator_details_simpleText', language)
    const res2 = new Response({},'operator_details_quick', language)
    return res1.simpleText()+res2.quick();
}/*quick 2안 : 각자 선언을 하고 하나로 합친다.(응답이 output으로 온다는 점이 걸림)
c.operator_detail_simpleText(){
    const res = new Response({},'operator_details', language)
    return res.simpleText();
}
c.operator_detail_quick{
    const res = new Response({},'operator_details_quick', language)
    return res.quick();
}
c.operator_detail = function(){

}
*/
c.comments = function(){
    const res = new Response({},'comments', language)
    return res.simpleText();
}
c.format_specifier = function(){
    const res = new Response({}, 'format_specifier', language)
    return res.basicCard();
}
module.exports = c;
