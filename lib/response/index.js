const format = require('./format.js')

class Response {
    constructor(responseData) {
        for(let r in responseData) {
            this[r] = responseData[r]
        }
    }

    simpleText() {

    }

    simpleImage() {

    }

    basicCard() {

    }

    listCard() {

    }

    carousel() {

    }
}