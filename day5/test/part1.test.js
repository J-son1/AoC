import { 
  getTopCrates
} from "../supplyStacks.js";

describe('part 1', () => {

  let startingStacks
  let input

  beforeEach(() => {
    startingStacks = [['Z', 'N'], ['M', 'C', 'D'], ['P']]
    input = [[1, 2, 1], [3, 1, 3], [2, 2, 1], [1, 1, 2]]
  })

  describe('getTopCrates', () => {
    it('returns the crate at the top of each stack after the rearrangment procedure completes', () => {
      expect(getTopCrates(input, startingStacks)).toEqual('CMZ')
    })
  })
})
