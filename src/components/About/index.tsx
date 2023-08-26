import { useTranslation } from 'react-i18next';
import picBayBridge from '../../assets/pic-bay-bridge.jpg'

function About() {
    const { t } = useTranslation()
        return (
            <section className='flex flex-row justify-around text-color17 mx-24 mt-9 mb-14 bg-color13 rounded-xl p-8' itemScope itemType="https://schema.org/Person">
                <div className='w-3/5'>
                    <h1 className='text-title mb-3'>{t('about.title1')}</h1>
                    <p itemProp="description">
                        {t('about.sentence1')}<br/>
                        {t('about.sentence2')}<br/>
                        {t('about.sentence3')}<br/>
                        {t('about.sentence4')}<br/>
                        {t('about.sentence5')}
                    </p>
                </div>
                <img src={picBayBridge} alt='Bay Bridge' className='w-2/5 ml-14 rounded-lg shadow-xs shadow-color18' itemProp="image"/>
            </section>
        )
}

export default About

// Salut! Je suis Matias Larralde et je suis heureux que vous regardiez mon portfolio. Je viens de l'industrie de la technologie avec une expérience très variée, de la restauration, à la mise en place d'événements ou même l'agriculture urbaine.
// J'ai beaucoup grandi en tant qu'être humain grâce à ces expériences et je suis heureux d'avoir acquis de nombreuses compétences que je peux utiliser dans le développement Web.
// Cela renforce ma soif d'apprendre et de maîtriser de nouveaux langages de codage ou frameworks. Chaque nouveau jour est un nouveau défi!
// Je sais que j'ai trouvé ma voie dans la programmation."


// I'm proud from all what I learned and master during my Web Developer's training with OpenClassrooms.


// Certainly! Here's a revised version of your text: Hello! My name is Matias Larralde, and I'm thrilled that you're interested in my portfolio. With a diverse background ranging from restoration 
// and event setup to urban farming, I'm entering the tech industry with a unique perspective. These experiences have helped me grow as a person and acquire many skills that I can apply to web development.
// I'm always eager to learn and master new technologies, coding languages, and frameworks, and I relish the challenge of each new day. I'm proud of everything I've learned and accomplished during 
// my web developer training with OpenClassrooms, and I'm excited to have found my path in programming.