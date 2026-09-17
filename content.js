/*
  ============================================================
  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO.
  You usually do NOT need to touch index.html or styles.css.
  ============================================================
*/

const portfolio = {
  profile: {
    name: "Masudur Sadik Rifat",
    shortName: "Rifat",
    university: "BRAC University",
    degree: "BSc in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    email: "",
    resumeUrl: "./assets/Rifat CV.pdf",
    heroIntro:
      "CSE student at BRAC University working with Machine Learning, AI and Data Science — while also creating, editing and performing in short-form brand content.",
    about:
      "On the technical side, I enjoy turning data into useful systems and experimenting with machine learning. On the creative side, I work with reels, brand content, video editing and on-camera storytelling. I like projects where logic and creativity can meet.",
    contactLine:
      "I’m open to internships, tech projects, creative collaborations, brand work and interesting ideas."
  },

  // Add, remove, or reorder projects here.
  projects: [
    {
      title: "Autonomous Flying Delivery Robot",
      category: "Robotics & AI",
      year: "2025",
      description:
        "An autonomous drone-based delivery system focused on navigation, obstacle awareness and intelligent route planning for real-world logistics scenarios.",
      tags: ["Robotics", "AI", "Python", "Autonomy"],
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=85",
      liveUrl: "https://github.com/RifatSadik22/-Autonomous-Flying-Delivery-Robot",
      githubUrl: "https://github.com/RifatSadik22/-Autonomous-Flying-Delivery-Robot"
    },
    {
      title: "Urban Street Racing Game",
      category: "Game Development",
      year: "2024",
      description:
        "A fast-paced street racing game project built around thrilling movement, competitive gameplay and immersive city-based racing action.",
      tags: ["C++", "Game Dev", "Unity", "Simulation"],
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
      liveUrl: "https://github.com/RifatSadik22/Urban-Street-Racing-Game",
      githubUrl: "https://github.com/RifatSadik22/Urban-Street-Racing-Game"
    },
    {
      title: "Poralekha Planner",
      category: "Productivity App",
      year: "2024",
      description:
        "A planning and organization project designed to help users manage tasks, schedules and daily goals in a structured and practical way.",
      tags: ["Planning", "UI/UX", "Productivity", "Web"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
      liveUrl: "https://github.com/RifatSadik22/Poralekha-Planner-",
      githubUrl: "https://github.com/RifatSadik22/Poralekha-Planner-"
    },
    {
      title: "DanPotro",
      category: "Web Project",
      year: "2024",
      description:
        "A web-based project focused on building a clean user experience, practical design and functional front-end development for everyday use.",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      liveUrl: "https://github.com/RifatSadik22/DanPotro",
      githubUrl: "https://github.com/RifatSadik22/DanPotro"
    }
  ],

  /*
    Creative work:
    - thumbnail: image shown on the portfolio
    - videoUrl: YouTube / Vimeo / Instagram / Facebook / Google Drive / any public link
    For YouTube links, the site will try to open an embedded player.
    Other links open in a new tab.
  */
  creativeWork: [
    {
      title: "Brand Reel Collaboration",
      type: "On-Camera / Brand Reel",
      brand: "The Local Coffee",
      description:
        "A brand collaboration reel featuring this campaign and the creative storytelling behind it.",
      thumbnail:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
      videoUrl: "https://www.instagram.com/reel/DX8kxY2vzWR/?hl=en"
    },
    {
      title: "Short-Form Edit",
      type: "Video Editing",
      brand: "Client / Social Content",
      description:
        "A short-form edited reel focused on pacing, transitions, captions and visual rhythm.",
      thumbnail:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85",
      videoUrl: "https://www.instagram.com/reel/DT0HiOriU7KKi0XjrBAAAy-zQiWbZafpWw--BI0/?hl=en"
    },
    {
      title: "Campaign Reel",
      type: "Acting + Creative",
      brand: "Brand Campaign",
      description:
        "A promotional reel designed to showcase a campaign concept through performance and visual storytelling.",
      thumbnail:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=85",
      videoUrl: "https://www.instagram.com/reel/DZ5AcMxzNgt/?hl=en"
    },
    {
      title: "Creative Experiment",
      type: "Reel / Short Video",
      brand: "Cooper's",
      description:
        "A creative experiment reel built around mood, timing and visual expression for a brand-led concept.",
      thumbnail:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1000&q=85",
      videoUrl: "https://www.instagram.com/reel/DXjQuOhRPrt/?hl=en"
    }
  ],

  techSkills: [
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Pandas",
    "NumPy",
    "SQL",
    "Scikit-learn",
    "OpenCV",
    "Data Visualization",
    "Git / GitHub"
  ],

  creativeSkills: [
    "Video Editing",
    "Short-form Reels",
    "On-camera Acting",
    "Content Creation",
    "Visual Storytelling",
    "Pacing & Cuts",
    "Captions",
    "Social Media Content",
    "Brand Collaboration"
  ],

  journey: [
    {
      date: "Present",
      title: "BSc in Computer Science & Engineering",
      place: "BRAC University",
      description:
        "Building foundations in computer science while focusing on AI, machine learning and data-driven projects."
    },
    {
      date: "Nov 10, 2025",
      title: "Creative Content Executive",
      place: "Cooper's Bakery",
      description:
        "Joined Cooper's Bakery on November 10th, 2025, contributing to content creation, visual storytelling and brand-facing creative work."
    },
    {
      date: "Freelance",
      title: "Freelance / Creative Work",
      place: "Video Editing & Social Content",
      description:
        "Editing videos, creating short reels and enhancing pictures for brands and personal content through visual storytelling and social media-ready edits."
    }
  ],

  links: [
    { label: "GitHub", url: "https://github.com/RifatSadik22", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rifatsadik/", icon: "linkedin" },
    { label: "Instagram", url: "https://www.instagram.com/boredrifat/?hl=en", icon: "instagram" },

  ]
};
