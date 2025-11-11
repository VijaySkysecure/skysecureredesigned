import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import '../styles/testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    content: "Deploying Microsoft software licensing with SkySecure was incredibly easy and seamless. Their support team ensured a smooth process, and the flexible licensing options have perfectly matched our growing needs. We've seen a significant reduction in overhead costs and hassle-free compliance",
    image: "https://skysecurestorageaqa.blob.core.windows.net/testimonialimages/68806734cf442f4c9593ae5e-testimonials-1753245492342.webp",
    name: "SAPTESH PARISH",
    company: "Indegene",
  },
  {
    id: 2,
    content: "Skysecure's security team has been a game-changer for our company. Their proactive approach and expertise have helped us safeguard critical assets while ensuring smooth operations. We trust them to keep our systems secure and compliant at all times.",
    image: "https://skysecurestorageaqa.blob.core.windows.net/testimonialimages/68806734cf442f4c9593ae5e-testimonials-1753245492342.webp",
    name: "KULDEEP KHANDAR",
    company: "Bisleri",
  },
  {
    id: 3,
    content: "Skysecure's marketplace has made purchasing licenses incredibly easy and efficient. The user-friendly interface and streamlined process saved us time and effort, ensuring we got exactly what we needed without any hassle",
    image: "https://skysecurestorageaqa.blob.core.windows.net/testimonialimages/68806734cf442f4c9593ae5e-testimonials-1753245492342.webp",
    name: "Eweshvar",
    company: "Grossaryfarms, CEO",
  },
];

export function Testimonials(): React.ReactElement {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <SectionHeader
          title="Testimonials"
          description="500+ Businesses. One Shared Goal — Secure, Intelligent Growth."
          alignment="center"
        />
        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-author-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

