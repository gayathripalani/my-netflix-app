import usePopularMovies from '../hooks/usePopularMovies';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> :  
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }      
    </div>
  )
}

export default Browse;
