import { useEffect, useState, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { FaAddressCard } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoCodeSlash, IoShareSocial } from "react-icons/io5";
import SwitchLanguage from '../../components/SwitchLanguage'

function NavBar() {
    const { t } = useTranslation()
    type NavCatProps = {
        icon: ReactElement<IconType>;
        text: string;
        anchor: string;
    } 
    const NavCat = ({icon, text, anchor}: NavCatProps) => (
        <li className='flex justify-center items-center py-1 text-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:pl-5 group-hover/menu:sm:pl-0 group-hover/menu:sm:justify-center group-hover/menu:md:pl-0 group-hover/menu:lg:pl-0 group-hover/menu:md:justify-center group-hover/menu:lg:justify-center'>
            <a href={anchor} className={ active === anchor ? 'group/link active flex flex-row static text-center sm:justify-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:items-center group-hover/menu:sm:flex-row group-hover/menu:sm:justify-center' : 'group/link flex flex-row static text-center sm:justify-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:items-center group-hover/menu:sm:flex-row group-hover/menu:sm:justify-center' }>
                <i className='group/icon relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto text-color17 rounded-xl transition-all duration-100 ease-linear cursor-pointer shadow-sm shadow-color17 xs:h-11 xs:w-11 group-hover/link:transition-all group-hover/link:duration-100 group-hover/link:ease-linear group-hover/link:shadow-inner group-hover/link:bg-color16/10 group-hover/link:shadow-color17 group-[.active]/link:transition-all group-[.active]/link:duration-100 group-[.active]/link:ease-linear group-[.active]/link:bg-color16/10 group-[.active]/link:shadow-inner group-[.active]/link:shadow-color17'>{icon}</i>
                <span className='hidden relative text-center cursor-pointer ml-[0.8rem] group-hover/menu:flex group-hover/menu:text-center group-hover/menu:sm:hidden group-hover/menu:md:hidden group-hover/menu:lg:hidden group-hover/link:text-active group-hover/link:font-black group-[.active]/link:font-black group-[.active]/link:text-active'>{text}</span>
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
        <nav className='group/menu text-color17 fixed text-cat top-0 right-0 py-3 sm:px-4 h-screen w-20 md:hover:w-20 lg:hover:w-20 flex flex-col bg-color10 shadow-sm shadow-color13 hover:w-52 hover:duration-100 font-aquatico italic text-center justify-between sm:bottom-0 sm:flex-row sm:py-0 sm:top-auto sm:w-screen sm:h-20 sm:hover:w-screen sm:justify-around'>
            <ul className='navbar-top sm:flex sm:flex-row sm:justify-around sm:[width:66.66%]'>
                <NavCat icon={<FaAddressCard size="28" />} text={t('categories.about')} anchor={'#about'} />
                <NavCat icon={<GiSkills size="28" />} text={t('categories.skills')} anchor={'#skills'} />
                <NavCat icon={<IoCodeSlash size="28" />} text={t('categories.projects')} anchor={'#projects'} />
            </ul>
            <ul className='navbar-bottom sm:flex sm:flex-row sm:justify-around sm:[width:40%]'>
                <NavCat icon={<IoShareSocial size="28" />} text={t('categories.contact')} anchor={'#contact'} />
                <SwitchLanguage />
            </ul>
        </nav>
    )
}

export default NavBar
