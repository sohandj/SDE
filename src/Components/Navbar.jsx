import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    handleScroll();
    handleSectionChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    navbar: {
      color: 'black',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      background: isScrolled
        ? 'rgba(255, 255, 255, 0.95)'
        : 'rgba(255, 255, 255, 0.8)',  // changed for visibility
      backdropFilter: 'blur(20px)',
      borderBottom: isScrolled
        ? '1px solid rgba(0, 0, 0, 0.1)'
        : '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1000,
      boxShadow: isScrolled
        ? '0 4px 20px rgba(0, 0, 0, 0.1)'
        : 'none'
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      textDecoration: 'none',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: isScrolled ? '#2c5aa0' : '#333', // changed for visibility
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    nameLetter: {
      fontSize: '2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: 'bold',
      transition: 'all 0.3s ease'
    },
    nameRest: {
      color: isScrolled ? '#2c5aa0' : '#333', // changed for visibility
      transition: 'color 0.3s ease'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(0)',
      transition: 'transform 0.3s ease'
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '2rem'
    },
    navListItem: {
      position: 'relative'
    },
    navLink: {
      textDecoration: 'none',
      color: isScrolled ? '#333' : '#333', // changed for visibility
      fontWeight: '500',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '25px',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: activeSection === 'home' && !isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
    },
    navLinkActive: {
      background: isScrolled
        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        : 'rgba(255, 255, 255, 0.2)',
      color: '#fff',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
    },
    navIcon: {
      fontSize: '1.1rem',
      transition: 'transform 0.3s ease'
    },
    navText: {
      transition: 'all 0.3s ease'
    },
    mobileToggle: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      padding: '0.5rem',
      gap: '4px'
    },
    hamburger: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      background: isScrolled ? '#333' : '#333', // changed for visibility
      borderRadius: '2px',
      transition: 'all 0.3s ease',
      transformOrigin: 'center'
    },
    mobileOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      opacity: isMobileMenuOpen ? 1 : 0,
      visibility: isMobileMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
      zIndex: 998,
      backdropFilter: 'blur(5px)'
    }
  };

  const mediaQueries = `
    @media (max-width: 768px) {
      .nav-right {
        position: fixed !important;
        top: 70px;
        right: ${isMobileMenuOpen ? '0' : '-100%'};
        width: 280px;
        height: calc(100vh - 70px);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: flex-start;
        padding: 2rem 1rem;
        transition: right 0.3s ease;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      .nav-list {
        flex-direction: column !important;
        gap: 1rem !important;
        width: 100%;
      }
      
      .nav-link {
        color: #333 !important;
        justify-content: center;
        padding: 1rem !important;
        border-radius: 12px;
        background: rgba(102, 126, 234, 0.1);
        width: 100%;
      }
      
      .mobile-toggle {
        display: flex !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <nav style={styles.navbar}>
        <div style={styles.leftSection}>
          <a
            href="#home"
            style={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            <span style={styles.nameLetter}>S</span>
            <span style={styles.nameRest}>ohan </span>
            <span style={styles.nameRest}>D J</span>
          </a>
        </div>

        <div
          className="nav-right"
          style={{
            ...styles.rightSection,
            position: 'relative'
          }}
        >
          <ul style={styles.navList} className="nav-list">
            {[
              { href: 'home', label: 'Home', icon: '🏠' },
              { href: 'skills', label: 'Skills', icon: '⚡' },
              { href: 'certificates', label: 'Certificates', icon: '🎓' },
              { href: 'contact', label: 'Contact', icon: '📞' }

            ].map((item) => (
              <li key={item.href} style={styles.navListItem}>
                <a
                  href={`#${item.href}`}
                  className="nav-link"
                  style={{
                    ...styles.navLink,
                    ...(activeSection === item.href ? styles.navLinkActive : {})
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.href) {
                      e.target.style.background = isScrolled
                        ? 'rgba(102, 126, 234, 0.1)'
                        : 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                    const icon = e.target.querySelector('.nav-icon');
                    if (icon) icon.style.transform = 'scale(1.2) rotate(10deg)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.href) {
                      e.target.style.background = 'transparent';
                      e.target.style.transform = 'translateY(0)';
                    }
                    const icon = e.target.querySelector('.nav-icon');
                    if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <span className="nav-icon" style={styles.navIcon}>{item.icon}</span>
                  <span style={styles.navText}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mobile-toggle"
          style={styles.mobileToggle}
          onClick={toggleMobileMenu}
        >
          <div style={styles.hamburger}>
            <span style={{
              ...styles.hamburgerLine,
              transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'rotate(0deg)'
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              opacity: isMobileMenuOpen ? 0 : 1
            }}></span>
            <span style={{
              ...styles.hamburgerLine,
              transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'rotate(0deg)'
            }}></span>
          </div>
        </div>

        <div
          style={styles.mobileOverlay}
          onClick={toggleMobileMenu}
        ></div>
      </nav>
    </>
  );
}

export default Navbar;
