import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodosAc, ChangeTextAc } from '../../slices/todosReducer';
import List from '../List/List';

const Todos = () => {
    const dispatch = useDispatch();
    const { text } = useSelector((state) => state.todosData);

    const AddTodo = () => {
        if (text.trim()) {
            dispatch(AddTodosAc());
        }
    };

    return (
        <div>
            <input type="text" value={text} onChange={(e) => dispatch(ChangeTextAc(e))} />
            <button onClick={AddTodo}>+</button>
            <List />
        </div>
    );
};

export default Todos;
