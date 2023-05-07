import Image from "next/image";
import { useRouter } from "next/router";
import SocialMediaBar from "../SocialMediaBar";

const Footer = () => {
    const router = useRouter();

    return (
      <div className="relative h-96 bg-orange-sod flex justify-between sm:flex-row flex-col sm:px-36 w-full">
        <div className="relative w-96">
            <Image src={'https://raw.githubusercontent.com/ozlandnet01/app-next/main/public/image/logo/logo-purple.svg'} fill alt='logo-purple' />
        </div>
        <div className='contact-info flex flex-col sm:justify-center items-center text-center sm:text-left sm:items-start'>
            <div className='email-contact'>
                <div className='font-bold text-3xl'>EMAIL</div>
                <div className="text-2xl">sod@sodfestival.com</div>
            </div>
            <div className='get-update'>
                <div className='font-bold text-xl'>GET UPDATED</div>
                <SocialMediaBar classNames="flex"/>
            </div>
        </div>
        <div className="sm:absolute sm:bottom-3 sm:right-24 sm:w-fit w-full text-center relative font-bold text-xl">
            <span>PT. Serikat Orang Dalam © All Rights Reserved</span>
        </div>
      </div>
    )
  }

export default Footer;
