import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Header = () => {
	return (
		<div className='mb-20 flex justify-between items-center py-8'>
			<div className='flex flex-shrink-0 items-center'>
				<svg
					viewBox='0 0 160 50.18450860089465'
					preserveAspectRatio='xMidYMid meet'
					aria-label='Логотип Artyom Artenyan'
					className='h-10 w-auto mx-3 max-w-2xl:h-8'
				>
					<g
						transform='matrix(0.4932596961194824,0,0,0.4932596961194824,-4.811558817225929,0.977017222429934)'
						fill='#fff'
					>
						<path
							xmlns='http://www.w3.org/2000/svg'
							d='M48.3,88.1c-8.5,0-16.7-3.7-22.3-10.6c-4.4-5.4-8.3-10-11.6-13.8c-3.7-4.2-5.3-9.7-4.4-15.2c0.9-5.5,4.1-10.3,9-13.1h0  
                l39-22.7c5.3-3.1,11.7-3.3,17.2-0.8c5.5,2.6,9.4,7.7,10.4,13.7l5,30.4c1.3,7.9-2.6,15.7-9.7,19.4c-5.1,2.7-12,6-20.4,9.9  
                C56.6,87.2,52.4,88.1,48.3,88.1z M20.9,38.8c-3.8,2.2-6.3,5.9-7,10.2c-0.7,4.3,0.6,8.7,3.5,11.9c3.4,3.8,7.3,8.5,11.7,13.9  
                c7.2,8.8,19.4,11.6,29.7,6.8c8.3-3.9,15.1-7.2,20.2-9.9c5.6-2.9,8.6-9,7.6-15.2l-5-30.4c-0.8-4.8-3.8-8.7-8.1-10.7  
                c-4.4-2.1-9.3-1.8-13.5,0.6L20.9,38.8L20.9,38.8z'
						></path>
					</g>
					<g
						transform='matrix(3.4653022638267768,0,0,3.4653022638267768,58.34220190332266,-16.98691152543083)'
						fill='#fff'
					>
						<path d='M7.6758 4.901999999999999 l6.748 14.482 l-1.543 0 l-2.2754 -4.7754 l-6.25 0 l-2.2559 4.7754 l-1.6211 0 l6.8457 -14.482 l0.35156 0 z M7.5 7.968999999999999 l-2.5 5.2539 l4.9609 0 z M22.587909375 4.901999999999999 l6.748 14.482 l-1.543 0 l-2.2754 -4.7754 l-6.25 0 l-2.2559 4.7754 l-1.6211 0 l6.8457 -14.482 l0.35156 0 z M22.412109375 7.968999999999999 l-2.5 5.2539 l4.9609 0 z'></path>
					</g>
				</svg>{' '}
			</div>
			<div className=' flex items-center justify-center gap-4 text-2xl'>
				<FaLinkedinIn />
				<FaGithub />
				<FaSquareXTwitter />
				<FaInstagram />
			</div>
		</div>
	);
};

export default Header;
