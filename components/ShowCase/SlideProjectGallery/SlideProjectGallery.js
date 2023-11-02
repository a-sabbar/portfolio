import React from 'react';
import List from "./list"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function SlideProjectGallery() {
    const projects = [
        {
            title1: "Jomor",
            title2: "Design",
            src: "jomor_design.jpeg"
        },

        {
            title1: "La",
            title2: "Grange",
            src: "la_grange.jpeg"
        },
        {
            title1: "Deux Huit",
            title2: "Huit",
            src: "deux_huit_huit.jpeg"
        },
        {
            title1: "Nothing",
            title2: "Design Studio",
            src: "nothing_design_studio.png"
        },
        {
            title1: "Mambo",
            title2: "Mambo",
            src: "mambo_mambo.jpeg"
        }
    ]
    return (
        <div className='w-[1200px] h-full flex justify-center items-cnter flex-col p-10 overflow-hidden

        '>
            <p className={'text-[1.5vw] font-[500] p-3  2xl:text-[25px] max-lg:text-[18px]  '+ inter.className}>
            Featured Work
            </p>
            {
                projects.map((project, index) => {
                    return (
                        <List key={index} title1={project.title1} title2={project.title2} src={project.src}/>
                    )
                })
            }
        </div>
    )
}