import React from 'react';
import { EXPERIENCES } from '../dataBase';

const Experience = () => {
	return (
		<div className='border-b border-neutral-900 pb-24'>
			<h2 className='my-20 text-center text-4xl '>Experience</h2>
			<div>
				{EXPERIENCES.map((el, i) => (
					<div key={i} className='flex flex-wrap justify-center mb-8'>
						<div className='w-1/4 max-w-md:w-full'>
							<p className='mb-2 text-sm text-neutral-400'>{el.year}</p>
						</div>
						<div className='w-3/4 max-w-xl max-w-md:w-full'>
							<h6 className='mb-2 font-semibold'>
								{el.role}-
								<span className='text-sm text-purple-100'>{el.company}</span>
							</h6>
							<p className='mb-4 text-neutral-400'>{el.description}</p>
							{el.technologies.map((ele, index) => (
								<span
									key={index}
									className='mr-3 rounded mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
								>
									{ele}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
