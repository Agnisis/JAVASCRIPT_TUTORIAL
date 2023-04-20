//make syntax better from protypal inheritance
class person{

    constructor(fname,lname){
        this.firstname=fname
        this.lastname=lname
    }
    sayname(){
        return this.firstname+" "+this.lastname
    }
}
const classp1=new person('a','b')
console.log(classp1.sayname());
class superhero extends person{
    constructor(fname,lname){
        super(fname,lname) //call super class cons
        this.issuperhero=true
    }

    fightcrime(){
        console.log('fight')
    }
}
const batman=new superhero('abc','pqr')
console.log(batman.sayname());