import { BiSearch } from 'react-icons/bi';
import { Slider } from './components/Slider';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=815d8454';

function App() {
	const searchMovies = async searchValue => {
		const response = await fetch(`${API_URL}&s=${searchValue}`);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className='bg-zinc-900'>
			<div className='center h-screen w-11/12 m-auto flex flex-col items-center'>
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
						/>
						<div className='flex items-center justify-center h-14 p-2 rounded-r-md hover: transition-all duration-75 cursor-pointer'>
							<BiSearch
								className='text-3xl scale-95 ml-1 text-gray-300 transition-all duration-75'
								onClick={() => console.log('searching...')}
							/>
						</div>
					</div>
				</header>
				<Slider />
			</div>
		</div>
	);
}

export default App;
