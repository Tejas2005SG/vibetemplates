import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import { 
  ArrowRight, 
  Play, 
  Layers, 
  MonitorSmartphone, 
  Box, 
  Database,
  Cpu,
  Globe2,
  Code2
} from 'lucide-react';
import { TEMPLATES } from './data';

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[96px] bg-canvas/80 backdrop-blur-lg z-50 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-16 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink">
          <span className="font-display font-[400] text-[24px] tracking-[-0.5px]">VibeTemplates</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-ink">
          <a href="#templates" className="hover:text-muted transition-colors">Templates</a>
          <a href="#platform" className="hover:text-muted transition-colors">Platform</a>
          <a href="#enterprise" className="hover:text-muted transition-colors">Enterprise</a>
          <a href="#research" className="hover:text-muted transition-colors">Research</a>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#login" className="text-[14px] font-medium text-ink hidden sm:block hover:text-muted transition-colors">Sign In</a>
          <button className="bg-ink hover:bg-primary-hover text-canvas-white px-6 py-2.5 rounded-pill font-medium text-[14px] border-none transition-colors">
            Try free
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-gradient-to-tr from-orb-lavender to-orb-mint rounded-full opacity-60 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-bl from-orb-peach to-orb-rose rounded-full opacity-60 blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-[1000px] mx-auto relative z-10 w-full flex flex-col items-center">
        
        <motion.h1 
          className="font-display font-[400] text-[56px] md:text-[68px] lg:text-[84px] leading-[1.1] tracking-[-1.5px] text-ink mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Beautiful UI/UX Templates<br className="hidden md:block" />
          <span className="italic">for Your Projects</span>
        </motion.h1>
        
        <motion.p 
          className="font-sans text-[18px] md:text-[22px] leading-[1.6] tracking-[0.15px] text-ink mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Crafted with precision by <strong className="font-semibold text-ink">VibeCoding</strong>
        </motion.p>
        
        <motion.div 
          className="relative w-full h-[320px] sm:h-[450px] md:h-[600px] flex justify-center mt-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left Mockup */}
          <div className="absolute left-[0%] md:left-[5%] top-[20%] w-[35%] md:w-[32%] h-[70%] bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-hairline overflow-hidden z-10 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="flex-1 overflow-hidden pointer-events-none relative bg-white">
                 <div className="absolute inset-0 p-4 sm:p-5">
                     <div className="flex justify-between items-center mb-6">
                        <span className="font-display font-medium text-xs sm:text-sm">Commerce</span>
                        <div className="flex gap-2"><div className="w-6 h-1 bg-ink/10 rounded-full hidden sm:block"/><div className="w-6 h-1 bg-ink/10 rounded-full"/></div>
                     </div>
                     <h3 className="font-display text-xl sm:text-2xl mb-1">New Collection</h3>
                     <p className="font-sans text-[8px] sm:text-[10px] text-body mb-4">Discover the latest arrivals crafted for you.</p>
                     <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80" className="w-full aspect-video sm:aspect-[4/3] object-cover rounded mb-2 sm:mb-4" alt="Fashion" />
                     <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80" className="w-full aspect-square object-cover rounded" alt="Detail" />
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" className="w-full aspect-square object-cover rounded" alt="Detail" />
                     </div>
                 </div>
             </div>
          </div>

          {/* Right Mockup */}
          <div className="absolute right-[0%] md:right-[5%] top-[15%] w-[40%] md:w-[35%] h-[75%] bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-hairline overflow-hidden z-10 flex flex-col transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="flex-1 overflow-hidden pointer-events-none relative p-4 sm:p-5 bg-white">
                 <div className="flex justify-between items-center mb-6">
                    <span className="font-display font-medium text-xs sm:text-sm">Design Studio</span>
                    <button className="bg-ink text-white text-[8px] sm:text-[10px] px-3 py-1.5 rounded-full">Explore</button>
                 </div>
                 <p className="font-sans text-[8px] sm:text-[10px] text-body mb-4 max-w-[80%]">Crafting digital experiences with precision and grace. A moodboard of recent work.</p>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                    <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=300&q=80" className="w-full aspect-square object-cover rounded" alt="Mood 1" />
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=300&q=80" className="w-full aspect-square object-cover rounded" alt="Mood 2" />
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80" className="w-full aspect-square object-cover rounded hidden sm:block" alt="Mood 3" />
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=300&q=80" className="w-full aspect-square object-cover rounded hidden sm:block" alt="Mood 4" />
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&q=80" className="w-full aspect-square object-cover rounded hidden sm:block" alt="Mood 5" />
                    <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=300&q=80" className="w-full aspect-square object-cover rounded hidden sm:block" alt="Mood 6" />
                 </div>
             </div>
          </div>

          {/* Center Main Mockup */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] md:w-[50%] h-[90%] bg-white rounded-[16px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-hairline overflow-hidden z-20 hover:-translate-y-2 transition-transform duration-500">
             <div className="flex-1 w-full h-full relative pointer-events-none">
                 <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Abstract Pastel" />
                 <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent" />
                 
                 <div className="absolute inset-0 p-6 sm:p-8 flex flex-col items-center">
                    <div className="w-full flex justify-between items-center mb-10 sm:mb-16">
                       <span className="font-display text-sm sm:text-base font-medium flex items-center gap-2">
                          <span className="w-4 h-4 text-ink flex items-center justify-center shrink-0">❖</span>
                          Commerce
                       </span>
                       <div className="hidden sm:flex gap-6">
                          <span className="text-[11px] text-ink font-medium">Home</span>
                          <span className="text-[11px] text-body">Shop</span>
                          <span className="text-[11px] text-body">About</span>
                       </div>
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl mb-4 text-center">New Collection</h3>
                    <p className="font-sans text-[10px] sm:text-[12px] text-body mb-6 text-center max-w-[80%] sm:max-w-[60%]">Explore the softest organic cotton pieces designed for your everyday comfort. Inspired by nature.</p>
                    <button className="bg-ink text-white text-[10px] sm:text-[12px] px-6 py-2.5 rounded-full font-medium">Shop Now</button>
                 </div>
             </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

function GlobalTrust() {
  const logos = [
    <div key="1" className="font-sans font-bold text-[28px] tracking-tighter">stripe</div>,
    <div key="2" className="font-sans font-semibold text-[26px] tracking-tight flex items-center gap-2">
       <svg viewBox="0 0 116 100" className="w-6 h-6 fill-current"><path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0z" /></svg>
       vercel
    </div>,
    <div key="3" className="font-display font-[500] text-[34px]">Notion</div>,
    <div key="4" className="font-sans font-bold text-[26px] tracking-tight">LINEAR</div>,
    <div key="5" className="font-sans font-bold text-[24px] tracking-widest leading-none mt-1">FIGMA</div>,
    <div key="6" className="font-sans font-bold text-[28px] tracking-tight text-transparent leading-none mt-1" style={{ WebkitTextStroke: "1px var(--color-ink)" }}>OPENAI</div>,
    <div key="7" className="font-sans font-[500] text-[26px] flex items-center gap-2 tracking-tighter">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.022 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.32-1.38 9.72-.72 13.44 1.56.42.24.54.78.301 1.26zm.12-3.36C15.24 8.28 8.82 8.04 5.16 9.18c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.54-1.02.72-1.56.42z"/></svg>
        Spotify
    </div>,
    <div key="8" className="font-sans text-[28px] tracking-tighter font-black">Substack</div>
  ];

  return (
    <section className="py-24 border-t border-hairline bg-canvas-white overflow-hidden flex flex-col items-center">
        <p className="font-mono text-[11px] text-body mb-12 uppercase tracking-[0.1em] px-6 text-center">Trusted by the world's leading vibecoders</p>
        
        <div 
           className="relative w-full flex overflow-hidden"
           style={{
             WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
             maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
           }}
        >
           <motion.div 
             className="flex min-w-max items-center opacity-40 grayscale"
             animate={{ x: ["0%", "-33.333333%"] }}
             transition={{
               duration: 25,
               ease: "linear",
               repeat: Infinity,
             }}
           >
             {[0, 1, 2].map((group) => (
               <div key={group} className="flex gap-16 md:gap-32 pr-16 md:pr-32 items-center">
                 {logos.map((logo, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center justify-center text-ink cursor-default hover:opacity-100 transition-opacity duration-300">
                      {logo}
                    </div>
                 ))}
               </div>
             ))}
           </motion.div>
        </div>
    </section>
  );
}

function DarkFeatureBand() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="bg-cohere-green py-32 px-6 text-canvas-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,119,89,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative z-10">
          <div className="dark-feature-text inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-sm border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cohere-coral animate-pulse"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white">Command Infrastructure</span>
          </div>
          
          <h2 className="dark-feature-text font-display font-[400] text-[48px] md:text-[60px] leading-[1.0] tracking-[-1.2px] mb-6">
            Enterprise scale.<br />Editorial grace.
          </h2>
          
          <p className="dark-feature-text font-sans text-[18px] leading-[1.5] max-w-lg mb-10 text-white/70">
            For platforms that require both high-density operational data and refined, reader-first typography. Deploy our template models instantly.
          </p>
          
          <ul className="dark-feature-text flex flex-col gap-4 invisible sm:visible">
             {[
               "Dark agent-console panels for intense operational workflows.",
               "Mono labels and data visualization primitive blocks.",
               "Warm stone surfaces to humanize deep technical tools."
             ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 border-t border-white/10 pt-4">
                  <ArrowRight className="w-5 h-5 text-cohere-coral shrink-0" />
                  <span className="font-sans text-[15px] opacity-80">{text}</span>
                </li>
             ))}
          </ul>
        </div>
        
        <div className="lg:w-1/2 w-full relative z-10">
           {/* Mockup Card */}
           <div className="dark-feature-card bg-[#17171c] rounded-xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                     <Layers className="w-4 h-4 text-white/80" />
                   </div>
                   <span className="font-heading font-medium text-[16px]">VibeAgent Console</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-cohere-coral/20 text-cohere-coral font-mono text-[11px] rounded-xs">LIVE</span>
                 </div>
              </div>
              
              {/* Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                 {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-4">
                       <span className="font-sans text-[12px] opacity-50 block mb-2">Metrics {i}</span>
                       <span className="font-mono text-[24px]">{(Math.random() * 10).toFixed(2)}s</span>
                    </div>
                 ))}
              </div>
              
              {/* Log stream */}
              <div className="bg-black/50 rounded-lg p-4 font-mono text-[12px] space-y-2 text-white/60">
                 <p><span className="text-cohere-coral">[SYS]</span> Generating template structure...</p>
                 <p><span className="text-cohere-coral">[SYS]</span> Applying structural hairlines...</p>
                 <p><span className="text-cohere-coral/[0.5]">[WAIT]</span> Infusing pastel atmospheric orbs...</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function ArchitecturesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const slider = containerRef.current;
    const section = sectionRef.current;
    if (!slider || !section) return;

    gsap.to(slider, {
      x: () => -(slider.scrollWidth - window.innerWidth + (window.innerWidth > 1024 ? 96 : 48)),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "center center",
        end: () => "+=" + slider.scrollWidth,
        invalidateOnRefresh: true
      }
    });
  }, { scope: sectionRef });

  const architectures = [
    {
      id: 'saas',
      title: 'SaaS Platform',
      tag: 'Marketing Model',
      badge: 'NEW',
      body: 'Optimization of split hero compositions and trust-building feature bands.',
      titleDisplay: 'SaaS\nLaunch',
      bg: 'bg-[#F24E42]', 
      text: 'text-white'
    },
    {
      id: 'dashboard',
      title: 'Admin Dashboard',
      tag: 'Data Model',
      badge: 'NEW',
      body: 'High-density data rendering and strict geometric layouts.',
      titleDisplay: 'Admin\nPro',
      bg: 'bg-[#7C5CFF]', 
      text: 'text-white'
    },
    {
      id: 'portfolio',
      title: 'Creative Folio',
      tag: 'Agency Model',
      badge: 'NEW',
      body: 'Immersive media experiences and large cinematic layouts.',
      titleDisplay: '',
      bg: 'bg-[#1a1a1a]', 
      text: 'text-white',
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'commerce',
      title: 'E-Commerce',
      tag: 'Storefront Model',
      badge: '',
      body: 'High-conversion product grids and seamless checkout rendering.',
      titleDisplay: 'Shop\n2.0',
      bg: 'bg-[#FF9529]', 
      text: 'text-white'
    },
    {
      id: 'blog',
      title: 'Editorial Blog',
      tag: 'Publishing Model',
      badge: '',
      body: 'Generous whitespace with elegant serif typography generation.',
      titleDisplay: 'Read\nWell',
      bg: 'bg-[#00C4A7]', 
      text: 'text-white'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 pl-6 lg:pl-12 pr-0 overflow-hidden bg-canvas-white max-w-[1600px] mx-auto w-full">
       <style>
         {`
           .hide-scrollbar::-webkit-scrollbar {
             display: none;
           }
         `}
       </style>
       <div className="pr-6 lg:pr-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-4xl">
            <h2 className="font-display font-[400] text-[40px] md:text-[56px] leading-[1.0] tracking-[-1.2px] text-ink mb-4">
              Template Architecture Matrix
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-body max-w-3xl leading-[1.5]">
              Covering five major areas: storefronts, dashboards, portfolios, marketing pages, and blogs. Helping creators efficiently build modern interfaces.
            </p>
          </div>
       </div>

       <div 
         ref={containerRef}
         className="flex gap-4 md:gap-5 flex-nowrap w-max pr-6 lg:pr-12 pb-8"
       >
         {architectures.map((arch) => (
           <div 
             key={arch.id} 
             className={`architecture-card shrink-0 w-[320px] md:w-[380px] aspect-[4/5] rounded-[24px] md:rounded-[32px] ${arch.bg} ${arch.text} relative overflow-hidden snap-start flex flex-col group cursor-pointer`}
           >
             {arch.img && (
                <img src={arch.img} alt={arch.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             )}
             
             {!arch.img && (
                <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay">
                   <svg width="100%" height="100%" viewBox="0 0 400 500" fill="none">
                      <circle cx="350" cy="50" r="150" stroke="white" strokeWidth="2" opacity="0.3" />
                      <circle cx="50" cy="450" r="250" stroke="white" strokeWidth="2" opacity="0.3" />
                      <path d="M 250 -50 L 50 150" stroke="white" strokeWidth="2" opacity="0.5" />
                      <circle cx="250" cy="-50" r="10" fill="white" />
                      <circle cx="50" cy="150" r="10" fill="white" />
                   </svg>
                </div>
             )}

             {arch.img && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />}

             <div className="relative p-6 md:p-8 flex justify-end z-10 w-full pointer-events-none">
               {arch.badge && (
                 <span className="bg-white text-ink text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider drop-shadow-sm">
                   {arch.badge}
                 </span>
               )}
             </div>

             <div className="relative flex-1 flex items-center px-8 z-10 pointer-events-none">
               {!arch.img && (
                 <h3 className="font-display font-[400] text-[64px] md:text-[84px] leading-[0.95] tracking-[-2px] whitespace-pre-line drop-shadow-sm">
                   {arch.titleDisplay}
                 </h3>
               )}
             </div>

             <div className="relative p-6 md:p-8 pt-10 z-10 w-full mt-auto">
               <div className="flex items-center gap-3 mb-3">
                 <h4 className="font-display font-[400] text-[24px] md:text-[28px] drop-shadow-sm tracking-[-0.5px] whitespace-nowrap">{arch.title}</h4>
                 <span className="text-[10px] md:text-[11px] bg-white/20 px-2 py-1 rounded-[4px] font-medium backdrop-blur-md border border-white/20 drop-shadow-sm uppercase tracking-wider whitespace-nowrap shrink-0">
                   {arch.tag}
                 </span>
                 <div className="ml-auto w-7 h-7 bg-white rounded-full flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-ink"><path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </div>
               </div>
               <p className="font-sans text-[13px] md:text-[14px] opacity-90 leading-[1.5] pr-8 drop-shadow-sm font-medium">
                 {arch.body}
               </p>
             </div>
           </div>
         ))}
       </div>
    </section>
  );
}

function DesignSystemBand() {
  const sectionRef = useRef<HTMLElement>(null);

  const moods = [
    { id: 'mint', title: 'Mint', desc: 'Calm & clinical', color: 'var(--color-orb-mint)' },
    { id: 'peach', title: 'Peach', desc: 'Warm & inviting', color: 'var(--color-orb-peach)' },
    { id: 'lavender', title: 'Lavender', desc: 'Soft & creative', color: 'var(--color-orb-lavender)' },
    { id: 'sky', title: 'Sky', desc: 'Open & trustworthy', color: 'var(--color-orb-sky)' },
    { id: 'rose', title: 'Rose', desc: 'Elegant & bold', color: 'var(--color-orb-rose)' },
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-canvas-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-body mb-6 block">
          Design System
        </span>
        <h2 className="font-display font-[400] text-[40px] md:text-[56px] leading-[1.0] tracking-[-1.2px] mb-16 text-ink">
          Five moods, infinite templates
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-6xl mx-auto">
          {moods.map((mood) => (
            <div key={mood.id} className="mood-card relative rounded-[32px] overflow-hidden aspect-[4/5] lg:aspect-square flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300">
              <div 
                className="absolute inset-0 opacity-[0.15] pointer-events-none" 
                style={{ background: `radial-gradient(circle at center, ${mood.color} 0%, transparent 80%)` }}
              />
              <div className="relative z-10 flex flex-col items-center">
                <div 
                   className="w-4 h-4 rounded-full mb-6" 
                   style={{ backgroundColor: mood.color }}
                />
                <h3 className="font-display font-[400] text-[20px] mb-1 text-ink">{mood.title}</h3>
                <p className="font-sans text-[13px] text-body">{mood.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="templates" className="py-24 md:py-32 bg-canvas px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="font-display font-[400] text-[36px] md:text-[48px] leading-[1.08] tracking-[-0.96px] text-ink mb-4">
              A curated taxonomy
            </h2>
            <p className="font-sans text-[16px] text-body max-w-xl">
              From reading-focused magazine layouts to technical dashboards, filter by category to find the specific aesthetic blueprint you need.
            </p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Enterprise', 'Publishing', 'Dashboard', 'Interactive'].map((filter, i) => (
              <button 
                key={filter} 
                className={`shrink-0 px-4 py-2 rounded-pill font-sans text-[14px] font-medium transition-colors border ${
                  i === 0 
                  ? 'bg-ink text-canvas-white border-ink' 
                  : 'bg-transparent text-body hover:text-ink border-hairline'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 z-10 w-full max-w-7xl relative mx-auto">
          {TEMPLATES.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="template-card bg-canvas-white border border-hairline rounded-[24px] p-5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08)] group cursor-pointer"
              >
                 <div className={`h-[180px] ${item.color} rounded-[16px] border border-hairline mb-6 overflow-hidden relative flex items-center justify-center transition-colors duration-500`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 mix-blend-overlay" />
                    <Icon className="w-12 h-12 text-ink/20 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-ink/40" />
                 </div>
                 <h3 className="font-display font-[400] text-[22px] mb-3 text-ink group-hover:text-primary-hover transition-colors">{item.title}</h3>
                 <p className="font-sans text-[15px] text-body leading-[1.5] line-clamp-2">
                    {item.description}
                 </p>
                 <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase bg-canvas px-2.5 py-1.5 rounded-[4px] inline-flex tracking-wider text-ink/70 font-medium">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="w-3.5 h-3.5 text-ink" />
                    </div>
                 </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function ResearchBand() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
     <section ref={sectionRef} id="research" className="bg-canvas-soft py-32 px-6 border-y border-hairline">
        <div className="max-w-4xl mx-auto">
           <h2 className="font-display font-[400] text-[48px] leading-[1.2] tracking-[-0.48px] mb-12 text-ink">
             Recent blueprints
           </h2>
           
           <div className="flex flex-col">
              {[
                { date: "Oct 12", title: "Refining the mono-serif pairing in data-dense tables", chip: "Typography" },
                { date: "Sep 28", title: "Soft drop shadows vs. architectural hairlines", chip: "Elevation" },
                { date: "Sep 15", title: "Atmospheric orbs for emotional resonance in B2B SaaS", chip: "Color" },
                { date: "Aug 30", title: "Vibecoding massive enterprise forms", chip: "Forms" }
              ].map((article, i) => (
                 <a key={i} href="#" className="research-item flex flex-col sm:flex-row sm:items-center justify-between py-6 border-t border-hairline group">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                       <span className="font-sans text-[14px] text-body w-16">{article.date}</span>
                       <h3 className="font-display font-[400] text-[20px] group-hover:text-ink/70 transition-colors text-ink">{article.title}</h3>
                    </div>
                    <span className="self-start sm:self-auto px-3 py-1 bg-canvas border border-hairline rounded-[4px] font-mono text-[10px] uppercase text-body tracking-[0.1em]">
                      {article.chip}
                    </span>
                 </a>
              ))}
              <div className="border-t border-hairline pt-6">
                 <a href="#" className="font-sans font-medium text-[15px] text-ink underline underline-offset-4 hover:text-ink/70 transition-colors">
                    View all research
                 </a>
              </div>
           </div>
        </div>
     </section>
  )
}

function CtaBand() {
  return (
    <section className="py-32 bg-canvas px-6 flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,var(--color-orb-rose)_0%,transparent_60%)] w-[600px] h-[600px] opacity-30 mix-blend-multiply blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="font-display font-[400] text-[48px] md:text-[64px] leading-[1.05] tracking-[-1.92px] text-ink mb-10">
          Ready to describe your vibe?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-ink hover:bg-primary-hover text-canvas-white px-6 py-2.5 rounded-pill font-sans font-medium text-[14px] transition-colors border-none">
            Start generating for free
          </button>
          <button className="bg-transparent border border-ink hover:bg-ink/5 text-ink px-6 py-2.5 rounded-pill font-sans font-medium text-[14px] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto pb-8 pt-6 px-16 bg-canvas z-10 relative border-t border-hairline">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-ink mb-6">
              <span className="font-display font-[400] text-[24px] tracking-[-0.5px]">VibeTemplates</span>
            </div>
          </div>
          
          {[
            { title: "Products", links: ["Studio", "Playground", "Enterprise", "Pricing"] },
            { title: "Resources", links: ["Documentation", "Research", "Blog", "Community"] },
            { title: "Company", links: ["About", "Careers", "Security", "Contact"] },
            { title: "Legal", links: ["Terms", "Privacy", "Cookie Policy", "Guidelines"] }
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-sans font-medium text-[14px] text-ink mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-sans text-[14px] text-body hover:text-ink transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-hairline gap-4 text-center sm:text-left">
           <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-body m-0">
             © {new Date().getFullYear()} VibeTemplates Inc.
           </div>
           <div className="flex gap-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-body m-0">LATENCY: 14MS</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-body m-0">NODES: 1,204</span>
           </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-canvas selection:bg-cohere-coral/20 selection:text-ink relative overflow-hidden flex flex-col">
      <Nav />
      <main className="flex-grow z-10 w-full">
        <Hero />
        <GlobalTrust />
        <ArchitecturesShowcase />
        <DarkFeatureBand />
        <TemplateGallery />
        <DesignSystemBand />
        <ResearchBand />
        <CtaBand />
      </main>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 font-mono text-[10px] text-hairline tracking-[4px] uppercase z-10 origin-center whitespace-nowrap hidden lg:block pointer-events-none">
        AUTOGENERATED_INTERFACES_V.2
      </div>
      <Footer />
    </div>
  );
}
