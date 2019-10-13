const fs = require('fs')

const getResponseFormat = (category, language) => {
    let filePath;
    if(isEmpty(language)) {
        filePath = `${__dirname}/format/common.json`
    }
    else {
        filePath = `${__dirname}/format/${language}.json`;
    }

    const json = require(filePath);
    const content = json[category];
    return content;
}

const formating = function(content, obj) {
    for(let i in content) {
        for(let key in obj){
            if(typeof content[i] !== 'string')  continue;
            
            let regexp = new RegExp(['__', key, '__'].join(''), 'g');
            content[i] = content[i].replace(regexp, obj[key])
        }
    }

	return content;
}

module.exports = (obj, category, language) => {
    let content = getResponseFormat(category, language);
    content = formating(content, obj)

    return content;
};