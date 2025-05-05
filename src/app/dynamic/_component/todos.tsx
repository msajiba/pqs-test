import { fetchTodos } from "@/components/API";
import React from "react";

const Todos = async () => {
  const todos = await fetchTodos();
  return (
    <div className="flex flex-col gap-4 border shadow-md p-4">
      <h1>Todos</h1>
      {todos.length}
    </div>
  );
};

export default Todos;
