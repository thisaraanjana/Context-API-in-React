import { useContext } from "react"
import { userContext } from "./context/userContext"

export default function Logout(){
const {setUser}=useContext(userContext)
    return(
        <div>
            <button onClick={()=>setUser("guest")}>Logout</button>
        </div>
    )
}