import React from 'react'

function CreateOptions() {
  return (
    <div className='grid grid-col-2 gap-5'>
        <div className='bg-white border border-grey-200 rounded-lg p-5'>
            <Video className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
            <h2 className='font-bold'> Create New Interview</h2>
            <p className='text-grey-500'>Create AI Interview and schedule then with candidate</p>
        </div>
        <div>
            <Phone className='p-3 text-primary bg-blue-50 rounded-lg h-12 w-12' />
            <h2 className='font-bold'>Create Phone Screening Call</h2>
            <p className='text-grey-500'>Schedule phone Screening with candidate</p>
        </div>
    </div>
  )
}

export default CreateOptions