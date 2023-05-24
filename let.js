let a=10;
console.log('a-->',a);

//let cannot be redeclared 
let b=90;

//it can be reassigned
b=80;
console.log('b-->',b);

//let is block scoped
if(b==80){
  let f=11;
  console.log('f-->',f);
}
//console.log('f-->',f); //ReferenceError: f is not defined