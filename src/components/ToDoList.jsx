import React from 'react'
import ToDoItem from './ToDoItem';

const ToDoList = ({ todo, onDelete, onEdit }) => {
    return (
        <div className='flex justify-start gap-8 flex-wrap mt-12'>
            {
                todo && todo.map((item) =>
                    <ToDoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                )
            }
        </div>
    )
};

export default ToDoList;
