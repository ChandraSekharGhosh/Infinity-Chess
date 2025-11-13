// import { blackPawn } from "../Data/pieces.js";
// import { whitePawn } from "../Data/pieces.js";
import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

//use to render pieces on board
function pieceRender(data) {
    data.forEach(row => {
        row.forEach(square => {
            //if square has piece
            if(square.piece) {
                const squareEl = document.getElementById(square.id);

                //create piece
                const piece = document.createElement("img");
                piece.src = square.piece.img;
                piece.classList.add("piece");
                
                //insert piece into square element
                squareEl.appendChild(piece);
                
            }
        });
    });
}

//this function calls when game starts for one time 
function initGameRander(data) {
    data.forEach((element) => {
        //console.log(element);
        
        const rowEl = document.createElement("div");
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.id = square.id;
            squareDiv.classList.add(square.colour, "square");

            //black

            //rander black rook
            if(square.id == "a8" || square.id == "h8") {
                square.piece = piece.blackRook(square.id);
            }
            
            //rander black knight
            if(square.id == "b8" || square.id == "g8") {
                square.piece = piece.balckKnight(square.id);
            }

            //rander black bishop
            if(square.id == "c8" || square.id == "f8") {
                square.piece = piece.balckBishop(square.id);
            }

            //rander black queen
            if(square.id == "d8") {
                square.piece = piece.blackQueen(square.id);
            }

            //rander black king
            if(square.id == "e8") {
                square.piece = piece.blackKing(square.id);
            }

            //rander black pawn
            if(square.id[1] == 7) {
                square.piece = piece.blackPawn(square.id);
            }

            //white

            //rander white rook
            if(square.id == "a1" || square.id == "h1") {
                square.piece = piece.whiteRook(square.id);
            }

            //rander white knight
            if(square.id == "b1" || square.id == "g1") {
                square.piece = piece.whiteKnight(square.id);
            }

            //rander white bishop
            if(square.id == "c1" || square.id == "f1") {
                square.piece = piece.whiteBishop(square.id);
            }

            //rander white queen
            if(square.id == "d1") {
                square.piece = piece.whiteQueen(square.id);
            }

            //rander white king
            if(square.id == "e1") {
                square.piece = piece.whiteKing(square.id);
            }

            //rander white pawn
            if(square.id[1] == 2) {
                square.piece = piece.whitePawn(square.id);
            }
            
            rowEl.appendChild(squareDiv);
        });
        rowEl.classList.add("squareRow");
        ROOT_DIV.appendChild(rowEl);
    });

    //console.log(data);
    pieceRender(data);
}

//rander hightlight circle
function renderHighlight(squareId) {
    const hightlightSpan = document.createElement("span");
    hightlightSpan.classList.add("highlight");
    document.getElementById(squareId).appendChild(hightlightSpan);
}

//clear all hightlights from the board
function clearHightlight() {
    const flatData = globalState.flat();
    // console.log(flatData);
    
}

export { initGameRander, renderHighlight, clearHightlight };