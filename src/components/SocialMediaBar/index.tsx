import { FaInstagram, FaTiktok, FaTimes, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";


interface Props {
    classNames?: string;
}

const SocialMediaBar = ({classNames} : Props)   => {
    return (
    <div className={`${classNames} justify-between w-40 items-center`}> 
        <div><FaInstagram onClick={() => {window.open('https://instagram.com/sodfestival?igshid=NTc4MTIwNjQ2YQ==')}} className="w-7 h-7 cursor-pointer"/></div>
        <div><FaTiktok onClick={() => {window.open('https://www.tiktok.com/@sodfestival?_t=8c7B4CnVOle&_r=1')}} className="w-7 h-7 cursor-pointer"/></div>
        <div><FaTwitter onClick={() => {window.open('https://twitter.com/sodfestival?s=21&t=KLf2POP_e5uImzVPbbePQQ')}} className="w-7 h-7 cursor-pointer"/></div>
        <div><FaYoutube onClick={() => {window.open('https://www.tiktok.com/@sodfestival?_t=8c7B4CnVOle&_r=1')}} className="w-7 h-7 cursor-pointer"/></div>
      </div>
    )
  }

export default SocialMediaBar;
