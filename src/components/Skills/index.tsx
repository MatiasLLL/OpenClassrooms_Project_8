import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import HTML from '../../assets/skills/logo-html.svg';
import CSS from '../../assets/skills/logo-css.svg';
import JavaScript from '../../assets/skills/logo-javascript.svg';
import Sass from '../../assets/skills/logo-sass.svg';
import TypeScript from '../../assets/skills/logo-typescript.svg';
import Tailwind from '../../assets/skills/logo-tailwind.svg';
import React from '../../assets/skills/logo-react.svg';
import Node from '../../assets/skills/logo-node.svg';

function Skills() {
    const { t } = useTranslation()
    const { ref, inView } = useInView();
    const [hasAnimated, setHasAnimated] = useState(false);
    useEffect(() => {
        if (inView && !hasAnimated) {
        setHasAnimated(true);
        }
    }, [inView, hasAnimated]);
    type SkillsCardProps = {
        icon: string;
        iconAlt: string;
        text: string;
    }
    const SkillsCard = ({icon, text, iconAlt}: SkillsCardProps) => (
        <div className='flex flex-col items-center justify-center text-105 sm:text-90 my-5 lg:my-7 lg:py-0.5 sm:my-5 xs:my-3' itemProp="skill">
            <div className='w-[47px] h-[36px] flex justify-center items-center mb-[0.35rem]'>
                <img className='h-full w-full object-contain' src={icon} alt={iconAlt} style={text === 'Tailwind' ? { marginBottom: '0.7rem' } : {}} />
            </div>
            <span className='text-white text-center'>{text}</span>
        </div>
    )

    return (
        <section id="skills" className='flex flex-col justify-around mx-24 my-7 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4' itemScope itemType="https://schema.org/Person">
            <h2 className='flex flex-row text-150 my-8 pb-8 items-center w-full md:px-[8%] sm:mb-4 sm:text-145 xs:text-140'>
                <span className='inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2'></span>
                {t('skills.title2')}
                <span className='inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2'></span>
            </h2>
            <div className='flex flex-row overflow-hidden lg:flex-wrap pb-3'>
                <motion.section className='flex flex-col w-1/2 mr-4 xl:w-3/5 xl:mx-4 lg:w-full lg:items-center lg:mt-7' animate={ hasAnimated  ? { x: 0, opacity: 1 } : { x: -170, opacity: 0.8 }} transition={{ duration: 0.65, ease: 'easeOut' }} >
                    <div className='flex justify-center pr-8 lg:pr-3 md:pr-0' ref={ref} >
                        <SkillsCard icon={HTML} iconAlt={'logo HTML'} text={'HTML'} />
                    </div>
                    <div className='flex justify-center items-center pl-5 pr-6 ml-14 w-4/5 xl:pl-10 xl:pr-10 lg:w-7/12 lg:pl-6 lg:pr-14 lg:ml-16 lg:mr-2 md:mr-6 md:pr-11 md:pl-7 sm:pl-2 sm:pr-7 xs:ml-[3.25rem] xs:mr-1 xs:pl-1 xs:pr-8'>
                        <SkillsCard icon={CSS} iconAlt={'logo CSS'} text={'CSS'} />
                        <span className='inline-block w-1/2 h-0.5 bg-white lg:bg-white/20 ml-6 mr-4 xl:pl-2 lg:mr-4 lg:ml-6 lg:px-8 rounded-full md:pl-9 md:ml-5 md:pr-10 md:mr-3 sm:w-3/4 '></span>
                        <SkillsCard icon={JavaScript} iconAlt={'logo JavaScript'} text={'JavaScript'} />
                    </div>
                    <div className='flex justify-center items-center lg:mx-12 lg:w-11/12 lg:pl-10 lg:pr-5 sm:pl-6 sm:pr-1 xs:pr-0 xs:pl-4'>
                        <SkillsCard icon={Sass} iconAlt={'logo Sass'} text={'Sass'} />
                        <span className='inline-block w-3/5 h-0.5 bg-white lg:bg-white/20 ml-7 mr-6 rounded-full'></span>
                        <SkillsCard icon={TypeScript} iconAlt={'logo TypeScript'} text={'TypeScript'} />
                    </div>
                    <div className='flex justify-center items-center pl-3 pr-5 ml-12 w-3/4 xl:pl-7 xl:pr-7 lg:w-7/12 lg:pl-5 lg:pr-20 lg:ml-18 lg:mr-2 md:mr-3 md:pr-16 sm:pl-1 sm:pr-12 xs:ml-9 xs:mr-0 xs:pl-0 xs:pr-11'>
                        <SkillsCard icon={Tailwind} iconAlt={'logo Tailwind'} text={'Tailwind'} />
                        <span className='inline-block w-1/2 h-0.5 bg-white lg:bg-white/20 ml-4 mr-7 pr-10 lg:mr-6 lg:ml-3 lg:pr-12 lg:pl-7 rounded-full md:pr-14 md:pl-6 md:mr-6 md:ml-4 sm:w-3/4'></span>
                        <SkillsCard icon={React} iconAlt={'logo React'} text={'React'} />
                    </div>
                    <div className='flex justify-center pr-3 lg:pr-0'>
                        <SkillsCard icon={Node} iconAlt={'logo Node'} text={'Node - Express'} />
                    </div>
                </motion.section>
                <section className='flex flex-row w-1/2 place-content-evenly pl-1 pr-2 py-7 text-white xl:w-2/5 xl:pr-0 lg:mx-20 lg:w-full lg:flex-wrap lg:pb-0 sm:mx-4 xs:mx-0'>
                    <div className='w-1/12 flex flex-row mr-11 xl:mr-8 lg:flex-col lg:w-full lg:mx-20 lg:pb-8 lg:pt-5 md:pb-6 sm:mx-20 sm:pb-5 xs:mx-24'>
                        <span className='inline-block w-1 h-full bg-gradient-to-b from-white/40 to-white/70 rounded-full mr-2 lg:mr-0 lg:mb-1 lg:pb-0.5 lg:h-0.5 lg:w-full lg:bg-gradient-to-l'></span>
                        <span className='inline-block w-1 h-full bg-gradient-to-t from-white/40 to-white/70 rounded-full ml-0.5 lg:ml-0 lg:h-0.5 lg:w-full lg:bg-gradient-to-r'></span>
                    </div>
                    <motion.ul className='flex flex-col place-content-evenly w-11/12 my-6 list-disc text-105 font-normal xl:text-95 lg:w-full lg:mx-20 lg:pl-9 lg:list-none lg:text-105 lg:gap-5 md:text-100 md:pl-3 sm:pl-5 xs:text-95 xs:mx-9 xs:pl-5' animate={hasAnimated  ? { x: 0, opacity: 1 } : { x: 170, opacity: 0.8 }} transition={{ duration: 0.65, ease: 'easeOut' }} >
                        <li className='px-3 xl:pr-0 xs:px-6' itemProp="knows">{t('soft-skills.sentence1')}</li>
                        <li className='px-3 lg:pl-5 xs:px-6' itemProp="knows">{t('soft-skills.sentence2')}</li>
                        <li className='px-3 lg:pl-7 xs:px-6' itemProp="knows">{t('soft-skills.sentence3')}</li>
                        <li className='px-3 lg:pl-9 xs:px-6' itemProp="knows">{t('soft-skills.sentence4')}</li>
                        <li className='px-3 lg:pl-11 xs:px-6' itemProp="knows">{t('soft-skills.sentence5')}</li>
                    </motion.ul>
                </section>
            </div>
      </section>
    )
}

export default Skills
