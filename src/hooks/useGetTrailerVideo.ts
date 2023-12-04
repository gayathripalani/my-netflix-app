import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { Video } from '../utils/type';

interface UseGetTrailerVideoProps {
  movieId: number;
}

const useGetTrailerVideo = ({ movieId }: UseGetTrailerVideoProps) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      if (!data.ok) {
        throw new Error(`Failed to fetch trailer videos for movie ID ${movieId}`);
      }

      const json = await data.json();
      const filterData = json.results.filter((video: Video) => video.type === 'trailer');
      dispatch(addTrailerVideo(filterData?.[0] ?? json.results[0]));
    } catch (error :any) {
      console.error('Error fetching trailer videos:', error.message);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId, dispatch]);

  // Optionally, you might return any cleanup function if needed
};

export default useGetTrailerVideo;
