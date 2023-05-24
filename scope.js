var g=100;

function display(){
    let b=69;
    console.log('Local scope--',b);

    if(b==69){
        let v=90;
        console.log('Block Scope--',v);
    }
}

display()

console.log('Global scope--',g);