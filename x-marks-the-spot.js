function finalPositions(moves) {
  //declare and initialize an array to hold coordinates
  let coords = [0,0];

  //for..of loop - go through each move and add up x/y coords
  for (const position of moves) {
    if (position === 'north') {
      coords[1] += 1; //add 1 to y value if going north
    } else if (position === 'south') {
      coords[1] += -1; //subtract 1 to y value if going south
    } else if (position === 'east') {
      coords[0] += 1; //add 1 to x value if going east
    } else {
      coords[0] += -1; //subtract 1 to x value if going west
    }
  }
  return coords;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPositions(moves));