const fs = require('fs');
const mendeleevStringify = require('mendeleev-stringify');

module.exports = (filepath) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('Unable to read file');
        }
        else {
            data.split('\r\n').forEach((element) => {
                console.log(mendeleevStringify(element));
            })
        }
    })
};