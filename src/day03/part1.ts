// Advent of Code - Day 3 - Part One

import { getFullNumber } from "./utils";

export function part1(input: string): number {
  let sum = 0;

  // split input in to an array of lines
  const lines = input.split('\n');

  const symbolPositions = new Array<{x:number, y:number}>;

  // find every non-numerical non-'.' value in lines
  lines.forEach( (line, y) => {
    for ( let x = 0 ; x < line.length ; x++ ) {
      // push x/y position of symbols to symbolPositions
      if ( isNaN(Number(line[x])) && line[x] !== '.' ) {
        symbolPositions.push({x:x, y:y});
      }
    }
  } )

  // loop through symbolPositions
  // use getFullNumber to find adjacent nums and add to sum
  symbolPositions.forEach( (position) => {
    const currentNumbers: number[] = [];

    // check all positions above
      sum += getFullNumber(lines[position.y-1], position.x - 1, currentNumbers);
      sum += getFullNumber(lines[position.y-1], position.x, currentNumbers);
      sum += getFullNumber(lines[position.y-1], position.x + 1, currentNumbers);

    // check all positions below
      sum += getFullNumber(lines[position.y + 1], position.x - 1, currentNumbers);
      sum += getFullNumber(lines[position.y + 1], position.x, currentNumbers);
      sum += getFullNumber(lines[position.y + 1], position.x + 1, currentNumbers);
      
    // check positions left and right
    sum += getFullNumber(lines[position.y], position.x - 1, currentNumbers);
    sum += getFullNumber(lines[position.y], position.x + 1, currentNumbers);
  } );
  
  return sum;
}
