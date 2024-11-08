'use client'

import { useState } from 'react'
import { addTodo } from '../app/actions'

// This component provides a form for adding new todos
export default function AddTodoForm() {
  const [text, setText] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      // Call the addTodo server action
      await addTodo(text)
      setText('') // Clear the input field
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
        className="border p-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </form>
  )
}