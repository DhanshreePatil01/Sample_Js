//filter--filter method executes a callback function on each element of an array.

let array=[10,20,30,40,50]

console.log("10 to 50");
let res=array.filter(n=>{
    console.log(n);
})

let arr=[1,2,3,4,5]
console.log("1 to 5");
let test=arr.forEach(a=>{
    console.log(a);
})


let tt=["a","b","c","d","e"];
console.log('a to z');
let abc=tt.map(t=>{
    console.log(t);
})

//reduce method--reduce method iterates through an array and returns a single value.
let z=[10,20,30,40,50];
let jj=z.reduce((a,b)=>{
    return a+b;
    
})

console.log("addition:",jj);