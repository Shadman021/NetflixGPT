import { useRef, useState } from 'react';
import lang from '../utils/langconstants';
import { useDispatch, useSelector } from 'react-redux';
import { getGeminiResponse } from "../utils/gemini";
import { API_OPTIONS } from '../utils/constant';
import { setGeminiMovies } from '../utils/GptSearchSlice';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector(store => store.config.lang)
  const [movieSuggestions, setMovieSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchmovie = async(movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
    const json = await data.json();
    
    return json.results;
  }

  const handleGeminiSearchClick = async () => {
    const userQuery = searchText.current.value;
    if (!userQuery) return;

    const prompt = `Act as a movie recommendation system. Suggest 5 movies for: "${userQuery}". Reply with only names, comma-separated.`;

    try {
      setIsLoading(true);
      setError(null);
      const result = await getGeminiResponse(prompt);
      console.log(result.split(","));
      setMovieSuggestions(result);
      const movies = result.split(",");
      const promiseArr = movies.map(movie => searchmovie(movie));
      const tmdbresults = await Promise.all(promiseArr);
      console.log(tmdbresults);
      dispatch(setGeminiMovies({geminimovies: tmdbresults, moviesName: movies}));
      
    } catch (error) {
      console.error("Gemini Error:", error);
      setError("The model is overloaded. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='pt-[20%] lg:pt-[10%] flex flex-col justify-center items-center'>
      <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type='text'
          placeholder={lang[selectedLang].inputPlaceHolder}
          className='p-3 my-2 ml-2 bg-white col-span-9 rounded-lg' />
        <button className='py-2 px-4 m-2 bg-orange-400 text-white rounded-lg col-span-3 text-xl cursor-pointer disabled:opacity-50' onClick={handleGeminiSearchClick} disabled={isLoading}>{isLoading ? "Searching..." : lang[selectedLang].search}</button>

      </form>
       {error && (
        <p className="text-red-400 mt-4 text-lg text-center bg-black p-4">{error}</p>
      )}
        {/* {movieSuggestions && !error && (
        <div className="text-white text-xl mt-6 text-center w-[80%] lg:w-[50%]">
         
          <ul className="list-disc text-left ml-6">
            {movieSuggestions.split(",").map((movie, index) => (
              <li key={index}>{movie.trim()}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  )
}

export default GptSearchBar