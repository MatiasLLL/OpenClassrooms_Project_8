import { ReactElement, useState } from 'react';
import { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    const { t } = useTranslation()
    type LinkFooterProps = {
        icon: ReactElement<IconType>;
        text: string;
        link: string;
    }
    const LinkFooter = ({icon, text, link}: LinkFooterProps) => (
        <a href={link} className='flex flex-row items-center text-link sm:text-active hover:text-color1'>
            <i className='mr-3'>{icon}</i>
            <span className='text-color9 text-center cursor-pointer'>{text}</span>
        </a>
    )
    const [isOpen, setIsOpen] = useState(false)
    const [Open, setOpen] = useState(false)
    // let toggleClassCheck = isOpen ? ' open' : ' close'
    // const scrollToBottom = (event: React.MouseEvent<HTMLAnchorElement>) => {
    //     event.preventDefault();
    //     window.scroll(0, 0);
    // };
    return (
        <footer id='contact' className='flex flex-col justify-start mx-24 sm:mx-8'>
            <div className='flex flex-row justify-between sm:justify-around my-7 w-3/4 sm:w-full'>
                <h2 className='text-title sm:mr-0 sm:text-link sm:hidden'>{t('footer.title')}</h2>
                <LinkFooter link={'https://linkedin.com/in/matias-larralde'} icon={<FaLinkedin size="28" />} text={'Linkedin'} />
                <LinkFooter link={'https://github.com/MatiasLLL'} icon={<FaGithub size="28" />} text={'GitHub'} />
            </div>
            <div className='flex flex-col justify-between items-center ml-10 mt-1 mb-6 sm:mb-9 lg:ml-0'>
                <p className='mb-5'>{t('footer.copyright')}</p>
                <div className='flex flex-row justify-around w-1/2'>
                    <a href="#bottom" className='' onClick={() => setIsOpen(!isOpen)}>{t('footer.legal-notice')}</a>
                    <a href="#bottom" className='' onClick={() => setOpen(!Open)}>{t('footer.privacy-policy')}</a>
                </div>
            </div>
            <div className='flex flex-col justify-center mb-5 align-middle items-center'>
                {isOpen ? (
                <div className='mb-8 w-3/5'>
                    <p>{t('footer.legal-notice-content.sentence1')}</p>
                    <p>{t('footer.legal-notice-content.sentence2')}</p>
                    <p>{t('footer.legal-notice-content.sentence3')}</p>
                </div>
                ) : null}
                {Open ? (
                <div className='mb-8 w-3/5'>
                    <p>{t('footer.privacy-policy-content.sentence1')}</p>
                    <p>{t('footer.privacy-policy-content.sentence2')}</p>
                    <p>{t('footer.privacy-policy-content.sentence3')}</p>
                </div>
                ) : null}
            </div>
            <div id='bottom'></div>
        </footer>
    )
}

export default Footer


// className={`dropDownContent${toggleClassCheck}`}

// <h2 className='text-h1 my-9 flex items-center'>
//     <span className='inline-block w-1/5 h-0.5 bg-color9 mr-6 rounded-full'></span>
    
//     <span className='inline-block w-4/5 h-0.5 bg-color9 ml-6 rounded-full'></span>
// </h2>    
    