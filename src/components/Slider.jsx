import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Movie } from './Movie';

const movie = {
	Title: 'Comedians in Cars Getting Coffee',
	Year: '2012–',
	imdbID: 'tt2314952',
	Type: 'series',
	Poster:
		'https://m.media-amazon.com/images/M/MV5BMWExMDNjMGYtNDcwYy00ZmY4LTliY2UtYWNiNjY4NDY2MTBkXkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SX300.jpg',
};

export const Slider = () => {
	return (
		<div
			className='
					ml-[calc((100vw-91.666667vw)/2)]
					w-[calc(100vw-(100vw-91.666667vw)/2)]
				'
		>
			<h2 className='text-white text-2xl md:text-3xl font-bold'>
				Ultimos Estrenos
			</h2>
			<Splide
				tag='section'
				onActive={e => console.log(e)}
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
	);
};
