import React from 'react'

const CTA = () => {
  return (
    <div className=''>
        <div className='bg-sky-50'> 
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-32 lg:flex lg:items-center lg:justify-center'>
            <h2 className='text-3xl font-body font-normal tracking-tight text-gray-900 sm:text-4xl'>
                <span className='block mb-2 font-semibold'>Get in touch with us today.</span>
                <span className='block text-blue-600'>Schedule a meeting with one of our advertising professionals to see how we can grow your brand.</span>
            </h2>
            <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                <div className='inline-flex rounded-md shadow'>
                    <a href="https://forms.gle/TVbwJ6seVxCQY5Me8" target="_blank" 
                    className='inline-flex items-center
                     justify-center px-5 py-3 border border-transparent 
                     text-body font-medium rounded-md
                     text-white bg-blue-600 hover:bg-blue-700'
                     >
                        Get A Quote
                     </a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CTA