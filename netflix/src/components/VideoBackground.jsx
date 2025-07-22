
const VideoBackground = ({ Name, overview }) => {

  return (
    <div className='pl-20 pt-[20%] absolute text-white bg-gradient-to-r from-black w-full aspect-video'>
      <div className="">
        <p className='font-bold text-2xl lg:text-4xl'>{Name}</p>
        <p className='min-w-1/3 max-w-[60%] mt-4 max-h-[200px] text-sm'>{overview}</p>
      </div>
      <div className='my-4'>
        <button className='bg-white text-black py-1 xl:py-2 px-5 xl:px-7 text-xl rounded-md hover:opacity-80 cursor-pointer'><i className="fa-solid fa-play"></i> Play</button>
        <button className='bg-gray-500 py-[6px] xl:py-2 px-5 xl:px-7 mx-2 text-lg rounded-md opacity-70 cursor-pointer'>❕ More Info</button>
      </ div>
    </div>
  )
}

export default VideoBackground