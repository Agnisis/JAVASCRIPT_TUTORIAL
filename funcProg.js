// // find area circumference diameter of a circle of given array of radius

// const radius = [1, 2, 3, 4];


// // to find area
// const calculateArea = function (radius) {

//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// //to find circumfernce

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);

//     }
//     return output;
// }


// //to find diameter

// const calculateDiameter=function(radius){

//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(radius[i]*2);
//     }
//     return output;
// }

// console.log('====================================');
// console.log(calculateArea(radius));
// console.log('====================================');


// console.log('====================================');
// console.log(calculateCircumference(radius));
// console.log('====================================');

// console.log('====================================');
// console.log(calculateDiameter(radius));
// console.log('====================================');

// // here we have to write same code repeatedly to remove this we have functional programing



// this is functional programing 
// write logics in function
//calculate is a higher order function similar to map function and logic is call back function 
//implementatin of MAP 

const radius = [1, 2, 3, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circum = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return radius * 2;
}


const calculate = function (radius, logic) {

    const output = [];
    for (let i = 0; i < radius.length; i++) {

        output.push(logic(radius[i]));
    }
    return output;

}

console.log("area is " + calculate(radius, area));
console.log("diameter is " + calculate(radius, diameter));
console.log("circumference is " + calculate(radius, circum));



//map function

console.log(radius.map(area));
console.log(radius.map(diameter));
console.log(radius.map(circum));


// to make similar to calculate func as masp we can use prototype
// now all the array can have this method by .

Array.prototype.calculate=function(radius, logic) {

    const output = [];
    for (let i = 0; i < radius.length; i++) {

        output.push(logic(radius[i]));
    }
    return output;

}

console.log('====================================');
console.log(radius.calculate(radius,area));
console.log('====================================');

// to make similar as map 



Array.prototype.calculate=function( logic) {

    const output = [];
    for (let i = 0; i < this.length; i++) {
       // this in calculate function pointsto radius array (radius.calc(area))
        output.push(logic(this[i]));
    }
    return output;

}

console.log('====================================');
console.log(radius.calculate(area));
console.log('====================================');


