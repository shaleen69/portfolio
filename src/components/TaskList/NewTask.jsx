import React from 'react'

export default function NewTask({data}) {
  return (
    <div>
      <div className='h-full flex-shrink-0 w-[300px] bg-blue-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
          <p className='text-sm mt-2'>{data.description}</p>
          <div className='mt-4 flex justify-between'>
            <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
          </div>
      </div>
    </div>
  )
}
