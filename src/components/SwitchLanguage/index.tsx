import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';

const SwitchLanguage: React.FC = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const changeLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="minlg:hover:text-white/50 flex justify-center items-center py-1 text-center hover:justify-start group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:pl-5 group-hover/menu:sm:pl-0 group-hover/menu:sm:justify-center group-hover/menu:md:pl-0 group-hover/menu:lg:pl-0 group-hover/menu:md:justify-center group-hover/menu:lg:justify-center">
            <button
                className="group/link transition-all flex flex-row static text-center sm:justify-center group-hover/menu:flex group-hover/menu:justify-start group-hover/menu:items-center group-hover/menu:sm:flex-row group-hover/menu:sm:justify-center"
                onClick={changeLanguage}
                aria-label="SwitchLanguage"
                // aria-label={t('aria.switchLanguage')}
            >
                <i className="group/icon rounded-full border border-white/10 shadow-sm relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto transition-all duration-100 ease-linear cursor-pointer xs:h-11 xs:w-11 minlg:group-hover/link:transition-all minlg:group-hover/link:duration-100 minlg:group-hover/link:ease-linear minlg:group-hover/link:bg-darkBlue/10">
                    <MdLanguage size="29" />
                </i>
                <span className="hidden relative transition-all text-center cursor-pointer ml-[0.8rem] group-hover/menu:flex group-hover/menu:text-center group-hover/menu:sm:hidden group-hover/menu:md:hidden group-hover/menu:lg:hidden group-hover/link:font-medium">
                    {t('categories.language')}
                </span>
            </button>
        </div>
    );
};

export default React.memo(SwitchLanguage);
