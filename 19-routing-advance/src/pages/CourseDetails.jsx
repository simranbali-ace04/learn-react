import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

  const params = useParams (); {/* Hook that grabs whatever is currently in the dynamic routing segment and turns it into a JS object */}
  
  return (
    <div>
      <h1>{params.CourseId} Course Details Page</h1>
    </div>
  )
}

export default CourseDetails
