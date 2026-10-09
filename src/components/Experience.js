```jsx
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
companyLink="https://www.readyeducation.com/"
time="Feb 2022 - Oct 2024" address="Remote"
work="
Owned a portfolio of 90+ SaaS clients, driving renewals, expansion, and long-term account growth across mid-market and enterprise segments.

Developed and executed onboarding and adoption strategies, improving customer engagement and achieving a 96% satisfaction rate.

Partnered cross-functionally with Sales and Product to identify expansion opportunities and influence product improvements based on client feedback.

Built repeatable engagement workflows and proactive outreach strategies to strengthen retention and increase pipeline consistency.

Acted as a strategic advisor to client stakeholders, aligning platform capabilities with business goals to drive measurable outcomes.
"
/>

                <Details 
position="Full Stack Software Engineer" company="100Devs"
companyLink="https://leonnoel.com/100devs/"
time="Feb 2021 - Dec 2022" address="Remote"
work="
Collaborated with interdisciplinary teams to develop applications and tools, enhancing user decision-making processes and resulting in a 40% increase in user engagement.

Managed a portfolio of key client accounts, exceeding retention goals by 15% through proactive communication, problem-solving, and exceeding client expectations.

Implemented strategic software engineering solutions to improve user experience and functionality, resulting in a 25% decrease in user complaints.

Troubleshot technical issues and implemented scalable solutions to improve product performance and reliability.
"
/>

                </ul>
            </div>
        </div>
    )
}

export default Experience
```