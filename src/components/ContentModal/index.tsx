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

function ContentModal({ logo, logoAlt, projectName, icon, websiteLink, gitHubLink }: ContentModalProps) {
    const { t } = useTranslation()

    return (
    <div className='flex flex-col'>
        <div className="flex">
            <div className="w-2/3">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">{t(`projects.${projectName}.title`)}</Dialog.Title>
                <p className="text-sm text-gray-500">
                {t(`projects.${projectName}.description`)}
                </p>
            </div>
            <a href={websiteLink} className="w-1/3">
                <img className='px-3 max-h-11 mt-px' src={logo} alt={logoAlt} />
                <p className='italic'>{t(`projects.${projectName}.website-link`)}</p>
            </a>
            </div>
        <div className='flex'>
        <a href={gitHubLink} className='flex flex-row items-center text-link sm:text-active hover:text-color13/60'>
            <i className='mr-3'>{icon}</i>
            <span className='text-center cursor-pointer'>{t('projects.github-link')}</span>
        </a>
        </div>
    </div>
    )
}

export default ContentModal;