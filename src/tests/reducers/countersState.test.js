import countersState from '../../reducers/countersState';

test('it should be [0,0,1] if state is [0,0,0], action type is "INCREMENT", index=2', () => {
    expect(countersState([0,0,0], {type: "INCREMENT", index: 2}))
        .toEqual([0,0,1]);
});

test('it should be [1,0,0] if state is [2,0,0], action type is "DECREMENT", index=0', () => {
    expect(countersState([2,0,0], {type: "DECREMENT", index: 0}))
        .toEqual([1,0,0]);
});

test('it should be [-1] if state is undefined, action type is "DECREMENT", index=0', () => {
    expect(countersState(undefined, {type: "DECREMENT", index: 0}))
        .toEqual([-1]);
});

test('it should be [1] if state is [1], action type is "undefined"', () => {
    expect(countersState([1], {type: "undefined"}))
        .toEqual([1]);
});

test('it should be [0] if state is undefined, action type is "undefined"', () => {
    expect(countersState(undefined, {type: "undefined"}))
        .toEqual([0]);
});

console.log("Test passed!");