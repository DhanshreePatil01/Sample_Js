const a=10;

function show(){
    console.log('Hello');
}


export function display(){
    console.log('Named export');
}
export default {a,show}