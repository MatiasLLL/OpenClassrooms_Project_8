import { useEffect, useState, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { FaAddressCard } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoCodeSlash, IoShareSocial } from "react-icons/io5";
import { IconType } from 'react-icons';
import SwitchLanguage from '../../components/SwitchLanguage'

function NavBar() {
    const { t } = useTranslation()
    type IconNavProps = {
        icon: ReactElement<IconType>;
        text: string;
        anchor: string;
    }
    const IconNav = ({icon, text, anchor}: IconNavProps) => (
        <li className='flex justify-center items-center py-1 text-center hover:justify-start'>
            <a href={anchor} className={ active === anchor ? 'navbar-link active' : 'navbar-link' }>
                <i className='navbar-icon'>{icon}</i>
                <span className='text-color2 hidden relative text-center cursor-pointer'>{text}</span>
            </a>
        </li>
    )
    const [active, setActive] = useState<string>('');
    useEffect(() => {
        const handleHashChange = () => {
        setActive(window.location.hash);
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [])

    return (
        <nav className='navbar-menu fixed top-0 right-0 py-3 sm:px-4 h-screen w-20 md:hover:w-20 lg:hover:w-20 flex flex-col bg-color3 shadow-lg hover:w-52 hover:duration-100 font-aquatico italic text-center justify-between sm:bottom-0 sm:flex-row sm:py-0 sm:top-auto sm:w-screen sm:h-20 sm:hover:w-screen sm:justify-around'>
            <ul className='navbar-top sm:flex sm:flex-row sm:justify-around sm:[width:66.66%]'>
                <IconNav icon={<FaAddressCard size="28" />} text={t('categories.about')} anchor={'#about'} />
                <IconNav icon={<GiSkills size="28" />} text={t('categories.skills')} anchor={'#skills'} />
                <IconNav icon={<IoCodeSlash size="28" />} text={t('categories.projects')} anchor={'#projects'} />
            </ul>
            <ul className='navbar-bottom sm:flex sm:flex-row sm:justify-around sm:[width:40%]'>
                <IconNav icon={<IoShareSocial size="28" />} text={t('categories.contact')} anchor={'#contact'} /> 
                <li className='flex justify-center items-center py-1 text-center hover:justify-start'>
                    <SwitchLanguage />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar