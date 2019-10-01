const cpp = require('./cpp')
const python = require('./python')
const c = require('/python')
const default_process = require('./default')

module.exports = {
    default : default_process
    , cpp : cpp
    , python : python
    , c : c
}
