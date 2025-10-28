import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const RESOURCES = [
  {
    type: 'video',
    category: 'SKYSECURE DECODE',
    title: 'Daily Threat Brief: Ransomware Evolution',
    description: 'Latest analysis on emerging ransomware tactics and defensive strategies for enterprise environments.',
    imageName: 'homepage/cover-adaptive-compliance.png',
    duration: '3:42',
    author: 'Security Team',
    date: 'Today',
    authorImage: 'homepage/secteam.png',
  },
  {
    type: 'whitepaper',
    category: 'WHITEPAPER',
    title: 'AI-Driven Threat Detection: 2024 Report',
    description: 'Comprehensive analysis of machine learning applications in cybersecurity and their effectiveness against modern threats.',
    imageName: 'homepage/cover-zero-trust.png',
    action: 'Download PDF',
    pages: '24 pages',
    isNew: true,
  },
  {
    type: 'whitepaper',
    category: 'WHITEPAPER',
    title: 'Zero Trust in Hybrid Cloud Environments',
    description: 'Comprehensive guide to implementing Zero Trust architecture across hybrid cloud environments for enhanced security and compliance.',
    imageName: 'homepage/cover-zero-trust-hybrid.png',
    action: 'Download PDF',
    pages: '28 pages',
    isNew: true,
  },
  {
    type: 'case-study',
    category: 'CASE STUDY',
    title: 'Healthcare Cloud Security Overhaul',
    description: 'Transforming healthcare data protection through comprehensive cloud security modernization and Zero Trust implementation.',
    imageName: 'homepage/cover-threat-hunting.png',
    action: 'Read Case Study→',
    readTime: '8 min read',
  },
  {
    type: 'case-study',
    category: 'CASE STUDY',
    title: 'Securing the Software Supply Chain for a B2B SaaS',
    description: 'Comprehensive software supply chain security implementation for B2B SaaS companies, protecting against vulnerabilities and ensuring compliance.',
    imageName: 'homepage/cover-software-supply-chain.png',
    action: 'Read Case Study→',
    readTime: '6 min read',
  },
  {
    type: 'blog',
    category: 'BLOG POST',
    title: 'A Guide to IT Security Transformation in Manufacturing',
    description: 'Growth driven by Make in India initiative has accelerated the adoption of advanced technologies across manufacturing facilities.',
    imageName: 'homepage/cover-future-of-sec.png',
    author: 'Suresh Kumar',
    date: '2 years ago',
    authorImage: 'homepage/portrait1.png',
  },
  {
    type: 'blog',
    category: 'BLOG POST',
    title: 'Threat Protection with Microsoft Azure Sentinel',
    description: 'With the rise of cybersecurity threats, organizations need reliable and scalable solutions to detect and respond to attacks.',
    imageName: 'homepage/cover-azure-sentinel.png',
    author: 'Nithin Ramegowda',
    date: 'July 08, 2023',
    authorImage: 'homepage/nithin-ramegowda.png',
  },
  {
    type: 'blog',
    category: 'BLOG POST',
    title: 'The Future of Cloud Security',
    description: 'As organizations continue to migrate their operations to the cloud, the security landscape is evolving rapidly.',
    imageName: 'homepage/cover-cloud-security.png',
    author: 'Suresh Kumar',
    date: 'July 26, 2024',
    authorImage: 'homepage/portrait1.png',
  },
  {
    type: 'video',
    category: 'SKYSECURE DECODE',
    title: 'Weekly Cyber Intelligence Update',
    description: 'Comprehensive roundup of global cyber threats, vulnerabilities, and security recommendations.',
    imageName: 'homepage/cover-adaptive-compliance.png',
    duration: '2:15',
    author: 'Intel Team',
    date: '3 days ago',
    authorImage: 'homepage/intelteam.png',
  },
];

const FILTER_OPTIONS = [
  { id: 'all', label: 'All Resources' },
  { id: 'blog', label: 'Blog' },
  { id: 'whitepaper', label: 'Whitepapers' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'skysecure-decode', label: 'Skysecure Decode' },
];

export function Resources(): React.ReactElement {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredResources = RESOURCES.filter(resource => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'skysecure-decode') return resource.type === 'video';
    return resource.type === activeFilter;
  });

  return (
    <section className="section--light" id="insights">
      <div className="container">
        <SectionHeader
          title="Knowledge & Resources"
          description="Stay informed with the latest cybersecurity insights, research, and industry analysis"
        />
        
        {/* Filter Toggle Bar */}
        <div className="resource-filters">
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter.id}
              className={`resource-filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <div className="resource-grid">
          {filteredResources.map((resource) => (
            <article 
              key={resource.title} 
              className="resource-card"
              onClick={resource.type === 'blog' && (resource.title === 'A Guide to IT Security Transformation in Manufacturing' || resource.title === 'Threat Protection with Microsoft Azure Sentinel' || resource.title === 'The Future of Cloud Security') ? () => { 
                if (resource.title === 'A Guide to IT Security Transformation in Manufacturing') {
                  window.location.href = '/manufacturing-security-guide';
                } else if (resource.title === 'Threat Protection with Microsoft Azure Sentinel') {
                  window.location.href = '/azure-sentinel-guide';
                } else if (resource.title === 'The Future of Cloud Security') {
                  window.location.href = '/cloud-security-guide';
                }
              } : resource.type === 'case-study' && (resource.title === 'Healthcare Cloud Security Overhaul' || resource.title === 'Securing the Software Supply Chain for a B2B SaaS') ? () => {
                if (resource.title === 'Healthcare Cloud Security Overhaul') {
                  window.location.href = '/healthcare-cloud-security-overhaul';
                } else if (resource.title === 'Securing the Software Supply Chain for a B2B SaaS') {
                  window.location.href = '/saas-software-supply-chain';
                }
              } : resource.type === 'whitepaper' && (resource.title === 'AI-Driven Threat Detection: 2024 Report' || resource.title === 'Zero Trust in Hybrid Cloud Environments') ? () => {
                if (resource.title === 'AI-Driven Threat Detection: 2024 Report') {
                  window.location.href = '/ai-threat-detection-report';
                } else if (resource.title === 'Zero Trust in Hybrid Cloud Environments') {
                  window.location.href = '/zero-trust-hybrid-cloud';
                }
              } : resource.type === 'video' && resource.title === 'Daily Threat Brief: Ransomware Evolution' ? () => {
                window.location.href = '/ransomware-evolution';
              } : resource.type === 'video' && resource.title === 'Weekly Cyber Intelligence Update' ? () => {
                window.location.href = '/weekly-cyber';
              } : undefined}
              style={{ cursor: (resource.type === 'blog' && (resource.title === 'A Guide to IT Security Transformation in Manufacturing' || resource.title === 'Threat Protection with Microsoft Azure Sentinel' || resource.title === 'The Future of Cloud Security')) || (resource.type === 'case-study' && (resource.title === 'Healthcare Cloud Security Overhaul' || resource.title === 'Securing the Software Supply Chain for a B2B SaaS')) || (resource.type === 'whitepaper' && (resource.title === 'AI-Driven Threat Detection: 2024 Report' || resource.title === 'Zero Trust in Hybrid Cloud Environments')) || (resource.type === 'video' && (resource.title === 'Daily Threat Brief: Ransomware Evolution' || resource.title === 'Weekly Cyber Intelligence Update')) ? 'pointer' : 'default' }}
            >
              <div className="resource-card__media">
                <ImagePlaceholder
                  label={`${resource.title} cover`}
                  imageName={resource.imageName}
                  height={200}
                  borderRadius={0}
                />
                {resource.type === 'video' && (
                  <div className="video-overlay">
                    <div className="play-button">▶</div>
                    <div className="video-duration">{resource.duration}</div>
                  </div>
                )}
                {resource.isNew && (
                  <div className="new-badge">NEW</div>
                )}
              </div>
              <div className="resource-card__content">
                <div className={`resource-category ${resource.category === 'SKYSECURE DECODE' ? 'skysecure-decode' : ''}`}>{resource.category}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                
                {resource.action && (
                  <a className="resource-action" href="#insights">
                    {resource.action}
                  </a>
                )}
                
                <div className="resource-meta">
                  {resource.author && (
                    <div className="resource-author">
                      <ImagePlaceholder
                        label={`${resource.author} profile`}
                        imageName={resource.authorImage}
                        width={17}
                        height={17}
                        borderRadius={0}
                        className="author-avatar"
                      />
                      <span className="author-name">{resource.author}</span>
                      <span className="resource-date">{resource.date}</span>
                    </div>
                  )}
                  {resource.pages && (
                    <div className="resource-pages">{resource.pages}</div>
                  )}
                  {resource.readTime && (
                    <div className="resource-read-time">{resource.readTime}</div>
                  )}

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
