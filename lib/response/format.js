const fs = require('fs')

const getResponseFormat = (category, language) => {
    let filePath;
    if(!isEmpty(language)) {
        filePath = `${__dirname}/format/${language.toLowerCase()}.json`;
    }
    else {
        filePath = `${__dirname}/format/$lani.json`
    }
    
    const json = require(filePath);
    const content = json[category.toLowerCase()];
    return content;
}

const formating = function(content, obj) {
	for(let key in obj){
		let regexp = new RegExp(['__', key, '__'].join(''), 'g');
		content = content.replace(regexp, obj[key])
	}

	return content;
}

module.exports = (obj, category, language) => {
    let content = getResponseFormat(category, language);
    content.text = formating(content.text, obj)

    return content;
};