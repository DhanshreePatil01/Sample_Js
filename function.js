//normal function
function show(){
    console.log('Hello');
}
show();

//arrow function
const add=(a,b)=>{
    const result=a+b;
    console.log('result-',result);
}
add(5,5);

//anonymus function--In javascript anonymus function is function that has no name.
//Anonymus function is function that has something unknown or no name.
let sub=function(x,y){
    let c=y-x;
    console.log('SUb-->',c);
}
sub(80,90);