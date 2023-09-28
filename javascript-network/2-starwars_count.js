//write a script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');
const id  = 18;
const url = process.argv[2]

//Use the function to count the number of items
request(url, (error, response, body) =>{
    if (error){
        console.error('Error:', error);
    }
    const data = JSON.parse(body);
    const includeWedge = data.results.filter(movie => {
        return movie.characters.some(characterUrl => characterUrl.includes('/' + id + '/'));
    })
    console.log(includeWedge.length)
   })
