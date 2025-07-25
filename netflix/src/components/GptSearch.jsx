import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { loginBgImg } from '../utils/constant'

const GptSearch = () => {
  
  return (
    <div className={`bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg")] bg-repeat-y w-[100%] min-h-[100vh]`}>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch