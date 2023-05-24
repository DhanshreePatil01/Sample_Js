//Class

class person{
    constructor(name,age){
     this.name=name,
     this.age=age
    }

    show(){
        console.log(`Hello I am ${this.name} and my age ${this.age}`);
    }
}

let obj=new person("Dhanshree",22);
obj.show()

//arrow function

const square=(num)=>{
    return num*num;
}
console.log(square(2));

//function parameter default value
function show(num=3){
    return num*num*num
}

console.log(show());

console.log(show(5));

//Template Literal----multi line string

console.log(`hii I am
dghhgghds
dfhdgfjdf
fdufhdhfhdf`);

let name="pooja";
let age=20;

console.log(`My name is ${name} and my age is ${age}`);

//destructring arrays
const arr=[10,20,30,40];

const [one,two,three]=arr

console.log(one);

const [first,,,last]=arr
console.log(last);

//object destructring
let og={a:1,b:2}

const {a,b}=og;

console.log(a);
console.log(b);

//spread Operator

let ar1=[1,2,3,4]

let ar2=[5,6,7,8]

console.log([...ar1,...ar2,9,10]);

//let,const to replace var

//console.log(a1);
let a1=10;

//console.log(b1);
const b1=20;

console.log(c1);
var c1=30;

//Promise

let promise=new Promise((resolve,reject)=>{
    let random=Math.random()*100;

    if(random>30){
        resolve(random)
    }
    else{
        reject(`${random} is low`)
    }
})

promise
  .then(res=>{
    console.log(`Random is ${res}`);
  })
  .catch(err=>{
    console.log(err);
  })


 // *********ES7 Features*******************

 //Inculdes

 let z=[1,2,3,4]
 console.log(z.includes(1));

 console.log(z.includes(5));

 //exponentiation Operator
 console.log(2**3);


 //**********ES8 Features ********************/

 //async await

 function show(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('Hello'));
        },1000)
    })
 }


 async function display(){
    console.log('1');
    console.log('2');
    await show()
    console.log('3');
 }

 //object.values()

 let r1={
    q:1,
    w:2,
    e:3,
    r:40
 }

 let r=Object.values(r1)

 console.log(r);

 //object.entries()

 let d=Object.entries(r1);
 console.log(d);

 //padStart

 let text="Dhan"

 let check1=text.padStart(8,'p')
 console.log(check1);

 let end=text.padEnd(9,'e')
 console.log(end);

 //Trailing Commas

 let array=[
    1,2,3,,
 ]

 console.log("trailing commas",array.length);


 //Promise.finally()----------------

 let myPromise=new Promise((resolve,reject)=>{
    let x=Math.random();

    if(x>0.5){
        resolve(x)
    }
    else
    {
        reject(`${x} is low`)
    }
 })

 myPromise

   .then(res=>{
    console.log(` x is - ${res} `);
   })
   .catch(err=>{
    console.log(err);
   })
   .finally(check=>{
    console.log('Promise completed');
   })

   //rest and spread 

   //rest 
   function myBio(fname,lname,...other){
    return other;
   }

   let test=myBio("cat","dog","lion","tiger","elephant")

   console.log(test);

   //spread

   let t1=["poonam","priya"]

   let mix=[...t1,"priti"]
   console.log(mix);

   //regex----Pattern Matching

   const regex=/^[0-9]{6}$/
   const matcher=regex.test('1234568')
   console.log(matcher);
   