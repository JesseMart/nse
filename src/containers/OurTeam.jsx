import React from 'react'
import { MdCreate } from 'react-icons/md'
import placeholder2 from '../team-placeholder.jpeg'

const OurTeam = () => {
  return (
    <div className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12 bg-sky-50'>
      <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col'>
        <h1 className='font-body font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] text-center'>Meet Our Team</h1>
        <div className='w-full flex justify-center items-center flex-wrap mt-10'>
          <div className='service-card relative sm:w-[350px] w-full bg-white flex-col xs:m-7 my-5 mx-0 hover:shadow-xl overflow-hidden transform-none'>
            <div className='relative mx-h-[328px] w-full overflow-hidden rounded-full object-cover'>
              <img src={placeholder2} alt='service' />
            </div>
            <div className='flex w-full justify-start flex-col sm:p-10 p-6 service-desc'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#1465df]'>Jay Spiegel</h3>
              <div className='flex my-5 justify-start items-center font-bold'>
                <p>CEO & Co-Founder</p>
              </div>
            </div>
            <div className='service-overlay rounded-b-[20px] flex w-full justify-start flex-col bg-white sm:p-10 p-6'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#3A4556]'>
                Jay Spiegel
              </h3>
              <p className='font-body xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal text-[#5B6478]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minus est! Illum aliquid dicta voluptatum necessitatibus corrupti hic velit eum, explicabo amet perspiciatis quod vitae aspernatur, sequi tempore, recusandae doloribus?
              </p>
            </div>
          </div>
          <div className='service-card relative sm:w-[350px] w-full bg-white flex-col xs:m-7 my-5 mx-0 hover:shadow-xl overflow-hidden transform-none'>
            <div className='relative mx-h-[328px] w-full overflow-hidden rounded-full object-cover'>
              <img src={placeholder2} alt='service' />
            </div>
            <div className='flex w-full justify-start flex-col sm:p-10 p-6 service-desc'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#1465df]'>Hunter Newton</h3>
              <div className='flex my-5 justify-start items-center font-bold'>
                <p>CIO & Co-Founder</p>
              </div>
            </div>
            <div className='service-overlay rounded-b-[20px] flex w-full justify-start flex-col bg-white sm:p-10 p-6'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#3A4556]'>
                Hunter Newton
              </h3>
              <p className='font-body xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal text-[#5B6478]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minus est! Illum aliquid dicta voluptatum necessitatibus corrupti hic velit eum, explicabo amet perspiciatis quod vitae aspernatur, sequi tempore, recusandae doloribus?
              </p>
            </div>
          </div>
          <div className='service-card relative sm:w-[350px] w-full bg-white flex-col xs:m-7 my-5 mx-0 hover:shadow-xl overflow-hidden transform-none'>
            <div className='relative mx-h-[328px] w-full overflow-hidden rounded-full object-cover'>
              <img src={placeholder2} alt='service' />
            </div>
            <div className='flex w-full justify-start flex-col sm:p-10 p-6 service-desc'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#1465df]'>Jesse Martinez</h3>
              <div className='flex my-5 justify-start items-center font-bold'>
                <p>CTO</p>
              </div>
            </div>
            <div className='service-overlay rounded-b-[20px] flex w-full justify-start flex-col bg-white sm:p-10 p-6'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#3A4556]'>
                Jesse Martinez
              </h3>
              <p className='font-body xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal text-[#5B6478]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minus est! Illum aliquid dicta voluptatum necessitatibus corrupti hic velit eum, explicabo amet perspiciatis quod vitae aspernatur, sequi tempore, recusandae doloribus?
              </p>
            </div>
          </div>
          <div className='service-card relative sm:w-[350px] w-full bg-white flex-col xs:m-7 my-5 mx-0 hover:shadow-xl overflow-hidden transform-none'>
            <div className='relative mx-h-[328px] w-full overflow-hidden rounded-full object-cover'>
              <img src={placeholder2} alt='service' />
            </div>
            <div className='flex w-full justify-start flex-col sm:p-10 p-6 service-desc'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#1465df]'>Heather Malhiot</h3>
              <div className='flex my-5 justify-start items-center font-bold'>
                <p>VP of Social Media Marketing</p>
              </div>
            </div>
            <div className='service-overlay rounded-b-[20px] flex w-full justify-start flex-col bg-white sm:p-10 p-6'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#3A4556]'>
                Heather Malhiot
              </h3>
              <p className='font-body xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal text-[#5B6478]'>
                Heather Malhiot is a dedicated professional in business who is driven by her passion to help people reach their fullest potential.
                To her this means spending your time doing what you love, from a place of love. Her work has been utilized across many industries
                including hospitality, health & wellness, podcasting, fashion and more. She currently resides in Boulder, CO with her life partner and young daughter,
                assisting companies virtually.
              </p>
            </div>
          </div>
          <div className='service-card relative sm:w-[350px] w-full bg-white flex-col xs:m-7 my-5 mx-0 hover:shadow-xl overflow-hidden transform-none'>
            <div className='relative mx-h-[328px] w-full overflow-hidden rounded-full object-cover'>
              <img src={placeholder2} alt='service' />
            </div>
            <div className='flex w-full justify-start flex-col sm:p-10 p-6 service-desc'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#1465df]'>Joshua Redmond</h3>
              <div className='flex my-5 justify-start items-center font-bold'>
                <p>VP of Photography and Videography</p>
              </div>
            </div>
            <div className='service-overlay rounded-b-[20px] flex w-full justify-start flex-col bg-white sm:p-10 p-6'>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] text-[#3A4556]'>
                Joshua Redmond
              </h3>
              <p className='font-body xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal text-[#5B6478]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, minus est! Illum aliquid dicta voluptatum necessitatibus corrupti hic velit eum, explicabo amet perspiciatis quod vitae aspernatur, sequi tempore, recusandae doloribus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam