import { useTranslation } from 'react-i18next';
import { Dialog } from '@headlessui/react'
import { ReactElement } from 'react';
import { IconType } from 'react-icons';

type ContentModalProps = {
    logo: string;
    logoAlt: string;
    projectName: string;
    websiteLink: string;
    gitHubLink: string;
    icon: ReactElement<IconType>;
}

function ContentModal({ logo, logoAlt, projectName, icon, websiteLink, gitHubLink}: ContentModalProps) {
    const { t } = useTranslation()
    
    return (
        <div className='flex flex-col h-full px-10 pt-10 pb-4 justify-center text-color18'>
            <div className="flex h-4/5">
                <div className="w-2/3">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 mb-3">{t(`projects.${projectName}.title`)}</Dialog.Title>
                    <p className="text-sm mr-8 leading-relaxed">
                    {t(`projects.${projectName}.description`)}
                    </p>
                    <p className="text-sm mr-8 leading-relaxed">
                    {t(`projects.${projectName}.difficulties`)}
                    </p>
                    <p className="text-sm mr-8 mb-3 leading-relaxed">
                    {t(`projects.${projectName}.technologies`)}
                    </p>
                </div>
                {websiteLink === '' && gitHubLink !== '' ? (
                    <a href="" className="w-1/3 outline-none flex flex-col items-center">
                        <img className="px-3 max-h-11 mt-px mb-3" src={logo} alt={logoAlt} />
                        <p className="italic text-website text-center mx-2">{t(`projects.${projectName}.website-link`)}</p>
                    </a>
                ) : (
                <>
                {websiteLink !== '' && gitHubLink !== '' ? (
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="w-1/3 outline-none flex flex-col items-center" >
                        <img className="px-3 max-h-11 mt-px mb-3" src={logo} alt={logoAlt} />
                        <p className="italic text-website text-center mx-2">{t(`projects.${projectName}.website-link`)}</p>
                    </a>
                ) : (
                    <a href={websiteLink} className="w-1/3 outline-none flex flex-col items-center" download >
                        <img className="px-3 max-h-11 mt-px mb-3" src={logo} alt={logoAlt} />
                        <p className="italic text-website text-center mx-2">{t(`projects.${projectName}.website-link`)}</p>
                    </a>
                )}
                </>
                )}
            </div>
            <div className='flex flex-col justify-around items-center h-1/5'>
                <span className='inline-block w-full h-0.5 bg-gradient-to-r from-color17/40 to-color17/70 rounded-full'></span>
                {gitHubLink !== '' && (
                    <a href={gitHubLink} target="_blank" className='flex flex-row items-center mt-2 text-link sm:text-active outline-none pt-0.5'>
                        <i className='mr-5'>{icon}</i>
                        <span className='text-center cursor-pointer'>{t('projects.github-link')}</span>
                    </a>
                )}
            </div>
        </div>
    )
}

export default ContentModal;

// Remove <p> l-26 to 31 - after Diploma