import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard(props) {
  //data=loggedinuserdata
  return (
    <div className='p-10 text-white bg-[#1C1C1C] h-screen'>
      
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  )
}
