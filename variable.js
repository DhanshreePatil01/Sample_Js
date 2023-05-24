var a=10;
console.log('a-->',a);

// var can be redeclared, reassigned, and it is having function scope. 
var b=90;
var b=80;
console.log('b-->',b);

//var is not block scoped it is function scoped
if(b==80) {
    var c=10;
    console.log('c-->',c);
}
console.log('c-->',c);

//var is function scoped
function add(){
    var d=60;
    console.log('d-->',d);
}
//console.log('d-->',d);  //ReferenceError: d is not defined