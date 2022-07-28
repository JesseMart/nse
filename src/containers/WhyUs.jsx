import React from 'react'
// import whyUsImg from '../utils/media/why-us.jpg';


const WhyUs = () => {
  return (
    <div id='WhyUs' className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 '>
        <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full overflow-hidden flex-col'>
            <h2 className='font-body text-primary font-bold text-[30px] leading-[36px] sm:text-[48px] sm:leading-[52px] text-center transform-none'>
                Why Us? 
            </h2>
            <div className='lg:w-[80%] w-[100%] flex justify-center items-center lg:flex-row flex-col mt-10'>
                {/* <div className='flex-initial flex justify-center items-center lg:mr-10 lg:mb-0 mr-0 mb-10 transform-none'>
                    <img className='relative w-[474px] h-auto' src={whyUsImg} alt='whyUs-code'/>
                </div> */}
                <div className='flex-1 flex flex-col justify-center items-center lg:mr-19 lg:mb-0 '>
                    <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6478] text-justify'>
                    The world of business today is a fast paced and constantly changing digital environment where both major corporations and small businesses are <span className='text-gray-900 font-bold'>fighting for the attention of the everyday consumer.</span>                        
                    </p>
                    <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6478] text-justify my-5'>
                    At Northern Star Enterprises, we focus on creating a specialized and industry specific <span className='text-gray-900 font-bold'>Full Spectrum Advertising</span><span className='text-gray-900 font-bold'> and Marketing</span> plan to make your business relevant and easily accessible to consumers. We combine detailed data analytics with creative thinking to keep your company ahead of the curve. We offer a top down operation, allowing you the convenience of having all of your advertising and marketing needs met by one cohesive team.
                    </p>
                    <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6478] text-justify'>
                    We employ experts from a variety of industries that specialize in both traditional advertising methods and the methods of the future: <span className='text-gray-900 font-bold '>web development; search engine optimization; social media management and marketing; as well as blockchain experimentation and integration.</span><br/><br/>
                    </p>
                    <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6478] text-justify'>
                    Our team is full of highly motivated and passionate individuals whose main focus is to<span className='italic'> guide you and your business to <span className='text-blue-600 font-bold'>new horizons</span>.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs