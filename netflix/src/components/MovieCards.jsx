import { IMG_CDN_URL } from '../utils/constant'

const MovieCards = ({movie}) => {
  
    if(!movie){
        return <div><h3>Loading</h3></div>
    }
    if(!movie.poster_path) return null;
  return (
    <div className='w-[150px]'>
        <img alt={movie?.original_title} src={IMG_CDN_URL+movie.poster_path} />
    </div>
  )
}

export default MovieCards