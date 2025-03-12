import React from 'react'
import { TiPlus } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const ToDoItem = ({ id, title = "", desc = "", onDelete, onEdit }) => {
    
    return (
        <div className='flex flex-col justify-between border-1 border-gray-400 shadow-2xl w-60 h-60 rounded-2xl overflow-hidden relative'>
            {
                title && desc ? <>
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
            <button className='w-full h-8 py-0 px-2 cursor-pointer bg-cyan-500 border-none text-base transition-all duration-300 ease-in-out hover:text-lg'>Mark As Complete</button>
                </> : <div className='bg-gray-400 w-full h-full cursor-pointer'><TiPlus className='h-full w-full' /></div>
            }
        </div>
    )
}

export default ToDoItem