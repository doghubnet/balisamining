'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const columns: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership', href: '/about#leadership' },
    { label: 'Sustainability', href: '/about#sustainability' },
    { label: 'Careers', href: '/careers' }
  ],
  Products: [
    { label: 'Marble Slabs', href: '/products/slabs' },
    { label: 'Marble Tiles', href: '/products/tiles' },
    { label: 'Blocks', href: '/products/blocks' },
    { label: 'Custom Fabrication', href: '/products/custom-fabrication' }
  ],
  Services: [
    { label: 'Quarrying', href: '/services/quarrying' },
    { label: 'Processing', href: '/services/processing' },
    { label: 'Polishing', href: '/services/polishing' },
    { label: 'Export Logistics', href: '/services/export-logistics' }
  ],
  Global: [
    { label: 'Europe', href: '/global/europe' },
    { label: 'Middle East', href: '/global/middle-east' },
    { label: 'USA', href: '/global/usa' },
    { label: 'Asia', href: '/global/asia' }
  ]
};

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-stone text-slate-900"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-white text-center font-serif text-xs font-bold leading-tight text-navy">
            BALISA
            <br />
            TRUSTED
          </div>
          <p className="max-w-md text-sm font-medium leading-7 tracking-[0.01em]">
            Premium Ethiopian Marble – Timeless Beauty, Global Excellence. Trusted by architects, hotels, and luxury developers worldwide.
          </p>
          <div className="mt-6 flex gap-4">
            {[Facebook, Instagram, Linkedin, Mail].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -2, scale: 1.04 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-full border border-slate-300 p-2 transition hover:border-gold hover:text-gold"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
          <form className="mt-8 flex max-w-md overflow-hidden rounded-full border border-slate-300 bg-white">
            <input
              className="w-full bg-transparent px-5 py-3 text-sm font-medium outline-none"
              placeholder="Enter your email for project updates"
              type="email"
            />
            <button className="bg-navy px-5 py-3 text-sm font-semibold text-white">Subscribe</button>
          </form>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(columns).map(([title, items], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
            >
              <h4 className="mb-3 font-serif text-lg font-semibold leading-7 tracking-[0.01em]">{title}</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="font-medium leading-6 tracking-[0.01em] transition hover:text-gold">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-300 px-6 py-4 text-xs text-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <span className="inline-flex items-center gap-2 font-medium leading-6 tracking-[0.01em]">
            <ShieldCheck size={14} /> ISO-Aligned Quality Controls • Ethical Quarrying • International Export Compliance
          </span>
          <div className="text-sm font-medium">© 2026 BALISA YESHITILA MARBLE MINING. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/privacy" className="transition hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-gold">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
