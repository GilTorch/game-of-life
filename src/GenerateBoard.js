export default function generateBoard(rows,columns){
    var arr=[];

    for (var i=0;i<rows;i++){
        var row=[];
        for(var j=0;j<columns;j++){
            row.push(Math.round(Math.random()*1));
        }
        arr.push(row);
    }

    return arr;
}