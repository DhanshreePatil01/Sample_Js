//Synchronous--Synchronous code is a code that is executed in the order it is written.

function display(){
    let d=2*2;
    console.log('Square',d);
}
display();

//Asynchronous---Asynchrous code is a code that is executed independently of the main program flow.
//program will not wait for asynchronous task to complete.

setTimeout(show,1000);

function show(){
    console.log('Hello dhanshree');
}

function print(){
    console.log('a');
    console.log('b');
    setTimeout(()=>{
        console.log('c');
    },3000);
    console.log('d');
    console.log('e');
}
print()