/* scope stands for accessibility or visibility of variables
there are 3 types scopes:-
1.Block scope
2.Function scope
3.Global scope

Block Scope:let const can only be accessed inside the block
Function scope: variables can not accesed outside the function
Global Scope: Can accessed by anywhere but cant overwrite blocked or function scoped var
*/
const name="batman";
if(true){
    const name="Agnisis";
    console.log(name);
}
function fn(){
    let age=100;
    console.log(age);
}
//console.log(age); cant accessed x

//nested function scope -- lexial scoping

var a=10;
function outer(){
    var b=20;
    function inner(){
        var c=30;
        console.log('====================================');
        console.log(a,b,c);
        console.log('====================================');
    }
    inner();

}

outer();

