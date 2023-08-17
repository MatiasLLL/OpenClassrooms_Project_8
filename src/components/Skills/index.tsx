import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiJavascript } from "react-icons/si";
// import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
// import viteLogo from '/vite.svg'
// <img src={viteLogo} className="logo" alt="Vite logo" />
// , useState

function Skills() {
    const { t } = useTranslation()
    type SkillsCardProps = {
        icon: ReactElement<IconType>;
        text: string;
    }
    const SkillsCard = ({icon, text}: SkillsCardProps) => (
        <div className='flex flex-col items-center justify-center text-skills sm:text-active my-5'>
            <i className='mb-1 text-color13'>{icon}</i>
            <span className='text-color13 text-center cursor-pointer'>{text}</span>
        </div>
    )
    return (
        <section id="skills" className='flex flex-col justify-around mx-24 my-7'>
                <h2 className='flex flex-row text-title mt-8 mb-6 items-center w-full text-color13'>
                    <span className='inline-block w-1/5 h-0.5 bg-color13 mr-6 rounded-full'></span>
                    {t('skills.title2')}
                    <span className='inline-block w-4/5 h-0.5 bg-color13 ml-6 rounded-full'></span>
                </h2>
                <div className='flex flex-row'>
                    <section className='flex flex-col w-1/2 px-6'>
                        <div className='flex justify-center w-11/12'>
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
                        <div className='flex justify-center'>
                            <SkillsCard icon={<FaNodeJs size="30" />} text={'Node - Express'} />
                        </div>
                    </section>
                    <section className='flex flex-col w-1/2 place-content-evenly italic pl-20 pr-12 text-color13'>
                        <p className='flex flex-row justify-start'>{t('soft-skills.sentence1')}</p>
                        <p className='flex flex-row justify-end'>{t('soft-skills.sentence2')}</p>
                        <p className='flex flex-row justify-start'>{t('soft-skills.sentence3')}</p>
                        <p className='flex flex-row justify-end'>{t('soft-skills.sentence4')}</p>
                        <p className='flex flex-row justify-start'>{t('soft-skills.sentence5')}</p>
                    </section>
                </div>
      </section>
    )
}

export default Skills

{/* changer icone rounded */}

{/* <div className='flex flex-row justify-end'>
    <SkillsCard icon={<FaHtml5 size="34" />} text={'HTML5'} />
</div>
<div className='flex justify-end w-3/4 pr-7'>
    <SkillsCard icon={<FaCss3Alt size="34" />} text={'CSS3'} />
</div>

<div className='flex justify-end w-1/2 pr-7'>
    <SkillsCard icon={<SiJavascript size="28" />} text={'JavaScript'} />
</div>
<div className='flex justify-end w-1/6'>
    <SkillsCard icon={<FaReact size="37" />} text={'React.js'} />
</div>
<div className='flex justify-start'>
    <SkillsCard icon={<FaSass size="30" />} text={'Sass'} /> 
</div>
<div className='flex justify-end w-1/3'>
    <SkillsCard icon={<SiTypescript size="28" />} text={'TypeScript'} />
</div>
<div className='flex justify-end w-2/3'>
    <SkillsCard icon={<SiTailwindcss size="30" />} text={'Tailwind'} />
</div>
<div className='flex justify-end'>
    <SkillsCard icon={<FaNodeJs size="30" />} text={'Node.js - Express.js'} />
</div> */}