import { getInput } from '../helper.js'

const input = getInput('day4/input.txt')
const input1 = input.split('\n')
  .map(elfPair => elfPair.split(','))
  .map(elfPair => elfPair.map(sections => sections.split('-')))
  .map(elfPair => elfPair.map(sections => sections.map(section => Number(section))))

