//array declaration

let color=["red","blue","green","cyan","pink"];

//printing array

console.log('color array---',color);

//length of the array

console.log('Length--',color.length);

//converting array to string----toString() method

let str=color.toString();
console.log('String array---',str);

//converting array to string---join() method

let str1=color.join();
console.log('String array---',str1);

//sort the array---sort() method

let colorSort=color.sort();
console.log('Sorted Array---',colorSort);

let number=[99,22,341,12,55,88,0];

let num=number.sort(function(a,b){return a-b});
console.log('SOrted number----',num);

//last element of an array
console.log("last element---",color[color.length-1]);

//second last element
console.log("Second Last element---",color[color.length-2]);

//add an array item to last index---push() method
let add=color.push("gray");

console.log('Push--',color);

//delete an array item from last---pop() method

let del=color.pop();

console.log("pop---",color);

//Loop over an array

console.log('Printing array elements with its index---');
color.forEach((val,i)=>{
    console.log(val,i);
})

console.log("Printing Array elements only");
color.forEach((val,i)=>{
    console.log(val);
})

//remove an array item from start position---shift() method

color.shift();
console.log('Shift Method---',color);

//add array item from start----unshift() method

color.unshift("violet","white","green","purple");
console.log("unshift method",color);

//find index of an array item---indexOf() method

let res=color.indexOf("white");

console.log("Index of white---",res);

//if an array contains an specified item---includes() method

let check=color.includes("red");

console.log("includes method---",check);


//splice() method----add or delete item from an array

color.splice(0,2);
console.log('splice method for delting item----',color);

color.splice(2,0,"black","yellow");
console.log("Splice method for adding item----",color);

//slice() method----slice() method slices out piece of an array into an new array

let sl=color.slice(2);
console.log("Slice method---",sl);

let text="I am dhanshree";
let slicedArray=text.slice(4,10);

console.log("Sliced text----",slicedArray);

//split() method---split() method splits the string into array of substrings.

let textStr="Welcome to Facctum";
console.log("Split method for character split----",textStr.split(''));

console.log('Split method for word split----',textStr.split(" "));

console.log('Split method for word split with index----',textStr.split(' ',1));

//Concatenating Array

let arr1=['abc','cde','fgh','ijk'];

let arr2=['lmn','opq','rst','uvw'];

let merge = [...arr1,...arr2,"xyz"]
console.log('Mergerd Array',merge);

let result=arr1.concat(arr2)
console.log("Concatenate Mathod---",result);

//reverse array---reverse() method

console.log(color.reverse());