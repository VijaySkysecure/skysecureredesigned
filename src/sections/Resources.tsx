import React, { useState, useRef, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const RESOURCES = [
  {
    type: 'video',
    category: 'SKYSECURE DECODE',
    title: 'Daily Threat Brief: Ransomware Evolution',
    description: 'Latest analysis on emerging ransomware tactics and defensive strategies for enterprise environments.',
    imageName: 'knowledge/ransomware-skull-hero.png',
    author: '',
    date: 'Today',
    authorImage: 'homepage/secteam.png',
  },
  {
    type: 'whitepaper',
    category: 'WHITEPAPER',
    title: 'AI-Driven Threat Detection: 2024 Report',
    description: 'Comprehensive analysis of machine learning applications in cybersecurity and their effectiveness against modern threats.',
    imageName: 'homepage/cover-zero-trust.png',
    pages: '',
    isNew: true,
  },
  {
    type: 'whitepaper',
    category: 'WHITEPAPER',
    title: 'Zero Trust in Hybrid Cloud Environments',
    description: 'Comprehensive guide to implementing Zero Trust architecture across hybrid cloud environments for enhanced security and compliance.',
    imageName: 'knowledge/zero-trust-visual.png',
    pages: '',
    isNew: true,
  },
  {
    type: 'case-study',
    category: 'CASE STUDY',
    title: 'Healthcare Cloud Security Overhaul',
    description: 'Transforming healthcare data protection through comprehensive cloud security modernization and Zero Trust implementation.',
    imageName: 'homepage/cover-threat-hunting.png',
    readTime: '8 min read',
  },
  {
    type: 'case-study',
    category: 'CASE STUDY',
    title: 'Securing the Software Supply Chain for a B2B SaaS',
    description: 'Comprehensive software supply chain security implementation for B2B SaaS companies, protecting against vulnerabilities and ensuring compliance.',
    imageName: 'knowledge/software-supply-chain-network.png',
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
    imageName: 'knowledge/azure-sentinel-hero.png',
    author: 'Nithin Ramegowda',
    date: 'July 08, 2023',
    authorImage: 'homepage/portrait2.png',
  },
  {
    type: 'blog',
    category: 'BLOG POST',
    title: 'The Future of Cloud Security',
    description: 'As organizations continue to migrate their operations to the cloud, the security landscape is evolving rapidly.',
    imageName: 'knowledge/cloud-security-hero.png',
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
    author: '',
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredResources = RESOURCES.filter(resource => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'skysecure-decode') return resource.type === 'video';
    return resource.type === activeFilter;
  });

  const updateScrollButtons = () => {
    if (gridRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.scrollWidth / filteredResources.length;
      gridRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      const cardWidth = gridRef.current.scrollWidth / filteredResources.length;
      gridRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('scroll', updateScrollButtons);
      return () => grid.removeEventListener('scroll', updateScrollButtons);
    }
  }, [filteredResources]);

  // Reset scroll position when filter changes
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = 0;
      updateScrollButtons();
    }
  }, [activeFilter]);

  // Handle URL hash parameters for direct navigation to specific tabs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#insights-')) {
        const tabId = hash.replace('#insights-', '');
        const validTabIds = FILTER_OPTIONS.map(option => option.id);
        if (validTabIds.includes(tabId)) {
          setActiveFilter(tabId);
          setTimeout(() => {
            const tabButton = document.querySelector(`[data-tab="${tabId}"]`) as HTMLElement;
            if (tabButton && !tabButton.classList.contains('active')) {
              tabButton.click();
            }
            const resourcesSection = document.getElementById('insights');
            if (resourcesSection) {
              resourcesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        }
      }
    };

    // Check hash and sessionStorage on component mount
    const checkInitialHash = () => {
      // First check sessionStorage (set by breadcrumb navigation)
      const activateTab = sessionStorage.getItem('activateTab');
      if (activateTab) {
        sessionStorage.removeItem('activateTab');
        const validTabIds = FILTER_OPTIONS.map(option => option.id);
        if (validTabIds.includes(activateTab)) {
          setActiveFilter(activateTab);
          setTimeout(() => {
            const tabButton = document.querySelector(`[data-tab="${activateTab}"]`) as HTMLElement;
            if (tabButton && !tabButton.classList.contains('active')) {
              tabButton.click();
            }
            const resourcesSection = document.getElementById('insights');
            if (resourcesSection) {
              resourcesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
          return true;
        }
      }
      
      // Then check hash
      const hash = window.location.hash;
      if (hash && hash.startsWith('#insights-')) {
        handleHashChange();
        return true;
      }
      return false;
    };
    
    // Check immediately
    if (!checkInitialHash()) {
      // Also check after delays in case hash wasn't available immediately
      setTimeout(() => {
        if (!checkInitialHash()) {
          setTimeout(checkInitialHash, 300);
        }
      }, 200);
    }

    // Listen for hash changes (for when hash changes without page reload)
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section className="section--light" id="insights">
      <div className="container">
        <SectionHeader
          title="Skysecure’s Intelligence Hub"
          description="Gain access to expert insights and practical strategies across Cybersecurity, Data, Infrastructure, and AI. By subscribing to our newsletter, you can get the latest insights delivered straight to your inbox. No noise, no commitments, unsubscribe anytime."
        />
        
        {/* Filter Toggle Bar */}
        <div className="resource-filters">
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter.id}
              className={`resource-filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              data-tab={filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Resource Grid with Navigation */}
        <div className="resource-grid-container">
          {canScrollLeft && (
            <button 
              className="resource-nav-button resource-nav-button--left"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          
          <div className="resource-grid" ref={gridRef}>
          {filteredResources.map((resource, index) => (
            <article 
              key={resource.title} 
              className={`resource-card ${index >= 3 ? 'resource-card--scrollable' : ''}`}
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
                <div style={{ transform: 'scale(1.3)' }}>
                  <ImagePlaceholder
                    label={`${resource.title} cover`}
                    imageName={resource.imageName}
                    height={200}
                    borderRadius={0}
                  />
                </div>
              </div>
              <div className="resource-card__content">
                <div className={`resource-category ${resource.category === 'SKYSECURE DECODE' ? 'skysecure-decode' : ''}`}>{resource.category}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                
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
                      {resource.type !== 'blog' && resource.date && (
                        <span className="resource-date">{resource.date}</span>
                      )}
                    </div>
                  )}
                  
                  <div className="resource-action-group">
                    {resource.pages && (
                      <div className="resource-pages">{resource.pages}</div>
                    )}
                    {resource.readTime && (
                      <div className="resource-read-time">{resource.readTime}</div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
          </div>
          
          {canScrollRight && (
            <button 
              className="resource-nav-button resource-nav-button--right"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
