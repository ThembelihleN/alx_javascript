//write a script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/'
const count  = films.filter(18).length;

//Use the function to count the number of items
request(url, function (){
    console.log(count + 1);
})
