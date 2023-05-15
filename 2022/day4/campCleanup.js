import { getInput } from '../helper.js'

export const input = getInput('day4/input.txt')


export function isAssignmentOneInAssignmentTwo(assignmentOne, assignmentTwo) {
  const a2SectionCount = assignmentTwo[1] - assignmentTwo[0] + 1
  const a2range = Array.from({ length: a2SectionCount }, (_, i) => i + assignmentTwo[0])
  return (a2range.includes(assignmentOne[0]) && a2range.includes(assignmentOne[1])) ? true : false
}

export function isAssignmentDuplicated(assignmentOne, assignmentTwo) {
  const assignmentOneResult = isAssignmentOneInAssignmentTwo(assignmentOne, assignmentTwo)
  const assignmentTwoResult = isAssignmentOneInAssignmentTwo(assignmentTwo, assignmentOne)
  return (assignmentOneResult || assignmentTwoResult) ? true : false
}

export function elfPairDuplicateAssignmentCount(input) {
  const transformedInput = input.split('\n')
    .map(elfPair => elfPair.split(','))
    .map(elfPair => elfPair.map(sections => sections.split('-')))
    .map(elfPair => elfPair.map(sections => sections.map(section => Number(section))))

  let duplicateAssignmentCount = 0
  transformedInput.forEach(pair => { if(isAssignmentDuplicated(pair[0], pair[1])) duplicateAssignmentCount++ })
  return duplicateAssignmentCount
}

export const day4Answer = elfPairDuplicateAssignmentCount(input)

// console.log('ANSWER: ', day4Answer)
