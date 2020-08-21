import gameboard from './gamelogic';

test('Gameboard should contain winArray', ()=>{
    expect(gameboard().winArray).toEqual([[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]],)
});

test('when the cell is not full the cellfull property should be false.', ()=>{
    expect(gameboard().cellFull).toBeFalsy();
});

test('players should be able to make turn', ()=>{
    let allplayers = [
        {
            name: "Keli", 
            marker: "X",
            history: []
        },
        {
            name: "Marcus", 
            marker: "0",
            history: []
        }
    ]
    expect(gameboard().playerTurn(allplayers, 0)).toEqual(
        {
            name: "Keli", 
            marker: "X",
            history: []
        }
    );
});

test('players should be able to make turn', ()=>{
    let allplayers = [
        {
            name: "Keli", 
            marker: "X",
            history: []
        },
        {
            name: "Marcus", 
            marker: "0",
            history: []
        }
    ]
    expect(gameboard().playerTurn(allplayers, 3)).toEqual(
        {
            name: "Marcus", 
            marker: "0",
            history: []
        }
    );
});

test('should be able to detect a win when the user moves is defined in the winning array.', ()=>{
    let player = {
        name: "Marcus", 
        marker: "0",
        history: ['4', '3', '5', '6']
    }
    expect(gameboard().checkWin(player)).toBeTruthy()
});

test('checkwin should be false if the move does not win', ()=>{
    let player = {
        name: "Marcus", 
        marker: "0",
        history: ['4', '3', '6']
    }
    expect(gameboard().checkWin(player)).toBeFalsy()
})