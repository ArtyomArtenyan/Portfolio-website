import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../dataBase';
const About = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<h1 className='my-20 text-center text-4xl'>
				About <span className='text-neutral-500'>Me</span>
			</h1>
			<div className='flex flex-nowrap gap-6 max-w-md:flex-wrap'>
				<div className='w-1/2 flex items-center max-w-md:w-full max-w-md:justify-center'>
					<div className='flex items-center justify-center'>
						<img className='rounded-2xl' src={aboutImg} alt='' />
					</div>
				</div>
				<div className='w-1/2 max-w-lg:w-full'>
					<div className='flex justify-start max-w-lg:items-center max-w-lg:justify-center'>
						<p className='my-2 max-w-xl py-6 font-light tracking-tighter max-w-xl:py-4 max-w-xl:max-w-lg max-w-lg:max-w-md max-w-md:text-center max-w-ss:max-w-sm max-w-lg:text-xs max-w-md:text-base '>
							{ABOUT_TEXT}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
