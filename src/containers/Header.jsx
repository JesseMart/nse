import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi';
import { socialIcons } from '../utils/constants'
import placeholder from '../ai.png';

const Header = () => {
  return (
    <div id='Home' className='flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 pt-20   hero-height '>
      <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full pt-[98px] flex-col lg:flex-row'>
        <div className='flex-1 flex flex-col justify-center items-start' style={{ opacity: 1, transform: 'none' }}>
          <h1 className='font-body text-black 
            font-bold md:text-[64px] md:leading-[70px]
             text-[40px] leading-[46px] tracking-[-0.5%]
              text-left'>Northern Star Enterprises
          </h1>
          <p className='font-body xs:text-[20px]
           xs:leading-[27px] text-[17px] leading-[23px]
            font-normal text-[#5B6478] mt-5 mb-10 '>
            Preparing your business for the world of tomorrow, today.
          </p>
          <a href="#ContactUs">
            <div className='flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff]'>
              <button type='button'
                className='font-body font-semibold
               text-[14px] leading-[16px]
                text-white'>
                Contact
              </button>
              <div className='relative w-[16px] h-[16px] ml-2 text-white'><BiRightArrowAlt /></div>
            </div>
          </a>
          <div className='flex justify-start items-start flex-row mt-14'>
            {socialIcons.map((item, idx) => (
              <div key={idx} className='flex justify-center items-center flex-row mr-4 w-[26px] h-[26px]'>
                <a href={item.link}><img src={item.icon} alt={item.name} /></a>
              </div>
            ))}
            <p className='font-body xs:text-[16px]
           xs:leading-[22px] 
            font-normal text-[#5B6478]'>
              Let's connect on Social Media!
            </p>
          </div>
        </div>
        <div className='flex flex-1 w-full
         lg:justify-center justify-end
         items-center lg:ml-10 ml-0 lg:mt-0 mt-10'
         style={{ opacity: 1, transform: 'none' }}
         >
          <div className='relative lg:w-full h-full w-[90%] object-cover'>
          <img src={placeholder} alt='header-head'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header