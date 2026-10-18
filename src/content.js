// Central content file - edit everything here
// All data for the site: personal info, skills, experience, projects, etc.

export const personalInfo = {
  name: 'Reynold Mashininga',
  title: 'IT Support • Web Development • Design • Sales & Marketing',
  location: 'Zimbabwe',
  bio: 'IT-minded professional with a background in Information Technology, comfortable across technical support, web development, graphic design, and sales & marketing — looking for an opportunity to bring that range to a team.',
  tagline: "I'm currently open to new opportunities in IT support, development, design, or sales & marketing — full-time, internship, or contract.",
  email: 'reynoldtmashininga@gmail.com',
  phone: '+263775975479',
  whatsapp: '263775975479', // Without + or spaces
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/reynold-mashininga-16ab45318',
  behance: 'https://behance.net',
  resumeUrl: '', // TODO: add a link to your resume PDF (e.g. '/resume.pdf') once you have one
};

// The roles/fields you're open to — shown as badges on the homepage
export const targetRoles = ['IT Support', 'Web Development', 'Graphic Design', 'Sales & Marketing'];

// TODO: Replace with your real work history. Keep entries empty/omit if you have none yet —
// it's better to show fewer, real items than invented ones.
export const experience = [
  // Example shape — edit or remove:
  // {
  //   role: 'Your Job Title',
  //   company: 'Company Name',
  //   period: 'Jan 2023 – Present',
  //   description: 'What you did and what you learned or delivered.',
  // },
];

export const education = [
  {
    degree: 'BSc in Information Systems',
    institution: 'Bachelor of Science',
    period: 'Degree',
    description: 'Information Systems',
  },
  {
    degree: 'Google Cybersecurity Certificate',
    institution: 'Google',
    period: 'Certification',
    description: 'Cybersecurity',
  },
  {
    degree: 'Google IT Support Certificate',
    institution: 'Google',
    period: 'Certification',
    description: 'IT Support',
  },
];

export const skillCategories = [
  {
    category: 'Web Development',
    icon: '🌐',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Python', 'Django', 'PHP', 'Node.js', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Graphic Design',
    icon: '🎨',
    items: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Brand Identity', 'UI/UX Mockups'],
  },
  {
    category: 'IT Support',
    icon: '🖥️',
    items: ['Hardware & Software Troubleshooting', 'Windows & Linux Administration', 'Networking (TCP/IP, DNS, DHCP)', 'Active Directory', 'Help Desk / Ticketing Systems', 'Technical Documentation'],
  },
  {
    category: 'Sales & Marketing',
    icon: '📈',
    items: ['Customer Relationship Management', 'Digital & Social Media Marketing', 'Lead Generation', 'Sales Presentations', 'Market Research', 'Content Creation'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'VS Code', 'Microsoft Office / Google Workspace', 'CRM Software'],
  },
];

export const strengths = [
  'Fast Learner',
  'Problem Solver',
  'Customer-Focused',
  'Clear Communicator',
  'Team Player',
  'Detail-Oriented',
  'Self-Motivated',
];

export const projects = [
  {
    id: 1,
    title: 'Campus Security Management System',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'A security management platform for educational institutions to track incidents, staff schedules, and emergency protocols.',
    problem: 'Campus security teams needed a centralized way to manage incidents, staff schedules, and emergency protocols.',
    solution: 'Built a full-stack application with a PHP backend, MySQL database, and an admin dashboard for logging incidents and coordinating staff.',
    tools: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Budget & Expense Tracker',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    description: 'A personal finance app for tracking income and expenses.',
    problem: 'Users struggled to categorize spending and understand their financial patterns.',
    solution: 'Built a Django web app with real-time charts, category tagging, and CSV export.',
    tools: ['Python', 'Django', 'React', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Smart City Parking Solution',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    description: 'A concept IoT-enabled parking management system for urban areas.',
    problem: 'Cities need real-time parking availability data and automated payment processing.',
    solution: 'Designed an end-to-end solution integrating IoT sensors, backend APIs, and a mobile-friendly web dashboard.',
    tools: ['Python', 'Node.js', 'React', 'IoT', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Strawberry Lemonade Flyer',
    category: 'Graphic Design',
    image: '/design-portfolio/strawberry-lemonade-flyer.jpg',
    description: 'A vibrant promotional flyer for a strawberry lemonade special.',
    problem: 'A drink promotion needs bold flavor cues, a clear offer, and an eye-catching layout.',
    solution: 'Combined vivid fruit imagery, strong typography, and contrasting panels to make the offer easy to scan.',
    tools: ['Graphic Design', 'Promotional Flyer', 'Typography'],
    link: '#',
    github: '',
  },
  {
    id: 5,
    title: 'WordPress Web Design Promotion',
    category: 'Graphic Design',
    image: '/design-portfolio/web-design-promotion.jpg',
    description: 'A personal promotional graphic presenting web design and WordPress services.',
    problem: 'A creative service needs to communicate its offer and invite prospective clients to get in touch.',
    solution: 'Created a portrait-led layout with a concise service list, strong headline, and clear contact prompt.',
    tools: ['Graphic Design', 'Web Design', 'Social Promotion'],
    link: '#',
    github: '',
  },
  {
    id: 6,
    title: 'Food Catering Promotion',
    category: 'Graphic Design',
    image: '/design-portfolio/food-catering-promotion.jpg',
    description: 'A bright food-service flyer promoting catering and event options.',
    problem: 'Customers need a quick view of food services and the types of events available.',
    solution: 'Used an energetic color split, prominent food imagery, and a direct booking call to action.',
    tools: ['Graphic Design', 'Food Promotion', 'Flyer Design'],
    link: '#',
    github: '',
  },
  {
    id: 7,
    title: 'Fast Food Restaurant Flyer',
    category: 'Graphic Design',
    image: '/design-portfolio/fast-food-flyer.jpg',
    description: 'A restaurant flyer concept featuring menu photography and a limited-time offer.',
    problem: 'A restaurant promotion needs appetizing visuals and an easy-to-find order prompt.',
    solution: 'Organized food imagery, offer details, and ordering information into a high-contrast flyer layout.',
    tools: ['Graphic Design', 'Restaurant Promotion', 'Flyer Design'],
    link: '#',
    github: '',
  },
  {
    id: 8,
    title: 'Club Secret Event Flyer',
    category: 'Graphic Design',
    image: '/design-portfolio/club-event-flyer.jpg',
    description: 'A dramatic nightlife event flyer built around bold type and a moody portrait.',
    problem: 'An event poster must establish atmosphere while making the event details easy to scan.',
    solution: 'Used a dark palette, vivid red accents, oversized lettering, and a strong central portrait.',
    tools: ['Graphic Design', 'Event Promotion', 'Poster Design'],
    link: '#',
    github: '',
  },
];

export const values = [
  { icon: '🎯', title: 'Results Matter', desc: 'I care about whether what I build actually solves the problem.' },
  { icon: '🤝', title: 'Collaboration', desc: "I enjoy working with a team — sharing ideas and learning from others." },
  { icon: '⚡', title: 'Quality', desc: "I don't compromise on code quality, design, or user experience." },
  { icon: '🚀', title: 'Growth Mindset', desc: 'Always learning new tools, languages, and best practices.' },
  { icon: '💬', title: 'Communication', desc: 'Clear updates and honest communication throughout a project.' },
  { icon: '🌱', title: 'Ownership', desc: 'I take responsibility for my work from idea through to delivery.' },
];
