import { readFileSync } from 'fs'
import { getFilePath } from '../helper.js'

const inputFilePath = getFilePath('day1/input.txt')
const input = readFileSync(inputFilePath, 'utf-8')

const elfCaloriesCarriedArray = input.split("\n\n").map(elf => elf.split("\n").map(foodItem => Number(foodItem)))
const elfCaloriesCarriedTotals = elfCaloriesCarriedArray.map(elf => elf.reduce((sum, currentValue) => sum + currentValue, 0))
const sortedElfCaloriedCarriedTotals = elfCaloriesCarriedTotals.sort((a, b) => a - b)

const getTopCaloriesCarriedTotal = (calorieTotalsArray, numberOfTopElves = 1) => {
  let topCaloriesCarried = []
  for (let elf = 0; elf < numberOfTopElves; elf++) {
    topCaloriesCarried.push(calorieTotalsArray.pop())
  }
  return topCaloriesCarried.reduce((sum, currentValue) => sum + currentValue, 0)
}

const mostCaloriesCarried = getTopCaloriesCarriedTotal(sortedElfCaloriedCarriedTotals, 3)

console.log(mostCaloriesCarried)
