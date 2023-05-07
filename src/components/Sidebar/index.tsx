import { FaInstagram, FaTiktok, FaTimes, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import NavigationLink from "../NavigationLink";
import styles from './Sidebar.module.scss';
import SocialMediaBar from "../SocialMediaBar";
import { useRouter } from "next/router";

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
