import { useTranslation } from 'react-i18next';
import ProjectComponent from '../../components/ProjectComponent'
import { lazy, Suspense } from 'react'
const ContentModal = lazy(() => import ('../../components/ContentModal'))
import logoPortfolio from '../../assets/projects/logo-Portfolio.png'
import logoPortfoliov2 from '../../assets/projects/logo-Portfolio-v2.png'
import logoBooki from '../../assets/projects/logo-Booki.png'
import logoMonVieuxGrimoir from '../../assets/projects/logo-MonVieuxGrimoir.png'
import logoKasa from '../../assets/projects/logo-Kasa.png'
import logoNinaCarducci from '../../assets/projects/logo-NinaCarducci.png'
import logoMenuMakerByQwenta from '../../assets/projects/logo-MenuMakerByQwenta.png'
import logoSophieBluel from '../../assets/projects/logo-SophieBluel.png'
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Projects() {
    const { t } = useTranslation()
    const { ref, inView } = useInView();
    const [hasAnimated, setHasAnimated] = useState(false);
    useEffect(() => {
        if (inView && !hasAnimated) {
        setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <section id='projects' className='flex flex-col justify-around mx-24 my-12 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4' itemScope itemType='https://schema.org/CreativeWork'>
            <h2 className='flex flex-row text-150 my-8 pb-5 items-center w-full md:px-[8%] md:pb-2 md:mb-4 sm:text-145 xs:text-140 xs:pb-6'>
                <span className='inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2'></span>
                {t('projects.title2')}
                <span className='inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2'></span>
            </h2>
            <motion.div className='grid grid-cols-3 gap-0 w-full px-9 my-5 lg:px-4 md:px-[3.5%] md:w-11/12 m-auto sm:px-2 sm:my-5 xs:mx-auto xs:my-0 xs:p-0' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 170, opacity: 0.3 }} transition={{ duration: 0.7, ease: 'easeOut' }} >
                <div className='flex flex-col gap-16 sm:gap-9'>
                    <div className='flex justify-end h-4/6' ref={ref}>
                        <ProjectComponent logo={logoPortfolio} logoAlt={'Portfolio'} content={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContentModal logo={logoPortfoliov2} logoAlt={'Portfolio'} projectName={'my-portfolio'} icon={<FaGithub size="28" />} websiteLink={'#'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_8'} />
                            </Suspense>
                            }
                        />
                    </div>
                    <div className='flex justify-start h-4/6'>
                        <ProjectComponent logo={logoKasa} logoAlt={'Kasa'} content={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContentModal logo={logoKasa} logoAlt={'Kasa'} projectName={'kasa'} icon={<FaGithub size="28" />} websiteLink={'https://kasa.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_6'} />
                            </Suspense>
                            }
                        />
                    </div>
                    <div className='flex justify-end h-4/6'>
                        <ProjectComponent logo={logoSophieBluel} logoAlt={'Sophie Bluel - Architecte d’intérieur'} content={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContentModal logo={logoSophieBluel} logoAlt={'SophieBluel - Architecte d’intérieur'} projectName={'sophie-bluel'} icon={<FaGithub size="28" />} websiteLink={'https://sophie-bluel.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_3'} />
                            </Suspense>
                            }
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <ProjectComponent logo={logoNinaCarducci} logoAlt={'Nina Carducci - Photographe'} content={
                        <Suspense fallback={<div>Loading...</div>}>
                            <ContentModal logo={logoNinaCarducci} logoAlt={'NinaCarducci - Photographe'} projectName={'nina-carducci'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_5'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_5'} />
                        </Suspense>
                        }
                    />
                </div>
                <div className='flex flex-col gap-12 sm:gap-9'>
                    <div className='flex justify-start h-4/6'>
                        <ProjectComponent logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} content={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContentModal logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} projectName={'mon-vieux-grimoire'} icon={<FaGithub size="28" />} websiteLink={'https://mon-vieux-grimoir.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_7'} />
                            </Suspense>
                            }
                        />
                    </div>
                    <div className='flex justify-end h-4/6'>
                        <ProjectComponent logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} content={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContentModal logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} projectName={'qwenta'} icon={<FaGithub size="28" />} websiteLink={'/Qwenta.zip'}  gitHubLink={''} />
                            </Suspense>
                            }
                        />
                    </div>
                    <div className='flex justify-start h-4/6'>
                        <ProjectComponent logo={logoBooki} logoAlt={'Booki'} content={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContentModal logo={logoBooki} logoAlt={'Booki'} projectName={'booki'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_2'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_2'} />
                            </Suspense>
                            }
                        />
                    </div>
                </div>
            </motion.div>
      </section>
    )
}

export default Projects
