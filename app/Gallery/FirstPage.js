'use client'

import React from "react"
import {
    useState,
    useEffect,
    useRef
} from "react"
import {motion} from "framer-motion"
import { Poppins } from "next/font/google"
import Image from 'next/image'

const PoppinsFont = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})

function Gallery ({cover, title, description, index}) {
    const videoRef = useRef(null)
    const galleryAnim = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: index * 0.2 + 0.3,
                ease: "easeInOut"
            }
        }

    }
    return (
        <motion.div className="w-[400px] flex flex-col gap-1" variants={galleryAnim} initial="initial" animate="animate"
            onMouseEnter={() => {
                videoRef.current.play()
            }}
            onMouseLeave={(e) => {
                videoRef.current.pause()
                videoRef.current.currentTime = 0
            }}
        >
            <video className="w-full" muted 
            ref={videoRef}
            >
                <source src={cover} type="video/mp4"/>
            </video>


            <p className="text-[#ffffff] text-2xl font-bold">
                {title}
            </p>
            <p  className="text-[#98a1b6;] text-sm font-medium ">
                {description}
            </p>
        </motion.div>
    )
}

export default function FirstPage() {
    const titleAnim = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.9,
                ease: "easeInOut"
            }
        }
    }
    const projects = [
        {
            cover: "/videos/Project1.mp4",
            title: "Slide Project Gallery",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, veritatis distinctio molestias quidem esse eos fugiat modi nisi illum, et nesciunt ea dicta quia, autem vero deserunt commodi ipsum ipsa."
        },
        {
            cover: "/videos/Project2.mp4",
            title: "Clip Mask On Scroll",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, veritatis distinctio molestias quidem esse eos fugiat modi nisi illum, et nesciunt ea dicta quia, autem vero deserunt commodi ipsum ipsa."
        },
        {
            cover: "/videos/Project3.mp4",
            title: "Scroll Effect",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, veritatis distinctio molestias quidem esse eos fugiat modi nisi illum, et nesciunt ea dicta quia, autem vero deserunt commodi ipsum ipsa."
        },
        {
            cover: "/videos/Project4.mp4",
            title: "Svg Bezier Curve",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, veritatis distinctio molestias quidem esse eos fugiat modi nisi illum, et nesciunt ea dicta quia, autem vero deserunt commodi ipsum ipsa."
        },
        {
            cover: "/videos/Project5.mp4",
            title: "Text Effect",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, veritatis distinctio molestias quidem esse eos fugiat modi nisi illum, et nesciunt ea dicta quia, autem vero deserunt commodi ipsum ipsa."
        },
    ]
    return (
        <div className=" h-full flex flex-col j relative pt-[50px] " >
            <motion.p className={PoppinsFont.className + " text-white text-5xl font-extrabold"} variants={titleAnim} initial="initial" animate="animate">
                Project Gallery
            </motion.p>
            <div className="grid grid-cols-3 gap-6  px-[20px] pt-[50px]">
                {
                    projects.map((project, index) => (
                        <Gallery key={index} cover={project.cover} title={project.title} description={project.description} index={index}/>
                    ))
                
                }
            </div>
        </div>
    )
}