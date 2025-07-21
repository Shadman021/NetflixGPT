import React, { useState, useRef } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Form = () => {

    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmitClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {

            //......Sign Up Logic......
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)

                .then((userCredential) => {

                    // ......Signed up...... 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value,
                    }).then(() => {
                         const { uid, email, displayName } = auth.currentUser;

                        dispatch(
                            addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                        }));
                    }).catch((error) => {
                        navigate('/error')
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage);
                    navigate('/')
                });

        } else {
            //......Sign In Logic......
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // ......Signed in......
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    let message = "";
                    // ........setting customized error message.......
                    if ("auth/invalid-credential") {

                        message = "Invalid email or password.";

                    } else {
                        message = "Login failed. Please try again.";
                    }
                    setErrorMessage(message);
                });
        }
    }

    const [isSignInForm, setIsSignInForm] = useState(true);

    const handletoggle = () => {
        setIsSignInForm(!isSignInForm);
        console.log(isSignInForm);
    }

    return (

        <form onSubmit={(e) => e.preventDefault()} className='bg-black/[80%] flex flex-col 
        w-[400px] px-[3rem] py-[3rem] mx-auto rounded-2xl '>
            <p className='text-3xl font-bold text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</p>

            {!isSignInForm && (<input
                ref={name}
                type='text'
                placeholder='Full Name'
                className='p-3 mt-6 bg-gray-700 text-white rounded-md'>
            </input>)}

            <input
                ref={email}
                type='email'
                placeholder='Email Address'
                className='p-3 mt-4 bg-gray-700 text-white rounded-md'>
            </input>

            <input
                ref={password}
                type='password'
                placeholder='Password'
                className='p-3 my-4 bg-gray-700 text-white rounded-md'>
            </input>
            {errorMessage !== "clear" ?
                (<p className='text-lg text-red-600'>{errorMessage}</p>)
                :
                (<p className='text-lg text-green-600'>Submitted</p>)
            }


            <button
                className='px-5 py-2 my-4 bg-red-600 rounded-md font-bold text-white cursor-pointer hover:bg-red-700 hover:transition delay-200ms'
                onClick={handleSubmitClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p
                className='text-md text-gray-300'
                onClick={handletoggle}>
                {isSignInForm ? "New to Netflix? " : "Already Registered! "}
                <span className='text-white cursor-pointer hover:border-b hover:transition delay-400ms'>
                    {isSignInForm ? "Sign Up now" : "Sign In now"}
                </span>
            </p>
        </form>

    )
}

export default Form