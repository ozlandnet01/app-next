import { FaInstagram, FaTiktok, FaTimes, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";


interface Props {
    classNames?: string;
}

const SocialMediaBar = ({classNames} : Props)   => {
    return (
    <div className={`${classNames} justify-between w-32 items-center`}> 
        <div><FaInstagram /></div>
        <div><FaTiktok /></div>
        <div><FaTwitter /></div>
        <div><FaYoutube /></div>
      </div>
    )
  }

export default SocialMediaBar;
