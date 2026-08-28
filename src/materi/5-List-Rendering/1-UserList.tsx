import { useState } from "react";

type User = {
  id: number;
  name: string;
};

function UserList() {
  const [users] = useState<User[]>([
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Siti" },
  ]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
