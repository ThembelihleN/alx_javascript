//A script that displays the status code of a GET request

const req =  require('request');
req('https://intranet.alxswe.com/', function (error, response)){
    if (error){
        console.error(error);
}
    console.log('code: ', response + response.statusCode);

}


