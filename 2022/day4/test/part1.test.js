import { 
  isAssignmentOneInAssignmentTwo,
  isAssignmentDuplicated,
  elfPairDuplicateAssignmentCount
} from "../campCleanup.js";

describe('part 1', () => {
  let p1, p2, p3, p4, p5, p6, pairs1

  beforeEach(() => {
    p1 = [[2, 4],[6, 8]]
    p2 = [[2, 3],[4, 5]]
    p3 = [[5, 7],[7, 9]]
    p4 = [[2, 8],[3, 7]]
    p5 = [[6, 6],[4, 6]]
    p6 = [[2, 6],[4, 8]]
    pairs1 = '2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8'
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

  describe('elfPairDuplicateAssignmentCount', () => {
    it('returns the count of elf pairs containing a duplicate assignment', () => {
      expect(elfPairDuplicateAssignmentCount(pairs1)).toEqual(2)
    })
  })
})
