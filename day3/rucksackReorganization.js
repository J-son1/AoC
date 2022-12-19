import { getInput } from '../helper.js'

const input = getInput('day3/input.txt')
const input1 = input.split('\n')
export const input2 = []
while (input1.length) {
  input2.push(input1.splice(0,3))
}

export function getCommonItemType(rucksacks) {
  let commonItem
  let firstRucksack = rucksacks[0].split('')
  firstRucksack.forEach((item) => {
    if (rucksacks[1].includes(item) && rucksacks[2].includes(item)) { commonItem = item }
  })
  return commonItem
}

export const getItemPriorityValue = (item) => {
  const isUpperCase = /[A-Z]/.test(item)
  if (isUpperCase) {
    return item.charCodeAt(0) - 38
  }
  return item.charCodeAt(0) - 96
}

export const getSumOfAllCommonItems = (input) => {
  let sum = 0
  input.forEach((elfGroupRucksacks) => {
    const commonItem = getCommonItemType(elfGroupRucksacks)
    const commonItemPriorityValue = getItemPriorityValue(commonItem)
    sum += commonItemPriorityValue
  })
  return sum
}

const sum = getSumOfAllCommonItems(input2)

console.log('answer: ', sum)
