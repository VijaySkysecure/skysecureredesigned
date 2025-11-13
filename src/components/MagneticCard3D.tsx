import React, { useRef, useEffect, useState } from 'react';

interface MagneticCard3DProps {
  title: string;
  description: string;
  keyPoints: string[];
  index: number;
}

export function MagneticCard3D({ title, description, keyPoints }: MagneticCard3DProps): React.ReactElement {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  useEffect(() => {
    if (!cardRef.current) return;

    let observer: IntersectionObserver | null = null;
    let fallbackTimeout: ReturnType<typeof setTimeout> | null = null;

    const checkAndSetVisible = () => {
      if (!cardRef.current) return false;
      
      const rect = cardRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight + 200 && rect.bottom > -200;
      
      if (isInViewport) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkAndSetVisible()) {
      return;
    }

    // Use setTimeout to ensure DOM is fully rendered, then check again
    const timeoutId = setTimeout(() => {
      if (checkAndSetVisible()) {
        return;
      }

      // If still not visible, set up observer
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (observer) {
                observer.disconnect();
              }
              if (fallbackTimeout) {
                clearTimeout(fallbackTimeout);
              }
            }
          });
        },
        { threshold: 0.01, rootMargin: '200px' }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      // Fallback: make visible after 1 second if observer hasn't triggered
      fallbackTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }, 150);
    
    return () => {
      clearTimeout(timeoutId);
      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    const scale = 1.05;

    setTransform({ rotateX, rotateY, scale });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      ref={cardRef}
      className={`magnetic-card-3d ${isVisible ? 'magnetic-card-3d-visible' : ''}`}
      style={{
        '--rotate-x': `${transform.rotateX}deg`,
        '--rotate-y': `${transform.rotateY}deg`,
        '--scale': transform.scale,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="magnetic-card-3d-inner">
        <h3 className="magnetic-card-3d-title">{title}</h3>
        <p className="magnetic-card-3d-description">{description}</p>
        <ul className="magnetic-card-3d-keypoints">
          {keyPoints.map((point, idx) => (
            <li
              key={idx}
              className={`magnetic-card-3d-keypoint ${isVisible ? 'magnetic-card-3d-keypoint-visible' : ''}`}
              style={{
                animationDelay: `${0.2 + idx * 0.1}s`,
              }}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

