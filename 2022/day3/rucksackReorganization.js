import { getInput } from '../helper.js'

const input = getInput('day3/input.txt')

function transformInput(input) {
  const formattedInput = input.split('\n')
  const result = []
  while (formattedInput.length) {
    result.push(formattedInput.splice(0,3))
  }
  return result
}

export function getCommonItemType(rucksacks) {
  let commonItem
  let firstRucksack = rucksacks[0].split('')
  firstRucksack.forEach((item) => {
    if (rucksacks[1].includes(item) && rucksacks[2].includes(item)) {
      commonItem = item
    }
  })
  return commonItem
}

export function getItemPriorityValue(item) {
  const isUpperCase = /[A-Z]/.test(item)
  if (isUpperCase) {
    return item.charCodeAt(0) - 38
  }
  return item.charCodeAt(0) - 96
}

export function getSumOfAllCommonItems(input) {
  const formattedInput = transformInput(input)

  let sum = 0
  formattedInput.forEach((elfGroupRucksacks) => {
    const commonItem = getCommonItemType(elfGroupRucksacks)
    const commonItemPriorityValue = getItemPriorityValue(commonItem)
    sum += commonItemPriorityValue
  })
  return sum
}

export const day3Answer = getSumOfAllCommonItems(input)

// console.log('ANSWER: ', day3Answer)
