import React, { useMemo, useEffect, useState } from 'react';
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
import DjangoLogo from '../../assets/skills/logo-django.svg';
import PythonLogo from '../../assets/skills/logo-python.svg';
import ExpressLogo from '../../assets/skills/logo-express.svg';
// import SolidityLogo from '../../assets/skills/logo-solidity.svg';
import InfiniteMovingCards from '../ui/infinite-moving-cards';

const logoMap: { [key: string]: string } = {
    // SolidityLogo,
    DjangoLogo,
    PythonLogo,
    ExpressLogo,
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
    const [speed, setSpeed] = useState<'fast' | 'normal'>('fast');

    useEffect(() => {
        const mediaQuery: MediaQueryList =
            window.matchMedia('(max-width: 770px)');

        setSpeed(mediaQuery.matches ? 'fast' : 'normal');

        const handleChange = (event: MediaQueryListEvent) => {
            setSpeed(event.matches ? 'fast' : 'fast');
            setSpeed(!event.matches ? 'normal' : 'fast');
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

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
                speed={speed}
                pauseOnHover={false}
                className="mt-1"
            />
            {/* lg:mx-0 sm:mx-0 xs:mx-0 */}
            <div className="relative flex flex-col items-center w-full minxl:py-20 py-14 text-white lg:pb-0 pl-1 ">
                <ul className="w-full align-center //max-w-3xl px-24 lg:px-0 sm:mx-2 text-110 md:mx-0 md:px-16 ml-16 font-normal list-none grid grid-cols-2 gap-3 lg:text-105 sm:text-100 sm:px-20 xs:px-14 xs:text-100 sm:grid-cols-1 sm:w-full justify-center lg:mx-0 sm:mx-0 xs:mx-0">
                    {softSkills.map((skill, index) => (
                        <li
                            key={index}
                            className="my-[0.8rem] text-left w-5/6 md:w-full leading-[1.85rem] lg:mx-0 sm:mx-0 xs:mx-0"
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

// { "icon": "SolidityLogo", "iconAlt": "logo Solidity", "text": "Solidity Hardhat" },

