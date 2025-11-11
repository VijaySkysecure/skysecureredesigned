import React from 'react';
import './../styles/marketplace-section.css';

export function MarketplaceSection(): React.ReactElement {
  const features = [
    'Verified and Secure',
    'Instant Integration',
    'Scalable for Every Business',
    'End to End Support'
  ];

  return (
    <section className="marketplace-section" id="marketplace">
      <div className="container">
        <div className="marketplace-content">
          <h2 className="marketplace-heading">Marketplace</h2>
          <h3 className="marketplace-subheading">Find the Right Solutions for Your Business.</h3>
          <p className="marketplace-description">
            Discover a curated marketplace built for modern enterprises where you can find, compare, and procure trusted technology solutions, all in one place. From innovative software and high-performance hardware to scalable cloud services, every offering is curated, verified, and ready to help your business innovate faster and operate smarter.
          </p>
          
          <div className="marketplace-features">
            {features.map((feature, index) => (
              <div key={index} className="marketplace-feature">
                {feature}
              </div>
            ))}
          </div>

          <div className="marketplace-cta">
            <button 
              type="button" 
              className="button"
              onClick={() => window.open('https://shop.skysecure.ai/', '_blank')}
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
