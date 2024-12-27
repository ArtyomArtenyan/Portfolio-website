import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';

let dataBase = [
	{
		name: 'Linkdin',
		icon: <FaLinkedinIn />,
	},
	{
		name: 'GitHub',
		icon: <FaGithub />,
	},
	{
		name: 'XTwitter',
		icon: <FaSquareXTwitter />,
	},
	{
		name: 'Instagram ',
		icon: <FaInstagram />,
	},
];
const BurgerMenu = () => {
	const [isOpen, setOpen] = useState(false);
	const toggled = () => {
		setOpen(!isOpen);
	};
	return (
		<>
			<div onClick={toggled} className='text-[2rem] hidden max-w-ss:block'>
				<RxHamburgerMenu />
			</div>

			<div
				className={`fixed w-[250px] h-full top-0 right-0  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-l-[0.5px] transform ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 ease-in-out z-40`}
			>
				<ul className='flex flex-col gap-4 p-6 text-lg'>
					{dataBase.map((el, i) => {
						return (
							<li key={i} className='flex gap-3 items-center hover:opacity-70'>
								{el.icon}
								{el.name}
							</li>
						);
					})}
				</ul>
			</div>
			{isOpen && (
				<div
					onClick={toggled}
					className='fixed inset-0 z-30 bg-black opacity-50'
				></div>
			)}
		</>
	);
};

export default BurgerMenu;
