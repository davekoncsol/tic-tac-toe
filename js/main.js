/*----- constants -----*/
const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'lime'
  };
  
  /*----- app's state (variables) -----*/ 
  let board, turn, winner;
  
  /*----- cached element references -----*/
  
  const msg = document.getElementById('msg');

  /*----- event listeners -----*/ 
  
  document.querySelector('section.board')
  .addEventListener('click', clickf);

  
  /*----- functions -----*/

init();
function init() {
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    turn = 1;
    winner = null;
    render();
}

function render() {
    
    board.forEach(function(colArr, colIdx) {
       colArr.forEach(function(cell, rowIdx) {

    let div = document.getElementById(`sq${colIdx}`)
    div.style.backgroundColor = COLORS[cell];

       });
    
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
    let idx = parseInt(document.getElementById(evt.target.id.replace('sq', '')));
      let colArr = board.forEach(function(colIdx) {
        colIdx.forEach(function(place) {
          let num = place;
        })

    }
    
    );

console.log(idx);
idx.value = turn;

idx.style.backgroundColor = COLORS[turn];
num = turn;
  turn *= -1;

}

