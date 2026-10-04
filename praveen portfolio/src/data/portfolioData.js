/**
 * PRAVEEN PORTFOLIO DATA CONFIGURATION
 * Easily customize video links, posters, skills, contact info, and social links here.
 */

export const personalInfo = {
  name: "PRAVEEN",
  role: "GRAPHIC DESIGNER & VIDEO EDITOR",
  tagline: "Turning Ideas Into Visual Experiences.",
  bio: "I'm a creative Graphic Designer and Video Editor focused on visual storytelling and impactful content. I create brand designs, social media creatives, and engaging reels that help brands stand out.",
  experienceYears: "1+ Year",
  education: [
    {
      degree: "Graphic Designer Course",
      institution: "Image Creative Education",
      year: "2025",
      description: "Comprehensive training in visual design, brand identity, layout typography, and digital illustration."
    }
  ],
  experience: [
    {
      role: "Freelance Video Editor & Graphic Designer",
      period: "2025 - Present (1+ Year)",
      description: "Created high-converting Instagram Reels, YouTube videos, promotional banners, and brand identity design for diverse clients."
    },

  ],
  socials: {
    whatsapp: "https://wa.me/917604868681",
    phone: "+91 76048 68681",
    instagram: "https://www.instagram.com/the.loopcut/", // Update with actual URL
    behance: "https://www.behance.net/praveens00", // Update with actual URL
    youtube: "https://youtube.com/", // Update with actual URL
    linkedin: "https://www.linkedin.com/in/praveen-s-596433326/", // Update with actual URL
    email: "praveens18804@gmail.com"
  },
  heroMedia: {
    previewImage: "/hero_reel_preview.jpg", // Update with your preferred image URL or file in public/
    title: "Visual Storytelling Reel",
    categoryLabel: "Reel Showcase",
    videoUrl: "/videos/reel_Dd1TkoJsRxC.mp4",
    duration: "00:27"
  }
};

export const skillsData = [
  {
    name: "Adobe Premiere Pro",
    level: 90,
    category: "Video Editing",
    color: "#FF2020",
    iconName: "Film",
    description: "Multi-cam editing, color grading, audio mixing, pacing & narrative storytelling."
  },
  {
    name: "Adobe After Effects",
    level: 60,
    category: "Motion Graphics",
    color: "#FF3B3B",
    iconName: "Zap",
    description: "Title animations, visual FX, visual transitions, lower thirds & 2D motion graphics."
  },
  {
    name: "Adobe Photoshop",
    level: 90,
    category: "Graphic Design",
    color: "#FF2020",
    iconName: "Image",
    description: "Thumbnail design, photo manipulation, social media creatives & poster art."
  },
  {
    name: "Adobe Illustrator",
    level: 80,
    category: "Vector Graphics",
    color: "#FF5555",
    iconName: "PenTool",
    description: "Logo design, vector illustrations, typography hierarchy & brand assets."
  },
  {
    name: "DaVinci Resolve",
    level: 50,
    category: "Color Grading",
    color: "#CC0000",
    iconName: "Sliders",
    description: "Cinematic color matching, node-based grading & workflow optimization."
  }
];

export const portfolioProjects = [
  // --- CATEGORY 1: VIDEOS (User Projects) ---
  {
    id: "v1",
    type: "video",
    aspect: "9:16", // Vertical Reel
    title: "10K Followers Doesn't Guarantee Sales",
    categoryLabel: "Instagram Reel",
    tags: ["Business Strategy", "Content Marketing", "Reel Edit"],
    thumbnail: "/videos/reel_Dd1TkoJsRxC.jpg",
    videoUrl: "/videos/reel_Dd1TkoJsRxC.mp4",
    instagramUrl: "https://www.instagram.com/reel/Dd1TkoJsRxC/",
    duration: "00:27",
    client: "Sales & Content Strategy",
    description: "Educational reel discussing sales strategy, follower conversion vs viral reels, and high-converting content structure."
  },
  {
    id: "v2",
    type: "video",
    aspect: "9:16", // Vertical Reel
    title: "Organic First 5 Clients Framework",
    categoryLabel: "Consulting Reel",
    tags: ["Client Acquisition", "Content Strategy", "Organic Growth"],
    thumbnail: "/videos/reel_DdxpUSQPgqq.jpg",
    videoUrl: "/videos/reel_DdxpUSQPgqq.mp4",
    instagramUrl: "https://www.instagram.com/reel/DdxpUSQPgqq/",
    duration: "00:17",
    client: "Business Consulting",
    description: "Actionable framework guide on how to acquire your first 5 clients organically without paid ad spend."
  },
  {
    id: "v3",
    type: "video",
    aspect: "9:16", // Vertical Reel
    title: "Instagram Bio Optimization & Audit",
    categoryLabel: "Growth Reel",
    tags: ["Profile Audit", "Growth Hacking", "Personal Brand"],
    thumbnail: "/videos/reel_DdtnUJTpjwR.jpg",
    videoUrl: "/videos/reel_DdtnUJTpjwR.mp4",
    instagramUrl: "https://www.instagram.com/reel/DdtnUJTpjwR/",
    duration: "00:15",
    client: "Social Media Growth",
    description: "Growth strategy reel breaking down why profile visitors leave without following and how to optimize your bio for conversion."
  },
  {
    id: "v4",
    type: "video",
    aspect: "9:16", // Vertical Reel
    title: "Algorithm Secret: Retention > Consistency",
    categoryLabel: "Viral Content",
    tags: ["Algorithm Secrets", "Audience Retention", "Quality Content"],
    thumbnail: "/videos/reel_DdqklwrsQ0g.jpg",
    videoUrl: "/videos/reel_DdqklwrsQ0g.mp4",
    instagramUrl: "https://www.instagram.com/reel/DdqklwrsQ0g/",
    duration: "00:13",
    client: "Content Creator Strategy",
    description: "High-retention reel revealing why audience retention beats daily posting frequency on the Instagram algorithm."
  },
  {
    id: "v5",
    type: "video",
    aspect: "9:16", // Vertical Reel
    title: "Businessman vs Entrepreneur Mindset",
    categoryLabel: "Brand Reel",
    tags: ["Entrepreneurship", "Trendsetter", "Mindset"],
    thumbnail: "/videos/reel_DdMLnqTu5dq.jpg",
    videoUrl: "/videos/reel_DdMLnqTu5dq.mp4",
    instagramUrl: "https://www.instagram.com/reel/DdMLnqTu5dq/",
    duration: "00:24",
    client: "Business & Mindset",
    description: "Sleek vertical reel contrasting the businessman mindset (following trends) with the entrepreneur mindset (creating trends)."
  }
];
