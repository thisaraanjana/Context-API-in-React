import { useContext } from "react";
import { userContext } from "./context/userContext";

export default function Logout() {
  const { dispatch } = useContext(userContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "logout", payload: "guest" })}>
        Logout here
      </button>
    </div>
  );
}
