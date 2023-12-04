// Advent of Code - Day 4 - Part One

// Card   1:  9 39 27 89 87 29 54 19 43 45 |  9 80 29 20 54 58 78 77 39 35 76 79 19 87 45 89 23 31 94 34 67 43 56 50 27

// 10 winning numbers, uneven spaces

export function part1(input: string): number {
  // create a dictionary for possible scores
  const scores: {[matches: number]: number} = {0:0, 1:1, 2: 2, 3: 4, 4: 8, 5: 16, 6: 32, 7: 64, 8: 128, 9: 256, 10: 512};

  const lines = input.split('\n');

  // reduce through lines to find point total
  return lines.reduce( (sum, line): number => {
    // slice line from ":" to the end
    // split by '  ', join by ' ', split by ' '
    const numbers = line.slice(line.indexOf(':')).split('  ').join(' ').split(' ');

    // slice numbers from 1 to '|' to find winning numbers
    const winningNumbers = numbers.slice(0, numbers.indexOf('|'));

    // slice numbers from '|' to the end to find your numbers
    const yourNumbers = numbers.slice(numbers.indexOf('|')+1);

    // filter yourNumbers for nums included in winningNumbers
    const numberOfWins: number = yourNumbers.filter( (num) => winningNumbers.includes(num)).length;

    // return sum + scores[numberOfWins]
    return sum + scores[numberOfWins];
  }, 0 )
}
