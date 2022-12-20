import { getInput } from '../helper.js'

export const input = getInput('day4/input.txt')
export const input1 = input.split('\n')
  .map(elfPair => elfPair.split(','))
  .map(elfPair => elfPair.map(sections => sections.split('-')))
  .map(elfPair => elfPair.map(sections => sections.map(section => Number(section))))

export function isAssignmentOneInAssignmentTwo(assignmentOne, assignmentTwo) {
  const a2SectionCount = assignmentTwo[1] - assignmentTwo[0] + 1
  const a2range = Array.from({ length: a2SectionCount }, (_, i) => i + assignmentTwo[0])
  return (a2range.includes(assignmentOne[0]) && a2range.includes(assignmentOne[1])) ? true : false
}
