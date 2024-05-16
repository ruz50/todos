import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditAc } from '../../slices/todosReducer';

const EditInp = ({ id, editfunc }) => {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todosData);
    const todo = todos[id];

    const InpChange = (e) => {
        const newText = e.target.value;
        dispatch(EditAc(id, newText));
    };

    return (
        <input
            type="text"
            value={todo ? todo.title : ''}
            onChange={InpChange}
            onBlur={editfunc}
        />
    );
};

export default EditInp;
