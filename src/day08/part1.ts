// Advent of Code - Day 8 - Part One

export function part1(input: string): number {
  const lines = input.split('\n')
  const directions = lines[0];

  let steps = 0;

  const nodeMap: Map<string, [string, string]> = new Map();

  // loop through lines
  // set nodeMap with node, left, right values
  lines.slice(2).forEach( (map) => {
    const node = map.slice(0,3);
    const left = map.slice(7,10);
    const right = map.slice(12,15);

    nodeMap.set(node, [left, right]);
  } )

  let currNode = nodeMap.get('AAA');
  let currDirectionIndex = 0;
  let nodeReached = false;

  // loop until the final node 'ZZZ' is reached
  while (!nodeReached) {
    const direction = directions[currDirectionIndex];

    let nextNode;

    if (currNode) {
      // set the nextNode depending on the direction
      if (direction === 'L') nextNode = currNode[0];
      else nextNode = currNode[1];


      // increase steps and currDirectionIndex by 1
      steps++;
      currDirectionIndex++
      currDirectionIndex %= directions.length;

      if (nextNode === 'ZZZ') nodeReached = true;
      else currNode = nodeMap.get(nextNode);
    }
  }

  return steps;
}
