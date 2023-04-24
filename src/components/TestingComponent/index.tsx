import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './TestingComponent.module.scss';

interface Props {
    scrollPositions: {
        x: number;
        y: number;
      };
    children: ReactNode;
  }

const TestingComponent : React.FC<Props> = ({scrollPositions, children}) => {
    const [isShow, setShow] = useState(false);

    const divRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if( divRef.current){
            if(scrollPositions.y + window.innerHeight >= divRef.current.offsetTop){
                setShow(true);
            }else{
                setShow(false);
            }
        }
    };

    useEffect(() => {
        if( divRef.current){
            handleScroll();
        }
    }, [])

    
    useEffect(() => {
        handleScroll()
    }, [scrollPositions])


  
  return (
    <div ref={divRef} className={`min-h-screen bg-transparent ${styles.transition} + 
                                ${isShow ? styles.animate: styles.box}`} >
      {children}
    </div>
  )
}

export default TestingComponent;
