import React from 'react'
import "../style.css";

const Header = () => {
    return (
        <div className="flex items-center justify-center h-28 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-b-xl">
            <h1 className="text-4xl font-bold text-white tracking-wider">To-Do List</h1>
        </div>
    )
}

export default Header;