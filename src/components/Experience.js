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
position="Client Operations Manager" company="Ready Education"
// companyLink="www.readyeducation.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2023-2025" address="(Full Time-Remote)"
work="
Led client operations for 90+ higher-ed partnerships, driving adoption and long-term engagement of the SaaS platform while maintaining a 96% client satisfaction rate, ensuring all stakeholders had a seamless experience.

Improved client onboarding efficiency by 35% through cross-team collaboration with product, engineering, and leadership, streamlining workflows and reducing average implementation time from weeks to days.

Managed escalations and complex system integrations across CRM, LMS, and SIS platforms, resolving critical issues quickly and maintaining operational continuity during rapid organizational changes. Supported strategic restructuring and executive-level initiatives, working closely with VP-level stakeholders to optimize processes, drive retention, and maintain business stability during a company-wide transition.

Recognized for high-impact problem-solving and adaptability in a startup environment, introducing process improvements that increased team efficiency and strengthened client relationships.
"
/>              
                <Details 
position="Information Technology Technical Specialist" company="Honest Networks"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2024-Present" address="(Part Time-Remote)"
work="
Managed a portfolio of 500+ active client accounts, overseeing end-to-end network infrastructure deployments with a 95% on-time completion rate.
 Introduced a proactive customer support strategy that resolved 95% of inquiries within 24 hours, leading to a 20% boost in client retention.

Reduced network downtime by 25% through continuous health monitoring and preventive maintenance, directly improving client productivity. 
Authored a comprehensive knowledge base, empowering clients to self-serve and cutting support tickets by 30%. This improved overall team efficiency by 50%.

Fostered a culture of continuous learning by organizing 10+ technical training sessions, which enhanced team expertise and drove a 15% rise in client satisfaction scores.
 "
                   
                   />
 <Details 
position="Full Stack Software Engineer" company="100Devs"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2021-2022" address="Chicago, IL (Full Time-Remote)"
work="
Led cross-functional teams to design and launch applications that simplified decision-making and significantly enhanced user efficiency. 

By leveraging the MERN stack, delivered scalable software solutions that reduced user errors by half and improved system performance by 30%. 

Collaborated with over 100 enterprises to elevate their digital presence, doubling website traffic and driving a 
50% increase in online sales conversions.
"
                   
                   />

 <Details 
position="Client Operations Manager/Technical Support Specialist" company="Marquette University"
// companyLink="www.company.com" //IF YOU WANT TO INCLUDE COMPANY LINK
time="2017-2021" address="Milwaukee, WI (Full Time-Hybrid)"
work="
Provided technical support for an academic community of over 1,500 students, faculty, and staff, resolving over 95% of hardware and software issues on first contact—minimizing downtime and ensuring consistent access to learning resources. This proactive approach contributed to a 20% reduction in support ticket volume within a year.

Developed and implemented a user-friendly knowledge base for 1,000+ users, improving information retrieval speed by around 30% and easing the workload for support staff, which boosted overall user satisfaction.

Collaborated closely with departmental IT liaisons to streamline communication and issue resolution, leading to an 80% decrease in escalated support tickets over two years.
"
                   
                   />
                </ul>
            </div>
        </div>
    )
}

export default Experience
