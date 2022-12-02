import { readFileSync } from 'fs'

const input = readFileSync('input1.txt', 'utf-8')
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