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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setEventsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Map socialevents to events for the indicator
    const sectionForIndicator = activeSection === 'socialevents' ? 'events' : activeSection;
    const activeButton = navRefs.current[sectionForIndicator];
    const navList = navListRef.current;
    
    if (activeButton && navList) {
      // Get positions relative to the nav list
      const buttonRect = activeButton.getBoundingClientRect();
      const navListRect = navList.getBoundingClientRect();
      
      const left = buttonRect.left - navListRect.left;
      const width = buttonRect.width;
      
      setIndicatorStyle({ left, width });
    }
  }, [activeSection]);

  const isTransparent = (activeSection === 'welcome' || activeSection === 'about') && !isScrolled;

  const navItems = [
    { label: 'Welcome', id: 'welcome' },
    { label: 'About Us', id: 'about' },
    { label: 'Events', id: 'events' },
    { label: 'Dances', id: 'dances' },
    { label: 'Officers', id: 'officers' },
    ...(learnConfig.enabled ? [{ label: 'Learn', id: 'learn' }] : []),
    { label: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
    <motion.nav
      className="main-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10002,
        padding: '1rem clamp(1rem, 4vw, 2rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        backgroundColor: isTransparent ? 'transparent' : 'var(--gold)',
        backdropFilter: isTransparent ? 'none' : 'blur(10px)',
        boxShadow: isTransparent ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.3)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{
        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
        fontWeight: 'bold',
        zIndex: 1002
      }}>
        <span style={{color: 'var(--red)'}}>T.D.C</span>
      </div>

      {/* Hamburger Menu Button - Mobile Only */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          zIndex: 1002,
          flexDirection: 'column',
          gap: '0.35rem',
          width: '2rem',
          height: '2rem'
        }}
        className="mobile-hamburger"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: 'var(--red)',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        />
        <motion.span
          animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: 'var(--red)',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        />
        <motion.span
          animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: 'var(--red)',
            borderRadius: '2px',
            transition: 'all 0.3s ease'
          }}
        />
      </button>

      {/* Desktop Navigation */}
      <ul
        ref={navListRef}
        style={{
          display: 'flex',
          gap: 'clamp(0.5rem, 2vw, 2rem)',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
          position: 'relative'
        }}
        className="desktop-nav"
      >
        {navItems.map((item) => (
          <li key={item.id} style={{ position: 'relative' }} ref={item.id === 'events' ? dropdownRef : null}>
            {item.id === 'events' ? (
              <>
                <motion.button
                  ref={(el) => navRefs.current[item.id] = el}
                  onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: (activeSection === 'events' || activeSection === 'socialevents')
                      ? 'var(--accent, var(--red))'
                      : (isTransparent ? 'var(--red)' : 'var(--primary, #333)'),
                    font: "var(--font-display)",
                    fontSize: '1rem',
                    fontWeight: (activeSection === 'events' || activeSection === 'socialevents') ? '600' : '400',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    transition: 'color 0.3s ease',
                    position: 'relative'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  {item.label} ▾
                </motion.button>
                {eventsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      marginTop: '0.5rem',
                      backgroundColor: 'var(--gold)',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      overflow: 'hidden',
                      minWidth: '12rem',
                      zIndex: 1001
                    }}
                  >
                    <button
                      onClick={() => {
                        setActiveSection('events');
                        setEventsDropdownOpen(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: 'none',
                        background: activeSection === 'events' ? 'var(--gold)' : 'var(--cream)',
                        color: 'var(--dark)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--gold)'}
                      onMouseLeave={(e) => e.target.style.background = activeSection === 'events' ? 'var(--gold)' : 'var(--cream)'}
                    >
                      Our Official Events
                    </button>
                    <button
                      onClick={() => {
                        setActiveSection('socialevents');
                        setEventsDropdownOpen(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: 'none',
                        background: activeSection === 'socialevents' ? 'var(--gold)' : 'var(--cream)',
                        color: 'var(--dark)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'var(--gold)'}
                      onMouseLeave={(e) => e.target.style.background = activeSection === 'socialevents' ? 'var(--gold)' : 'var(--cream)'}
                    >
                      Social Events
                    </button>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.button
                ref={(el) => navRefs.current[item.id] = el}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id
                    ? 'var(--accent, var(--red))'
                    : (isTransparent ? 'var(--red)' : 'var(--primary, #333)'),
                  font: "var(--font-display)",
                  fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                  fontWeight: activeSection === item.id ? '600' : '400',
                  cursor: 'pointer',
                  padding: '0.5rem clamp(0.5rem, 1vw, 1rem)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  whiteSpace: 'nowrap'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
              >
                {item.label}
              </motion.button>
            )}
          </li>
        ))}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            height: '2px',
            backgroundColor: 'var(--accent, var(--red))'
          }}
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </ul>
    </motion.nav>

    {/* Mobile Navigation Menu */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '70%',
            maxWidth: '300px',
            backgroundColor: 'var(--gold)',
            boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.3)',
            padding: '5rem 2rem 2rem 2rem',
            zIndex: 10001,
            overflowY: 'auto',
            pointerEvents: 'auto',
            display: 'block'
          }}
          className="mobile-nav-menu"
        >
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {navItems.map((item) => (
              <li key={item.id}>
                {item.id === 'events' ? (
                  <div>
                    <button
                      onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: (activeSection === 'events' || activeSection === 'socialevents') ? 'var(--red)' : 'var(--dark)',
                        fontSize: '1.2rem',
                        fontWeight: (activeSection === 'events' || activeSection === 'socialevents') ? '600' : '400',
                        cursor: 'pointer',
                        padding: '0.5rem 0',
                        width: '100%',
                        textAlign: 'left',
                        fontFamily: 'var(--font-display)'
                      }}
                    >
                      {item.label} {eventsDropdownOpen ? '▴' : '▾'}
                    </button>
                    {eventsDropdownOpen && (
                      <div style={{
                        paddingLeft: '1rem',
                        marginTop: '0.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        position: 'relative',
                        zIndex: 10002
                      }}>
                        <button
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onTouchStart={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Clicked Official Events button');
                            setEventsDropdownOpen(false);
                            setMobileMenuOpen(false);
                            // Set active section after a tiny delay to ensure menus close first
                            requestAnimationFrame(() => {
                              console.log('Setting active section to events');
                              setActiveSection('events');
                            });
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: activeSection === 'events' ? 'var(--red)' : 'var(--dark)',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            padding: '0.5rem 0',
                            textAlign: 'left',
                            fontFamily: 'var(--font-body)',
                            position: 'relative',
                            zIndex: 10003,
                            width: '100%',
                            touchAction: 'manipulation',
                            WebkitTapHighlightColor: 'transparent'
                          }}
                        >
                          Our Official Events
                        </button>
                        <button
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onTouchStart={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Clicked Social Events button');
                            setEventsDropdownOpen(false);
                            setMobileMenuOpen(false);
                            // Set active section after a tiny delay to ensure menus close first
                            requestAnimationFrame(() => {
                              console.log('Setting active section to socialevents');
                              setActiveSection('socialevents');
                            });
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: activeSection === 'socialevents' ? 'var(--red)' : 'var(--dark)',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            padding: '0.5rem 0',
                            textAlign: 'left',
                            fontFamily: 'var(--font-body)',
                            position: 'relative',
                            zIndex: 10003,
                            width: '100%',
                            touchAction: 'manipulation',
                            WebkitTapHighlightColor: 'transparent'
                          }}
                        >
                          Social Events
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeSection === item.id ? 'var(--red)' : 'var(--dark)',
                      fontSize: '1.2rem',
                      fontWeight: activeSection === item.id ? '600' : '400',
                      cursor: 'pointer',
                      padding: '0.5rem 0',
                      width: '100%',
                      textAlign: 'left',
                      fontFamily: 'var(--font-display)'
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

    {/* Mobile Menu Backdrop */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10000
          }}
          className="mobile-nav-backdrop"
        />
      )}
    </AnimatePresence>
    </>
  );
}