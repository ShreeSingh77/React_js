
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    
     
    <UserContextProvider>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
     <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Glad to see you here!</h1>
     <Login />
     <Profile />
     </div>
     </div>
   </UserContextProvider>
  )
}

export default App
