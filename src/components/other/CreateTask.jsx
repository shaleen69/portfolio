import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export default function CreateTask() {

    const [userData,setUserData]= useContext(AuthContext)

   const [title,setTitle] =useState('')    // we are doing two way binding here what it is read below comment
   const [description ,setDescription]= useState('')
   const [date,setDate]=useState('')
   const [assignTo,setAssignTo]=useState('')
   const [category,setCategory]=useState('')

   

  const submitHandler = (e)=>{
     e.preventDefault()          // we made e.reventdefault bcz there is default behaviour of form that if u reload it will vanish on console.log so to prevent that we use this
     //  console.log("task created")  // also as form is submitted the form which we have filled must become empty so two way binding is required ab sb horha h real time m update ho rha textarea m with realtime input ab form submit hogya h to input khali ho jan chaiye
    //  console.log(taskTitle,taskDescription,assignTo,category,taskDate)

      const newtask={title,
        description,
        date,
        category,
        active:false,
        newTask:true,
        failed:false,completed:false}

    

    const data=userData
    //console.log(data)
    //console.log(JSON.parse(data));

    data.forEach(function (elem) {

        if(assignTo==elem.firstName)
        {
            //console.log(elem.tasks)
            elem.tasks.push(newtask) // we are creating new task and pushing in exsisting employees and it automatically icreases its tasks count and thus all componenets will re render
            //console.log(elem)
            elem.taskCount.newTask=elem.taskCount.newTask+1
        }

    })
    localStorage.setItem('employees',JSON.stringify(data))
    
    // localStorage.clear()
    console.log(data)
     //now new task had been added to particular element now we are setting it in local storage
    //console.log(task)
     setDate("")
     setAssignTo("")
     setCategory("")
     setDescription("")
     setTitle("")
  }


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        
        <form onSubmit={(e) =>{ // for each elemnt in each person all task will be rendered and one task is taken at a time and treated as e
            submitHandler(e)
        }}
        
        className='flex flex-wrap w-full  items-start justify-between'>


        <div className='w-1/2'>

            <div> 
                <h3 className='text-sm text-gray-300 nb-0.5'>Task Title</h3>
                 <input 
                 value={title}   // below three lines is two way binding  Two-way data binding in React means that the form's input element reflects the state, and changes to the input update the state as well. This ensures that the state and the UI stay synchronized. Here's how to implement two-way binding in a form in React:

                //  Steps to Implement Two-Way Binding:
                //  Define a State Variable:
                //  Use React's useState hook to manage the form's input value.
                //  Set the Value of the Input:
                //  Bind the input's value attribute to the state variable.
                //  Update State on Change:
                //  Attach an onChange handler to the input that updates the state when the input value changes.


                 onChange={(e)=>{
                    setTitle(e.target.value)
                 }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='make a ui design' 
                 />
           </div>

            <div>
                <h3>Date</h3>
               <input 
               value={date}
               onChange={(e)=>{
                setDate(e.target.value)
               }}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" 
               />
            </div>


            <div>
                <h3>Assign To</h3>
                <input 
                value={assignTo}
                onChange={(e)=>{
                 setAssignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name'
                />
            </div>

            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                 setCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'type="text" placeholder='design or dev' 
                />
            </div>

        </div>

        <div className='w-2/5 flex-col items-start'> 
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea 
            value={description}
            onChange={(e)=>{
                setDescription(e.target.value)
            }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="">
            </textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
        </form>

      </div>
  )
}
