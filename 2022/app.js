import readline from 'readline'
import { day1Answer } from './day1/calorieCounting.js'
import { day2Answer } from './day2/rockPaperScissors.js'
import { day3Answer } from './day3/rucksackReorganization.js'
import { day4Answer } from './day4/campCleanup.js'
import { day5Answer } from './day5/supplyStacks.js'
import { day6Answer } from './day6/tuningTrouble.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const answers = [
  day1Answer,
  day2Answer,
  day3Answer,
  day4Answer,
  day5Answer,
  day6Answer
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
