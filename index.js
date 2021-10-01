'use strict'

class First { 
    constructor(text) {
        this.text = 'Привет, я метод родителя!'
    }
        hello() {
             console.log(this.text)
        }   
}
const first = new First();


class Second extends First {
    constructor(text) {
        super(text);
        this.text = 'А я наследуемый метод!'
    } 
}
let second = new Second();

first.hello();
second.hello();