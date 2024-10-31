"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Common/Navbar';
import Image from 'next/image';
import girlImage from '../../public/utils/images/girl.png';
import blob from '../../public/utils/images/blob.svg';
import blob2 from '../../public/utils/images/blob2.svg';
import rocket from '../../public/utils/images/rocket.png';
import star from '../../public/utils/images/star.svg';

const LandingPage = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const rocketVariants = {
        initial: {
            y: 0,
            x: '-50%',
            bottom: '1rem',
            left: '50%',
            position: 'absolute'
        },
        topRight: {
            y: '-60vh',
            x: '40vw',
            rotate: -120,
            transition: { duration: 5, ease: "easeInOut" }
        },
        topLeft: {
            x: '-40vw',
            rotate: 120,
            transition: { duration: 5, ease: "easeInOut" }
        },
        final: {
            y: 0,
            x: '-50%',
            bottom: '1rem',
            left: '50%',
            rotate: 0,
            transition: { 
                duration: 5.0, 
                ease: "easeInOut",
                onComplete: () => setIsAnimating(false)
            }
        }
    };

    const handleExploreClick = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            const rocketElement = document.querySelector('.rocket-element');
            if (rocketElement) {
                rocketElement.animate([
                    { transform: 'translateY(0px)' },
                    { transform: 'translateY(-60vh) translateX(40vw) rotate(-125deg)' },
                    { transform: 'translateY(-60vh) translateX(-40vw) rotate(-280deg)' },
                    { transform: 'translateY(0px) translateX(0) rotate(-360deg)' }
                ], {
                    duration: 3400,
                    easing: 'ease-in-out'
                }).onfinish = () => setIsAnimating(false);
            }
        }
    };
    return (
        <div className="relative overflow-hidden min-h-screen">
            <Navbar />
            
            {/* Animated Star */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute right-14 mt-8 max-md:right-4"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <Image src={star} alt="star" className='max-md:w-16'/>
                </motion.div>
            </motion.div>

            {/* Animated Blob */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-16 z-[-1] -left-8 -rotate-10 hidden lg:block"
            >
                <Image src={blob} alt="blob" width={500} />
            </motion.div>

            {/* Mobile Hero Section */}
            <div className="relative md:hidden">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-[20%] transform -translate-x-1/2 z-0"
                >
                    <Image src={blob2} alt="blob" width={300} className="opacity-60" />
                </motion.div>
                <motion.div
                    className="relative z-10 flex justify-center mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Image 
                            src={girlImage} 
                            alt="hero" 
                            className="max-w-[12rem]"
                            priority 
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Heading with typing animation */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="leading-tight font-syne px-4 md:px-14 text-4xl md:text-[5vw] md:w-[80%] w-full font-extrabold text-center md:text-left mt-8 mdmt-0"
            >
                Upskill, Grow, and Succeed
            </motion.h1>

            <div className="relative flex flex-col md:flex-row justify-between px-4 md:px-20 mt-8 max-md:mt-0">
                <div className="flex flex-col gap-8 md:gap-52">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="md:w-[60%] w-full leading-snug mt-8 tracking-wide text-xl md:text-[1.8rem] font-semibold text-gray-700 font-source max-md:mt-4 max-md:text-justify"
                    >
                        Empower your career with the skills you need to thrive in a competitive world. Our courses are designed to help you learn faster, stay ahead, and achieve your goals with confidence.
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="border-2 border-black w-fit p-2 bg-white rounded-3xl mx-auto md:ml-[15%] max-md:w-full"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleExploreClick}
                            disabled={isAnimating}
                            className="bg-white p-3 px-8 md:px-20 text-xl md:text-[1.8rem] font-bold font-source rounded-3xl border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 max-md:w-full disabled:opacity-50"
                        >
                            Explore
                        </motion.button>
                    </motion.div>
                </div>

                {/* Desktop Hero image with floating animation */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 mt-8 md:mt-0 hidden md:block"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex justify-center"
                    >
                        <Image className="max-w-[12rem] md:max-w-[18rem] mr-0 md:mr-6" src={girlImage} alt="hero" />
                    </motion.div>
                </motion.div>

                {/* Background blob */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute z-0 bottom-0 right-0 hidden md:block"
                >
                    <Image src={blob2} alt="alt" width={400} />
                </motion.div>
            </div>

            {/* Rocket with floating and hover animation */}
            <AnimatePresence>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="w-[6rem] md:w-[8rem] rocket-element"
                    style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                >
                    <motion.div
                        animate={{ y: isAnimating ? 0 : [-15, 0, -15] }}
                        transition={{ 
                            duration: 3, 
                            repeat: isAnimating ? 0 : Infinity, 
                            ease: "easeInOut" 
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <Image src={rocket} alt="rocket" className='max-sm:w-[4rem]' />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;