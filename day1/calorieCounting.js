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
const elfCaloriedCarriedTotals = elfCaloriesCarriedArray.map(elf => elf.reduce((sum, currentValue) => sum + currentValue, 0))
const sortedElfCaloriedCarriedTotals = elfCaloriedCarriedTotals.sort((a, b) => a - b)
const mostCaloriesCarried = sortedElfCaloriedCarriedTotals.pop()

console.log(mostCaloriesCarried)
