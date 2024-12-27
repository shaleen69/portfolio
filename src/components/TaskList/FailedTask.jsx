import React from 'react'

export default function FailedTask({data}) {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl p-5'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
          </div>

          <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
          <p className='text-sm mt-2'>{data.decription}</p>
          <div className='mt-2'>
              <button className='bg-green-500 py-1 px-2 text-sm'>Failed</button>
          </div>
      </div>
  )
}
