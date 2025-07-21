

let age = prompt("Enter  Age: ");

if(age > 18){
    console.log("You are eligible to vote!");
}



let temp = prompt("Enter the  temperature (in celcius): ");

if(temp > 30){
    console.log(" Hot!");
} else{
    console.log(" Cold!");
}



let grade = prompt("Enter your mark: ");

if(grade >= 90 && grade < 100){
    console.log("A+");
}

else if(grade >= 80 && grade < 90){
    console.log("A");
}

else if(grade >= 70 && grade < 80){
    console.log("B+");
}

else if(grade >= 60 && grade < 70){
    console.log("B");
}

else if(grade >= 50 && grade < 60){
    console.log("C+");
}

else if(grade >= 40 && grade < 50 ){
    console.log("C");
}

else if(grade >= 0 && grade < 40 ){
    console.log("Fail");
}

else{
    console.log("Invalid Input!");
}

let day = prompt("Enter the day (1-7)");

switch (day) {
    case 1:
        console.log("Monday!");
        break;
    case 2:
        console.log("Tuesday!");
        break;
    case 3:
        console.log("Wednesday!");
        break;
    case 4:
        console.log("Thursday!");
        break;
    case 5:
        console.log("Friday!");
        break;
    case 6:
        console.log("Saturday!");
        break;
    case 7:
        console.log("Sunday!");
        break;

    default:
        console.log("Invalid Input!");
        break;
}
