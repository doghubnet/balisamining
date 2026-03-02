import { Facebook, Instagram, Linkedin, Mail, ShieldCheck } from 'lucide-react';

const columns = {
  Company: ['About Us', 'Leadership', 'Sustainability', 'Careers'],
  Products: ['Marble Slabs', 'Marble Tiles', 'Blocks', 'Custom Fabrication'],
  Services: ['Quarrying', 'Processing', 'Polishing', 'Export Logistics'],
  Global: ['Europe', 'Middle East', 'USA', 'Asia']
};

export function Footer() {
  return (
    <footer className="bg-stone text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-white text-center font-serif text-xs font-bold leading-tight text-navy">
            BALISA
            <br />
            TRUSTED
          </div>
          <p className="max-w-md text-sm leading-relaxed">
            Premium Ethiopian Marble – Timeless Beauty, Global Excellence. Trusted by architects, hotels, and luxury developers worldwide.
          </p>
          <div className="mt-6 flex gap-4">
            {[Facebook, Instagram, Linkedin, Mail].map((Icon, idx) => (
              <a key={idx} href="#" className="rounded-full border border-slate-300 p-2 transition hover:border-gold hover:text-gold">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <form className="mt-8 flex max-w-md overflow-hidden rounded-full border border-slate-300 bg-white">
            <input
              className="w-full bg-transparent px-5 py-3 text-sm outline-none"
              placeholder="Enter your email for project updates"
              type="email"
            />
            <button className="bg-navy px-5 py-3 text-sm font-semibold text-white">Subscribe</button>
          </form>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(columns).map(([title, items]) => (
            <div key={title}>
              <h4 className="mb-3 font-serif text-lg font-semibold">{title}</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-300 px-6 py-4 text-center text-xs text-slate-700">
        <span className="inline-flex items-center gap-2">
          <ShieldCheck size={14} /> ISO-Aligned Quality Controls • Ethical Quarrying • International Export Compliance
        </span>
      </div>
    </footer>
  );
}
