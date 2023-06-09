import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import styles from './Home.module.scss';
import { CountdownContext } from '@/context/CountdownContext';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
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
    <div id='home' className={`flex h-screen justify-center items-center select-none`}>
        <div className='flex sm:h-full h-screen flex-col min-w-full'>
            <div className={`${styles.image} flex h-screen justify-center items-center`}>
                <Image src={`https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/image/logo/logo-black.svg`} width={480} height={148} alt="My image"/>
            </div>
        </div>
    </div>
  )
}
