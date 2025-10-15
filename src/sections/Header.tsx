import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

type NavLink = {
  label: string;
  href?: string;
  menu?: Array<{ label: string; href: string }>;
  flagImageName?: string;
};

const NAV_ITEMS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  {
    label: 'Services',
    href: '#services',
    menu: [
      { label: 'Advisory Services', href: '#services-advisory' },
      { label: 'Managed Programs', href: '#services-managed' },
    ],
  },
  {
    label: 'Resource',
    href: '#insights',
    menu: [
      { label: 'Insights Hub', href: '#resource-insights' },
      { label: 'Media Library', href: '#resource-media' },
    ],
  },
  { label: 'Product', href: '#product' },
  { label: 'Contact Us', href: '#contact' },
  {
    label: 'India',
    href: '#india',
    menu: [
      { label: 'Switch to Global', href: '#region-global' },
      { label: 'Switch to APAC', href: '#region-apac' },
    ],
    flagImageName: 'header/flag-india.png',
  },
];

export function Header(): React.ReactElement {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  
  // Check if we're on the homepage
  const isHomepage = window.location.pathname === '/' || window.location.pathname === '';

  const openMenuFor = (label: string): void => {
    setOpenMenu(label);
  };

  const closeMenu = (): void => {
    setOpenMenu(null);
  };

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
        <ImagePlaceholder
          label="Skysecure logo"
          imageName="header/logo-header.png"
          width={146}
          height={43}
          borderRadius={0}
          className="header__logo image-placeholder--bare"
        />
        <nav className="header__nav" aria-label="Primary navigation">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => {
              const hasMenu = Boolean(item.menu && item.menu.length > 0);
              const isOpen = openMenu === item.label;

              return (
                <li
                  key={item.label}
                  className={`header__nav-item${hasMenu ? ' header__nav-item--has-menu' : ''}${isOpen ? ' is-open' : ''}`}
                  onMouseLeave={closeMenu}
                  onBlur={handleBlur}
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
                        onMouseEnter={() => openMenuFor(item.label)}
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
                      <div className="header__submenu" role="menu">
                        {item.menu!.map((option) => (
                          <a
                            key={option.label}
                            className="header__submenu-link"
                            href={option.href}
                            role="menuitem"
                            onClick={closeMenu}
                          >
                            {option.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a 
                      className={`header__link${item.label === 'Home' && isHomepage ? ' header__link--active' : ''}`}
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

