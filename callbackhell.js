let result=()=>{
    setTimeout(()=>{
        console.log('one');
        setTimeout(()=>{
            console.log('Two');
            setTimeout(()=>{
                console.log('Three');
                setTimeout(()=>{
                    console.log('Four');
                    setTimeout(()=>{
                        console.log('Five');
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

result()