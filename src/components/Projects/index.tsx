import { useTranslation } from 'react-i18next';
import ProjectComponent from '../../components/ProjectComponent'
import ContentModal from '../../components/ContentModal'
import logoMyPortfolio from '../../assets/projects/logo-MyPortfolio.png'
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
        <section id="projects" className='flex flex-col justify-around mx-24 my-12 ' itemScope itemType="https://schema.org/CreativeWork">
            <h2 className='flex flex-row text-title mt-5 mb-8 pb-6 items-center w-full'>
                <span className='inline-block w-1/5 h-0.5 bg-color13 mr-6 rounded-full'></span>
                {t('projects.title2')}
                <span className='inline-block w-4/5 h-0.5 bg-color13 ml-6 rounded-full'></span>
            </h2>
            <motion.div className='grid grid-cols-3 gap-0 w-full text-color15 px-8 my-5' animate={hasAnimated  ? { y: 0, opacity: 1 } : { y: 170, opacity: 0.3 }} transition={{ duration: 0.7, ease: 'easeOut' }} >
                <div className='flex flex-col gap-12'>
                    <div className='flex justify-end h-4/6' ref={ref}>
                        <ProjectComponent logo={logoMyPortfolio} logoAlt={'My Portfolio'} content={
                            <ContentModal logo={logoMyPortfolio} logoAlt={'My Portfolio'} projectName={'my-portfolio'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_8'} />
                            }
                        />
                    </div>
                    <div className='flex justify-start h-4/6'>
                        <ProjectComponent logo={logoKasa} logoAlt={'Kasa'} content={
                            <ContentModal logo={logoKasa} logoAlt={'Kasa'} projectName={'kasa'} icon={<FaGithub size="28" />} websiteLink={'#'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_6'} />
                            }
                        />
                    </div>
                    <div className='flex justify-end h-4/6'>
                        <ProjectComponent logo={logoSophieBluel} logoAlt={'Sophie Bluel - Architecte d’intérieur'} content={
                            <ContentModal logo={logoSophieBluel} logoAlt={'SophieBluel - Architecte d’intérieur'} projectName={'sophie-bluel'} icon={<FaGithub size="28" />} websiteLink={'#'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_3'} />
                            }
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-12'>
                    <ProjectComponent logo={logoNinaCarducci} logoAlt={'Nina Carducci - Photographe'} content={
                        <ContentModal logo={logoNinaCarducci} logoAlt={'NinaCarducci - Photographe'} projectName={'nina-carducci'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_5'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_5'} />
                        }
                    />
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex justify-start h-4/6'>
                        <ProjectComponent logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} content={
                            <ContentModal logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} projectName={'mon-vieux-grimoire'} icon={<FaGithub size="28" />} websiteLink={'#'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_7'} />
                            }
                        />
                    </div>
                    <div className='flex justify-end h-4/6'>
                        <ProjectComponent logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} content={
                            <ContentModal logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} projectName={'qwenta'} icon={<FaGithub size="28" />} websiteLink={'/Qwenta.zip'}  gitHubLink={''} />
                            }
                        />
                    </div>
                    <div className='flex justify-start h-4/6'>
                        <ProjectComponent logo={logoBooki} logoAlt={'Booki'} content={
                            <ContentModal logo={logoBooki} logoAlt={'Booki'} projectName={'booki'} icon={<FaGithub size="28" />} websiteLink={'https://matiaslll.github.io/OpenClassrooms_Project_2'} gitHubLink={'https://github.com/MatiasLLL/OpenClassrooms_Project_2'} />
                            }
                        />
                    </div>
                </div>
            </motion.div>
      </section>
    )
}

export default Projects



// <div className="bg-color13 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"></div>



// <div className='flex flex-col'>
//     <div className="flex">
//         <div className="w-2/3">
//             <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">OpenClassrooms - Project 2</Dialog.Title>
//             <p className="text-sm text-gray-500">
//             Are you sure you want to deactivate your account? All of your data will be permanently
//             removed. This action cannot be undone.
//             </p>
//         </div>
//         <div className="w-1/3">
//             <img className='px-3 max-h-11 mt-px' src={logoBooki} alt={'Booki'} />
//             <p className='italic'>lien du site</p>
//         </div>
//     </div>
//     <div className='flex'>
//         ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
//         {/* <a href={#} className='flex flex-row items-center text-link sm:text-active hover:text-color13/60'>
//             <i className='mr-3'>{icon}</i>
//             <span className='text-center cursor-pointer'>{text}</span>
//         </a> */}
//     </div>
// </div>




// <Dialog.Panel className="relative bg-color13 justify-center items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//     <div className="bg-color13 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//     <div className="sm:flex sm:items-start">
//         <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//         <Dialog.Title as="div" className="text-base font-semibold leading-6 text-gray-900">
//         {modalContent}
//         </Dialog.Title>
//         <div className="mt-2">
//             <p className="text-sm text-gray-500">
//             Are you sure you want to deactivate your account? All of your data will be permanently
//             removed. This action cannot be undone.
//             </p>
//         </div>
//         </div>
//     </div>
//     </div>
//     <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//     <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => setOpen(false)} >
//         Deactivate
//     </button>
//     <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setOpen(false)} ref={cancelButtonRef} >
//         Cancel
//     </button>
//     </div>
// </Dialog.Panel>