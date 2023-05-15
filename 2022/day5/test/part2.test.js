import { 
  getTopCrates
} from "../supplyStacks.js";

describe('part 2', () => {

  let startingStacks
  let input

  beforeEach(() => {
    startingStacks = [['Z', 'N'], ['M', 'C', 'D'], ['P']]
    input = 'move 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2'
  })

  describe('getTopCrates', () => {
    it('returns the crate at the top of each stack after the rearrangment procedure completes', () => {
      expect(getTopCrates(input, startingStacks)).toEqual('MCD')
    })
  })
})
