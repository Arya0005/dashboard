import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
        <DashboardLayout>
            <div className='p-10 '>
                {children}
            </div>
        </DashboardLayout>
        </div>
  )
}

export default DashboardLayout