// simplify task of writting iterators


function normal(){
    console.log('hello')
    console.log('world')
}

normal()

//it can stop midway or pause exeution
function* generatorfunc(){
   yield 'hello'
   yield 'world'
   yield 'er'
} 


//invocation
//returns gen obj

const genneratorobj=generatorfunc()


for(const word of genneratorobj){
    console.log(word)
}
