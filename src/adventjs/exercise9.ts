import { Ctest } from '../test'

type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'
const board = ['·····', '*····', '@····', 'o····', 'o····']
function moveTrain(board: Board, mov: Movement): Result {
  const train = board.reduce(
    (acc, row, y) => {
      const x = row.indexOf('@')
      if (x !== -1) {
        return { x, y }
      }
      return acc
    },
    undefined as { x: number; y: number } | undefined,
  )

  if (train === undefined) return 'none'
  console.log(train)
  let result: Result = 'none'
  switch (mov) {
    case 'U':
      if (train.y === 0) result = 'crash'
      if (board[train.y - 1]?.split('')[train.x] === 'o') result = 'crash'
      if (board[train.y - 1]?.split('')[train.x] === '·') result = 'none'
      if (board[train.y - 1]?.split('')[train.x] === '*') result = 'eat'
      return result
    case 'D':
      if (train.y === board.length - 1) result = 'crash'
      if (board[train.y + 1]?.split('')[train.x] === 'o') result = 'crash'
      if (board[train.y + 1]?.split('')[train.x] === '·') result = 'none'
      if (board[train.y + 1]?.split('')[train.x] === '*') result = 'eat'
      return result
    case 'R':
      if (train.x === board[train.y].split('').length - 1) result = 'crash'
      if (board[train.y]?.split('')[train.x + 1] === 'o') result = 'crash'
      if (board[train.y]?.split('')[train.x + 1] === '·') result = 'none'
      if (board[train.y]?.split('')[train.x + 1] === '*') result = 'eat'
      return result
    case 'L':
      if (train.x === 0) result = 'crash'
      if (board[train.y]?.split('')[train.x - 1] === 'o') result = 'crash'
      if (board[train.y]?.split('')[train.x - 1] === '·') result = 'none'
      if (board[train.y]?.split('')[train.x - 1] === '*') result = 'eat'
      return result
    default:
      break
  }
  return result
}

Ctest(moveTrain(board, 'U'), 'eat')
Ctest(moveTrain(board, 'D'), 'crash')
Ctest(moveTrain(board, 'R'), 'none')
Ctest(moveTrain(board, 'L'), 'crash')
