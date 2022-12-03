import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const getFilePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const inputFilePath = __dirname + '/' + filename
  return inputFilePath
}

const inputFilePath = getFilePath('input.txt')
const input = readFileSync(inputFilePath, 'utf-8')

const elfCaloriesCarriedArray = input.split("\n\n").map(elf => elf.split("\n").map(foodItem => Number(foodItem)))
const elfCaloriesCarriedTotals = elfCaloriesCarriedArray.map(elf => elf.reduce((sum, currentValue) => sum + currentValue, 0))
const sortedElfCaloriedCarriedTotals = elfCaloriesCarriedTotals.sort((a, b) => a - b)

const getTopCaloriesCarried = (calorieTotalsArray, numberOfTopElves = 1) => {
  let topCaloriesCarried = []
  for (let elf = 0; elf < numberOfTopElves; elf++) {
    topCaloriesCarried.push(calorieTotalsArray.pop())
  }
  return topCaloriesCarried
}

const mostCaloriesCarried = getTopCaloriesCarried(sortedElfCaloriedCarriedTotals)

console.log(mostCaloriesCarried[0])
