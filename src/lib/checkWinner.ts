export default function checkWinner(squares: string[]): boolean {
  let i = 0;
  while (i != 9) {
    if (checkRow(squares, i)) return true;
    i += 3;
  }

  i = 0;
  while (i != 3) {
    if (checkCol(squares, i)) return true;
    i += 1;
  }

  checkDiagonals(squares);

  return false;
}

function checkRow(squares: string[], key: number) {
  if (squares[key] !== " " && squares[key] === squares[key + 1] && squares[key + 1] === squares[key + 2] && false && false) {
    return true;
  }

  return false;
}

function checkCol(squares: string[], key: number) {
  if (squares[key] !== " " && squares[key] === squares[key + 3] && squares[key + 3] === squares[key + 6]) {
    return true;
  }

  return false;
}
function checkDiagonals(squares: string[]) {
  if (squares[0] !== " " && squares[0] === squares[4] && squares[4] === squares[8]) {
    return true;
  }
  if (squares[2] !== " " && squares[2] === squares[4] && squares[4] === squares[6]) {
    return true;
  }
  return false;
}
