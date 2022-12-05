import { getInput } from '../helper.js'

const input = getInput('day2/input.txt')
const encryptedStrategyGuideArray = input.split('\n').map(round => round.split(' '))

const SHAPE_VALUES = { 'Rock': ['A', 'X'], 'Paper': ['B', 'Y'], 'Scissors': ['C', 'Z'] }
const SHAPE_SCORES = { 'Rock': 1, 'Paper': 2, 'Scissors': 3 }
const OUTCOME_SCORES = { 'Lose': 0, 'Draw': 3, 'Win': 6 }
const GAME_RULES = {
  'Rock': { 'Rock': 'Draw', 'Paper': 'Lose', 'Scissors': 'Win' },
  'Paper': { 'Rock': 'Win', 'Paper': 'Draw', 'Scissors': 'Lose' },
  'Scissors': { 'Rock': 'Lose', 'Paper': 'Win', 'Scissors': 'Draw' }
}
const ENCRYPTED_STRATEGY_VALUES = { 'Lose': ['X'], 'Draw': ['Y'], 'Win': ['Z'] }

const getShape = (shapeValues, letter) => {
  return Object.keys(shapeValues).find((shape) => shapeValues[shape].includes(letter))
}

const getOutcomeStrategy = (encryptedStrategyValues, letter) => {
  return Object.keys(encryptedStrategyValues).find((shape) => encryptedStrategyValues[shape].includes(letter))
}

const getMyShape = (gameRules, opponentShape, strategy) => {
  if (strategy == 'Win') { strategy = 'Lose'}
  if (strategy == 'Lose') { strategy = 'Win'}
  for (const [shape, outcome] of Object.entries(gameRules[opponentShape])) {
    if (outcome == strategy) return shape
  }
}

const getShapeScore = (shapeScores, shape) => {
  return shapeScores[shape]
}

const getMyOutcome = (rules, shapeValues, roundData) => {
  const opponentShape = getShape(shapeValues, roundData[0])
  const myShape = getShape(shapeValues, roundData[1])
  return rules[myShape][opponentShape]
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
    myShape = getShape(SHAPE_VALUES, roundData[1])
    myShapeScore = getShapeScore(SHAPE_SCORES, myShape)
    myOutcome = getMyOutcome(GAME_RULES, SHAPE_VALUES, roundData)
    myOutcomeScore = getMyOutcomeScore(OUTCOME_SCORES, myOutcome)
    myRoundScore = getMyRoundScore(myShapeScore, myOutcomeScore)
    myTotalGameScore += myRoundScore
  });
  return myTotalGameScore
}

let myScore = getMyTotalGameScore(encryptedStrategyGuideArray)

console.log(myScore)
