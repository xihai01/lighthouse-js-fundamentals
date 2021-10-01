const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] + words[1]); //print words[0] + words[1] if multiples of number in array
    } else if (i % multiples[0] === 0) {
      console.log(words[0]); //print words[0] if number is a multiple of multiples[0]
    } else if (i % multiples[1] === 0) {
      console.log(words[1]); //print words[1] if number is a multiple of multiples[1]
    } else {
      console.log(i); //print number if not multiples
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));