import React from 'react';

const Line = () => (
    <div className="w-10 h-2 bg-[#3C3C3C] z-10 mb-3"></div>
);

const CourseBook = () => {
    return (
        <div>
            <div className="bg-[#52B5E7] w-[18rem] h-[20rem] relative rounded-2xl">
                <div className="absolute left-0 h-full w-12 bg-[#318BAC] rounded-l-xl"></div>
                <div className="absolute -left-5 top-4">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <Line key={index} />
                    ))}
                </div>
                <div className='text-center py-2 pl-4 text-[2.5rem] baloo font-[800] text-[#0D3045]'>
                    DOCKER
                </div>
            </div>
        </div>
    );
};

export default CourseBook;