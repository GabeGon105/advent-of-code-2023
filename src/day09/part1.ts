// Advent of Code - Day 9 - Part One

const nextNumber = (values: number[]): number => {
  // if all values are the same return the first value
  if ( values.every( (num) => num === values[0] ) ) return values[0];
  
  // find next value
  const differencesArr = getDifferences(values);
  const nextNum = nextNumber(differencesArr);
  
  // return the final value of values plus nextNum
  return values[values.length-1] + nextNum;
}

const getDifferences = (values: number[]): number[] => {
  const differencesArr: number[] = [];

  // loop from 0 to values.length-1
  // push differences to differencesArr
  for ( let i = 0 ; i < values.length-1 ; i++ ) {
    differencesArr.push( values[i+1] - values[i] );
  }

  return differencesArr;
}

export function part1(input: string): number {
  // split each line in to an array of numbers
  const lines = input.split('\n').map((line) => line.split(' ').map(Number));

  // reduce through lines to find the sum of all next numbers
  return lines.reduce( (sum, line) => sum + nextNumber(line), 0 );
}
