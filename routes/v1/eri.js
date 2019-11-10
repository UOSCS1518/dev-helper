const express = require('express')
const eri = require('../../lib/eri')
const router = express.Router()
const fs = require('fs')
const filePath = '../../EriLog.txt'
router.post('/question', async (req, res) => {
    try {
        const errorMessage = typeof req.body.action.params.errorMessage === "string" ? req.body.action.params.errorMessage.toLowerCase() : ''
        const responseBody = {
            version: '2.0',
            template: await eri.response(errorMessage)
        }
        res.status(200).send(responseBody)
    } catch (e) {
        console.log(e)
        fs.writeFileSync(filePath, e, 'utf8')
        fs.writeFileSync(filePath, '\n', 'utf8')

        res.status(200).send({
            "version": "2.0",
            "template": {
                "outputs": [
                    {
                        "simpleText": {
                            "text": "입력해주신 에러에 대해 아직 잘 모르겠어요..\n금방 해결책을 공부해오도록 할게요!"
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