import { getCommonItemType, getSumOfAllCommonItems } from "../rucksackReorganization";

describe('part 2', () => {
  let group1, group2, group3, group4, group5, group6, group7, group8, groups1, groups2, groups3, groups4

  beforeEach(() => {
    group1 = ['TZZjzzZLfZbzgzZNNJZjwCVbwMmhwCbBpCMMBCbM', 'qRQPDqnWFQDtCCBQmQwmGGVG', 'FPllWPDPrncZsLVrgSZTSZ']
    group2 = ['RczPzRzvflVwfplrZQglmmJJDGQJ', 'nFbBWWFZbZtJDjmgmqqF', 'bnMNZWnWWHTLBBdwcCwcPCwpCSpPLc']
    group3 = ['CjpMtptpChnpMnCSGjSShMqpTVVWFFTVNVNLmHwmHLTcFnVT', 'fglsGJsJssBPszvddgTFVTFFFBwwTVVmHVFF', 'JgJrDgsPfMDhGhCRQC']
    group4 = ['ZVhCwqvFZVpwdhLdqLhtvcGBcSNLRSRBGRBNGNSSmN', 'lTjnlnjgslsjJTgrMrQQjjTSGSpcGRSmDBNSNJcDSBbRmS', 'zMrjllgnPrlrnlWrQgTgzgvwqpFwZHChHvPwCtVptCVt']
    group5 = ['RTjjznsTsnnrzRrmTmrNNCMhwMrCNNCwWhCMGN', 'DvScpDDVfBPqVcSbDpbfHpqwCWGJCwCJhvFdFFwlMGJWCG', 'fhHPbhZSpDbDTmsTZTjRzzQz']
    group6 = ['QbVQvNrrdFcbcMvvdNrcGrrczPnPplPnfnpzwpgmlflRVwwP', 'jBHLRqZWtLLqWDhBLshBCLsHgpfftfPmmpfpwnwfwJgfpfPn', 'WCRhsLDsDLBChTLWHChFTTMdGTQGvGQcMQNGMd']
    group7 = ['abcde','afghi','ajklmn']
    group8 = ['bopqrs','btuvwx','byzABC']
    groups1 = 'TZZjzzZLfZbzgzZNNJZjwCVbwMmhwCbBpCMMBCbM\nqRQPDqnWFQDtCCBQmQwmGGVG\nFPllWPDPrncZsLVrgSZTSZ\n\
      RczPzRzvflVwfplrZQglmmJJDGQJ\nnFbBWWFZbZtJDjmgmqqF\nbnMNZWnWWHTLBBdwcCwcPCwpCSpPLc\n\
      CjpMtptpChnpMnCSGjSShMqpTVVWFFTVNVNLmHwmHLTcFnVT\nfglsGJsJssBPszvddgTFVTFFFBwwTVVmHVFF\nJgJrDgsPfMDhGhCRQC'
    groups2 = 'ZVhCwqvFZVpwdhLdqLhtvcGBcSNLRSRBGRBNGNSSmN\nlTjnlnjgslsjJTgrMrQQjjTSGSpcGRSmDBNSNJcDSBbRmS\nzMrjllgnPrlrnlWrQgTgzgvwqpFwZHChHvPwCtVptCVt\n\
      RTjjznsTsnnrzRrmTmrNNCMhwMrCNNCwWhCMGN\nDvScpDDVfBPqVcSbDpbfHpqwCWGJCwCJhvFdFFwlMGJWCG\nfhHPbhZSpDbDTmsTZTjRzzQz\n\
      QbVQvNrrdFcbcMvvdNrcGrrczPnPplPnfnpzwpgmlflRVwwP\njBHLRqZWtLLqWDhBLshBCLsHgpfftfPmmpfpwnwfwJgfpfPn\nWCRhsLDsDLBChTLWHChFTTMdGTQGvGQcMQNGMd'
    groups3 = 'abcde\nafghi\najklmn\nbopqrs\nbtuvwx\nbyzABC'
    groups4 = 'aBcaAbC\neFgaEfG\nhIjaHiJ\nkLmjKlm\nnOpjNoP\nqRsjQrS'
  })

  describe('getCommonItemType', () => {
    it('returns a common item type for a given elf group', () => {
      expect(getCommonItemType(group1)).toEqual('V')
      expect(getCommonItemType(group2)).toEqual('Z')
      expect(getCommonItemType(group3)).toEqual('G')
      expect(getCommonItemType(group4)).toEqual('p')
      expect(getCommonItemType(group5)).toEqual('h')
      expect(getCommonItemType(group6)).toEqual('R')
      expect(getCommonItemType(group7)).toEqual('a')
      expect(getCommonItemType(group8)).toEqual('b')
    })
  })

  describe('getSumOfAllCommonItems', () => {
    it('returns the sum of the all common item types priority values', () => {
      expect(getSumOfAllCommonItems(groups1)).toEqual(133)
      expect(getSumOfAllCommonItems(groups2)).toEqual(68)
      expect(getSumOfAllCommonItems(groups3)).toEqual(3)
      expect(getSumOfAllCommonItems(groups4)).toEqual(11)
    })
  })
})