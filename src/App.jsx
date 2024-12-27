import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { use } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const[user,setUser]=useState(null) // user is either admin or employee
  // storing data from local storage to authdata by help of context api id we get from lsto. then authData!=NUll else NULL  // sabse pehle call hoga y // if emp the emp data else admin data
  const [loggeInUserData,setloggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser','')
    
     if(loggedInUser)
    {
    //     console.log("User logged in hai")
         const userData=JSON.parse(loggedInUser)
         //console.log(userData)
         setUser(userData.role)
         setloggedInUserData(userData.data)
     }

},[]);

  //console.log(user)
  
  const handleLogin = (email,password) => {
     if(email=='admin@me.com'  && password=='123'){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
     }
     else if(userData)
     {
        const employee=userData.find((e)=>email==e.email && e.password==password)// if authdata we verify is not null and we find that email and password matches with all employee data which we stored in local storage and is now in authdata
        if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
      }
     else{
      alert('invalid')
     }
  }
  //console.log(user)
 

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''} 
      {user =='admin' ? <AdminDashboard changeUser={setUser}/>  : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggeInUserData}/>:null)} 
    </>

  )
}

export default App

//data here passed is logged in user i.e all 5 employee data which we pass in employee and then it passes to its children
