import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [todo, setTodo] = useState([{}]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      id: todo[todo.length - 1].id + 1 || 1,
      title,
      desc
    };

    if (!title || !desc) {
      alert("Please enter both title and description.")
      return;
    };
    
    setTodo([
      ...todo,
      obj]
    )
  }

  return (
    <>
      <Header />
      <main className='py-8 px-[15%] bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white'>
        <div className='bg-gray-700 p-6 rounded-lg shadow-lg max-w-2xl mx-auto'>
          <form className=''>
            <h2 className='text-center text-3xl font-semibold'>Add a new Todo</h2>
            <span className="flex flex-col my-4">
              <label htmlFor="title" className="text-lg font-medium px-4">Title</label>
              <input type="text" id='title' className="p-2.5 m-3 border-black border-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black" placeholder='Enter Todo list title' value={title} name={title} onChange={(e) => setTitle(e.target.value)} />
            </span>
            <span className='flex flex-col my-4'>
              <label htmlFor="desc" className="text-lg font-medium px-4">Descrition</label>
              <textarea type="text" id="desc" className="p-2.5 rounded-md m-3 border-black border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black" placeholder='Enter Todo list desc' value={desc} name={desc} onChange={(e) => setDesc(e.target.value)}  />
            </span>
            <button className='cursor-pointer text-lg font-semibold px-4 py-3 bg-blue-600 w-full rounded-2xl shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/50 hover:scale-105 active:scale-95' onClick={(e) => handleSubmit(e)}>Add a new todo</button>
          </form>
        </div>
        <ToDoList todo={todo} />
      </main>
    </>
  )
}

export default App
