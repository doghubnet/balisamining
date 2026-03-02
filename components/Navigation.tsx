'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Logo } from '@/components/Logo';

const links = ['Home', 'Products', 'Services', 'Process', 'Projects', 'News', 'About', 'Contact'];

export function Navigation() {
  const [active, setActive] = useState('Home');

  const navItems = useMemo(
    () =>
      links.map((link) => ({
        label: link,
        href: `#${link.toLowerCase()}`
      })),
    []
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.label;
            return (
              <li key={item.label}>
                <motion.a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`relative px-2 py-1 text-sm leading-6 tracking-[0.02em] text-[#0F172A] transition-colors duration-300 ${
                    isActive ? 'font-bold' : 'font-semibold hover:font-bold'
                  }`}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37]"
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  {!isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37]"
                      initial={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </motion.a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
