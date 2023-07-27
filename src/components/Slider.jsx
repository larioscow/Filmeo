import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState, useRef } from 'react';
import { Movie } from './Movie';

const sliderTypes = {
	'latest-movies':
		'https://api.themoviedb.org/3/discover/movie?include_adult=false',
	'latest-tv': 'https://api.themoviedb.org/3/discover/tv?include_adult=false',
	'top-rated-tv': 'https://api.themoviedb.org/3/tv/top_rated',
};

export const Slider = ({ type, title }) => {
	const ref = useRef();
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTE0OGQ0Y2Y2ZTI4Y2U5OTY1ODA0MmU0NmRmNGZlNSIsInN1YiI6IjY0YzE0ODMzODcxYjM0MDEzYjU2ODJjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZTEKUUzlfQ-EUrjzXmSuSt0u4veJ_uKVSVoymb1PMBc',
			},
		};

		const fetchData = async () => {
			const data = await fetch(sliderTypes[type], options);

			const movies = await data.json();
			setMovies(movies.results);
		};

		fetchData().catch(err => console.log(err));
	}, []);

	const hideArrows = e => {
		if (ref.current) {
			console.log('b');
			const index = ref.current.splide.root.id;
			const al = '#' + index + ' .splide__arrow--prev';
			const ar = '#' + index + ' .splide__arrow--next';
			const arrowLeft = document.querySelector(al);
			const arrowRight = document.querySelector(ar);

			if (e.index === 0) {
				arrowLeft.classList.add('hidden');
				arrowRight.classList.remove('hidden');
			}
			if (e.index > 0 && e.index < 10) {
				arrowLeft.classList.remove('hidden');
				arrowRight.classList.remove('hidden');
			}
			if (e.index >= 10) {
				arrowRight.classList.add('hidden');
				arrowLeft.classList.remove('hidden');
			}
		}
	};

	function hideArrowsOnLoad() {
		console.log('a');
	}

	return (
		<div
			className='
					ml-[calc((100vw-91.666667vw)/2)]
					w-[calc(100vw-(100vw-91.666667vw)/2)]
				'
		>
			<h2 className='text-white text-2xl md:text-3xl font-bold'>{title}</h2>
			{movies && (
				<div className='pb-3'>
					<Splide
						ref={ref}
						tag='section'
						onArrowsMounted={hideArrowsOnLoad}
						onActive={e => hideArrows(e)}
						options={{
							mediaQuery: 'min',
							pagination: false,
							rewind: true,
							rewindByDrag: true,
							width: '100%',
							fixedWidth: '155px',
							perMove: 4,
							arrows: false,

							padding: { left: '0rem', right: '2rem' },
							perPage: 2,

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
						{movies.map(movie => (
							<SplideSlide key={movie.id}>
								<Movie movie={movie} tv />
							</SplideSlide>
						))}
					</Splide>
				</div>
			)}
		</div>
	);
};
