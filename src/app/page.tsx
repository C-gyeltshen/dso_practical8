"use client"

import { useState } from "react";
import Todo from "./components/Todo";
// import Todo from "../components/Todo";

export default function Home() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Practical 8 To-Do test</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-4 py-2 rounded"
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} text={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </main>
  );
}
