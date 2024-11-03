import { useContext } from "react";
import { userContext } from "./context/userContext";
import { useState } from "react";

export default function Loging() {
  const [value, setValue] = useState("");
  const {user,setUser}=useContext(userContext);
  function handleSubmit(e){
   e.preventDefault();
   setUser(value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
