import { useTranslation } from 'react-i18next';
import picBayBridge from '../../assets/photos/pic-bay-bridge.jpg'
import picBayBridgeResponsive from '../../assets/photos/pic-bay-bridge-responsive.jpg'

function About() {
    const { t } = useTranslation()
        return (
            <section className='flex flex-row justify-around min-h-fit mx-24 mt-9 mb-20 py-3 px-7 lg:min-h-80 lg:mx-[7%] lg:py-1 lg:px-3 md:flex-wrap md:mb-8 md:px-2' itemScope itemType='https://schema.org/Person'>
                <div className='h-full w-3/5 mr-1 md:w-5/6 sm:w-full'>
                    <h1 className='text-140 mb-4 xl:text-120 lg:text-110 md:text-135 sm:text-115'>{t('about.title')}</h1>
                    <p itemProp='description' className='text-105 xl:text-100 lg:text-95 h-full md:text-100'>
                        {t('about.sentence1')}<br/>
                        {t('about.sentence2')}<br/>
                        {t('about.sentence3')}<br/>
                        {t('about.sentence4')}
                    </p>
                </div>
                <div className='w-2/5 h-auto ml-14 aspect-auto rounded-lg shadow-sm shadow-blue/20 xl:ml-7 lg:ml-[3.5%] md:w-2/3 md:ml-0 md:mt-20 md:mb-6 md:rounded-xl sm:w-11/12 sm:md:mt-16 sm:mb-2'>
                    <img alt='Bay Bridge'className='h-full w-full rounded-lg md:rounded-xl' itemProp='image' 
                        // loading='lazy'
                        src={picBayBridge} 
                        srcSet={`${picBayBridgeResponsive} 430w, ${picBayBridge} 750w`}
                        sizes="(max-width: 770px) 430px, 750px"
                    />
                </div>
            </section>
        )
}

export default About


// srcset="./assets/images/slider/nicholas-green-650-unsplash.jpg 650w,
//         ./assets/images/slider/nicholas-green-1000-unsplash.jpg 1000w,
//         ./assets/images/slider/nicholas-green-unsplash.jpg 1600w"
// sizes="(max-width: 650px) 650px, (max-width: 1000px) 1000px, (min-width: 1001px) 1600px"