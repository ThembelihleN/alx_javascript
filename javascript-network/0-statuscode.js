//A script that displays the status code of a GET request

const req =  require('request');
req.get('https://intranet.alxswe.com/status', {encoding: 'utf-8'})
.on('response', response => {
    console.log("code:" + response.statusCode);
})