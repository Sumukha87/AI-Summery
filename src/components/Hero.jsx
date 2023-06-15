import React from 'react'
import {logo} from "../assets"

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} className='w-28 object-contain'/>
            <button type='button' onClick={()=>window.open('https://github.com/Sumukha87')} className='black_btn'>
                GitHub Page

            </button>

        </nav>
        <h1 className='head_text'>
            Summarize all of your Articles with<br className='max-md:hidden'/>
            <span>Open AI APIS</span>
        </h1>
        <h2 className='desc'>
            Get the summary of any article of your choice with an open source summarizer with uses Chat GPT API to get a concise summary.

        </h2>

    </header>
  )
}

export default Hero