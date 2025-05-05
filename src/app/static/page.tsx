import {
  fetchAlbums,
  fetchComments,
  fetchPhotos,
  fetchPosts,
  fetchTodos,
  fetchUsers,
} from "@/components/API";
import React from "react";

const staticPage = async () => {
  const comments = await fetchComments();
  const posts = await fetchPosts();
  const users = await fetchUsers();
  const todos = await fetchTodos();
  const albums = await fetchAlbums();
  const photos = await fetchPhotos();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Static Page</h2>

      <div className="grid grid-cols-1 gap-8">
        {/* Comments Section */}
        <div className="p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Comments</h2>
          <p className="text-gray-600 mb-4">
            Fetched at build time with revalidation set to 3600 seconds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comments.slice(0, 6).map((comment) => (
              <div
                key={comment.id}
                className="border p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">{comment.name}</h3>
                <p className="text-sm">{comment.body}</p>
                <p className="text-sm text-gray-500 mt-2">{comment.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Posts Section */}
        <div className="p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-green-600">Posts</h2>
          <p className="text-gray-600 mb-4">Blog posts fetched from the API.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.slice(0, 6).map((post) => (
              <div
                key={post.id}
                className="border p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm">{post.body}</p>
                <p className="text-sm text-gray-500 mt-2">
                  User ID: {post.userId}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Users Section */}
        <div className="p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Users</h2>
          <p className="text-gray-600 mb-4">User profiles from the API.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.slice(0, 6).map((user) => (
              <div
                key={user.id}
                className="border p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm">Username: {user.username}</p>
                <p className="text-sm">Email: {user.email}</p>
                <p className="text-sm">Phone: {user.phone}</p>
                <p className="text-sm">Website: {user.website}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Todos Section */}
        <div className="p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Todos</h2>
          <p className="text-gray-600 mb-4">Todo items from the API.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todos.slice(0, 9).map((todo) => (
              <div
                key={todo.id}
                className="border p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <h3
                  className={`text-lg font-semibold ${
                    todo.completed ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {todo.title}
                </h3>
                <p className="text-sm mt-2">
                  Status:{" "}
                  <span
                    className={
                      todo.completed ? "text-green-500" : "text-red-500"
                    }
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                </p>
                <p className="text-sm text-gray-500">User ID: {todo.userId}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Albums Section */}
        <div className="p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-amber-600">Albums</h2>
          <p className="text-gray-600 mb-4">Photo albums from the API.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {albums.slice(0, 6).map((album) => (
              <div
                key={album.id}
                className="border p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">{album.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  User ID: {album.userId}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Section */}
        <div className="p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">Photos</h2>
          <p className="text-gray-600 mb-4">Photos from the API.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.slice(0, 8).map((photo) => (
              <div
                key={photo.id}
                className="border p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-sm font-medium truncate">{photo.title}</h3>
                <p className="text-xs text-gray-500">
                  Album ID: {photo.albumId}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default staticPage;
