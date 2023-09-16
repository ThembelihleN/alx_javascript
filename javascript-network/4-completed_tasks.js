//write a script that computes the number of tasks complteed by the user.

const request = require ('request');
const url = process.arg[2]

request.get(url, function (userId, completed){
    if (id.completed === true){
        return completed + 1;
    }
})