"use strict";
class Student {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
const student = new Student("Mahinda", 90, { city: 'Kaluthara', postal: 12500 });
console.log(student);
