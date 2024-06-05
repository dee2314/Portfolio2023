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
Managed a portfolio of 500+ active client accounts, achieving a 95% on-time completion rate for network infrastructure deployments.
This streamlined project execution and increased client satisfaction by 40%.
Developed a proactive customer support strategy, achieving a 95% resolution rate for customer inquiries within 24 hours.
This led to a 20% increase in customer loyalty and retention.

Established a comprehensive knowledge base through documented troubleshooting processes and solutions. 
This empowered clients to self-serve and reduced support ticket volumes by 30%, improving overall support team efficiency by 50%.
Reduced network downtime by 25% through proactive network health monitoring and preventive maintenance. 
This directly contributed to a 20% increase in client productivity and satisfaction.
Cultivated a culture of continuous learning within the team, facilitating participation in 10+ training sessions. This resulted in a 20% overall improvement in the team's technical expertise and a 15% increase in client satisfaction scores.
 "
                   
                   />
 <Details 
position="Full Stack Software Engineer" company="100Devs"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2022-2023" address="Chicago, IL (Remote)"
work="
Led cross-functional teams in developing applications and tools that streamlined user decision-making processes, 
boosting user efficiency and productivity by 40%.
Delivered robust and dynamic software solutions using the MERN stack, resulting in a 50% reduction in user errors 
and a 30% improvement in overall system performance.

Partnered with over 100 enterprises to establish a strong online presence and enhance their digital brand identity. 
This strategy led to a 100% increase in website traffic and a 50% growth in online sales conversions.
"
                   
                   />
 <Details 
position="Customer Success Manager/Technical Support Specialist" company="Marquette University"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2017-2021" address="Milwaukee, WI (Hybrid)"
work="Spearheaded technical support for a vibrant academic community exceeding 1,500 students, faculty, and staff. Resolved 98% of hardware/software issues on the first attempt, minimizing downtime and ensuring uninterrupted access to critical learning resources. 

This resulted in a 25% decrease in support ticket volume within a year, showcasing the effectiveness of proactive troubleshooting and user empowerment.
Developed and implemented a comprehensive, user-friendly knowledge base strategy for a community surpassing 1,000 users. 

This initiative empowered users with self-service capabilities, leading to a 35% faster retrieval of information and a 20% reduction in update time for support staff. This translated to a 15% increase in overall user satisfaction with IT services.
Championed a collaborative approach to technical support, fostering strong relationships with departmental IT liaisons across various academic departments. This streamlined communication and issue resolution, resulting in a 90% reduction in escalated technical support tickets within two years.
"
                   
                   />
                </ul>
            </div>
        </div>
    )
}

export default Experience
