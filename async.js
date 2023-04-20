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




