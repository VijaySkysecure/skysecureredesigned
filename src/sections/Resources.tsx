import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const RESOURCES = [
  {
    type: 'video',
    category: 'SKYSECURE DECODE',
    title: 'Daily Threat Brief: Ransomware Evolution',
    description: 'Latest analysis on emerging ransomware tactics and defensive strategies for enterprise environments.',
    imageName: 'cover-adaptive-compliance.png',
    duration: '3:42',
    author: 'Security Team',
    date: 'Today',
    authorImage: 'secteam.png',
  },
  {
    type: 'whitepaper',
    category: 'WHITEPAPER',
    title: 'AI-Driven Threat Detection: 2024 Report',
    description: 'Comprehensive analysis of machine learning applications in cybersecurity and their effectiveness against modern threats.',
    imageName: 'cover-zero-trust.png',
    action: 'Download PDF',
    pages: '24 pages',
    isNew: true,
  },
  {
    type: 'case-study',
    category: 'CASE STUDY',
    title: 'Fortune 500 Zero Trust Implementation',
    description: 'How we helped a global corporation implement zero trust architecture across 50,000 endpoints in 90 days.',
    imageName: 'cover-threat-hunting.png',
    action: 'Read Case Study→',
    readTime: '8 min read',
  },
  {
    type: 'blog',
    category: 'BLOG POST',
    title: 'The Future of Cloud Security',
    description: 'Exploring emerging trends in cloud security architecture and the role of AI in protecting distributed workloads.',
    imageName: 'cover-future-of-sec.png',
    author: 'Sarah Chen',
    date: '2 days ago',
    authorImage: 'sarahchen.png',
  },
  {
    type: 'video',
    category: 'SKYSECURE DECODE',
    title: 'Weekly Cyber Intelligence Update',
    description: 'Comprehensive roundup of global cyber threats, vulnerabilities, and security recommendations.',
    imageName: 'cover-adaptive-compliance.png',
    duration: '2:15',
    author: 'Intel Team',
    date: '3 days ago',
    authorImage: 'intelteam.png',
  },
  {
    type: 'guide',
    category: 'GUIDE',
    title: 'SOC 2 Compliance Checklist',
    description: 'Step-by-step guide to achieving SOC 2 compliance with practical implementation strategies and timelines.',
    imageName: 'cover-soc2.png',
    action: 'Download Guide',
    price: 'Free',
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
            <article key={resource.title} className="resource-card">
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
                  {resource.price && (
                    <div className="resource-price">{resource.price}</div>
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
