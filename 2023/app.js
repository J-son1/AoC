import readline from 'readline'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const answers = [

]

const instructions = `\nCommands:
  all      - view all answers
  [number] - to filter answers by day
  x        - to close app
  help (h) - to view commands\n`

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
