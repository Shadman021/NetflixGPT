import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(!movies) return;
    const mainMovie = movies[0];

    const {original_title, overview, id}= mainMovie;
    
  return (
    <div>
        <VideoBackground Name={original_title} overview={overview}/> 
        <VideoTitle id={id}/>
    </div>
  )
}

export default MainContainer