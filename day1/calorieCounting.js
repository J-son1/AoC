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
const inputLength = inputArr.length
const elfArr = inputArr.map(elf => elf.split("\n").map(foodItem => Number(foodItem)))

let mostCaloriesCarried = 0
for (let elf = 0; elf < inputLength; elf++) {
  let caloriesCarried = elfArr[elf].reduce((sum, currentValue) => sum + currentValue, 0)
  if (caloriesCarried > mostCaloriesCarried) {
    mostCaloriesCarried = caloriesCarried
  }
}

console.log(mostCaloriesCarried)