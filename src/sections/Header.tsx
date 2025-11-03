import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

type NavLink = {
  label: string;
  href?: string;
  menu?: Array<{ label: string; href: string }>;
  flagImageName?: string;
};

const NAV_ITEMS: NavLink[] = [
  {
    label: 'Company',
    href: '#company',
    menu: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    label: 'Solutions',
    href: '#solutions',
    menu: [
      { label: 'Professional Services', href: '/professional-services' },
      { label: 'Managed Services', href: '/managed-services' },
    ],
  },
  {
    label: 'Product',
    href: '#product',
    menu: [
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'Realize', href: '#realize' },
    ],
  },
];

export function Header(): React.ReactElement {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = React.useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  const openMenuFor = (label: string): void => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    // Toggle: if already open, close it; otherwise open it
    if (openMenu === label) {
      setOpenMenu(null);
    } else {
      setOpenMenu(label);
    }
  };

  const closeMenu = (): void => {
    setOpenMenu(null);
  };

  const handleMouseEnter = (label: string): void => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenMenu(label);
  };

  const handleMouseLeave = (): void => {
    // Add a small delay before closing to allow mouse movement between trigger and dropdown
    const timeout = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleMouseEnterDropdown = (label: string): void => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenMenu(label);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Close mobile menu when window is resized to desktop size
  React.useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 968 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setOpenMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openMenu && !target.closest('.header__nav-item')) {
        closeMenu();
      }
      if (isMobileMenuOpen && !target.closest('.site-header')) {
        closeMobileMenu();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (openMenu) {
          closeMenu();
        }
        if (isMobileMenuOpen) {
          closeMobileMenu();
        }
      }
    };

    if (openMenu || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [openMenu, isMobileMenuOpen]);

  const handleNavigation = (href: string): void => {
    if (href.startsWith('/')) {
      // For page navigation, use window.location
      window.location.href = href;
    } else {
      // For anchor links, use default behavior
      return;
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLLIElement>,
  ): void => {
    const next = event.relatedTarget as Node | null;
    if (!next || !event.currentTarget.contains(next)) {
      closeMenu();
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenMenu(null);
    }
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="header__overlay" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      <header className="site-header">
        <div className="header__bar">
        <div className="header__bar-top">
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
            style={{ textDecoration: 'none' }}
          >
            <ImagePlaceholder
              label="Skysecure logo"
              imageName="header/logo-header.png"
              width={146}
              height={43}
              borderRadius={0}
              className="header__logo image-placeholder--bare"
            />
          </a>
          <button
            type="button"
            className="header__mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className={`header__mobile-toggle-icon ${isMobileMenuOpen ? 'is-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <nav 
          className={`header__nav ${isMobileMenuOpen ? 'is-open' : ''}`} 
          aria-label="Primary navigation"
        >
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => {
              const hasMenu = Boolean(item.menu && item.menu.length > 0);
              const isOpen = openMenu === item.label;

              return (
                <li
                  key={item.label}
                  className={`header__nav-item${hasMenu ? ' header__nav-item--has-menu' : ''}${isOpen ? ' is-open' : ''}`}
                  onBlur={handleBlur}
                  onMouseEnter={hasMenu && !isMobileMenuOpen ? () => handleMouseEnter(item.label) : undefined}
                  onMouseLeave={hasMenu && !isMobileMenuOpen ? handleMouseLeave : undefined}
                >
                  {hasMenu ? (
                    <>
                      <button
                        type="button"
                        className="header__link header__link--trigger"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => openMenuFor(item.label)}
                        onFocus={() => openMenuFor(item.label)}
                        onMouseEnter={!isMobileMenuOpen ? () => handleMouseEnter(item.label) : undefined}
                      >
                        <span>{item.label}</span>
                        {item.flagImageName ? (
                          <ImagePlaceholder
                            label={`${item.label} flag`}
                            imageName={item.flagImageName}
                            width={14}
                            height={11}
                            borderRadius={0}
                            className="header__flag image-placeholder--bare"
                          />
                        ) : null}
                        <span className="header__caret" aria-hidden="true" />
                      </button>
                      <div 
                        className="header__submenu" 
                        role="menu"
                        onMouseEnter={!isMobileMenuOpen ? () => handleMouseEnterDropdown(item.label) : undefined}
                        onMouseLeave={!isMobileMenuOpen ? handleMouseLeave : undefined}
                      >
                        {item.menu!.map((option) => (
                          <a
                            key={option.label}
                            className="header__submenu-link"
                            href={option.href}
                            role="menuitem"
                            onClick={(e) => {
                              if (option.href.startsWith('/')) {
                                e.preventDefault();
                                window.location.href = option.href;
                              }
                              closeMenu();
                              closeMobileMenu();
                            }}
                          >
                            {option.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a 
                      className="header__link"
                      href={item.href}
                      onClick={(e) => {
                        if (item.href?.startsWith('/')) {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }
                        closeMobileMenu();
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}

