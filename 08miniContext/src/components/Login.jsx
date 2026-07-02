import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";

function Login(){
    const [username, setUsername] = useState('')
    const [password,setPassword]=useState('')

    const {setUser} = useContext(UserContext)



    const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username ,password})

    }
    return(
        <div>
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h1>
            <input
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6
             focus:outline-none focus:ring-2 focus:ring-blue-400"
             type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
             placeholder="username" />
             {" "}
            <input className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6
             focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" 
             value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}
export default Login