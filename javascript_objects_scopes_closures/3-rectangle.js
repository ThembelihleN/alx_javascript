//#!/usr/bin/node
//Another rectangle class

class Rectangle{
    constructor(w,h){
        if ( w > 0 && h > 0) {
            this.width = w;
            this.height = h;

                let sizeY = this.height;
                    while (sizeY > 0) {
                        console.log('X'.repeat(this.width));
                        sizeY -= 1;
            }
        }
    }
}

//module for exportation
module.exports = Rectangle
