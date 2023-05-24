let res=[
    {
        name: 'Dhanshree',
        age:20
    },
    {
        name:'Poonam',
        age:22
    },
    {
        name: 'Shruti',
        age:18
    },
    {
        name: 'Prachi',
        age:15
    }
]

console.log('Array of obj',res);

console.log('Length Of Obj',res.length);

console.log('first record',res[0])

console.log('third obj name',res[3].name);


//nested Array

let array=[1,2,3,4,[5,6,7,8]];

console.log('array',array);

console.log('Length',array.length);

console.log('printing value',array[3]);

console.log('nested array',array[4][0]);

for(let k=0;k<array.length;k++){
    console.log(array[k]);
}