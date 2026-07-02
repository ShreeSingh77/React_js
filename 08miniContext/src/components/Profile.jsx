import React,{useContext} from "react";
import UserContext from '../Context/UserContext'

function Profile(){
    const {user} = useContext(UserContext)

   if(!user) return <div className="text-center mt-5 text-gray-600">please login</div>

   return <div className="text-center mt-5 text-gray-800">WELCOME {user.username}</div>
}

export default Profile