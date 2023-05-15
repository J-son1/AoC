import { getStartOfPacketMarkerPosition } from "../tuningTrouble.js";

describe('part 1 and 2', () => {
  let input1, input2, input3, input4, input5, input6, input7, input8, input9

  beforeEach(() => {
    input1 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
    input2 = 'nppdvjthqldpwncqszvftbrmjlhg'
    input3 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
    input4 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
    input5 = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
    input6 = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
    input7 = 'nppdvjthqldpwncqszvftbrmjlhg'
    input8 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'
    input9 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'
  })

  describe('getStartOfPacketMarkerPosition', () => {
    it('returns the number of characters that need to be processed before the first start-of-packet marker is detected', () => {
      expect(getStartOfPacketMarkerPosition(input1, 4)).toEqual(5)
      expect(getStartOfPacketMarkerPosition(input2, 4)).toEqual(6)
      expect(getStartOfPacketMarkerPosition(input3, 4)).toEqual(10)
      expect(getStartOfPacketMarkerPosition(input4, 4)).toEqual(11)

      expect(getStartOfPacketMarkerPosition(input5, 14)).toEqual(19)
      expect(getStartOfPacketMarkerPosition(input6, 14)).toEqual(23)
      expect(getStartOfPacketMarkerPosition(input7, 14)).toEqual(23)
      expect(getStartOfPacketMarkerPosition(input8, 14)).toEqual(29)
      expect(getStartOfPacketMarkerPosition(input9, 14)).toEqual(26)
    })
  })
})
