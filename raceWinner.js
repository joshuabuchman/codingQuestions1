// Race Winner
// Write a function that will accept an array of "racer-time" objects, and return the name of the winner of
// the race and how much time they won by.
// These "racer-time" objects have the following keys:
// name: racer's name as a string
// time: racer's total time as a string provided in the format "HH:MM:SS"
// In the case that a racer does not finish, their time will be provided as "dnf".
// An example input could look like:
// [
// {
// name: 'Samuel',
// time: '05:42:14'
// },
// {
// name: 'Fred',
// time: '05:12:53'
// },
// {
// name: 'Cynthia',
// time: 'dnf'
// }
// ]
// In the above case, the output would be:
// "Fred won by 0 hours, 29 minutes, and 21 seconds"
// If Fred was the only one to finish and every other racer had a time of "dnf", return:
// "Fred won by no contest"
// Finally, if every racer provided in the input had a time of "dnf", return:
// "There is no winner"

const raceWinner = (runners) =>
{
  let winner = runners[0], runnerUp = runners[1]
  for(let i=1;i<runners.length;i++)
  {
    if(runners[i].time<winner.time)
    {
      let temp = winner
      winner = runners[i]
      runnerUp = temp
    }
  }
  
  if(winner.time === 'dnf') return(`There is no winner`)
  else if(runnerUp.time === 'dnf') return(`${winner.name} won by no contest`)

  const winTime = new Date(2000, 0, 1, winner.time[0].concat(winner.time[1]), winner.time[3].concat(winner.time[4]), winner.time[6].concat(winner.time[7])); //Jan 1, 2000 5:42:14 AM
  const runTime = new Date(2000, 0, 1, runnerUp.time[0].concat(runnerUp.time[1]), runnerUp.time[3].concat(runnerUp.time[4]), runnerUp.time[6].concat(runnerUp.time[7])); //Jan 1, 2000 5:12:53 AM

  let diff = runTime - winTime;

  const hh = Math.floor(diff / 1000 / 60 / 60);
  diff -= hh * 1000 * 60 * 60;
  const mm = Math.floor(diff / 1000 / 60);
  diff -= mm * 1000 * 60;
  const ss = Math.floor(diff / 1000);
  diff -= ss * 1000;

  return(`${winner.name} won by ${hh} hours, ${mm} minutes, and ${ss} seconds`)
}

console.log(raceWinner(
[
{
name: 'Samuel',
time: '05:42:14'
},
{
name: 'Fred',
time: '05:12:53'
},
{
name: 'Cynthia',
time: 'dnf'
}
]))