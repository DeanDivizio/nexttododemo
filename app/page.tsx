import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

// This is the main page component
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Todo List</h1>
      {/* AddTodoForm component for adding new todos */}
      <AddTodoForm />
      {/* TodoList component for displaying and managing todos */}
      <TodoList />
    </main>
  )
}