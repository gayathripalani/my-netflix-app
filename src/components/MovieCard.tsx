import { FC } from 'react';
import { IMG_CDN_URL } from '../utils/constants';

interface MovieCardProps {
  posterPath: string;
}

const MovieCard: FC<MovieCardProps> = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  }
  return (
    <div className="w-40 pr-4">
      <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
