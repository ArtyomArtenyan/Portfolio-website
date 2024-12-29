import { motion } from 'framer-motion';
import React from 'react';
import { PROJECTS } from '../dataBase';

const Projects = () => {
	return (
		<div className='border-b border-neutral-900 pb-24'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className='my-20 text-center text-4xl'
			>
				Projects
			</motion.h2>
			<div>
				{PROJECTS.map((project, i) => (
					<div key={i} className='flex mb-8 flex-wrap justify-center'>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className='w-1/4 max-w-md:w-full'
						>
							<img
								src={project.image}
								alt={project.title}
								className='rounded w-[150px] h-auto object-cover mb-6'
							/>
						</motion.div>

						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className='w-3/4 max-w-xl max-w-md:w-full'
						>
							<h6 className='font-semibold mb-2'>{project.title}</h6>
							<p className=' text-neutral-400 mb-4'>{project.description}</p>
							<div className='flex flex-wrap'>
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
