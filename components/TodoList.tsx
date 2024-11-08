import { getTodos, toggleTodo, deleteTodo } from '../app/actions'

// This component displays the list of todos
export default async function TodoList() {
  // Fetch todos from the database
  const todos = await getTodos()

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-4">
          {/* Checkbox for toggling todo completion status */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="h-6 w-6"
          />
          {/* Todo text */}
          <span className={todo.completed ? 'line-through' : ''}>
            {todo.text}
          </span>
          {/* Delete button */}
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}