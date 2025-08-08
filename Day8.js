let current=new Date("2024-08-08");
let day=current.getDay();
console.log(current)//unt
console.log(current.toString())//local
console.log(day);

class Sample{
    constructor(personname){
        this.personname=personname;
        console.log(personname)
    }
}
let result=new Sample("js");

class Bank{
    constructor(initial_amount=0){
        this._balance=initial_amount;
    }
    set balance(amount){
        if(amount>0){
            this._balance +=amount;
            console.log(amount);
        }
    }
}
let b=new Bank(10);
console.log(b);

b.balance=100;
console.log(b)