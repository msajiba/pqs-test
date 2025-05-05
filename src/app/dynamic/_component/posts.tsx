import { fetchPosts } from "@/components/API";
import React from "react";

const Posts = async () => {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-col gap-4 border shadow-md p-4">
      <h1>Posts</h1>
      {posts.length}
    </div>
  );
};

export default Posts;
