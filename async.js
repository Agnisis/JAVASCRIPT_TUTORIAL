// what is asynchronous?
// js is synchronous ,blocking and single threaded language
//synchronous ->execute one line step by step
//blocking -> process complete ->next process
//single threaded ->process to run a task  ( single thread main thread )
//js is not enough for async so we need web browser 

//timeouts & interval

// setTimeout(function,duration,par1,par2,...)


function greet(){
    console.log('hello')
}
setTimeout(greet,2000)

function greety(name){
    console.log(`hello ${name}`)
}

setTimeout(greety,2000,'agnisis')

//to clear a timeout we use clearTimeout method passing the identifier returned by setTimeout()


const timeout=setTimeout(greety,3000,'agni')
clearTimeout(timeout) // print nothing



// setIntervals() runs code at regular intervals of time 

//setIntervals(function,duration,para1,para2,.....)
//it keeprunning the task forever to stop use clearinterval()

const inte=setInterval(greety,3000,'agnisis')
clearInterval(inte)
console.log("end of inyterval")



//timers and intervals are not part of js impleted by browser 
//duration parameter -> min delay not guarented delay
//reccursive set timeout==setinterval

// 1.Duration is guaranteed between executions.Irrespective of how long the code takes to run,the interval will remain the sameCode can take longer to run the the timeinterval itself? Recursive setTimeout

// 2. You can calculate a different delay beforerunning each iteration




// 1. The duration interval includes the time taken to execute the code you want to runThe code takes 40ms to run, the interval is 60ms.The code takes 50ms to run, the interval is 50ms

// 2. setInterval is always a fixed interval duration







