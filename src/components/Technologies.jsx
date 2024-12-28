import React from 'react';
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
		icon: <RiHtml5Line />,
	},
	{
		id: 2,
		color: 'text-blue-500',
		icon: <RiCss3Line />,
	},
	{
		id: 3,
		color: 'text-yellow-400',
		icon: <RiJavascriptLine />,
	},
	{
		id: 4,
		color: 'text-cyan-400',
		icon: <RiReactjsLine />,
	},
	{
		id: 5,
		color: 'text-teal-400',
		icon: <RiTailwindCssLine />,
	},
	{
		id: 6,
		color: 'text-gray-800',
		icon: <RiNextjsLine />,
	},
];

const Technologies = () => {
	return (
		<div className='border-b border-neutral-900 pb-24'>
			<h2 className='my-20 text-center text-4xl font-bold'>Technologies</h2>
			<div className='flex flex-wrap items-center justify-center gap-4'>
				{icons.map(el => (
					<div
						key={el.id}
						className={`rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center justify-center gap-2 ${
							el.color || 'text-neutral-400'
						}`}
					>
						<div className='text-6xl'>{el.icon}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Technologies;
