const express = require('express')
const router = express.Router()
const languageDic = require('../../lib/language/index.js')

router.post('/quesition', async (req, res) => {
    const lang = req.body.actions.params.language
    const func = req.body.actions.params.language_function
    try {
        responseTemplate = languageDic[lang][func];
        responseBody = {
            version: '2.0',
            template: responseTemplate
        }
        res.status(200).send(responseBody)
    } catch (e) {
        console.log(e)
    }
})

module.exports = router