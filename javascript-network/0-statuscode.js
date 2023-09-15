//A script that displays the status code of a GET request

const request =  require('request');
const url = process.arg[2]

request.get(url, {encodin: "utf-8"})
.on("response", (response) => {
    console.log('code: ' + response.statusCode);

});

