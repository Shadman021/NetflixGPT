import React from 'react'
import lang from '../utils/langconstants'
import {useSelector} from 'react-redux'

const GptSearchBar = () => {
    const selectedLang = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'>
            <input type='text' placeholder={lang[selectedLang].inputPlaceHolder} className='p-3 my-2 ml-2 bg-white col-span-9 rounded-lg' />
            <button className='py-2 px-4 m-2 bg-orange-400 text-white rounded-lg col-span-3 text-xl'>{lang[selectedLang].search}</button>
            
        </form>
    </div>
  )
}

export default GptSearchBar