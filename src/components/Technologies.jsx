import React from 'react'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion"




const Technologies = () => {
    // return (
    //     <>
    //         <div className="text-center text-white font-extrabold text-3xl py-10">TECHNOLOGIES</div>
    //         <div className='flex flex-wrap justify-center gap-4'>
    //             <div className="h-24 w-24 p-4 border-2 rounded-2xl bg-transparent mx-4 border-neutral-500 flex items-center justify-center">
    //                 <SiMongodb className="text-green-600 text-3xl" />
    //             </div>
    //             <div className="h-24 w-24 p-4 border-2 rounded-2xl bg-transparent mx-4 border-neutral-500 flex items-center justify-center">
    //                 <SiExpress className="text-gray-600 text-3xl" />
    //             </div>
    //             <div className="h-24 w-24 p-4 border-2 rounded-2xl bg-transparent mx-4 border-neutral-500 flex items-center justify-center">
    //                 <RiReactjsFill className="text-blue-600 text-3xl" />
    //             </div>
    //             <div className="h-24 w-24 p-4 border-2 rounded-2xl bg-transparent mx-4 border-neutral-500 flex items-center justify-center">
    //                 <FaNodeJs className="text-green-700 text-3xl" />
    //             </div>
    //             <div className="h-24 w-24 p-4 border-2 rounded-2xl bg-transparent mx-4 border-neutral-500 flex items-center justify-center">
    //                 <RiTailwindCssFill className="text-blue-400 text-3xl" />
    //             </div>
    //         </div>
    //     </>
    // )
    return (
        <>
            <div className="text-center text-white font-extrabold text-3xl py-10">TECHNOLOGIES</div>
            <div className='flex flex-wrap justify-center gap-4'>
                {[SiMongodb,SiExpress,RiReactjsFill,FaNodeJs,RiTailwindCssFill].map((Icon,index) => (
                    <motion.div
                        initial={{ y: -100,opacity: 0 }}
                        whileInView={{ y: 0,opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5,delay: index * 0.2 }}
                        key={index}
                        className="h-24 w-24 p-4 border-2 rounded-2xl bg-transparent mx-4 border-neutral-500 flex items-center justify-center"
                    >
                        <Icon className={`text-3xl ${index === 0 ? "text-green-600" :
                                index === 1 ? "text-gray-600" :
                                    index === 2 ? "text-blue-600" :
                                        index === 3 ? "text-green-700" :
                                            "text-blue-400"
                            }`} />
                    </motion.div>
                ))}
            </div>
        </>
    )

}

export default Technologies
