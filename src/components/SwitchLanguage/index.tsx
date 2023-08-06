/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useTranslation } from 'react-i18next';
import { MdLanguage } from "react-icons/md";

function SwitchLanguage() {
    const { t, i18n } = useTranslation();
    let lng: string = navigator.language;
    const changeLanguage = () => {
        lng = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(lng);
    };

    return (
        <li className='flex justify-center items-center py-1 text-center hover:justify-start'>
            <button className={'navbar-link'} onClick={changeLanguage}>
                <i className='navbar-icon'>{<MdLanguage size="28" />}</i>
                <span className='text-color9 hidden relative text-center cursor-pointer'>{t('categories.language')}</span>
            </button>
        </li>
    );
}
  
export default SwitchLanguage;
  














// import { ChangeEvent, useState } from "react"
// import { useTranslation } from 'react-i18next';
// import { Languages } from '../../enum/Languages.ts';
 

// function LanguageSwitcher() {
//     const { i18n } = useTranslation();
  
//     const changeLanguage = (language) => {
//       i18n.changeLanguage(language);
//     };
  
//     return (
//       <div>
//         <button onClick={() => changeLanguage('en') : onClick={() => changeLanguage('fr')}>English</button>
//         <button onClick={() => changeLanguage('fr')}>French</button>
//       </div>
//     );
// }
  
// export default LanguageSwitcher


// function Lang () {
//     const { i18n } = useTranslation();
//     const [lang, setLang] = useState<Languages>(i18n.language as Languages);
 
//     const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
//         const language = event.target.value;
 
//         switch (language) {
//             case Languages.FR:
//                 setLang(Languages.EN);
//                 i18n.changeLanguage(Languages.FR);
//                 break;
//             case Languages.EN:
//             default:
//                 setLang(Languages.FR);
//                 i18n.changeLanguage(Languages.EN);
//                 break;
                
//         }
//     }
 
//     return (
//         <div>
//             <div>
//                 <select value={lang} name="language" onChange={changeLanguage}>
//                     <option value={Languages.EN}>EN</option>
//                     <option value={Languages.FR}>FR</option>
//                 </select>
//             </div>
//         </div>
//     )
// }
 
// export default Lang;