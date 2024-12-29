import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import './index.css';

const App = () => {
	return (
		<div className='overflow-x-hidden text-neutral-300 '>
			<div className='fixed top-0 -z-10 w-full h-full'>
				<div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
			</div>
			<div className='mx-auto px-48 max-w-2xl:px-32 max-w-xl:px-24 max-w-lg:px-24 max-w-md:px-12'>
				<Header />
				<Hero />
				<About />
				<Technologies />
				<Experience />
			</div>
		</div>
	);
};

export default App;
