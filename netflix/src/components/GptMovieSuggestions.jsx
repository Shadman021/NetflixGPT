import React from 'react'
import { useSelector } from "react-redux";
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const {geminimovies, moviesName} = useSelector((store) => store.GptSearch);
  console.log("moviesName",moviesName);
  console.log("geminimovies",geminimovies);
  if(!moviesName) return null;
  ;
  

  return (
    <div className='p-4 m-4 bg-black text-white'>
       <p className="font-semibold mb-2 text-center text-xl mt-6">🎬 Recommended Movies:</p>
      {moviesName.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={geminimovies[index]}/>)}
      
    </div>
  )
}

export default GptMovieSuggestions