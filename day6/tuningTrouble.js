import { getInput } from '../helper.js'

const input = getInput('day6/input.txt')
const input1 = input.split('')

export function getStartOfPacketMarkerPosition(input, numberOfUniqeChars) {
  for (let i = 0; i < input.length - numberOfUniqeChars; i++) {
    let marker = []
    marker.push(input[i])
    for (let j = 1; j < numberOfUniqeChars; j++) {
      if (marker.includes(input[i + j])) break
      marker.push(input[i + j])
      if (j == numberOfUniqeChars - 1) {
        return i + numberOfUniqeChars
      }
    }
  }
}

const answer = getStartOfPacketMarkerPosition(input1, 4)
console.log('ANSWER: ', answer)
