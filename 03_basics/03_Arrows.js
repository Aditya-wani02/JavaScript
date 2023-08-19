const user = {
    username :"Aditya",
    price : 999,

    welcomeMessege : function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessege()
// user.username = "Sam"
// user.welcomeMessege()

// console.log(this);
// We will run this in the browser 

// function chai(){
//     let username = "Aditya"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Aditya"
//     console.log(this.username);
// }

const chai = () => {
        let username = "Aditya"
        console.log(this);
    }


    // chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"Aditya"})

console.log(addTwo(3,4));


