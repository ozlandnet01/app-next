import React, {useContext, useEffect, useState} from 'react';
import styles from './Event.module.scss';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function event() {
    const pastEvents : any = [
        {
            title: 'SOD VOL 1',
            description: 'Sounds of Downtown (SoD) are events that are organized by PT. Serikat Orang Dalam (SOD), Jakarta based company that focuses on music, entertainment, & lifestyle industry.We bring your favorite artist musicians, foods and experiences into one place. Our goal is to provide unforgettable experiences through events, activities and products that we crafted.We aim to be the world&#39;s most customer-centric lifestyle company. We always try to make people happy and fulfill their entertainment needs in the best way possible.',
            highlight_url: 'https://www.youtube.com/watch?v=iv_P7v7lWPs',
            highlight_gallery: 'https://www.youtube.com/watch?v=iv_P7v7lWPs',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/7434f22cef4cd6c7d11ffacc3684fbd59e3ce490/public/image/Poster/poster-sod1.svg'
        },
        {
            title: 'SOD VOL 2',
            description: 'Sounds of Downtown (SoD) are events that are organized by PT. Serikat Orang Dalam (SOD), Jakarta based company that focuses on music, entertainment, & lifestyle industry.We bring your favorite artist musicians, foods and experiences into one place. Our goal is to provide unforgettable experiences through events, activities and products that we crafted.We aim to be the world&#39;s most customer-centric lifestyle company. We always try to make people happy and fulfill their entertainment needs in the best way possible.',
            highlight_url: 'https://www.youtube.com/watch?v=iv_P7v7lWPs',
            highlight_gallery: 'https://www.youtube.com/watch?v=iv_P7v7lWPs',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/7434f22cef4cd6c7d11ffacc3684fbd59e3ce490/public/image/Poster/poster-sod1.svg'
        },
        {
            title: 'SOD VOL 3',
            description: 'Sounds of Downtown (SoD) are events that are organized by PT. Serikat Orang Dalam (SOD), Jakarta based company that focuses on music, entertainment, & lifestyle industry.We bring your favorite artist musicians, foods and experiences into one place. Our goal is to provide unforgettable experiences through events, activities and products that we crafted.We aim to be the world&#39;s most customer-centric lifestyle company. We always try to make people happy and fulfill their entertainment needs in the best way possible.',
            highlight_url: 'https://www.youtube.com/watch?v=iv_P7v7lWPs',
            highlight_gallery: 'https://www.youtube.com/watch?v=iv_P7v7lWPs',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/7434f22cef4cd6c7d11ffacc3684fbd59e3ce490/public/image/Poster/poster-sod1.svg'
        }
    ];



    return (
        <div className='py-24 h-fit'>
            <div className='flex flex-row items-center'>
                <div className='w-28 h-5 bg-[#33A9AC] border-black border' style={{border: '4px solid #000000', borderLeft: 0}}>
                </div>
                <span className={`${styles.spicyRiceShadow} text-6xl font-normal tracking-tighter ml-4 text-white`}>
                    PAST EVENTS
                </span>
                <div className='w-11/12 h-5 bg-[#33A9AC] border-black border' style={{border: '4px solid #000000', borderRight: 0}}>
                </div>
            </div>
            <div className='events sm:flex hidden flex-col'>
                {pastEvents.map((event: any, idx: number) => {
                    if(idx % 2 === 0){
                        return (
                        <div key={idx} className='past-event flex items-center justify-around px-14 mt-24'> 
                            <div className='detail-event flex flex-col flex-1 mr-6'>
                                <h3 className='font-bold text-4xl mb-5 text-white'>{event.title}</h3>
                                <div className='font-bold text-xl text-white'>
                                    {event.description}
                                </div>
                                <div className='event-buttons mt-4 flex'>
                                    <div className='flex items-center justify-around bg-orange-sod mx-2 text-lg font-bold w-40'><span>HIGHLIGHTS</span> <FaArrowRight />
                                    </div>
                                    <div className='flex items-center justify-around bg-orange-sod mx-2 text-lg font-bold whitespace-nowrap w-56'><span>AUDIENCE GALLERY</span><FaArrowRight />
                                    </div>
                                </div>
                            </div>
                            <div className='event-poster h-[36rem] relative flex-1 p-10'>
                                <Image src={event.poster_url} fill alt='logo-purple' />
                            </div>
                        </div>)
                    }else{
                        return (
                        <div key={idx} className='past-event flex items-center justify-around px-14 mt-24'> 
                            <div className='event-poster h-[36rem] relative flex-1 mr-6'>
                                <Image src={event.poster_url} fill alt='logo-purple' />
                            </div>
                            <div className='detail-event flex flex-col flex-1'>
                                <h3 className='font-bold text-4xl mb-5 text-white'>{event.title}</h3>
                                <div className='font-bold text-xl text-white'>
                                    {event.description}
                                </div>
                                <div className='event-buttons mt-4 flex'>
                                    <div className='flex items-center justify-around bg-orange-sod mx-2 text-lg font-bold w-40'><span>HIGHLIGHTS</span> <FaArrowRight /></div>
                                    <div className='flex items-center justify-around bg-orange-sod mx-2 text-lg font-bold whitespace-nowrap w-56'><span>AUDIENCE GALLERY</span><FaArrowRight /></div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                })}
            </div>
            <div className='eventMobile sm:hidden flex flex-col'>
            {pastEvents.map((event: any, idx: number) => {
               return (<div key={idx} className='past-event flex flex-col items-center justify-around px-12 mt-24'> 
                    <div className='event-poster h-[36rem] relative mr-6 w-full'>
                        <Image src={event.poster_url} fill alt='logo-purple' />
                    </div>
                    <div className='detail-event flex flex-col w-full'>
                        <h3 className='font-bold text-4xl mb-5 text-white'>{event.title}</h3>
                        <div className='font-bold text-xl text-white'>
                            {event.description}
                        </div>
                        <div className='event-buttons mt-4 flex'>
                            <div className='flex items-center justify-around bg-orange-sod rounded-sm text-lg font-bold w-40'><span>HIGHLIGHTS</span> <FaArrowRight /></div>
                            <div className='flex items-center justify-around bg-orange-sod rounded-sm mx-2 text-lg font-bold whitespace-nowrap w-56'><span>AUDIENCE GALLERY</span><FaArrowRight /></div>
                        </div>
                    </div>
                </div>)
            })}
            </div>
        </div>
    )
}
