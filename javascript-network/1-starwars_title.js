//write a script that prints the title of a Star War movie where the episode number matches the given integer.

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/:id'

request.get(url, (body)){
    const object = JSON.parse(body);
    object.results.forEach(function (film){
        console.log(films.id);
    })
}

