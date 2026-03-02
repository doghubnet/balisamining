'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Gem, Globe, Hammer, Mountain, Settings, Sparkles, Truck, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const products = [
  {
    title: 'Classic White Marble Slabs',
    image: 'https://cdn.shopify.com/s/files/1/0272/6956/2456/files/b_Calacatta_Gold_Dual_Finish_SLCGA1DF3_2000x.jpg?v=1634579863'
  },
  {
    title: 'Golden Vein Marble Tiles',
    image: 'https://image.made-in-china.com/2f0j00WlFkbMwBrtca/60X60-80X80-Glossy-Calacata-Gold-Vein-Marble-Look-Porcelain-Floor-Tiles.webp'
  },
  {
    title: 'Grey Emperador & Special Finishes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVWK5RptD1wEMYryfydvKnTj05EopaEDfbA&s'
  },
  {
    title: 'Custom Cut & Fabrication',
    image: 'https://www.allstonesolutions.co.za/wp-content/uploads/2024/03/marble_fabrication_benefits_explained.jpg'
  }
];

const faqs = [
  {
    q: 'Do you provide custom dimensions and finishes?',
    a: 'Yes. We manufacture bespoke marble components with precision CNC cutting, edge detailing, and finishing options such as polished, honed, brushed, and leathered textures.'
  },
  {
    q: 'Can BALISA export to international destinations?',
    a: 'Absolutely. Our logistics team handles container optimization, documentation, quality checks, and safe export to Europe, Middle East, USA, and Asia.'
  },
  {
    q: 'How do you ensure sustainable quarrying?',
    a: 'We implement responsible extraction planning, water management, reduced waste initiatives, and restoration protocols to preserve local ecosystems and heritage.'
  },
  {
    q: 'Do you support large hospitality and mixed-use projects?',
    a: 'Yes. Our capacity supports high-volume supply for hotels, luxury villas, and landmark developments with consistent quality and timely delivery.'
  }
];

const sectionAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function HomePage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main>
      <Navigation />
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://streamable.com/vf37x8" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,23,42,0.65)' }} />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Premium Ethiopian Marble – Timeless Beauty, Global Excellence</p>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              BALISA YESHITILA
              <br />
              MARBLE MINING
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-100">
              Sustainable quarrying, precision manufacturing, polishing, and worldwide export of the finest quality Ethiopian marble slabs, tiles, blocks, and custom cut pieces for luxury architecture and interior excellence.
            </p>
            <a href="#products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-navy transition hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl duration-300">
              Discover Our Marble <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="marble-card self-end rounded-3xl border border-white/20 p-8 shadow-luxury"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">hey there!</p>
            <h3 className="mt-2 font-serif text-3xl">Founder’s Message</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              We built BALISA YESHITILA MARBLE MINING to elevate Ethiopian stone craftsmanship onto the global stage. Every slab is selected with discipline, processed with advanced technology, and delivered with integrity to projects that define luxury worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section id="products" variants={sectionAnim} initial="hidden" whileInView="show" viewport={{ once: true }} className="bg-[#F8F4ED] px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-bold">Our Marble Collection</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {products.map((p) => (
              <motion.article
                key={p.title}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 24px 56px rgba(0,0,0,0.22)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <img src={p.image} alt={p.title} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-serif text-xl text-slate-900">{p.title}</h3>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
                    Explore Collection <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section id="services" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-bold">Our Services</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Quarrying Excellence', Mountain],
              ['Advanced Manufacturing', Settings],
              ['Precision Cutting & Polishing', Sparkles],
              ['Global Logistics & Export', Truck]
            ].map(([name, Icon]) => (
              <motion.div key={name as string} whileHover={{ y: -8, scale: 1.03, boxShadow: "0 24px 56px rgba(0,0,0,0.35)" }} transition={{ duration: 0.35, ease: "easeOut" }} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                <Icon className="text-gold" />
                <h3 className="mt-4 font-serif text-2xl">{name as string}</h3>
                <p className="mt-2 text-sm text-slate-300">Tailored solutions for high-spec architecture and interior projects requiring flawless stone execution.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-navy px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-bold">Our Manufacturing Process</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {['Responsible Extraction', 'Block Selection & Grading', 'Precision Cutting & Finishing', 'Inspection & Export Packaging'].map((step, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-gold/40 bg-slate-900/70 p-6">
                <p className="text-xs tracking-[0.2em] text-gold">STEP 0{i + 1}</p>
                <h3 className="mt-3 font-serif text-2xl">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['30+', 'Countries Supplied', Globe],
            ['2M+', 'Sqm Processed Annually', Gem],
            ['98%', 'On-Time Global Delivery', CheckCircle2],
            ['15+', 'Years of Marble Heritage', Hammer]
          ].map(([n, t, Icon]) => (
            <motion.div key={t as string} whileHover={{ y: -8, scale: 1.03, boxShadow: "0 24px 56px rgba(0,0,0,0.35)" }} transition={{ duration: 0.35, ease: "easeOut" }} className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center">
              <Icon className="mx-auto text-gold" />
              <p className="mt-3 font-serif text-4xl text-gold">{n as string}</p>
              <p className="mt-2 text-sm text-slate-300">{t as string}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-navy px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-bold">Trusted Partners Worldwide</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Luxury Hotel Groups', 'International Architects', 'Major Construction Firms', 'European Importers', 'Middle East Developers', 'US Design Studios', 'Global Distributors', 'Elite Contractors'].map((p) => (
              <motion.div key={p} whileHover={{ y: -8, scale: 1.03, boxShadow: "0 24px 56px rgba(0,0,0,0.35)" }} transition={{ duration: 0.35, ease: "easeOut" }} className="group rounded-xl border border-white/10 bg-slate-900/70 p-5 grayscale transition hover:grayscale-0">
                <div className="flex h-14 items-center justify-center rounded-lg border border-dashed border-slate-600 text-center text-sm font-semibold text-slate-300 group-hover:text-gold">
                  {p}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-bold">Latest News & Opportunities</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'BALISA expands calibrated slab line for EU demand',
              'New sustainable water-recycling unit commissioned',
              'Strategic logistics route opens for Gulf projects',
              'Architect partnership program for landmark interiors'
            ].map((n) => (
              <motion.article key={n} whileHover={{ y: -8, scale: 1.03, boxShadow: "0 24px 56px rgba(0,0,0,0.35)" }} transition={{ duration: 0.35, ease: "easeOut" }} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-gold">Industry Update</p>
                <h3 className="mt-3 font-serif text-xl">{n}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-navy px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl font-bold">Featured Projects</h2>
          <div className="mt-10 flex snap-x gap-6 overflow-x-auto pb-4">
            {[
              {
                title: '5-Star Hotel Lobby in Dubai',
                image: 'https://www.sbid.org/wp-content/uploads/2022/06/3-5.jpg'
              },
              {
                title: 'Luxury Villa Collection in Milan',
                image:
                  'https://cdn.lecollectionist.com/__lecollectionist__/production/houses/9081/photos/D9EV5N2yTni2dS3xJBSt_35125e6b-d504-4d21-86dd-c064527008d7.png?width=1152&force_format=webp&q=50'
              },
              {
                title: 'Corporate Tower Atrium in New York',
                image:
                  'https://images.adsttc.com/media/images/5b37/b54c/f197/ccc0/d600/002e/newsletter/AD_335_Madison_Final_Renders_Page_5.jpg?1530377522'
              },
              {
                title: 'Grand Park Lara',
                image: 'https://media-cdn.tripadvisor.com/media/photo-s/24/79/ce/5a/grand-park-lara.jpg'
              }
            ].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 24px 56px rgba(0,0,0,0.35)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="min-w-[300px] snap-start overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl md:min-w-[420px]"
              >
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-serif text-2xl">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-center text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((item, i) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-slate-900/80">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold">
                  {item.q}
                  <ChevronDown className={`transition ${open === i ? 'rotate-180 text-gold' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-slate-300">{item.a}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-gold/40 bg-gradient-to-r from-slate-900 to-navy p-10 text-center">
          <h2 className="font-serif text-4xl font-bold">Build Your Next Landmark with Ethiopian Marble Excellence</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-200">
            Connect with our export and project team to receive technical specifications, finish samples, and premium marble recommendations tailored to your architecture vision.
          </p>
          <button className="mt-8 rounded-full bg-gold px-8 py-3 font-semibold text-navy transition hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl duration-300">Start Your Project Consultation</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
