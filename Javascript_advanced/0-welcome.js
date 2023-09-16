//This is lexical scoping

function welcome(firstName, lastName){
    fullName = firstName," ",lastName;
    function displayFullName(){
        alert(welcome," ",fullName,"!");
    }
    displayFullName();
}
