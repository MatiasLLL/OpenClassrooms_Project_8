import React, { Fragment, useRef, useState, useCallback } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ProjectsCardProps {
    logo: string;
    logoAlt: string;
    content: React.ReactNode;
}

function ProjectCard({ logo, logoAlt, content }: ProjectsCardProps) {
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    // const handleShowModal = (content: React.ReactNode) => {
    //     setModalContent(content)
    //     setOpen(!open);
    // }
    const handleShowModal = useCallback(
        (content: React.ReactNode) => {
            setModalContent(content);
            setOpen(!open);
        },
        [open]
    );

    return (
        <>
            <div
                className="cursor-pointer sm:justify-center sm:place-self-center h-[6.5rem] rounded-xl transition-all flex justify-center items-center hover:scale-105 md:h-[5.5rem] sm:w-2/3 sm:h-[5.2rem] xs:w-3/4"
                itemProp="name"
                role="button"
                onClick={() => handleShowModal(content)}
            >
                <div className="flex justify-center items-center sm:place-self-center px-0 w-full h-full lg:w-[90%] lg:h-[90%] md:w-[80%] md:h-[80%] sm:w-[70%] sm:h-[70%] xs:w-[60%] xs:h-[60%]">
                    <img
                        className="h-full w-full object-contain"
                        src={logo}
                        alt={logoAlt}
                        style={
                            logoAlt === 'Kasa' ||
                            logoAlt === 'Booki' ||
                            logoAlt === 'Menu Maker by Qwenta'
                                ? { paddingInline: '6.5%' }
                                : logoAlt === 'Portfolio'
                                  ? { paddingInline: '11%' }
                                  : {}
                        }
                    />
                </div>
            </div>
            {open && (
                <Transition.Root show={open} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        initialFocus={cancelButtonRef}
                        onClose={() => setOpen(false)}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex bg-gradient-to-l from-darkBlue/30 to-darkBlue/50 min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative w-1/2 h-96 justify-center items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all xl:w-7/12 lg:w-2/3 lg:min-h-fit lg:mb-20 md:w-3/4 sm:w-5/6">
                                        {React.cloneElement(
                                            modalContent as React.ReactElement<any>,
                                            { onClose: () => setOpen(false) }
                                        )}
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            )}
        </>
    );
}

export default React.memo(ProjectCard);

// <Dialog.Panel className="relative w-1/2 h-96 justify-center items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all xl:w-7/12 lg:w-2/3 lg:min-h-fit lg:mb-20 md:w-3/4 sm:w-5/6">
//     {modalContent}
// </Dialog.Panel>
