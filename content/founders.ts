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
    bio: "Wyatt Leroux is Co-Founder of Axiom Partners, specializing in integrated consulting solutions for small and medium enterprises. He brings professional experience from KPMG LLP, where he served as Staff Accountant in US Corporate Tax, and operational management experience from PPL Aquatic Group. Leroux is pursuing his Bachelor's degree in Accounting and Financial Management at the University of Waterloo, where he received the President's Scholarship.",
    expertise: [
      "Process Automation",
      "Financial Analysis",
      "Strategic Leadership",
      "Multi-State Tax Analysis",
      "Operational Optimization",
      "Policy Development"
    ],
    education: "University of Waterloo - Accounting & Financial Management",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFbapeZ6BO77g/profile-displayphoto-scale_400_400/B56ZjtJU2GHUAg-/0/1756325304218?e=1759363200&v=beta&t=qdH36LZqisdSXxswvJEKn-4gu-uZLV8fVOe8uwLXJOo",
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