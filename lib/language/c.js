const Response = require('../response')
const c = {}
const language = 'c'

c.operator = function(){
    const res = new Response({}, 'operator', language)
    return res.basicCard();
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
c.printf = function(){
    const res = new Response({},'printf', language)
    return res.basicCard();
}
c.ex_printf = function(){
    const res = new Response({}, 'ex_printf', language)
    return res.simpleImage();
}
c.format_specifier = function(){
    const res = new Response({}, 'format_specifier', language)
    return res.basicCard();
}
c.scanf = function(){
    const res = new Response({}, 'scanf', language)
    return res.basicCard();
}
c.ex_scanf = function(){
    const res = new Response({}, 'ex_scanf', language)
    return res.simpleImage();
}
c.scanf_s = function(){
    const res = new Response({},'scanf_s', language)
    return res.simpleText();
}
c.recursive = function(){
    const res = new Response({}, 'recursive', language)
    return res.basicCard();
}
c.ex_recursive = function(){
    const res = new Response({}, 'ex_scanf', language)
    return res.simpleImage();
}
c.func = function(){
    const res = new Response({}, 'func', language)
    return res.basicCard();
}
c.func_returnvalue = function(){
    const res = new Response({}, 'func_returnvalue', language)
    return res.basicCard();
}
c.func_parameter = function(){
    const res = new Response({}, 'func_parameter', language)
    return res.basicCard();
}
c.ex_func = function(){
    const res = new Response({}, 'ex_func', language)
    return res.basicCard();
}
c.ex_func1 = function(){
    const res = new Response({}, 'ex_func1', language)
    return res.simpleImage();
}
c.ex_func2 = function(){
    const res = new Response({}, 'ex_func2', language)
    return res.simpleImage();
}
c.ex_func3 = function(){
    const res = new Response({}, 'ex_func3', language)
    return res.simpleImage();
}
c.ex_func4 = function(){
    const res = new Response({}, 'ex_func4', language)
    return res.simpleImage();
}
c.control = function(){
    const res = new Response({}, 'control', language)
    return res.basicCard();
}
c.control_ifelse = function(){
    const res = new Response({}, 'control_ifelse', language)
    return res.basicCard();
}
c.control_switch = function(){
    const res = new Response({}, 'control_switch', language)
    return res.basicCard();
}
c.control_switch_s = function(){
    const res = new Response({}, 'control_switch_s', language)
    return res.simpleImage();
}
c.control_switch_c = function(){
    const res = new Response({}, 'control_switch_c', language)
    return res.simpleImage();
}
c.control_forloop = function(){
    const res = new Response({}, 'control_forloop', language)
    return res.basicCard();
}
c.control_while = function(){
    const res = new Response({}, 'control_while', language)
    return res.basicCard();
}
c.stdlib = function(){
    const res = new Response({}, 'stdlib', language)
    return res.basicCard();
}
c.stdlib_header = function(){
    const res = new Response({}, 'stdlib_header', language)
    return res.simpleText();
}
c.namingrule = function(){
    const res = new Response({}, 'stdlib_header', language)
    return res.simpleText();
}
c.struct = function(){
    const res = new Response({}, 'struct', language)
    return res.basicCard();
}
c.ex_struct = function(){
    const res = new Response({}, 'ex_struct', language)
    return res.simpleImage();
}
c.array = function(){
    const res = new Response({}, 'array', language)
    return res.basicCard();
}
c.ex_array1 = function(){
    const res = new Response({}, 'ex_array1t', language)
    return res.simpleImage();
}
c.ex_array2 = function(){
    const res = new Response({}, 'ex_array2', language)
    return res.simpleImage();
}
c.array2dim = function(){
    const res = new Response({}, 'array2dim', language)
    return res.basicCard();
}
c.ex_array2dim = function(){
    const res = new Response({}, 'ex_array2dim', language)
    return res.bsimpleImage();
}
c.arrayandpointer = function(){
    const res = new Response({}, 'arrayandpointer', language)
    return res.basicCard();
}
c.pointer = function(){
    const res = new Response({}, 'pointer', language)
    return res.basicCard();
}

module.exports = c;
