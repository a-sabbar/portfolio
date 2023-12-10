'use client'
import React from "react";
import { animate, motion } from "framer-motion";
import { useEffect , useState , useRef } from "react"
import { Inter } from 'next/font/google'
import Image from "next/image";


const inter = Inter({ subsets: ['latin'] })
const initialMaskSize = 0.4;
const targetMaskSize = 25;

export default function ClipMaskOnScroll() {
    const continerRef = useRef(null);
    const maskRef = useRef(null);
    useEffect(() => {
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        maskRef.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
        requestAnimationFrame(animate);
    }

    const getScrollProgress = () => {
        const scrollProgress = maskRef.current.offsetTop / (continerRef.current.getBoundingClientRect().height - window.innerHeight);
        return scrollProgress
    }

    return(
        <div className="w-full h-full ">
            <div className="h-[300vh] w-full bg-white relative " ref={continerRef}>
                <div className="h-[100vh] w-full sticky top-0 left-0 flex justify-center items-center overflow-hidden mask-image" ref={maskRef}>
                    <video src="/bg.mp4" autoPlay loop muted className="h-full  object-cover sticky top-0" playsInline />
                </div>
            </div>
            <div className="w-full h-screen"/>
        </div>
    )
}
