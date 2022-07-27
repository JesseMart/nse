import React from 'react'
import { socialIcons } from '../utils/constants'
const Footer = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='flex  justify-center items-start flex-row mt-14'>
                    {socialIcons.map((item, idx) => (
                        <div key={idx} className='flex justify-center items-center flex-row mr-4 w-[26px] h-[26px] mb-4'>
                            <a href={item.link}><img src={item.icon} alt={item.name} /></a>
                        </div>
                    ))}
                </div>
            </div>

            <div className='font-body flex justify-center items-center flex-col text-sm lg:text-lg'>
                <p >@2022 NSE Advertising</p>
                <p >ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Footer