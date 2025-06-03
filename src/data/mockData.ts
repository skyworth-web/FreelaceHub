import { User, Job, Category, Review } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'client',
    joinDate: '2023-05-15',
    location: 'New York, USA'
  },
  {
    id: '2',
    name: 'Sara Miller',
    email: 'sara@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'freelancer',
    joinDate: '2023-02-10',
    bio: 'Full-stack developer with 5 years of experience in React, Node.js, and MongoDB.',
    hourlyRate: 45,
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    location: 'Berlin, Germany',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael@example.com',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'freelancer',
    joinDate: '2022-11-22',
    bio: 'UI/UX designer specializing in mobile interfaces and brand identity.',
    hourlyRate: 50,
    skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD'],
    location: 'Toronto, Canada',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Emily Wilson',
    email: 'emily@example.com',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'client',
    joinDate: '2023-01-05',
    location: 'London, UK'
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'david@example.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'freelancer',
    joinDate: '2022-08-18',
    bio: 'Content writer and SEO specialist with expertise in technology, finance, and healthcare.',
    hourlyRate: 35,
    skills: ['Content Writing', 'SEO', 'Copywriting', 'Research'],
    location: 'Singapore',
    rating: 4.7
  },
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'E-commerce Website Development',
    description: 'Looking for an experienced developer to build a fully functional e-commerce website with payment integration, inventory management, and admin dashboard.',
    budget: {
      min: 3000,
      max: 5000,
      type: 'fixed'
    },
    category: 'Web Development',
    skills: ['React', 'Node.js', 'MongoDB', 'Payment API'],
    postedBy: '1',
    postedDate: '2023-06-01',
    deadline: '2023-07-15',
    status: 'open',
    applicants: 12
  },
  {
    id: '2',
    title: 'Mobile App UI/UX Design',
    description: 'Need a creative UI/UX designer for a fitness tracking app. The design should be modern, user-friendly, and aligned with current design trends.',
    budget: {
      min: 40,
      max: 60,
      type: 'hourly'
    },
    category: 'Design',
    skills: ['UI Design', 'UX Design', 'Figma', 'Mobile Design'],
    postedBy: '4',
    postedDate: '2023-05-28',
    deadline: '2023-06-30',
    status: 'open',
    applicants: 8
  },
  {
    id: '3',
    title: 'Content Writing for Tech Blog',
    description: 'Seeking a knowledgeable content writer to create 10 articles about artificial intelligence, machine learning, and data science for our technology blog.',
    budget: {
      min: 1500,
      max: 2000,
      type: 'fixed'
    },
    category: 'Writing',
    skills: ['Content Writing', 'SEO', 'Tech Knowledge'],
    postedBy: '1',
    postedDate: '2023-05-20',
    deadline: '2023-06-20',
    status: 'in-progress',
    applicants: 15
  },
  {
    id: '4',
    title: 'WordPress Website Maintenance',
    description: 'Looking for ongoing maintenance and updates for an existing WordPress website. Tasks include plugin updates, security patches, and occasional content updates.',
    budget: {
      min: 25,
      max: 35,
      type: 'hourly'
    },
    category: 'Web Development',
    skills: ['WordPress', 'PHP', 'HTML', 'CSS'],
    postedBy: '4',
    postedDate: '2023-05-15',
    status: 'open',
    applicants: 6
  },
  {
    id: '5',
    title: 'Logo Design for Startup',
    description: 'Need a professional logo for a fintech startup. The logo should convey trust, innovation, and security. Looking for multiple concepts to choose from.',
    budget: {
      min: 500,
      max: 800,
      type: 'fixed'
    },
    category: 'Design',
    skills: ['Logo Design', 'Brand Identity', 'Adobe Illustrator'],
    postedBy: '1',
    postedDate: '2023-05-10',
    deadline: '2023-06-10',
    status: 'completed',
    applicants: 20
  },
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Web Development',
    icon: 'code-2'
  },
  {
    id: '2',
    name: 'Mobile Development',
    icon: 'smartphone'
  },
  {
    id: '3',
    name: 'Design',
    icon: 'palette'
  },
  {
    id: '4',
    name: 'Writing',
    icon: 'pen-tool'
  },
  {
    id: '5',
    name: 'Marketing',
    icon: 'megaphone'
  },
  {
    id: '6',
    name: 'Data Science',
    icon: 'bar-chart-2'
  },
  {
    id: '7',
    name: 'Admin Support',
    icon: 'clipboard'
  },
  {
    id: '8',
    name: 'Customer Service',
    icon: 'headphones'
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: '1',
    targetId: '2',
    rating: 5,
    comment: 'Sara did an excellent job on our project. Her attention to detail and communication skills are outstanding. Will definitely work with her again!',
    date: '2023-04-15'
  },
  {
    id: '2',
    userId: '4',
    targetId: '3',
    rating: 4,
    comment: 'Michael delivered a beautiful design that perfectly captured our brand. Only reason for 4 stars is the slight delay in delivery.',
    date: '2023-04-02'
  },
  {
    id: '3',
    userId: '1',
    targetId: '5',
    rating: 5,
    comment: 'David is a fantastic writer. His content is engaging, well-researched, and has significantly improved our SEO performance.',
    date: '2023-03-20'
  },
];