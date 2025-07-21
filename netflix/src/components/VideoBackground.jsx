
const VideoBackground = ({ Name, overview }) => {

  return (
    <div className='pl-20 pt-[25%] absolute text-white bg-gradient-to-r from-black w-full aspect-video'>
      <div className="">
        <p className='font-bold text-4xl'>{Name}</p>
        <p className='w-1/3 mt-4'>{overview}</p>
      </div>
      <div className='my-4'>
        <button className='bg-white text-black py-2 px-7 mx-2 text-xl rounded-md hover:opacity-80 cursor-pointer'>Play</button>
        <button className='bg-gray-500 py-2 px-5 mx-2 text-lg rounded-md opacity-70 cursor-pointer'>More Info</button>
      </ div>
    </div>
  )
}

export default VideoBackground