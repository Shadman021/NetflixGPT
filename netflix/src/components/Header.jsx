import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constant';
import { UserImg } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // ......Sign-out......

      // from the onAuthStateChange function
    }).catch((error) => {
      // ......An error happened.......
      navigate("/error")
    });
  }

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
        }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });

    //unsubcribe when components unmounts
    return ()=> unsubscribe();
  }, [])

  return (
    <div className=' absolute w-[100%] bg-gradient-to-b from-black px-[3rem] py-[2rem] flex justify-between z-50'>
      <img className="w-30 " src={LOGO} alt='logo' />

      {user && <div>
        <img
          className='h-10 w-10 m-auto'
          src= {UserImg}
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