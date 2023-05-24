const z=90;
console.log('z-->',z);

//const is like a constant. It can not be redeclred,reassigned.
const a=90;
//a=80;
console.log('a-->',a);

//const is block scoped.
if(a==90){
    const q=78;
    console.log('q-->',q);
}
//console.log('q-->',q); //ReferenceError: q is not defined