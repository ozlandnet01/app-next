import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import styles from './Ticket.module.scss';
import { CountdownContext } from '@/context/CountdownContext';

export default function Home() {
    const [months, setMonths] = useState(0);
    const [weeks, setWeeks] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const useCountdown = () => useContext(CountdownContext);
    const {timeDiff} = useCountdown();

  useEffect(() => {
    setMonths(timeDiff.timeDifference.months); 
    setWeeks(timeDiff.timeDifference.weeks); 
    setDays(timeDiff.timeDifference.days); 
    setHours(timeDiff.timeDifference.hours);
    setMinutes(timeDiff.timeDifference.minutes);
    setSeconds(timeDiff.timeDifference.seconds);
  }, [timeDiff])



  return (
    <div id='ticket' className={`flex h-screen mt-6`}>
      <div className='bg-transparent w-full h-screen px-5 flex flex-col' style={{minHeight: 160}}>
        <div className={`flex flex-col items-center text-white justify-start h-32`}>
          <span className={`${styles.spicyRiceShadow} text-7xl font-normal tracking-tighter`}>COUNTDOWN TO</span>
          <span className={`${styles.spicyRiceShadow} text-4xl tracking-tighter`}>SOUNDS OF DOWNTOWN Vol. 5</span>
        </div>
        <div className={`${styles.countdownStroke} text-white self-center border-text flex justify-around text-center items-center h-28 w-2/3 pb-8`} style={{backgroundColor: '#33A9AC', border: '4px solid #0C0C0C', borderRadius: 12}}>
          <div className='week w-40'>
            <div className={styles.numbers}>
              {weeks}
            </div>
            <div className={styles.words}>
              Weeks
            </div>
          </div>
          <div className={`${styles.separator} min-w-fit`}>
            <span>:</span>
          </div>
          <div className='day w-40'>
            <div className={styles.numbers}>
              {days}
            </div>
            <div className={styles.words}>
              Days
            </div>
          </div>
          <div className={`${styles.separator} min-w-fit`}>
            <span>:</span>
          </div>
          <div className='day w-40'>
            <div className={styles.numbers}>
              {hours}
            </div>
            <div className={styles.words}>
              Hours
            </div>
          </div>
          <div className={`${styles.separator} min-w-fit`}>
            <span>:</span>
          </div>
          <div className='day w-40'>
            <div className={styles.numbers}>
              {minutes}
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
              {seconds}
            </div>
            <div className={styles.words}>
              Seconds
            </div>
          </div>            
        </div>
        <div className={`${styles.spicyRiceShadow} self-center text-8xl text-orange-300 mt-44`}>BUY TICKETS</div>
        <div className={`flex text-white flex-1 min-w-full justify-around items-start pt-20 px-16`}>
          <div className='text-black mx-1 relative w-1/4 h-48'>
              <Image className='w-36' src={`/image/Ticket/ticket1.svg`} fill alt="My image"/>
          </div>
          <div className='text-black mx-1 relative w-1/4 h-48'>
              <Image className='w-36' src={`/image/Ticket/ticket2.svg`} fill alt="My image"/>
          </div>
          <div className='text-black mx-1 relative w-1/4 h-48'>
              <Image className='w-36' src={`/image/Ticket/ticket3.svg`} fill alt="My image"/>
          </div>
        </div>
      </div>
    </div>
  )
}
