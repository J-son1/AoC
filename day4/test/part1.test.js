import { getInput } from "../../helper";
import { input1 } from "../campCleanup.js";
import { isAssignmentOneInAssignmentTwo, isAssignmentDuplicated } from "../campCleanup.js";

describe('part 2', () => {
  let p1, p2, p3, p4, p5, p6

  beforeEach(() => {
    p1 = [[2, 4],[6, 8]]
    p2 = [[2, 3],[4, 5]]
    p3 = [[5, 7],[7, 9]]
    p4 = [[2, 8],[3, 7]]
    p5 = [[6, 6],[4, 6]]
    p6 = [[2, 6],[4, 8]]
  })

  describe('isAssignmentOneInAssignmentTwo', () => {
    it('returns true if assignment one is fully contained within assignment two; else, returns false', () => {
      expect(isAssignmentOneInAssignmentTwo(p1[0], p1[1])).toEqual(false)
      expect(isAssignmentOneInAssignmentTwo(p2[0], p2[1])).toEqual(false)
      expect(isAssignmentOneInAssignmentTwo(p3[0], p3[1])).toEqual(false)
      expect(isAssignmentOneInAssignmentTwo(p4[0], p4[1])).toEqual(false)
      expect(isAssignmentOneInAssignmentTwo(p5[0], p5[1])).toEqual(true)
      expect(isAssignmentOneInAssignmentTwo(p6[0], p6[1])).toEqual(false)
    })
  })

  describe('isAssignmentDuplicated', () => {
    it('returns true if an assignment within an elf pair is duplicated; else, returns false', () => {
      expect(isAssignmentDuplicated(p1[0], p1[1])).toEqual(false)
      expect(isAssignmentDuplicated(p2[0], p2[1])).toEqual(false)
      expect(isAssignmentDuplicated(p3[0], p3[1])).toEqual(false)
      expect(isAssignmentDuplicated(p4[0], p4[1])).toEqual(true)
      expect(isAssignmentDuplicated(p5[0], p5[1])).toEqual(true)
      expect(isAssignmentDuplicated(p6[0], p6[1])).toEqual(false)
    })
  })
})