import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Anup Shrestha",
    title: "Innovation Strategist & Product Leader",
    tagline: "Transforming business visions into digital realities through human-centered design and data intelligence.",
    email: "anupsth23@gmail.com",
    location: "Toronto, Ontario",
    profileImage: "/images/image.profile.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/anup-shrestha",
      twitter: "https://twitter.com/anupshrestha",
      medium: "https://medium.com/@anupshrestha"
    },
    philosophy: "I believe in using technology as a catalyst for meaningful change, focusing on products that solve real human problems while driving business growth. My approach combines analytical precision with creative empathy."
  },
  summary: "Visionary Product Leader with a proven ability to transform abstract concepts into market-ready innovations. I specialize in orchestrating the delicate balance between business objectives, technical possibilities, and human needs. My data-first methodology and customer-centric focus have consistently delivered products that not only meet market demands but shape future user expectations. With expertise spanning from zero-to-one product creation to strategic scaling, I thrive in fast-paced environments where creativity meets execution excellence.",
  vision: "I envision a future where product development transcends traditional boundaries, creating digital experiences that feel intuitively human while leveraging the full potential of emerging technologies. My goal is to lead teams that build the invisible infrastructure powering tomorrow's most essential innovations.",
  experience: [
    {
      title: "Product Manager",
      company: "TwinsAI",
      location: "USA",
      period: "Jan 2025 - Present",
      responsibilities: [
        "Architect the product vision and strategy, translating business objectives into actionable roadmaps",
        "Lead cross-functional collaboration across engineering, design, marketing, and sales divisions",
        "Analyze market trends and customer feedback to identify high-impact opportunity areas"
      ],
      kpis: [
        "Developed 4 innovative AI products from concept to market launch",
        "Managed 20+ cross-functional team members across 3 departments",
        "Handled 25+ key stakeholders including C-suite executives and investors"
      ],
      achievements: [
        "Spearheaded the development of an AI-powered sales automation platform that reduced outreach time by 40% and improved conversion rates by 400%",
        "Established a customer advisory board that contributed to a 35% increase in feature adoption and a 28% reduction in churn",
        "Pioneered a data-driven experimentation framework resulting in a 65% improvement in product decision confidence",
        "Led strategic partnerships with 5 enterprise clients, generating $2.5M in annual recurring revenue",
        "Orchestrated product launch campaigns that achieved 150% of user acquisition targets within first quarter"
      ],
      technologies: ["Machine Learning", "NLP", "Product Analytics", "UX Research", "Agile/Scrum"],
      image: "/images/twins-ai.png"
    },
    {
      title: "Product Manager",
      company: "Rumsan Associates",
      location: "Nepal",
      period: "December 2021 - March 2023",
      responsibilities: [
        "Orchestrated the full product lifecycle for 16 SaaS applications from concept to post-launch optimization",
        "Developed comprehensive product strategies aligned with client business objectives and market opportunities",
        "Facilitated seamless collaboration between stakeholders, development teams, and end-users"
      ],
      kpis: [
        "Developed 3 NFT marketplaces with combined monthly volume of $1.2M",
        "Supervised 15 engineers across 6 concurrent blockchain projects",
        "Coordinated with 18 government and enterprise stakeholders"
      ],
      achievements: [
        "Conceptualized and launched a revolutionary blockchain-based financial platform that secured partnerships with 4 government agencies and acquired 15,000+ users in its first quarter",
        "Implemented an innovative product development framework that reduced time-to-market by 30% while maintaining quality standards",
        "Created a customer feedback loop that directly influenced product evolution, resulting in a 92% satisfaction score",
        "Built and delivered 3 enterprise-grade NFT marketplaces with a combined monthly trading volume of $1.2M",
        "Instituted agile methodologies across the engineering department, increasing overall productivity by 42%"
      ],
      technologies: ["Blockchain", "Web Applications", "Financial Technology", "OAuth", "RESTful APIs"],
      image: "/images/rumsan.png"
    },
    {
      title: "Business Analyst",
      company: "Rumsan Associates",
      location: "Nepal",
      period: "November 2018 - November 2021",
      responsibilities: [
        "Translated complex business requirements into detailed technical specifications for development teams",
        "Conducted comprehensive market research to identify emerging trends and competitor movements",
        "Served as the crucial link between technical teams and business stakeholders"
      ],
      kpis: [
        "Analyzed data from 12+ products serving 30,000+ monthly active users",
        "Collaborated with 10 development teams across different business units",
        "Managed 22 stakeholder relationships spanning 4 different industries"
      ],
      achievements: [
        "Identified critical UX bottlenecks through data analysis, leading to a redesign that reduced churn by 25% and increased user engagement by 40%",
        "Developed a strategic product positioning framework that aligned engineering efforts with business growth objectives",
        "Implemented an efficient requirements gathering process that reduced development rework by 35%",
        "Spearheaded the creation of a company-wide data analysis toolkit that improved decision-making speed by 65%",
        "Orchestrated the consolidation of 5 legacy systems, resulting in $180K annual operational cost savings"
      ],
      technologies: ["Data Analysis", "Business Process Modeling", "SQL", "Wireframing", "User Stories"],
      image: "/images/business-analyst.png"
    }
  ],
  skills: [
    { name: "Product Strategy", level: 9, category: "domain" },
    { name: "User Experience Design", level: 8, category: "domain" },
    { name: "Data Analytics", level: 9, category: "technical" },
    { name: "Market Research", level: 8, category: "domain" },
    { name: "Agile Methodologies", level: 9, category: "domain" },
    { name: "Stakeholder Communication", level: 9, category: "soft" },
    { name: "Technical Architecture", level: 7, category: "technical" },
    { name: "Business Strategy", level: 8, category: "domain" },
    { name: "Python", level: 7, category: "technical" },
    { name: "SQL", level: 8, category: "technical" },
    { name: "AI/ML Product Development", level: 8, category: "domain" },
    { name: "Cross-functional Leadership", level: 9, category: "soft" }
  ],
  projects: [
    {
      title: "Quantum",
      description: "An AI-powered sales engagement platform that revolutionizes how sales teams connect with prospects through intelligent automation.",
      role: "Led product strategy, development and go-to-market execution",
      impact: "Increased customer conversion by 400% and reduced sales cycle by 35% for enterprise clients",
      technologies: ["Artificial Intelligence", "Natural Language Processing", "Sales Automation", "CRM Integration"],
      image: "/images/quantum-project.png"
    },
    {
      title: "RahatChain",
      description: "Blockchain-based humanitarian aid distribution platform enabling transparent, efficient delivery of resources to disaster-affected communities.",
      role: "Defined product vision, managed development roadmap, and coordinated with government stakeholders",
      impact: "Successfully distributed aid to 15,000+ beneficiaries and reduced distribution costs by 42%",
      technologies: ["Blockchain", "Digital Wallets", "Offline Authentication", "Humanitarian Tech"],
      image: "/images/rahat-project.png"
    },
    {
      title: "MarketPulse",
      description: "Real-time market intelligence platform providing actionable insights through advanced data visualization and predictive analytics.",
      role: "Conceptualized the product, prioritized features, and guided the analytics implementation",
      impact: "Enabled clients to identify market opportunities 60% faster, leading to measurable revenue growth",
      technologies: ["Big Data", "Predictive Analytics", "Interactive Visualizations", "API Integrations"],
      image: "/images/marketpulse-project.png"
    }
  ],
  testimonials: [
    {
      quote: "Anup has a rare ability to see both the forest and the trees. He consistently delivers strategic vision while maintaining a firm grasp on technical execution details.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TwinsAI",
      image: "/images/testimonial1.png"
    },
    {
      quote: "Working with Anup transformed how we approach product development. His data-driven methodology and customer-first mindset created a paradigm shift in our organization.",
      author: "Rajiv Sharma",
      role: "CEO",
      company: "Rumsan Associates",
      image: "/images/testimonial2.png"
    },
    {
      quote: "Anup's ability to translate complex technical concepts into business value is unparalleled. He bridges the gap between innovation and practical application masterfully.",
      author: "Emily Johnson",
      role: "VP of Innovation",
      company: "Global Financial Services",
      image: "/images/testimonial3.png"
    }
  ],
  certifications: [
    {
      name: "Microsoft Certified Professional (MCP)",
      issuer: "Microsoft",
      date: "Jun 2020",
      validUntil: "Jun 2023",
      credentialId: "MS-1234567",
      credentialUrl: "https://www.microsoft.com/certification/verify",
      description: "Validated expertise in implementing, managing, and maintaining Microsoft technologies, demonstrating proficiency in Microsoft's core platforms and solutions.",
      skills: ["Microsoft Azure", "Cloud Services", "Windows Server", "Microsoft 365"],
      image: "/images/certifications/microsoft.png"
    },
    {
      name: "Certified Scrum Product Owner (CSPO)",
      issuer: "Scrum Alliance",
      date: "Sep 2021",
      credentialId: "SA-12345678",
      credentialUrl: "https://certification.scrumalliance.org/verify",
      description: "Certification in product ownership practices focusing on value maximization, stakeholder management, and agile product development.",
      skills: ["Product Backlog Management", "Stakeholder Collaboration", "Agile Methodologies", "Value Delivery"],
      image: "/images/certifications/scrum-alliance.png"
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "Mar 2022",
      credentialId: "GDA-987654321",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/",
      description: "Comprehensive training in data analytics including data preparation, analysis, visualization, and interpretation for business decision-making.",
      skills: ["Data Analysis", "R Programming", "SQL", "Tableau", "Data Visualization"],
      image: "/images/certifications/google.png"
    }
  ]
}; 