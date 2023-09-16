//write a script that gets the contents of a webpage and stores it in a file.

const request = require ('request');
const fs =  require('fs');

const url = process.arg[2]

request.get(url).pipe(fs.createWriteStream('response.html'))
