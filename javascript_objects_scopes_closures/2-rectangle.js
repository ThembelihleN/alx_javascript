#!/usr/bin/node
//A rectangle class
class Rectangle{
    constructor(w,h){
        if ( w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
}
//module for exportation
module.exports = Rectangle

