import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useCallback, useRef } from 'react';
import { Movie } from './Movie';

const useHookWithRefCallback = () => {
	const ref = useRef(null);
	const setRef = useCallback(node => {
		if (ref.current) {
			// Make sure to cleanup any events/references added to the last instance
			ref.current.removeEventListener('transitionend', () => {});
		}

		if (node) {
			const slider = node.children[1].children[1].children[0];
			if (slider) {
				slider.addEventListener('transitionend', () => {
					const translateX = Number(
						slider.style.transform
							.split('translateX(')[1]
							.split('px')[0]
							.split('-')[1],
					);
					console.log(translateX);
					const arrowLetf = node.children[1].children[0].children[0];
					const arrowRight = node.children[1].children[0].children[1];

					if (translateX) {
						arrowLetf.style.display = 'block';
					} else {
						arrowLetf.style.display = 'none';
					}
				});
			}
		}

		// Save a reference to the node
		ref.current = node;
	}, []);
	return [setRef];
};

const movie = {
	Title: 'Comedians in Cars Getting Coffee',
	Year: '2012–',
	imdbID: 'tt2314952',
	Type: 'series',
	Poster:
		'https://m.media-amazon.com/images/M/MV5BMWExMDNjMGYtNDcwYy00ZmY4LTliY2UtYWNiNjY4NDY2MTBkXkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SX300.jpg',
};

export const Slider = () => {
	const [ref] = useHookWithRefCallback();

	return (
		<div
			ref={ref}
			className='
					ml-[calc((100vw-91.666667vw)/2)]
					w-[calc(100vw-(100vw-91.666667vw)/2)]
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
	);
};
