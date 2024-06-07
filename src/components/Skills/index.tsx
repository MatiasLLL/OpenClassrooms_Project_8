import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import skillsData from '../../data/skills.json';
import HTMLLogo from '../../assets/skills/logo-html.svg';
import CSSLogo from '../../assets/skills/logo-css.svg';
import JavaScriptLogo from '../../assets/skills/logo-javascript.svg';
import SassLogo from '../../assets/skills/logo-sass.svg';
import TypeScriptLogo from '../../assets/skills/logo-typescript.svg';
import TailwindLogo from '../../assets/skills/logo-tailwind.svg';
import ReactLogo from '../../assets/skills/logo-react.svg';
import NodeLogo from '../../assets/skills/logo-node.svg';
import PythonLogo from '../../assets/skills/logo-python.svg';
import SolidityLogo from '../../assets/skills/logo-solidity.svg';
import InfiniteMovingCards from '../ui/infinite-moving-cards';

const logoMap: { [key: string]: string } = {
    SolidityLogo,
    PythonLogo,
    NodeLogo,
    ReactLogo,
    TailwindLogo,
    SassLogo,
    TypeScriptLogo,
    JavaScriptLogo,
    CSSLogo,
    HTMLLogo,
};

interface SkillsCardProps {
    icon: string;
    iconAlt: string;
    text: string;
}

function Skills() {
    const { t } = useTranslation();

    const skills: SkillsCardProps[] = useMemo(() => skillsData, []);

    const items = useMemo(
        () =>
            skills.map(skill => ({
                icon: logoMap[skill.icon],
                iconAlt: skill.iconAlt,
                text: skill.text,
            })),
        [skills]
    );

    const softSkills = [
        t('soft-skills.sentence1'),
        t('soft-skills.sentence2'),
        t('soft-skills.sentence3'),
        t('soft-skills.sentence4'),
        t('soft-skills.sentence5'),
    ];

    return (
        <section
            id="skills"
            className="flex flex-col justify-around mx-24 my-7 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4"
            itemScope
            itemType="https://schema.org/Person"
        >
            <h2 className="flex flex-row text-150 my-8 pb-8 items-center w-full md:px-[8%] sm:mb-4 sm:text-145 xs:text-140">
                <span className="inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2"></span>
                {t('skills.title2')}
                <span className="inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2"></span>
            </h2>
            <InfiniteMovingCards
                items={items}
                direction="right"
                speed="normal"
                pauseOnHover={false}
                className="mt-1"
            />
            <div className="relative flex flex-col items-center w-full minxl:py-20 py-14 text-white lg:mx-0 lg:pb-0 sm:mx-0 xs:mx-0">
                <ul className="w-full align-center //max-w-3xl px-24 lg:px-0 sm:mx-2 text-110 md:mx-0 md:px-16 ml-16 font-normal list-none grid grid-cols-2 gap-3 lg:text-105 sm:text-100 sm:px-20 xs:px-14 xs:text-100 sm:grid-cols-1 sm:w-full justify-center">
                    {softSkills.map((skill, index) => (
                        <li
                            key={index}
                            className="my-[0.8rem] text-left w-5/6 md:w-full leading-[1.85rem]"
                            // className={`my-2 text-left ${
                            //     softSkills.length % 2 !== 0 &&
                            //     index === softSkills.length - 1
                            //         ? 'col-span-2 sm:col-span-1 sm:justify-self-center text-center'
                            //         : ''
                            // }`}
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default React.memo(Skills);

// import React, { useMemo } from 'react';
// import { useTranslation } from 'react-i18next';
// import skillsData from '../../data/skills.json';
// import HTMLLogo from '../../assets/skills/logo-html.svg';
// import CSSLogo from '../../assets/skills/logo-css.svg';
// import JavaScriptLogo from '../../assets/skills/logo-javascript.svg';
// import SassLogo from '../../assets/skills/logo-sass.svg';
// import TypeScriptLogo from '../../assets/skills/logo-typescript.svg';
// import TailwindLogo from '../../assets/skills/logo-tailwind.svg';
// import ReactLogo from '../../assets/skills/logo-react.svg';
// import NodeLogo from '../../assets/skills/logo-node.svg';
// import PythonLogo from '../../assets/skills/logo-python.svg';
// import SolidityLogo from '../../assets/skills/logo-solidity.svg';
// import InfiniteMovingCards from '../ui/infinite-moving-cards';

// const logoMap = {
//     SolidityLogo,
//     PythonLogo,
//     NodeLogo,
//     ReactLogo,
//     TailwindLogo,
//     SassLogo,
//     TypeScriptLogo,
//     JavaScriptLogo,
//     CSSLogo,
//     HTMLLogo,
// };

// interface SkillsCardProps {
//     icon: string;
//     iconAlt: string;
//     text: string;
// }

// function Skills() {
//     const { t } = useTranslation();

//     const skills: SkillsCardProps[] = useMemo(() => skillsData, []);

//     const items = useMemo(
//         () =>
//             skills.map(skill => ({
//                 icon: logoMap[skill.icon],
//                 iconAlt: skill.iconAlt,
//                 text: skill.text,
//             })),
//         [skills]
//     );

//     // const skills: SkillsCardProps[] = useMemo(
//     //     () => [
//     //         {
//     //             icon: SolidityLogo,
//     //             iconAlt: 'logo Solidity',
//     //             text: 'Solidity Hardhat',
//     //         },
//     //         { icon: PythonLogo, iconAlt: 'logo Python', text: 'Python Flask' },
//     //         { icon: NodeLogo, iconAlt: 'logo Node', text: 'Node Express' },
//     //         { icon: ReactLogo, iconAlt: 'logo React', text: 'React' },
//     //         { icon: TailwindLogo, iconAlt: 'logo Tailwind', text: 'Tailwind' },
//     //         { icon: SassLogo, iconAlt: 'logo Sass', text: 'Sass' },
//     //         {
//     //             icon: TypeScriptLogo,
//     //             iconAlt: 'logo TypeScript',
//     //             text: 'TypeScript',
//     //         },
//     //         {
//     //             icon: JavaScriptLogo,
//     //             iconAlt: 'logo JavaScript',
//     //             text: 'JavaScript',
//     //         },
//     //         { icon: CSSLogo, iconAlt: 'logo CSS', text: 'CSS' },
//     //         { icon: HTMLLogo, iconAlt: 'logo HTML', text: 'HTML' },
//     //     ],
//     //     []
//     // );

//     // const items = useMemo(
//     //     () =>
//     //         skills.map(skill => ({
//     //             icon: skill.icon,
//     //             iconAlt: skill.iconAlt,
//     //             text: skill.text,
//     //         })),
//     //     [skills]
//     // );

//     return (
//         <section
//             id="skills"
//             className="flex flex-col justify-around mx-24 my-7 lg:mx-[5%] md:mx-0 xs:mb-0 lg:pt-4"
//             itemScope
//             itemType="https://schema.org/Person"
//         >
//             <h2 className="flex flex-row text-150 my-8 pb-8 items-center w-full md:px-[8%] sm:mb-4 sm:text-145 xs:text-140">
//                 <span className="inline-block w-1/5 h-0.5 bg-white mr-6 rounded-full md:w-1/2"></span>
//                 {t('skills.title2')}
//                 <span className="inline-block w-4/5 h-0.5 bg-white ml-6 rounded-full md:w-1/2"></span>
//             </h2>
//             <InfiniteMovingCards
//                 items={items}
//                 direction="right"
//                 speed="normal"
//                 pauseOnHover={false}
//                 className="mt-1"
//             />
//             <div className="relative flex flex-col items-center w-full py-14 text-white lg:mx-20 lg:pb-0 sm:mx-0 xs:mx-0">
//                 <ul className="w-full align-center max-w-3xl mx-5 sm:mx-2 text-110 font-normal list-none grid grid-cols-2 gap-3 lg:text-105 sm:text-100 sm:pl-2 xs:text-100 sm:grid-cols-1 sm:w-2/3 xs:w-3/4 justify-center">
//                     <li className="my-2 text-left">
//                         {t('soft-skills.sentence1')}
//                     </li>
//                     <li className="my-2 text-left">
//                         {t('soft-skills.sentence2')}
//                     </li>
//                     <li className="my-2 text-left">
//                         {t('soft-skills.sentence3')}
//                     </li>
//                     <li className="my-2 text-left">
//                         {t('soft-skills.sentence4')}
//                     </li>
//                     <li className="my-2 text-left">
//                         {t('soft-skills.sentence5')}
//                     </li>
//                 </ul>
//             </div>
//         </section>
//     );
// }

// export default React.memo(Skills);

// "about": {
//     "title": "Hi! I'm Matias Larralde and I'm thrilled that you are curious about my Portfolio.",
//     "sentence1": "Having a diversified background ranging from restoration, event setup, and urban farming has allowed me to acquire many skills that I can use in web development, and my unique perspective can bring creativity and innovation to a team!",
//     "sentence2": "This builds my thirst for learning and mastering new technologies, coding languages or frameworks. Each new day is a new challenge!",
//     "sentence3": "I know that I have found my path into programming."
// }
// "about": {
//     "title": "Hi! I'm Matias Larralde and I'm thrilled that you're taking a look at my Portfolio.",
//     "sentence1": "I'm coming to the tech world with a very diversified background that has allowed me to acquire many skills that I can use in programming.",
//     "sentence2": "This builds my thirst for learning and mastering new technologies; every new day is a new challenge!"
//     // and no sentence3 "
// }

// useState, useEffect,

// import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';

//   const { ref, inView } = useInView();
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (inView && !hasAnimated) {
//       setHasAnimated(true);
//     }
//   }, [inView, hasAnimated]);

// <ul
//             className="w-full max-w-3xl mx-6 text-110 font-normal list-none grid grid-cols-2 gap-3 lg:text-105 md:text-100 sm:text-95 xs:text-95 sm:grid-cols-1"
//         //   animate={hasAnimated ? { y: 0, opacity: 1 } : { y: 20, opacity: 0.8 }}
//         //   transition={{ duration: 0.85, ease: 'easeOut' }}
//         >
//           <li className="my-2 pl-3">{t('soft-skills.sentence1')}</li>
//           <li className="my-2 pl-3">{t('soft-skills.sentence2')}</li>
//           <li className="my-2 pl-3">{t('soft-skills.sentence3')}</li>
//           <li className="my-2 pl-3">{t('soft-skills.sentence4')}</li>
//           <li className="my-2 pl-3">{t('soft-skills.sentence5')}</li>
//         </ul>
//         {/* </motion.ul> */}
