import type { Project, Experience, Skill, Blog, Message } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with a modern UI, payment gateway integration, and an admin panel for product management.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'website dashboard',
  },
  {
    id: '2',
    title: 'Social Media App',
    description: 'A mobile-first social media application focusing on real-time updates and user interactions, featuring a clean and intuitive interface.',
    techStack: ['React Native', 'Firebase', 'Redux'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'mobile app',
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'A dashboard for visualizing complex datasets using various interactive charts and graphs, built for performance and scalability.',
    techStack: ['D3.js', 'React', 'TypeScript'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'data visualization',
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    description: 'Leading the development of user-facing features for our flagship product. Mentoring junior developers and improving our codebase with modern practices.',
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Innovate Co.',
    duration: 'Jun 2018 - Dec 2020',
    description: 'Developed and maintained web applications using React and Vue.js. Collaborated with designers and backend developers to create seamless user experiences.',
  },
];

export const skills: Skill[] = [
  { id: '1', name: 'React', category: 'Frontend', proficiency: 95 },
  { id: '2', name: 'Next.js', category: 'Frontend', proficiency: 90 },
  { id: '3', name: 'TypeScript', category: 'Languages', proficiency: 90 },
  { id: '4', name: 'JavaScript', category: 'Languages', proficiency: 98 },
  { id: '5', name: 'Tailwind CSS', category: 'Styling', proficiency: 95 },
  { id: '6', name: 'Node.js', category: 'Backend', proficiency: 80 },
  { id: '7', name: 'MongoDB', category: 'Database', proficiency: 75 },
  { id: '8', name: 'Web3.js', category: 'Web3', proficiency: 70 },
];

export const blogPosts: Blog[] = [
  {
    id: '1',
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks',
    content: 'A deep dive into React Hooks, covering useState, useEffect, useContext, and custom hooks for building powerful and reusable components.',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    imageHint: 'react components',
    publishedAt: new Date('2023-10-26'),
  },
  {
    id: '2',
    slug: 'styling-with-tailwind-css',
    title: 'Modern Styling with Tailwind CSS',
    content: 'Learn how to rapidly build modern websites without ever leaving your HTML, using the utility-first framework Tailwind CSS.',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    imageHint: 'tailwind css',
    publishedAt: new Date('2023-11-15'),
  },
];

export const messages: Message[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'Great portfolio! I would love to connect and discuss a potential project.',
        walletAddress: '0x123...abc',
        signature: '0x...',
        receivedAt: new Date('2024-01-15T10:30:00Z'),
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        message: 'Hi, I found your blog post on React Hooks very insightful. Keep up the great work!',
        walletAddress: '0x456...def',
        signature: '0x...',
        receivedAt: new Date('2024-01-16T14:00:00Z'),
    }
];

export const resume = {
  url: '/resume.pdf'
};
