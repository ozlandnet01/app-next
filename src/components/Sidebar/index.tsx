import { FaInstagram, FaTiktok, FaTimes, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import NavigationLink from "../NavigationLink";
import styles from './Sidebar.module.scss';

interface Props {
    isOpen: boolean;
    toggleHandler?: () => void;
}

const Sidebar = ({ isOpen, toggleHandler }: Props) => {
    return (
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={`${styles.close}`} onClick={toggleHandler}>
          <FaTimes />
        </div>
        <div className={`${styles.sidebarNavigation}`}>
          <NavigationLink
            to="home"
            label="Home"
            clickHandler={toggleHandler}
          />
          <NavigationLink
            to="ticket"
            label="Ticket"
            clickHandler={toggleHandler}
          />
          <NavigationLink
            to="project"
            label="Projects"
            clickHandler={toggleHandler}
          />
          <NavigationLink
            to="technology"
            label="Technologies"
            clickHandler={toggleHandler}
          />
          <NavigationLink
            to="contact"
            label="Contact"
            clickHandler={toggleHandler}
          />
        <div className='flex justify-between w-32 items-center mt-11'> 
            <div><FaInstagram /></div>
            <div><FaTiktok /></div>
            <div><FaTwitter /></div>
            <div><FaYoutube /></div>
        </div>
        </div>
      </aside>
    )
  }

export default Sidebar;
