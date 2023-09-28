//A script that displays the status code of a GET request

const { error } = require('console');
const request =  require('request');
const url = process.arg[2]

request.get(url, (error, response,body) => {
    if (error){
        console.error('Error:', error);
    }
    else{
        console.log("code: " + response.statusCode);
    }
})

