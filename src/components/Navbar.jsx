import React, { useEffect, useState } from 'react'
import logo from '../nseLOGO.png';
import { BiMenuAltRight } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    }, []);




    return (
        <div className={scrolled ? " glass-container fixed w-full z-[10] sm:px-16 px-6 shadow-lg shadow-slate-300 transition ease-in flex justify-between items-center py-4 h-[100px]" : 'bg-white fixed w-full z-[10] sm:px-16 px-6 shadow-none transition ease-in flex justify-between items-center py-4'}>
            <div><a href="#WhyUs" className='md:flex hidden font-body font-normal leading-[22px] cursor-pointer text-[16px] text-primary hover:text-[#969BA5]'>Why Us</a></div>
            <div><a href="#OurServices" className='md:flex hidden font-body font-normal leading-[22px] cursor-pointer text-[16px] text-primary hover:text-[#969BA5]'>Our Services</a></div>
            <div><a href='#Home'><img src={logo} alt='nseLogo' className='w-[100px]  md:w-[130px]' /></a></div>
            <div><a href="#OurTeam" className='md:flex hidden font-body font-normal leading-[22px] cursor-pointer text-[16px] text-primary hover:text-[#969BA5]'>Our Team</a></div>
            <div><a href="#ContactUs" className='md:flex hidden font-body font-normal leading-[22px] cursor-pointer text-[16px] text-primary hover:text-[#969BA5]'>Contact Us</a></div>
            {/* <a href="#Blog">Blog</a> */}
            <div className='md:hidden flex justify-center items-center relative'>
                <div className='relative mt-2 w-10'>
                    {toggleMenu ? <GrClose className='w-[30px] h-[30px]' onClick={() => setToggleMenu(false)} /> : <BiMenuAltRight className='w-[30px] h-[30px]' onClick={() => setToggleMenu(true)}/>}
                </div>
                {toggleMenu && (  
                    <div className='animation-menu fixed top-[120px] left-0 right-0 bottom-0 z-20 bg-white shadow-lg shadow-sky-200 flex flex-col p-6' style={{ opacity: '1'}}>
                        <div className='flex justify-start items-start flex-col w-full mt-10'>
                            <a className='font-body font-semiboldxs:text-[20px] xs:leading-[26px] text-[20.89px] leading-[20.89px] text-primary' href="#WhyUs">Why Us</a>
                            <a className='font-body font-semiboldxs:text-[20px] xs:leading-[26px] text-[20.89px] leading-[20.89px] text-primary mt-10' href="#OurServices">Our Services</a>
                            <a className='font-body font-semiboldxs:text-[20px] xs:leading-[26px] text-[20.89px] leading-[20.89px] text-primary mt-10' href="#OurTeam">Our Team</a>
                            <a className='font-body font-semiboldxs:text-[20px] xs:leading-[26px] text-[20.89px] leading-[20.89px] text-primary mt-10' href="#ContactUs">Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar