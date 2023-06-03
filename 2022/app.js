import readline from 'readline'
import { getInput } from './helper.js'
import { getTopCaloriesCarriedTotal } from './day1/calorieCounting.js'
import { getMyTotalGameScore } from './day2/rockPaperScissors.js'
import { getSumOfAllCommonItems } from './day3/rucksackReorganization.js'
import { elfPairDuplicateAssignmentCount } from './day4/campCleanup.js'
import { getTopCrates, startingStacks } from './day5/supplyStacks.js'
import { getStartOfPacketMarkerPosition } from './day6/tuningTrouble.js'
import { FileSystem } from './day7/noSpaceLeftOnDevice.js'

const day1input = getInput('./day1/input.txt')
const day2input = getInput('./day2/input.txt')
const day3input = getInput('./day3/input.txt')
const day4input = getInput('./day4/input.txt')
const day5input = getInput('./day5/input.txt')
const day6input = getInput('./day6/input.txt')
const day7input = getInput('./day7/input.txt')
const fileSystem = new FileSystem()
fileSystem.generate(day7input)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const answers = [
  getTopCaloriesCarriedTotal(day1input, 3),
  getMyTotalGameScore(day2input),
  getSumOfAllCommonItems(day3input),
  elfPairDuplicateAssignmentCount(day4input),
  getTopCrates(day5input, startingStacks),
  getStartOfPacketMarkerPosition(day6input, 14),
  fileSystem.getDirectorySizesTotal()
]

const instructions = '\nCommands: \n\
  all - view all answers\n\
  [number] - to filter answers by day\n\
  x - to close app\n\
  help (h) - to view commands\n'

function app() {
  rl.question('Enter command > ', (userInput) => {
    const command = isNaN(Number(userInput.trim()))
      ? userInput.trim().toLowerCase
      : Number(userInput.trim())
    const completed = answers.length
    let number
    if (isNaN(command)) {
      switch (userInput.toLowerCase().trim()) {
        case 'all':
          answers.forEach((answer, i) => {
            number = i + 1
            console.log(`Day ${number}: `, answer)
          })
          break
        case 'x':
          rl.close()
          return
        case 'help' || 'h':
          console.log(instructions)
          break
        default:
          console.log(instructions)
      }
    } else if (command > completed) {
      console.log(`Please choose a number between 1-${completed}`)
    } else {
      console.log(`Day ${command}: `, answers[command - 1])
    }
    app(rl, answers)
  })
}

app()
