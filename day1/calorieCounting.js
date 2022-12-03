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

const inputArr = input.split("\n\n")
// const inputLength = inputArr.length
const elfCaloriesCarriedArray = inputArr.map(elf => elf.split("\n").map(foodItem => Number(foodItem)))
const elfCaloriedCarriedTotals = elfCaloriesCarriedArray.map(elf => elf.reduce((sum, currentValue) => sum + currentValue, 0))
const mostCaloriesCarried = Math.max(...elfCaloriedCarriedTotals)

console.log(mostCaloriesCarried)
