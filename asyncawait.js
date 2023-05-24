//async function--returns a promise and await waits for the promise to execute.

function show(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(console.log('Welcome'));
        },1000)
    })
}

async function display(){
    console.log('hello');
    console.log('dhanshree');
    await show();
    console.log('To');
    console.log('Facctum');
}

display();


//2nd ex
const add=async()=>{
    console.log('Hello Faccts');
}

async function f1(){
    console.log('hey');
    await add()
}

f1()

