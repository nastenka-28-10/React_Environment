import { v4 } from 'node-uuid';

import todos from "../../reducers/todos";
import { toggleTodo, addTodo } from "../../actionCreators/index";

test('"completed" should be true', () => {
    const id0 = v4();
    const stateBefore = [
        {
            id: id0,
            text: 'todo number 1',
            completed: false
        }
    ];

    const stateAfter = [
        {
            id: id0,
            text: 'todo number 1',
            completed: true
        }
    ];

    expect(todos(stateBefore, toggleTodo(id0)))
        .toEqual(stateAfter);
});

test('it should add one new task', () => {
    jest.mock('uuid', () => {
        return {
            v4: jest.fn(() => 1)
        };
    });
    const stateBefore = [
        {
            id: 0,
            text: 'todo number 1',
            completed: false
        }
    ];

    const stateAfter = [
        {
            id: 0,
            text: 'todo number 1',
            completed: false
        },
        {
            id: 1,
            text: 'todo number 2',
            completed: false
        }
    ];

    expect(todos(stateBefore, addTodo("todo number 2"))).toEqual(stateAfter);
});