//promise ---Promise in javascript is an object that represents eventual completion and failure of an asynchronous event.

/**
 * promise is having 3 states---
 * 1.pending --Promise is pending means promise is still in progress.
 *   
 * 2.fullfilled -- Promise is fullfilled means promise is completed successfully and has a resulting value.
 * 
 * 3.rejected  -- Promise is rejected means promise is having some error and has a reason for failure.
 * 
 */

function doSometing(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         let res='Dhanshree'
         resolve(res)
        },2000)
    })
}

doSometing()
 .then(function(res){
    console.log(res);
 })
 .catch(function(err){
    console.log('err',err);
 })


 let promise=new Promise((resolve,reject)=>{
    const random= Math.random()

    if(random>0.5){
        resolve(random)
    }
    else{
        reject(`${random} is low`)
    }
 })

 promise
   .then(res=>{
    console.log('Random is-',res);
   })
   .catch(err=>{
    console.log(err);
   })

   //3rd Ex

   let myPromise = new Promise((resolve,reject)=>{
    let x=0;
    if(x==0){
        resolve('X is 0')
    }
    else{
        reject('X is not 0')
    }
   })

   myPromise
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })
    .finally(function(stop){
        console.log('Promise ended');
    })