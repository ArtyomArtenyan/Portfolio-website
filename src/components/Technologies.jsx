import { motion } from 'framer-motion';
import {
	RiCss3Line,
	RiHtml5Line,
	RiJavascriptLine,
	RiNextjsLine,
	RiReactjsLine,
	RiTailwindCssLine,
} from 'react-icons/ri';

const icons = [
	{
		id: 1,
		color: 'text-orange-500',
		duration: 2.5,
		icon: <RiHtml5Line />,
	},
	{
		id: 2,
		color: 'text-blue-500',
		duration: 3,
		icon: <RiCss3Line />,
	},
	{
		id: 3,
		color: 'text-yellow-400',
		duration: 5,
		icon: <RiJavascriptLine />,
	},
	{
		id: 4,
		color: 'text-cyan-400',
		duration: 2,
		icon: <RiReactjsLine />,
	},
	{
		id: 5,
		color: 'text-teal-400',
		duration: 6,
		icon: <RiTailwindCssLine />,
	},
	{
		id: 6,
		color: 'text-gray-800',
		duration: 4,
		icon: <RiNextjsLine />,
	},
];

const iconsVariants = duration => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: 'linear',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
});

const Technologies = () => {
	return (
		<div className='border-b border-neutral-900 pb-24'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className='my-20 text-center text-4xl '
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className='flex flex-wrap items-center justify-center gap-4'
			>
				{icons.map(el => (
					<motion.div
						variants={iconsVariants(el.duration)}
						initial='initial'
						animate='animate'
						key={el.id}
						className={`rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center gap-2 ${
							el.color || 'text-neutral-400'
						}`}
					>
						<div className='text-7xl'>{el.icon}</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Technologies;
