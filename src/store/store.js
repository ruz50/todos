import { createStore, combineReducers } from 'redux';
import { todosReducer } from './slices/todosReducer';

const allReducer = combineReducers({
    todosData: todosReducer
});

const store = createStore(allReducer);

export default store;
