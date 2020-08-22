/* eslint-disable   import/extensions */
import { setPlayers } from './players.js';
import gameboard from './gamelogic.js';

const gameFlow = () => ({
  allplayers: [],
  form: document.querySelector('.name-form'),
  table: document.querySelector('.table-container'),
  playerCount: 0,
  player: null,
  cellFull: false,

  changeNodeContent() {
    const node = document.createElement('LI');

    node.innerText = '';
    this.allplayers.forEach((val) => {
      node.innerText = `${val.name}`;
    });
  },
  isCellFull(playerCount) {
    if (playerCount === 9) {
      this.cellFull = true;
    }
    return this.cellFull;
  },
  startGame() {
    this.form.submitbtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.allplayers = setPlayers(this.allplayers).getPlayers();
      if (this.allplayers) {
        this.changeNodeContent();
      }
    });
    this.table.addEventListener('click', (e) => {
      if (gameboard().ValiditePosition(e)) {
        // set player and run game logic

        this.player = gameboard().playerTurn(this.allplayers, this.playerCount);
        this.playerCount += 1;
        this.isCellFull(this.playerCount);

        gameboard().playInto(this.player, e);

        if (gameboard().checkWin(this.player)) {
          const message = `Wow! ${this.player.name} has won!`;
          gameboard().spitResult(message);
        } else if (gameboard().checkTie(this.cellFull)) {
          const message = 'Well, It looks like it is a tie!';
          gameboard().spitResult(message);
        }
      }
    });
  },

});
export default gameFlow;
