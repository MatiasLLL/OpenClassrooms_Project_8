import { useTranslation } from 'react-i18next';
// import pic from '../../assets/photo-potfolio.jpg'
import picBayBridge from '../../assets/pic-bay-bridge.jpg'
// import pic from '../../assets/pic-hendaye.jpg'

function About() {
    const { t } = useTranslation()
        return (
            <section className='flex flex-row justify-around text-color17 mx-24 mt-9 mb-14 bg-color13 rounded-2xl p-8 shadow-inner shadow-color15/30'>
                <div className='w-3/5'>
                    <h1 className='text-title mb-3'>{t('about.title1')}</h1>
                    <p>
                        {t('about.sentence1')}<br/>
                        {t('about.sentence2')}<br/>
                        {t('about.sentence3')}<br/>
                        {t('about.sentence4')}<br/>
                        {t('about.sentence5')}
                    </p>
                </div>
                <img src={picBayBridge} alt='Bay Bridge' className='w-2/5 ml-14 rounded-lg shadow-sm shadow-color13/20'/>
            </section>
        )
}

export default About

// Salut! Je suis Matias Larralde et je suis heureux que vous regardiez mon portfolio. Je viens de l'industrie de la technologie avec une expérience très variée, de la restauration, à la mise en place d'événements ou même l'agriculture urbaine.
// J'ai beaucoup grandi en tant qu'être humain grâce à ces expériences et je suis heureux d'avoir acquis de nombreuses compétences que je peux utiliser dans le développement Web.
// Cela renforce ma soif d'apprendre et de maîtriser de nouveaux langages de codage ou frameworks. Chaque nouveau jour est un nouveau défi!
// Je sais que j'ai trouvé ma voie dans la programmation."