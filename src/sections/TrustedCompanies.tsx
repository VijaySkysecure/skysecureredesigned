import React, { useState, useEffect } from 'react';
import { getAllCustomerImages } from '../services/productService';
import '../styles/trusted-companies.css';

interface Company {
  _id?: string;
  id?: number;
  name?: string;
  clientLogo?: string;
}

const fallbackCompanies: Company[] = [
  { id: 1, name: 'Indegene' },
  { id: 2, name: 'MTR' },
  { id: 3, name: 'N' },
  { id: 4, name: 'Protiviti' },
  { id: 5, name: 'TMF Group' },
];

export function TrustedCompanies(): React.ReactElement {
  const [companiesLogo, setCompaniesLogo] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCustomerImages();
  }, []);

  const fetchAllCustomerImages = async () => {
    try {
      const response = await getAllCustomerImages();
      if (response.success && response.data?.docs) {
        setCompaniesLogo(response.data.docs);
      } else {
        console.warn("Failed to fetch customer images:", response.message);
      }
    } catch (error) {
      console.error("Error fetching all customer images", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="trusted-companies-section">
        <div className="container">
          <h2 className="trusted-companies-title">Trusted by Leading Enterprises</h2>
          <div className="trusted-companies-skeleton">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="skeleton-logo"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const displayCompanies = companiesLogo.length > 0 ? companiesLogo : fallbackCompanies;

  return (
    <section className="trusted-companies-section" style={{ marginBottom: '50px' }}>
      <div className="container">
        <h2 className="trusted-companies-title">Trusted by Leading Enterprises</h2>
        
        <div className="trusted-companies-wrapper">
          <div className="trusted-companies-marquee">
            {displayCompanies.map((company, index) => (
              <div 
                key={company._id || company.id || `company-${index}`} 
                className="trusted-company-logo"
              >
                <img
                  src={company.clientLogo || "/icons/skysecure-logo.png"}
                  alt={company.name || `Company ${index + 1}`}
                  className="company-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {displayCompanies.map((company, index) => (
              <div 
                key={`duplicate-${company._id || company.id || index}`} 
                className="trusted-company-logo"
              >
                <img
                  src={company.clientLogo || "/icons/skysecure-logo.png"}
                  alt={company.name || `Company ${index + 1}`}
                  className="company-logo-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

