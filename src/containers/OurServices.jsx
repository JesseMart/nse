import React from 'react'
import { BsWindowSidebar } from 'react-icons/bs';
import {MdScreenSearchDesktop} from 'react-icons/md';
import {MdShowChart} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';
import {FaRegThumbsUp} from 'react-icons/fa';
import {MdCreate} from 'react-icons/md'



// bg-[#00d5ff] blue
// bg-[#b700ff] ourple
// bg-[#ef2525] red
const OurServices = () => {
  return (
    <div className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12'>
      <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col'>
        <div className='flex flex-col items-center transform-none'>
          <h2 className='font-body text-primary font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] text-center' >
            Our Services
          </h2>
          <p className='font-body xs:text-[27px] xs:leading-[27px] text-[16px] leading-[23px] font-normal w-[100%] text-center text-[#5B6478] mt-10'>
            <span className='text-blue-500 font-semibold'>Let's Solve Problems</span> 
          </p>
          <p className='font-body xs:text-[27px] xs:leading-[27px] text-[16px] leading-[23px] font-normal w-[100%] text-center text-[#5B6478] mt-2'>
            <span className=''>Advertising On All Fronts</span>
          </p>
          
        </div>
        <div className='w-full flex justify-center items-center flex-wrap mt-10'>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#b700ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <BsWindowSidebar style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Web Development</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                  Let us build you a beautiful website to show the world what you're capable of!
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#ef2525] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <MdScreenSearchDesktop style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>SEO</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Search Engine Optimization enables you to grow your online traffic by becoming a top result in google searches organically.
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#00d5ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <MdShowChart style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>PPC</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Pay Per Click is the quickest way to the top of search engine results, and when combined with SEO you'll dominate search results!
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#ef2525]  xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <FiMail style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Outbound Marketing</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Reaching your audience through conventional methods such as mailers and billboards may seem analogue but can have an exceptional return on investment.
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center  bg-[#00d5ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <FaRegThumbsUp style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Social Media Management</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Focus on your business and let us handle all of your social media, from daily Instagram posts to responding to Yelp reviews.
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#b700ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <MdCreate style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Content Creation</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Let us create content for your social media, website and physical advertising that is consistent with your brand’s aesthetic.
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#b700ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <MdCreate style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Marketing Strategy</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                We will develop a strategy for your business designed to increase customer acquisition and brand awareness in conjunction with your respective business goals.
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#00d5ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <MdCreate style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Business Consulting</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                In order to maintain a competitive edge on your competition, it’s imperative you stay ahead of the curve. Talk with our various experts about your industry and allow our creative team to help guide you in the right direction, ensuring you remain one step ahead and maximize profit.
                </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
                <div className='flex justify-center items-center bg-[#ef2525] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                  <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                    <MdCreate style={{fontSize: '2em', color: 'white'}} />
                  </div>
                </div>
                <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Blockchain Implementation</h3>
                <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Talk with our experts about the blockchain and what it means for you and your industry. We have personnel who can develop and create NFT technology, as well as individuals who are researching future applications within this emerging field. Start planning for the future, today.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices