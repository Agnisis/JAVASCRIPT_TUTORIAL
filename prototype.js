function person( fname,lname){
    this.firstname=fname
    this.lastname=lname
}


const person1=new person('agni','dutta')
const person2=new person('sen','dutta')


// person1.getfullname=function(){
//     return this.firstname+" "+this.lastname
// }

person.prototype.getfullname=function(){
    return this.firstname+" "+this.lastname
}
console.log(person1.getfullname());
console.log(person2.getfullname());


//but its only for person 1 if we want for all then generic protype is needed


