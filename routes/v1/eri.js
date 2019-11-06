const express = require('express')
const eri = require('../../lib/eri')
const router = express.Router()

router.post('/question', async (req, res) => {
    try {
        const errorMessage = typeof req.query.errorMessage === "string" ? req.query.errorMessage.toLowerCase() : ''
        const responseBody = {
            version: '2.0',
            template: await eri.response(errorMessage)
        }
        res.status(200).send(responseBody)
    } catch (e) {
        console.log(e)
        res.status(200).send({
            "version": "2.0",
            "template": {
                "outputs": [
                    {
                        "simpleText": {
                            "text": "잘 모르겠어요.."
                        }
                    }
                ]
            }
        })
    }
})

router.get('/question/test', async (req, res) => {
    const errorMessage = typeof req.query.errorMessage === "string" ? req.query.errorMessage.toLowerCase() : ''
    const responseBody = {
        version: '2.0',
        template: await eri.response(errorMessage)
    }
    res.json({response : responseBody})
})

module.exports = router;