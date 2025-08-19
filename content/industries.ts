export interface Industry {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  caseStudies: {
    title: string;
    description: string;
    results: string[];
  }[];
}

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Optimizing production processes, supply chain efficiency, and quality management systems.',
    longDescription: 'Our manufacturing expertise spans lean production, quality systems, and supply chain optimization. We help manufacturers achieve operational excellence through process improvement, technology integration, and workforce development.',
    challenges: [
      'Complex supply chain management',
      'Quality control and assurance',
      'Production efficiency optimization',
      'Cost management pressures',
      'Technology integration challenges'
    ],
    solutions: [
      'Lean manufacturing implementation',
      'Supply chain optimization',
      'Quality management systems',
      'Process automation strategies',
      'Workforce training programs'
    ],
    outcomes: [
      'Reduced production costs by 20-30%',
      'Improved quality metrics by 40%',
      'Increased throughput by 25%',
      'Enhanced supply chain visibility',
      'Improved employee productivity'
    ],
    caseStudies: [
      {
        title: 'Automotive Parts Manufacturer',
        description: 'Implemented lean manufacturing principles and quality systems',
        results: ['25% cost reduction', '40% defect reduction', '30% productivity increase']
      }
    ]
  },
  {
    id: 'non-profit',
    title: 'Non-Profit',
    description: 'Enhancing operational efficiency, program effectiveness, and sustainable funding models.',
    longDescription: 'We specialize in helping non-profit organizations maximize their impact through strategic planning, operational efficiency, and sustainable funding strategies. Our approach balances mission focus with business discipline.',
    challenges: [
      'Limited funding and resources',
      'Program effectiveness measurement',
      'Volunteer management',
      'Stakeholder engagement',
      'Operational efficiency'
    ],
    solutions: [
      'Strategic planning frameworks',
      'Program evaluation systems',
      'Fundraising optimization',
      'Volunteer engagement strategies',
      'Operational streamlining'
    ],
    outcomes: [
      'Increased program impact by 50%',
      'Improved funding efficiency',
      'Enhanced volunteer retention',
      'Better stakeholder engagement',
      'Reduced operational costs'
    ],
    caseStudies: [
      {
        title: 'Regional Food Bank',
        description: 'Optimized distribution network and volunteer programs',
        results: ['50% increase in families served', '30% cost reduction', '60% volunteer retention improvement']
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Improving educational outcomes through strategic planning and resource optimization.',
    longDescription: 'Our education practice focuses on improving student outcomes, optimizing resource allocation, and enhancing institutional effectiveness. We work with schools, universities, and educational organizations.',
    challenges: [
      'Student engagement and retention',
      'Resource allocation optimization',
      'Technology integration',
      'Performance measurement',
      'Curriculum effectiveness'
    ],
    solutions: [
      'Student success strategies',
      'Resource optimization plans',
      'Technology roadmaps',
      'Assessment frameworks',
      'Curriculum development support'
    ],
    outcomes: [
      'Improved student retention rates',
      'Enhanced learning outcomes',
      'Better resource utilization',
      'Increased operational efficiency',
      'Stronger community engagement'
    ],
    caseStudies: [
      {
        title: 'Community College System',
        description: 'Developed student success and retention programs',
        results: ['20% retention increase', '15% graduation rate improvement', '25% cost per student reduction']
      }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics & 3PL',
    description: 'Streamlining logistics operations, warehouse management, and distribution networks.',
    longDescription: 'Our logistics expertise covers the full spectrum of supply chain and distribution challenges. We help 3PL providers and logistics companies optimize their operations, improve customer service, and drive profitable growth.',
    challenges: [
      'Complex distribution networks',
      'Inventory management optimization',
      'Customer service excellence',
      'Technology integration',
      'Cost management'
    ],
    solutions: [
      'Distribution network optimization',
      'Warehouse management systems',
      'Inventory optimization models',
      'Customer service frameworks',
      'Technology integration strategies'
    ],
    outcomes: [
      'Reduced distribution costs by 25%',
      'Improved delivery times by 35%',
      'Enhanced inventory turnover',
      'Better customer satisfaction',
      'Increased operational capacity'
    ],
    caseStudies: [
      {
        title: 'Regional 3PL Provider',
        description: 'Optimized warehouse operations and distribution network',
        results: ['30% efficiency improvement', '25% cost reduction', '40% faster order processing']
      }
    ]
  }
];