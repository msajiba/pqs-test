import { fetchComments } from "@/components/API";
import React from "react";

const Comments = async () => {
  const comments = await fetchComments();
  return (
    <div className="flex flex-col gap-4 border shadow-md p-4">
      <h1>Comments</h1>
      {comments.length}
    </div>
  );
};

export default Comments;
