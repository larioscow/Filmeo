import { BiSearch } from 'react-icons/bi';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './App.css';

import { Movie } from './components/Movie';

const API_URL = 'https://www.omdbapi.com/?apikey=815d8454';

function App() {
	const movie = {
		Title: 'Comedians in Cars Getting Coffee',
		Year: '2012–',
		imdbID: 'tt2314952',
		Type: 'series',
		Poster:
			'https://m.media-amazon.com/images/M/MV5BMWExMDNjMGYtNDcwYy00ZmY4LTliY2UtYWNiNjY4NDY2MTBkXkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SX300.jpg',
	};

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

					<div className='flex justify-center items-center w-11/12 sm:w-96 rounded-md bg-zinc-800'>
						<input
							className='text-gray-300 bg-transparent w-full outline-none pl-4 mr-2 py-4'
							type='text'
							placeholder='Search for movies'
						/>
						<div className='flex items-center justify-center h-14 p-2 rounded-r-md hover: transition-all duration-75 cursor-pointer'>
							<BiSearch
								className='text-3xl scale-95 ml-1 text-gray-300 transition-all duration-75'
								onClick={() => searchMovies('cars')}
							/>
						</div>
					</div>
				</header>

				<div
					className='
					ml-[calc((100vw-(91.666667vw*0.91666667))/2)]
					w-[calc(100vw-(100vw-(91.666667vw*0.91666667))/2)]
					sm:ml-[calc((100vw-91.666667vw)/2)]
					sm:w-[calc(100vw-(100vw-91.666667vw)/2)]
				'
				>
					<h2 className='text-white text-2xl md:text-3xl font-bold'>
						Ultimos Estrenos
					</h2>
					<Splide
						options={{
							mediaQuery: 'min',
							pagination: false,
							rewind: true,
							rewindByDrag: true,
							width: '100%',
							fixedWidth: '155px',
							perMove: 1,
							arrows: false,

							padding: { left: '0rem' },
							perPage: 2,

							// height: '280px',

							breakpoints: {
								640: {
									arrows: true,
								},
								768: {
									fixedWidth: '186px',
								},
							},
						}}
					>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
						<SplideSlide>
							<Movie movie={movie} />
						</SplideSlide>
					</Splide>
				</div>
			</div>
		</div>
	);
}

export default App;
