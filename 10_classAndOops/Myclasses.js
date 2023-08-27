
class user{

    constructor(username , age , password){
        this.username = username
        this.age = age
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abs`
    }
    changeUsername (){
        return `${this.username.toUpperCase()}`
    }

}

const adita = new user("aditya" , 20 , "13234")
console.log(adita.encryptPassword());
console.log(adita.changeUsername());