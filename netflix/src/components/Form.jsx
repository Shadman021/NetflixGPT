import React from 'react'
import { useState } from 'react';

const Form = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const handletoggle = () => {
        setIsSignInForm(!isSignInForm);
        console.log(isSignInForm);
    }

    return (

        <form className='bg-black/[80%] flex flex-col w-3/12 px-[3rem] py-[3rem] mx-auto rounded-2xl'>
            <p className='text-3xl font-bold text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</p>

            {!isSignInForm && (<input
                type='text'
                placeholder='Full Name'
                className='p-3 mt-6 bg-gray-700 text-white rounded-md'>
            </input>)} 

            <input
                type='email'
                placeholder='Email Address'
                className='p-3 mt-4 bg-gray-700 text-white rounded-md'>
            </input>

            <input
                type='password'
                placeholder='Password'
                className='p-3 my-4 bg-gray-700 text-white rounded-md'>
            </input>

            <button
                className='px-5 py-2 my-4 bg-red-600 rounded-md font-bold text-white cursor-pointer hover:bg-red-700 hover:transition delay-200ms'>
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