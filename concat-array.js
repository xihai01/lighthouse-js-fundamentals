function concat(arr1, arr2) {
  //return an empty array if both array parameters are empty
  if (arr1.length === 0 && arr2.length === 0) return [];
  //return arr1 if arr2 is empty
  if (arr2.length === 0) return arr1;

  //loop through each element in arr2
  //push it into arr1
  for (const element of arr2) {
    arr1.push(element);
  }
  return arr1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);