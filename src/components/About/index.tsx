import { useTranslation } from 'react-i18next';
import pic from '../../assets/photo-potfolio.jpg'
// import pic from '../../assets/pic-bay-bridge.jpg'
// import pic from '../../assets/pic-hendaye.jpg'

function About() {
    const { t } = useTranslation()
        return (
            <section id="about" className='flex flex-row justify-around mx-12 my-7'>
                <div className='w-1/2'>
                    <h1 className='text-h1 mb-3'>{t('about.title1')}</h1>
                    <p>
                        {t('about.sentence1')}<br/>
                        {t('about.sentence2')}<br/>
                        {t('about.sentence3')}<br/>
                        {t('about.sentence4')}<br/>
                        {t('about.sentence5')}
                    </p>
                </div>
                <img src={pic} alt='photo portfolio' className='w-1/3'/>
            </section>
        )
}

export default About