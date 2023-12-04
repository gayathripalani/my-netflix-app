import { FC } from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { RootState } from '../utils/type';

const MainContainer: FC = () => {
  const movies = useSelector((state: RootState) => state.movies?.nowPlayingMovies);

  if (!movies) {
    return null; // or any other component/message to display when movies are null
  }

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

