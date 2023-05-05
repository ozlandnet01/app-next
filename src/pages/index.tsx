import { Inter } from 'next/font/google'
import useScrollPosition from '@/hooks/ScrollPositions';
import styles from './index.module.scss'
import Navbar from './sections/NavBar';
import Home from './sections/Home';
import Ticket from './sections/Ticket';
import Image from 'next/image';
import TestingComponent from '@/components/TestingComponent';
import { CountdownProvider } from '../context/CountdownContext';
import Head from 'next/head';
import { FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  const ScrollPositions = useScrollPosition();

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <CountdownProvider>
        <main className={`${styles.container} min-h-screen flex-col items-center justify-between overflow-hidden`}>
          <Navbar />
          <TestingComponent scrollPositions={ScrollPositions}>
            <Home />
          </TestingComponent>
          <TestingComponent scrollPositions={ScrollPositions}>
            <Ticket />
          </TestingComponent>
          <div id='about'>
            <TestingComponent scrollPositions={ScrollPositions}>
              <div className={`flex`} style={{height: '60vh'}}>
                <div className={`flex flex-col items-center bg-orange-400 text-white justify-start h-full w-2/5 p-9 relative`}>
                  <div className={`${styles.spicyRiceShadow} text-7xl font-normal tracking-tighter`}>CONTACT US</div>
                  <div className='contact-info absolute bottom-12 left-12'>
                    <div className='email-contact'>
                      <div className='font-bold text-xl'>EMAIL</div>
                      <div>sod@sodfestival.com</div>
                    </div>
                    <div className='get-update'>
                      <div className='font-bold text-xl'>GET UPDATED</div>
                      <div className='flex justify-between w-32 items-center'> 
                        <div><FaInstagram /></div>
                        <div><FaTiktok /></div>
                        <div><FaTwitter /></div>
                        <div><FaYoutube /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full">
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
                <div className={`${styles.carousel} absolute -z-10 top-36`}></div>
                <div className={`${styles.rainbow} absolute -z-20 top-0`}></div>
                <div className={`${styles.hallOfFame} absolute z-10`}></div>
              </div>
            </TestingComponent>
          </div>
          <TestingComponent scrollPositions={ScrollPositions}>
              <div className={`flex h-screen p-9`}>
                <div className='w-full flex'>
                  <div className='flex items-center justify-center flex-1'>
                    <div className='flex flex-col text-white text-right'>
                      <div className='leading-10 text-4xl font-bold'>
                        SOUNDS OF DOWNTOWN
                      </div>
                      <div className='text-xl font-normal'>
                      Sounds of Downtown (SoD) are events that are organized by PT. Serikat Orang Dalam (SOD), Jakarta based company that focuses on music, entertainment, & lifestyle industry.We bring your favorite artist musicians, foods and experiences into one place. Our goal is to provide unforgettable experiences through events, activities and products that we crafted.We aim to be the world&apos;s most customer-centric lifestyle company. We always try to make people happy and fulfill their entertainment needs in the best way possible.
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-center flex-1'>
                    <div className='flex w-full whole-4 flex-col text-white'>
                      <div className='first-row w-full justify-around flex flex-row px-32 my-3'>
                        <div className='first-item-first-row text-center'>
                          <div className='font-black text-8xl'>
                            06
                          </div>
                          <div className='text-4xl font-normal'>
                            Main event
                          </div>
                        </div>
                        <div className='second-item-first-row text-center'>
                          <div className='font-black text-8xl'>
                            200+
                          </div>
                          <div className='text-4xl font-normal'>
                            Partners
                          </div>
                        </div>
                      </div>
                      <div className='second-row w-full justify-around flex flex-row px-32 my-3'>
                        <div className='first-item-first-row text-center'>
                          <div className='font-black text-8xl'>
                            30+
                          </div>
                          <div className='text-4xl font-normal'>
                            Performers
                          </div>
                        </div>
                        <div className='second-item-first-row text-center'>
                          <div className='font-black text-8xl'>
                            500k+
                          </div>
                          <div className='text-4xl font-normal'>
                            Tickets Sold
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </TestingComponent>
          <TestingComponent scrollPositions={ScrollPositions}>
            <div className={`flex p-9 h-screen flex-col`}>
              <div className='flex font-bold text-4xl text-white justify-center mb-40'>
                <span>
                  OUR VALUES
                </span>
              </div>
              <div>
                <div className='flex items-center justify-center'>
                  <div className='flex flex-col text-white text-left w-56 mx-16'>
                    <div className='leading-10 text-2xl font-bold whitespace-nowrap'>
                      CUSTOMER ORIENTED
                    </div>
                    <div className='text-xl font-normal'>
                      We are truly committed to make customers our top priority
                    </div>
                  </div>
                  <div className='flex flex-col text-white text-left w-56 mx-16'>
                    <div className='leading-10 text-2xl font-bold whitespace-nowrap'>
                      IMPACTFUL
                    </div>
                    <div className='text-xl font-normal'>
                      Creating mutually beneficial relations with every parties related with our ecosystem
                    </div>
                  </div>
                  <div className='flex flex-col text-white text-left w-56 mx-16'>
                    <div className='leading-10 text-2xl font-bold whitespace-nowrap'>
                      CONTINOUS IMPROVEMENT
                    </div>
                    <div className='text-xl font-normal'>
                      Always giving best efforts to improve our products, services, or processes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TestingComponent>  
          <TestingComponent scrollPositions={ScrollPositions}>
            <div className={`flex p-9 h-screen flex-col`}>
              <div className='flex font-bold text-4xl text-white justify-center'>
                <span>
                  OUR SERVICES
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <div className={`flex text-white flex-1 w-8/12 justify-center pt-20`}>
                  <div className='w-72 bg-white h-48 text-black mx-5'>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      Day 1 Ticket
                    </div>
                    <div className={`h-4/6 flex flex-col justify-center items-center`} style={{background: '#878787'}}>
                      <div className='text-2xl leading-7'>
                        05 August 2023
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <div className='whitespace-break-spaces text-xl w-min leading-5 font-normal'>
                          START FROM
                        </div>
                        <div className='font-bold text-5xl'>
                          149K
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      BUT TICKETS
                    </div>
                  </div>
                  <div className='w-72 bg-white h-48 text-black mx-5'>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      Day 1 Ticket
                    </div>
                    <div className={`h-4/6 flex flex-col justify-center items-center`} style={{background: '#878787'}}>
                      <div className='text-2xl leading-7'>
                        05 August 2023
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <div className='whitespace-break-spaces text-xl w-min leading-5 font-normal'>
                          START FROM
                        </div>
                        <div className='font-bold text-5xl'>
                          149K
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      BUT TICKETS
                    </div>
                  </div>
                  <div className='w-72 bg-white h-48 text-black mx-5'>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      Day 1 Ticket
                    </div>
                    <div className={`h-4/6 flex flex-col justify-center items-center`} style={{background: '#878787'}}>
                      <div className='text-2xl leading-7'>
                        05 August 2023
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <div className='whitespace-break-spaces text-xl w-min leading-5 font-normal'>
                          START FROM
                        </div>
                        <div className='font-bold text-5xl'>
                          149K
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      BUT TICKETS
                    </div>
                  </div>
                </div>
                <div className={`flex text-white flex-1 w-8/12 justify-center pt-20`}>
                  <div className='w-72 bg-white h-48 text-black mx-5'>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      Day 1 Ticket
                    </div>
                    <div className={`h-4/6 flex flex-col justify-center items-center`} style={{background: '#878787'}}>
                      <div className='text-2xl leading-7'>
                        05 August 2023
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <div className='whitespace-break-spaces text-xl w-min leading-5 font-normal'>
                          START FROM
                        </div>
                        <div className='font-bold text-5xl'>
                          149K
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      BUT TICKETS
                    </div>
                  </div>
                  <div className='w-72 bg-white h-48 text-black mx-5'>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      Day 1 Ticket
                    </div>
                    <div className={`h-4/6 flex flex-col justify-center items-center`} style={{background: '#878787'}}>
                      <div className='text-2xl leading-7'>
                        05 August 2023
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <div className='whitespace-break-spaces text-xl w-min leading-5 font-normal'>
                          START FROM
                        </div>
                        <div className='font-bold text-5xl'>
                          149K
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      BUT TICKETS
                    </div>
                  </div>
                  <div className='w-72 bg-white h-48 text-black mx-5'>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      Day 1 Ticket
                    </div>
                    <div className={`h-4/6 flex flex-col justify-center items-center`} style={{background: '#878787'}}>
                      <div className='text-2xl leading-7'>
                        05 August 2023
                      </div>
                      <div className='flex flex-row items-center mt-3'>
                        <div className='whitespace-break-spaces text-xl w-min leading-5 font-normal'>
                          START FROM
                        </div>
                        <div className='font-bold text-5xl'>
                          149K
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center bg-white h-1/4 text-center text-2xl font-bold'>
                      BUT TICKETS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TestingComponent>  
        </main>
      </CountdownProvider>
    </>
  )
}
