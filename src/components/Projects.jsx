import React from 'react';
import { PROJECTS } from '../dataBase'; // Ensure this is imported correctly

const Projects = () => {
	return (
		<div className='border-b border-neutral-900 pb-24'>
			<h2 className='my-20 text-center text-4xl'>Projects</h2>
			<div>
				{PROJECTS.map((project, i) => (
					<div key={i} className='flex mb-8 flex-wrap justify-center'>
						<div className='w-1/4 max-w-md:w-full'>
							<img
								src={project.image}
								alt={project.title}
								className='rounded w-[150px] h-auto object-cover mb-6'
							/>
						</div>

						<div className='w-3/4 max-w-xl max-w-md:w-full'>
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
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
