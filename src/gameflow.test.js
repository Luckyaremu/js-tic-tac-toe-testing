import gameflow from './gameflow';

test('should have a counter to know how many moves are left', () => {
  expect(gameflow().playerCount).toBe(0);
});

test('should cellFull variable determine if the cell is full', () => {
  expect(gameflow().cellFull).toBeFalsy();
});

test('should have an initial player set to null', () => {
  expect(gameflow().player).toBe(null);
});

test('should have allplayers and it should be an array', () => {
  expect(gameflow().allplayers).toEqual([]);
});

test('should have isCellFull true when the counter reaches 9', () => {
  const playerCount = 9;
  expect(gameflow().isCellFull(playerCount)).toBeTruthy();
});