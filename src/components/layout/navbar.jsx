import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
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
    { label: 'Contact Us', id: 'contact' }
  ];

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
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
        fontSize: '1.5rem', 
        fontWeight: 'bold'
      }}>
        <span style={{color: 'var(--red)'}}>T.D.C</span>
      </div>

      <ul
        ref={navListRef}
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
          position: 'relative'
        }}
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
                onClick={() => setActiveSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id
                    ? 'var(--accent, var(--red))'
                    : (isTransparent ? 'var(--red)' : 'var(--primary, #333)'),
                  font: "var(--font-display)",
                  fontSize: '1rem',
                  fontWeight: activeSection === item.id ? '600' : '400',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  transition: 'color 0.3s ease',
                  position: 'relative'
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
  );
}