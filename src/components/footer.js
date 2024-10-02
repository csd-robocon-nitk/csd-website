import React from 'react'
import Image from 'next/image';
import LogoFooter from '../../public/logo-footer.png';
import Facebook from '../../public/assets/images/facebook.svg';
import Instagram from '../../public/assets/images/instagram.svg';
import Youtube from '../../public/assets/images/youtube.svg';
import LinkedIn from '../../public/assets/images/linkedin.svg';

const Footer = () => {
  return (
    <div className='footer bg-black flex items-center gap-16 justify-center py-10 h-[350px]'>
      
        <div className='flex flex-col items-center justify-center text-wrap'>
            <img src={LogoFooter.src} alt='logo' className='lg:h-24 h-16' />
            <p className='text-white text-xs text-wrap'>&copy; 2024 All Rights Reserved</p>
        </div>
        <div className='h-full w-[1px] bg-white'>

        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='xl:text-4xl lg:text-2xl text-xl text-white font-bold'>Social Media</h1>
            <ul className='flex flex-col gap-2'>
                <li><a href="https://www.instagram.com/csd_nitk/" className='flex items-center gap-3 lg:text-xl text-sm text-white'><Image src={Instagram} className='fill-current h-6 w-6' /><div>Instagram</div></a></li>
                <li><a href="https://www.youtube.com/channel/UCLj5czsa3vwEGO3zkox3cuA" className='flex items-center gap-3 lg:text-xl text-sm text-white'><Image src={Youtube} className='fill-current h-6 w-6' /><div>Youtube</div></a></li>
                <li><a href="https://www.facebook.com/csd.nitk/" className='flex items-center gap-3 lg:text-xl text-sm text-white'><Image src={LinkedIn} className='fill-current h-6 w-6' /><div>LinkedIn</div></a></li>
                {/*Linekdin Does not exist now ig */}
                <li><a href="https://www.linkedin.com/in/csd-nitk/" className='flex items-center gap-3 lg:text-xl text-sm text-white'><Image src={Facebook} className='fill-current h-6 w-6' /><div>Facebook</div></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;
