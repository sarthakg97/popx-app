"use client";
import { useEffect, useRef } from "react";
import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HomeContent() {
  const { portfolioData } = usePortfolio();
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animations for the wild entrance
    let ctx = gsap.context(() => {
      // Exploding title text
      gsap.fromTo(
        ".crazy-title",
        { y: 80, opacity: 0, rotate: -3 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(1.5)", stagger: 0.1 }
      );

      // Floating animation for the image/graphic block
      gsap.to(".graphic-block", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut"
      });

      gsap.to(".projects-title", {
      scale: 0.5,
      scrollTrigger: {
        trigger: ".projects-title",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      }
    });
   gsap.fromTo(".project-card",
  { y: 60, opacity: 0, scale: 0.95 },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "back.out(1.2)",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".cards-container",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    }
  }

);
// Skills stagger animation
gsap.fromTo(".skill-card",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.5)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  }
);
gsap.utils.toArray(".skill-card").forEach((card, i) => {
  gsap.to(card, {
    y: -8,
    duration: 1.5 + (i * 0.2),
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: i * 0.1
  });
});
// Timeline line animation
gsap.fromTo(".timeline-line",
  { scaleY: 0 },
  {
    scaleY: 1,
    duration: 1.5,
    ease: "power2.out",
    transformOrigin: "top",
    scrollTrigger: {
      trigger: "#experience",
      start: "top 75%",
      toggleActions: "play none none reverse",
    }
  }
);

// Points stagger
gsap.fromTo(".exp-point",
  { x: -30, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.5)",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#experience",
      start: "top 75%",
      toggleActions: "play none none reverse",
    }
  }
);
// Skills title shrink
gsap.to(".skills-title", {
  scale: 0.5,
  scrollTrigger: {
    trigger: ".skills-title",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});

// Experience title shrink
gsap.to(".experience-title", {
  scale: 0.5,
  scrollTrigger: {
    trigger: ".experience-title",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef} 
      className="min-h-screen relative bg-neutral-950 text-neutral-50 overflow-hidden font-sans selection:bg-lime-400 selection:text-black flex flex-col items-center justify-center py-12 px-4"
    >
      {/* Background glow and matrix-style grain overlay */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-lime-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-fuchsia-500/10 blur-[130px] rounded-full pointer-events-none" />
      
      <section 
        id="hero" 
        className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10"
      >
        {/* Left: Text Content */}
        <div className="w-full md:w-3/5 space-y-6 text-center md:text-left">
          
          {/* Badge */}
          <div className="inline-block bg-neutral-900 border border-neutral-800 text-lime-400 font-mono text-xs px-3 py-1.5 rounded-full uppercase tracking-widest">
            Ready to Build // 1 YOE
          </div>
          
          {/* Name & Title */}
          <div className="overflow-hidden">
            <h1 className="crazy-title text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
              {portfolioData.name}
            </h1>
            <h2 className="crazy-title text-xl sm:text-2xl font-mono text-neutral-400 mt-2 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-fuchsia-500">{portfolioData.title}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-neutral-400 max-w-xl text-sm sm:text-base font-medium leading-relaxed font-mono">
            {portfolioData.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <button className="bg-white text-black px-6 py-3 font-black uppercase text-sm rounded-xl tracking-wider hover:bg-lime-400 transition-colors shadow-lg shadow-white/5 active:scale-95">
              View Projects ↗
            </button>
            <button className="bg-neutral-900 text-neutral-300 border border-neutral-800 px-6 py-3 font-bold uppercase text-sm rounded-xl tracking-wider hover:border-fuchsia-500 hover:text-white transition-colors active:scale-95">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Crazy Profile Frame */}
        <div className="graphic-block w-full md:w-2/5 flex justify-center">
          <div className="relative group p-4">
            {/* Chaotic outline layer */}
            <div className="absolute inset-0 border-2 border-dashed border-lime-400/30 rounded-3xl group-hover:rotate-6 transition-transform duration-500" />
            
            {/* Vibrant glow background frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-500 to-fuchsia-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-3xl" />
            
            {/* Actual image wrapper */}
            <div className="relative bg-neutral-900 border-2 border-neutral-800 p-3 rounded-2xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-500 w-64 h-64 sm:w-80 sm:h-80 overflow-hidden shadow-2xl">
              <img 
                src={portfolioData.profileImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500"} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                [ LIVE_FILE_01 ]
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* projects */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20 text-center relative">
        <h2 className="projects-title text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-fuchsia-500 text-center">My Projects</h2>
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-fuchsia-500 opacity-10 blur-[80px] rounded-full pointer-events-none" />
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 " onMouseLeave={() => {
    gsap.to(".project-card", { opacity: 1, duration: 0.3 });
  }}>
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="project-card relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col gap-4 group hover:border-lime-400 transition-all duration-300 overflow-hidden" onMouseEnter={(e) => {
    gsap.to(".project-card", { opacity: 0.3, duration: 0.3 });
    gsap.to(e.currentTarget, { opacity: 1, duration: 0.3 });
  }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 blur-xl rounded-2xl transition-opacity duration-500 pointer-events-none" />
            
            <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">{project.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-neutral-800 text-neutral-400 text-xs px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href={project.liveLink} className="text-sm font-bold text-white bg-lime-400 px-4 py-2 rounded-lg hover:bg-lime-300 transition-colors">
                Live ↗
              </a>
              <a href={project.githubLink} className="text-sm font-bold text-neutral-300 border border-neutral-700 px-4 py-2 rounded-lg hover:border-fuchsia-500 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      </section>

      {/* Skills */}
<section id="skills" className="w-full max-w-6xl mx-auto px-6 py-20 relative">
  <h2 className="skills-title
 text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-fuchsia-500 text-center mb-16">
    Skills
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6" onMouseLeave={() => {
    gsap.to(".skill-card", { opacity: 1, duration: 0.3 });
  }}>
    {portfolioData.skills.map((skill) => (
      <div
        key={skill.name}
        className="skill-card bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex items-center justify-center group hover:border-lime-400 transition-all duration-300 cursor-default"
        onMouseEnter={(e) => {
        // Baaki sab dim
        gsap.to(".skill-card", { opacity: 0.3, duration: 0.3 });
        // Yeh card bright + float
        gsap.to(e.currentTarget, {
          opacity: 1,
          y: -8,
          scale: 1.05,
          boxShadow: "0 0 25px rgba(163,230,53,0.4)",
          duration: 0.3,
          ease: "power2.out"
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, {
          y: 0,
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out"
        });
      }}
      >
        <span className="text-white font-bold text-sm md:text-base group-hover:text-lime-400 transition-colors text-center">
          {skill.name}
        </span>
      </div>
    ))}
  </div>
</section>
{/* Experience */}
<section id="experience" className="w-full max-w-6xl mx-auto px-6 py-20 relative">
  <h2 className="experience-title text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-fuchsia-500 text-center mb-16">
    Experience
  </h2>
  <div className="flex flex-col gap-12 relative" onMouseLeave={() => {  
    gsap.to(".exp-card", { opacity: 1, duration: 0.3 });
  }}>
    {/* Vertical line */}
    <div className="timeline-line absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-lime-400 to-fuchsia-500 origin-top" />
    
        {portfolioData.experience.map((exp) => (
          <div key={exp.id} className="relative">
    
    <div className="absolute left-[11px] top-1 w-4 h-4 rounded-full bg-lime-400 border-4 border-neutral-950 z-10" />
          <div 
        className="exp-card pl-12 relative transition-all duration-300"
        onMouseEnter={(e) => {
          gsap.to(".exp-card", { opacity: 0.3, duration: 0.3 });
          gsap.to(e.currentTarget, {
            opacity: 1,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }}
      >
        {/* Dot */}
        
        <div className="absolute left-3 top-0 bottom-0 w-4 bg-gradient-to-b from-lime-400/20 to-fuchsia-500/20 blur-sm" />
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4" >
          <div>
            <h3 className="text-xl font-black text-white">{exp.company}</h3>
            <span className="text-lime-400 font-mono text-sm">{exp.role}</span>
          </div>
          <span className="text-neutral-400 font-mono text-sm">{exp.duration}</span>
        </div>

        {/* Points */}
        <ul className="flex flex-col gap-3">
          {exp.points.map((point, i) => (
            <li key={i} className="exp-point text-neutral-400 text-sm flex gap-2 items-start">
              <span className="text-lime-400 mt-0.5">→</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>  
    ))}
  </div>
</section>

{/* Contact */}
<section id="contact" className="w-full max-w-6xl mx-auto px-6 py-20 relative text-center">
  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-fuchsia-500 text-center mb-16">
    Contact Me
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <a href={`mailto:${portfolioData.contact.email}`} className="contact-card bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-lime-400 transition-all duration-300 group">
      <span className="text-2xl">📧</span>
      <span className="text-white text-sm font-bold group-hover:text-lime-400 transition-colors">Email</span>
    </a>
    <a href={portfolioData.contact.linkedin} target="_blank" className="contact-card bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-lime-400 transition-all duration-300 group">
      <span className="text-2xl">💼</span>
      <span className="text-white text-sm font-bold group-hover:text-lime-400 transition-colors">LinkedIn</span>
    </a>
    <a href={portfolioData.contact.github} target="_blank" className="contact-card bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-lime-400 transition-all duration-300 group">
      <span className="text-2xl">🐙</span>
      <span className="text-white text-sm font-bold group-hover:text-lime-400 transition-colors">GitHub</span>
    </a>
    <a href={`tel:${portfolioData.contact.phone}`} className="contact-card bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-lime-400 transition-all duration-300 group">
      <span className="text-2xl">📱</span>
      <span className="text-white text-sm font-bold group-hover:text-lime-400 transition-colors">Phone</span>
    </a>
  </div>
</section>
    </main>
  );
}

export default function Home() {
  return (
    <PortfolioProvider>
      <HomeContent />
    </PortfolioProvider>
  );
}