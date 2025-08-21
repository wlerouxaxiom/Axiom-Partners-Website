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
    bio: "Wyatt Leroux is Co-Founder of Axiom Partners, a strategic consulting firm specializing in integrated consulting solutions for small and medium enterprises. The firm delivers full-cycle services spanning strategy development, operational optimization, and implementation across manufacturing, non-profit, education, and logistics sectors. Leroux oversees the firm's automation-first consulting methodology and client engagement strategy. He brings professional experience from KPMG LLP, where he served as Staff Accountant in US Corporate Tax, developing process automation solutions and conducting multi-state tax analysis for large corporate clients. Prior to founding Axiom Partners, he held operational management roles at PPL Aquatic Group, focusing on process optimization and cost reduction initiatives across multiple locations. His early leadership experience includes serving as a Founding Advisory Board Member of the Halton Regional Police, where he contributed to policy development and community engagement initiatives. Leroux is pursuing his Bachelor's degree in Accounting and Financial Management at the University of Waterloo, where he received the President's Scholarship. He has competed in multiple business case competitions and holds experience in financial modeling, data analysis, and process automation across diverse industries.",
    expertise: [
      "Process Automation",
      "Financial Analysis",
      "Strategic Leadership",
      "Multi-State Tax Analysis",
      "Operational Optimization",
      "Policy Development"
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