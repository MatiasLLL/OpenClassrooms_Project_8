import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next';
import logoMyPortfolio from '../../assets/logo-MyPortfolio.png'
import logoBooki from '../../assets/logo-Booki.png'
import logoMonVieuxGrimoir from '../../assets/logo-MonVieuxGrimoir.png'
import logoKasa from '../../assets/logo-Kasa.png'
import logoNinaCarducci from '../../assets/logo-NinaCarducci.png'
import logoMenuMakerByQwenta from '../../assets/logo-MenuMakerByQwenta.png'
import logoSophieBluel from '../../assets/logo-SophieBluel.png'
import ContentModal from '../../components/ContentModal'
import { FaGithub } from "react-icons/fa";
// import Modal from '../../components/Modal'

function Projects() {
    const { t } = useTranslation()
    type ProjectsCardProps = {
        logo: string;
        logoAlt: string;
        content: React.ReactNode;
    }
    // const [showModal, setShowModal] = useState(false)
    // const handleShowModal = () => {
    //     setShowModal(!showModal);
    // }
    // function closeModal() {
    //     setShowModal(false);
    // }
    const [open, setOpen] = useState(false)
    const [modalContent, setModalContent] = useState<React.ReactNode>(null)
    const handleShowModal = (content: React.ReactNode) => {
        setModalContent(content)
        setOpen(!open);
    }
    const cancelButtonRef = useRef(null)
    const ProjectsCard = ({logo, logoAlt, content}: ProjectsCardProps) => (
        <button className='cursor-pointer rounded-full h-[6.5rem] w-[70%] bg-color13 flex justify-center items-center shadow-inner shadow-color17 text-link sm:text-active hover:text-color13/60' onClick={() => handleShowModal(content)}>
            <img className='px-3 max-h-11 mt-px' src={logo} alt={logoAlt} style={logoAlt === 'Kasa' ? { marginTop: '0.35rem' } : logoAlt === 'Booki' ? { marginTop: '0.25rem' } : logoAlt === 'Sophie Bluel - Architecte d’intérieur' ? { paddingLeft: '1.1rem', paddingRight: '1.1rem', marginTop: '0.3rem', } : {}}/>
        </button>
    )

    return (
        <section id="projects" className='flex flex-col justify-around mx-24 my-12 '>
            <h2 className='flex flex-row text-title my-8 pb-6 items-center w-full'>
                <span className='inline-block w-1/5 h-0.5 bg-color13 mr-6 rounded-full'></span>
                {t('projects.title2')}
                <span className='inline-block w-4/5 h-0.5 bg-color13 ml-6 rounded-full'></span>
            </h2>
            <div className='grid grid-cols-3 gap-0 w-full h-96 text-color15 px-8 my-5'>
                <div className='flex flex-col gap-12'>
                    <div className='flex justify-end h-4/6'>
                        <ProjectsCard logo={logoMyPortfolio} logoAlt={'My Portfolio'} content={
                            <ContentModal logo={logoMyPortfolio} logoAlt={'My Portfolio'} projectName={'my-portfolio'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={''} />
                            }
                        />
                    </div>
                    <div className='flex justify-start h-4/6'>
                        <ProjectsCard logo={logoKasa} logoAlt={'Kasa'} content={
                            <ContentModal logo={logoKasa} logoAlt={'Kasa'} projectName={'kasa'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={''} />
                            }
                        />
                    </div>
                    <div className='flex justify-end h-4/6'>
                        <ProjectsCard logo={logoSophieBluel} logoAlt={'Sophie Bluel - Architecte d’intérieur'} content={
                            <ContentModal logo={logoSophieBluel} logoAlt={'SophieBluel - Architecte d’intérieur'} projectName={'sophie-bluel'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={''} />
                            }
                        />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-12'>
                    <ProjectsCard logo={logoNinaCarducci} logoAlt={'Nina Carducci - Photographe'} content={
                        <ContentModal logo={logoNinaCarducci} logoAlt={'NinaCarducci - Photographe'} projectName={'nina-carducci'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={''} />
                        }
                    />
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex justify-start h-4/6'>
                        <ProjectsCard logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} content={
                            <ContentModal logo={logoMonVieuxGrimoir} logoAlt={'Mon Vieux Grimoir'} projectName={'mon-vieux-grimoire'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={''} />
                            }
                        />
                    </div>
                    <div className='flex justify-end h-4/6'>
                        <ProjectsCard logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} content={
                            <ContentModal logo={logoMenuMakerByQwenta} logoAlt={'Menu Maker by Qwenta'} projectName={'qwenta'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={''} />
                            }
                        />
                    </div>
                    <div className='flex justify-start h-4/6'>
                        <ProjectsCard logo={logoBooki} logoAlt={'Booki'} content={
                            <ContentModal logo={logoBooki} logoAlt={'Booki'} projectName={'booki'} icon={<FaGithub size="28" />} websiteLink={''} gitHubLink={''} />
                            }
                        />
                    </div>
                </div>
            </div>
            {open && 
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleShowModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex bg-gradient-to-r from-color13/30 to-color17/20 min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
                        <Dialog.Panel className="relative bg-color13 justify-center items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            {modalContent}
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
            }
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