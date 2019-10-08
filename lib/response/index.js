const format = require('./format.js')

class Response {
    constructor(obj, category, language, isCommon) {
        obj.language = language
        obj.category = category

        this.obj = obj;
        this.category = category;
        this.language = isCommon ? '' : language;
        this.res = format(this.obj, this.category, this.language);
    }

    simpleText() {
        return {
            "outputs": [
                {
                    "simpleText": {
                        "text": this.res.text
                    }
                }
            ]
        }
    }

    simpleImage() {
        return {
            "outputs": [
                {
                    "simpleImage": {
                        "imageUrl": this.res.image
                        , "altText": this.res.text
                    }
                }
            ]
        }
    }

    basicCard() {
        const res = {
            "outputs": [
                {
                    "basicCard": {
                        "title": this.res.title,
                        "description": this.res.text,
                        "thumbnail": {
                            "imageUrl": this.res.image
                        },
                        "profile": {
                            "imageUrl": this.res.image,
                            "nickname": this.res.title
                        },
                        // "social": {
                        //     "like": 1238,
                        //     "comment": 8,
                        //     "share": 780
                        // },
                    }
                }
            ]
        }
        if(typeof this.res.buttons !== 'undefined') {
            res.buttons = this.res.buttons
        }

        return res;
    }

    listCard() {
        const res = {
            "outputs": [
                {
                    "listCard": {
                        "header": {
                            "title": this.res.title,
                            "imageUrl": this.res.image
                        },
                        "items": this.res.items,
                        "buttons": this.res.buttons
                    }
                }
            ]
        }

        if(typeof this.res.buttons !== 'undefined') {
            res.outputs.listCard.buttons = this.res.buttons
        }

        return res;
    }

    carousel() {
        return {
            "outputs": [
                {
                    "carousel": {
                        "type": "basicCard",
                        "items": this.res.items
                    }
                }
            ]
        }
    }
}

module.exports = Response;