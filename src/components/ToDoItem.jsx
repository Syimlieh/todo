import React, { useState } from 'react'
import "../style.css";
import { TiPlus } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const ToDoItem = ({ title = "", desc = "" }) => {
    const [todoTitle, setTodoTitle] = useState(title);
    const [todoDesc, setTodoDesc] = useState(desc);
    
    return (
        <div className='todo-item-card'>
            {
                title && desc ? <>
                    <RiDeleteBinLine className='delete-icon' />
                    <MdModeEdit className='edit-icon' />
                    <div className='todo-text'>
                        <p className='item-title'>{todoTitle}</p>
                        <p className='item-desc'>{todoDesc}</p>
                    </div>
            <button className='complete-btn'>Mark As Complete</button>
                </> : <div className='add-item'><TiPlus className='add-icon' /></div>
            }
        </div>
    )
}

export default ToDoItem