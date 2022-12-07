import { readFile } from '../helpers/readFile.ts'

const inputString = readFile()

// Divide input by groups
const splittedData = inputString.split('\n')

const maxCaloriesGroupsTotal: number[] = []
let currentAcc = 0

splittedData.forEach((val) => {
  if (val === '') {
    maxCaloriesGroupsTotal.push(currentAcc)
    currentAcc = 0
    return
  }

  const parsedVal = Number(val)
  currentAcc += parsedVal
})

// Get top N numbers values recursively
const getTopNumbers = (numbersArr: number[], topNumber: number, maximums: number[] = []): number[] => {
  if (maximums.length === topNumber) return maximums

  const removedCalculatedValues = numbersArr.filter(value => !maximums.includes(value))
  const maxVal = Math.max(...removedCalculatedValues)

  return getTopNumbers(numbersArr, topNumber, [...maximums, maxVal])
}

const topThreeCalories = getTopNumbers(maxCaloriesGroupsTotal, 3)
const totalTopThreeCalories = topThreeCalories.reduce((acc, val) => acc + val, 0)

// Result
console.log(totalTopThreeCalories)