const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");
let currentPlayer = 'x';
let gameIsOver = false;
const board = ['','','','','','','','',''];
const button = document.querySelector(".btn");

function makeMove(index){
    if(!gameIsOver && board[index]==''){
        board[index] = currentPlayer;
        cells[index].value = currentPlayer;
        winnerCheck();
        currentPlayer = (currentPlayer === 'x') ? 'o' : 'x';
    }
}
function winnerCheck(){
    const combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let combo of combinations){
        if(board[combo[0]] == board[combo[1]] && board[combo[1]]==board[combo[2]] && board[combo[0]] !== ''){
            const winnerMessage = document.createElement('div');
            winnerMessage.textContent = `${currentPlayer.toUpperCase()} Wins`;
            document.body.appendChild(winnerMessage);
            winnerMessage.setAttribute('style', 'color: green; font-size: 2rem; margin-top:10px; border:2px solid brown; padding:10px; border-radius:9px;');
            gameIsOver = true;
            break;
        }    
    }

































































    

    if(tieCheck(board)){
        const winnerMessage = document.createElement('div');
        winnerMessage.textContent = `Draw`;
        document.body.appendChild(winnerMessage);
        winnerMessage.setAttribute('style', 'color: green; font-size: 2rem; margin-top:10px; border:2px solid brown; padding:10px; border-radius:9px;');
        gameIsOver = true; 
    }
}

button.onclick = function() {
    cells.forEach((cell,index) => {
        cell.value = "";
        board[index] = "";
    });
    gameIsOver=false;
    currentPlayer = 'x';
}

function tieCheck(board) {
    for (let i = 0; i < board.length-1; i++){
        if (!board[i]) {
            return false;
        }
    }
    return true;
}
