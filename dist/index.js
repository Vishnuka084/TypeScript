"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sound() {
        console.log(`${this.name} sound`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
}
let animal = new Animal('Animal', 10);
let dog = new Dog('dog', 10, 'Dog breed');
console.log(animal);
console.log(dog);
animal.sound();
dog.sound();
