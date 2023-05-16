import React, {useContext, useEffect, useState} from 'react';
import styles from './Event.module.scss';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function event() {
    const pastEvents : any = [
        {
            title: 'SOD VOL 1',
            highlight_url: 'https://youtu.be/t7_RI8c3cBw',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/poster/sod1.webp'
        },
        {
            title: 'SOD VOL 2',
            highlight_url: 'https://youtu.be/yXkBWmAYe0Y',
            highlight_gallery: 'https://drive.google.com/drive/folders/1D5ZGs1nECKr1t14qXGdU97Vy31Jkbwct?usp=share_link',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/poster/sod2.webp'
        },
        {
            title: 'SOD VOL 3',
            highlight_url: 'https://youtu.be/LO-1WhJDNKg',
            highlight_gallery: 'https://drive.google.com/drive/folders/1D5ZGs1nECKr1t14qXGdU97Vy31Jkbwct?usp=share_link',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/poster/sod3.webp'
        },
        {
            title: 'SOD VOL 4',
            highlight_url: 'https://youtu.be/R7u11joIqx4',
            highlight_gallery: 'https://drive.google.com/drive/folders/1D5ZGs1nECKr1t14qXGdU97Vy31Jkbwct?usp=share_link',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/poster/sod4.webp'
        },   
        {
            title: 'MISELIA',
            highlight_gallery: 'https://drive.google.com/drive/folders/12t2uaGS0y_Rq51WcBQaQkTwXnFa098Ye?usp=share_link',
            poster_url: 'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/poster/miselia.webp'
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
                        <div key={idx} className='past-event flex items-center justify-around px-24 mt-24'> 
                            <div className='detail-event flex flex-col flex-1 mr-6'>
                                <h3 className='font-bold text-4xl mb-5 text-white'>{event.title}</h3>
                                <div className='event-buttons mt-4 flex'>
                                    {(event.highlight_url)  && <div onClick={() => window.open(event.highlight_url)} className='flex items-center cursor-pointer justify-around bg-orange-sod mx-2 text-lg font-bold w-40'><a>HIGHLIGHTS</a> <FaArrowRight />
                                    </div>}
                                    {(event.highlight_gallery)  && <div onClick={() => window.open(event.highlight_gallery)} className='flex items-center cursor-pointer justify-around bg-orange-sod mx-2 text-lg font-bold whitespace-nowrap w-56'><a>AUDIENCE GALLERY</a><FaArrowRight />
                                    </div>}
                                </div>
                            </div>
                            <div className='event-poster h-[36rem] relative flex-1 p-10'>
                                <img src={event.poster_url} alt={event.title} />
                            </div>
                        </div>)
                    }else{
                        return (
                        <div key={idx} className='past-event flex items-center justify-around px-24 mt-24'> 
                            <div className='event-poster h-[36rem] relative flex-1 mr-6'>
                                <img src={event.poster_url} alt={event.title} />
                            </div>
                            <div className='detail-event flex flex-col flex-1'>
                                <h3 className='font-bold text-4xl mb-5 text-white'>{event.title}</h3>
                                <div className='event-buttons mt-4 flex'>
                                    {(event.highlight_url)  && <div onClick={() => window.open(event.highlight_url)} className='flex items-center cursor-pointer justify-around bg-orange-sod mx-2 text-lg font-bold w-40'><a>HIGHLIGHTS</a> <FaArrowRight />
                                    </div>}
                                    {(event.highlight_gallery)  && <div onClick={() => window.open(event.highlight_gallery)} className='flex items-center cursor-pointer justify-around bg-orange-sod mx-2 text-lg font-bold whitespace-nowrap w-56'><a>AUDIENCE GALLERY</a><FaArrowRight />
                                    </div>}
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
                        <img src={event.poster_url} alt={event.title} />
                    </div>
                    <div className='detail-event flex flex-col w-full'>
                        <h3 className='font-bold text-4xl mb-5 text-white'>{event.title}</h3>
                        <div className='font-bold text-xl text-white'>
                            {event.description}
                        </div>
                        <div className='event-buttons mt-4 flex'>
                            {(event.highlight_url)  && <div onClick={() => window.open(event.highlight_url)} className='flex items-center cursor-pointer justify-around bg-orange-sod rounded-sm text-lg font-bold w-40'><a>HIGHLIGHTS</a> <FaArrowRight /></div>}
                            {(event.highlight_gallery)  && <div onClick={() => window.open(event.highlight_gallery)} className='flex items-center cursor-pointer justify-around bg-orange-sod rounded-sm mx-2 text-lg font-bold whitespace-nowrap w-56'><a>AUDIENCE GALLERY</a><FaArrowRight /></div>}
                        </div>
                    </div>
                </div>)
            })}
            </div>
        </div>
    )
}
