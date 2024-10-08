"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    run() {
        console.log('run');
    }
}
class Dog extends Animal {
    // 子类构造函数中需要调用super
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    run() {
        console.log('dog run');
    }
    eat() {
        console.log('dog eat');
    }
}
const dog = new Dog('柯基', 3);
dog.run();
dog.eat();
console.log(dog.name);
