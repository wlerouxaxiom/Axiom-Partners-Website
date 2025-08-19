export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  keyBenefits: string[];
  methodologies: string[];
  deliverables: string[];
  caseStudyHighlight?: string;
}

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Strategy & Corporate Finance',
    description: 'Comprehensive strategic frameworks and financial analysis that drive sustainable competitive advantage.',
    longDescription: 'Our strategy and corporate finance services help organizations define clear direction, optimize financial performance, and build sustainable competitive advantages. We combine rigorous market research with innovative financial analysis to develop actionable strategies that deliver measurable results.',
    keyBenefits: [
      'Clear strategic direction and roadmap',
      'Enhanced financial performance',
      'Improved market positioning',
      'Data-driven decision making',
      'Aligned organizational objectives'
    ],
    methodologies: [
      'Market Research & Analysis',
      'Financial Modeling & Valuation',
      'Strategic Planning Frameworks',
      'Competitive Intelligence',
      'Risk Assessment & Mitigation'
    ],
    deliverables: [
      'Strategic Plan Document',
      'Financial Analysis Report',
      'Market Analysis Report',
      'Investment Recommendations',
      'Implementation Roadmap',
      'Performance Metrics Framework'
    ],
    caseStudyHighlight: 'Helped a mid-size manufacturer increase market share by 35% and improve EBITDA by 28% through strategic repositioning and financial optimization'
  },
  {
    id: 'operations',
    title: 'Operations',
    description: 'Process optimization and operational transformation for enhanced efficiency.',
    longDescription: 'Our operations excellence practice focuses on optimizing business processes, improving quality, and driving operational efficiency. We use proven methodologies to eliminate waste, reduce costs, and enhance customer satisfaction.',
    keyBenefits: [
      'Increased operational efficiency',
      'Enhanced workflow optimization',
      'Reduced operational costs',
      'Streamlined processes',
      'Improved quality metrics'
    ],
    methodologies: [
      'Process Optimization',
      'Workflow Analysis',
      'Efficiency Improvement Programs',
      'Performance Analytics'
    ],
    deliverables: [
      'Process Optimization Reports',
      'Workflow Analysis Documentation',
      'Efficiency Improvement Plans',
      'Implementation Roadmaps'
    ],
    caseStudyHighlight: 'Achieved 40% reduction in processing time and 25% cost savings for a logistics company through comprehensive workflow analysis'
  },
  {
    id: 'implementation',
    title: 'Implementation & Build',
    description: 'Custom systems and technology solutions that transform strategic initiatives into operational reality.',
    longDescription: 'Our implementation and build services transform strategic plans into operational reality through custom systems development and technology solutions. We provide end-to-end project management, custom application development, and seamless integration to guarantee sustainable results.',
    keyBenefits: [
      'Custom system development',
      'Seamless technology integration',
      'Tailored application solutions',
      'Scalable technology platforms'
    ],
    methodologies: [
      'Custom Systems Development',
      'Application Design & Build',
      'Technology Integration',
      'Solution Architecture'
    ],
    deliverables: [
      'Custom Applications',
      'System Integration Solutions',
      'Technology Platforms',
      'Implementation Documentation'
    ],
    caseStudyHighlight: 'Built custom inventory management system for manufacturing client, improving efficiency by 50% and reducing errors by 60%'
  }
];