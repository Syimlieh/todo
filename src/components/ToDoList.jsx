import React from 'react'
import ToDoItem from './ToDoItem';

const ToDoList = ({ todo }) => {
    console.log('to do list');
    return (
        <div className='todo-list'>
            {
                todo && todo.map((item) => <ToDoItem key={item.id} title={item.title} desc={item.desc} />)
            }  
        </div>
    )
};

export default ToDoList;
