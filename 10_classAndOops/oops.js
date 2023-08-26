// const user = {
//     username :"Aditya",
//     loginCount : 8,
//     signIn : true,

//     getUserDetails : function(){
        // console.log("Got details from the db");
        // console.log(`username : ${this.username}`);
        // console.log(this);
    // }

// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor

// const promiseOne = new Promise()
// const Date = new Date()

function user(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}

const user1 =new user("Aditya" ,22, true)
const user2 = new user("Javascript" , 66 , false)
console.log(user1.constructor); 
// console.log(user2);