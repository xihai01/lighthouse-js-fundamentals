function range(start, end, step) {
  //return empty array under these conditions
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }
  if (step <= 0) {
    return [];
  }

  let array = [];
  let total = start;
  
  while (total <= end) {
    array.push(start);
    //increment start by step
    start += step;
    total += step;
  }
  return array;
}

//declare and initailize an empty array
//have a variable called total to store curr value in array
//loop from start to end
//for each element, push total to the end of array (.push());
//total += step