import React from 'react';
import { PROJECTS } from '../constants/index';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="border-b border-zinc-600 pb-10">
            <div className="text-center text-white text-4xl font-extrabold py-12">PROJECTS</div>
            <div className="flex flex-wrap justify-center gap-8 px-4 md:px-10">
                {PROJECTS.map((project,index) => (
                    <motion.div
                        initial={{ x: index % 2 === 0 ? -100 : 100,opacity: 0 }}
                        whileInView={{ x: 0,opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5,delay: index * 0.5 }}
                        key={index}
                        className="max-w-md w-full bg-zinc-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
                    >
                        <h1 className="text-white text-2xl font-bold mb-2">{project.title}</h1>
                        <p className="text-gray-400 text-base mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech,techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href="https://www.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm font-semibold hover:underline flex items-center gap-1"
                            >
                                <FiExternalLink className="text-lg" /> Live Demo
                            </a>
                            <a
                                href="https://www.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm font-semibold hover:underline flex items-center gap-1"
                            >
                                <FaGithub className="text-lg" /> GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
