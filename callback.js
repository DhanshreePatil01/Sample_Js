//Callback is a function that is passed as an argument to an another function
function addition(a,b,callback){
    let res=a+b;
    callback(res);
}


addition(10,10,function(sum){
    console.log('Sum--',sum);
})


//2nd Ex
function show(name,callback){
    console.log('Hello'+ name +"...");
    callback()
}

function display(){
    console.log('Say Bye...');
}

show("Dhanshree",display);