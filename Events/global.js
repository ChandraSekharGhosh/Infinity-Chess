import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight } from "../Rander/main.js";
import { clearHightlight } from "../Rander/main.js";

//hightlighted or not => state
let hightlight_state = false;

function whitePawnClick({piece}) {
    const current_pos = piece.current_position;
    const flatArray = globalState.flat();
    // on initial position
    if (current_pos[1] == "2") {
        const hightlightSquareIds = [
            `${current_pos[0]}${Number(current_pos[1]) + 1}`,
            `${current_pos[0]}${Number(current_pos[1]) + 2}`,
        ];

        hightlightSquareIds.forEach((hightlight) => {
            globalState.forEach((row) => {
                row.forEach((element) => {
                    if (element.id == hightlight) {
                        element.hightlight(true);
                        //      
                    }
                });
            });
            
            // if (hightlight_state) clearHightlight();
            // renderHighlight(hightlight);
            // hightlight_state = true;
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
            }
        }
        
    });
}

export {GlobalEvent};