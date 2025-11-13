import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/blogs/: ${user.id}`}>
              {user.id}.{user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
