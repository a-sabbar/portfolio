'use client'

import React from "react"
import {
    useState,
    useEffect,
    useRef
} from "react"
import { Inter } from 'next/font/google'
import {motion} from 'framer-motion'
import FirstPage from './FirstPage'
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InterFont = Inter({ subsets: ['latin'] })

export default function Page(props) {
    useEffect( () => {

        const lenis = new Lenis()
    
        lenis.on('scroll', ScrollTrigger.update)
        
        gsap.ticker.add((time)=>{
          lenis.raf(time * 1000)
        })
        
        gsap.ticker.lagSmoothing(0)
    
      }, [])

    return (
        <div className="w-ful ">
            <FirstPage />
        </div>
    )
}