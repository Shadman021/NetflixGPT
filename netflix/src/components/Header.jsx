import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO, SUPPORTED_LANG } from '../utils/constant';
import { UserImg } from '../utils/constant';
import { setGptSearch, setLangBtnVisible } from '../utils/GptSearchSlice';
import logo from '../assets/logo.png';
import { changeLang } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const btnvisible = useSelector((state) => state.GptSearch.langBtnVisible);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // ......Sign-out......

      // from the onAuthStateChange function
    }).catch((error) => {
      // ......An error happened.......
      navigate("/error")
    });
  }
  const hangletoggleGptSearch =() => {
    dispatch(setGptSearch());
    dispatch(setLangBtnVisible());
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

  const handleLangChange = (e) =>{
    dispatch(changeLang(e.target.value))
  }

  return (
    <div className=' absolute w-[100%] bg-gradient-to-b from-black px-[3rem] py-[2rem] flex justify-between z-50'>
      <img className="w-40 -mt-15" src={logo} alt='logo' />
    
      {user && <div className='flex'>

        {btnvisible && <div>
          <select className='bg-gray-700 text-white px-3 py-2 rounded-lg mr-4' onChange={handleLangChange}>
            {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
        </div>}

        <div>
        <button className='px-3 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg mr-4 cursor-pointer font-semibold' onClick={hangletoggleGptSearch}>{btnvisible? "Home page": "GPT Search"}</button>
        </div>
        <div>
        <img
          className='h-10 w-10 m-auto'
          src= {UserImg}
          alt='userIcon' />
          
        <button
          className='font-bold text-lg text-white cursor-pointer'
          onClick={handleSignOut}
        >SignOut</button>
        </div>
      </div>}
    </div>
  )
}

export default Header