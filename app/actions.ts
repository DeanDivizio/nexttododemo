'use server'

import { sql } from '@vercel/postgres'

// Function to get all todos from the database
export async function getTodos() {
  const { rows } = await sql`SELECT * FROM todos ORDER BY id DESC`
  return rows
}

// Function to add a new todo
export async function addTodo(text: string) {
  await sql`INSERT INTO todos (text, completed) VALUES (${text}, false)`
}

// Function to toggle the completion status of a todo
export async function toggleTodo(id: number) {
  await sql`UPDATE todos SET completed = NOT completed WHERE id = ${id}`
}

// Function to delete a todo
export async function deleteTodo(id: number) {
  await sql`DELETE FROM todos WHERE id = ${id}`
}