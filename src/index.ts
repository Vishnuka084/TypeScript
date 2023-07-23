//variable =>>>>
let age:number=25;
let studentName:string='saman kumar';
let isActive:boolean=true;
let myObject:null=null;
let undefinedData:undefined=undefined;
let animals:Array<string>=['','',''];
let vehicles:string[]=['','',''];
let student:{name:string,age:number}={name:'ranil',age:20};

//--------------
interface Animal{
    name:string;
    bread:string;
    age:number
}
let dog:Animal={name:'TOGO',bread:'Husky',age:1};
console.log(dog.bread);


//-------function-------

function getAgeAfterThreeY(age:number,name?:string):number{
    if (name){
        console.log(`Hello ${name}`);
    }else {
        console.log(`Hello age ${age}`);

    }
    return age+3;
}
let myAge:number=getAgeAfterThreeY(10);
let myNewAge:number=getAgeAfterThreeY(25,'mahinda');
//---------------------
let rate:number=1.5;
rate=2.5;
