'use strict'

class First { 
    constructor() {
        this.text = 'Привет, я метод родителя!'
    }
    hello() {
        console.log(this.text)
    }   
}


class Second extends First {
    hello(){
        
        super.hello()

        this.hello
        console.log('А я наследуемый метод!')
    }
}
let second = new Second();
second.hello();