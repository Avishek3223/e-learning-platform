import React from 'react'
import Navbar from '../Common/Navbar'
import Image from 'next/image'
import girlImage from '../../public/utils/images/girl.png'
import blob from '../../public/utils/images/blob.svg';
import blob2 from '../../public/utils/images/blob2.svg'
import rocket from '../../public/utils/images/rocket.png'
import star from '../../public/utils/images/star.svg'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Image src={star} alt="star" className='absolute right-14 mt-8' />
            <Image className='absolute top-16 z-[-1] -left-8 -rotate-10' src={blob} alt="blob" width={500} />
            <h1 className='leading-tight font-syne px-14 text-[5vw] w-[80%] font-extrabold'>
                Upskill, Grow, and Succeed
            </h1>
            <br />
            <div className="relative flex justify-between px-20">
                <div className="flex flex-col gap-52">
                    <div className="w-[60%] tracking-wide text-[1.8rem] font-semibold text-gray-700 font-source">
                        Empower your career with the skills you need to thrive in a competitive world. Our courses are designed to help you learn faster, stay ahead, and achieve your goals with confidence.
                    </div>
                    <div className='border-2 border-black w-fit p-2 bg-white rounded-3xl ml-[15%]'>
                        <button className='bg-white p-3 px-20 text-[1.8rem] font-bold font-source rounded-3xl border-2 border-black '>
                            Explore
                        </button>
                    </div>
                </div>
                <div className="relative z-10">
                    <Image className="max-w-[18rem] mr-6" src={girlImage} alt="hero" />
                </div>

                <div className="absolute z-0 bottom-0 right-0">
                    <Image className="" src={blob2} alt="alt" width={400} />
                </div>
            </div>
            <Image className='w-[8rem] absolute bottom-4 left-1/2' src={rocket} alt="rocket" />
        </div>
    )
}

export default LandingPage