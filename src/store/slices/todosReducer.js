const ADD_TODOS = 'add_todos';
const CHANGE_TEXT = 'change_text';
const DEL = 'del';
const CHECK = 'check';
const EDIT = 'edit';

const initState = {
    text: '',
    todos: [],
    check: false,
    edit: '',
    id: 0,
};

export const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                ...state,
                id: state.id + 1,
                todos: [
                    ...state.todos,
                    { id: state.id, title: state.text },
                ],
                text: '',
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        case DEL:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload),
            };
        case CHECK:
            return {
                ...state,
                check: !state.check,
            };
        case EDIT:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id
                        ? { ...todo, title: action.payload.text }
                        : todo
                ),
            };
        default:
            return state;
    }
};

export const AddTodosAc = () => ({ type: ADD_TODOS });
export const ChangeTextAc = (e) => ({ type: CHANGE_TEXT, payload: e.target.value });
export const DelAc = (index) => ({ type: DEL, payload: index });
export const CheckAc = () => ({ type: CHECK });
export const EditAc = (id, text) => ({ type: EDIT, payload: { id, text } });
