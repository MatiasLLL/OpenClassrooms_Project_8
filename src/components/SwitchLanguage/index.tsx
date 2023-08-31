/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useTranslation } from 'react-i18next';
import { MdLanguage } from "react-icons/md";

function SwitchLanguage() {
    const { t, i18n } = useTranslation();
    
    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
        const htmlTag = document.getElementById("html-tag");
        if (htmlTag) {
            htmlTag.lang = newLanguage;
        }
    };

    return (
        <li className='hover:text-color13/50 flex justify-center items-center py-1 text-center hover:justify-start group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:pl-5 group-hover/menu:sm:pl-0 group-hover/menu:sm:justify-center group-hover/menu:md:pl-0 group-hover/menu:lg:pl-0 group-hover/menu:md:justify-center group-hover/menu:lg:justify-center'>
            <button className='group/link transition-all flex flex-row static text-center sm:justify-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:items-center group-hover/menu:sm:flex-row group-hover/menu:sm:justify-center' onClick={changeLanguage} >
                <i className='group/icon rounded-full border border-color13/10 shadow-sm relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto transition-all duration-100 ease-linear cursor-pointer xs:h-11 xs:w-11 group-hover/link:transition-all group-hover/link:duration-100 group-hover/link:ease-linear group-hover/link:bg-color17/10'>{<MdLanguage size="28" />}</i>
                <span className='hidden relative transition-all text-center cursor-pointer ml-[0.8rem] group-hover/menu:flex group-hover/menu:text-center group-hover/menu:sm:hidden group-hover/menu:md:hidden group-hover/menu:lg:hidden group-hover/link:font-medium'>{t('categories.language')}</span>
            </button>
        </li>
    );
}
  
export default SwitchLanguage;
