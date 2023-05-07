import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import styles from './Home.module.scss';
import { CountdownContext } from '@/context/CountdownContext';

export default function Home() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(99999);
    const [minutes, setMinutes] = useState(99999);
    const [seconds, setSeconds] = useState(99999);
    const useCountdown = () => useContext(CountdownContext);
    const {timeDiff} = useCountdown();

  useEffect(() => {
    setDays(timeDiff.timeDifference.days); 
    setHours(timeDiff.timeDifference.hours);
    setMinutes(timeDiff.timeDifference.minutes);
    setSeconds(timeDiff.timeDifference.seconds);
  }, [timeDiff])



  return (
    <div id='home' className={`flex h-screen justify-center items-center sm:pt-24`}>
        <div className='flex sm:h-full h-screen flex-col min-w-full'>
            <div className={`${styles.image} flex sm:h-3/4 h-screen justify-center items-center`}>
                <Image src={`https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/image/logo/logo-black.svg`} width={480} height={148} alt="My image"/>
            </div>
            <div className={`${styles.banner} bg-white bg-right sm:block hidden`}>     
            </div>
            <div className={`${styles.bannerMobile} sm:hidden block h-screen`}>
            </div>
        </div>
    </div>
  )
}