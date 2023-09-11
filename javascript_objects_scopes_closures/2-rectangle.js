#!/usr/bin/node
//A rectangle class
class Rectangle{
    constructor(w,h){
        this.width = w
        this.height = h
        if ( w || h <= 0) {
            const emptyObject = Object.create(null);
        }        
    }
}

//module for exportation
module.exports = Rectangle

