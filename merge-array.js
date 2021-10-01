function merge(arr1, arr2) {
  //create a new array of arr1.length + arr2.length
  let mergeArray = new Array(arr1.length + arr2.length);
  //create a variable indexStart and arrayLength 
  let indexStart = 0;
  let arrayOneLength = arr1.length;

  //return an empty array if both array parameters are empty
  if (arr1.length === 0 && arr2.length === 0) return [];
  //return arr1 if arr2 is empty
  if (arr2.length === 0) return arr1;
  //return arr2 if arr1 is empty
  if (arr1.length === 0) return arr2;

  //determine the starting index for the first element of arr1
  for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr1[0] >= arr2[i]) {
      indexStart = i + 1;
      break;
    }
  }

  if (indexStart === 0) indexStart = 0;

  for (let i = 0; i < mergeArray.length; i++) {
    //push number in arr1 into mergeArray if the current index (i) = indexStart and is less than indexStart + (arr1.length - 1)
    if (i >= indexStart && i <= indexStart + (arrayOneLength - 1)) { //1 - 1
      mergeArray[i] = arr1.shift(); 
    } else {
      mergeArray[i] = arr2.shift();
    }
  }

  return mergeArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2 ], [5, 8, 9]), "=?", [ 1, 2, 6 ]);
//create a new array of arr1.length + arr2.length
//create a variable indexStart to hold the starting index of insertion
//take the first number of the smallest array and determine the index it fits in the largest array
//store this index in indexStart
//start populating mergeArray with numbers. Have a conditional to check for starting and ending index of merged numbers