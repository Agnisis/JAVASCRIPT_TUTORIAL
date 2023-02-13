//promises use in download and takes time to get result 

let p = new Promise((resolve, reject) => {

    let a = 1 + 1;
    if (a == 2) {
        resolve('Success')
    }
    else {
        reject('Failed')
    }
})

p.then((message)=>{
    console.log('====================================');
    console.log("resolve "+message);
    console.log('====================================');
}).catch((message)=>{
    console.log('====================================');
    console.log("reject "+message);
    console.log('====================================');
})

