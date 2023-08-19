//  if 
// const temp = 41

// if(temp < 50){
// console.log("less than 50");
// }else{
//     console.log("greater than 50");
// }

//  < , > , <= , >= , == , != , !==

// const score =200



// if (score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }


const balance = 1000

// if(balance > 500) console.log("test"),console.log("test3"); 

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 750) {
//     console.log("less than 750");
    
// }else if (balance < 900) {
//     console.log("less than 900");
    
// }else{
//     console.log("less tha 1200");
// }


const isUserLogged = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(isUserLogged && debitCard ){
    console.log("Allow the user to buy");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}

