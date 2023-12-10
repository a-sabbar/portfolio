'use client'
import Link from "next/link";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

export default function Body() {

    const scroll = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(scroll.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: "500px",
                scrub: 0.15,
            },
            opacity: 0,
            y: -100,
            
        });
        return () => {
            gsap.killTweensOf(scroll.current);
        }
    }, [])


    return (
        <div className="flex h-screen  justify-center p-24 w-screen bg-black  overflow-hidden cursor-default relative items-center">
            <div className="flex flex-col items-center justify-center gap-[20px] z-[1]">
                <a href={"/Achraf-Sabbar_Full-Stack.pdf"} download>
                    <Image src="/myImage.jpg" alt="" width={200} height={200} className="rounded-full w-48 h-48 x:max-sm:w-44 x:max-sm:h-44 object-cover outline outline-white outline-[2px]" />
                </a>
                <>
                    <div className="text-white text-center text-[35px] x:max-sm:text-[27px] font-[400] poppins tracking-wide">
                        Achraf Sabbar
                    </div>
                    <div className="text-white text-[48px] font-[500] lato -mt-[25px] text-center  x:max-sm:text-[35px]">
                        Full-Stack Developer
                    </div>
                </>
                <motion.p className="text-white text-center text-[25px] font-[400] lusitana mt-[20px] opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {`- Let's collaborate and bring your vision to life!`}
                </motion.p>
            </div>
            <span className="absolute bottom-[150px] left-1/2 z-[1] x:max-sm:bottom-[95px] x:max-sm:hidden" ref={scroll}>
                <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0.333313C8.81849 0.336842 5.76829 1.60226 3.51862 3.85193C1.26895 6.1016 0.00352914 9.1518 0 12.3333V25.6666C0 28.8492 1.26428 31.9015 3.51472 34.1519C5.76515 36.4024 8.8174 37.6666 12 37.6666C15.1826 37.6666 18.2348 36.4024 20.4853 34.1519C22.7357 31.9015 24 28.8492 24 25.6666V12.3333C23.9965 9.1518 22.7311 6.1016 20.4814 3.85193C18.2317 1.60226 15.1815 0.336842 12 0.333313ZM21.3333 25.6666C21.3333 28.142 20.35 30.516 18.5997 32.2663C16.8493 34.0166 14.4754 35 12 35C9.52465 35 7.15068 34.0166 5.40034 32.2663C3.65 30.516 2.66667 28.142 2.66667 25.6666V12.3333C2.66667 9.85796 3.65 7.48399 5.40034 5.73365C7.15068 3.98331 9.52465 2.99998 12 2.99998C14.4754 2.99998 16.8493 3.98331 18.5997 5.73365C20.35 7.48399 21.3333 9.85796 21.3333 12.3333V25.6666Z" fill="white" />
                    <path d="M12 8.33331C11.6463 8.33331 11.3072 8.47379 11.0572 8.72384C10.8071 8.97389 10.6666 9.31302 10.6666 9.66665V15C10.6666 15.3536 10.8071 15.6927 11.0572 15.9428C11.3072 16.1928 11.6463 16.3333 12 16.3333C12.3536 16.3333 12.6927 16.1928 12.9428 15.9428C13.1928 15.6927 13.3333 15.3536 13.3333 15V9.66665C13.3333 9.31302 13.1928 8.97389 12.9428 8.72384C12.6927 8.47379 12.3536 8.33331 12 8.33331Z" fill="white" />
                </svg>
            </span>
        </div>
    );
}