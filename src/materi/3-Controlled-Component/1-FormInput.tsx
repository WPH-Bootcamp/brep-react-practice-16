import React, { useState } from "react";

export default function FormInput() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          placeholder="Input username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          placeholder="Input password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <p>Halo, {username}</p>
        <div>
          <p>dengan pass : {password}</p>
          <button type="button">Hide/Seek</button>
        </div>
      </div>
    </form>
  );
}
