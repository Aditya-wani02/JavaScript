// categorization is based on how data is present in the memory and how the data is accessed


// Dynamically typed Language

// primitive and non-primitive

// Primitive

// 7 types :String, Number , Boolean , null ,undefined , Symbol , BigInt
 
const score = 100
const scoreVal = 100.4

const isLoggedin  =true
const outsideTemp = null
let Email ;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId );

const BigNumber = 65416846465165467684n
// console.log("BigInt " + typeof BigNumber);


// Reference (non-primitive)

// Arrays , Objects, Functions  --> return function

const heros = ["Shaktimaan" , "Naagraj"];

let myObj = {
    name: "Aditya",
    age : 20
}

// console.log(myObj);

const myFun =  function(){
    console.log("Hello World");
}
// myFun()

// console.log(typeof Email)
// console.log(typeof outsideTemp)
// console.log( typeof myObj);
// console.log(typeof myFun);
// console.log(typeof heros);



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// *****************************************************

// Stack (Primitive) give Copy, Heap(Non-Primitive) give reference

let myName = "AdityaWani"

let anotherName = myName

anotherName = "JAVASCRIPT"

console.log(anotherName);
console.log(myName);


// Goes to heap
let user1 = {

        email : "user@google.com",
        upi : "user@ybl" 
}


let user2 = user1

user2.email= "aditya@google.com"
// Change in both the user objects 


console.log(user1.email);
console.log(user2.email);

