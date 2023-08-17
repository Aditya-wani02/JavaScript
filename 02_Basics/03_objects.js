// singleton -> constructor
// Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name :"Aditya",
    "fullname" : "Aditya Wani",
    [mySym] : "Mykey1",
    age : 20 ,
    location : "Jabulpur",
    email :"aditya@js.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday" , "Friday"]

}

// console.log(JsUser.email);
// console.log(JsUser[mySym]);
// console.log(JsUser["fullname"]);


JsUser.email = "aditya@open.com"
// Object.freeze(JsUser)
JsUser.email = "aditya@micro.com"  //it will not change the value
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
