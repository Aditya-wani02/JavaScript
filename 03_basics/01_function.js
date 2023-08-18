 function sayMyName(){
console.log("A");
console.log("D");
console.log("I");
console.log("T");
console.log("Y");
console.log("A");
 }

//  sayMyName()

//                        parameters
// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){
    let result = number1 + number2
    return result 
}
//           arguments
const result = addTwoNumbers(4,8)

// console.log(result);
//                                Default
function loginUserMessage(username = "Sam"){

    // if(username === undefined){
    //     console.log("please enter a user name");
    //     return
    // }

    if(!username){
            console.log("please enter a user name");
            return
        }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Aditya"));
console.log(loginUserMessage());