function merge(arr1, arr2) {
  //create a new array of arr1.length + arr2.length
  let mergeArray = [];
 
  //return an empty array if both array parameters are empty
  if (arr1.length === 0 && arr2.length === 0) return [];
  //return arr1 if arr2 is empty
  if (arr2.length === 0) return arr1;
  //return arr2 if arr1 is empty
  if (arr1.length === 0) return arr2;

  //concatenate arr1 to end of arr2 if first element in arr1 is bigger than last element in arr2
  if (arr1[0] >= arr2[arr2.length - 1]) return concat(arr2, arr1);
  if (arr2[0] >= arr1[arr1.length - 1]) return concat(arr1, arr2);
  
  //set the smaller array as arr1
  if (arr2.length < arr1.length) {
    let tempArr = [];
    tempArr = arr1;
    arr1 = arr2;
    arr2 = tempArr;
  }

   //create variables to store a copy of arr1 and arr2 
   let arr1Cpy = [...arr1];
   let arr2Cpy = [...arr2]; 

  //create variable to store the index where we left off
  let index = 0;

  //for each element in arr1, compare with element in arr2
  for (const element of arr1) {
    for (let i = index; i < arr2.length; i++) {
      //if element in arr1 is less or equal to arr2[i], then element is bigger
      if (element <= arr2[i]) {
        //push element to new array
        mergeArray.push(element);
        //update the arr1 copy
        const temp = arr1Cpy.shift();
        //update index to i before breaking
        index = i;
        break;
      } else {
        //element is smaller than arr2[i], so push arr2[i] instead
        mergeArray.push(arr2[i]);
        //update arr2 copy
        arr2Cpy.shift();
      }
    }
  }

  //check if any arr copies are empty, if not, then push the remaining elements in copy to mergeArray
  while (arr1Cpy.length != 0 || arr2Cpy.length != 0) {
    if (arr1Cpy.length != 0) {
      mergeArray.push(arr1Cpy.shift());
    } else {
      mergeArray.push(arr2Cpy.shift());
    }
  }

  return mergeArray;
}

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

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));
console.log(merge([2,8],[1,5,9]));
console.log(merge([1,5,9], [2,10]));
//create a new array of arr1.length + arr2.length
//create a variable indexStart to hold the starting index of insertion
//take the first number of the smallest array and determine the index it fits in the largest array
//store this index in indexStart
//start populating mergeArray with numbers. Have a conditional to check for starting and ending index of merged numbers