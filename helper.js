import path from 'path'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'

export const getFilePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const inputFilePath = __dirname + '/' + filename
  return inputFilePath
}

export const getInput = (filePath) => {
  const inputFilePath = getFilePath(filePath)
  return readFileSync(inputFilePath, 'utf-8')
}
