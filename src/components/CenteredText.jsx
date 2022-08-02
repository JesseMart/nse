import React from 'react'

const CenteredText = () => {
    return (
        <div id='FSA' className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 '>
            <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full overflow-hidden flex-col my-20'>
                <h2 className='font-body text-primary font-bold text-[30px] leading-[36px] sm:text-[48px] sm:leading-[52px] text-center transform-none'>
                    What is <span className='text-blue-600'>Full Spectrum Advertising?</span>
                </h2>
                <div className='lg:w-[80%] w-[100%] flex justify-center items-center lg:flex-row flex-col mt-10'>
                    <div className='flex-1 flex flex-col justify-center items-center lg:mr-19 lg:mb-0 '>
                        <p className='font-body text-center sm:w-[80%] text-primary mt-5 xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal '>
                            <span className='font-bold text-gray-900'>Full Spectrum Advertising</span> is a wholistic process to marketing which aims to increase your ability to generate leads, impress clients and secure contracts.<br/><br/>
                            Our main strategy consists of a <span className='font-bold text-gray-900'>trifurcated approach</span> encompassing thoughtful web design, results driven search engine optimization, and engaging social media strategies into symbiotic lead generation for your business.<br/><br/>
                            The experts at Northern Star Enterprises work together to ensure that all aspects of your online presence coincide with one another and achieve maximal results. You benefit from a completely in house top down approach that takes the unique aspects of your business into consideration every step of the way.<br/><br/>
                            We utilize high level data analytics to ensure that our strategies are generating results, and we are able to pivot rapidly to respond to changing markets, customer demographics and our clients demands. Our clients are informed every step of the way, receiving data analytics that showcase the results of our strategies on a monthly basis.<br/><br/>
                            <span className='font-bold text-gray-900'>Simple put, we take you and your business to </span><span className='text-blue-600 font-bold italic'>new horizons.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenteredText
