//hoisting--hoisting lets you use functions and variables before its declaration.

console.log('a-->',a);

var a=10;                    //undefined

//console.log('b-->',b);    //Cannot access 'b' before initialization
let b=20;

//console.log('c-->',c);
const c=90;                  //Cannot access 'c' before initialization

show();

function show(){
    console.log('Hello dhanshree');
}

//anonymus function can not be hoisted.
//sum(5,5);

const sum=(a,b)=>{
    let c=a+b;
    console.log('sum',c);       //Cannot access 'sum' before initialization
}