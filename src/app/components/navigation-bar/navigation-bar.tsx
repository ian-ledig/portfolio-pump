"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./navigation-bar.css";

const NavigationBarComponent: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("home");

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        event.preventDefault();
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
            const offset = 80;
            const sectionPosition = targetSection.offsetTop - offset;

            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>("#home, #collaboration, #skill, #project, #contact");
            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight / 3;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navigation-bar">
            <div className="navigation-bar-links">
                <Image
                    src="/logofull.png"
                    alt="Ian LEDIG logo"
                    width={100}
                    height={0}
                    priority
                />
                <div className="navigation-separator">|</div>
                <a onClick={(e) => handleLinkClick(e, 'home')} className={`navigation-item font-heavy ${activeSection === 'home' ? 'active' : ''}`} href="">Home</a>
                <div className="navigation-separator">|</div>
                <a onClick={(e) => handleLinkClick(e, 'collaboration')} className={`navigation-item font-heavy ${activeSection === 'collaboration' ? 'active' : ''}`} href="">About</a>
                <div className="navigation-separator">|</div>
                <a onClick={(e) => handleLinkClick(e, 'skill')} className={`navigation-item font-heavy ${activeSection === 'skill' ? 'active' : ''}`} href="">Skills</a>
                <div className="navigation-separator">|</div>
                <a onClick={(e) => handleLinkClick(e, 'project')} className={`navigation-item font-heavy ${activeSection === 'project' ? 'active' : ''}`} href="">Projects</a>
                <div className="navigation-separator">|</div>
            </div>
            <div className="navigation-bar-links">
                <a href="https://github.com/ian-ledig" target="_blank" className="self-center">
                    <Image
                    src="/github.png"
                    alt="Github logo"
                    width={25}
                    height={0}
                    priority
                    />
                </a>
                <a href="https://www.linkedin.com/in/ian-ledig/" target="_blank" className="self-center mr-3">
                    <Image
                    src="/linkedin.png"
                    alt="Linkedin logo"
                    width={25}
                    height={0}
                    priority
                    />
                </a>
                <a onClick={(e) => handleLinkClick(e, 'contact')} className="navigation-item button-1 font-heavy" href="">Contact</a>
            </div>
        </nav>
    );
};

export default NavigationBarComponent;
