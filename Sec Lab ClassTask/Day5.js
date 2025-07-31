const para = "hello john and joe";
const textmatch = para.match(/\bj\w+n\b/g);   //matches word starting from j to n
console.log(textmatch);
console.log(textmatch.length);


const mobileno= 8903231700;
const nummatch = /^[0-9]\d{9}/g;
if(nummatch.test(mobileno.toString())){
    console.log("matched");
}
else{
    console.log("mismatched pattern");
}
