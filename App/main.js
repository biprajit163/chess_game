console.log("main.js file is connected!");


let chessboard = document.querySelector("#chessboard");

/* --------------------------------------------
- make an odd row of size 8
    - give pattern of white and black
- make an even row of size 8
    - give pattern of black and white
- alternate between odd row and even 
for the zise of the board/2 
----------------------------------------------- */

let size = 4;

while(size > 0) {
    size--;

    for(let i=1; i <= 8; i++) {
        let oddRow = document.createElement("div")
        oddRow.setAttribute("class", "odd-square");
    
        if(i % 2 === 0) {
            oddRow.style.backgroundColor = "black";
        } else {
            oddRow.style.backgroundColor = "white";
        }
    
        chessboard.appendChild(oddRow);
    }
    
    for(let i=1; i <= 8; i++) {
        let evenRow = document.createElement("div")
        evenRow.setAttribute("class", "even-square");0
    
        if(i % 2 === 0) {
            evenRow.style.backgroundColor = "white";
        } else {
            evenRow.style.backgroundColor = "black";
        }
    
        chessboard.appendChild(evenRow);
    }

    console.log(size);
}

