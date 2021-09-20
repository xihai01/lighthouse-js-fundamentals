function lastIndexOf(arr, value) {
  //loop through arr
  //keep track of index of occurences in a variable index
  //return index in the end if value occurs, otherwise return -1 
  let index = 'no occurences';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
    }
  }
  return index !== 'no occurences' ? index : -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);