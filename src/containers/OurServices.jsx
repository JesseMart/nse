import React from 'react'
import placeholder1 from '../placeholder1.png'
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
          <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal sm:w-[75%] w-[100%] text-center text-[#5B6478] mt-5'>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptates eaque impedit,
            laborum harum ratione temporibus quos! Optio eveniet officiis
            voluptates similique repellendus nemo, quo amet. Dolorum, harum eaque.
            Nemo, beatae?
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
        </div>
      </div>
    </div>
  )
}

export default OurServices