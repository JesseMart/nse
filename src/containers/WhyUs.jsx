import React from 'react'
import placeholder from '../placeholder1.png';


const WhyUs = () => {
  return (
    <div className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12'>
        <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full overflow-hidden flex-col'>
            <h2 className='font-body text-primary font-bold text-[30px] leading-[36px] sm:text-[48px] sm:leading-[52px] text-center transform-none'>
                Why Us? 
            </h2>
            <div className='lg:w-[80%] w-[100%] flex justify-center items-center lg:flex-row flex-col mt-10'>
                <div className='flex-initial flex justify-center items-center lg:mr-10 lg:mb-0 mr-0 mb-10 transform-none'>
                    <img className='relative w-[364px] h-auto' src={placeholder} alt='whyUs-code'/>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center lg:mr-19 lg:mb-0 '>
                    <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6478] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a similique explicabo, eaque laboriosam libero, placeat soluta natus possimus minima quaerat! Adipisci fuga consequatur ad perspiciatis dolorem tempore vel voluptatibus?</p>
                    <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6478] text-justify my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a similique explicabo, eaque laboriosam libero, placeat soluta natus possimus minima quaerat! Adipisci fuga consequatur ad perspiciatis dolorem tempore vel voluptatibus?</p>
                    <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6478] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti a similique explicabo, eaque laboriosam libero, placeat soluta natus possimus minima quaerat! Adipisci fuga consequatur ad perspiciatis dolorem tempore vel voluptatibus?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs