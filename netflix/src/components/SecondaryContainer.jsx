import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store=> store.movies);
  console.log("movie data at SecondaryContainer: ",movies);
  
 if (!movies || !movies?.nowPlayingMovies || !movies?.popularMovies || !movies?.topRatedMovies || !movies?.upcomingMovies) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className=' bg-black'>
      <div className='px-10 relative z-20 xl:-mt-56'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies.results}/>
      <MovieList title={"Popular"} movies={movies.popularMovies.results}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies.results}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Comady"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Action"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
</div>
    </div>

    // MovieList
    //   .Card
    //   .Card
    //   .Card
    // MovieList
    //   .Card
    //   .Card
    //   .Card
    // MovieList
    //   .Card
    //   .Card
    //   .Card
    // MouseList
    //   .Card
    //   .Card
    //   .Card

  )
}

export default SecondaryContainer