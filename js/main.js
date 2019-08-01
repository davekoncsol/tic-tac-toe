/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'lime'
  };
  
  /*----- app's state (variables) -----*/ 
  let board, turn, winner;
  
  /*----- cached element references -----*/
  
let msg = document.getElementById('msg');
let sqs = document.querySelectorAll('section div');

  /*----- event listeners -----*/ 
  
  document.querySelector('section.board')
  .addEventListener('click', clickf);

  
  /*----- functions -----*/

init();
function init() {
    board = [null,null,null, null,null,null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

function render() {
    
    board.forEach(function(sq, idx){
        console.log(sqs, sqs[idx]);
        sqs[idx].style.backgroundColor = COLORS[sq];
    });

    if (winner) {
        if (winner === 'T') {
            msg.textContent = "Tie game!"; 
        } else {
            msg.innerHTML = `${COLORS[winner]} Wins!`;
        }
        } else {
            msg.innerHTML = `${COLORS[turn]}'s turn!`;
        }


    };

function clickf(evt) {
    
    // div.style.backgroundColor = COLORS[cell];
    let idx = parseInt(evt.target.id.replace('sq', ''));
      console.log(idx);
    //   if(isNaN(idx) || winner) return;
      let colArr = board[idx];
    console.log(board[idx]);
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;    
    render();   

}


