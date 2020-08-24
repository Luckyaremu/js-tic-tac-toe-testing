import { Player, setPlayers } from './players';

test('Should be able to create a player object', () => {
  expect(Player('Keli', 'X')).toEqual({
    name: 'Keli',
    marker: 'X',
    history: [],
  });
});

test('Should take both name and marker as property', () => {
  const wrong = Player('Keli');
  expect(wrong.marker).toBeUndefined();
});

test('history property should be an array', () => {
  const wrong = Player('Keli', '0');
  expect(wrong.history).toEqual([]);
});

test('should set player marker for each player', () => {
  const allplayers = [{
    name: 'Keli',
    marker: 'X',
    history: [],
  }];
  expect(setPlayers(allplayers).setMarker()).toEqual('0');
});

test('should change player marker for each player', () => {
  const allplayers = [];
  expect(setPlayers(allplayers).setMarker()).toEqual('X');
});
