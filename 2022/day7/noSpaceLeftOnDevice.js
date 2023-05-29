import { getInput } from '../helper.js'

const input = getInput('day7/input.txt')

export class FileSystem {
  constructor() {
    this.root = null
  }

  generate(input) {
    const arrayOfArrays = inputToArrayOfArrays(input)
    let parent
    let current
    let newFile
    arrayOfArrays.forEach((line, i) => {
      if (line[0] === '$') {
        if (line[1] === 'cd') {
          if (i === 0) {
            this.root = new File('dir', line[2], [], null)
            current = this.root
          } else {
            if (line[2] === '..') {
              if (current !== this.root) {
                let cd = this.#changeDirectory(null, this.root, parent.name)
                parent = cd.currentParent
                current = cd.currentDirectory
              } else {
                current = this.root
              }
            } else {
              parent = current
              current = current.content.find((file) => {
                return file.type === 'dir' && file.name === line[2]
              })
            }
          }
        }
      }

      if (i !== 0 && line[0] === 'dir') {
        newFile = new File('dir', line[1], [])
        current.content.push(newFile)
      }

      if (i !== 0 && !isNaN(line[0])) {
        let filename = line.length > 2 ? `${line[1]}.${line[2]}` : line[1]
        newFile = new File('file', filename, null, line[0])
        current.content.push(newFile)
      }
    })
  }

  #changeDirectory(currentParent, currentDirectory, directoryName) {
    if (currentDirectory.type === 'dir') {
      if (currentDirectory.name === directoryName) {
        return { currentParent, currentDirectory }
      }

      let contentLength = currentDirectory.content.length
      for (let i = 0; i < contentLength; i++) {
        if (currentDirectory.type === 'dir') {
          return this.#changeDirectory(currentDirectory, currentDirectory.content[i], directoryName)
        }
      }
    }
  }

  getDirectorySizes(currentDirectory = this.root, directorySizes = {}) {
    if (directorySizes[currentDirectory.name] == null) {
      directorySizes[currentDirectory.name] = 0
    }

    for (let i = 0; i < currentDirectory.content.length; i++) {
      let file = currentDirectory.content[i]

      if (file.type === 'file') {
        directorySizes[currentDirectory.name] += file.size
      }
      
      if (file.type === 'dir') {
        let nestedDirectorySizes = this.getDirectorySizes(file, directorySizes)
        directorySizes[currentDirectory.name] += nestedDirectorySizes[file.name]
      }
    }
    return directorySizes
  }

  getDirectorySizesTotal(maxDirectorySize = Infinity) {
    let directorySizes = this.getDirectorySizes()
    return Object.entries(directorySizes)
      .reduce((total, [_name, size]) => {
        if (size <= maxDirectorySize) {
          return total += size
        }
        return total
      }, 0)
  }
}

class File {
  constructor(type, name, content, fileSize = 0) {
    this.type = type
    this.name = name
    this.content = content
    this.size = fileSize
  }
}

function inputToArrayOfArrays(input) {
  return input
    .split('\n')
    .map(line => line.split(' '))
    .map(line => /\d+/.test(line[0]) ? [Number(line[0]), ...line[1].split('.')] : line)
}
