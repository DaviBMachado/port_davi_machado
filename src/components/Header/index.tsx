import { useState, useEffect } from 'react';
import './Header.css';

const navItems = [
  { label: 'Início',    href: '#hero' },
  { label: 'Sobre',     href: '#about' },
  { label: 'Projetos',  href: '#projects' },
  { label: 'Contato',   href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map(n => document.querySelector(n.href) as HTMLElement | null)
        .filter(Boolean) as HTMLElement[];

      for (let i = sections.length - 1; i >= 0; i--) {
        const top = sections[i].getBoundingClientRect().top;
        if (top <= 100) {
          setActive(`#${sections[i].id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">

        <a href="#hero" className="header__logo" onClick={() => handleNavClick('#hero')}>
          <span className="header__logo-mark">DM</span>
          <span className="header__logo-text">Davi Machado</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <ul className="header__nav-list">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`header__nav-link${active === item.href ? ' header__nav-link--active' : ''}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="header__cta"
          onClick={() => handleNavClick('#contact')}
        >
          Fale Comigo
        </a>

        <button
          className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`header__drawer${menuOpen ? ' header__drawer--open' : ''}`}>
        <ul>
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`header__drawer-link${active === item.href ? ' header__drawer-link--active' : ''}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
