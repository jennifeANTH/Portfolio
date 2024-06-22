import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import TestComponent from './test';

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          <a>
            <img src=''>
            </img>
          </a>
          {/* <div className='flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'/> */}
          <div>
            <h2>About me</h2>
            <h3>I'm a UI/UX Designer with 2 year of experience</h3>
            <p>njsdfjksdnjfndsjnnfkjnjsknvjsvnslnkfnl</p>
          </div>
          <div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={2} duration={3}/> : 0}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Year of<br/>
                Experience
              </div>
            </div>
            <div className='flex-row flex-gap-x-6 lg:gap-x-10 mb-12'>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={2} duration={3}/> : 0}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Year of<br/>
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {InView ? <CountUp start={0} end={2} duration={3}/> : 0}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Year of<br/>
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
 