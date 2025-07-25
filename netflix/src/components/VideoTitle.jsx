import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoTitle = ({id}) => {
const trailerVideo = useSelector(store=>store.movies?.trailerVideo);

  useMovieTrailer({id});
  
  return (
    <div className="w-full">
      <iframe
      className="w-full aspect-video" 
       src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1" }
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       ></iframe>
    </div>
  )
}

export default VideoTitle