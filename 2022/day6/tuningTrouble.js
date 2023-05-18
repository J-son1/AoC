import { getInput } from '../helper.js'

const input = getInput('day6/input.txt')

export function getStartOfPacketMarkerPosition(input, numberOfUniqeChars) {
  const signalString = input.split('')
  let marker
  let position
  for (let markerStart = 0; markerStart < signalString.length - numberOfUniqeChars; markerStart++) {  
    marker = []
    marker.push(signalString[markerStart])
    for (let markerEnd = 1; markerEnd < numberOfUniqeChars; markerEnd++) {
      position = markerStart + markerEnd
      if (marker.includes(signalString[position])) break
      marker.push(signalString[position])
      if (markerEnd === numberOfUniqeChars - 1) {
        return markerStart + numberOfUniqeChars
      }
    }
  }
}

export const day6Answer = getStartOfPacketMarkerPosition(input, 14)

// console.log('ANSWER: ', day6Answer)
