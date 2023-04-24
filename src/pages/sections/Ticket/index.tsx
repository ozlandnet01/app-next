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
      <div className='bg-transparent w-full px-5 flex flex-col' style={{minHeight: 160}}>
        <div className={`text-white flex w-full justify-around text-center flex-1 items-center`} style={{minHeight: 160}}>
          <div className='month w-40'>
            <div className={styles.numbers}>
              {months}
            </div>
            <div className={styles.words}>
              Months
            </div>
          </div>
          <div className={`${styles.separator} min-w-fit`}>
            <span>:</span>
          </div>
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
        <div className={`flex flex-col items-center text-white justify-start h-32`}>
          <span className='text-4xl' style={{fontWeight: 700}}>GET THE TICKETS</span>
          <span className='text-9xl leading-10 mt-3' style={{fontWeight: 900}}>NOW</span>
        </div>
        <div className={`flex text-white flex-1 min-w-full justify-around items-start pt-20`}>
          <div className='w-72 bg-white h-48 text-black mx-1'>
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
          <div className='w-72 bg-white h-48 text-black mx-1'>
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
          <div className='w-72 bg-white h-48 text-black mx-1'>
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
  )
}
