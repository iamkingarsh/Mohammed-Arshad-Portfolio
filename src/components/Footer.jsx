import React from 'react'
import { socialIcons } from '../constants'
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn, slideIn } from '../utils/motion';


const SocialIconsCanvas = ({ name, icon, socialLink, }) => {
    return (
        <motion.div variants={slideIn("right", "tween", 0.5, 0.75)}
            onClick={() => window.open(socialLink, "_blank")}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className=' backdrop:blur-[1000px] bg-gradient-to-br flex items-center space-x-2 px-4 justify-center  hover:shadow-card shadow-gray-900 from-[#f9f9f921] to-[#0000008c] border-2 border-gray-500 p-3 rounded-xl '

            >
                <div className='relative w-10 h-10'

                >

                    <img
                        src={icon}
                        alt='image'
                        className=' w-full h-full object-cover'
                    />
                </div>
                <span className=' text-sm py-4 gap-3'>{name}</span>


            </Tilt>
        </motion.div>
    )
}

class ShowCurrentYear extends React.Component {
    render() {
        return <div>{new Date().getFullYear()}</div>;
    }
}

function Footer() {
    return (
        <div >
            <div className=' backdrop:blur-lg py-6 md:py-2'>
                <h3 className=' text-lg text-center font-bold'>

                    I'm Social! Let's Connect and Collaborate
                </h3>
                <div className='flex flex-row flex-wrap justify-center gap-4 py-4 cursor-pointer'>
                    {socialIcons.map((social, index) => (
                        <SocialIconsCanvas key={`social-${index}`} index={index} {...social} />
                    ))}
                </div>
                <div className='flex  lg:mx-[560px] mx-[10px]  backdrop:blur-lg my-3 justify-center py-4 bg-[#ffffff1e] rounded-full border-2 border-gray-600'>
                    <div className="px-1 text-[12px]">
                        ©
                    </div>
                    <div className="text-[12px]">

                        <ShowCurrentYear />
                    </div>
                    <div className="px-2 text-[12px]" >
                        <span className='font-bold'>Mohammed Arshad</span>  | All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
