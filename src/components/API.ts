import { Albums, Comments, Photos, Posts, Todos, Users } from "./types";

const waitTime = 5; //
const revalidateTime = 3600;

export const fetchComments = async () => {
  const URL = "https://jsonplaceholder.typicode.com/comments";

  try {
    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: revalidateTime,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as Comments[];

    // Add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

// create function to fetch posts
export const fetchPosts = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: revalidateTime,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as Posts[];

    // Add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// create function to fetch user
export const fetchUsers = async () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: revalidateTime,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as Users[];

    // Add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// create function to fetch todos
export const fetchTodos = async () => {
  const URL = "https://jsonplaceholder.typicode.com/todos";

  try {
    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: revalidateTime,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as Todos[];

    // Add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// create function to fetch albums
export const fetchAlbums = async () => {
  const URL = "https://jsonplaceholder.typicode.com/albums";

  try {
    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: revalidateTime,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as Albums[];

    // Add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// create function to fetch photos

export const fetchPhotos = async () => {
  const URL = "https://jsonplaceholder.typicode.com/photos";

  try {
    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: revalidateTime,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as Photos[];

    // Add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, waitTime));

    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// create a function fetch single todo

export const fetchSingleTodo = async (id: number) => {
  const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;

  try {
    const response = await fetch(URL, {
      method: "GET",
      next: {
        revalidate: revalidateTime,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = (await response.json()) as Todos;

    // Add 5 second delay
    await new Promise((resolve) => setTimeout(resolve, 10000));

    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};
