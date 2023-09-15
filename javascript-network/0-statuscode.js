//A script that displays the status code of a GET request

const request =  require('request');
const url = 'https://intranet.alxswe.com/'

request(url, function (error, response){
    if (error){
        console.error(error);
}
    console.log('code: ', response + response.statusCode);

});

