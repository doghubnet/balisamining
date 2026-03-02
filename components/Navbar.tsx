'use client';

import { motion } from 'framer-motion';

const links = ['Home', 'Products', 'Services', 'Process', 'Projects', 'News', 'About', 'Contact'];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/90 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-serif text-sm font-bold tracking-[0.2em] text-gold md:text-base">
          BALISA YESHITILA MARBLE MINING
        </a>
        <ul className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-sm font-bold text-white transition hover:text-gold">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
