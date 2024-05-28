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
In my current role, I provide expert technical support, specializing in LAN and WAN connectivity issues. 
I resolve routing problems swiftly, maintaining a 98% success rate and ensuring a 95% on-time completion rate for network deployments. 
I have collaborated with over 700 clients, coordinating installations with a 30% improvement in customer satisfaction.

I manage over 500 tickets, consistently exceeding service level agreements, and have implemented solutions that improved network uptime by 20%.
My proactive monitoring reduced network outages by 25%, and my documentation has increased team efficiency by 50%. 
Continuous training has enhanced my technical expertise by 20%, leading to a 15% rise in customer satisfaction.
 "
                   
                   />
 <Details 
position="Full Stack Software Engineer" company="100Devs"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2022-2023" address="Chicago, IL (Remote)"
work="Collaborated with multifaceted teams to construct applications and engineer tools to simplify everyday decision-making for users, 
resulting in a 40% increase in user efficiency and productivity.

Crafted applications utilizing the MERN stack (comprising MongoDB, Express, React, and Node.js) to create robust and dynamic software solutions, 
leading to a 50% reduction in user errors and a 30% improvement in overall system performance.

Assisted 20+ enterprises in establishing a formidable online presence and enhancing their digital brand identity, 
resulting in a 92% increase in website traffic and a 50% growth in online sales conversions

Assisted enterprises in establishing a formidable online presence and enhancing their digital brand identity."
                   
                   />
 <Details 
position="Customer Success Manager/Technical Support Specialist" company="Marquette University"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2017-2021" address="Milwaukee, WI (Hybrid)"
work="Provided technical support to 1000+ students, faculty, and staff for campus-wide software, LMS, and SIS, ensuring seamless access to resources. 
Resolved hardware/software issues with a 98% success rate, minimizing downtime.

Managed and organized a repository of 500+ technical documents, including user guides, FAQs, and troubleshooting manuals for campus-wide systems,
implementing advanced documentation tools to enhance accessibility and efficiency in updates, resulting in 30% faster retrieval and
20% reduced update time for support staff and end-users.
"
                   
                   />
                </ul>
            </div>
        </div>
    )
}

export default Experience
