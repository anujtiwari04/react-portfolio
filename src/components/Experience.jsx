import { EXPERIENCES } from '../constants/index';
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-zinc-600 pb-4">
            <h1 className="text-center text-white font-extrabold text-3xl py-20">Experience</h1>
            <div>
                {EXPERIENCES.map((experience,index) => (
                    <motion.div
                        initial={{ x: index % 2 === 0 ? -100 : 100,opacity: 0 }}
                        whileInView={{ x: 0,opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5,delay: index * 0.5 }}
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold text-sm text-purple-100">
                                {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div>
                                {experience.technologies.map((tech,index) => (
                                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
