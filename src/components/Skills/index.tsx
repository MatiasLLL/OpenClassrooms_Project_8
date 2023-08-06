import { useTranslation } from 'react-i18next';
// import viteLogo from '/vite.svg'
// <img src={viteLogo} className="logo" alt="Vite logo" />

function Skills() {
    const { t } = useTranslation()
    return (
        <section id="skills" className='flex flex-row justify-around mx-12 my-7'>
            <div className='w-1/2'>
                <h2 className='text-2 mb-3'>{t('skills.title2')}</h2>
                {/* <p>
                    {t('about.sentence2')}<br/>
                    {t('about.sentence3')}<br/>
                    {t('about.sentence4')}<br/>
                    {t('about.sentence5')}<br/>
                    {t('about.sentence6')}
                </p> */}
            </div>
            {/* <img src={pic} alt='photo portfolio' className='w-1/3'/> */}
      </section>
    )
}

export default Skills