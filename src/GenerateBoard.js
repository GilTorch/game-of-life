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