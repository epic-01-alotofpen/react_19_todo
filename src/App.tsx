import { useState } from 'react'
import { TodoList } from './components/TodoList'
import type { Todo } from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim() === '') return
    const newTodo = { id: Date.now(), text }
    setTodos((prev) => [...prev, newTodo])
    setText('')
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  console.log('Rendering App')

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">📝  ToDo</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 flex-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  )
}

export default App