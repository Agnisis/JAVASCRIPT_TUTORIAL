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



function outer(){
    let counter=0;
    function inner(){
        counter++;
        console.log('====================================');
        console.log(counter);
        console.log('====================================');
    }
    return inner;
}
const fun=outer();
fun();
fun();


