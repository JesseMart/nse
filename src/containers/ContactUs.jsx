import { React, useState } from 'react'
import { client } from '../client';
import { socialIcons, servicesAvailable } from '../utils/constants';



const ContactUs = () => {
  const [serviceSelected, setServiceSelected] = useState(servicesAvailable[0].name);
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', services: '' });
  const { username, email, phone, company, message } = formData;

  const divInputStyle = 'bg-[#EDF2F8] rounded-lg cursor-pointer mt-3 ease-in-out w-full'
  const inputStyle = 'bg-[#EDF2F8] border-none rounded-lg font-body outline-0 p-3.5 w-[10rem]'


  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

  };

  const handleSend = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      services: serviceSelected,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setisFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  }




  return (


    <div id='' className='flex w justify-center items-center sm:p-16 xs:p-8 px-6 py-12 border-t '>
      <div className='flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col'>
        <h2 className='font-body text-primary font-bold md:text-[64px] md:leading-[70px] text-[40px] leading-[46px] text-center mb-10 transform-none'>
          Lorem Ipsum placeholder text!
        </h2>
        <p className='font-body font-light sm:w-[80%] w-[100%] text-center text-[#5B6478] mt-5 xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur asperiores reprehenderit. Excepturi commodi soluta quisquam ut eligendi aperiam, atque, id debitis sequi magni aliquam quod distinctio, vel ad doloribus.
        </p>
        {!isFormSubmitted ? (
          <div className='flex justify-center items-center flex-1 flex-col w-full mt-10 mx-8 md:w-full md:m-1'>
            <div className={divInputStyle}>
              <input id='name' type='text' className={inputStyle} placeholder='Enter Your Name Here' name="username" value={username} onChange={handleChangeInput} required />
            </div>
            <div className={divInputStyle}>
              <input id='email' type='email' className={inputStyle} placeholder='Enter Your Email Here' name="email" value={email} onChange={handleChangeInput} required />
            </div>
            <div className={divInputStyle}>
              <input id='phone' className={inputStyle} placeholder='Phone No.' type='tel' name='phone' value={phone} onChange={handleChangeInput} required />
            </div>
            <div className={divInputStyle}>
              <input id='company' type='text' className={inputStyle} placeholder='Company Name' name='company' value={company} onChange={handleChangeInput} />
            </div>
            <div className={divInputStyle}>
              <textarea className='bg-[#EDF2F8] border-none rounded-lg font-body outline-0 p-3.5 w-full' style={{ height: '170px' }} placeholder='Any info you need us to know before hand.' value={message} name='message' onChange={handleChangeInput} />
            </div>
            <div className={divInputStyle}>
              <select name="services" className='bg-[#EDF2F8] outline-0 border-2 border-gray-200 text-md capitalize rounded p-2 cursor-pointer w-full' id="services" onChange={(e) => setServiceSelected(e.target.value)}>
                {servicesAvailable.map((item) => (
                  <option
                    key={item.name}
                    value={item.name}
                    className='outline-none capitalize bg-white text-gray-200 text-md p-2 hover:bg-slate-300'
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button type='submit' className='mt-10 border-[#1465df] border-2 text-md font-medium font-body p-2 rounded w-28 lg:w-44 outline-none bg-white text-primary hover:text-white hover:bg-[#1465df]  ' onClick={handleSend}>{!loading ? 'Send' : 'Sending...'}</button>
          </div>

        ) : (
          <div className='mt-5'>
            <h3 className='font-body text-primary font-bold md:text-[64px] md:leading-[70px] text-[40px] leading-[46px] text-center mb-10 transform-none'>Lorem Ipsum! <br /> Lorem Ipsum Lorem Ipsum Lorem Ipsum</h3>
          </div>
        )}
        <div className=''>

          <div className='flex justify-start items-start flex-row mt-14'>
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
    </div>
  )
}

export default ContactUs