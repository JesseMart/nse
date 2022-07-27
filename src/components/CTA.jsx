import React from 'react'

const CTA = () => {
  return (
    <div className=''>
        <div className='bg-sky-50'> 
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-32 lg:flex lg:items-center lg:justify-between'>
            <h2 className='text-3xl font-body font-bold tracking-tight text-gray-900 sm:text-4xl'>
                <span className='block'>Lorem Ipsum?</span>
                <span className='block text-blue-600'>Lorem Ipsum Today.</span>
            </h2>
            <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                <div className='inline-flex rounded-md shadow'>
                    <a href="#ContactUs" 
                    className='inline-flex items-center
                     justify-center px-5 py-3 border border-transparent 
                     text-body font-medium rounded-md
                     text-white bg-blue-600 hover:bg-blue-700'
                     >
                        Get Started
                     </a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CTA