import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import Contact from '../../components/Contact';

export default function About() {
  return (
    <div className='flex flex-col justify-center pt-36'>
        <div className={`flex h-full mb-8`}>
            <div className='w-full flex'>
                <div className='flex items-center justify-around sm:flex-row flex-col w-full '>
                    <div className='sodImage relative w-full h-80 sm:flex-1 sm:w-full'>
                        <Image src={'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/image/logo/logo-purple.svg'} fill alt='logo-purple' />
                    </div>
                    <div className='flex flex-col text-white sm:text-left text-center sm:flex-1 px-14'>
                        <div className='text-xl font-normal'>
                        Sounds of Downtown (SoD) are events that are organized by PT. Serikat Orang Dalam (SOD), Jakarta based company that focuses on music, entertainment, & lifestyle industry.We bring your favorite artist musicians, foods and experiences into one place. Our goal is to provide unforgettable experiences through events, activities and products that we crafted.We aim to be the world&#39;s most customer-centric lifestyle company. We always try to make people happy and fulfill their entertainment needs in the best way possible.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center flex-1'>
            <div className='flex w-full whole-4 flex-col text-white sm:flex-row'>
                <div className='first-row w-full justify-around flex flex-row my-3'>
                    <div className='first-item-first-row text-center'>
                        <div className='font-black text-7xl'>
                        06
                        </div>
                        <div className='sm:text-4xl text-2xl font-normal'>
                        Main event
                        </div>
                    </div>
                    <div className='second-item-first-row text-center'>
                        <div className='font-black text-7xl'>
                        200+
                        </div>
                        <div className='sm:text-4xl text-2xl font-normal'>
                        Partners
                        </div>
                    </div>
                </div>
                <div className='first-row w-full justify-around flex flex-row my-3'>
                    <div className='first-item-first-row text-center'>
                        <div className='font-black text-7xl'>
                        30+
                        </div>
                        <div className='sm:text-4xl text-2xl font-normal'>
                        Performers
                        </div>
                    </div>
                    <div className='second-item-first-row text-center'>
                        <div className='font-black text-7xl'>
                        500k
                        </div>
                        <div className='sm:text-4xl text-2xl font-normal'>
                        Tickets Sold
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`flex p-9 flex-col my-16`}>
            <div className='flex font-bold text-5xl text-white justify-center '>
                <span>
                    OUR VALUES
                </span>
            </div>
            <div>
            <div className='flex items-center justify-center flex-col sm:flex-row'>
                <div className='flex flex-col text-white text-left w-56 mx-16 mt-12 items-center'>
                    <div className='leading-10 text-2xl font-bold whitespace-nowrap text-orange-sod text-center'>
                        CUSTOMER ORIENTED
                    </div>
                    <div className='text-xl font-normal text-center'>
                        We are truly committed to make customers our top priority
                    </div>
                </div>
                <div className='flex flex-col text-white text-left w-56 mx-16 mt-12 items-center'>
                    <div className='leading-10 text-2xl font-bold whitespace-nowrap text-orange-sod text-center'>
                        IMPACTFUL
                    </div>
                    <div className='text-xl font-normal text-center'>
                        Creating mutually beneficial relations with every parties related with our ecosystem
                    </div>
                </div>
                <div className='flex flex-col text-white text-left w-56 mx-16 mt-12 items-center'>
                    <div className='leading-10 text-2xl font-bold w-fit whitespace-nowrap text-orange-sod text-center'>
                        CONTINOUS IMPROVEMENT
                    </div>
                    <div className='text-xl font-normal text-center'>
                        Always giving best efforts to improve our products, services, or processes.
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Contact />
        <div className='flex flex-col justify-center h-screen w-full'>
            <div className='relative w-full h-1/4'>
                <Image src={'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/image/logo/logo-purple.svg'} fill alt='purple logo'/>
            </div>
        </div>
    </div>
  )
}
