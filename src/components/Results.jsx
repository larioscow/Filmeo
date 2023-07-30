import { useEffect, useState } from 'react';
import { Movie } from './Movie';
export const Results = ({ query }) => {
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
			const data = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${query}`,
				options,
			);

			const movies = await data.json();
			setMovies(movies.results);
		};

		fetchData().catch(err => console.log(err));
	}, [query]);
	return (
		<div className=' bg-zinc-900'>
			<h1 className='text-4xl font-bold text-gray-300 pb-4'>
				Resultados de búsqueda
			</h1>
			<div className='flex flex-wrap w-full h-full gap-3'>
				{movies &&
					movies.map(movie => {
						return <Movie movie={movie} key={movies.indexOf(movie)} />;
					})}
			</div>
		</div>
	);
};
