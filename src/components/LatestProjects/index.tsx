import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import projectsData from '../../data/projects.json';
import { FaGithub } from 'react-icons/fa';
import ProjectCard from '../ProjectCard';
import ModalContent from '../ModalContent';
import logoBooki from '../../assets/projects/logo-Booki.png';
import logoSophieBluel from '../../assets/projects/logo-SophieBluel.png';
import logoMenuMakerByQwenta from '../../assets/projects/logo-MenuMakerByQwenta.png';
import logoNinaCarducci from '../../assets/projects/logo-NinaCarducci.png';
import logoKasa from '../../assets/projects/logo-Kasa.png';
import logoMonVieuxGrimoir from '../../assets/projects/logo-MonVieuxGrimoir.png';
import logoPortfolio from '../../assets/projects/logo-Portfolio.png';
import logoPortfoliov2 from '../../assets/projects/logo-Portfolio-v2.png';
import logoPAWA from '../../assets/projects/logo-PAWA.png';
import logoSpaceDolphin from '../../assets/projects/logo-SpaceDolphin.png';
import logoFlashLoan from '../../assets/projects/logo-FlashLoan.png';

const logoMap: { [key: string]: string } = {
    logoBooki,
    logoSophieBluel,
    logoMenuMakerByQwenta,
    logoNinaCarducci,
    logoKasa,
    logoMonVieuxGrimoir,
    logoPortfolio,
    logoPortfoliov2,
    logoPAWA,
    logoSpaceDolphin,
    logoFlashLoan,
};

function LatestProjects() {
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const displayedProjects = showMore
        ? projectsData
        : projectsData.slice(0, 6);

    const handleShowMore = () => {
        setShowMore(!showMore);
        setIsActive(true);
        setTimeout(() => setIsActive(false), 50);
        // setTimeout(() => setIsActive(false), 200);
    };

    return (
        <section
            id="projects"
            className="flex flex-col justify-around mx-24 my-12 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <h2 className="flex flex-row text-150 text-nowrap mt-4 mb-20 sm:my-6 pb-5 items-center w-full md:px-[8%] md:pb-2 md:mb-8 sm:text-145 xs:text-140 xs:pb-6">
                <span className="inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2"></span>
                {t('projects.title2')}
                <span className="inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2"></span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-0 sm:gap-8 justify-items-center mt-1">
                <AnimatePresence>
                    {displayedProjects.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                                opacity: 0,
                                y: 20,
                                transition: {
                                    duration: 0.15,
                                    ease: 'easeInOut',
                                },
                            }}
                            layout
                            className={`sm:w-4/5 flex justify-center items-center ${
                                displayedProjects.length % 2 !== 0 &&
                                index === displayedProjects.length - 1
                                    ? 'col-span-2 sm:col-span-1 sm:justify-self-center sm:place-self-center w-1/5'
                                    : 'col-span-1 sm:justify-center sm:justify-self-center place-self-center w-2/5'
                            }`}
                        >
                            <ProjectCard
                                logo={logoMap[project.logo]}
                                logoAlt={project.logoAlt}
                                content={
                                    <ModalContent
                                        logo={logoMap[project.content.logo]}
                                        logoAlt={project.content.logoAlt}
                                        projectName={
                                            project.content.projectName
                                        }
                                        icon={<FaGithub size="28" />}
                                        websiteLink={
                                            project.content.websiteLink
                                        }
                                        gitHubLink={project.content.gitHubLink}
                                        onClose={() => {}}
                                    />
                                }
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <div className="flex justify-center items center mt-2 mb-5 sm:mt-0">
                {projectsData.length > 6 && (
                    <button
                        className={`cursor-pointer text-center mt-14 w-fit py-2 px-5 rounded-full border border-white transition-all duration-100 ease-linear ${isActive ? 'border-darkBlue/70 text-darkBlue/70' : 'hover:border-darkBlue/70 hover:text-darkBlue/70'}`}
                        onClick={handleShowMore}
                    >
                        {showMore
                            ? t('projects.button-show-less')
                            : t('projects.button-show-more')}
                    </button>
                )}
            </div>
        </section>
    );
}

export default React.memo(LatestProjects);

// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { AnimatePresence, motion } from 'framer-motion';
// import projectsData from '../../data/projects.json';
// import { FaGithub } from 'react-icons/fa';
// import ProjectCard from '../ProjectCard';
// import ModalContent from '../ModalContent';
// import logoBooki from '../../assets/projects/logo-Booki.png';
// import logoSophieBluel from '../../assets/projects/logo-SophieBluel.png';
// import logoMenuMakerByQwenta from '../../assets/projects/logo-MenuMakerByQwenta.png';
// import logoNinaCarducci from '../../assets/projects/logo-NinaCarducci.png';
// import logoKasa from '../../assets/projects/logo-Kasa.png';
// import logoMonVieuxGrimoir from '../../assets/projects/logo-MonVieuxGrimoir.png';
// import logoPortfolio from '../../assets/projects/logo-Portfolio.png';
// import logoPortfoliov2 from '../../assets/projects/logo-Portfolio-v2.png';
// import logoPAWA from '../../assets/projects/logo-PAWA.png';
// import logoSpaceDolphin from '../../assets/projects/logo-SpaceDolphin.png';
// import logoFlashLoan from '../../assets/projects/logo-FlashLoan.png';

// const logoMap = {
//     logoBooki,
//     logoSophieBluel,
//     logoMenuMakerByQwenta,
//     logoNinaCarducci,
//     logoKasa,
//     logoMonVieuxGrimoir,
//     logoPortfolio,
//     logoPortfoliov2,
//     logoPAWA,
//     logoSpaceDolphin,
//     logoFlashLoan,
// };

// // const projectsData = [
// //     {
// //         logo: logoFlashLoan,
// //         logoAlt: 'Flash Loan',
// //         content: {
// //             logo: logoFlashLoan,
// //             logoAlt: 'Flash Loan',
// //             projectName: 'flashloan',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: '',
// //             gitHubLink: 'https://github.com/MatiasLLL/Flash_Loan',
// //         },
// //     },
// //     {
// //         logo: logoSpaceDolphin,
// //         logoAlt: 'SpaceDolphin',
// //         content: {
// //             logo: logoSpaceDolphin,
// //             logoAlt: 'SpaceDolphin',
// //             projectName: 'spacedolphin',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: 'https://spacedolphin.xyz',
// //             gitHubLink: 'https://github.com/MatiasLLL/SpaceDolphin-Token',
// //         },
// //     },
// //     {
// //         logo: logoPAWA,
// //         logoAlt: 'PAWA',
// //         content: {
// //             logo: logoPAWA,
// //             logoAlt: 'PAWA',
// //             projectName: 'pawa',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: 'https://pawatoken.xyz',
// //             gitHubLink: 'https://github.com/MatiasLLL/Pawa-Token',
// //         },
// //     },
// //     {
// //         logo: logoPortfolio,
// //         logoAlt: 'Portfolio',
// //         content: {
// //             logo: logoPortfoliov2,
// //             logoAlt: 'Portfolio',
// //             projectName: 'my-portfolio',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: '#',
// //             gitHubLink: 'https://github.com/MatiasLLL/OpenClassrooms_Project_8',
// //         },
// //     },
// //     {
// //         logo: logoMonVieuxGrimoir,
// //         logoAlt: 'Mon Vieux Grimoir',
// //         content: {
// //             logo: logoMonVieuxGrimoir,
// //             logoAlt: 'Mon Vieux Grimoir',
// //             projectName: 'mon-vieux-grimoire',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: 'https://mon-vieux-grimoir.up.railway.app',
// //             gitHubLink: 'https://github.com/MatiasLLL/OpenClassrooms_Project_7',
// //         },
// //     },
// //     {
// //         logo: logoKasa,
// //         logoAlt: 'Kasa',
// //         content: {
// //             logo: logoKasa,
// //             logoAlt: 'Kasa',
// //             projectName: 'kasa',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: 'https://kasa.up.railway.app',
// //             gitHubLink: 'https://github.com/MatiasLLL/OpenClassrooms_Project_6',
// //         },
// //     },
// //     {
// //         logo: logoNinaCarducci,
// //         logoAlt: 'Nina Carducci - Photographe',
// //         content: {
// //             logo: logoNinaCarducci,
// //             logoAlt: 'Nina Carducci - Photographe',
// //             projectName: 'nina-carducci',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: 'https://matiaslll.github.io/OpenClassrooms_Project_5',
// //             gitHubLink: 'https://github.com/MatiasLLL/OpenClassrooms_Project_5',
// //         },
// //     },
// //     {
// //         logo: logoMenuMakerByQwenta,
// //         logoAlt: 'Menu Maker by Qwenta',
// //         content: {
// //             logo: logoMenuMakerByQwenta,
// //             logoAlt: 'Menu Maker by Qwenta',
// //             projectName: 'qwenta',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: '/Qwenta.zip',
// //             gitHubLink: '',
// //         },
// //     },
// //     {
// //         logo: logoSophieBluel,
// //         logoAlt: 'Sophie Bluel - Architecte d’intérieur',
// //         content: {
// //             logo: logoSophieBluel,
// //             logoAlt: 'Sophie Bluel - Architecte d’intérieur',
// //             projectName: 'sophie-bluel',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: 'https://sophie-bluel.up.railway.app',
// //             gitHubLink: 'https://github.com/MatiasLLL/OpenClassrooms_Project_3',
// //         },
// //     },
// //     {
// //         logo: logoBooki,
// //         logoAlt: 'Booki',
// //         content: {
// //             logo: logoBooki,
// //             logoAlt: 'Booki',
// //             projectName: 'booki',
// //             icon: <FaGithub size="28" />,
// //             websiteLink: 'https://matiaslll.github.io/OpenClassrooms_Project_2',
// //             gitHubLink: 'https://github.com/MatiasLLL/OpenClassrooms_Project_2',
// //         },
// //     },
// // ];

// function LatestProjects() {
//     const { t } = useTranslation();
//     const [showMore, setShowMore] = useState(false);
//     const displayedProjects = showMore
//         ? projectsData
//         : projectsData.slice(0, 6);

//     const handleShowMore = () => {
//         setShowMore(!showMore);
//     };

//     return (
//         <section
//             id="projects"
//             className="flex flex-col justify-around mx-24 my-12 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4"
//             itemScope
//             itemType="https://schema.org/CreativeWork"
//         >
//             <h2 className="flex flex-row text-150 text-nowrap mt-4 mb-20 sm:my-6 pb-5 items-center w-full md:px-[8%] md:pb-2 md:mb-8 sm:text-145 xs:text-140 xs:pb-6">
//                 <span className="inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2"></span>
//                 {t('projects.title2')}
//                 <span className="inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2"></span>
//             </h2>
//             <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-0 sm:gap-8 justify-items-center mt-1">
//                 <AnimatePresence>
//                     {displayedProjects.map((project: any, index: number) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{
//                                 opacity: 0,
//                                 y: 20,
//                                 transition: {
//                                     duration: 0.15,
//                                     ease: 'easeInOut',
//                                 },
//                             }}
//                             layout
//                             className={`sm:w-4/5 flex justify-center items-center ${
//                                 displayedProjects.length % 2 !== 0 &&
//                                 index === displayedProjects.length - 1
//                                     ? 'col-span-2 sm:col-span-1 sm:justify-self-center sm:place-self-center w-1/5'
//                                     : 'col-span-1 sm:justify-center sm:justify-self-center place-self-center w-2/5'
//                             }`}
//                         >
//                             <ProjectCard
//                                 logo={project.logo}
//                                 logoAlt={project.logoAlt}
//                                 content={
//                                     <ModalContent
//                                         logo={project.content.logo}
//                                         logoAlt={project.content.logoAlt}
//                                         projectName={
//                                             project.content.projectName
//                                         }
//                                         icon={project.content.icon}
//                                         websiteLink={
//                                             project.content.websiteLink
//                                         }
//                                         gitHubLink={project.content.gitHubLink}
//                                         onClose={() => {}}
//                                     />
//                                 }
//                             />
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>
//             <div className="flex justify-center items center mt-2 mb-5 sm:mt-0">
//                 {projectsData.length > 6 && (
//                     <button
//                         className="cursor-pointer text-center mt-14 w-fit py-2 px-5 rounded-full border border-white hover:border-darkBlue/70 hover:text-darkBlue/70 transition-all duration-100 ease-linear"
//                         onClick={handleShowMore}
//                     >
//                         {showMore
//                             ? t('projects.button-show-less')
//                             : t('projects.button-show-more')}
//                     </button>
//                 )}
//             </div>
//         </section>
//     );
// }

// export default React.memo(LatestProjects);

// function LatestProjects() {
//     const { t } = useTranslation();
//     const isOdd = projectData.length % 2 !== 0;

//     return (
//         <section
//             id="projects"
//             className="flex flex-col justify-around mx-24 my-12 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4"
//             itemScope
//             itemType="https://schema.org/CreativeWork"
//         >
//             <h2 className="flex flex-row text-150 text-nowrap mt-4 mb-20 sm:my-6 pb-5 items-center w-full md:px-[8%] md:pb-2 md:mb-8 sm:text-145 xs:text-140 xs:pb-6">
//                 <span className="inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2"></span>
//                 {t('projects.title2')}
//                 <span className="inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2"></span>
//             </h2>
//             <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-20 gap-x-0 sm:gap-8 justify-items-center mt-1">
//                 {projectData.map((project, index) => (
//                     <div
//                         key={index}
//                         className={`sm:w-4/5 flex justify-center items-center ${isOdd && index === projectData.length - 1 ? 'col-span-2 sm:col-span-1 sm:justify-self-center sm:place-self-center w-1/5' : 'col-span-1 sm:justify-center sm:justify-self-center place-self-center w-2/5'}`}
//                     >
//                         <ProjectCard
//                             logo={project.logo}
//                             logoAlt={project.logoAlt}
//                             content={
//                                 <ModalContent
//                                     logo={project.content.logo}
//                                     logoAlt={project.content.logoAlt}
//                                     projectName={project.content.projectName}
//                                     icon={project.content.icon}
//                                     websiteLink={project.content.websiteLink}
//                                     gitHubLink={project.content.gitHubLink}
//                                     onClose={() => {}}
//                                 />
//                             }
//                         />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default React.memo(LatestProjects);

// <div
//     key={index}
//     // className={`${index === projectData.length - 1 ? 'col-span-2' : 'col-span-1'}`} custom-border  p-4 rounded-2xl
//     // className={`sm:w-4/5 flex justify-center items-center ${index === projectData.length - 1 ? 'col-span-2 sm:col-span-1 sm:justify-self-center sm:place-self-center w-1/5' : 'col-span-1 sm:justify-center sm:justify-self-center place-self-center w-2/5'}`}
//     // className={`sm:w-4/5 flex justify-center items-center ${isOdd && index === projectData.length - 1 ? 'col-span-2 sm:col-span-1 sm:justify-self-center sm:place-self-center' : 'col-span-1 sm:justify-center sm:justify-self-center place-self-center w-2/5'}`}
//     className={`sm:w-4/5 flex justify-center items-center ${isOdd && index === projectData.length - 1 ? 'col-span-2 sm:col-span-1 sm:justify-self-center sm:place-self-center w-1/5' : 'col-span-1 sm:justify-center sm:justify-self-center place-self-center w-2/5'}`}
// ></div>

// import { useTranslation } from 'react-i18next';
// // import { useInView } from 'react-intersection-observer';
// // import { motion } from 'framer-motion';
// import { FaGithub } from "react-icons/fa";
// import ProjectCard from '../ProjectCard'
// import ModalContent  from '../ModalContent'
// import logoPortfolio from '../../assets/projects/logo-Portfolio.png'
// import logoPortfoliov2 from '../../assets/projects/logo-Portfolio-v2.png'
// import logoBooki from '../../assets/projects/logo-Booki.png'
// import logoMonVieuxGrimoir from '../../assets/projects/logo-MonVieuxGrimoir.png'
// import logoKasa from '../../assets/projects/logo-Kasa.png'
// import logoNinaCarducci from '../../assets/projects/logo-NinaCarducci.png'
// import logoMenuMakerByQwenta from '../../assets/projects/logo-MenuMakerByQwenta.png'
// import logoSophieBluel from '../../assets/projects/logo-SophieBluel.png'

// // import { lazy, Suspense } from 'react'
// // const ModalContent = lazy(() => import ('../../components/ModalContent'))

// function LatestProjects() {
//     const { t } = useTranslation()
//     // const { ref, inView } = useInView();
//     // const [hasAnimated, setHasAnimated] = useState(false);
//     // useEffect(() => {
//     //     if (inView && !hasAnimated) {
//     //     setHasAnimated(true);
//     //     }
//     // }, [inView, hasAnimated]);

//     return (
//         <section id='projects' className='flex flex-col justify-around mx-24 my-12 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4' itemScope itemType='https://schema.org/CreativeWork'>
//             <h2 className='flex flex-row text-150 text-nowrap my-8 pb-5 items-center w-full md:px-[8%] md:pb-2 md:mb-4 sm:text-145 xs:text-140 xs:pb-6'>
//                 <span className='inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2'></span>
//                 {t('projects.title2')}
//                 <span className='inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2'></span>
//             </h2>
//             <div className='grid grid-cols-2 sm:grid-cols-1 gap-8'>
//                 <>
//                     <ProjectCard logo={logoPortfolio} logoAlt={'Portfolio'} content={
//                         <ModalContent logo={logoPortfoliov2} logoAlt={'Portfolio'} projectName={'my-portfolio'} icon={<FaGithub size="28" />} websiteLink={'#'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_8'} />
//                     }/>
//                 </>
//                 <>
//                     <ProjectCard logo={logoKasa} logoAlt={'Kasa'} content={
//                         <ModalContent logo={logoKasa} logoAlt={'Kasa'} projectName={'kasa'} icon={<FaGithub size="28" />} websiteLink={'https://kasa.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_6'} />
//                     }/>
//                 </>
//                 <>
//                     <ProjectCard logo={logoSophieBluel} logoAlt={'Sophie Bluel - Architecte d’intérieur'} content={
//                         <ModalContent logo={logoSophieBluel} logoAlt={'Sophie Bluel - Architecte d’intérieur'} projectName={'sophie-bluel'} icon={<FaGithub size="28" />} websiteLink={'https://sophie-bluel.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_3'} />
//                     }/>
//                 </>
//                 <>
//                     <ProjectCard logo={logoNinaCarducci} logoAlt={'Nina Carducci - Photographe'} content={
//                         <ModalContent logo={logoNinaCarducci} logoAlt={'Nina Carducci - Photographe'} projectName={'nina-carducci'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_5'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_5'} />
//                     }/>
//                 </>
//                 <>
//                     <ProjectCard logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} content={
//                         <ModalContent logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} projectName={'mon-vieux-grimoire'} icon={<FaGithub size="28" />} websiteLink={'https://mon-vieux-grimoir.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_7'} />
//                     }/>
//                 </>
//                 <>
//                     <ProjectCard logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} content={
//                         <ModalContent logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} projectName={'qwenta'} icon={<FaGithub size="28" />} websiteLink={'/Qwenta.zip'}  gitHubLink={''} />
//                     }/>
//                 </>
//                 <>
//                     <ProjectCard logo={logoBooki} logoAlt={'Booki'} content={
//                         <ModalContent logo={logoBooki} logoAlt={'Booki'} projectName={'booki'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_2'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_2'} />
//                     }/>
//                 </>
//             </div>
//       </section>
//     )
// }

// export default React.memo(LatestProjects);

// return (
//     <section id='projects' className='flex flex-col justify-around mx-24 my-12 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4' itemScope itemType='https://schema.org/CreativeWork'>
//         <h2 className='flex flex-row text-150 text-nowrap my-8 pb-5 items-center w-full md:px-[8%] md:pb-2 md:mb-4 sm:text-145 xs:text-140 xs:pb-6'>
//             <span className='inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2'></span>
//             {t('projects.title2')}
//             <span className='inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2'></span>
//         </h2>
//         <div className='grid grid-cols-3 gap-0 w-full px-9 my-5 lg:px-4 md:px-[3.5%] md:w-11/12 m-auto sm:px-2 sm:my-5 xs:mx-auto xs:my-0 xs:p-0'>
//             <div className='flex flex-col gap-16 sm:gap-9'>
//                 <motion.div className='flex justify-end h-4/6' ref={ref} animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
//                     <ProjectComponent logo={logoPortfolio} logoAlt={'Portfolio'} content={
//                         // <Suspense fallback={<div>Loading...</div>}>
//                             <ContentModal logo={logoPortfoliov2} logoAlt={'Portfolio'} projectName={'my-portfolio'} icon={<FaGithub size="28" />} websiteLink={'#'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_8'} />
//                         // </Suspense>
//                         }
//                     />
//                 </motion.div>
//                 <motion.div className='flex justify-start h-4/6' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
//                     <ProjectComponent logo={logoKasa} logoAlt={'Kasa'} content={
//                         // <Suspense fallback={<div>Loading...</div>}>
//                             <ContentModal logo={logoKasa} logoAlt={'Kasa'} projectName={'kasa'} icon={<FaGithub size="28" />} websiteLink={'https://kasa.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_6'} />
//                         // </Suspense>
//                         }
//                     />
//                 </motion.div>
//                 <motion.div className='flex justify-end h-4/6' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 160, opacity: 0 }} transition={{ duration: 1.15, ease: 'easeOut' }}>
//                     <ProjectComponent logo={logoSophieBluel} logoAlt={'Sophie Bluel - Architecte d’intérieur'} content={
//                         // <Suspense fallback={<div>Loading...</div>}>
//                             <ContentModal logo={logoSophieBluel} logoAlt={'SophieBluel - Architecte d’intérieur'} projectName={'sophie-bluel'} icon={<FaGithub size="28" />} websiteLink={'https://sophie-bluel.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_3'} />
//                         // </Suspense>
//                         }
//                     />
//                 </motion.div>
//             </div>
//             <motion.div className='flex items-center justify-center' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }}>
//                 <ProjectComponent logo={logoNinaCarducci} logoAlt={'Nina Carducci - Photographe'} content={
//                     // <Suspense fallback={<div>Loading...</div>}>
//                         <ContentModal logo={logoNinaCarducci} logoAlt={'NinaCarducci - Photographe'} projectName={'nina-carducci'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_5'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_5'} />
//                     // </Suspense>
//                     }
//                 />
//             </motion.div>
//             <div className='flex flex-col gap-12 sm:gap-9'>
//                 <motion.div className='flex justify-start h-4/6' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
//                     <ProjectComponent logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} content={
//                         // <Suspense fallback={<div>Loading...</div>}>
//                             <ContentModal logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} projectName={'mon-vieux-grimoire'} icon={<FaGithub size="28" />} websiteLink={'https://mon-vieux-grimoir.up.railway.app'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_7'} />
//                         // </Suspense>
//                         }
//                     />
//                 </motion.div>
//                 <motion.div className='flex justify-end h-4/6' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 120, opacity: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
//                     <ProjectComponent logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} content={
//                         // <Suspense fallback={<div>Loading...</div>}>
//                             <ContentModal logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} projectName={'qwenta'} icon={<FaGithub size="28" />} websiteLink={'/Qwenta.zip'}  gitHubLink={''} />
//                         // </Suspense>
//                         }
//                     />
//                 </motion.div>
//                 <motion.div className='flex justify-start h-4/6' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 160, opacity: 0 }} transition={{ duration: 1.3, ease: 'easeOut' }}>
//                     <ProjectComponent logo={logoBooki} logoAlt={'Booki'} content={
//                         // <Suspense fallback={<div>Loading...</div>}>
//                             <ContentModal logo={logoBooki} logoAlt={'Booki'} projectName={'booki'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_2'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_2'} />
//                         // </Suspense>
//                         }
//                     />
//                 </motion.div>
//             </div>
//         </div>
//   </section>
// )
