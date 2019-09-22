const express = require('express')
const router = express.Router()
const languageDic = require('../../lib/language/index.js')

router.post('/quesition', async (req, res) => {
    const lang = req.body.action.params.language
    const func = req.body.action.params.language_function
    try {
        console.log(lang, func)
        responseTemplate = languageDic[lang][func]();
        responseBody = {
            version: '2.0',
            template: responseTemplate
        }
        res.status(200).send(responseBody)
    } catch (e) {
        console.log(e)
    }
})

router.get('/quesition/test', async (req, res) => {
    const lang = req.query.language
    const func = req.query.language_function
    try {
        responseTemplate = languageDic[lang][func]();
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