import { ReactElement } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    const { t } = useTranslation()
    type LinkFooterProps = {
        icon: ReactElement<IconType>;
        text: string;
        link: string;
    }
    const LinkFooter = ({icon, text, link}: LinkFooterProps) => (
        <a href={link} target='_blank' className='flex flex-row items-center text-100 md:text-90 sm:text-85 xs:text-80 hover:text-white/70'>
            <i className='mr-2 md:scale-95'>{icon}</i>
            <span className='text-center cursor-pointer'>{text}</span>
        </a>
    )

    return (
        <footer id='contact' className='flex flex-col justify-center mx-24 lg:mx-[5%] pt-8 md:mx-[5%] sm:mx-6 xs:mx-4' itemScope itemType='https://schema.org/WPFooter' >
            <span className='border-t border-white rounded-full mb-4 lg:mb-3 sm:mb-1 sm:mt-3'></span>
            <div className='justify-between overflow-hidden px-0 py-10 lg:py-7 sm:py-7 xs:pt-6'>
                <div className='grid grid-cols-8 lg:grid-cols-3 mx-0 columns-3 -mb-6 pb-8 text-center justify-around lg:pb-5 md:pb-4 sm:flex sm:flex-wrap sm:justify-center sm:pb-3' aria-label='Footer'>
                    <div className='flex col-span-3 lg:col-span-1 justify-around items-center pl-1 pr-2 lg:px-0 sm:order-2 sm:pl-8 xs:pl-4'>
                        <Link className='text-100 hover:text-white/70 text-center md:text-90 sm:text-85 xs:text-80' to='/legalnotice' >{t('footer.legal-notice')}</Link>
                    </div>
                    <div className='flex col-span-2 lg:col-span-1 justify-center gap-10 lg:gap-8 md:gap-4 sm:order-1 sm:w-full sm:px-[10%] sm:gap-20 sm:mx-0 sm:pb-4 xs:gap-14'>
                        <LinkFooter link={'https://github.com/MatiasLLL'} icon={<FaGithub size='28' />} text={'GitHub'} />
                        <LinkFooter link={'https://linkedin.com/in/matias-larralde'} icon={<FaLinkedin size='28' />} text={'Linkedin'} />
                    </div>
                    <div className='flex col-span-3 lg:col-span-1 justify-around items-center pl-2 pr-1 lg:px-0 md:pl-2 sm:order-3 sm:pl-16 sm:min-w-[12rem] xs:pl-8 xs:min-w-[12rem]'>
                        <Link className='text-100 hover:text-white/70 text-center md:text-90 sm:text-85 xs:text-80' to="/privacypolicy" >{t('footer.privacy-policy')}</Link>
                    </div>
                </div>
                <p className='mt-9 pb-2 text-center text-90 leading-5 md:text-85 sm:text-80 sm:mt-8 sm:pb-0 xs:text-75'>{t('footer.copyright')}</p>
            </div>
        </footer>
    )
}

export default Footer
