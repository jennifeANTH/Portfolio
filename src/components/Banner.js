import React from 'react';
import Image from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'


const Banner = () => {
  return (
    <section className='min-h-[85] lg:min-h-[78vh] flex items-center' id='home'>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
            <div className='text'>
            <div className='flex-1 text-center font-secondary lg:text-left'>
              < motion.h1 variants={fadeIn('up',0.3)} initial = "hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[45px] font-bold leading-[-0.8] mb-5 lg:text-[70px]'>JENNIFER <span/>NGUYEN</motion.h1>
              <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4'>I am a</span>
              <TypeAnimation sequence={['UI/UX Designer', 2000, 'Developer']} speed={50} className='text-accent' wrapper='span' repeat={Infinity}/>
            </div>
            </div>
            <motion.p variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto flex-1 text-center lg:mx-0 lg:text-left '>
            Ensuring the creation of intuitive interfaces and engaging products.Gathering user insights through various techniques such as interviews, surveys, and usability testing, to inform design decisions and optimize user experiences
            </motion.p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-lg'>Contact</button>
                <a href='#' className='text-gradient btn-link'>My Portfolio</a>
              </div>
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href='#'>
                  <FaYoutube/>
                </a>
                <a href='#'>
                  <FaGithub/>
                </a>
                <a href='#'>
                  <FaDribbble/>
                </a>
              </div>
            </div>
            <div className='hidden lg:flex flex-1 max-w-[320px] lg:ml-10'>
              {/* <img src={Image} alt=''></img> */}
            </div>
          </div>  
        </div>
    </section>
  );
};

export default Banner;
