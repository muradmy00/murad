
import type { Project, Experience, Skill, Blog, Message, Education, Achievement } from './types';
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
    role: 'Junior Software Engineer',
    company: 'StepUp',
    duration: 'Jul 2025 - Present',
    description: 'Transitioned to a full-time role, focusing on building and maintaining web applications using React.js and JavaScript. I am very happy that my job has become permanent.',
  },
  {
    id: '2',
    role: 'Junior Software Engineer (Frontend)',
    company: 'StepUp',
    duration: 'Jan 2025 - Jul 2025',
    description: 'Started my journey as an intern, where I gained hands-on experience with frontend technologies, including JavaScript and REST APIs, contributing to various projects.',
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Bangladesh University of Business and Technology, Dhaka, Bangladesh',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    duration: '2022 - 2026',
    description: 'Varsity life refers to the experiences and lifestyle of college or university students. It encompasses a wide range of activities, challenges, and opportunities that students encounter during their time in higher education.',
  },
  {
    id: '2',
    institution: 'Karatoa Multimedia School And College, Bogura',
    degree: 'Higher Secondary School Certificate',
    duration: '2018 - 2019',
    description: 'College life is a transformative phase in a person\'s academic journey, marked by a unique blend of learning, personal growth, and social experiences. It typically involves pursuing higher education in a specialized field, living away from home, and engaging in a variety of activities.',
  },
];

export const skills: Skill[] = [
    { id: '1', name: 'HTML', category: 'Frontend', proficiency: 95 },
    { id: '2', name: 'CSS', category: 'Frontend', proficiency: 92 },
    { id: '3', name: 'Tailwind CSS', category: 'Styling', proficiency: 92 },
    { id: '4', name: 'JavaScript', category: 'Languages', proficiency: 98 },
    { id: '5', name: 'Redux', category: 'Frontend', proficiency: 88 },
    { id: '6', name: 'TypeScript', category: 'Languages', proficiency: 90 },
    { id: '7', name: 'React.js', category: 'Frontend', proficiency: 95 },
    { id: '8', name: 'React Native', category: 'Frontend', proficiency: 85 },
    { id: '9', name: 'React Router DOM', category: 'Frontend', proficiency: 90 },
    { id: '10', name: 'React Hook Form', category: 'Frontend', proficiency: 85 },
    { id: '13', name: 'Git', category: 'Tools', proficiency: 95 },
    { id: '14', 'name': 'GitHub', category: 'Tools', proficiency: 95 },
    { id: '15', name: 'NPM', category: 'Tools', proficiency: 90 },
    { id: '16', name: 'Vite', category: 'Tools', proficiency: 85 },
    { id: '17', name: 'Axios', category: 'Tools', proficiency: 88 },
    { id: '18', name: 'Expo', category: 'Tools', proficiency: 85 },
    { id: '19', name: 'Yarn', category: 'Tools', proficiency: 90 },
    { id: '20', name: 'C', category: 'Languages', proficiency: 80 },
    { id: '21', name: 'C++', category: 'Languages', proficiency: 80 },
    { id: '22', name: 'Python', category: 'Languages', proficiency: 70 },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Published Two NPM Packages',
    description: 'Successfully built and published two npm packages using React and TypeScript: currency-converter-lite and copy-text-to-clipboard-lite.',
    imageUrl: getPlaceholder('achievement-npm').imageUrl,
    imageHint: getPlaceholder('achievement-npm').imageHint,
  },
  {
    id: '2',
    title: 'Software Development Competition 2024',
    description: 'Participated in the Software Development Competition organized by BUBT, showcasing problem-solving and development skills.',
    imageUrl: getPlaceholder('achievement-bubt-soft').imageUrl,
    imageHint: getPlaceholder('achievement-bubt-soft').imageHint,
  },
  {
    id: '3',
    title: 'Inter University Programming Contest 2024',
    description: 'Competed in the Inter University Programming Contest organized by BUBT, honing algorithmic and competitive programming abilities.',
    imageUrl: getPlaceholder('achievement-bubt-iupc').imageUrl,
    imageHint: getPlaceholder('achievement-bubt-iupc').imageHint,
  },
  {
    id: '4',
    title: 'Web Development Bootcamp Graduate',
    description: 'Completed an intensive Web Development Bootcamp by Programming Hero, mastering modern web technologies and best practices.',
    imageUrl: getPlaceholder('achievement-ph').imageUrl,
    imageHint: getPlaceholder('achievement-ph').imageHint,
  },
  {
    id: '5',
    title: 'Programming Camp 2023 Participant',
    description: 'Attended the Programming Camp 2023, organized by BUBT IT Club, to enhance programming skills and collaborate with peers.',
    imageUrl: getPlaceholder('achievement-camp').imageUrl,
    imageHint: getPlaceholder('achievement-camp').imageHint,
  },
  {
    id: '6',
    title: 'ICPC 2021 Contestant',
    description: 'Participated in the prestigious International Collegiate Programming Contest (ICPC) in 2021, representing BUBT.',
    imageUrl: getPlaceholder('achievement-icpc').imageUrl,
    imageHint: getPlaceholder('achievement-icpc').imageHint,
  },
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
    author: 'Mohiuddin Murad',
    tags: ['React', 'Frontend', 'WebDevelopment'],
  },
  {
    id: '2',
    slug: 'styling-with-tailwind-css',
    title: 'Modern Styling with Tailwind CSS',
    content: 'Discover how utility-first CSS with Tailwind can revolutionize your development workflow and help you build beautiful designs faster.',
    imageUrl: getPlaceholder('blog-2').imageUrl,
    imageHint: getPlaceholder('blog-2').imageHint,
    publishedAt: new Date('2023-09-22'),
    author: 'Mohiuddin Murad',
    tags: ['TailwindCSS', 'CSS', 'Frontend'],
  },
  {
    id: '3',
    slug: 'introduction-to-web3',
    title: 'An Introduction to the World of Web3',
    content: 'Explore the fundamental concepts of Web3, including blockchain, smart contracts, and decentralized applications (dApps).',
    imageUrl: getPlaceholder('blog-3').imageUrl,
    imageHint: getPlaceholder('blog-3').imageHint,
    publishedAt: new Date('2023-08-30'),
    author: 'Mohiuddin Murad',
    tags: ['Web3', 'Blockchain', 'Nextjs'],
  },
  {
    id: '4',
    slug: 'how-react-dom-works',
    title: 'React DOM এলিমেন্ট যেভাবে কাজ করে',
    content: `<p>React DOM ব্রাউজারের আসল DOM (Document Object Model) এবং React কম্পোনেন্টগুলোর মধ্যে একটি সেতুর মতো কাজ করে। React-এ আমরা যা কিছু লিখি, তা সরাসরি ব্রাউজারে রেন্ডার হয় না।</p>
    <p>React প্রথমে একটি ভার্চুয়াল DOM (Virtual DOM) তৈরি করে, যা আসল DOM-এর একটি হালকা অনুলিপি। যখন কোনো ডেটা পরিবর্তন হয়, React ভার্চুয়াল DOM-এ পরিবর্তন আনে এবং আসল DOM-এর সাথে তুলনা করে। শুধুমাত্র যেখানে পরিবর্তন দরকার, সেখানেই React DOM আসল DOM আপডেট করে।</p>
    <p>যেমন:</p>
    <pre><code>import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));</code></pre>
    <p>এই কোডটি 'App' কম্পונেন্টকে 'root' id ಹೊಂದಿರುವ HTML এলিমেন্টে রেন্ডার করে।</p>
    <img src="${getPlaceholder('blog-4').imageUrl}" alt="React Code" class="w-full rounded-lg my-4" data-ai-hint="${getPlaceholder('blog-4').imageHint}" />
    <p>এভাবেই React DOM কার্যকরভাবে এবং দ্রুত UI আপডেট করে, যা বড় অ্যাপ্লিকেশনগুলোতে পারফরম্যান্সের জন্য খুবই গুরুত্বপূর্ণ।</p>
    <img src="${getPlaceholder('blog-2').imageUrl}" alt="Another descriptive image" class="w-full rounded-lg my-4" data-ai-hint="${getPlaceholder('blog-2').imageHint}" />`,
    imageUrl: getPlaceholder('blog-4').imageUrl,
    imageHint: getPlaceholder('blog-4').imageHint,
    publishedAt: new Date('2023-11-05'),
    author: 'Mohiuddin Murad',
    tags: ['React', 'BanglaBlog', 'DOM'],
  },
];

export const messages: Message[] = [];

export const resume = {
  url: 'https://drive.google.com/file/d/1OxXkJIPi13NBX3EhLkrjbKrdeMgxSYpw/view?usp=drive_link'
};
