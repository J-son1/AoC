import { getInput } from '../helper.js'

const input = getInput('day5/input.txt')
export const startingStacks = [
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

export function getTopCrates(input, startingStacks) {
  const transformedInput = input.split('\n').map((line) => line.match(/\d+/g))
  let topCrates = ''
  transformedInput.forEach((line) => {
    const numberOfCratesToMove = line[0]
    const firstStack = startingStacks[line[1] - 1]
    const secondStack = startingStacks[line[2] - 1]
    const moveFrom = firstStack.length - numberOfCratesToMove
    const moveTo = secondStack.length
    const cratesToMove = firstStack.splice(moveFrom, numberOfCratesToMove)
    secondStack.splice(moveTo, 0, ...cratesToMove)
  })
  startingStacks.forEach(stack => topCrates += stack[stack.length -1])
  return topCrates
}
