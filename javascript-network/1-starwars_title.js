//write a script that prints the title of a Star War movie where the episode number matches the given integer.

/*
const request = require('request');
const url = process.arg[2]

request.get(url, (body))
    const object = JSON.parse(body);
    object.results.forEach(function (film){
       console.log(films.id);
    })
*/

const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/' + id;

request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    const jsonData = body;
    const parsedData = JSON.parse(jsonData);
    console.log(parsedData.title);
})