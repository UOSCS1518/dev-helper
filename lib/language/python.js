const python = {}

python.list = function() {
    return {
        "outputs": [
            {
                "simpleText": {
                    "text": "그냥 a = [] 하면 됩니다."
                }
            }
        ]
    }
}

python.array = function() {
    return {
        "outputs": [
            {
                "simpleText": {
                    "text": "Python에는 Array(배열) 대신에 List라는 자료구조가 있습니다. List에 대해 알아보시겠어요?"
                }
            }
        ]
    }
}


module.exports = python
