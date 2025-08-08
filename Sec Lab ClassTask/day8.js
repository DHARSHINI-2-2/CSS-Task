let current=new Date();
let day=current.getDay();
console.log(current);  //universal timing
console.log(current.toString());  //local timing
console.log(day);


//class is created with class keyword
//constructor is created with constructor keyword cannot be created as in java(i.e class name with ())
class Sample{
    constructor(personname){
        this.personname=personname;
        console.log(personname);
    }
} 
let result=new Sample("JavaScript");    


class Bank{
    constructor(initialamt=0){

        this._balance=initialamt;  //to avoid redundancy use _ after this keyword
    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        if(amount>0){
            this._balance += amount;
            console.log(amount);
        }
    }
}
let b=new Bank(100);
console.log(b);

b.balance=100;
console.log(b);
