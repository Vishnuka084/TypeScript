/*
let numbers:number[]=[10,20,30,40];
console.log(numbers[0]);//10

//-----------------
let strings:Array<string>=['','','','']

//-----------------
strings.push('10');//add
strings.pop();//rid the last element

///=========>tuple
let student:[string,number]=['saman',20];

// ---------
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

for (let temp of numbers) {
    console.log(temp);
}
*/

// ---------
/*
let names=['Ranil','Mahinda','Basil'];
console.log(names);

for(let x=0;x<names.length;x++){
   // console.log(names[x]);
}

//=============
for (const temp of names){
    console.log(temp);
}*/


//<<<<<<<<<<<<<<<<  Function >>>>>>>>>>>>>>>>

//basic function
/*
function sayHello(message: string):void{
    //console.log('Message :'+message);
    console.log(`Message : ${message}`);
}

sayHello('Hello folks!');*/

//Arrow function
/*
const helloIsuru = (message:string):void=>{
    console.log(message);
}
helloIsuru('Hello  Isuru');*/

//function expression
/*
const helloIsuru = function (message:string):void{
    console.log(message);
}
helloIsuru('heelo!');*/


//-----optional parameter-----
/*
function horekda(name:string,isThief?:boolean):void{
    if (isThief){
        console.log(`${name} horaaaa!`);
    }else {
        console.log(`${name} hoda amathi!`);

    }
}

////default parameter---->>
function sum(numberOne:number,numberTwo=10):void{
    console.log(numberOne+numberTwo);
}

horekda('Ranil',true);
horekda('Anura',)*/


//----red parameter

/*
function sum(...values:number[]):number{
    let count:number=0;
    for (let temp of values){
        count+=temp;
    }
    return count;
}
console.log(sum(10,20,30,40));
*/



///////---Object--------->
//literals base----01
/*

const student={
    name:'Mahinda',
    age:90,
    address:{
        city:'kaluthara',
        postal:12500
    }
};


// -------------
console.log(student);
console.log(student.name);
console.log(student.address);
console.log(student.address.city);*/


//interface base -----02
/*

interface student{
    name:string;
    age:number;
    address:{
        city:string;
        postal:number;
    }
}

const student:student={
    name:'Mahinda',
    age:90,
    address:{
        city:'kaluthara',
        postal:12500
    }
};


// -------------
console.log(student);
console.log(student.name);
console.log(student.address);
console.log(student.address.city);*/


// ---------------------------------------

/*
class Student{
    name:string;
    age:number;
    address:{
        city:string;
        postal:number;
    }

    constructor(name:string,age:number,address:{city:string,postal:number}) {
        this.name=name;
        this.age=age;
        this.address=address;

    }

}

const student= new Student("Mahinda",90,{city:'Kaluthara',postal:12500});
console.log(student);*/


/// -----Optional property ----
/*interface Animal{
    name:string;
    age?:number;//optional
}

const a1:Animal={
    name:'Dog'

}
const a2:Animal={
    name:'Dog',
    age:10
}*/


/// -----ReadOnly property ----
/*
interface Animal{
    name:string;
    age?:number;//optional
    readonly isActive:boolean; //readOnly

}

const a1:Animal={
    name:'Dog',
    isActive:true

}
const a2:Animal={
    name:'Dog',
    age:10,
    isActive:false

}
a1.isActive=false;
*/

/*

  <<<< extends >>>>>

interface Person{
    name:string;
    age:number;
    canEnglish:boolean
}

interface Ranil extends Person{
    horekda:boolean;
}

interface Anura extends Person{

}


const ranil:Ranil={name:'Ranil',age:35,horekda:true,canEnglish:true}
const anura:Anura={name:'Anura',age:30,canEnglish:false}
*/

/*
// ---- inheritance ----
=======
// ---- inheritance ---- 01
>>>>>>> 86f030572983661adae012ad071220752170eda9
class Animal{
    name:string;
    age:number;

    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;
    }
    sound():void{
        console.log(`${this.name} sound`);
    }
}


class Dog extends Animal{
    breed:string;
    constructor(name:string,age:number,breed:string) {
        super(name,age);
        this.breed=breed;
    }
}

let animal= new Animal('Animal',10);
let dog=new Dog('dog',10,'Dog breed');


console.log(animal);
console.log(dog);
animal.sound();
<<<<<<< HEAD
dog.sound();*/

/*
/// -----Abstraction---
abstract class Phone1{
    private displaySize:number;
    constructor(displaySize:number) {
        this.displaySize=displaySize;
    }
    call():void{
        console.log('calling....!');
    }
    message():void{
        console.log('messaging ...!');
    }

    abstract fileTransfer():void;


} // Enjeck

abstract class PhoneOshada extends Phone1{

    dance():void{
        console.log('dancing!!!!..');
    }
}

class hasanthaPhone extends PhoneOshada{
    fileTransfer():void {
        console.log('hureeee!!!');
    }
}
*/

/// <<<, Generic >>>>>>
function getData<T>(value:T):T{
    return value;
}

let numberValue= getData<number>(10);
let stringValue= getData<string>('Nimal');


console.log(numberValue);
console.log(stringValue);