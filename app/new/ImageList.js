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
import {
    floating1,
    floating2,
    floating3,
    floating4,
    floating5,
    floating6,
    floating7,
} from "../../components/Data"



const PoppinsFont = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap'
})



export default function ImageList() {

    return (
        <>
            <ul className="w-full h-full">
                <li className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src={floating1}
                        alt="Picture of the author"
                        width={500}
                        height={200}
                    />
                </li>
                <li className="absolute top-0 left-0">
                    <Image
                        src={floating2}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </li>
                <li className="absolute top-0 right-0">
                    <Image
                        src={floating3}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </li>
                <li className="absolute bottom-0 left-0">
                    <Image
                        src={floating4}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </li>
                <li className="absolute bottom-0 right-0">
                    <Image
                        src={floating5}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </li>
            </ul>
        </>
    )
}