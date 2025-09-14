import React, { useEffect, useRef, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
      color: '#fff',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px'
    },
    footerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
      pointerEvents: 'none'
    },
    footerContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    footerColWrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem',
      marginTop: '1.5rem',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease'
    },
    footerCol: {
      minWidth: '200px',
      textAlign: 'left'
    },
    colTitle: {
      fontSize: '1.25rem',
      marginBottom: '0.75rem',
      fontWeight: 'bold',
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '0.3rem'
    },
    colTitleUnderline: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '2px',
      background: 'linear-gradient(90deg, #fff, transparent)',
      width: isVisible ? '40px' : '0',
      transition: 'width 0.8s ease',
      transitionDelay: '0.3s'
    },
    sectionTitle: {
      fontSize: '1rem',
      marginBottom: '0.4rem',
      fontWeight: '500'
    },
    sectionText: {
      fontSize: '0.95rem',
      color: '#e0e0e0',
      lineHeight: 1.4,
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      position: 'relative',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid transparent'
    },
    footerIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '1.5rem'
    },
    iconLink: {
      display: 'inline-block',
      padding: '0.5rem',
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      backdropFilter: 'blur(8px)'
    },
    iconImg: {
      width: '24px',
      height: '24px',
      filter: 'brightness(0) invert(1)',
      transition: 'all 0.3s ease'
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      marginTop: '2rem',
      paddingTop: '0.8rem',
      fontSize: '0.85rem',
      color: '#ccc',
      textAlign: 'center',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'all 0.6s ease',
      transitionDelay: '0.4s'
    }
  };

  const mediaQueries = `
    @media (max-width: 768px) {
      .footer-col-wrapper {
        flex-direction: column !important;
        align-items: center;
      }
      .footer-col {
        text-align: center !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <footer 
        ref={footerRef}
        style={styles.footer}
        id="contact"
      >
        <div style={styles.footerOverlay}></div>
        <div style={styles.footerContainer}>
          <h4 style={styles.colTitle}>
            Contact
            <div style={styles.colTitleUnderline}></div>
          </h4>

          <div className="footer-col-wrapper" style={styles.footerColWrapper}>
            <div className="footer-col" style={styles.footerCol}>
              <div style={styles.sectionTitle}>Email</div>
              <div style={styles.sectionText}>
                <a 
                  href="mailto:sohandj@gmail.com"
                  style={styles.link}
                  onMouseEnter={(e) => {
                    e.target.style.borderBottomColor = '#60a5fa';
                    e.target.style.color = '#60a5fa';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderBottomColor = 'transparent';
                    e.target.style.color = '#fff';
                  }}
                >
                  sohandj@gmail.com
                </a>
              </div>
            </div>

            <div className="footer-col" style={styles.footerCol}>
              <div style={styles.sectionTitle}>Phone</div>
              <div style={styles.sectionText}>
                <a 
                  href="tel:+91 8762767042"
                  style={styles.link}
                  onMouseEnter={(e) => {
                    e.target.style.borderBottomColor = '#60a5fa';
                    e.target.style.color = '#60a5fa';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderBottomColor = 'transparent';
                    e.target.style.color = '#fff';
                  }}
                >
                  +91 8762767042
                </a>
              </div>
            </div>
          </div>

          <div className="footer-icons" style={styles.footerIcons}>
            <a 
              href="https://github.com/sohandj" 
              target="_blank" 
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <svg style={styles.iconImg} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a 
              href="https://linkedin.com/in/sohandj" 
              target="_blank" 
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <svg style={styles.iconImg} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a 
              href="https://x.com/sohandj"
              target="_blank"
              rel="noreferrer"
              style={styles.iconLink}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <svg style={styles.iconImg} viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.67a4.28 4.28 0 001.33 5.71 4.26 4.26 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97 8.6 8.6 0 01-5.32 1.84A8.65 8.65 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 5.5a8.48 8.48 0 01-2.54.7z"/>
              </svg>
            </a>
          </div>

          <div style={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Sohan D J. Glad to connect with you...!</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
