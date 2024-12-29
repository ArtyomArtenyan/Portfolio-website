import { motion } from 'motion/react';
import React from 'react';
import profilePic from '../assets/kevinRushProfile.png';
import { HERO_CONTENT } from '../dataBase';
const container = delay => ({
	hidden: { x: -100, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<div className='flex flex-nowrap gap-6 max-w-md:flex-wrap'>
				<div className='w-full'>
					<div className='flex flex-col items-start max-w-md:items-center'>
						<motion.h1
							variants={container(0)}
							initial='hidden'
							animate='visible'
							className=' pb-16 mt-16 font-thin tracking-tight text-8xl max-w-xl:text-7xl max-w-xl:pb-12 max-w-xl:mt-12 max-w-lg:mt-8 max-w-lg:pb-8 max-w-lg:text-5xl max-w-ss:text-3xl'
						>
							Artyom Artenyan
						</motion.h1>
						<motion.span
							variants={container(0.5)}
							initial='hidden'
							animate='visible'
							className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text  text-4xl tracking-tight text-transparent max-w-lg:text-2xl'
						>
							Web developer
						</motion.span>
						<motion.p
							variants={container(1)}
							initial='hidden'
							animate='visible'
							className='my-2 max-w-xl py-6 font-light tracking-tighter max-w-xl:py-4 max-w-xl:max-w-lg max-w-lg:max-w-md max-w-md:text-center max-w-ss:max-w-sm '
						>
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>
				<div className='w-1/2 flex items-center max-w-md:w-full max-w-md:justify-center'>
					<div className='flex justify-center'>
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
							src={profilePic}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
