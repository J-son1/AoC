import { getInput } from '../helper.js'

const input = getInput('day3/input.txt')

const splitItem = (item) => {
  const halfValue = item.length / 2
  const compartment1 = item.slice(0, halfValue)
  const compartment2 = item.slice(-halfValue)
  return [compartment1, compartment2]
}
