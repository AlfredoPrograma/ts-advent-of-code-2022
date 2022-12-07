import { readFile } from '../helpers/readFile.ts'

const inputString = readFile()
const splittedData = inputString.split('\n')

type Shape = 'ROCK' | 'PAPER' | 'SCISSORS'
interface ShapeRelation {
  wins: Shape,
  loses: Shape,
  draw: Shape
  value: number
}

const OPPONENT_SHAPES_MAP: Record<string, Shape> = {
  'A': 'ROCK',
  'B': 'PAPER',
  'C': 'SCISSORS'
}

const OPPONENT_RESULT_MAP: Record<string, keyof ShapeRelation> = {
  'X': 'wins',
  'Y': 'draw',
  'Z': 'loses'
}

const SHAPES_RELATION: Record<string, ShapeRelation> = {
  'ROCK': { wins: 'SCISSORS',  loses: 'PAPER', draw: 'ROCK', value: 1 },
  'PAPER': { wins: 'ROCK',  loses: 'SCISSORS', draw: 'PAPER', value: 2 },
  'SCISSORS': { wins: 'PAPER',  loses: 'ROCK', draw: 'SCISSORS', value: 3 }
}

let totalPoints = 0

for (const line of splittedData) {
  const [o, u] = line.split(' ')
  const [opponentShape, turnResult] = [OPPONENT_SHAPES_MAP[o], OPPONENT_RESULT_MAP[u]]

  const userShape = SHAPES_RELATION[opponentShape][turnResult]

  const { wins: winAgainst, loses: loseAgainst } = SHAPES_RELATION[userShape]

  let roundPoints = SHAPES_RELATION[userShape].value

  const roundValueMap = {
    [winAgainst]: 6,
    [userShape]: 3,
    [loseAgainst]: 0
  }

  roundPoints += roundValueMap[opponentShape]
  totalPoints += roundPoints 
}

// LOG RESULT
console.log(totalPoints)