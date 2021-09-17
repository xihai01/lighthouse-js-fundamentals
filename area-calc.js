//function to calculate rectangles
function calculateRectangleArea(length, width) {
  let area = length * width;
  return (length >= 0 && width >= 0) ? area : undefined;
}

//function to calculate triangles
function calculateTriangleArea(base, height) {
  let area = 0.5 * base * height;
  return (base >= 0 && height >= 0) ? area : undefined;
}

//function to calculate circles
function calculateCircleArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  return (radius >= 0) ? area : undefined;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined