const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];
const todosReducer = (state = data, action) => {
    switch (action.type) {

        case 'update-todo':
            const newTodos = state.map(todo => {
                return todo._id === action.todo._id ? action.todo : todo;
            });
            return newTodos;

        case 'delete-todo':
            return state
                .filter(todo =>
                    todo !== action.todo);
        case 'create-todo':
            return [
                ...state,
                {
                    ...action.todo,
                    _id: (new Date()).getTime() + ""
                }
            ]
        default:
            return state;
    }
}


export default todosReducer;