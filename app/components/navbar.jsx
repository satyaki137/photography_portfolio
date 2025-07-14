'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import ContactPopup from '../components/ContactPopup';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Album', path: '/album' },
    { name: 'About Me', path: '/aboutme' },
    { name: 'Contact Us', path: null },
  ];

  const handleClick = (item) => {
    if (item.name === 'Contact Us') {
      setShowContactPopup(true);
    } else if (item.path) {
      window.location.href = item.path;
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        gsap.to(menuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          pointerEvents: 'auto',
        });
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          pointerEvents: 'none',
        });
      }
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-[#e8d3ae] top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={200} height={100} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`hover:text-[#992626] ${
                  pathname === item.path ? 'text-[#992626]' : 'text-black'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  !menuOpen
                    ? 'M4 6h16M4 12h16M4 18h16'
                    : 'M6 18L18 6M6 6l12 12'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div
          ref={menuRef}
          className="md:hidden overflow-hidden h-0 opacity-0"
        >
          <div className="px-4 pb-4 space-y-2 bg-[#e8d3ae]">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`block text-sm font-medium hover:text-[#992626] ${
                  pathname === item.path ? 'text-[#992626]' : 'text-black'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contact Us Popup */}
      {showContactPopup && (
        <ContactPopup
          isOpen={showContactPopup}
          onClose={() => setShowContactPopup(false)}
        />
      )}
    </>
  );
};

export default Navbar;
