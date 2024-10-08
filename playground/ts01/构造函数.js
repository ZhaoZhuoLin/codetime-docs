"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('eat');
    }
    drink() {
        console.log('dirnk');
    }
}
const user1 = new Person("z", 24);
console.log(user1);
