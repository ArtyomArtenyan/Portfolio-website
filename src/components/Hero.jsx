import React from 'react';
import profilePic from '../assets/kevinRushProfile.png';
import { HERO_CONTENT } from '../dataBase';

const Hero = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<div className='flex flex-nowrap gap-6 max-w-md:flex-wrap'>
				<div className='w-full'>
					<div className='flex flex-col items-start max-w-md:items-center'>
						<h1 className=' pb-16 mt-16 font-thin tracking-tight text-8xl max-w-xl:text-7xl max-w-xl:pb-12 max-w-xl:mt-12 max-w-lg:mt-8 max-w-lg:pb-8 max-w-lg:text-5xl max-w-ss:text-3xl'>
							Artyom Artenyan
						</h1>
						<span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-4xl tracking-tight text-transparent max-w-lg:text-2xl'>
							Web developer
						</span>
						<p className='my-2 max-w-xl py-6 font-light tracking-tighter max-w-xl:py-4 max-w-xl:max-w-lg max-w-lg:max-w-md max-w-md:text-center max-w-ss:max-w-sm '>
							{HERO_CONTENT}
						</p>
					</div>
				</div>
				<div className='w-1/2 flex items-center max-w-md:w-full max-w-md:justify-center'>
					<div className='flex justify-center'>
						<img src={profilePic} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
