//write a script that gets the contents of a webpage and stores it in a file.

const request = require ('request');
const fs =  require('fs');
const url = process.argv[2]
//request.get(url).pipe(fs.createWriteStream('response.html'))
const file = process.argv[3];
request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    fs.writeFile(file, body, 'utf-8', (error) => {
        if (error) {
            console.error('Error:', error);
        }
    })
})