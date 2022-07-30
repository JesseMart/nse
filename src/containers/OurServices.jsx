import React from 'react'
import { BsWindowSidebar } from 'react-icons/bs';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { MdShowChart } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { FaRegThumbsUp } from 'react-icons/fa';
import { ImVideoCamera } from 'react-icons/im'
import { BsClipboardData } from 'react-icons/bs'
import { FaPeopleArrows } from 'react-icons/fa'
import { GoFileBinary } from 'react-icons/go'

// bg-[#00d5ff] blue
// bg-[#b700ff] ourple
// bg-[#ef2525] red
const OurServices = () => {
  return (
    <div id='OurServices' className='flex justify-center items-center sm:p-16 xs:p-8 px-6 py-12'>
      <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col'>

        <h2 className='font-body text-primary font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] text-center my-10' >
          Our Services
        </h2>
        <div className='flex justify-center items-center flex-wrap mt-10 sm-w:flex-col'>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#b700ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <BsWindowSidebar style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Web Development</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Allow our team of talented and experienced developers to create a website that delivers strong first impressions and ends with lead conversions. <span className='font-bold text-gray-900'>Your website is your first impression</span> to consumers, ensure it’s a good one by trusting us to get the job done right the first time.
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#ef2525] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <MdScreenSearchDesktop style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>SEO</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Search Engine Optimization enables you to grow your online traffic by becoming a top result in google searches organically. <a href='https://reputation911.com/do-people-click-past-the-first-page-of-google/' className='text-gray-900 font-semibold hover:underline'>Only 4% of customers go to the second page of google.</a> Don’t let your competition leave you in the dust, get started today to increase your reach and begin acquiring new customers.
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#00d5ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <MdShowChart style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Social Media Management</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Posting on Social Media is <span className='font-bold text-gray-900'>ESSENTIAL</span> to competing in today’s digital world. Allow our experts to manage your accounts ranging from but not limited to: <span className='font-bold text-gray-900'>Instagram, Tik Tok, Facebook, YouTube and Twitter.</span> We will focus on operating your accounts while you focus what matters most, your business.
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#ef2525]  xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <FiMail style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Outbound Marketing</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Traditional outbound marketing techniques such as <span className='text-gray-900 font-bold'>mailers, billboards and other forms of print advertising</span> are still relevant today. See if this approach can benefit the industry your business serves by getting in contact with our advertising experts today.
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center  bg-[#00d5ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <FaRegThumbsUp style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>PPC</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Pay Per Click marketing is the cheat code of the digital world. If you are willing to <span className='text-gray-900 font-bold'>pay your way to the top</span> and are looking for <span className='text-gray-900 font-bold'>immediate ROI</span> this is the way to go. Please be aware that even though this strategy is effective, we strongly recommend SEO and other organic approaches to be utilized first.
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#b700ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <ImVideoCamera style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Content Creation</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                <span className='text-gray-900 font-bold'>Content is KING.</span> To win the battle for attention you need content that provides value, captivates and engages your customers. Trust experts to create content that people want to see while increasing your brand's value and visibility.
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#00d5ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <BsClipboardData style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Marketing Strategy</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                We will develop a strategy for your business designed to <span className='text-gray-900 font-bold'>increase customer acquisition and brand awareness</span> in conjunction with your respective business goals.
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#b700ff] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <FaPeopleArrows style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Business Consulting</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                In order to maintain a competitive edge on your competition, it’s imperative you stay ahead of the curve. Talk with our various experts about your industry and <span className='text-gray-900 font-bold'>allow our creative team to help guide you in the right direction,</span> ensuring you remain one step ahead and <span className='text-gray-900 font-bold'>maximize profit.</span>
              </p>
            </div>
          </div>
          <div className='flex-1 xs:min-w-[370px] xs:h-[37rem] m-2 sm:p-12 p-6 sm:rounded-[40px] rounded-[30px] bg-sky-50  hover:shadow-lg hover:bg-white '>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center bg-[#ef2525] xs:w-[70px] xs:h-[70px] w-[70px] h-[70px] rounded-full '>
                <div className='relative rounded-full xs:w-[32px] xs:h-[32px] w-[28px] h-[28px]'>
                  <GoFileBinary style={{ fontSize: '2em', color: 'white' }} />
                </div>
              </div>
              <h3 className='font-body font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] my-5'>Blockchain Implementation</h3>
              <p className='font-body xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal text-[#5B6578] my-5'>
                Talk with our experts about the <span className='text-gray-900 font-bold'>blockchain</span> and what it means for you and your industry. We have personnel who can develop and create <span className='text-gray-900 font-bold'>NFT technology,</span> as well as individuals who are researching future applications within this emerging field. <span className='text-gray-900 font-bold'>Start planning for the future, today.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default OurServices