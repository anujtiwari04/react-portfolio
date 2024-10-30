import React from 'react';
import image from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants/index'
import { motion } from "framer-motion"


const Aboutme = () => {
    return (
        <>
            <div className="border-b border-zinc-600 pb-4">
                <div className="max-w-4xl mx-auto pt-20 pb-10">
                    <motion.div
                        initial={{ opacity: 0,y: 20 }}
                        whileInView={{ opacity: 1,y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        className="text-center text-white font-extrabold text-3xl">ABOUT <span className='text-neutral-500'>ME</span></motion.div>
                </div>
                <div className='flex flex-wrap'>
                    <motion.div
                        initial={{ opacity: 0,x: -50 }}
                        whileInView={{ opacity: 1,x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8,delay: 0.2 }}
                        className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex item-center justify-center">
                            <img className='w-3/4 rounded-xl' src={image} alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0,x: 50 }}
                        whileInView={{ opacity: 1,x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8,delay: 0.4 }}
                        className="w-full lg:w-1/2 text-white mt-4 leading-8 pt-10 text-start">
                        <p>{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Aboutme;