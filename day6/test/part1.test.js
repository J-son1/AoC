import { getStartOfPacketMarkerPosition } from "../tuningTrouble.js";

describe('part 1', () => {
  let input1, input2, input3, input4

  beforeEach(() => {
    input1 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
    input2 = 'nppdvjthqldpwncqszvftbrmjlhg'
    input3 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
    input4 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
  })

  describe('getStartOfPacketMarkerPosition', () => {
    it('returns the number of characters that need to be processed before the first start-of-packet marker is detected', () => {
      expect(getStartOfPacketMarkerPosition(input1.split(''), 4)).toEqual(5)
      expect(getStartOfPacketMarkerPosition(input2.split(''), 4)).toEqual(6)
      expect(getStartOfPacketMarkerPosition(input3.split(''), 4)).toEqual(10)
      expect(getStartOfPacketMarkerPosition(input4.split(''), 4)).toEqual(11)
    })
  })
})
