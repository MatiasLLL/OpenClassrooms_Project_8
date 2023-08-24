import { ReactElement, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiJavascript } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// import HTML from '../../assets/skills/logo-html.svg';
// import CSS from '../../assets/skills/logo-css.svg';
// import JavaScript from '../../assets/skills/logo-javascript.svg';
// import Sass from '../../assets/skills/logo-sass.svg';
// import TypeScript from '../../assets/skills/logo-typescript.svg';
// import Tailwind from '../../assets/skills/logo-tailwind.svg';
// import React from '../../assets/skills/logo-react.svg';
// import Node from '../../assets/skills/logo-node.svg';

{/*
<img className='px-3 max-h-11 mt-px' src={HTML} alt={'dfb'} />
<img className='px-3 max-h-11 mt-px' src={CSS} alt={'dfb'} />
<img className='px-3 max-h-11 mt-px' src={JavaScript} alt={'dfb'} /> 
<img className='px-3 max-h-11 mt-px' src={Sass} alt={'dfb'} />
<img className='px-3 max-h-11 mt-px' src={TypeScript} alt={'dfb'} />
<img className='px-3 max-h-11 mt-px' src={Tailwind} alt={'dfb'} />
<img className='px-3 max-h-11 mt-px' src={React} alt={'dfb'} />
<img className='px-3 max-h-11 mt-px' src={Node} alt={'dfb'} />
*/}

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
        icon: ReactElement<IconType>;
        text: string;
    }
    const SkillsCard = ({icon, text}: SkillsCardProps) => (
        <div className='flex flex-col items-center justify-center text-skills sm:text-active my-5'>
            <i className='mb-1 text-color13'>{icon}</i>
            <span className='text-color13 text-center'>{text}</span>
        </div>
    )
    return (
        <section id="skills" className='flex flex-col justify-around mx-24 my-7'>
            <h2 className='flex flex-row text-title mt-5 mb-6 items-center w-full text-color13'>
                <span className='inline-block w-1/5 h-0.5 bg-color13 mr-6 rounded-full'></span>
                {t('skills.title2')}
                <span className='inline-block w-4/5 h-0.5 bg-color13 ml-6 rounded-full'></span>
            </h2>
            <div className='skills-container flex flex-row'>
                <motion.section className='flex flex-col w-1/2 px-6' animate={hasAnimated  ? { x: 0, opacity: 1 } : { x: -170, opacity: 0.8 }} transition={{ duration: 0.65, ease: 'easeOut' }} >
                    <div className='flex justify-center pr-6' ref={ref} >
                        
                        <SkillsCard icon={<FaHtml5 size="34" />} text={'HTML'} />
                    </div>
                    <div className='flex justify-center items-center ml-2'>
                        <SkillsCard icon={<FaCss3Alt size="34" />} text={'CSS'} />
                        <span className='inline-block w-5/12 h-0.5 bg-color13 ml-6 mr-4 rounded-full'></span>
                        <SkillsCard icon={<SiJavascript size="28" />} text={'JavaScript'} />
                    </div>
                    {/* changer icone rounded */}
                    <div className='flex justify-center items-center ml-6 mr-3'>
                        <SkillsCard icon={<FaSass size="30" />} text={'Sass'} />
                        <span className='inline-block w-3/5 h-0.5 bg-color13 ml-7 mr-6 rounded-full'></span>
                        <SkillsCard icon={<SiTypescript size="28" />} text={'TypeScript'} />
                    </div>
                    <div className='flex justify-center items-center pl-3 pr-2 ml-11 w-3/4'>
                        <SkillsCard icon={<SiTailwindcss size="30" />} text={'Tailwind'} />
                        <span className='inline-block w-7/12 h-0.5 bg-color13 ml-4 mr-7 pr-10 rounded-full'></span>
                        <SkillsCard icon={<FaReact size="37" />} text={'React'} />
                    </div>
                    <div className='flex justify-center pr-1'>
                        <SkillsCard icon={<FaNodeJs size="30" />} text={'Node - Express'} />
                    </div>
                </motion.section>
                <section className='flex flex-row w-1/2 place-content-evenly pl-1 pr-2 py-7 text-color13'>
                    <div className='w-1/12 flex flex-row ml-2 mr-11'>
                        <span className='inline-block w-1 h-full bg-gradient-to-b from-color13/40 to-color13/70 mx-2 rounded-full'></span>
                        <span className='inline-block w-1 h-full bg-gradient-to-t from-color13/40 to-color13/70 ml-0.5 rounded-full'></span>
                    </div>
                    <motion.ul className='flex flex-col place-content-evenly w-11/12 my-6 text-active list-disc font-semibold' animate={hasAnimated  ? { x: 0, opacity: 1 } : { x: 170, opacity: 0.8 }} transition={{ duration: 0.65, ease: 'easeOut' }} >
                        <li className='px-3'>{t('soft-skills.sentence1')}</li>
                        <li className='px-3'>{t('soft-skills.sentence2')}</li>
                        <li className='px-3'>{t('soft-skills.sentence3')}</li>
                        <li className='px-3'>{t('soft-skills.sentence4')}</li>
                        <li className='px-3'>{t('soft-skills.sentence5')}</li>
                    </motion.ul>
                </section>
            </div>
      </section>
    )
}

export default Skills

