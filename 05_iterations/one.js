// 

// for(let i = 1 ;i <= 10 ; i++ ){
//     console.log("OUTER LOOP" ,i);

   
        // // console.log("5 is here");
        // for (let j = 0; j <=10; j++) {
        //     // console.log(i,".",j);
        //     // console.log(`inner loop ${j} , outer loop ${i}`);
        //     console.log(i + "*" + j + "=" + i*j);
        // }
    
// }

let myarray = ["a","b","c","d"]
console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

// break and continue

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log("5 detected");
        break
    }
    console.log(index);

}
for (let index = 1; index <=20; index++) {
    if (index%5==0){
        console.log("5 multiple detected");
        continue
    }
    console.log(index);

}