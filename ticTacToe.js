// Tic-tac-toe
// Write a function ticTacToe() that accepts one argument, a string representation of a tic-tac-toe grid,
// and returns an array of 2 numbers: the number of ways in which X or O can instantly make a winning
// move.
// The 0th index of the returned array should be the number of ways X can win if it is currently X's turn. The
// other element in the array should be the number of ways O can win if it is currently O's turn.
// The input grid will be provided as a string containing only the characters 'X', 'O', ' ', or '\n'.
// For example, the following input corresponds to the following tic-tac-toe grid:
// "X X\n OO\nXOO"
// X| |X
// -----
// |O|O
// -----
// X|O|O
// For that input, we would expect the function to return the array [2, 2]. This is because if it was X's
// turn, they can win by making their next move in either the middle cell of the top row or the left cell of
// the middle row. If it was O's turn, they could make a move in either of those same 2 spaces to also win.
// If the input grid represents a board for which either X or O has already won, the return array should
// simply be [0,0].

const ticTacToe = (board) =>
{
  let row1 = [board[0],board[1],board[2]]
  let row2 = [board[4],board[5],board[6]]
  let row3 = [board[8],board[9],board[10]]
  let matrix = [row1, row2, row3]
  console.log(matrix)
  let solution = [0,0]
  
  // check rows
  for (let r = 0; r<matrix.length; r++) 
  {
    let xs = 0;
    let os = 0;
    for (let c=0; c<matrix[0].length; c++) 
    {
      if (matrix[r][c] === 'X') xs += 1
      else if (matrix[r][c] === 'O') os += 1
    }
    if (xs === 2 && os === 0) 
    {
        solution[0]++
    } 
    else if (os === 2 && xs === 0) 
    {
        solution[1]++
    }
  }

  // check columns
  for (let c = 0; c<matrix[0].length; c++) 
  {
    let xs = 0;
    let os = 0;
    for (let r=0; r<matrix.length; r++) 
    {
      if (matrix[r][c] === 'X') xs += 1
      else if (matrix[r][c] === 'O') os += 1
    }
    if (xs === 2 && os === 0) 
    {
        solution[0]++
    } 
    else if (os === 2 && xs === 0) 
    {
        solution[1]++
    }
  }

  //check diagonal
  let mid = matrix[1][1]
  if(mid === ' ' && matrix[0][0] === 'X' && matrix[2][2] === 'X') solution[0]++
  if(mid === ' ' && matrix[0][2] === 'X' && matrix[2][0] === 'X') solution[0]++
  if(mid === ' ' && matrix[0][0] === 'O' && matrix[2][2] === 'O') solution[1]++
  if(mid === ' ' && matrix[0][2] === 'O' && matrix[2][0] === 'O') solution[1]++
  return solution
}
console.log(ticTacToe("X X\n OO\nXOO"))

