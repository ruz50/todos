import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DelAc, CheckAc } from '../../slices/todosReducer';
import EditInp from '../EditInp/EditInp';

const List = () => {
    const [open, setOpen] = useState(null);
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.todosData);

    const EditClick = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div>
            {todos.map((el, index) => (
                <div key={index}>
                    {open === index ? (
                        <EditInp id={index} editfunc={() => setOpen(null)} />
                    ) : (
                        <div onDoubleClick={() => EditClick(index)}>
                            {el.title}
                        </div>
                    )}
                    <button onClick={() => dispatch(DelAc(index))}>X</button>
                    <input type="checkbox" onClick={() => dispatch(CheckAc())} />
                    {open !== index && (
                        <button onDoubleClick={() => EditClick(index)}>edit</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default List;
