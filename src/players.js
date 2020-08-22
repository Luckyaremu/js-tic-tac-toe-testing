/* eslint-disable   no-unused-expressions */
const Player = (name, marker) => ({
  name,
  marker,
  history: [],
});

const setPlayers = (allplayers) => ({
  form: document.querySelector('.name-form'),
  marker: 'X',

  setMarker() {
    allplayers.length < 1 ? this.marker = 'X' : this.marker = '0';
    return this.marker;
  },
  createPlayer() {
    allplayers.push(Player(this.form.inputspace.value, this.marker));
    return allplayers;
  },
  displayPlayer() {
    const node = document.createElement('LI');

    node.innerText = '';
    allplayers.forEach((val) => {
      node.innerText = `${val.name}`;
    });
    // append players to screen

    const playerlist = document.querySelector('.playerlist');
    playerlist.appendChild(node);
    playerlist.classList.remove('d-none');

    // empty the input field

    this.form.inputspace.value = '';

    if (allplayers.length >= 2) {
      const table = document.querySelector('.table-container');
      const playerturn = document.querySelector('.playerturn');
      const formInput = document.querySelector('.form-inputs');
      formInput.classList.add('d-none');
      table.classList.remove('d-none');
      playerturn.innerHTML = `${allplayers[0].name} Turn!`;
    } else if (allplayers.length === 1) {
      const aibtn = document.querySelector('.ai');
      aibtn.classList.remove('d-none');
    }
  },
  getPlayers() {
    this.marker = this.setMarker();
    this.createPlayer();
    this.form.inputspace.value = '';
    this.displayPlayer();
    return allplayers;
  },
});

export { setPlayers, Player };
