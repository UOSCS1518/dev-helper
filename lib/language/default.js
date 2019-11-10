const Response = require('../response')

const default_dic = {};

default_dic['array'] = function() {
    const res = new Response({}, 'ARRAY')
    return res.simpleText()
}

default_dic['default'] = function() {
    return {
        outputs: [
            {
                return : {
                simpleText: {
                    text: "이 기능은 존재하지 않거나 아직 개발중인 기능입니다. :)"
                    }
                }
            }
        ]
    }
}

module.exports = default_dic

