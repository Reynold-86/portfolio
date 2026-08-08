// Central content file - edit everything here
// All data for the site: personal info, skills, experience, projects, etc.

export const personalInfo = {
  name: 'Reynold Mashininga',
  title: 'IT Support • Web Development • Design • Sales & Marketing',
  location: 'Zimbabwe',
  bio: 'IT-minded professional with a background in Information Technology, comfortable across technical support, web development, graphic design, and sales & marketing — looking for an opportunity to bring that range to a team.',
  tagline: "I'm currently open to new opportunities in IT support, development, design, or sales & marketing — full-time, internship, or contract.",
  email: 'usurper3320799@gmail.com',
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

// TODO: Replace with your real education history.
export const education = [
  {
    degree: 'Add your degree / qualification',
    institution: 'Add your school or university',
    period: 'Add year(s)',
    description: 'Add relevant coursework, focus area, or achievements.',
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
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8cf13?w=600&h=400&fit=crop',
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
    title: 'Tech Startup Branding',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    description: 'A brand identity concept for an emerging tech startup.',
    problem: 'New startups need a cohesive visual identity to establish market presence.',
    solution: 'Designed a logo, color palette, typography system, and brand guideline document.',
    tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    link: '#',
    github: '',
  },
  {
    id: 5,
    title: 'E-Commerce Platform UI',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    description: 'A UI design system for a modern e-commerce platform.',
    problem: 'E-commerce platforms need a modern, user-friendly interface to guide users through browsing and checkout.',
    solution: 'Created a component-based design system covering key flows and mobile layouts.',
    tools: ['Figma', 'Adobe XD'],
    link: '#',
    github: '',
  },
  {
    id: 6,
    title: 'Social Media Campaign Graphics',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    description: 'A set of social media graphics designed for a digital marketing campaign.',
    problem: 'Brands need consistent, eye-catching content across social platforms.',
    solution: 'Designed a set of graphics optimized for different social media channels and formats.',
    tools: ['Photoshop', 'Figma', 'Illustrator'],
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
