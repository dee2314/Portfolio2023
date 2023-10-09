import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}) => {

    return (
        <motion.div className='flex item-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 mx:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{  x: x, y: y, transition: {duration: 1.5} }}
        viewport={{once:true}} 
        >
        {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>

        <motion.div className='flex item-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
        '
        whileHover={{scale:1.05}}
        >
        Web
        </motion.div>

        <Skill name ="CSS" x="-5vw" y="-10vw"/>
        <Skill name ="HTML5" x="-22vw" y="15vw"/>
        <Skill name ="JavaScript" x="20vw" y="2vw"/>
        <Skill name ="ReactJS" x="0vw" y="12vw"/>
        <Skill name ="NodeJS" x="-20vw" y="-15vw"/>
        <Skill name ="Git" x="15vw" y="-12vw"/>
        <Skill name ="MongoDB" x="32vw" y="-9vw"/>
        <Skill name ="OS Systems" x="0vw" y="-20vw"/>
        <Skill name ="Linux" x="-30vw" y="0vw"/>
        <Skill name ="TCP/IP" x="18vw" y="14vw"/>
        <Skill name ="Bash" x="10vw" y="23vw"/>


        </div>
        </>
    )
}

export default Skills