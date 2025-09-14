import React, { useState } from 'react';
import { Download, Award, Calendar, Shield, Brain } from 'lucide-react';
import './Certificate.css'; // Import the CSS file

const Certificate = () => {
  const [certificates] = useState([
    {
      id: 1,
      title: "Cyber Security Analyst Job Simulation",
      organization: "Professional Development",
      type: "simulation",
      icon: Shield,
      color: "icon-shield",
      filename: "Cyber Security Analyst Job Simulation.pdf"
    },
    {
      id: 2,
      title: "Digital Defenders CTF 2023 - Webinar 1 Network Analysis and Tools",
      organization: "Digital Defenders",
      type: "ctf",
      icon: Shield,
      color: "icon-blue",
      filename: "Digital Defenders CTF 2023 Masterclass Webinar-1 Certificate.pdf"
    },
    {
      id: 3,
      title: "Digital Defenders CTF 2023 - Webinar 3 Web Security and Penetration Testing - Part 1 ",
      organization: "Digital Defenders",
      type: "ctf",
      icon: Shield,
      color: "icon-blue",
      filename: "Digital Defenders CTF 2023 Masterclass Webinar-3 Certificate .pdf"
    },
    {
      id: 4,
      title: "Digital Defenders CTF 2023 - Webinar 4 Web Security and Penetration Testing - Part 2 ",
      organization: "Digital Defenders",
      type: "ctf",
      icon: Shield,
      color: "icon-blue",
      filename: "Digital Defenders CTF 2023 Masterclass Webinar-4 Certificate .pdf"
    },
    {
      id: 5,
      title: "Digital Defenders CTF 2023 - Webinar 5 Forensics - Part 1 ",
      organization: "Digital Defenders",
      type: "ctf",
      icon: Shield,
      color: "icon-blue",
      filename: "Digital Defenders CTF 2023 Masterclass Webinar-5 Certificate.pdf"
    },
    {
      id: 6,
      title: "Digital Defenders CTF 2023 - Webinar 7 Cryptography - Part 1 ",
      organization: "Digital Defenders",
      type: "ctf",
      icon: Shield,
      color: "icon-blue",
      filename: "Digital Defenders CTF 2023 Masterclass Webinar-7 Certificate .pdf"
    },
    {
      id: 7,
      title: "Digital Defenders CTF 2023 - Webinar 8 Cryptography - Part 2",
      organization: "Digital Defenders",
      type: "ctf",
      icon: Shield,
      color: "icon-blue",
      filename: "Digital Defenders CTF 2023 Masterclass Webinar-8 Certificate.pdf"
    },
    {
      id: 8,
      title: "Micro-Certification - Agentic AI Executive",
      organization: "AI Professional Development",
      type: "ai",
      icon: Brain,
      color: "icon-purple",
      filename: "Micro-Certification - Agentic AI Executive.pdf"
    }
  ]);

  const handleDownload = async (filename) => {
    try {
      const fileData = await window.fs.readFile(filename);
      const blob = new Blob([fileData], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Error downloading certificate. Please try again.');
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'simulation': return 'Job Simulation';
      case 'ctf': return 'CTF Masterclass';
      case 'ai': return 'AI Certification';
      default: return 'Certificate';
    }
  };

  return (
    <div className="certificate-container" id='certificates'>
      {/* Header */}
      <div className="certificate-header">
        <div className="certificate-header-content">
          <div className="icon-wrapper">
            <Award className="h-12 w-12" />
          </div>
          <h1 className="header-title">Professional Certificates</h1>
          <p className="header-subtitle">
            A curated collection of cybersecurity and AI certifications showcasing expertise across multiple domains.
          </p>
          <div className="header-stats">
            <div className="stat-block">
              <div className="stat-number">{certificates.length}</div>
              <div className="stat-label">Certificates</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">3</div>
              <div className="stat-label">Specializations</div>
            </div>

          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="certificates-grid">
        {certificates.map((cert) => {
          const IconComponent = cert.icon;
          return (
            <div key={cert.id} className="certificate-card">
              <div className={`icon-gradient ${cert.color}`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="certificate-type">{getTypeLabel(cert.type)}</div>
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-org">{cert.organization}</p>
              </div>
              <div className="download-overlay">
                <a
                  href={`/${cert.filename}`}
                  download
                  className="download-button"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </div>
              <div className="calendar-icon">
                <Calendar className="h-4 w-4" />
              </div>
            </div>
          );
        })}
      </div>


      {/* Footer */}
      <div className="footer">
        All certificates are verified and authenticated. Click on any certificate to download the PDF.
      </div>
    </div>
  );
};

export default Certificate;
