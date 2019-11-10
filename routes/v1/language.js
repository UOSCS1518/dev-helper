const express = require('express')
const router = express.Router()
const languageDic = require('../../lib/language/index.js')
const util = require('util')
const fs = require('fs')
const filePath = '../../laniLog.txt'
router.post('/question', async (req, res) => {
    let lang = req.body.action.params.language
    let func = req.body.action.params.category
    try {
        console.log(`${req.body.userRequest.block.id} - ${req.body.userRequest.block.name}`)
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

        if(typeof responseTemplate === 'undefined') {
            throw {
                lang : lang
                , func : func
            }
        }
        responseBody = {
            version: '2.0',
            template: responseTemplate
        }
        console.log(util.inspect(responseBody))
        res.status(200).send(responseBody)
    } catch (e) {
        console.log(e)
        fs.writeFileSync(filePath, e,'utf8')
        fs.writeFileSync(filePath, '\n', 'utf8')
        
        let text = "잘 모르겠어요.."
        if(typeof e.lang !== 'undefined') {
            text = `${e.lang}의 ${e.func}에 대해 아직 잘 모르겠네요ㅠㅠ\n금방 공부해서 알도록 할게요!`
        }
        res.status(200).send({
            "version": "2.0",
            "template": {
                "outputs": [
                    {
                        "simpleText": {
                            "text": text
                        }
                    }
                ]
            }
        })
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
