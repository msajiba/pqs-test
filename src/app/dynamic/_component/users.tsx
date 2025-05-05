import { fetchUsers } from "@/components/API";
import React from "react";

const Users = async () => {
  const users = await fetchUsers();
  return (
    <div className="flex flex-col gap-4 border shadow-md p-4">
      <h1>Users</h1>
      {users.length}
    </div>
  );
};

export default Users;
