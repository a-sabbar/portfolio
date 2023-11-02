'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import {useState,} from 'react';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const anim = {

        initial: {width: 0, height:"auto"},
    
        open: {width: "auto", height:"auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    
        closed: {width: 0, height:"auto"}
    
}

export default function List({title1, title2, src} = Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='w-full flex justify-center items-center  gap-[15px] border-t-4 border-black cursor-pointer
        last-of-type:border-b-4 last-of-type:border-black py-1
        '
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        >
            <div className={'text-[5vw] font-[500] cursor-pointer 2xl:text-[77px] ' + inter.className}>
                {title1} </div>
            <motion.div
            variants={anim} animate={isActive ? "open" : "closed"}
            className='object-cover flex justify-center items-center w-0 overflow-hidden'
            >
                <Image src={`/SliderGallery/${src}`} alt="" 
                    width={500}
                    height={500}
                    className='
                    w-[150px]
                    !max-w-[500px]
                    '
                />
            </motion.div>
            <div className='text-[5vw] font-[500] font-sans cursor-pointer 2xl:text-[77px] '>{title2}</div>
        </div> 
    )
}
