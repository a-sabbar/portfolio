'use client'
import React from "react"
import {
    useState,
    useEffect,
    useRef
} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


export default function ScrollEffect() {

    const scroll = useRef(null)
    const bgScal = useRef(null)
    const textRef = useRef(null)
    const imgSmall = useRef(null)

    useEffect( () => {
            gsap.registerPlugin(ScrollTrigger)
            
            gsap.timeline({
                scrollTrigger: {
                    trigger: scroll.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.15,
                    pin: true,
                    // markers: true,
                },
            }).to(bgScal.current, {
                width: '100%',
                height: '100%',
                top: '0',

            }).to(textRef.current, {
                scrollTrigger: {
                    scrub: 0.95,
                },
                fontSize: '10rem',
                top: '-50%',
            }).to(imgSmall.current, {
                scrollTrigger: {
                    scrub: 0.15,
                },
                height: '0',
                top: '-50%',
            })

            return () => {
                gsap.killTweensOf(bgScal.current);
                gsap.killTweensOf(textRef.current);
                gsap.registerPlugin(ScrollTrigger)
            }
        }, [])

    return (
        <div className=" w-full h-[120vh] flex justify-center relative bg-black over" ref={scroll}>
            <div className=" w-2/3 h-[700px] bg-[url('/SmoothScroll/bg.jpg')] bg-cover bg-center z-[1] absolute  top-1/3 " ref={bgScal} />
            <p className=" text-9xl font-bold text-white absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[4] w-full" ref={textRef}>Morocco</p>
            <div className="w-[400px] h-[500px] bg-[url('/SmoothScroll/small.jpg')] bg-cover bg-center z-[2] absolute  top-1/4" ref={imgSmall}/>
        </div>
    )
}