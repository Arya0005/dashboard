"use client"
import React, { useState } from 'react'

function LatestInterviewsList() {
    const [interviewList,setInterviewList]=useState([]);
      return (
    <div className='my-5'>
        <h2 className='font-bold text-2xl'>Previously Created Interviews<h2/>
        {interviewList?.length==0&&
        <div className='p-5 flex-col gap-3 item-center mt-5'>
            <Video className='h=10 w-10 text-primary' />
            <h2>You dont have any interview Created!!</h2>
            <Button>+ Create New Interview</Button>
        <div/>}  
    </div>
    
  )
}

export default LatestInterviewsList
const [interviewList,setInterviewList=useState([]);]