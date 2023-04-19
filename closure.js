// function outer(){
//     let counter=0;
//     function inner(){
//         counter++;
//         console.log('====================================');
//         console.log(counter);
//         console.log('====================================');
//     }
//     inner();
// }
// outer();
// outer(); // here when outer function is called each time new counter variable will be created



//closure is created when a function is re4turned from another function


function outer(){
    let counter=0;
    function inner(){
        counter++;
        console.log('====================================');
        console.log(counter);
        console.log('====================================');
    }
    return inner;  //return innenr function and scope chain
}
const fun=outer();
fun();
fun();







