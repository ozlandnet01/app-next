import React, {useEffect, useState } from 'react';
import NavigationLink from '@/components/NavigationLink';
import Image from 'next/image';
import { FaTwitter, FaTiktok, FaInstagram, FaYoutube, FaBars } from 'react-icons/fa';

interface Props {
  toggleHandler?: () => void;
}

const Navbar = ({ toggleHandler} : Props) => {
  const [scrolled, setScrolled] = useState(false);

  const onWindowScroll = () => {
    setScrolled(window.scrollY >= 80);
  }

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    }
  }, [])

  return (
    <nav className={`${scrolled ? 'text-white bg-black h-14 bg-opacity-50' : 'sm:bg-white sm:text-black h-24'} bg-transparent w-full fixed 
      flex justify-between items-center sm:px-10 px-5 transition duration-500 ease-linear z-10 text-white`}>
      <div className='sm:flex w-24 justify-center items-center sm:ml-10'> 
        <a>
          <Image className='w-36' src={`https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/image/logo/logo-purple.svg`} width={500} height={500} alt="My image"/>
        </a>
      </div>
      <div className="sm:hidden" onClick={toggleHandler}>
        <FaBars />
      </div>
      <div className="hidden sm:flex w-6/12">
        <ul className="flex w-full justify-around">
          <li>
            <NavigationLink
              to="home"
              label="Home"
            />
          </li>
          <li >
            <NavigationLink
              to="ticket"
              label="Ticket"
            />
          </li>          
          <li >
            <NavigationLink
              to="about"
              label="About"
            />
          </li>          
          <li >
            <NavigationLink
              to="test"
              label="Home"
            />
          </li>
        </ul>
      </div>
      <div className='sm:flex hidden justify-between w-32 items-center'> 
        <div><FaInstagram /></div>
        <div><FaTiktok /></div>
        <div><FaTwitter /></div>
        <div><FaYoutube /></div>
      </div>
    </nav>
  )
}

export default Navbar;
