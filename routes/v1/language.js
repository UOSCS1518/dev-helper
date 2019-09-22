const express = require('express')
const router = express.Router()
const lang = require('../../lib/language/index.js')
/**
 * {
 "userRequest": {
    "timezone": "Asia/Seoul",
    "params": {},
    "block": {
      "id": "<블록 id>",
      "name": "<블록 이름>"
    },
    "utterance": "<사용자 발화>",
    "lang": "kr",
    "user": {
      "id": "<사용자 botUserKey>",
      "type": "botUserKey",
      "properties": {
        "plusfriendUserKey": "<카카오톡 채널 사용자 id>"
      }
    }
  },
  "contexts": [],
  "bot": {
    "id": "<봇 id>",
    "name": "<봇 이름>"
  },
  "action": {
    "name": "<스킬 이름>",
    "clientExtra": null,
    "params": {},
    "id": "<스킬 id>",
    "detailParams": {}
  }
}
 */
router.post('/quesition', async (req, res) => {
    try {
        


    } catch (e) {
        console.log(e)
    }
})

module.exports = router