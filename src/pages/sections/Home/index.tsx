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
    <div id='home' className={`flex h-screen justify-center items-center`}>
        <div className='flex h-screen flex-col min-w-full'>
            <div className={`${styles.image} flex h-3/4 justify-center items-center`}>
                <Image src={`/image/logo/logo-black.svg`} width={480} height={148} alt="My image"/>
            </div>
            <div className={`${styles.banner} bg-white w-screen`} style={{minHeight: 215, minWidth: '100%'}}>           
            </div>
        </div>
  </div>
  )
}
