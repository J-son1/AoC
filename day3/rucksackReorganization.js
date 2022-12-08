import { getInput } from '../helper.js'

const input = getInput('day3/input.txt')

const splitItems = (item) => {
  const halfValue = item.length / 2
  const compartment1 = item.slice(0, halfValue)
  const compartment2 = item.slice(-halfValue)
  return [compartment1, compartment2]
}

const getCommonItemTypes = (compartment1, compartment2) => {
  let commonItemTypes = []
  let compartment1Arr = [...compartment1]
  let compartment2Arr = [...compartment2]
  compartment1Arr.forEach((char1) => {
    compartment2Arr.forEach((char2) => {
      if (char2 == char1 && !commonItemTypes.includes(char2)) {
        commonItemTypes.push(char2)
      }
    })
  })
  return commonItemTypes
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
  input.split('\n').forEach((items) => {
    const compartments = splitItems(items)
    const commonItems = getCommonItemTypes(compartments[0], compartments[1])
    const RucksackCommonItemPriorityValueTotal = getRucksackTotal(commonItems)
    sum += RucksackCommonItemPriorityValueTotal
  })
  return sum
}

const sum = getSumOfAllCommonItems(input)

console.log(sum)