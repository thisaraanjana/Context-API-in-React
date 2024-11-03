import { useContext } from "react"
import { userContext } from "./context/userContext";

export default function Checkout(){
    const {user}=useContext(userContext);
    return(
        <div>
            c {user}
        </div>
    )
}