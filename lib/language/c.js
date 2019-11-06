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
c.function = function(){
    const res = new Response({}, 'function', language)
    return res.basicCard();
}
c.return = function(){
    const res = new Response({}, 'return', language)
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
c.cd_if = function(){
    const res = new Response({}, 'cd_if', language)
    return res.basicCard();
}
c.cd_switch = function(){
    const res = new Response({}, 'cd_switch', language)
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
c.lp_for = function(){
    const res = new Response({}, 'lp_for', language)
    return res.basicCard();
}
c.lp_while = function(){
    const res = new Response({}, 'lp_while', language)
    return res.basicCard();
}
c.library = function(){
    const res = new Response({}, 'library', language)
    return res.basicCard();
}
c.stdlib_header = function(){
    const res = new Response({}, 'stdlib_header', language)
    return res.simpleText();
}
c.name_rule = function(){
    const res = new Response({}, 'name_rule', language)
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
c.struct_array = function(){
    const res = new Response({}, 'struct_array', language)
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

c.operator_detail_quick = function(){
    return  {
        "outputs": [
            {
                "simpleText": {
                    "text": "연산자 종류를 선택헤주세요!"
                }
            }
        ]
        , "quickReplies": [
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
    
            } 
        ],
    }
}
module.exports = c;
