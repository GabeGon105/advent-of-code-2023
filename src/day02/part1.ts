// Advent of Code - Day 2 - Part One

// max values for each cube color:
// 12 red cubes, 13 green cubes, and 14 blue cubes

export function part1(input: string): number {
  // split input to an array by '\n'
  const games: string[] = input.split('\n');

  // filter through games for games that are possible
  const possibleGames: string[] = games.filter( (game) => {
    // slice from ':', replace all ';' with ','
    // split by ', '
    const cubes: string[] = game.slice(game.indexOf(':')).replaceAll(';', ',').split(',');

    // check if every value of cubes is not above the max
    return cubes.every( (cube) => {
      // split cube by ' ', store second value
      const numOfCubes: number = +cube.split(' ')[1];

      // check the color and numOfCubes
      return cube.includes('red') && numOfCubes <= 12
        || cube.includes('green') && numOfCubes <= 13
        || cube.includes('blue') && numOfCubes <= 14
    } )
  } )

  // reduce through possibleGames to find the sum
  return possibleGames.reduce( (sum, game) => {
    // slice from 5 to the index of ':' and add to sum
    return sum + Number(game.slice(5, game.indexOf(':')));
  }, 0 )
}
