const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness';

function judgeVegetable(vegetables, metric) {
  //store the curr max. metric
  let maxMetric = 0;
  let winner = '';
  vegetables.forEach(element => {
    if (element[metric] > maxMetric) {
      maxMetric = element[metric];
      winner = element.submitter;
    }
  });
  return winner;
}



console.log(judgeVegetable(vegetables, metric));