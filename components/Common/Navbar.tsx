"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    const menuItems = ['Home', 'Courses', 'Learnings'];

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            x: -20
        },
        open: {
            opacity: 1,
            x: 0
        }
    };
    const handleNavigate = (item:string) => {
        router.push(`/${item}`)
    }
    return (
        <nav className="w-full border-b border-black">
            <div className="flex justify-between items-center p-4">
                <div className="font-bagel text-[#464646] tracking-wide text-3xl">
                    UGS
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 font-static text-[1.5rem]">
                    {menuItems.map((item) => (
                        <div key={item}
                            onClick={() => handleNavigate(item)}>{item}</div>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-[#464646] block"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-6 h-0.5 bg-[#464646] block"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-[#464646] block"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="bg-white py-2">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item}
                                    variants={itemVariants}
                                    className="px-4 py-2 text-2xl font-static hover:bg-gray-100"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;