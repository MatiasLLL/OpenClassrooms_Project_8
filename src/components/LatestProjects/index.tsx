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
    const displayedProjects = showMore
        ? projectsData
        : projectsData.slice(0, 6);

    const handleShowMore = () => {
        setShowMore(!showMore);
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
                        className="cursor-pointer text-center mt-14 w-fit py-2 px-5 rounded-full border border-white text-white transition-all duration-100 ease-linear minlg:hover:border-darkBlue/70 minlg:hover:text-darkBlue/70"
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

// const logoMap: { [key: string]: string } = {
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

// function LatestProjects() {
//     const { t } = useTranslation();
//     const [showMore, setShowMore] = useState(false);
//     // const [isActive, setIsActive] = useState(false);
//     const displayedProjects = showMore
//         ? projectsData
//         : projectsData.slice(0, 6);

//     const handleShowMore = () => {
//         setShowMore(!showMore);
//         // setIsActive(true);
//         // setTimeout(() => setIsActive(false), 50);
//         // setTimeout(() => setIsActive(false), 200);
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
//                                 logo={logoMap[project.logo]}
//                                 logoAlt={project.logoAlt}
//                                 content={
//                                     <ModalContent
//                                         logo={logoMap[project.content.logo]}
//                                         logoAlt={project.content.logoAlt}
//                                         projectName={
//                                             project.content.projectName
//                                         }
//                                         icon={<FaGithub size="28" />}
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
//                         // className={`cursor-pointer text-center mt-14 w-fit py-2 px-5 rounded-full border border-white text-white transition-all duration-100 ease-linear ${isActive ? 'hover:border-darkBlue/70 hover:text-darkBlue/70 border-darkBlue/70 text-darkBlue/70' : 'hover:border-darkBlue/70 hover:text-darkBlue/70'}`}

//                         className="cursor-pointer text-center mt-14 w-fit py-2 px-5 rounded-full border border-white text-white transition-all duration-100 ease-linear minlg:hover:border-darkBlue/70 minlg:hover:text-darkBlue/70"
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
