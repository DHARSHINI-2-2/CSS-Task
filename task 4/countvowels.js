function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str
    .split('')
    .filter(char => vowels.includes(char))
    .length;
}

console.log(countVowels("Hello, World!")); 
console.log(countVowels("education"));
