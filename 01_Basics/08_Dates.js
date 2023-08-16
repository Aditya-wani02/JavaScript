// Jan 1st 1970

let MyDate = new Date()

// console.log(MyDate.toDateString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleString());
// console.log(typeof MyDate);

// let MyBirthday = new Date(2002 , 8 , 2)
// let MyBirthday = new Date("2002-09-02")
let MyBirthday = new Date("09-02-2002")


// console.log(MyBirthday.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(MyBirthday.getTime());

// Compare in seconds

console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday:"long"
    // timezone:
})



