"use strict";
let age = 25;
let studentName = 'saman kumar';
let isActive = true;
let myObject = null;
let undefinedData = undefined;
let animals = ['', '', ''];
let vehicles = ['', '', ''];
let student = { name: 'ranil', age: 20 };
let dog = { name: 'TOGO', bread: 'Husky', age: 1 };
console.log(dog.bread);
function getAgeAfterThreeY(age, name) {
    if (name) {
        console.log(`Hello ${name}`);
    }
    else {
        console.log(`Hello age ${age}`);
    }
    return age + 3;
}
let myAge = getAgeAfterThreeY(10);
let myNewAge = getAgeAfterThreeY(25, 'mahinda');
let rate = 1.5;
rate = 2.5;
