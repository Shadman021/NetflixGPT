import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { loginBgImg } from '../utils/constant'

const GptSearch = () => {
  
  return (
    <div className={`bg-[url("${loginBgImg}")] w-[100%] h-[100vh]`}>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch