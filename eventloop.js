//eventLoop--EventLoop executes the task from event queue when the call stack is empty.

function add(){
    let res=10+10;
    console.log('add',res);
}

function sub(){
    add()
    let sub=20-10;
    console.log('sub',sub);
}

function show(){
    sub()
    console.log('End');
}

show();