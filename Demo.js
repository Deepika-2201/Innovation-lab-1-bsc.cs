
let x = 10;
let name = "MathOps";

console.log(x, name);
document.write("Init: " + x + ", " + name + "<br><br>");

let h_num1 = 5, h_num2 = 2;
console.log("H Add:", h_num1 + h_num2);
document.write("H Add: " + (h_num1 + h_num2) + "<br>");
console.log("H Sub:", h_num1 - h_num2);
document.write("H Sub: " + (h_num1 - h_num2) + "<br>");
console.log("H Mul:", h_num1 * h_num2);
document.write("H Mul: " + (h_num1 * h_num2) + "<br>");
if (h_num2 === 0) { console.log("H Div: Err/0"); document.write("H Div: Err/0<br>"); }
else { console.log("H Div:", h_num1 / h_num2); document.write("H Div: " + (h_num1 / h_num2) + "<br>"); }


let u_num1 = parseInt(prompt("Enter 1st number:"));
let u_num2 = parseInt(prompt("Enter 2nd number:"));

if (isNaN(u_num1) || isNaN(u_num2)) {
    alert("Invalid input! Enter numbers.");
    console.log("Input Error!");
    document.write("Input Error!<br>");
} else {
    alert("Add: " + (u_num1 + u_num2));
    console.log("U Add:", u_num1 + u_num2);
    document.write("U Add: " + (u_num1 + u_num2) + "<br>");

    alert("Sub: " + (u_num1 - u_num2));
    console.log("U Sub:", u_num1 - u_num2);
    document.write("U Sub: " + (u_num1 - u_num2) + "<br>");

    alert("Mul: " + (u_num1 * u_num2));
    console.log("U Mul:", u_num1 * u_num2);
    document.write("U Mul: " + (u_num1 * u_num2) + "<br>");

    if (u_num2 === 0) {
        alert("Div: Err/0!");
        console.log("U Div: Err/0!");
        document.write("U Div: Err/0!<br>");
    } else {
        alert("Div: " + (u_num1 / u_num2));
        console.log("U Div:", u_num1 / u_num2);
        document.write("U Div: " + (u_num1 / u_num2) + "<br>");
    }
}
