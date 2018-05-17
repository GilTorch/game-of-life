export default function generateBoard(rows, columns, random) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < columns; j++) {
            if (random) {
                var randomValue=Math.round(Math.random() * 1);
                row.push({status:randomValue,newborn:randomValue});
            } else {
                row.push({status:0,newborn:0})
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

            liveNeighbors+=board[x][y].status;
        }
    }

    liveNeighbors-=board[row][col].status;
    return liveNeighbors;
}


export function applyGameRules(board) {
    var rows = board.length;
    var columns = board[0].length;
    var newBoard = generateBoard(rows, columns);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var liveNeighbors = getLiveNeighbors(i, j, board);
            if (board[i][j].status === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                newBoard[i][j].status = 0;
                newBoard[i][j].newborn=0;
            } else if (board[i][j].status === 0 && liveNeighbors === 3) {
                newBoard[i][j].status = 1;
                newBoard[i][j].newborn=1;
            } else {


                newBoard[i][j].status = board[i][j].status;
                newBoard[i][j].newborn=0;
            }
        }
    }
    return newBoard;
}
