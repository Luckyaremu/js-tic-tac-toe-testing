import {Player} from './players'

test('Should be able to create a player object', ()=>{
    expect(Player("Keli", "X")).toEqual({
        name: "Keli", 
        marker: "X",
        history: []
    });
});

test('Should take both name and marker as property', ()=>{
    const wrong = Player("Keli")
    expect(wrong.marker).toBeUndefined();
});

test('history property should be an array', ()=>{
    const wrong = Player("Keli", "0")
    expect(wrong.history).toEqual([]);
})


