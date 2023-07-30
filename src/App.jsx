import { BiSearch } from 'react-icons/bi';
import { Slider } from './components/Slider';
import { language } from '../lang';
import { useState } from 'react';
import { Results } from './components/Results';
import './App.css';

function App() {
	const [search, setSearch] = useState('');
	return (
		<div className='bg-zinc-900 min-h-full'>
			<div className='center w-11/12 m-auto flex flex-col items-center min-h-screen'>
				<header className='flex place-content-center justify-center sm:justify-between w-full h-10 items-center py-12'>
					<span
						className='hidden sm:inline-block font-dmsans font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 text-4xl cursor-pointer'
						onClick={() => window.location.reload()}
					>
						FILMEO
					</span>

					<div className='flex justify-center items-center w-full sm:w-96 rounded-md bg-zinc-800'>
						<input
							className='text-gray-300 bg-transparent w-full outline-none pl-4 mr-2 py-4'
							type='text'
							placeholder='Search for movies'
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
						<div className='flex items-center justify-center h-14 p-2 rounded-r-md hover: transition-all duration-75 cursor-pointer'>
							<BiSearch className={`text-3xl scale-95 ml-1 text-gray-300`} />
						</div>
					</div>
				</header>
				<main className='h-full'>
					<div className={`${search && 'hidden'}`}>
						<Slider type={'latest-movies'} title={'Ultimas películas'} />
						<Slider
							type={'region'}
							title={'Películas populares en ' + language.country}
						/>
						<Slider type={'top-rated-tv'} title={'Series mejor calificadas'} />
						<Slider type={'latest-tv'} title={'Ultimas series'} />
					</div>
					<div className={`${!search && 'hidden'}`}>
						<Results query={search} />
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
