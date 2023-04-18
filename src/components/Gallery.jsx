import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { Gallery, } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const GalleryCard = ({
    index,
    image,

}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className=' backdrop:blur-sm bg-gradient-to-br hover:shadow-card shadow-gray-900 from-[#f9f9f946] to-[#0000008c] border-2 border-gray-800 p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img src={logo} className="h-12 w-12 absolute bottom-1 right-1" />
                    <img
                        src={image}
                        alt='image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        {/* <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div> */}
                    </div>
                </div>


            </Tilt>
        </motion.div>
    );
};

const GalleryScreen = () => {
    return (
        <>

            <div className='m-2 lg:m-20 justify-center flex flex-wrap gap-7'>
                {Gallery.map((gallery, index) => (
                    <GalleryCard key={`gallery-${index}`} index={index} {...gallery} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(GalleryScreen, "");