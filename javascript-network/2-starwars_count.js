//write a script that prints the number of movies where the character “Wedge Antilles” is present.

const req = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/'

//const object = JSON.parse(data);
req.get(url, {encoding: 'utf-8'})
.on('data', data => {
    console.log(data.films)
})
