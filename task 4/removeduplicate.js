function removeDuplicate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicate(['apple', 'mango', 'apple', 'orange', 'mango']));

