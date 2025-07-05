import React from 'react'

function DashboardLayout({children}) {
  return (
    <div>
        <DashboardLayout>
            {children}
        </DashboardLayout>
        </div>
  )
}

export default DashboardLayout