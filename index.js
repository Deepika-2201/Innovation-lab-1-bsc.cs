//variables declared outside any function or block are in the global scope
//They are accessible anywhere in the script

//only accessible in the function in which they are declared.
function SendMessage(){
    let x=10;
    console.log("Hai JS")
    console.log(x);//within
}
SendMessage();
 
//Block scope
//The block scope of a variable means that the variable
//is accessible within the block that is between the
//curly braces.

function Check(){
    if(true){
        let name="Webdevelopment";
        console.log(name);
    }
    console.log(iscloudy)
}
Check()

//callback:
//Callback function in js:
//A callback function in javascript is a function that is passed as an argument  to another function,
//and it is executed after the completion of that function.
//It is commonly used for:
//Handling asynchronous operations (like API calls,timeouts,or event handling)
//Customizing behaviour inside functions

function First(){
    console.log("This is my first function");    
}
First()
function Second(callback){
    console.log("This is my second function");
    callback();
    setInterval(callback,1000);
}
Second(First);

let count=0;
let Input=() =>{
    console.log(count);
    if(count==5){
        
    }
}
Input();