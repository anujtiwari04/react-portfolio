import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import heroimage from '../assets/kevinRushProfile.png'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <>
            <div className="border-b border-zinc-600 pb-4">
                <div className='flex flex-wrap p-3'>
                    <div className='w-full lg:w-1/2'>
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.h1
                                initial={{
                                    x: -50,    // Start 50px to the left
                                    opacity: 0  // Fully transparent
                                }}
                                animate={{
                                    x: 0,      // End 50px to the right
                                    opacity: 1   // Fully visible
                                }}
                                transition={{
                                    duration: 0.8,    // Animation takes 0.8 seconds
                                    ease: "easeOut"   // Smooth deceleration at the end
                                }}
                                className='pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent'
                            >
                                Anuj Tiwari
                            </motion.h1>

                            <motion.span
                                initial={{
                                    x: -50,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 0.5
                                }}
                                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                            >
                                Full Stack Developer
                            </motion.span>
                            <motion.p
                                initial={{
                                    x: -50,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    delay: 1
                                }}
                                className="text-white mt-4 leading-8">{HERO_CONTENT}</motion.p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center">
                            <motion.img
                                initial={{
                                    x: 50,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                    // delay: 1
                                }}
                                className='w-3/4 pt-5' src={heroimage} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Hero
