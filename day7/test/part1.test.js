import { getInput } from "../../helper.js";
// import {} from "../tuningTrouble.js";

const testInput = getInput('day7/input-test.txt')
const testInput1 = testInput.split('\n')
  .map(line => line.split(' '))
  .map(line => /\d+/.test(line[0]) ? [Number(line[0]), ...line.slice(1)] : line)

console.log(testInput1)

describe('part 1', () => {
  beforeEach(() => {
  })

  describe('', () => {
    it('', () => {
    })
  })
})
