//  var c =300
let a = 100


if(true){
    let a =10
    const b =30
    //  c = 30
// console.log("INNER: " , a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
const username = "Aditya"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const name = "Aditya"
    if(name === "Aditya"){
        const website = " github"
        console.log(name + website);
    }
    // console.log(website);
}
// console.log(name);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num +1
}


addTwo(5) //Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num +2
}
