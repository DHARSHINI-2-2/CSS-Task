let x=22;    //global variable
function sendmessage(){
    let i=10;  //local variable
    console.log("js program");
    console.log(x); //inside function
    console.log(i);
}
sendmessage();
console.log(x); //outside function
//console.log(i);


function check(){   
    if(true){
        let name="webdevelopment";  //block scope
        console.log(name);
    }
    //console.log(name);
}
check();  //calling the function.


//CALLBACK function:
function first(){
    console.log("this is my first function");
}
function second(callback){
    console.log("this is my second function");
    callback();
}
second(first)                                                                             


