import { FaTimes } from "react-icons/fa";
import NavigationLink from "../NavigationLink";
import styles from './Sidebar.module.scss';
import SocialMediaBar from "../SocialMediaBar";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
    isOpen: boolean;
    toggleHandler?: () => void;
}

const Sidebar = ({ isOpen, toggleHandler }: Props) => {
    const router = useRouter();

    return (
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={`${styles.close}`} onClick={toggleHandler}>
          <FaTimes />
        </div>
        <div className="relative w-80 h-56">
          <Image src={'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/image/logo/logo-purple.svg'} fill alt='logo-purple' />
        </div>
        <div className={`${styles.sidebarNavigation}`}>
          <NavigationLink
             href='/'
             to="home"
             label="Home"
             clickHandler={() => {router.replace('/'); if(toggleHandler !== undefined) toggleHandler();}}
          />
          <NavigationLink
            href='/#ticket'
            to='ticket'
            label="Ticket"
            clickHandler={() => {router.replace('/#ticket'); if(toggleHandler !== undefined) toggleHandler();}}
          />
          <NavigationLink
            href='/About'
            to='about'
            label="About"
            clickHandler={() => {router.replace('/About'); if(toggleHandler !== undefined) toggleHandler();}}
          />
          <NavigationLink
            href='/Event'
            to='event'
            label="Past Events"
            clickHandler={() => {router.replace('/Event'); if(toggleHandler !== undefined) toggleHandler();}}
          />
          <SocialMediaBar classNames='flex justify-between w-32 items-center mt-11' />
        </div>
      </aside>
    )
  }

export default Sidebar;
