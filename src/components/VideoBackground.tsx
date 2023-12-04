import { FC } from 'react';
import { useSelector } from 'react-redux';
import useGetTrailerVideo from '../hooks/useGetTrailerVideo';
import { Movie, RootState } from '../utils/type';

interface VideoBackgroundProps {
    movieId: number
}

const VideoBackground: FC<VideoBackgroundProps> = ({ movieId }) => {
    const trailer = useSelector((state: RootState) => state.movies.trailerVideo);
    useGetTrailerVideo({movieId});
  return (
    <div>
        <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground