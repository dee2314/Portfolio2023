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
position="Senior Partner Success Manager" company="Hagerty"
companyLink="https://www.hagerty.com/"
time="Dec 2024 - Present" address="Remote"
work="
Managed a portfolio of 30 partner accounts, driving account performance, partner engagement, and retention initiatives across the portfolio.

Managed ongoing partner communications and escalations, targeting 95%+ partner satisfaction through responsive service, proactive follow-ups, and effective issue resolution.

Conducted regular account performance reviews, identifying growth opportunities and developing action plans designed to increase partner engagement and account value by 10–15%.

Collaborated cross-functionally with internal teams to streamline issue resolution and improve operational efficiency, targeting a 20% reduction in resolution time.
"
/>    
                
                <Details 
position="Client Operations Manager" company="Ready Education"
time="2022-2024" address="(Full Time-Remote)"
work="
Led client operations for 90+ higher-ed partnerships, driving adoption and long-term engagement of the SaaS platform while maintaining a 96% client satisfaction rate, ensuring all stakeholders had a seamless experience.

Improved client onboarding efficiency by 35% through cross-team collaboration with product, engineering, and leadership, streamlining workflows and reducing average implementation time from weeks to days.

Managed escalations and complex system integrations across CRM, LMS, and SIS platforms, resolving critical issues quickly and maintaining operational continuity during rapid organizational changes. Supported strategic restructuring and executive-level initiatives, working closely with VP-level stakeholders to optimize processes, drive retention, and maintain business stability during a company-wide transition.

Recognized for high-impact problem-solving and adaptability in a startup environment, introducing process improvements that increased team efficiency and strengthened client relationships.
"
/>              


                </ul>
            </div>
        </div>
    )
}

export default Experience