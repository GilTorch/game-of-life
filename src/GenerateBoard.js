export default function generateBoard(rows,columns,randomValue){
    var arr=[];


    for (var i=0;i<rows;i++){
        var row=[];
        for(var j=0;j<columns;j++){
           if(randomValue){
            row.push(Math.round(Math.random()*1)); 
           } 
           else{
               row.push(0)
           }


        }
        arr.push(row);
    }

    return arr;
}


function getLiveNeighbors(cellRow,cellCol,board){
    var liveNeighbors=0;
    for(var i=cellRow-1;i<=cellRow+1;i++){
      for(var j=cellCol-1;j<=cellCol+1;j++){
        if(i>=0 && i<board.length){
          if(j>=0 && j<board[0].length){
            if(i==cellRow && i===cellCol)
              continue;
            if(board[i][j]===1)
              liveNeighbors++;
          }
        }
      }
    }
  
    return liveNeighbors;
  }
  
  

export function applyGameRules(board){
    console.log('called');
    var rows=board.length;
    var columns=board[0].length;
    var newBoard=generateBoard(rows,columns);
    for(var i=0;i<rows;i++){
        for(var j=0;j<columns;j++){

            var liveNeighbors=getLiveNeighbors(i,j,board);
            if(board[i][j]===1 && (liveNeighbors<2 || liveNeighbors>3)){
                newBoard[i][j]=0;
            }else if(board[i][j]===0 && liveNeighbors===3){
                newBoard[i][j]=1;
            }else{
                newBoard[i][j]=board[i][j];
            }
            
        }
    }
    return newBoard;
}


