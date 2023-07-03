//functions are first class objects

//1.like opbject function can be passed as an argument to a function
//2.A function can also be returned a values from other functions


function greet(name){
    console.log(`hello my name is ${name}`)
}

function emoployee(greet){
    const name="employee1"
    greet(name)
}

emoployee(greet)

//functions thar are passed to another functions are called as callback functions in js
//func accepts or return fn as arguments is higher order functions
//why callbacks


// synchronous callbacks ->earliar wxample

// asynchronous callbacks->
//1.An asynchronous callback is a callback that is often used to continue or
// resume code execution after an asynchronous operation has completed

//2.Callbacks are used to delay the execution of a function until a particular
//time or event has occured

//3.Data fetching takes time and we can only run the function we want to
//after the data has been fetched and not immediately



// Async callbacks 


//settimeout 
//event handler





