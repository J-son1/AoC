import { getInput } from '../helper.js'

const input = getInput('day1/input.txt')

const getTopCaloriesCarriedTotal = (input, numberOfTopElves = 1) => {
  const elfCaloriesCarriedArray = input
    .split("\n\n")
    .map(elf => elf.split("\n")
    .map(foodItem => Number(foodItem)))
  const elfCaloriesCarriedTotals = elfCaloriesCarriedArray
    .map(elf => elf.reduce((sum, currentValue) => sum + currentValue, 0))
  const sortedElfCaloriedCarriedTotals = elfCaloriesCarriedTotals
    .sort((a, b) => a - b)

  let topCaloriesCarried = []
  for (let elf = 0; elf < numberOfTopElves; elf++) {
    topCaloriesCarried.push(sortedElfCaloriedCarriedTotals.pop())
  }
  return topCaloriesCarried.reduce((sum, currentValue) => sum + currentValue, 0)
}

export const day1Answer = getTopCaloriesCarriedTotal(input, 3)

// console.log('ANSWER: ', day1Answer)
