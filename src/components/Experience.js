import React, {useRef} from "react";
import { motion ,useScroll } from 'framer-motion'
import LiIcon from "./LiIcon";

const Details = ({position,company,companyLink, time, address, work}) =>{
    const ref = useRef(null);
    return (
         <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href ={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null)
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64 '>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
            </h2>


            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div 
style={{scaleY: scrollYProgress}}
className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
md:w-[2px] md:left-[30px] xs:left-[20px]
'/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
position="Information Technology Technical Specialist" company="Honest Networks"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2024-Present" address="(Remote)"
work="
In my current role, I provide expert technical support, specializing in resolving network-related issues for both LAN and WAN connectivity. 
With a keen focus on efficiency, I tackle routing issues swiftly to maintain seamless data flow within our networks. 
Collaborating closely with clients, I coordinate installations and managed concierge projects, 
ensuring timely completion and smooth deployment of network infrastructure. By implementing innovative solutions, 
I significantly enhanced network performance and reliability, consistently earning high satisfaction rates. 
Managing a high volume of tickets, I exceeded service level agreements through adept use of advanced diagnostic tools and meticulous 
documentation of troubleshooting processes. Conducting comprehensive network assessments, 
I pinpointed areas for optimization and proactively monitored network health, taking preemptive measures to prevent downtime. 
 "
                   
                   />
 <Details 
position="Full Stack Software Engineer" company="100Devs"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2022-2023" address="Chicago, IL (Remote)"
work="Collaborating with multifaceted teams to construct applications and engineer tools aimed at simplifying 
everyday decision-making for users.
Crafting applications utilizing the MERN stack (comprising MongoDB, Express, React, and Node.js) 
to create robust and dynamic software solutions.
Assisting enterprises in establishing a formidable online presence and enhancing their digital brand identity.. "
                   
                   />
 <Details 
position="Customer Success Support Specialist/Technical Writer" company="Marquette University"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2017-2021" address="Milwaukee, WI (Hybrid)"
work="Delivering vital technical support to students using Linux, BMC Remedy Ticketing System, and Knowledge-Based Software. 
Swiftly resolving hardware/software issues for seamless operations. 
Ensuring network security and optimizing computer imaging for reliable campus computing. 
Proficient in industry-standard style guides, crafting and editing clear technical documentation for diverse projects,
 maintaining a consistent and professional tone.
"
                   
                   />
                </ul>
            </div>
        </div>
    )
}

export default Experience
