function Person(fname,lname){
    this.firstname=fname;
    this.lastname=lname;
}

Person.prototype.getfullname=function()
    {return this.firstname+" "+this.lastname}

function superhero(fname,lname){
    //this={}
    Person.call(this,fname,lname)
    this.issuperhero=true
}
superhero.prototype.fightcrime=function(){
    console.log("fighting");
}
superhero.prototype=Object.create(Person.prototype)
const batman= new superhero('a','b')
superhero.prototype.constructor=superhero
console.log(batman.getfullname());

