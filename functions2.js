//ARROW function: change a variable into function
let count=0;
let Input=()=>{
    
        count++;
        console.log(count);
        if(count<5){
            Input();  
    }
}
Input();