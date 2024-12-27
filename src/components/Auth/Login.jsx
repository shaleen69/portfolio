import React, { useState } from 'react'

export default function Login({handleLogin}) {

   // console.log(handleLogin)

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 border-emerald-600 p-20'>
        <form 
         onSubmit={(e)=>{
            submitHandler(e)
         }}
         className='flex flex-col items-center justify-center'>

            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required 
            className='text-white outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter your email'
             />


            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required 
            className='text-white mt-4 outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white' type="password" placeholder='Enter password'
            />


            <button className='mt-7 text-white outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}
