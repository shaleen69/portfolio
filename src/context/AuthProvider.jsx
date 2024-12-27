import React , { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext=createContext()

export default function AuthProvider({children}) {

  //localStorage.clear()  if admin page or employee page is not moving means we have done that functionality os that after hitting refresh we dont leave current page to move back run here this commented command 

  const [userData,setUserData] = useState(null)
  
  useEffect(()=>{ //setting employee and admin data in userData by calling get function where already we have set the values
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserData(employees)
  },[])
  

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}
