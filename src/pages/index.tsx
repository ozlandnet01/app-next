import { Inter } from 'next/font/google'
import useScrollPosition from '@/hooks/ScrollPositions';
import styles from './index.module.scss'
import Navbar from '../components/NavBar';
import Home from './Home';
import Ticket from './Ticket';
import Image from 'next/image';
import TestingComponent from '@/components/TestingComponent';
import { CountdownProvider } from '../context/CountdownContext';
import Head from 'next/head';
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import Carousel from '@/components/Carousel';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import SocialMediaBar from '@/components/SocialMediaBar';

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  const ScrollPositions = useScrollPosition();
  const images = [
    "https://github.com/ozlandnet01/app-next/raw/main/public/image/slider/slider1.svg",
    "https://github.com/ozlandnet01/app-next/raw/main/public/image/slider/slider1.svg",
    "https://github.com/ozlandnet01/app-next/raw/main/public/image/slider/slider1.svg",
    "https://github.com/ozlandnet01/app-next/raw/main/public/image/slider/slider1.svg",
  ];

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <TestingComponent scrollPositions={ScrollPositions}>
        <Home />
      </TestingComponent>
      <TestingComponent scrollPositions={ScrollPositions}>
        <Ticket />
      </TestingComponent>
      <div>
        <TestingComponent scrollPositions={ScrollPositions}>
          <div className={`flex sm:h-[55em] h-96`}>
            <div className={`flex flex-col items-center bg-orange-sod text-white justify-start h-full w-full md:w-2/5 p-9 relative`}>
              <div className={`${styles.spicyRiceShadow} text-7xl font-normal tracking-tighter`}>CONTACT US</div>
              <div className='contact-info absolute bottom-12 left-12'>
                <div className='email-contact'>
                  <div className='font-bold text-3xl'>EMAIL</div>
                  <div className='text-xl'>sod@sodfestival.com</div>
                </div>
                <div className='get-update'>
                  <div className='font-bold text-2xl'>GET UPDATED</div>
                  <SocialMediaBar classNames='flex justify-between w-32 items-center' />
                </div>
              </div>
            </div>
            <div className="md:w-full md:block hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6OPwsqy06lM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </TestingComponent>
        <TestingComponent scrollPositions={ScrollPositions}>
          <div className={`h-screen relative z-0`}>
            <div className={`${styles.rainbow} absolute -z-20 top-0`}></div>
            <div className={`${styles.hallOfFame} absolute z-20`}></div>
            <div className="w-full mx-auto absolute h-full lg:top-32 top-36 bottom-0 my-2 z-10">
              <Carousel loop>
                {images.map((src, i) => {
                  return (
                    // 👇 style each individual slide.
                    // relative - needed since we use the fill prop from next/image component
                    // h-64 - arbitrary height
                    // flex[0_0_100%]
                    //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                    //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                    <div className="relative lg:h-[55em] h-128 flex-[0_0_100%] resize w-full" key={i}>
                      {/* use object-cover + fill since we don't know the height and width of the parent */}
                      <Image src={src} fill className="object-cover" alt="alt" />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </TestingComponent>
      </div> 
    </>
  )
}
