'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Inter } from 'next/font/google'
import Link from "next/link";

const interFont = Inter({ subsets: ['latin'] });

export default function Project({data} = Props) {
    const bodyRef = useRef(null);
    const [onHover, setOnHover] = useState({
        y: "-100%",
    });
    const handleMouseEnter = (e) => {   
        setOnHover({
            y: 0 
        });

    }
    const handleMouseLeave = (e) => {
        setOnHover({
            y: e.clientY - e.target.getBoundingClientRect().top > 0 ? 50 : -50
        });
    }

    const handleClick = (e) => {
        const projectsBodys = document.querySelectorAll(".projectBody");
        projectsBodys.forEach((body) => {
            if(body !== bodyRef.current){
                body.classList.remove("!h-auto");
            }
        }
        ); 
        bodyRef.current.classList.toggle("!h-auto");

       if(bodyRef.current.classList.contains("!h-auto")){
            setTimeout(() => {
                window.scrollTo({
                    top: bodyRef.current.getBoundingClientRect().bottom + window.scrollY ,
                    behavior: "smooth"
                });
            }, 200);
        }


    }


    return(
        <div className={"flex flex-col relative overflow-hidden   duration-500" + interFont.className}>
            <div className="w-full grid grid-cols-3 gap-24 border-t-[1px] border-white py-[5px] font-[500] text-white hover:text-black duration-1000   overflow-hidden hover:px-[5px] relative cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                >
                <motion.div className="w-full h-full absolute top-0 left-0 z-[0] bg-white  x:max-sm:hidden" animate={{
                    y: onHover.y,
                    height: 50,
                    transition: {
                        duration: 0.3
                    }
                }}/>
                <p className="x:max-sm:text-sm cursor-pointer z-[1]">{data.title}</p>
                <p className="x:max-sm:text-sm cursor-pointer z-[1]">{data.Category}</p>
                <p className="x:max-sm:text-sm cursor-pointer z-[1]">{data.year}</p>

            </div>
            <div className="projectBody flex flex-col gap-6 z-[1] top-[35px] duration-500 h-[0] w-full pt-[16px] "
            ref={bodyRef}
            >
                <p className="text-white font-semibold text-3xl w-2/3 x:max-sm:w-full x:max-sm:text-xl">
                    {data.description}
                </p>
                <div className="list-disc text-white pl-[20px] text-base font-medium ">
                    {data.technologies.map((tech) => (
                        <li key={tech} className="x:max-sm:text-sm">
                            {tech}
                        </li>
                    ))}
                </div>
                <div className="grid grid-cols-3 gap-6 z-[1] pb-[50px] x:max-sm:grid-cols-1 x:max-sm:px-[20px]">
                    {
                        data.image.map((img, index) => (
                            <Link href={index == 0 ? data.github : data.link} key={img} target="_blank">
                                <Image
                                    src={img}
                                    width={1920}
                                    height={1080}
                                    alt=""
                                    className="mb-auto"
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}