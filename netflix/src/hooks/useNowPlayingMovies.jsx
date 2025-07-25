import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

  //....... Fetching the data from TMDB and putting the data into the store ........
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;