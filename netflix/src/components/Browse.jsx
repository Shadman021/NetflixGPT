import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const ShowGptSearch = useSelector((store) => store.GptSearch.GptSearchView);

  return (
    <div>
      <Header />
      {ShowGptSearch ?
        <GptSearch />
        :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}

    </div>
  )
}

export default Browse

{ /* - MainContainer
        - VideoBackground
        - VideoTitle
     - SecondoryContainer 
        - MovieList * n 
        - MovieCard * n */
}