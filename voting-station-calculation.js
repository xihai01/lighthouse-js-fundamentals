//req: 1) capacity >= 20, 2) location must be a school or community center
//input: stations array where each station has a name, cap, and location

function chooseStations(stations) {
  //initialize an empty array to hold appropriate stations
  let finalStations = [];
  let counterForFinalStations = 0;
  //go through each station and check for requirements
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      finalStations[counterForFinalStations] = stations[i][0]; //the station meets above reqs. and so put station's name into array
      counterForFinalStations++;
    }
  }
  return finalStations;
}

const stations =  [['Big Bear Donair', 10, 'restaurant'],
['Bright Lights Elementary', 50, 'school'],
['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));