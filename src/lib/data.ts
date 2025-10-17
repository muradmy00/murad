
import type { Project, Experience, Skill, Blog, Message } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const getPlaceholder = (id: string) => {
    return PlaceHolderImages.find((p) => p.id === id) || { imageUrl: 'https://placehold.co/600x400', imageHint: 'placeholder' };
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform with a modern, responsive design, product management, and a streamlined checkout process.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        imageUrl: getPlaceholder('project-1').imageUrl,
        imageHint: getPlaceholder('project-1').imageHint,
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        id: '2',
        title: 'Social Networking App',
        description: 'A mobile-first social media application for connecting with friends, sharing updates, and discovering new content.',
        techStack: ['React Native', 'Firebase', 'Redux'],
        imageUrl: getPlaceholder('project-2').imageUrl,
        imageHint: getPlaceholder('project-2').imageHint,
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        id: '3',
        title: 'Data Visualization Dashboard',
        description: 'An analytics dashboard for visualizing complex datasets with interactive charts and graphs, helping businesses make data-driven decisions.',
        techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        imageUrl: getPlaceholder('project-3').imageUrl,
        imageHint: getPlaceholder('project-3').imageHint,
        liveUrl: '#',
        repoUrl: '#',
    },
];

export const experience: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2020 - Present',
    description: 'Led the development of a new client-facing dashboard using React and TypeScript. Improved application performance by 30% and mentored junior developers.',
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Creative Agency LLC',
    duration: 'Jun 2017 - Dec 2019',
    description: 'Developed and maintained websites for various clients using WordPress, and later transitioned to modern JavaScript frameworks like Vue.js.',
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'Web Starters Co.',
    duration: 'May 2016 - May 2017',
    description: 'Assisted in building and testing responsive websites using HTML, CSS, and jQuery. Gained foundational skills in version control with Git.',
  },
];

export const skills: Skill[] = [
  { id: '1', name: 'React', category: 'Frontend', proficiency: 95 },
  { id: '2', name: 'Next.js', category: 'Frontend', proficiency: 90 },
  { id: '3', name: 'TypeScript', category: 'Languages', proficiency: 90 },
  { id: '4', name: 'JavaScript', category: 'Languages', proficiency: 98 },
  { id: '5', name: 'Tailwind CSS', category: 'Styling', proficiency: 92 },
  { id: '6', name: 'Node.js', category: 'Backend', proficiency: 80 },
  { id: '7', name: 'Solidity', category: 'Web3', proficiency: 75 },
  { id: '8', name: 'PostgreSQL', category: 'Database', proficiency: 70 },
  { id: '9', name: 'Git & GitHub', category: 'Tools', proficiency: 95 },
  { id: '10', name: 'Figma', category: 'Tools', proficiency: 85 },
];

export const blogPosts: Blog[] = [
  {
    id: '1',
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks',
    content: 'A deep dive into React Hooks, exploring useState, useEffect, and custom hooks to build more efficient and readable components.',
    imageUrl: getPlaceholder('blog-1').imageUrl,
    imageHint: getPlaceholder('blog-1').imageHint,
    publishedAt: new Date('2023-10-15'),
  },
  {
    id: '2',
    slug: 'styling-with-tailwind-css',
    title: 'Modern Styling with Tailwind CSS',
    content: 'Discover how utility-first CSS with Tailwind can revolutionize your development workflow and help you build beautiful designs faster.',
    imageUrl: getPlaceholder('blog-2').imageUrl,
    imageHint: getPlaceholder('blog-2').imageHint,
    publishedAt: new Date('2023-09-22'),
  },
  {
    id: '3',
    slug: 'introduction-to-web3',
    title: 'An Introduction to the World of Web3',
    content: 'Explore the fundamental concepts of Web3, including blockchain, smart contracts, and decentralized applications (dApps).',
    imageUrl: getPlaceholder('blog-3').imageUrl,
    imageHint: getPlaceholder('blog-3').imageHint,
    publishedAt: new Date('2023-08-30'),
  },
];

export const messages: Message[] = [];

export const resume = {
  url: '/resume.pdf'
};
