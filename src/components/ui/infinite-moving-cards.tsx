import React, { useEffect, useState, useRef } from 'react';
import { cn } from '../../utils/cn';

interface SkillsCardProps {
    icon: string;
    iconAlt: string;
    text: string;
}

interface InfiniteMovingCardsProps {
    items: SkillsCardProps[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}

function InfiniteMovingCards({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: InfiniteMovingCardsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState(false);

    const addAnimation = () => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    };

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards'
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse'
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s'
                );
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s'
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s'
                );
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20 max-w-7xl py-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex min-w-full shrink-0 gap-4 sm:gap-0 w-max flex-nowrap md:py-2',
                    start && 'animate-scroll',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[100px] sm:w-[90px] relative rounded-2xl flex-shrink-0 px-8 md:px-8 py-3 flex flex-col items-center justify-center text-105 sm:text-90 my-5 lg:my-7 lg:py-0.5 sm:my-5 xs:my-3"
                        key={idx}
                    >
                        <div className="w-[52px] h-[40px] flex justify-center items-center mb-[0.55rem]">
                            <img
                                className="h-full w-full object-contain"
                                src={item.icon}
                                alt={item.iconAlt}
                            />
                        </div>
                        <span className="text-white text-center leading-6">
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default React.memo(InfiniteMovingCards);
