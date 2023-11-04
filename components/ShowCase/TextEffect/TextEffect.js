'use client'

import React from "react"
import {
    useState,
    useRef
} from "react"
import { Inter } from 'next/font/google'
import {motion} from 'framer-motion'


const InterFont = Inter({ subsets: ['latin'] })

function NewWord ({word, duration,transformY} = props) {
    return(
        <motion.p className={`uppercase  cursor-pointer`} animate={{y : transformY}}  transition={{y: { duration: duration }}} >
            {word}
        </motion.p>
    )
}


export default function TextEffect({text} = props) {
    const textArray = text.split('')
    const firstParent = useRef(null)
    const [transformY, setTransformY] = useState(5)
   
    const handleMouseEnter = () => {
        console.log(firstParent.current)
        setTransformY(-22)
    }
    const handleMouseLeave = () => {
        setTransformY(5)
    }
    return (
            <div className={"flex flex-col leading-5 h-[30px] overflow-hidden pt-[2px] gap-2 text-sm font-medium " + InterFont.className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <div className=" flex gap-1  cursor-pointer" ref={firstParent}>
                    {
                        textArray.map((char, index) => {
                            return(
                                <NewWord key={index} word={char} duration={0.2 + (0.2 * (index + 1))} transformY={transformY} />
                            )
                        })
                    }
                </div>
                <div className="  flex gap-1  cursor-pointer">
                    {
                        textArray.map((char, index) => {
                            return(
                                <NewWord key={index} word={char} duration={0.2 + (0.2 * (index + 1))} transformY={transformY} />
                            )
                        })
                    }
                </div>
            </div>
    )
}