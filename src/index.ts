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
