import React from 'react'
import Navbar from '../../components/Common/Navbar';
import CourseBook from '../../components/Courses/CourseBook';

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className='p-20'>
        <CourseBook/>
      </div>
    </div>
  )
}

export default Courses