class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log((`USERNAME is ${this.username}`));
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password= password
    }

    addCourse(){
        console.log(`New course is added by ${this.username}`);
    }
}

const sirji = new Teacher("Sir" , "sir@gmail.com" , '1233')
sirji.addCourse()
sirji.logme()

const masala = new User("Masala")
masala.logme()

console.log(sirji === masala);

console.log(sirji instanceof Teacher);
console.log(sirji instanceof User);