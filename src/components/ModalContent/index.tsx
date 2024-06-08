import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@headlessui/react';
import { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface ModalContentProps {
    logo: string;
    logoAlt: string;
    projectName: string;
    websiteLink: string;
    gitHubLink: string;
    icon: ReactElement<IconType>;
    onClose: () => void;
}

function ModalContent({
    logo,
    logoAlt,
    projectName,
    websiteLink,
    gitHubLink,
    icon,
    onClose,
}: ModalContentProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col h-full px-10 pt-7 pb-4 lg:px-7 lg:pt-5 lg:pb-3 sm:pt-4 xs:px-5 justify-center text-darkGrey xs:pt-3 z-50">
            <div className="flex h-4/5 xs:flex-wrap">
                {websiteLink === '' &&
                gitHubLink === 'https://github.com/MatiasLLL/Flash_Loan' ? (
                    <div className="w-full pb-0.5 flex flex-col justify-start items-center">
                        {/* <Dialog.Title
                            as="h3"
                            className="font-medium mb-2 md:mb-1 md:text-90 xs:text-90 xs:text-center xs:mt-0.5 xs:mb-[0.38rem]"
                        >
                            {t(`projects.${projectName}.title`)}
                        </Dialog.Title> */}
                        <img
                            className="h-[10%] w-fit object-contain my-2 sm:h-[6%] sm:p-0 sm:my-1 xs:h-[5%] xs:my-px"
                            src={logo}
                            alt={logoAlt}
                        />
                        <p
                            className="lg:text-95 md:text-90 p-5 sm:p-2 leading-relaxed lg:leading-6 sm:leading-[1.45rem] xs:leading-[1.35rem] xs:text-85 xs:mr-0 sm:mt-px"
                            itemProp="description"
                        >
                            {t(`projects.${projectName}.description`)}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="w-2/3 md:w-[70%] xs:w-full pb-0.5 m-2 sm:m-1 pl-1">
                            <Dialog.Title
                                as="h3"
                                className="font-medium mb-[0.8rem] pl-2 md:mb-1 md:text-90 xs:text-95 xs:text-center xs:mt-px xs:mb-[0.28rem]"
                            >
                                {t(`projects.${projectName}.title`)}
                            </Dialog.Title>
                            <p
                                className="text-105 lg:text-95 md:text-90 mr-8 leading-7 lg:leading-6 sm:text-85 sm:leading-[1.35rem] p-2 sm:pb-0 sm:pt-1 xs:leading-5 xs:mr-0"
                                itemProp="description"
                            >
                                {t(`projects.${projectName}.description`)}
                            </p>
                        </div>
                        {websiteLink === '#' && gitHubLink !== '' ? (
                            <a
                                href={websiteLink}
                                className="w-1/3 md:w-[30%] outline-none flex flex-col items-center xs:w-full xs:mx-12 xs:my-4"
                                onClick={onClose}
                            >
                                <img
                                    className="px-3 mt-1 mb-3 md:px-0 md:mb-2 md:mt-1 max-h-[47px] max-w-[190px] md:max-w-[150px] md:max-h-[35px]"
                                    src={logo}
                                    alt={logoAlt}
                                />
                                <p className="italic text-95 lg:text-90 text-center mx-2 md:mx-auto sm:text-85 sm:pt-0.5">
                                    {t(`projects.${projectName}.website-link`)}
                                </p>
                            </a>
                        ) : (
                            <>
                                {websiteLink !== '' && gitHubLink !== '' ? (
                                    <a
                                        href={websiteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-1/3 md:w-[30%] outline-none flex flex-col items-center xs:w-full xs:mx-12 xs:my-3"
                                        itemProp="url"
                                        style={
                                            logoAlt === 'Booki'
                                                ? { margin: '0px' }
                                                : {}
                                        }
                                    >
                                        <img
                                            className="px-3 mt-1 mb-3 md:px-0 md:mb-2 md:mt-1 max-h-[47px] max-w-[190px] md:max-w-[160px] md:max-h-[37px]"
                                            src={logo}
                                            alt={logoAlt}
                                            style={
                                                logoAlt === 'SpaceDolphin'
                                                    ? { maxHeight: '65px' }
                                                    : logoAlt === 'Booki'
                                                      ? { maxHeight: '33px' }
                                                      : {}
                                            }
                                        />
                                        <p className="italic text-95 lg:text-90 text-center mx-2 md:mx-auto sm:text-85 sm:pt-0.5">
                                            {t(
                                                `projects.${projectName}.website-link`
                                            )}
                                        </p>
                                    </a>
                                ) : (
                                    <a
                                        href={websiteLink}
                                        className="w-1/3 md:w-[30%] outline-none flex flex-col items-center xs:w-full xs:mx-12 xs:my-4"
                                        itemProp="url"
                                        download
                                    >
                                        <div className="px-3 mt-1 mb-3 md:px-0 md:mb-2 md:mt-1 max-h-[47px] max-w-[190px] md:max-w-[150px] md:max-h-[37px]">
                                            <img
                                                className="h-full w-full object-contain"
                                                src={logo}
                                                alt={logoAlt}
                                            />
                                        </div>
                                        <p className="italic text-95 lg:text-90 text-center mx-2 md:mx-auto sm:text-85 sm:pt-0.5">
                                            {t(
                                                `projects.${projectName}.website-link`
                                            )}
                                        </p>
                                    </a>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
            <div className="flex flex-col justify-around items-center h-[18%] sm:h-[14%] mt-2">
                <span className="inline-block w-full h-0.5 bg-gradient-to-r from-darkBlue/40 to-darkBlue/70 rounded-full"></span>
                {gitHubLink !== '' && (
                    <a
                        href={gitHubLink}
                        target="_blank"
                        className="flex flex-row items-center justify-center mt-2 sm:mt-4 outline-none pt-1"
                        itemProp="url"
                    >
                        <i className="mr-5">{icon}</i>
                        <span className="text-center cursor-pointer text-115 lg:text-105 sm:text-95 xs:text-90">
                            {t('projects.github-link')}
                        </span>
                    </a>
                )}
            </div>
        </div>
    );
}

export default React.memo(ModalContent);

// {/* <p className='lg:text-95 md:text-90 mr-8 leading-relaxed lg:leading-6 sm:text-85 sm:leading-[1.4rem] xs:leading-5 xs:mr-0'>
// {t(`projects.${projectName}.difficulties`)}
// </p>
// <p className='lg:text-95 md:text-90 mr-8 mb-3 leading-relaxed lg:leading-6 sm:text-85 sm:leading-[1.4rem] xs:leading-5 xs:mr-0 xs:mb-0'>
// {t(`projects.${projectName}.technologies`)}
// </p> */}

// return (
//     <div className="flex flex-col h-full px-10 pt-7 pb-4 lg:px-7 lg:pt-5 lg:pb-3 sm:pt-4 xs:px-5 justify-center text-darkGrey xs:pt-3 z-50">
//         <div className="flex h-4/5 xs:flex-wrap">
//             <div className="w-2/3 md:w-[70%] xs:w-full pb-0.5">
//                 <Dialog.Title
//                     as="h3"
//                     className="font-medium mb-2 md:mb-1 md:text-90 xs:text-90 xs:text-center xs:mt-0.5 xs:mb-[0.38rem]"
//                 >
//                     {t(`projects.${projectName}.title`)}
//                 </Dialog.Title>
//                 <p
//                     className="lg:text-95 md:text-90 mr-8 leading-relaxed lg:leading-6 sm:text-85 sm:leading-[1.35rem] xs:leading-5 xs:mr-0"
//                     itemProp="description"
//                 >
//                     {t(`projects.${projectName}.description`)}
//                 </p>
//             </div>
//             {websiteLink === '#' && gitHubLink !== '' ? (
//                 <a
//                     href={websiteLink}
//                     className="w-1/3 md:w-[30%] outline-none flex flex-col items-center xs:w-full xs:mx-12 xs:my-4"
//                     onClick={onClose}
//                 >
//                     <img
//                         className="px-3 mt-1 mb-3 md:px-0 md:mb-2 md:mt-1 max-h-[47px] max-w-[190px] md:max-w-[150px] md:max-h-[35px]"
//                         src={logo}
//                         alt={logoAlt}
//                     />
//                     <p className="italic text-95 lg:text-90 text-center mx-2 md:mx-auto sm:text-85 sm:pt-0.5">
//                         {t(`projects.${projectName}.website-link`)}
//                     </p>
//                 </a>
//             ) : (
//                 <>
//                     {websiteLink !== '' && gitHubLink !== '' ? (
//                         <a
//                             href={websiteLink}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="w-1/3 md:w-[30%] outline-none flex flex-col items-center xs:w-full xs:mx-12 xs:my-4"
//                             itemProp="url"
//                         >
//                             <img
//                                 className="px-3 mt-1 mb-3 md:px-0 md:mb-2 md:mt-1 max-h-[47px] max-w-[190px] md:max-w-[160px] md:max-h-[37px]"
//                                 src={logo}
//                                 alt={logoAlt}
//                                 style={
//                                     logoAlt === 'SpaceDolphin'
//                                         ? {
//                                               //   padding: '0%',
//                                               //   margin: '0%',
//                                               maxHeight: '65px',
//                                           }
//                                         : {}
//                                 }
//                             />
//                             <p className="italic text-95 lg:text-90 text-center mx-2 md:mx-auto sm:text-85 sm:pt-0.5">
//                                 {t(`projects.${projectName}.website-link`)}
//                             </p>
//                         </a>
//                     ) : (
//                         <a
//                             href={websiteLink}
//                             className="w-1/3 md:w-[30%] outline-none flex flex-col items-center xs:w-full xs:mx-12 xs:my-4"
//                             itemProp="url"
//                             download
//                         >
//                             <div className="px-3 mt-1 mb-3 md:px-0 md:mb-2 md:mt-1 max-h-[47px] max-w-[190px] md:max-w-[150px] md:max-h-[37px]">
//                                 <img
//                                     className="h-full w-full object-contain"
//                                     src={logo}
//                                     alt={logoAlt}
//                                 />
//                             </div>
//                             <p className="italic text-95 lg:text-90 text-center mx-2 md:mx-auto sm:text-85 sm:pt-0.5">
//                                 {t(`projects.${projectName}.website-link`)}
//                             </p>
//                         </a>
//                     )}
//                 </>
//             )}
//         </div>
//         <div className="flex flex-col justify-around items-center h-1/5">
//             <span className="inline-block w-full h-0.5 bg-gradient-to-r from-darkBlue/40 to-darkBlue/70 rounded-full"></span>
//             {gitHubLink !== '' && (
//                 <a
//                     href={gitHubLink}
//                     target="_blank"
//                     className="flex flex-row items-center mt-2 outline-none pt-1"
//                     itemProp="url"
//                 >
//                     <i className="mr-5">{icon}</i>
//                     <span className="text-center cursor-pointer text-115 lg:text-105 sm:text-95 xs:text-90">
//                         {t('projects.github-link')}
//                     </span>
//                 </a>
//             )}
//         </div>
//     </div>
// );
