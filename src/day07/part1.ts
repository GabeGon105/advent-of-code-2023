// Advent of Code - Day 7 - Part One

const WEIGHT_MAP: Record<string,number> = {
  'A': 13,
  'K': 12,
  'Q': 11,
  'J': 10,
  'T': 9,
  '9': 8,
  '8': 7,
  '7': 6,
  '6': 5,
  '5': 4,
  '4': 3,
  '3': 2,
  '2': 1,
}

export function part1(input: string): number {
  const hands = input.split('\n');

  // sort the hands by type and card weight
  hands.sort( (a, b) => {
    const handA = a.slice(0,5).split('');
    const handB = b.slice(0,5).split('');

    const sameValuesA = handA.map( (letter) => {
      // number of times letter appears in handA
      return handA.filter((el) => el === letter).length;
    } )

    const sameValuesB = handB.map( (letter) => {
      // number of times letter appears in handB
      return handB.filter((el) => el === letter).length;
    } )

    // find the handTypeA and handTypeB
    // full house === 7, high card === 1
    let handTypeA = 1;
    if ( sameValuesA.includes(5) ) handTypeA = 7;
    else if ( sameValuesA.includes(4) ) handTypeA = 6;
    else if ( sameValuesA.includes(3) && sameValuesA.includes(2) ) handTypeA = 5;
    else if ( sameValuesA.includes(3)) handTypeA = 4;
    else if ( sameValuesA.filter(num=>num===2).length === 4) handTypeA = 3;
    else if ( sameValuesA.includes(2)) handTypeA = 2;
    else handTypeA = 1;

    let handTypeB = 1;
    if ( sameValuesB.includes(5) ) handTypeB = 7;
    else if ( sameValuesB.includes(4) ) handTypeB = 6;
    else if ( sameValuesB.includes(3) && sameValuesB.includes(2) ) handTypeB = 5;
    else if ( sameValuesB.includes(3)) handTypeB = 4;
    else if ( sameValuesB.filter(num=>num===2).length === 4) handTypeB = 3;
    else if ( sameValuesB.includes(2)) handTypeB = 2;
    else handTypeB = 1;

    // if handTypeA === handTypeB, compare individual cards
    if ( handTypeA === handTypeB ) {
      if ( handA[0] === handB[0] ) {
        if ( handA[1] === handB[1] ) {
          if ( handA[2] === handB[2] ) {
            if ( handA[3] === handB[3] ) {
              if ( handA[4] === handB[4] ) {
                return WEIGHT_MAP[handA[5]] - WEIGHT_MAP[handB[5]]
              }
              return WEIGHT_MAP[handA[4]] - WEIGHT_MAP[handB[4]]
            }
            return WEIGHT_MAP[handA[3]] - WEIGHT_MAP[handB[3]]
          }
          return WEIGHT_MAP[handA[2]] - WEIGHT_MAP[handB[2]]
        }
        return WEIGHT_MAP[handA[1]] - WEIGHT_MAP[handB[1]]
      }
      return WEIGHT_MAP[handA[0]] - WEIGHT_MAP[handB[0]]
    }

    // use handTypeA and handTypeB to sort
    return handTypeA - handTypeB;
  } )

  // reduce through to find the sum of all total winnings
  return hands.reduce( ( sum, hand, i ) => {
    // slice hand from index 6, convert to a number
    // multiply by i + 1, add to sum 
    return sum += ( parseInt(hand.slice(6)) * (i+1) );
  }, 0 )
}