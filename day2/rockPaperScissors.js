import { getInput } from '../helper.js'

const input = getInput('day2/input.txt')
const encryptedStrategyGuideArray = input.split('\n').map(round => round.split(' '))

const SHAPES = { 
  'Rock': { value: 1, encrypedValues: ['A', 'X'], gameOutcome: { 'Rock': 'Draw', 'Paper': 'Lose', 'Scissors': 'Win' }}, 
  'Paper': { value: 2, encrypedValues: ['B', 'Y'], gameOutcome: { 'Rock': 'Win', 'Paper': 'Draw', 'Scissors': 'Lose' }},
  'Scissors': { value: 3, encrypedValues: ['C', 'Z'], gameOutcome: { 'Rock': 'Lose', 'Paper': 'Win', 'Scissors': 'Draw' }}
}
const OUTCOME_SCORES = { 'Lose': 0, 'Draw': 3, 'Win': 6 }

const getShape = (shapes, letter) => {
  let result
  Object.entries(shapes).find((shapeData) => {
    let [shape, shapeValues] = shapeData
    if (shapes[shape].encrypedValues.includes(letter)) {
      result = shape
    }
  })
  return result
}

const getShapeScore = (shapes, shape) => {
  return shapes[shape].value
}

const getMyOutcome = (shapes, roundData) => {
  const opponentShape = getShape(shapes, roundData[0])
  const myShape = getShape(shapes, roundData[1])
  return shapes[myShape].gameOutcome[opponentShape]
}

const getMyOutcomeScore = (outcomeScores, outcome) => {
  return outcomeScores[outcome]
}

const getMyRoundScore = (shapeScore, outcomeScore) => {
  return shapeScore + outcomeScore
}

const getMyTotalGameScore = (input) => {
  let myTotalGameScore = 0
  let myShape
  let myShapeScore
  let myOutcome
  let myOutcomeScore
  let myRoundScore
  input.forEach(roundData => {
    myShape = getShape(SHAPES, roundData[1])
    myShapeScore = getShapeScore(SHAPES, myShape)
    myOutcome = getMyOutcome(SHAPES, roundData)
    myOutcomeScore = getMyOutcomeScore(OUTCOME_SCORES, myOutcome)
    myRoundScore = getMyRoundScore(myShapeScore, myOutcomeScore)
    myTotalGameScore += myRoundScore
  });
  return myTotalGameScore
}

let myScore = getMyTotalGameScore(encryptedStrategyGuideArray)

console.log(myScore)
