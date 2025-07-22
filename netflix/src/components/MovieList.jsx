import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className='px-[4.3rem] '>
      <h1 className='text-2xl py-3 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hidden'>
        <div className='flex gap-[14px]'>
          {movies.map(movie => <MovieCards movie={movie} key={movie.id} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList