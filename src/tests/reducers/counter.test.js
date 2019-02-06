import counter from '../../reducers';

test('it should be 1 if state is 0, action type is "INCREMENT"', () => {
    expect(counter(0, {type: "INCREMENT"})).toBe(1);
});

test('it should be 1 if state is 2, action type is "DECREMENT"', () => {
    expect(counter(2, {type: "DECREMENT"})).toBe(1);
});

test('it should be -1 if state is undefined, action type is "DECREMENT"', () => {
    expect(counter(undefined, {type: "DECREMENT"})).toBe(-1);
});

test('it should be 1 if state is 1, action type is "undefined"', () => {
    expect(counter(1, {type: "undefined"})).toBe(1);
});

test('it should be 0 if state is undefined, action type is "undefined"', () => {
    expect(counter(undefined, {type: "undefined"})).toBe(0);
});

console.log("Test passed!");