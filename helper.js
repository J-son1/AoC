import path from 'path'
import { readFileSync } from 'fs'

export const getInput = (filePath) => {
  const inputFilePath = path.resolve(filePath)
  return readFileSync(inputFilePath, 'utf-8')
}
