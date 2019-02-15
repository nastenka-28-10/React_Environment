import todos from "../../reducers/todos";
import { toggleTodo, addTodo } from "../../actionCreators/todoActions";

test('"completed" should be true', () => {
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
            completed: true
        }
    ];

    expect(todos(stateBefore, toggleTodo(0)))
        .toEqual(stateAfter);
});

test('it should add one new task', () => {
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

    expect(todos(stateBefore, addTodo(1, "todo number 2"))).toEqual(stateAfter);
});