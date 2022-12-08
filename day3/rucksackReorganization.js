import { getInput } from '../helper.js'

const input = getInput('day3/input.txt')

// const testInput = 'vJrwpWtwJgWrhcsFMMfFFhFp'
// const testInput = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'

const splitItem = (item) => {
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

const getPriorityValue = (item) => {
  const isUpperCase = /[A-Z]/.test(item)
  if (isUpperCase) {
    return item.charCodeAt(0) - 38
  }
  return item.charCodeAt(0) - 96
}

// const itemPriorityValue = getPriorityValue('A')

// console.log(itemPriorityValue)