const portfolioData = {
        name: "Sarthak Gupta",
        title: "Frontend Developer",
        description: "Frontend Developer with 1 year of experience in HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS",
        profileImage: "/Sarthak.png",
        skills: [
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Git/GitHub", level: 80 },
    { name: "GSAP", level: 60 },
    { name: "Node.js", level: 30 },
  ],
  contact: {
  email: "sarthakguptaa2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarthak-gupta-a47207222/",
  github: "https://github.com/sarthakg97",
  phone: "+91-9794098427"
},
  experience: [
  {
    id: 1,
    company: "MBD Alchemie",
    role: "Frontend Developer",
    duration: "Dec 2025 – May 2026",
    location: "Noida",
    points: [
      "Developed responsive UI using React.js and Tailwind CSS",
      "Integrated REST APIs and handled state management",
      "Collaborated with design team on UI/UX improvements"
    ]
  },
  {
    id: 2,
    company: "Tpoint Tech",
    role: "Frontend Developer", 
    duration: "May 2025 – Nov 2025",
    location: "Noida",
    points: [
      "Built web applications using HTML, CSS and JavaScript",
      "Worked on React.js projects with component architecture",
      "Gained experience in version control using Git/GitHub"
    ]
  }
],
        projects: [
            {
                id: 1,
                title: "SmartChat AI Chatbot",
                tech: ["Next.js 15", "Groq API", "Tailwind CSS"],
                description: "AI-powered chat application using Next.js 15 and Groq API (LLaMA 3.3)",
                liveLink: "https://smartchat-ai-rust.vercel.app/",
                githubLink: "https://github.com/sarthakg97/aipowerchatbot"

            },
            {
      id: 2,
      title: "CryptoTracker",
      tech: ["Next.js 15", "CoinGecko API", "Tailwind CSS"],
      description: "Real-time cryptocurrency tracker using SSG, SSR, ISR and CSR rendering strategies",
      liveLink: "",
      githubLink: "https://github.com/sarthakg97"
    },
    {
      id: 3,
      title: "Dev Blog",
      tech: ["Next.js 15", "SSG", "ISR"],
      description: "Developer blog built with Next.js 15 using Static Site Generation and Incremental Static Regeneration",
      liveLink: "",
      githubLink: "https://github.com/sarthakg97"
    },
    {
      id: 4,
      title: "ShopEasy",
      tech: ["React", "Context API", "React Router"],
      description: "E-commerce app with cart functionality using React Router and useContext for state management",
      liveLink: "",
      githubLink: "https://github.com/sarthakg97"
    },
    {
      id: 5,
      title: "Weather App",
      tech: ["React", "OpenWeatherMap API"],
      description: "Real-time weather application fetching live data using OpenWeatherMap API",
      liveLink: "",
      githubLink: "https://github.com/sarthakg97"
    },
    {
      id: 6,
      title: "GitHub User Finder",
      tech: ["Next.js 15", "GitHub API"],
      description: "Search GitHub users and view their repositories and profile stats in real-time",
      liveLink: "",
      githubLink: "https://github.com/sarthakg97"
    }

        ]

        
        
};

export default portfolioData;