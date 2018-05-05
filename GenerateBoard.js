export function generateBoard(rows,columns){
    var arr=[];

    for (var i=0;i<rows;i++){
        var row=[];
        for(var j=0;j<columns;j++){
            row.push(0);
        }
        arr.push(row);
    }

    return arr;
}