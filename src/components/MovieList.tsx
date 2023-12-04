
import { FC } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../utils/type';

interface MovieListProps {
    title: string,
    movies: Movie[]
}

const MovieList: FC<MovieListProps> = ({title, movies}) => {
  return (
    <div className='px-6' >
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {movies?.map((movie => {
                    return <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                }))}
            </div>
        </div>
    </div>
  )
}

export default MovieList;