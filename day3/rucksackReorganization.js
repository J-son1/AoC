import { getInput } from '../helper.js'

const input = getInput('day3/input.txt')
const input1 = input.split('\n')
const input2 = []
while (input1.length) {
  input2.push(input1.splice(0,3))
}

const splitItems = (item) => {
  const halfValue = item.length / 2
  const compartment1 = item.slice(0, halfValue)
  const compartment2 = item.slice(-halfValue)
  return [compartment1, compartment2]
}

function getCommonItemType(rucksacks) {
  let firstRucksack = rucksacks.splice(0, 1)[0].split('')
  for (let i = 0; i < firstRucksack.length; i++) {
    let item = firstRucksack[i]
    for (let j = 0; j < rucksacks.length; j++) {
      let otherRucksack = rucksacks[j]
      if (!otherRucksack.includes(item)) { 
        break
      } else if (j = rucksacks.length -1 && otherRucksack.includes(item)) {
        return item
      }
    }
  }
}

const getItemPriorityValue = (item) => {
  const isUpperCase = /[A-Z]/.test(item)
  if (isUpperCase) {
    return item.charCodeAt(0) - 38
  }
  return item.charCodeAt(0) - 96
}

const getRucksackTotal = (commonItemTypes) => {
  return commonItemTypes.map((item) => getItemPriorityValue(item))
    .reduce((sum, currentValue) => sum += currentValue, 0)
}

const getSumOfAllCommonItems = (input) => {
  let sum = 0
  input.forEach((items) => {
    const compartments = splitItems(items)
    const commonItems = getCommonItemTypes(compartments[0], compartments[1])
    const RucksackCommonItemPriorityValueTotal = getRucksackTotal(commonItems)
    sum += RucksackCommonItemPriorityValueTotal
  })
  return sum
}

// const sum = getSumOfAllCommonItems(input1)

// console.log(sum)