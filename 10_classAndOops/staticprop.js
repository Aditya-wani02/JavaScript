class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Username :  ${this.username}`);
    }

    static createId(){
        return '1234'
    }
}

const aditya = new User('aditya')
// console.log(aditya.createId());

class teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone =  new teacher('iphone' , "i@phone.com")
// iphone.logme()
console.log(iphone.createId());