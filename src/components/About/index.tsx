import { useTranslation } from 'react-i18next';
import picBayBridge from '../../assets/pic-bay-bridge.jpg'

function About() {
    const { t } = useTranslation()
        return (
            <section className='flex flex-row justify-around min-h-fit mx-24 mt-9 mb-14 py-3 px-7 lg:min-h-80 lg:mx-[7%] lg:py-1 lg:px-3 md:flex-wrap md:mb-8' itemScope itemType="https://schema.org/Person">
                <div className='h-full w-3/5 mr-1 md:w-5/6 sm:w-full'>
                    <h1 className='text-140 mb-4 xl:text-120 lg:text-110 md:text-135 sm:text-115'>{t('about.title')}</h1>
                    <p itemProp="description" className='text-105 xl:text-100 lg:text-95 h-full md:text-100'>
                        {t('about.sentence1')}<br/>
                        {t('about.sentence2')}<br/>
                        {t('about.sentence3')}<br/>
                        {t('about.sentence4')}
                    </p>
                </div>
                <img src={picBayBridge} alt='Bay Bridge' className='w-2/5 ml-14 aspect-auto rounded-lg shadow-sm shadow-[#35689f]/20 xl:ml-7 lg:ml-[3.5%] md:w-2/3 md:ml-0 md:mt-20 md:mb-6 md:rounded-xl sm:w-11/12 sm:md:mt-16 sm:mb-2' itemProp="image"/>
            </section>
        )
}

export default About
