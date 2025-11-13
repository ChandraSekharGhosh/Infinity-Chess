
//for each square
function Square(colour, id, piece) {

    const hightlight = function (){
        console.log("square");
        console.log(this);
    }

    return { colour, id, piece, hightlight };
}

function SquareRow(rowId) {

    const squarRow = [];
    const abcd = ["a", "b", "c", "d", "e", "f", "g", "h"];

    if (rowId % 2 == 0) {

        abcd.forEach((element, index) => {
            if(index % 2 == 0){
                squarRow.push(Square("white", element + rowId, null));
            } else {
                squarRow.push(Square("black", element + rowId, null));
            }
            
        });
        
    } else {
        abcd.forEach((element, index) => {
            if(index % 2 == 0){
                squarRow.push(Square("black", element + rowId, null));
            } else {
                squarRow.push(Square("white", element + rowId, null));
            }
            
        });
    }

    return squarRow;
}

function initGame() {
    return [
        SquareRow(8), 
        SquareRow(7), 
        SquareRow(6), 
        SquareRow(5), 
        SquareRow(4),
        SquareRow(3), 
        SquareRow(2), 
        SquareRow(1)
    ];
}


export { initGame };
