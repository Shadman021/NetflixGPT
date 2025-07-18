import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () =>{
  signOut(auth).then(() => {
  // ......Sign-out......
  navigate("/")
}).catch((error) => {
  // ......An error happened.......
  navigate("/error")
});
}

  return (
    <div className='w-[100%] bg-gradient-to-b from-black px-[10rem] py-[1rem] flex justify-between'>
      <img className="w-44 " src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />

      {user && <div>
        <img 
        className='h-10 w-10 m-auto'
        src="https://pbs.twimg.com/media/Dj7pdk_XoAEWZ9f.jpg" 
        alt='userIcon' />
        <button 
        className='font-bold text-lg text-white cursor-pointer'
        onClick={handleSignOut}
        >SignOut</button>
      </div>}
    </div>
  )
}

export default Header