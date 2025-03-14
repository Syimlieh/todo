import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const ToDoItem = ({ id, title = "", desc = "", completed, onDelete, onEdit, onComplete }) => {
    return (
        <div className='flex flex-col justify-between border-1 border-gray-400 shadow-2xl w-60 h-60 rounded-2xl overflow-hidden relative'>
                    <RiDeleteBinLine
                        className='absolute top-10 right-3 cursor-pointer text-2xl text-red-500'
                        onClick={() => onDelete(id)}
                    />
                    <MdModeEdit
                        className='absolute top-3 right-3 cursor-pointer text-2xl text-green-700'
                        onClick={() => onEdit(id)}
                    />
                    <div className='p-4 overflow-y-auto h-4/5'>
                        <p className='text-2xl font-semibold'>{title}</p>
                        <p className='text-base font-normal'>{desc}</p>
                    </div>
                    <button
                        className={`w-full h-8 py-0 px-2 cursor-pointer border-none text-base transition-all duration-300 ease-in-out hover:text-lg
                            ${completed ? "bg-green-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                            onClick={() => onComplete(id)}
                    >{completed ? "Completed" : "Mark As Complete"}</button>  
        </div>
    )
}

export default ToDoItem;