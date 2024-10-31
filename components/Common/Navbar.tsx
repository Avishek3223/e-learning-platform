import React from 'react'

const Navbar = () => {
  return (
      <div className='w-full border border-black'>
          <div className="flex justify-between items-center p-4">
              <div className='font-bagel text-[#464646] tracking-wide text-3xl'>
                  UGS
              </div>
              <div className="flex gap-6 font-static text-[1.5rem]">
                  <div>Home</div>
                  <div>Courses</div>
                  <div>Learnings</div>
              </div>
        </div>
    </div>
  )
}

export default Navbar