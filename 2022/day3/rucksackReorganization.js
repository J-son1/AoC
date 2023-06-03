import { getInput } from '../helper.js'

const input = getInput('day3/input.txt')

function getArrayOfArraysOf3rucksacks(input) {
  const formattedInput = input.split('\n')
  const arrayOfArraysOf3rucksacks = []
  while (formattedInput.length) {
    arrayOfArraysOf3rucksacks.push(formattedInput.splice(0,3))
  }
  return arrayOfArraysOf3rucksacks
}

export function getCommonItemType(arrayOf3Rucksacks) {
  let commonItem
  let firstRucksack = arrayOf3Rucksacks[0].split('')
  firstRucksack.forEach((item) => {
    if (arrayOf3Rucksacks[1].includes(item) && arrayOf3Rucksacks[2].includes(item)) {
      commonItem = item
    }
  })
  return commonItem
}

export function getItemPriorityValue(itemChar) {
  const isUpperCase = /[A-Z]/.test(itemChar)
  if (isUpperCase) {
    return itemChar.charCodeAt(0) - 38
  }
  return itemChar.charCodeAt(0) - 96
}

export function getSumOfAllCommonItems(input) {
  const arrayOfArraysOf3rucksacks = getArrayOfArraysOf3rucksacks(input)

  let sum = 0
  arrayOfArraysOf3rucksacks.forEach((elfGroupRucksacks) => {
    const commonItem = getCommonItemType(elfGroupRucksacks)
    const commonItemPriorityValue = getItemPriorityValue(commonItem)
    sum += commonItemPriorityValue
  })
  return sum
}
