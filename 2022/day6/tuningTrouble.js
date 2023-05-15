import { getInput } from '../helper.js'

const input = getInput('day6/input.txt')

export function getStartOfPacketMarkerPosition(input, numberOfUniqeChars) {
  const transformedInput = input.split('')
  for (let i = 0; i < transformedInput.length - numberOfUniqeChars; i++) {
    let marker = []
    marker.push(transformedInput[i])
    for (let j = 1; j < numberOfUniqeChars; j++) {
      if (marker.includes(input[i + j])) break
      marker.push(transformedInput[i + j])
      if (j == numberOfUniqeChars - 1) {
        return i + numberOfUniqeChars
      }
    }
  }
}

export const day6Answer = getStartOfPacketMarkerPosition(input, 14)

// console.log('ANSWER: ', day6Answer)
