import { useContext } from "react";
import { userContext } from "./context/userContext";
import { useState } from "react";

export default function Loging() {
  const [value, setValue] = useState("");
  const { user, dispatch } = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    //setUser(value)
    dispatch({ type: "login", payload: value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button type="submit">Login here</button>
      </form>
    </div>
  );
}
