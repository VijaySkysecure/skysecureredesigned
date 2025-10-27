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
      { label: 'India', href: '#india' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
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

  const openMenuFor = (label: string): void => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenMenu(label);
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

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (openMenu && !target.closest('.header__nav-item')) {
        closeMenu();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && openMenu) {
        closeMenu();
      }
    };

    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [openMenu]);

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

  return (
    <header className="site-header">
      <div className="header__bar">
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
        <nav className="header__nav" aria-label="Primary navigation">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => {
              const hasMenu = Boolean(item.menu && item.menu.length > 0);
              const isOpen = openMenu === item.label;

              return (
                <li
                  key={item.label}
                  className={`header__nav-item${hasMenu ? ' header__nav-item--has-menu' : ''}${isOpen ? ' is-open' : ''}`}
                  onBlur={handleBlur}
                  onMouseEnter={hasMenu ? () => handleMouseEnter(item.label) : undefined}
                  onMouseLeave={hasMenu ? handleMouseLeave : undefined}
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
                        onMouseEnter={() => handleMouseEnter(item.label)}
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
                        onMouseEnter={() => handleMouseEnterDropdown(item.label)}
                        onMouseLeave={handleMouseLeave}
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
  );
}

