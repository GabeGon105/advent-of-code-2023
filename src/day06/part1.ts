// Advent of Code - Day 6 - Part One

export function part1(input: string): number {
  const lines = input.split('\n');

  // slice line from ':', split by ' '
  // filter for only numbers, map to convert to integers
  const time = lines[0].slice(lines[0].indexOf(':')).split(' ').filter( (char) => !isNaN(parseInt(char)) ).map( (num) => parseInt(num) );
  const recordDistance = lines[1].slice(lines[1].indexOf(':')).split(' ').filter( (char) => !isNaN(parseInt(char)) ).map( (num) => parseInt(num) );

  let result = 1;

  // loop from 0 to recordDistance.length
  for ( let i = 0 ; i < recordDistance.length ; i++) {
    let wins = 0;
    // loop from 1 to time[i]
    for ( let j = 1 ; j < time[i] ; j++ ) {
      if ( j * (time[i] - j) > recordDistance[i] ) wins++;
    }
    result *=wins;
  }

  return result;
}