
let num = 1;
while (num <=10) {
    console.log(num);
    num++;
}


let password;
do {
    password = prompt("Enter the password: ");

} while (password !== "PassWord");


let N = prompt("Enter a number: ");
let sum = 0;

for(i=0; i<=N; i++){
    sum += i;
}

console.log("Sum = " + sum);


let n = prompt("Enter a number : ");

if(n == 0){
    console.log("Multiplication of 0 is 0");
}

else{
    for(i=1; i<=10; i++){
        console.log(i + " X " + n + " = " + (n*i));
    }
}
