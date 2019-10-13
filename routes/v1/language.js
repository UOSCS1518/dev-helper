const express = require('express')
const router = express.Router()
const languageDic = require('../../lib/language/index.js')
const util = require('util')
router.post('/question', async (req, res) => {
    let lang = req.body.action.params.language
    let func = req.body.action.params.category
    try {
        console.log(`language : ${lang}`)
        console.log(`category : ${func}`)
        if(isEmpty(lang)) {
            lang = 'default'
        }
        if(languageDic[lang][func] === undefined || isEmpty(func)) {
            lang = 'default'
            func = 'default'
        }
        responseTemplate = languageDic[lang][func]();
        responseBody = {
            version: '2.0',
            template: responseTemplate
        }
        console.log(util.inspect(responseBody))
        res.status(200).send(responseBody)
    } catch (e) {
        console.log(e)
    }
})

router.get('/question/test', async (req, res) => {
    let lang = req.query.language
    let func = req.query.category
    try {
        if(isEmpty(lang)) {
            lang = 'default'
        }
        if(typeof languageDic[lang][func] === 'undefined' || isEmpty(func)) {
            lang = 'default'
            func = 'default'
        }
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
