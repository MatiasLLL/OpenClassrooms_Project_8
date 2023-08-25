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
        <a href={link} target="_blank" className='flex flex-row items-center text-100 sm:text-active hover:text-color13/70'>
            <i className='mr-2'>{icon}</i>
            <span className='text-center cursor-pointer'>{text}</span>
        </a>
    )

    return (
        <footer id='contact' className='flex flex-col justify-center mx-24 pt-14 sm:mx-8' itemScope itemType="https://schema.org/WPFooter">
            <span className='border-t border-color13 rounded-full mb-4'></span>
            <div className="justify-between overflow-hidden px-0 py-10 sm:py-24 lg:px-8">
                <div className="grid grid-cols-8 mx-0 columns-3 -mb-6 pb-8 text-center sm:flex justify-around sm:justify-center sm:space-x-12" aria-label="Footer">
                    <div className="flex col-span-3 justify-around items-center pl-1 pr-2">
                        <Link className='text-100 hover:text-color13/70 text-center' to="/legalnotice" >{t('footer.legal-notice')}</Link>
                        <Link className='text-100 hover:text-color13/70 text-center' to="/privacypolicy" >{t('footer.privacy-policy')}</Link>
                    </div>
                    <div className="flex col-span-2 justify-center gap-7">
                        <LinkFooter link={'https://github.com/MatiasLLL'} icon={<FaGithub size="28" />} text={'GitHub'} />
                        <LinkFooter link={'https://linkedin.com/in/matias-larralde'} icon={<FaLinkedin size="28" />} text={'Linkedin'} />
                    </div>
                    <a href="mailto:matias.larralde97@gmail.com" className="col-span-3 pr-5 text-100 flex justify-end leading-6 hover:text-color13/70">matias.larralde97@gmail.com</a>
                </div>
                <p className="mt-9 pb-2 text-center text-90 leading-5 text-gray-500">{t('footer.copyright')}</p>
            </div>
        </footer>
    )
}

export default Footer



// Footer V1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// <footer id='contact' className='flex flex-col justify-start mx-24 pt-14 sm:mx-8'>
//     <span className='border-t border-color13 rounded-full mb-4'></span>
//     <div className='flex flex-row justify-between sm:justify-around my-7 w-3/4 sm:w-full'>
//         <h2 className='text-title sm:mr-0 sm:text-link sm:hidden'>{t('footer.title')}</h2>
//         <LinkFooter link={'https://linkedin.com/in/matias-larralde'} icon={<FaLinkedin size="28" />} text={'Linkedin'} />
//         <LinkFooter link={'https://github.com/MatiasLLL'} icon={<FaGithub size="28" />} text={'GitHub'} />
//     </div>
//     <div className='flex flex-col justify-between items-center ml-10 mt-1 mb-6 sm:mb-9 lg:ml-0'>
//         <p className='mb-5'>{t('footer.copyright')}</p>
//         <div className='flex flex-row justify-around w-1/2 mt-2 mb-5'>
//             <Link className='' to="/legalnotice" >{t('footer.legal-notice')}</Link>
//             <Link className='' to="/privacypolicy" >{t('footer.privacy-policy')}</Link>
//         </div>
//     </div>
// </footer>





// Footer V2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import { ReactElement } from 'react';
// import { Link } from 'react-router-dom'
// import { useTranslation } from 'react-i18next';
// import { IconType } from 'react-icons';
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// function Footer() {
//     const { t } = useTranslation()
//     type LinkFooterProps = {
//         icon: ReactElement<IconType>;
//         text: string;
//         link: string;
//     }
//     const LinkFooter = ({icon, text, link}: LinkFooterProps) => (
//         <a href={link} target="_blank" className='flex flex-row items-center text-skills sm:text-active hover:text-color13/70'>
//             <i className='sm:mr-3'>{icon}</i>
//             <span className='text-center cursor-pointer hidden'>{text}</span>
//         </a>
//     )

//     return (
//         <footer id='contact' className='flex flex-col justify-center mx-24 pt-14 sm:mx-8'>
//             <span className='border-t border-color13 rounded-full mb-4'></span>
//             <div className="mx-auto max-w-7xl w-3/5 justify-center overflow-hidden px-6 py-10 sm:py-24 lg:px-8">
//                 <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
//                     <div className="pb-6 text-center">
//                         <Link className='text-skills hover:text-color13/70' to="/legalnotice" >{t('footer.legal-notice')}</Link>
//                     </div>
//                     <div className="pb-6 text-center">
//                         <Link className='text-skills hover:text-color13/70' to="/privacypolicy" >{t('footer.privacy-policy')}</Link>
//                     </div>
//                 </nav>
//                 <div className="mt-9 flex justify-center flex-row items-center gap-11">
//                     <LinkFooter link={'https://github.com/MatiasLLL'} icon={<FaGithub size="28" />} text={'GitHub'} />
//                     <div className="flex items-center text-center">
//                         <a href="mailto:matias.larralde97@gmail.com" className="text-90 text-center leading-6 hover:text-color13/70">matias.larralde97@gmail.com</a>
//                     </div>
//                     <LinkFooter link={'https://linkedin.com/in/matias-larralde'} icon={<FaLinkedin size="28" />} text={'Linkedin'} />
//                 </div>
//                 <p className="mt-9 pb-2 text-center text-80 leading-5 text-gray-500">{t('footer.copyright')}</p>
//             </div>
//         </footer>
//     )
// }

// export default Footer
