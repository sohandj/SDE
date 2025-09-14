import React from 'react';

const Skills = () => {
  const skills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", alt: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", alt: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "Bootstrap" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg", alt: "Eclipse" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", alt: "PHP" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg", alt: "Jupyter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg", alt: "VS Code" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg", alt: "NPM" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "git VCS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hyperv/hyperv-original.svg", alt: "Virtual machines" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", alt: "Linux" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original-wordmark.svg", alt: "Kali Linux" },
  ];

  const skillsStyles = {
    skills: {
      minHeight: '50vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#333',
      fontWeight: 'bold',
      opacity: '0',
      transform: 'translateY(-30px)',
      animation: 'fadeInDown 0.8s ease forwards'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '2rem',
      width: '100%',
      maxWidth: '1000px'
    },
    skillCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      padding: '1rem',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      opacity: '0',
      transform: 'translateY(30px) scale(0.9)',
      animation: 'fadeInUp 0.6s ease forwards'
    },
    skillImage: {
      width: '3rem',
      height: '3rem',
      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
    },
    skillText: {
      marginTop: '0.5rem',
      fontSize: '1rem',
      fontWeight: '500',
      color: '#333',
      transition: 'all 0.3s ease',
      textAlign: 'center'
    }
  };

  // Keyframe animations as CSS
  const animations = `
    @keyframes fadeInDown {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `;

  return (
    <>
      <style>{animations}</style>
      <div id="skills" style={skillsStyles.skills}>
        <h2 style={skillsStyles.title}>Skills</h2>
        <div style={skillsStyles.skillsGrid}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              style={{
                ...skillsStyles.skillCard,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                const img = card.querySelector('img');
                const text = card.querySelector('p');
                
                card.style.transform = 'translateY(-10px) scale(1.05)';
                card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                card.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                
                if (img) {
                  img.style.transform = 'scale(1.2) rotate(5deg)';
                  img.style.filter = 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))';
                }
                
                if (text) {
                  text.style.color = '#0066cc';
                  text.style.fontWeight = '600';
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                const img = card.querySelector('img');
                const text = card.querySelector('p');
                
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                card.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                
                if (img) {
                  img.style.transform = 'scale(1) rotate(0deg)';
                  img.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))';
                }
                
                if (text) {
                  text.style.color = '#333';
                  text.style.fontWeight = '500';
                }
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(0.98)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              }}
            >
              <img 
                src={skill.src} 
                alt={skill.alt}
                style={skillsStyles.skillImage}
              />
              <p style={skillsStyles.skillText}>{skill.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;