import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"

export const ChangeProfile = () => {
    const { setUserName } = useContext(AppContext);
    const [newUserName, setNewUserName] = useState("");
    return (
        <div>
            <input onChange={ (event) => {
                setNewUserName(event.target.value)
            } }
            />
            <button
             onClick={() => {setUserName(newUserName)
            }}
            >Change UserName
            </button>
        </div>
    )
    
}