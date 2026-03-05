import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight } from "../Rander/main.js";
import { clearHightlight } from "../Rander/main.js";
import { selfHighlight } from "../Rander/main.js";
import { claerPreviousSelfHighlight } from "../Rander/main.js";
import { moveElement } from "../Rander/main.js";

//hightlighted or not => state
let hightlight_state = false;

//current self-highlighted square state
let selfHighlightState = null;

//in move state or not
let moveState = null;

//white pawn event
function whitePawnClick({piece}) {
    //if clicked on same element twice
    if (piece == selfHighlightState) {
        claerPreviousSelfHighlight(selfHighlightState);
        selfHighlightState = null;
        clearHightlight();
        return;
    }

    //highlight clicked element
    selfHighlight(piece);
    selfHighlightState = piece;

    //add piece as move state
    moveState = piece;

    const current_pos = piece.current_position;
    const flatArray = globalState.flat();
    // on initial position
    if (current_pos[1] == "2") {
        const hightlightSquareIds = [
            `${current_pos[0]}${Number(current_pos[1]) + 1}`,
            `${current_pos[0]}${Number(current_pos[1]) + 2}`,
        ];

        // clear board for any privious highlight
        clearHightlight();
        hightlightSquareIds.forEach((hightlight) => {
            globalState.forEach((row) => {
                row.forEach((element) => {
                    if (element.id == hightlight) {
                        element.highlight(true);
                    }
                });
            });
        });
    } else {
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
        const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;

        console.log(current_pos);
        console.log(col1, col2);

        const captureIds = [];

        const hightlightSquareIds = [
            `${current_pos[0]}${Number(current_pos[1]) + 1}`,
        ];

        // clear board for any privious highlight
        clearHightlight();
        hightlightSquareIds.forEach((hightlight) => {
            globalState.forEach((row) => {
                row.forEach((element) => {
                    if (element.id == hightlight) {
                        element.highlight(true);
                    }
                });
            });
        });
    }
    // console.log(globalState);
}

//black pawn event
function blackPawnClick({piece}) {
    //if clicked on same element twice
    if (piece == selfHighlightState) {
        claerPreviousSelfHighlight(selfHighlightState);
        selfHighlightState = null;
        clearHightlight();
        return;
    }

    //highlight clicked element
    selfHighlight(piece);
    selfHighlightState = piece;

    //add piece as move state
    moveState = piece;

    const current_pos = piece.current_position;
    const flatArray = globalState.flat();
    // on initial position
    if (current_pos[1] == "7") {
        const hightlightSquareIds = [
            `${current_pos[0]}${Number(current_pos[1]) - 1}`,
            `${current_pos[0]}${Number(current_pos[1]) - 2}`,
        ];

        // clear board for any privious highlight
        clearHightlight();
        hightlightSquareIds.forEach((hightlight) => {
            globalState.forEach((row) => {
                row.forEach((element) => {
                    if (element.id == hightlight) {
                        element.highlight(true);
                    }
                });
            });
        });
    } else {
        const hightlightSquareIds = [
            `${current_pos[0]}${Number(current_pos[1]) - 1}`,
        ];

        // clear board for any privious highlight
        clearHightlight();
        hightlightSquareIds.forEach((hightlight) => {
            globalState.forEach((row) => {
                row.forEach((element) => {
                    if (element.id == hightlight) {
                        element.highlight(true);
                    }
                });
            });
        });
    }
    // console.log(globalState);
}

function GlobalEvent() {
    ROOT_DIV.addEventListener("click", function (event) {
        if (event.target.localName === "img") {
            const clickId = event.target.parentNode.id;
            const flatArray = globalState.flat();
            const square = flatArray.find((el) => el.id == clickId);
            //console.log(square);
            if (square.piece.piece_name == "WHITE_PAWN") {
                whitePawnClick(square);
            } else if (square.piece.piece_name == "BLACK_PAWN") {
                blackPawnClick(square);
            }
        } else{

            const childElementsOfclickedEl = Array.from(event.target.childNodes)
            
            if (childElementsOfclickedEl.length == 1 || event.target.localName == "span") {
                if (event.target.localName == "span") {
                    const id = event.target.parentNode.id;
                    moveElement(moveState, id);
                    moveState = null;
                } else {
                    const id = event.target.id;
                    moveElement(moveState, id);
                    moveState = null;
                }

                clearHightlight();
                claerPreviousSelfHighlight(selfHighlightState);
                selfHighlightState = null;
            } else {
                //clear all highlights
                clearHightlight();
                claerPreviousSelfHighlight(selfHighlightState);
                selfHighlightState = null;
            }
        }
    });
}

export {GlobalEvent};