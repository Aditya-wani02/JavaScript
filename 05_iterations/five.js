const coding =["js", "rb", "java", "py" , "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

function printme(item){
    console.log(item);
}

// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
 
const myCoding = [
    {
        name: "javascript",
        filename :"js"
    },
    {
        name: "java",
        filename :"java"
    },
    {
        name: "python",
        filename :"py"
    },
]

myCoding.forEach((item) => {

    console.log(item.name);
    console.log(item.filename);
})