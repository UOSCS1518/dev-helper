

const cpp = {};

cpp.array = function() {
    return {
        outputs: {
            "outputs": [
                {
                    "simpleImage": {
                        "imageUrl": "https://storage.cloud.google.com/devi_storage_1518/lani/cpp_array.png",
                        "altText": "C++ 배열 선언 방법입니다."
                    }
                }
            ]
        } 
    }
}

const stlDic = {
    'Vector' : "https://hyeonstorage.tistory.com/324"
    , 'List' : "https://hyeonstorage.tistory.com/326?category=614599"
    , 'Set' : "https://hyeonstorage.tistory.com/327?category=614599"
    , 'Map' : "https://hyeonstorage.tistory.com/329?category=614599"
    , 'Deque' : "https://hyeonstorage.tistory.com/325?category=614599"
    , 'Queue' : "https://twpower.github.io/76-how-to-use-queue-in-cpp"
    , 'Stack' : "https://twpower.github.io/75-how-to-use-stack-in-cpp"
}

for(let s in stlDic) {
    cpp[s.toLowerCase()] = function() {
        return {
            "outputs": [
                {
                    "simpleText": {
                        "text": stlDic[s]
                    }
                }
            ]
        }
    }
}

cpp.stl = function() {
    return {
        "outputs": [
            {
                "simpleText": {
                    "text": `C++ STL에는 ${Object.keys(stlDic).join(', ')}과 같은 것들이 있습니다.`
                }
            }
        ]
    }
}

// cpp.vector = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": 
//                 }
//             }
//         ]
//     }
// }

// cpp.list = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": "https://hyeonstorage.tistory.com/326?category=614599"
//                 }
//             }
//         ]
//     }
// }

// cpp.set = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": 
//                 }
//             }
//         ]
//     }
// }

// cpp.map = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": 
//                 }
//             }
//         ]
//     }
// }

// cpp.deque = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": "
//                 }
//             }
//         ]
//     }
// }

// cpp.iterator = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": 
//                 }
//             }
//         ]
//     }
// }

// cpp.stack = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": 
//                 }
//             }
//         ]
//     }
// }

// cpp.queue = function() {
//     return {
//         "outputs": [
//             {
//                 "simpleText": {
//                     "text": 
//                 }
//             }
//         ]
//     }
// }


module.exports = cpp; 
