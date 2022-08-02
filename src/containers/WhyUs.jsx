import React from 'react'
// import whyUsImg from '../utils/media/why-us.jpg';


const WhyUs = () => {
    return (
        <div id='WhyUs' className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 '>
            <div className='flex justify-center items-center w-full h-full absolute z-[-1] hero-circle overflow-hidden'>
                <svg viewBox="0 0 1194 1192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                        <circle cx="596" cy="596" r="594.5" stroke="url(#paint0_linear_1147_785)" stroke-width="3"></circle>
                        <circle cx="64" cy="335" r="10" fill="url(#paint1_linear_1147_785)"></circle>
                        <circle cx="187" cy="1029" r="10" fill="url(#paint2_linear_1147_785)"></circle>
                        <circle cx="1184" cy="684" r="10" fill="url(#paint3_linear_1147_785)"></circle>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1147_785" x1="27.8649" y1="603.544" x2="1201.29" y2="603.544" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CA5FF"></stop>
                            <stop offset="1" stop-color="#B673F8"></stop>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1147_785" x1="54.4675" y1="335.127" x2="74.1558" y2="335.127" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CA5FF"></stop>
                            <stop offset="1" stop-color="#B673F8"></stop>
                        </linearGradient>
                        <linearGradient id="paint2_linear_1147_785" x1="177.468" y1="1029.13" x2="197.156" y2="1029.13" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CA5FF"></stop>
                            <stop offset="1" stop-color="#B673F8"></stop>
                        </linearGradient>
                        <linearGradient id="paint3_linear_1147_785" x1="1174.47" y1="684.127" x2="1194.16" y2="684.127" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4CA5FF"></stop>
                            <stop offset="1" stop-color="#B673F8"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full overflow-hidden flex-col'>
                <h2 className='font-body text-primary font-bold text-[30px] leading-[36px] sm:text-[48px] sm:leading-[52px] text-center transform-none'>
                    Why Us?
                </h2>
                <div className='lg:w-[80%] w-[100%] flex justify-center items-center lg:flex-row flex-col mt-10'>
                    {/* <div className='flex-initial flex justify-center items-center lg:mr-10 lg:mb-0 mr-0 mb-10 transform-none'>
                    <img className='relative w-[474px] h-auto' src={whyUsImg} alt='whyUs-code'/>
                </div> */}
                    <div className='flex-1 flex flex-col justify-center items-center lg:mr-19 lg:mb-0 '>
                        <p className='font-body text-center sm:w-[80%] text-primary mt-5 xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal '>
                            The world of business today is a fast paced and constantly changing digital environment where both major corporations and small businesses are <span className='text-gray-900 font-bold'>fighting for the attention of the everyday consumer.</span><br/><br/>
                            At Northern Star Enterprises, we focus on creating a specialized and industry specific <span className='text-gray-900 font-bold'>Full Spectrum Advertising and Marketing</span> plan to make your business relevant and easily accessible to consumers. We combine detailed data analytics with creative thinking to keep your company ahead of the curve. We offer a top down operation, allowing you the convenience of having all of your advertising and marketing needs met by one cohesive team.<br/><br/>
                            We employ experts from a variety of industries that specialize in both traditional advertising methods and the methods of the future: <span className='text-gray-900 font-bold'>web development; search engine optimization; social media management and marketing; as well as blockchain experimentation and integration.</span><br/><br/>
                            Our team is full of highly motivated and passionate individuals whose main focus is to guide you and your business to <span className='text-blue-600 font-bold italic'>new horizons.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
