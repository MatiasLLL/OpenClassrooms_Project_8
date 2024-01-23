import { useEffect, useState, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { FaAddressCard } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoCodeSlash, IoShareSocial } from "react-icons/io5";
import SwitchLanguage from '../../components/SwitchLanguage';

function NavBar() {
    const { t } = useTranslation()
    type NavCatProps = {
        icon: ReactElement<IconType>;
        text: string;
        anchor: string;
    }
    const NavCat = ({icon, text, anchor}: NavCatProps) => (
        <div className='hover:text-white/50 flex justify-center items-center py-1 text-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:pl-5 group-hover/menu:sm:pl-0 group-hover/menu:sm:justify-center group-hover/menu:md:pl-0 group-hover/menu:lg:pl-0 group-hover/menu:md:justify-center group-hover/menu:lg:justify-center' aria-label={text}>
            <a href={anchor} className={ active === anchor ? 'group/link active text-white/40 flex flex-row transition-all static text-center sm:justify-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:items-center group-hover/menu:sm:flex-row group-hover/menu:sm:justify-center' : 'group/link transition-all flex flex-row static text-center sm:justify-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:items-center group-hover/menu:sm:flex-row group-hover/menu:sm:justify-center' } aria-label={text} role='button'>
                <i className='group/icon rounded-full border border-white/10 relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto transition-all duration-100 ease-linear cursor-pointer xs:h-11 xs:w-11 group-hover/link:transition-all group-hover/link:duration-100 group-hover/link:ease-linear group-hover/link:bg-darkBlue/10 group-[.active]/link:transition-all group-[.active]/link:duration-100 group-[.active]/link:ease-linear group-[.active]/link:bg-darkBlue/10' style={anchor === '#contact' ? { paddingRight: '2px' } : {} }>{icon}</i>
                <span className='hidden relative transition-all text-center cursor-pointer ml-[0.8rem] group-hover/menu:flex group-hover/menu:text-center group-hover/menu:sm:hidden group-hover/menu:md:hidden group-hover/menu:lg:hidden group-hover/link:font-medium group-[.active]/link:font-medium'>{text}</span>
            </a>
        </div>
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
        <nav className='group/menu z-50 bg-darkBlue text-white/90 fixed text-105 top-0 right-0 py-3 h-screen w-20 shadow-sm shadow-blue hover:w-52 hover:duration-100 text-center lg:fixed lg:bottom-0 lg:left-0 lg:flex-row lg:top-auto lg:px-4 lg:py-0 lg:w-screen lg:h-20 lg:hover:w-screen'>
            <div className='flex flex-col h-full justify-between lg:flex-row'>
                <div className='navbar-top lg:flex lg:flex-row lg:justify-around lg:w-3/5'>
                    <NavCat icon={<FaAddressCard size="27" />} text={t('categories.about')} anchor={'#about'} />
                    <NavCat icon={<GiSkills size="27" />} text={t('categories.skills')} anchor={'#skills'} />
                    <NavCat icon={<IoCodeSlash size="27" />} text={t('categories.projects')} anchor={'#projects'} />
                </div>
                <div className='navbar-bottom lg:flex lg:flex-row lg:justify-around lg:w-2/5'>
                    <NavCat icon={<IoShareSocial size="27" />} text={t('categories.contact')} anchor={'#contact'} />
                    <SwitchLanguage />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
