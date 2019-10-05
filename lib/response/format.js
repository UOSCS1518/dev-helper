const fs = require('fs')

function getResponseFormat(category, type) {
    const content = fs.readFileSync(`${__dirname}/format/${category}.json`)
    return content.toString('utf-8')
}



module.exports = {
    
}