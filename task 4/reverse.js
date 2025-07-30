//reversing each word
function reverse(sentence) {
  const words = sentence.split(' ');
  const reversedWords = [];

   for (let i = 0; i < words.length; i++) {
     const word = words[i];
     const rev = word.split('').reverse().join('');
     reversedWords.push(rev);
   }
 
  return reversedWords.join(' ');

}
const input = "Hello world";
const output = reverse(input);
console.log(output);  



//reversing words
const input2 = "this is javascript program";
const output2=input2.split(' ').reverse().join(' ');
console.log(output2);  
