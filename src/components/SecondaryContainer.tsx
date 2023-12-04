import { FC } from 'react';
import { RootState } from '../utils/type';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer: FC = () => {
  const movies = useSelector((state: RootState) => state.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
