import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Shams from '../assets/img/shams.jpg';
import Bg from '../assets/img/bg.jpeg';
import { useData } from './Dataprovider';

export default function MainContainer({ children, page }) {

    const { isLightMode, toggleMode } = useData();

    useEffect(() => {
        const circle = document.getElementById('circle');

        const handleMouseMove = (event) => {
            const x = event.clientX - 11; // Ajustez pour centrer le grand cercle
            const y = event.clientY - 11;

            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const ShamsSvg = () => {
        return (
            <svg className="rot" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 200 200`}>
                <circle cx="100" cy="100" r="80" stroke="#a73995" strokeWidth="2" fill="none" />
                <circle cx="100" cy="100" r="48" stroke="#a73995" strokeWidth="2" fill="none" />

                <defs>
                    <path id="upperTextPath" d="M 52,100 A 48,48 0 1 1 148,100" fill="none" />
                    <path id="lowerTextPath" d="M 148,100 A 48,48 0 1 1 52,100" fill="none" />
                </defs>

                <text fontFamily="Arial" fontSize="19" fill="#4995be" fontWeight="bold" letterSpacing="1">
                    <textPath href="#upperTextPath" textAnchor="middle" startOffset="50%">
                        <tspan dy="-10">S H A M S</tspan>
                    </textPath>
                </text>

                <text fontFamily="Arial" fontSize="19" fill="#4995be" fontWeight="bold" letterSpacing="1">
                    <textPath href="#lowerTextPath" textAnchor="middle" startOffset="50%">
                        <tspan dy="-10">Full Stack Dev</tspan>
                    </textPath>
                </text>

                <text x="100" y="102" fontFamily="Arial" fontSize="48" fill="#4995be" fontWeight="bold" textAnchor="middle" alignmentBaseline="middle">
                    S
                </text>
            </svg>
        )
    }

    const Intro = () => {
        const [hov, setHov] = useState(false)
        const [isFlipped, setIsFlipped] = useState(false);
        const [isBgChanging, setIsBgChanging] = useState(false);

        const handleHover = () => {
            setIsFlipped(true);
            setHov(true)
        };

        const handleHoverOut = () => {
            setIsFlipped(false);
        };

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                if (isFlipped) {
                    setIsBgChanging(true);
                } else {
                    setIsBgChanging(false);
                }
            }, 375); // Change the background halfway through the flip animation (750ms)

            return () => clearTimeout(timeoutId);
        }, [isFlipped]);

        return (
            <div
                className={`hidden md:flex flex-col items-center min-w-80 w-80 font-bold text-lg border-r-2 border-dashed `}

            >
                <div className={`flex  items-center justify-center flipper w-64 h-64 ${isFlipped ? 'flipped' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverOut}
                >
                    {isBgChanging ? (
                        <div className='w-64 h-64'>
                            <ShamsSvg />
                        </div>
                    ) : (
                        <div
                            id='bg'
                            className={`w-64 h-64 rounded-full ${!hov ? 'animate-pulse' : ''}`}
                            style={{
                                backgroundImage: `url(${Shams})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                opacity: isBgChanging ? 0 : 1, // Fade out the photo when changing to SVG
                            }}
                        ></div>
                    )}
                </div>

                <div className='w-full flex flex-col items-center'>
                    <span className="text-xl">SHAMS KIBONGE</span>
                    <span className="">SOC Analyst • DevSecOps  </span>
                    <span className="">Security-Focused Engineer</span>
                </div>
            </div>
        );
    };



    const Intro1 = () => {
        const [hov, setHov] = useState(false)
        const [isFlipped, setIsFlipped] = useState(false);
        const [isBgChanging, setIsBgChanging] = useState(false);

        const handleHover = () => {
            setIsFlipped(true);
            setHov(true)
        };

        const handleHoverOut = () => {
            setIsFlipped(false);
        };

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                if (isFlipped) {
                    setIsBgChanging(true);
                } else {
                    setIsBgChanging(false);
                }
            }, 375); // Change the background halfway through the flip animation (750ms)

            return () => clearTimeout(timeoutId);
        }, [isFlipped]);

        return (
            <div className="absolute top-2  font-bold text-lg z-40 w-screen">
                <div className='flex justify-center md:hidden gap-2 items-center'>
                    <div className={`flex  items-center justify-center flipper w-32 h-32 ${isFlipped ? 'flipped' : ''}`}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverOut}
                    >
                        {isBgChanging ? (
                            <div className='w-32 h-32'>
                                <ShamsSvg />
                            </div>
                        ) : (
                            <div
                                id='bg'
                                className={`w-32 h-32 rounded-full ${!hov ? 'animate-pulse' : ''}`}
                                style={{
                                    backgroundImage: `url(${Shams})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    opacity: isBgChanging ? 0 : 1, // Fade out the photo when changing to SVG
                                }}
                            ></div>
                        )}
                    </div>

                    {/* <div
                        className='w-32 h-32 rounded-full'
                        style={{
                            backgroundImage: `url(${Shams})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}> </div> */}
                    <div className='flex flex-col text-xs'>
                        <span className="text-xl ">SHAMS KIBONGE</span>
                        <span className="">NETWORK ENGINEER &</span>
                        <span className="">Jr. FULL STACK DEVELOPER.</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div
            className={`w-screen h-screen relative overflow-hidden flex items-center px-16 md:px-24 ${isLightMode ? 'text-black' : 'text-white'}`}
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Header page={page} toggleMode={toggleMode} isLightMode={isLightMode} />
                <Intro1 />
                <div className="absolute inset-0 flex items-center justify-center px-20" style={{ backgroundColor: isLightMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="flex items-center gap-5 w-full font-mono">
                        <Intro />
                        <div className='mt-32 md:mt-0'>
                            <div className="underline font-bold uppercase">
                                {page}
                            </div>
                            <div className='h-96 overflow-auto'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="circle" className={`w-6 h-6 border-2 ${isLightMode ? 'border-black' : 'border-cyan-500'} rounded-full absolute pointer-events-none flex items-center justify-center`}>
                <div className={`w-2 h-2 ${isLightMode ? 'bg-black' : 'bg-cyan-500'} rounded-full`}></div>
            </div>
        </div>

    );
}
