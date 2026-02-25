// Central content file - edit everything here
// All data for services, portfolio, pricing, testimonials, etc.

export const personalInfo = {
  name: 'Reynold Mashininga',
  title: 'Web Developer & Graphic Designer',
  location: 'Zimbabwe',
  bio: 'Building fast, beautiful, and conversion-focused digital experiences for startups, SMEs, and entrepreneurs.',
  email: 'usurper3320799@gmail.com',
  whatsapp: '263775975479', // Without + or spaces
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/reynold-mashininga-16ab45318',
  behance: 'https://behance.net',
};

export const services = [
  {
    id: 'web-dev',
    category: 'Web Development',
    items: [
      {
        title: 'Business Websites',
        description: 'Professional, mobile-responsive websites that showcase your business and convert visitors into customers.',
        icon: '🌐',
      },
      {
        title: 'Portfolio Websites',
        description: 'Beautiful portfolio sites for designers, developers, freelancers, and creative professionals.',
        icon: '🎨',
      },
      {
        title: 'Landing Pages',
        description: 'High-converting landing pages designed to capture leads and drive sales.',
        icon: '🎯',
      },
      {
        title: 'Web Applications',
        description: 'Custom web apps built with React, Python/Django, or PHP to solve your business problems.',
        icon: '⚙️',
      },
      {
        title: 'Maintenance & Updates',
        description: 'Keep your site secure, fast, and up-to-date with ongoing support.',
        icon: '🔧',
      },
    ],
  },
  {
    id: 'graphic-design',
    category: 'Graphic Design',
    items: [
      {
        title: 'Logo & Brand Identity',
        description: 'Memorable logos and complete brand guidelines that make you stand out.',
        icon: '✨',
      },
      {
        title: 'Social Media Graphics',
        description: 'Eye-catching posts, stories, and banners tailored for your social platforms.',
        icon: '📱',
      },
      {
        title: 'Flyers & Posters',
        description: 'Print-ready designs that grab attention and communicate your message.',
        icon: '📄',
      },
      {
        title: 'Business Cards & Banners',
        description: 'Professional collateral that leaves a lasting impression.',
        icon: '🏷️',
      },
      {
        title: 'UI/UX Mockups',
        description: 'Beautiful Figma designs before development brings your ideas to life.',
        icon: '🖼️',
      },
    ],
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'Campus Security Management System',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    description: 'A comprehensive security management platform for educational institutions.',
    problem: 'Campus security teams needed a centralized way to manage incidents, staff schedules, and emergency protocols.',
    solution: 'Built a full-stack application with PHP backend, MySQL database, and intuitive admin dashboard.',
    result: 'Reduced incident response time by 40% and improved staff coordination.',
    tools: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    link: '#',
  },
  {
    id: 2,
    title: 'Budget & Expense Tracker',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8cf13?w=600&h=400&fit=crop',
    description: 'Personal finance management application for tracking income and expenses.',
    problem: 'Users struggled to categorize spending and understand their financial patterns.',
    solution: 'Developed a Django web app with real-time charts, automatic categorization, and export features.',
    result: 'Helped users reduce unnecessary spending by an average of 25%.',
    tools: ['Python', 'Django', 'React', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 3,
    title: 'Smart City Parking Solution',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    description: 'IoT-enabled parking management system for urban areas.',
    problem: 'Cities needed real-time parking availability and automated payment processing.',
    solution: 'Created an end-to-end solution integrating IoT sensors, backend APIs, and mobile-friendly web dashboard.',
    result: 'Increased parking turnover by 35% and improved city revenue.',
    tools: ['Python', 'Node.js', 'React', 'IoT', 'MongoDB'],
    link: '#',
  },
  {
    id: 4,
    title: 'Tech Startup Branding',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    description: 'Complete brand identity for an emerging tech startup.',
    problem: 'New startup needed cohesive visual identity to establish market presence.',
    solution: 'Designed logo, color palette, typography system, and brand guidelines.',
    result: 'Startup gained professional credibility and improved investor pitches.',
    tools: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    link: '#',
  },
  {
    id: 5,
    title: 'E-Commerce Platform UI',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    description: 'Complete UI design system for modern e-commerce platform.',
    problem: 'E-commerce platform needed modern, user-friendly interface for better conversions.',
    solution: 'Created comprehensive design system with components, flows, and mobile optimization.',
    result: 'Improved conversion rate by 28% and reduced cart abandonment by 15%.',
    tools: ['Figma', 'Adobe XD'],
    link: '#',
  },
  {
    id: 6,
    title: 'Social Media Campaign Graphics',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    description: 'Collection of social media graphics for digital marketing campaign.',
    problem: 'Brand needed consistent, eye-catching content across social platforms.',
    solution: 'Designed 50+ graphics optimized for different social media channels and formats.',
    result: 'Increased engagement by 156% and follower growth by 89%.',
    tools: ['Photoshop', 'Figma', 'Illustrator'],
    link: '#',
  },
];


export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    business: 'Fashion Boutique Owner',
    text: 'Reynold transformed our online presence. Our website is beautiful, fast, and actually brings in customers. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'James Mwangi',
    business: 'Tech Startup Founder',
    text: 'Working with Reynold was seamless. He understood our vision and delivered a polished product on time. Great communication throughout.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Grace Chigwende',
    business: 'Marketing Manager',
    text: 'The design quality and attention to detail were outstanding. Our team couldn\'t stop complimenting the user experience.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'David Ndlela',
    business: 'E-Commerce Business Owner',
    text: 'Reynold built our entire e-commerce platform from scratch. Professional, responsive, and it\'s generating sales immediately.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma'],
  backend: ['Python', 'Django', 'PHP', 'Node.js', 'MySQL', 'PostgreSQL'],
  tools: ['Git', 'GitHub', 'VS Code', 'Photoshop', 'Illustrator', 'Adobe XD'],
};

export const stats = [
  { label: 'Projects Completed', value: '25+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Success Rate', value: '98%' },
];

export const trustMarkers = [
  'Fast Delivery',
  'Mobile-First Design',
  'Clean Code',
  'SEO Optimized',
  'Responsive Design',
  'Modern Stack',
];

export const ctaMessages = {
  primary: 'Ready to grow your business?',
  secondary: 'Let\'s create something amazing together.',
  button: 'Get Started Today',
};
