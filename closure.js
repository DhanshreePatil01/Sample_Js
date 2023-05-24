//closure-- You have a closure when function reads and modifies value of a variable  outside its context
//closure gives you access to outer function scope from inner function.

let count=1;

function outer(){
    console.log('Outer',count);

    function inner(){
        for(count=10;count<21;count++){
            console.log(count);
        }
    }
    console.log('Print values between 10 to 20');
    inner();
}

outer();