import { getInput } from '../helper.js'

const input = getInput('day5/input.txt')
const input1 = input.split('\n').map((line) => line.match(/\d+/g))
const startingStacks = [
  ['N', 'B', 'D', 'T', 'V', 'G', 'Z', 'J'],
  ['S', 'R', 'M', 'D', 'W', 'P', 'F'],
  ['V', 'C', 'R', 'S', 'Z'],
  ['R', 'T', 'J', 'Z', 'P', 'H', 'G'],
  ['T', 'C', 'J', 'N', 'D', 'Z', 'Q', 'F'],
  ['N', 'V', 'P', 'W', 'G', 'S', 'F', 'M'],
  ['G', 'C', 'V', 'B', 'P', 'Q'],
  ['Z', 'B', 'P', 'N'],
  ['W', 'P', 'J']
]

export function getTopCrates(input, stacks) {
  let topCrates = ''
  input.forEach((line) => {
    const numberOfCratesToMove = line[0]
    const moveFrom = line[1] - 1
    const moveTo = line[2] - 1
    for (let i = 0; i < numberOfCratesToMove; i++) {
      const crate = stacks[moveFrom].pop()
      stacks[moveTo].push(crate)
    }
  })
  stacks.forEach(stack => topCrates += stack[stack.length -1])
  return topCrates
}

const answer = getTopCrates(input1, startingStacks)
console.log('ANSWER: ', answer)