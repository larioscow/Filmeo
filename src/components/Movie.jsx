export const Movie = ({ movie }) => {
	return (
		<div className='group container rounded-md w-36 h-60 md:w-44 md:h-72  hover hover:cursor-pointer duration-150'>
			<div className='absolute w-36 h-60 md:w-44 md:h-72 z-0 group-hover:brightness-50'>
				<img
					className='rounded-md w-full h-full object-cover group-hover:brightness-50 group-hover:saturate-50 duration-150'
					src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
					alt={movie.title || movie.name}
				/>
			</div>

			<div className='absolute w-36 h-60 md:w-44 md:h-72 overflow-hidden'>
				<div className='text-white w-full h-full flex flex-col place-content-between '>
					<p
						className='
					opacity-0 group-hover:opacity-100 px-2 py-1 rounded-br-md rounded-tl-md font-semibold text-xs md:text-sm w-2/6
					group-hover:animate-fade-down 
					group-hover:animate-once 
					group-hover:animate-duration-100 
					group-hover:animate-ease-linear
					'
					>
						{(movie.release_date || movie.first_air_date).split('-')[0]}
					</p>
					<div
						className='text-sm rounded-b-md p-2
						opacity-0 group-hover:opacity-100
						group-hover:animate-fade-up 
						group-hover:animate-once 
						group-hover:animate-duration-100 
						group-hover:animate-ease-linear
					'
					>
						<span className='uppercase text-xs md:text-sm font-semibold font-sans'>
							{'Movie'}
						</span>
						<h2>{movie.title || movie.name}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
