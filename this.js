// this keyword

function sayname(name){
    console.log('====================================');
    console.log(`myname is ${name}`);
    console.log('====================================');
}

sayname('agnisis')







// binding


//implicit binding
const person={
    name:'shilpi',
    sayname:function(){
        console.log(`my name is ${this.name}`)
    },
}


person.sayname()


//explicit my name


function sayname1(){
    console.log(`my name is ${this.name}`)

}
sayname1.call(person)



//newbinding

function personName(name){
    // this={} empty object new keyword internally this refer {}
    this.name=name
}

const p1=new personName('agnisis') //constructor
const p2=new personName('akash')


console.log(p1.name,p2.name);




//default binding this keyword rely on global scope

const name ="superman" // sayname(name)

globalThis.name='batman'
sayname1()
