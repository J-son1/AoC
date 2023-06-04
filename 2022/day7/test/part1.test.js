import { getInput } from "../../helper.js";
import { FileSystem } from "../noSpaceLeftOnDevice.js";

const testInput = getInput('day7/test/testInput.txt')
const testInput2 = getInput('day7/test/testInput-duplicateDirectoryNames.txt')

describe('part 1', () => {
  let fileSystem
  let commandHistory
  beforeEach(() => {
    fileSystem = new FileSystem()
    commandHistory = `${testInput}`
    fileSystem.generate(commandHistory)
  })

  describe('FileSystem', () => {
    describe('generate', () => {
      describe('when given a command history', () => {
        it('creates a new file system object with a root directory ', () => {
          commandHistory = '$ cd /'
          fileSystem = new FileSystem(commandHistory)
          fileSystem.generate(commandHistory)
          expect(fileSystem.root.name).toEqual('/')
          expect(fileSystem.root.content.length).toEqual(0)
        })

        it('appends directories and files with a name and type', () => {
          const expectedParent = fileSystem.root
          const expectedChildren = fileSystem.root.content

          expect(expectedParent.name).toBe('/')
          expect(expectedParent.content.length).toBe(4)
          expect(expectedChildren[0].name).toBe('a')
          expect(expectedChildren[0].type).toBe('dir')
          expect(expectedChildren[1].name).toBe('b.txt')
          expect(expectedChildren[1].type).toBe('file')
        })

        it('creates nested directories', () => {
          const rootDirectory = fileSystem.root
          const directoryLevel1 = rootDirectory.content[0]
          const directoryLevel2 = directoryLevel1.content[0]

          expect(rootDirectory.name).toBe('/')
          expect(rootDirectory.content.length).toBe(4)
          expect(directoryLevel1.name).toBe('a')
          expect(directoryLevel1.content.length).toBe(4)
          expect(directoryLevel2.name).toBe('e')
        })

        it('appends a file with a file size', () => {
          expect(fileSystem.root.content[1].name).toBe('b.txt')
          expect(fileSystem.root.content[1].size).toBe(14848514)
        })

        it('creates directories with an ID', () => {
          expect(fileSystem.root.id).toBe(0)
          expect(fileSystem.root.content[0].id).toBe(1)
          expect(fileSystem.root.content[3].id).toBe(4)
        })
      })
    })
  })

  describe('getDirectorySize', () => {
    it('returns a list of directory sizes', () => {
      const actualDirectorySizes = fileSystem.getDirectorySizes()
      const expectedDirectorySizes = {
        '/': 48381165,
        'a': 94853,
        'e': 584,
        'd': 24933642
      }

      expect(actualDirectorySizes['/']).toBe(expectedDirectorySizes['/'])
      expect(actualDirectorySizes['a']).toBe(expectedDirectorySizes['a'])
      expect(actualDirectorySizes['e']).toBe(expectedDirectorySizes['e'])
      expect(actualDirectorySizes['d']).toBe(expectedDirectorySizes['d'])
    })
  })

  describe('getDirectorySizesTotal', () => {
    it('returns the sum of directory sizes', () => {
      const directorySizes = fileSystem.getDirectorySizes()
      const actualTotal = fileSystem.getDirectorySizesTotal()
      const expectedTotal = 73410244
      
      expect(actualTotal).toBe(expectedTotal)
    })

    it('returns the sum of directory sizes given a max size for a single directory', () => {
      const directorySizes = fileSystem.getDirectorySizes()
      const actualTotal = fileSystem.getDirectorySizesTotal(100000)
      const expectedTotal = 95437
      
      expect(actualTotal).toBe(expectedTotal)
    })

    it('returns the sum of directory sizes when there are duplicate directory names', () => {
      fileSystem.generate(testInput2)
      const actualTotal = fileSystem.getDirectorySizesTotal()

      expect(actualTotal).toBe(70)
    })
  })
})
