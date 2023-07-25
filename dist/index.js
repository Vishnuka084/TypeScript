"use strict";
class Dog {
    sound() {
        console.log('dog sound');
    }
}
class Cat {
    walk() {
        console.log('cat sound');
    }
}
function executor(value) {
    if (value instanceof Dog) {
        value.sound();
    }
    else {
        value.walk();
    }
}
