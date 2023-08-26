// let myName= "Aditya     "

// console.log(myName.truelength);

let myHeros = ["thor" ,"spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman :"sling" ,


 getSpiderPower : function(){
    console.log(`spidy power is ${this.spiderman}`)
}

 }

Object.prototype.aditya = function(){
    console.log("Aditya is present in all objects");
}


Array.prototype.heyWani = function(){
    console.log("Wani says hello");
}

// heroPower.aditya()
// heroPower.heyWani()
// myHeros.aditya()
// myHeros.heyWani()

const user = {
    name : "Guru",
    email :"guru@gmail.com"
}

 const teacher = {
    makeVideo : true
 }

 const TeachingSupport = {
    isAvailable : false
 }

 const TASupport = {
    makeAssingment : 'Js assingment',
    fullTime : true,
    __proto__ : TeachingSupport
 }

 teacher.__proto__  = user

 Object.setPrototypeOf(TeachingSupport , teacher)

 let usname = "JAVAscript       "

 String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
 }
 usname.truelength()

 "aditya".truelength()
 "Icetea    ".truelength()