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
        <div className='flex h-1/4 flex-col justify-between items-center' style={{width: 488}}>
        <div className='image'>
            <Image src={`/logo/white.png`} width={360} height={148} alt="My image"/>
        </div>
        <div className='bg-white w-full mt-11 px-5' style={{minHeight: 160}}>
            <div className={`${styles.countdown} flex w-full  justify-around text-center`} style={{minHeight: 160}}>
            <div className='month w-40'>
                <div className={styles.numbers}>
                {hours.toString().length == 1 ?  '0'+ hours.toString() : hours}
                </div>
                <div className={styles.words}>
                Hours
                </div>
            </div>
            <div className={`${styles.separator} min-w-fit`}>
                <span>:</span>
            </div>
            <div className='week w-40'>
                <div className={styles.numbers}>
                {minutes.toString().length == 1 ?  '0'+ minutes.toString() : minutes}
                </div>
                <div className={styles.words}>
                Minutes
                </div>
            </div>
            <div className={`${styles.separator} min-w-fit`}>
                <span>:</span>
            </div>
            <div className='day w-40'>
                <div className={styles.numbers}>
                {seconds.toString().length == 1 ?  '0'+ seconds.toString() : seconds}
                </div>
                <div className={styles.words}>
                Seconds
                </div>
            </div>              
            </div>
        </div>
        </div>
  </div>
  )
}
