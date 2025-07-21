import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = ({id}) =>{
     const dispatch = useDispatch();
        //....Fetching the trailer video && updating the store with trailer video data....
  const getMovieVideo = async ()=>{
    console.log(id);
    
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter(result=>result.type === "Trailer");
    const trailer = filterData.length?filterData[0]:json.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(()=>{
    getMovieVideo();
  },[])
}
export default useMovieTrailer;