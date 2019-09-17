const express = require('express')
const router = express.Router()

router.post('/1', (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "hello I'm Ryan"
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
})

router.get('/2', (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: "hello I'm Ryan"
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
})

module.exports = router