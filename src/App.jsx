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
      <main className='main'>
        <div>
          <form className='form'>
            <h2 className='form-heading'>Add a new Todo</h2>
            <span className="input-span">
              <label htmlFor="title" className="label title-label">Title</label>
              <input type="text" id='title' className="input-title" placeholder='Enter Todo list title' value={title} name={title} onChange={(e) => setTitle(e.target.value)} />
            </span>
            <span className='input-span'>
              <label htmlFor="desc" className="label desc-label">Descrition</label>
              <textarea type="text" id="desc" className="input-desc" placeholder='Enter Todo list desc' value={desc} name={desc} onChange={(e) => setDesc(e.target.value)}  />
            </span>
            <button className='submit' onClick={(e) => handleSubmit(e)}>Add a new todo</button>
          </form>
        </div>
        <ToDoList todo={todo} />
      </main>
    </>
  )
}

export default App
