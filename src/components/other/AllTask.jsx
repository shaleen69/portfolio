import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


export default function AllTask() {

  const [userData,setUserData]=useContext(AuthContext)
  //console.log(authData.employees)
   
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>

         <div className='bg-red-400 py-2 mb-2 px-4 flex justify-between rounded'>
           <h2 className=' text-lg font-medium w-1/5 w-1/5'>Employee Name</h2>
           <h3 className=' text-lg font-medium w-1/5 w-1/5'>New Task</h3>
           <h5 className=' text-lg font-medium w-1/5 w-1/5'>Active Task</h5>
           <h5 className=' text-lg font-medium w-1/5 w-1/5'>Completed</h5>
           <h5 className=' text-lg font-medium w-1/5 w-1/5'>Failed</h5>
         </div>

        <div className='overflow-auto'>
        {userData.map((elem,idx)=>{
           return <div key={idx} className='border-2 border-emerald-500 py-2 mb-2 px-4 flex justify-between rounded'>
           <h2 className=' text-lg font-medium w-1/5'>{elem.firstName}</h2>
           <h3 className=' text-lg font-medium px-2 text blue-600 w-1/5'>{elem.taskCount.newTask}</h3>
           <h5 className=' text-lg font-medium px-3 text-yellow-400 w-1/5'>{elem.taskCount.active}</h5>
           <h5 className=' text-lg font-medium px-4 text-white w-1/5'>{elem.taskCount.completed}</h5>
           <h5 className=' text-lg font-medium px-4 text-red-600 w-1/5'>{elem.taskCount.failed}</h5>
         </div>
      })}
    
        </div>
    </div>
  )
}
