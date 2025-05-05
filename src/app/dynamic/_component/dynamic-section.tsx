import { fetchSingleTodo } from "@/components/API";
import { Todos } from "@/components/types";
import React from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const DynamicSection = async ({ searchParams }: Props) => {
  const { id = 1 } = await searchParams;

  const todo = (await fetchSingleTodo(Number(id))) as Todos;
  return (
    <div>
      <div className="container mx-auto p-6 shadow-md border border-gray-200">
        <h2> {todo.title} </h2>
        <p> {todo.completed} </p>
        <p>{JSON.stringify(id)}</p>
      </div>
    </div>
  );
};

export default DynamicSection;
