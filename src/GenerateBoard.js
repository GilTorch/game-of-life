export default function generateBoard(rows, columns, randomValue) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < columns; j++) {
            if (randomValue) {
                row.push(Math.round(Math.random() * 1));
            } else {
                row.push(0)
            }

        }
        arr.push(row);
    }

    return arr;
}

function getLiveNeighbors(row, col, board) {
    var liveNeighbors = 0;

    var rows=board.length;
    var cols=board[0].length;

    for(var i=-1;i<2;i++){
        for(var j=-1;j<2;j++){
            
            var x=(row+i+rows)%rows;
            var y=(col+j+cols)%cols;

            liveNeighbors+=board[x][y];
        }
    }

    liveNeighbors-=board[row][col];
    return liveNeighbors;
}


export function applyGameRules(board) {
    var rows = board.length;
    var columns = board[0].length;
    var newBoard = generateBoard(rows, columns);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var liveNeighbors = getLiveNeighbors(i, j, board);
            if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                newBoard[i][j] = 0;
            } else if (board[i][j] === 0 && liveNeighbors === 3) {
                newBoard[i][j] = 1;
            } else {
                newBoard[i][j] = board[i][j];
            }
        }
    }
    return newBoard;
}
