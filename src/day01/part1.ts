// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  // split input to an array by '\n'
  // map to find first and last integer in each string
  // reduce to find the sum
  return input.split('\n').map( (str) => {
    // split str to an array by ''
    // filter for numbers
    const numsArr = str.split('').filter(Number);

    // return the first and last value of numsArr
    return +(numsArr[0] + numsArr[numsArr.length-1]);
  } )
  .reduce( (sum,num) => sum + num, 0 );
}
