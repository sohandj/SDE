import React, { useEffect, useState } from 'react';

function Intro() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const styles = {
        intro: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '3rem 6rem',
            height: '60vh',
            overflow: 'hidden'
        },
        iLeft: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        iName: {
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        nameSpan: {
            display: 'block'
        },
        firstSpan: {
            fontSize: '1.8rem',
            color: 'var(--black)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
            transitionDelay: '0.2s'
        },
        highlight: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'var(--blue4)',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDelay: '0.4s'
        },
        tagline: {
            fontSize: '1rem',
            color: 'var(--gray)',
            marginTop: '0.5rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
            transitionDelay: '0.6s'
        },
        iButtons: {
            display: 'flex',
            gap: '1rem',
            marginTop: '2rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
            transitionDelay: '0.8s'
        },
        btn: {
            padding: '0.6rem 1.4rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
        },
        btnSecondary: {
            background: 'transparent',
            border: '2px solid var(--blue4)',
            color: 'var(--blue4)',
            fontWeight: '600',
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
        },
        iIcons: {
            display: 'flex',
            gap: '1.5rem',
            marginTop: '2rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s ease',
            transitionDelay: '1s'
        },
        iconLink: {
            fontSize: '2rem',
            color: 'var(--gray)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            display: 'inline-block'
        },
        iconImg: {
            width: '2rem',
            height: '2rem',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'grayscale(0.5)'
        },
        iRight: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.5s'
        },
        paragraph: {
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: 'var(--black)',
            maxWidth: '500px',
            position: 'relative'
        }
    };

    const keyframes = `
        @keyframes btnShine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
        
        @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
        }
        
        @keyframes blink {
            50% { border-color: transparent; }
        }
        
        @media (max-width: 900px) {
            .intro {
                flex-direction: column !important;
                text-align: center;
                padding: 2rem !important;
            }
            .i-right {
                margin-top: 2rem;
            }
        }
    `;

    return (
        <>
            <style>{keyframes}</style>
            <div className="intro" id='home' style={styles.intro}>
                <div className="i-left" style={styles.iLeft}>
                    <div className="i-name" style={styles.iName}>
                        <span style={{...styles.nameSpan, ...styles.firstSpan}}>Hi, I am</span>
                        <span 
                            className="highlight" 
                            style={{...styles.nameSpan, ...styles.highlight}}
                        >
                            Sohan D J
                        </span>
                        <span 
                            className="tagline" 
                            style={{...styles.nameSpan, ...styles.tagline}}
                        >
                            Computer Science Engineer | 2025 Graduate
                        </span>
                    </div>
                    <div className="i-buttons" style={styles.iButtons}>
                        <a href="/resume.pdf" download="Sohan_DJ_Resume.pdf">
                            <button 
                                className="btn secondary" 
                                style={styles.btnSecondary}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'var(--blue4)';
                                    e.target.style.color = '#fff';
                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                    e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = 'var(--blue4)';
                                    e.target.style.transform = 'translateY(0) scale(1)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                onMouseDown={(e) => {
                                    e.target.style.transform = 'translateY(-1px) scale(1.02)';
                                }}
                                onMouseUp={(e) => {
                                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                                }}
                            >
                                Download Resume
                            </button>
                        </a>
                    </div>
                    <div className="i-icons" style={styles.iIcons}>
                        {[
                            { href: "https://github.com/sohandj", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", delay: '0s' },
                            { href: "https://linkedin.com/in/sohandj", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg", delay: '0.1s' },
                            { href: "https://x.com/SohanDJ2002", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg", delay: '0.2s' }
                        ].map((icon, index) => (
                            <a 
                                key={index}
                                href={icon.href} 
                                target="_blank" 
                                rel="noreferrer"
                                style={{
                                    ...styles.iconLink,
                                    animationDelay: icon.delay,
                                    opacity: isLoaded ? 1 : 0,
                                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.6s ease ${icon.delay}`
                                }}
                                onMouseEnter={(e) => {
                                    const img = e.target.querySelector('img');
                                    if (img) {
                                        img.style.transform = 'scale(1.3) rotate(5deg)';
                                        img.style.filter = 'grayscale(0) brightness(1.2)';
                                    }
                                    e.target.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    const img = e.target.querySelector('img');
                                    if (img) {
                                        img.style.transform = 'scale(1) rotate(0deg)';
                                        img.style.filter = 'grayscale(0.5)';
                                    }
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                <img 
                                    src={icon.src} 
                                    style={styles.iconImg}
                                    alt="Social icon"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="i-right" style={styles.iRight}>
                    <p style={styles.paragraph}>
                        Passionate Front-end Developer skilled in HTML, CSS, JavaScript, and React.js.
                        Adept at building responsive, user-friendly applications with clean and efficient code.
                        Eager to contribute creativity, problem-solving, and technical expertise to deliver
                        impactful digital solutions while growing within a dynamic team.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Intro;