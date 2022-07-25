import React from 'react'
import logo from '../nseLOGO.png';

const Navbar = () => {


    return (
        <div className='w-full flex justify-between items-center py-2 px-[5rem]'>
            <div><a href="#WhyUs">Why Us</a></div>
            <div><a href="#OurServices">Our Services</a></div>
            <div><img src={logo} alt='nseLogo' className='w-[100px] md:w-[130px]' /></div>
            <div><a href="#OurTeam">Our Team</a></div>
            <div><a href="#ContactUs">Contact Us</a></div>
            {/* <a href="#Blog">Blog</a> */}
        </div>

    )
}

export default Navbar