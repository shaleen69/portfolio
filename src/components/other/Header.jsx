import React from 'react'



export default function Header(props) {
  //console.log(data)
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
   // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl' font-semibold>Employee</span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded'>Log Out</button>
    </div>
  )
}
