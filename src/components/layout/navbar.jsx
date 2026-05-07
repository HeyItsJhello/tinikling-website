import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { learnConfig } from '../../data/learn';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRefs = useRef({});
  const dropdownRef = useRef(null);
  const navListRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setEventsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const sectionForIndicator = activeSection === 'socialevents' ? 'events' : activeSection;
    const activeButton = navRefs.current[sectionForIndicator];
    const navList = navListRef.current;
    if (activeButton && navList) {
      const br = activeButton.getBoundingClientRect();
      const nr = navList.getBoundingClientRect();
      setIndicatorStyle({ left: br.left - nr.left, width: br.width });
    }
  }, [activeSection]);

  const isTransparent = (activeSection === 'welcome' || activeSection === 'about') && !isScrolled;
  const textColor = isTransparent ? 'var(--red)' : 'var(--dark)';

  const navItems = [
    { label: 'Welcome',    id: 'welcome'  },
    { label: 'About Us',   id: 'about'    },
    { label: 'Events',     id: 'events'   },
    { label: 'Dances',     id: 'dances'   },
    { label: 'Officers',   id: 'officers' },
    ...(learnConfig.enabled ? [{ label: 'Learn', id: 'learn' }] : []),
    { label: 'Contact Us', id: 'contact'  },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const isEventsActive = activeSection === 'events' || activeSection === 'socialevents';

  return (
    <>
      <motion.nav
        className="main-navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 10002,
          padding: '1.1rem clamp(1rem, 4vw, 2.5rem)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isTransparent ? 'transparent' : 'var(--gold)',
          backdropFilter: isTransparent ? 'none' : 'blur(10px)',
          WebkitBackdropFilter: isTransparent ? 'none' : 'blur(10px)',
          boxShadow: isTransparent ? 'none' : '0 2px 10px rgba(0,0,0,0.3)',
          transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => setActiveSection('welcome')}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 1.9rem)',
            letterSpacing: '0.08em',
            cursor: 'pointer',
            userSelect: 'none',
            color: 'var(--red)',
            zIndex: 1002,
          }}
        >
          T.D.C
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger"
          aria-label="Toggle menu"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '0.4rem', zIndex: 1002,
            flexDirection: 'column', gap: '5px',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <motion.span animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
            style={{ display: 'block', width: '22px', height: '2px', background: 'var(--red)', borderRadius: '2px', transformOrigin: 'center' }} />
          <motion.span animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            style={{ display: 'block', width: '22px', height: '2px', background: 'var(--red)', borderRadius: '2px' }} />
          <motion.span animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
            style={{ display: 'block', width: '22px', height: '2px', background: 'var(--red)', borderRadius: '2px', transformOrigin: 'center' }} />
        </button>

        {/* Desktop nav */}
        <ul
          ref={navListRef}
          className="desktop-nav"
          style={{
            display: 'flex', gap: 'clamp(0.25rem, 1.5vw, 1.25rem)',
            listStyle: 'none', margin: 0, padding: 0,
            alignItems: 'center', position: 'relative',
          }}
        >
          {navItems.map((item) => (
            <li key={item.id} style={{ position: 'relative' }} ref={item.id === 'events' ? dropdownRef : null}>
              {item.id === 'events' ? (
                <>
                  <motion.button
                    ref={(el) => navRefs.current[item.id] = el}
                    onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                    whileHover={{ opacity: 0.7 }}
                    style={{
                      background: 'none', border: 'none',
                      color: isEventsActive ? 'var(--red)' : textColor,
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                      fontWeight: isEventsActive ? '600' : '400',
                      cursor: 'pointer',
                      padding: '0.5rem clamp(0.4rem, 1vw, 0.85rem)',
                      letterSpacing: '0.02em', whiteSpace: 'nowrap',
                      display: 'flex', alignItems: 'center', gap: '0.25rem',
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: eventsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.18 }}
                      style={{ display: 'inline-block', fontSize: '0.6rem', lineHeight: 1 }}
                    >
                      ▾
                    </motion.span>
                  </motion.button>

                  <AnimatePresence>
                    {eventsDropdownOpen && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 0.6rem)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1001,
                      }}>
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        style={{
                          background: 'white',
                          borderRadius: '0.85rem',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.07)',
                          overflow: 'visible',
                          minWidth: '17rem',
                          border: '1px solid rgba(218,160,109,0.25)',
                        }}
                      >
                        {/* Arrow notch */}
                        <div style={{
                          position: 'absolute', top: '-5px', left: '50%',
                          transform: 'translateX(-50%) rotate(45deg)',
                          width: '10px', height: '10px',
                          background: 'white',
                          border: '1px solid rgba(218,160,109,0.25)',
                          borderRight: 'none', borderBottom: 'none',
                        }} />
                        <div style={{ borderRadius: '0.85rem', overflow: 'hidden' }}>
                          {[
                            { id: 'events',       label: 'Official Events', sub: 'MAC · Debuts · Performances' },
                            { id: 'socialevents', label: 'Social Events',   sub: 'Hangouts · Fundraisers · Interclubs' },
                          ].map((opt, i) => (
                            <button
                              key={opt.id}
                              onClick={() => { setActiveSection(opt.id); setEventsDropdownOpen(false); }}
                              style={{
                                width: '100%',
                                padding: '1.1rem 1.4rem 1.1rem 1.1rem',
                                border: 'none',
                                borderTop: i > 0 ? '1px solid rgba(218,160,109,0.15)' : 'none',
                                background: 'transparent',
                                color: activeSection === opt.id ? 'var(--red)' : 'var(--dark)',
                                textAlign: 'left', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                borderLeft: `3px solid ${activeSection === opt.id ? 'var(--red)' : 'transparent'}`,
                                transition: 'background 0.12s',
                              }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(218,160,109,0.07)'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                            >
                              <div>
                                <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: activeSection === opt.id ? '600' : '500', letterSpacing: '0.01em' }}>
                                  {opt.label}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--dark)', opacity: 0.45, marginTop: '0.1rem', fontFamily: 'var(--font-body)' }}>
                                  {opt.sub}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.button
                  ref={(el) => navRefs.current[item.id] = el}
                  onClick={() => handleNavClick(item.id)}
                  whileHover={{ opacity: 0.7 }}
                  style={{
                    background: 'none', border: 'none',
                    color: activeSection === item.id ? 'var(--red)' : textColor,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                    fontWeight: activeSection === item.id ? '600' : '400',
                    cursor: 'pointer',
                    padding: '0.5rem clamp(0.4rem, 1vw, 0.85rem)',
                    letterSpacing: '0.02em', whiteSpace: 'nowrap',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </motion.button>
              )}
            </li>
          ))}

          {/* Sliding underline indicator */}
          <motion.div
            style={{ position: 'absolute', bottom: 0, height: '2px', background: 'var(--red)', borderRadius: '1px' }}
            animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </ul>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mobile-nav-menu"
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0,
              width: '72%', maxWidth: '280px',
              background: 'rgba(255,255,224,0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(218,160,109,0.3)',
              boxShadow: '-8px 0 32px rgba(0,0,0,0.1)',
              padding: '5.5rem 1.75rem 2rem',
              zIndex: 10001,
              overflowY: 'auto',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem', letterSpacing: '0.08em',
              color: 'var(--red)',
              marginBottom: '1.5rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(218,160,109,0.35)',
            }}>
              T.D.C
            </div>

            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {navItems.map((item) => (
                <li key={item.id} style={{ borderBottom: '1px solid rgba(218,160,109,0.18)' }}>
                  {item.id === 'events' ? (
                    <div>
                      <button
                        onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                        style={{
                          background: 'none', border: 'none',
                          color: isEventsActive ? 'var(--red)' : 'var(--dark)',
                          fontSize: '1rem', fontWeight: isEventsActive ? '600' : '400',
                          cursor: 'pointer', padding: '1rem 0',
                          width: '100%', textAlign: 'left',
                          fontFamily: 'var(--font-display)',
                          letterSpacing: '0.02em',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        }}
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: eventsDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.18 }}
                          style={{ display: 'inline-block', fontSize: '0.6rem', color: 'var(--gold)' }}
                        >
                          ▾
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {eventsDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ paddingLeft: '0.75rem', paddingBottom: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                              {[
                                { id: 'events',       label: 'Official Events' },
                                { id: 'socialevents', label: 'Social Events'   },
                              ].map((opt) => (
                                <button
                                  key={opt.id}
                                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setEventsDropdownOpen(false); setMobileMenuOpen(false); requestAnimationFrame(() => setActiveSection(opt.id)); }}
                                  style={{
                                    background: 'none', border: 'none',
                                    borderLeft: `2px solid ${activeSection === opt.id ? 'var(--red)' : 'rgba(218,160,109,0.4)'}`,
                                    color: activeSection === opt.id ? 'var(--red)' : 'var(--dark)',
                                    fontSize: '0.88rem',
                                    cursor: 'pointer',
                                    padding: '0.55rem 0.75rem',
                                    textAlign: 'left',
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: activeSection === opt.id ? '600' : '400',
                                    width: '100%',
                                    touchAction: 'manipulation',
                                    WebkitTapHighlightColor: 'transparent',
                                  }}
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: 'none', border: 'none',
                        color: activeSection === item.id ? 'var(--red)' : 'var(--dark)',
                        fontSize: '1rem', fontWeight: activeSection === item.id ? '600' : '400',
                        cursor: 'pointer', padding: '1rem 0',
                        width: '100%', textAlign: 'left',
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(2px)',
              zIndex: 10000,
            }}
            className="mobile-nav-backdrop"
          />
        )}
      </AnimatePresence>
    </>
  );
}
