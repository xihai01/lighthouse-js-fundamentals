for (let i = 100; i <= 200; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log('LoopyLighthouse'); //print 'LoopyLighthouse' if number is a multiple of both 3 and 4
  } else if (i % 3 === 0) {
    console.log('Loopy'); //print 'Loopy' if number is a multiple of 3
  } else if (i % 4 === 0) {
    console.log('Lighthouse'); //print 'Lighthouse' if number is a multiple of 4
  } else {
    console.log(i); //print number if not multiples
  }
}