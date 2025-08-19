export interface Founder {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  education: string;
  image: string;
  linkedin?: string;
  email: string;
}

export const founders: Founder[] = [
  {
    name: "Wyatt Leroux",
    title: "Co-Founder & Partner",
    bio: "Wyatt brings exceptional leadership experience as President of Kick Conference and extensive professional background from Big 4 consulting and tax consulting roles. A founding member of the Youth Advisory Council at age 14, he has demonstrated remarkable leadership capabilities from an early age. His community advisor background and analytical expertise have helped numerous clients achieve significant operational improvements and strategic growth.",
    expertise: [
      "Strategic Leadership & Management",
      "Big 4 Consulting Methodologies",
      "Tax Strategy & Optimization",
      "Youth Leadership Development",
      "Community Advisory Services",
      "Financial Analysis & Planning"
    ],
    education: "University of Waterloo - Accounting & Financial Management",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHNLmdafDtgEA/profile-displayphoto-scale_400_400/B56ZjDuyErG4Ak-/0/1755630486968?e=1758758400&v=beta&t=bLVX5wBdYxcGIm-D9QBn2nYj_StzQ5treijsFHcCmrY",
    email: "wleroux@axiompartners.ca"
  },
  {
    name: "Roisin Djukic",
    title: "Co-Founder & Partner",
    bio: "Roisin brings valuable professional experience as an Ex-Staff Accountant with deep expertise in financial operations and strategic analysis. As a passionate industry promotion advocate, she has worked to advance opportunities and recognition within the accounting and consulting fields. She is deeply committed to educational outreach, conducting workshops for children in the accounting and finance industry to inspire the next generation. Her collaborative leadership style and innovative problem-solving approach have consistently delivered transformative results for clients across diverse sectors.",
    expertise: [
      "Financial Operations & Analysis",
      "Staff Accounting & Compliance",
      "Industry Advocacy & Promotion",
      "Strategic Planning & Analysis",
      "Organizational Development",
      "Professional Development",
      "Educational Workshops & Youth Outreach"
    ],
    education: "University of Waterloo - Accounting & Financial Management",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQG76qWmrB_-fQ/profile-displayphoto-shrink_800_800/B4EZcNsIzwHQAg-/0/1748281364134?e=1758758400&v=beta&t=bLoAJPbPwHyJokawSR3Datr7S0G9-M_piT-DaoA736Y",
    email: "rdjukic@axiompartners.ca"
  }
];