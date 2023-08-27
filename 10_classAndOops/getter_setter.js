class User{

    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    
    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(password){
        this._password = password
    }
}

const Aditya = new User("a02@gmail.com" , 'asdfghjk')

console.log(Aditya.password);
console.log(Aditya.email);
