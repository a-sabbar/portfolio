'use client'

import React from "react"
import {
    useState,
    useEffect,
    useRef
} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


export default function FirstPage() {

    const scroll = useRef(null)

    return (
        <div className=" w-full h-[120vh] flex justify-center relative bg-black over" ref={scroll}>
        </div>
    )
}