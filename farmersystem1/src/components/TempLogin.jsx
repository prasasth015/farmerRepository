import React, { useState, useEffect } from "react";
import axios from "axios";

const TempLogin = () => {
  const [farmerUserName, setfarmerUserName] = useState("");
  const [farmerPassword, setfarmerPassword] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  
  // login the user
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { farmerUserName, farmerPassword };
    // send the username and password to the server
    const response = await axios.get(
      "http://localhost:8082/api/v1/farmerlogin/",
      user
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
  };

 

  // if there's no user, show the login form
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={farmerUserName}
          placeholder="enter a username"
          onChange={({ target }) => setfarmerUserName(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={farmerPassword}
            placeholder="enter a password"
            onChange={({ target }) => setfarmerPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default TempLogin;