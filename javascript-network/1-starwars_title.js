//write a script that prints the title of a Star War movie where the episode number matches the given integer.

const req = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/:id'

//const object = JSON.parse(data);
req.get(url, {encoding: 'utf-8'})
.on('data', data => {
    console.log(data.films)
})
