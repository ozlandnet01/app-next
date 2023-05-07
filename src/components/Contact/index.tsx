import Image from "next/image";
import { useRouter } from "next/router";
import SocialMediaBar from "../SocialMediaBar";
import styles from "./Contact.module.scss";

const Footer = () => {
    const router = useRouter();

    return (
        <div className={`flex sm:h-[32em] sm:mb-16 h-96 `}>
            <div className={`flex flex-1 flex-col bg-orange-sod text-white h-full w-full md:w-2/5 px-9 py-16 relative`}>
                <div className={`${styles.spicyRiceShadow} text-7xl font-normal tracking-tighter whitespace-break-spaces w-4`}>CONTACT US</div>
                <div className='contact-info absolute bottom-12 left-12 '>
                    <div className='email-contact sm:mb-6'>
                        <div className='font-bold text-3xl text-black'>EMAIL</div>
                        <div className='text-xl text-black'>sod@sodfestival.com</div>
                    </div>
                    <div className='get-update'>
                    <div className='font-bold text-2xl text-black sm:mb-3'>GET UPDATED</div>
                        <SocialMediaBar classNames='flex justify-between w-48 items-center text-black'/>
                    </div>
                </div>
            </div>
            <div className="md:w-full md:block hidden flex-[2]">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/MqMk6GsGeFI"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    )
  }

export default Footer;
