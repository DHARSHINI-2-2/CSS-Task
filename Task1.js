//Simple if statement
let a=10;
if(a>0){
    console.log("This is js program")
}



//if-else block
let num=5;
if(num<0){
    console.log("negative number");
}
else{
    console.log("positive number");
}



//multiple condition with else if
let x="a";
if(x>0){
    console.log("positive number");
}
else if(x<0){
    console.log("negative number");
}
else if(x==0){
    console.log("the number is zero")
}
else{
    console.log("invalid input")
}



//switch statements
let choice=2;
switch (choice){
    case 1:
        console.log("you chose option 1");
        break;
    case 2:
        console.log("you chose option 2");
        break;
    case 3:
        console.log("you chose option 3");
        break;
}