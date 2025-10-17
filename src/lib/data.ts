
import type { Project, Experience, Skill, Blog, Message, Education, Achievement } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { assets } from '@/assets/assets';

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
    { id: '23', name: 'Java', category: 'Languages', proficiency: 75, imageUrl: 'https://img.icons8.com/color/48/java-coffee-cup-logo.png' },
    { id: '24', name: 'Zustand', category: 'Frontend', proficiency: 80, imageUrl: 'https://img.icons8.com/color/48/bear.png' },
    { id: '25', name: 'Quill', category: 'Frontend', proficiency: 82, imageUrl: 'https://img.icons8.com/fluency/48/quill-pen.png' },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Published Two NPM Packages',
    description: 'Successfully built and published two npm packages using React and TypeScript: currency-converter-lite and copy-text-to-clipboard-lite.',
    imageUrl: assets.npm_package,
    imageHint: 'npm logo',
  },
  {
    id: '2',
    title: 'Software Development Competition 2024',
    description: 'Participated in the Software Development Competition organized by BUBT, showcasing problem-solving and development skills.',
    imageUrl: assets.software,
    imageHint: 'competition trophy',
  },
  {
    id: '3',
    title: 'Inter University Programming Contest 2024',
    description: 'Competed in the Inter University Programming Contest organized by BUBT, honing algorithmic and competitive programming abilities.',
    imageUrl: assets.contest,
    imageHint: 'programming contest',
  },
  {
    id: '4',
    title: 'Web Development Bootcamp Graduate',
    description: 'Completed an intensive Web Development Bootcamp by Programming Hero, mastering modern web technologies and best practices.',
    imageUrl: assets.bootcamp,
    imageHint: 'bootcamp certificate',
  },
  {
    id: '5',
    title: 'Programming Camp 2023 Participant',
    description: 'Attended the Programming Camp 2023, organized by BUBT IT Club, to enhance programming skills and collaborate with peers.',
    imageUrl: assets.camp,
    imageHint: 'programming camp',
  },
  {
    id: '6',
    title: 'ICPC 2021 Contestant',
    description: 'Participated in the prestigious International Collegiate Programming Contest (ICPC) in 2021, representing BUBT.',
    imageUrl: assets.icpc,
    imageHint: 'ICPC logo',
  },
];

export const blogPosts: Blog[] = [
  {
    id: '1',
    slug: 'javascript-event-loop',
    title: 'JavaScript Event Loop: যেভাবে কাজ করে',
    content: `<p>জাভাস্ক্রিপ্ট একটি সিঙ্গেল-থ্রেডেড ল্যাঙ্গুয়েজ, যার মানে এটি একবারে শুধুমাত্র একটি কাজ করতে পারে। কিন্তু আমরা প্রায়ই setTimeout বা API কলের মতো অ্যাসিনক্রোনাস অপারেশন ব্যবহার করি। Event Loop এখানেই关键 भूमिका পালন করে।</p>
    <p>Event Loop, Call Stack, Web API, এবং Callback Queue—এই চারটি অংশ मिलकर অ্যাсинক্রোনাস জাভাস্ক্রিপ্টকে সম্ভব করে তোলে।</p>
    <ol>
      <li><strong>Call Stack:</strong> যখন কোনো ফাংশن কল করা হয়, তখন সেটি Call Stack-এ যুক্ত হয়। ফাংশনটির কাজ শেষ হলে এটি Stack থেকে বেরিয়ে যায়।</li>
      <li><strong>Web APIs:</strong> <code>setTimeout</code>, DOM events, বা <code>fetch</code> এর মতো অ্যাসিনക്ронাস অপারেশনগুলো Web API দ্বারা হ্যান্ডেল করা হয়। Call Stack এই কাজগুলোকে Web API-তে পাঠিয়ে দেয় এবং নিজের কাজ চালিয়ে যায়।</li>
      <li><strong>Callback Queue:</strong> Web API-তে অ্যাসিনক্রোনাস অপারেশনের কাজ শেষ হলে, তার সাথে যুক্ত কলব্যাক ফাংশنটি Callback Queue-তে অপেক্ষা করে।</li>
      <li><strong>Event Loop:</strong> Event Loop sürekli Call Stack খালি আছে কিনা তা तपास করে। Call Stack খালি হলেই, Event Loop Callback Queue থেকে প্রথম আইটেমটিকে Call Stack-এ পাঠিয়ে দেয়, যাতে সেটি রান হতে পারে।</li>
    </ol>
    <p>নিচের উদাহরণটি দেখুন:</p>
    <pre><code>console.log('Start');

setTimeout(() => {
  console.log('Timeout Callback');
}, 2000);

console.log('End');</code></pre>
    <p>এখানে আউটপুট হবে:</p>
    <pre><code>Start
End
Timeout Callback</code></pre>
    <p>কারণ <code>setTimeout</code> Web API-তে চলে যায় এবং Call Stack তার কাজ চালিয়ে 'End' প্রিন্ট করে। দুই সেকেন্ড পর কলব্যাক ফাংশনটি Queue থেকে Stack-এ গিয়ে রান হয়।</p>`,
    imageUrl: getPlaceholder('blog-event-loop').imageUrl,
    imageHint: getPlaceholder('blog-event-loop').imageHint,
    publishedAt: new Date('2023-10-18T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'Event Loop', 'Async'],
  },
  {
    id: '2',
    slug: 'javascript-execution-context',
    title: 'JavaScript Execution Context: কোড যেভাবে রান হয়',
    content: `<p>Execution Context হলো সেই পরিবেশ যেখানে জাভাস্ক্রিপ্ট কোড এক্সিকিউট বা রান হয়। প্রতিটি Execution Context-এর দুটি প্রধান অংশ থাকে: ভেরিয়েবল এনভায়রনমেন্ট এবং থ্রেড অফ এক্সিকিউশন।</p>
    <p>জাভাস্ক্রিপ্টে দুই ধরনের Execution Context রয়েছে:</p>
    <ol>
        <li><strong>Global Execution Context (GEC):</strong> যখন জাভাস্ক্রিপ্ট ইঞ্জিন প্রথমবার কোড রান করে, তখন এটি Global Execution Context তৈরি করে। GEC-তে দুটি জিনিস তৈরি হয়: একটি গ্লোবাল অবজেক্ট (ব্রাউজারে <code>window</code>, Node.js-এ <code>global</code>) এবং <code>this</code>, যা গ্লোবাল অবজেক্টকে নির্দেশ করে।</li>
        <li><strong>Function Execution Context (FEC):</strong> যখন কোনো ফাংশন কল করা হয়, তখন একটি নতুন Function Execution Context তৈরি হয়। প্রতিটি ফাংশনের জন্য নিজস্ব Execution Context থাকে।</li>
    </ol>
    <p>Execution Context তৈরির দুটি ধাপ রয়েছে:</p>
    <ol>
        <li><strong>Creation Phase:</strong> এই ধাপে ইঞ্জিন কোড রান না করে ভেরিয়েবল এবং ফাংশন ডিক্লারেশনের জন্য মেমরি বরাদ্দ করে। ভেরিয়েবলগুলোকে <code>undefined</code> দিয়ে مقدار দেওয়া হয়, যাকে Hoisting বলা হয়।</li>
        <li><strong>Execution Phase:</strong> এই ধাপে কোড লাইন বাই লাইন এক্সিকিউট হয় এবং ভেরিয়েবলে আসল মান असाइन করা হয়।</li>
    </ol>
    <p>নিচের উদাহরণটি দেখুন:</p>
    <pre><code>console.log(myVar); // undefined
var myVar = 10;
console.log(myVar); // 10

myFunction(); // "Hello from function"

function myFunction() {
  console.log("Hello from function");
}</code></pre>
    <p>Creation Phase-এ <code>myVar</code>-কে <code>undefined</code> এবং <code>myFunction</code>-কে মেমরিতে রাখা হয়। তাই প্রথম <code>console.log</code> undefined দেখায়, কিন্তু ফাংশনটি সঠিকভাবে কল হয়।</p>`,
    imageUrl: getPlaceholder('blog-execution-context').imageUrl,
    imageHint: getPlaceholder('blog-execution-context').imageHint,
    publishedAt: new Date('2023-10-17T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'Execution Context', 'Hoisting'],
  },
  {
    id: '3',
    slug: 'javascript-vs-typescript',
    title: 'JavaScript vs. TypeScript: কোনটি এবং কেন?',
    content: `<p>TypeScript হলো জাভাস্ക്രിপ্টের একটি সুপারসেট, যা জাভাস্ക്രിপ্টে স্ট্যাটিক টাইপিং এবং অন্যান্য কিছু ফিচার যুক্ত করে। প্রধান পার্থক্যগুলো নিচে দেওয়া হলো:</p>
    <h4>Typing</h4>
    <ul>
        <li><strong>JavaScript:</strong> ডাইনামিক টাইপিং ব্যবহার করে, যার মানে ভেরিয়েবলের টাইপ রানটাইমে নির্ধারিত হয়। এটি কোড লেখাকে দ্রুত করলেও বড় প্রজেক্টে বাগ তৈরি করতে পারে।</li>
        <li><strong>TypeScript:</strong> স্ট্যাটিক টাইপিং ব্যবহার করে, যেখানে কোড লেখার সময়ই ভেরিয়েবলের টাইপ নির্ধারণ করে দিতে হয়। এটি ডেভেলপমেন্ট পর্যায়েই অনেক ভুল ধরতে সাহায্য করে।</li>
    </ul>
    <pre><code>// TypeScript
let name: string = "Murad";
let age: number = 25;
// age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'.</code></pre>
    <h4>Tooling and Error Checking</h4>
    <ul>
        <li><strong>TypeScript:</strong> কম্পাইল-টাইম error checking প্রদান করে, যা কোড রান করার আগেই ভুল খুঁজে বের করে। এর ফলে কোডের গুণগত মান বাড়ে।</li>
        <li><strong>JavaScript:</strong> ভুলগুলো শুধুমাত্র রানটাইমে ধরা পড়ে, যা ডিবাগিংকে কঠিন করে তুলতে পারে।</li>
    </ul>
<h4>Interfaces and Enums</h4>
<p>TypeScript-এ Interface, Enum-এর মতো ফিচার আছে যা JavaScript-এ নেই। এগুলো জটিল ডেটা স্ট্রাকচারকে সংজ্ঞায়িত করতে সাহায্য করে।</p>
<pre><code>// TypeScript Interface
interface User {
  name: string;
  id: number;
}

const user: User = { name: "John", id: 1 };</code></pre>
<p><b>কখন কোনটি ব্যবহার করবেন?</b> ছোট প্রজেক্ট বা স্ক্রিপ্টের জন্য জাভাস্ক্রিপ্ট যথেষ্ট। কিন্তু বড়, জটিল এবং টিমে কাজ করার জন্য TypeScript খুবই কার্যকরী, কারণ এটি কোডকে আরও নিরাপদ এবং রক্ষণাবেক্ষণযোগ্য করে তোলে।</p>`,
    imageUrl: getPlaceholder('blog-js-vs-ts').imageUrl,
    imageHint: getPlaceholder('blog-js-vs-ts').imageHint,
    publishedAt: new Date('2023-10-16T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'TypeScript', 'Programming'],
  },
  {
    id: '4',
    slug: 'react-custom-hooks',
    title: 'React Custom Hooks: লজিক শেয়ারের সেরা উপায়',
    content: `<p>React Custom Hooks হলো এমন জাভাস্ক্রিপ্ট ফাংশন যার নাম "use" দিয়ে শুরু হয় এবং যা অন্য হুক কল করতে পারে। কাস্টম হুক आपल्याला কম্পোনেন্টের মধ্যে stateful লজিক পুনরায় ব্যবহার করার সুযোগ দেয়।</p>
<p>যখন একাধিক কম্পোনেন্টে একই ধরনের লজিক (যেমন ডেটা ফেচ করা, লোকাল স্টোরেজ ব্যবহার করা, বা উইন্ডো সাইজ ট্র্যাক করা) প্রয়োজন হয়, তখন আমরা সেই লজিককে একটি কাস্টম হুকে আলাদা করে ফেলতে পারি।</p>
<h4>কেন কাস্টম হুক ব্যবহার করবেন?</h4>
<ul>
    <li><strong>Reusability:</strong> একই লজিক কপি-পেস্ট না করে একাধিক কম্পোনেন্টে ব্যবহার করা যায়।</li>
    <li><strong>Clean Code:</strong> কম্পোনেন্টের লজিককে বাইরে বের করে আনায় কোড পরিষ্কার ও বোঝা সহজ হয়।</li>
    <li><strong>Maintainability:</strong> লজিক এক জায়গায় থাকায় পরিবর্তন বা ডিবাগ করা সহজ হয়।</li>
</ul>
<p>নিচে একটি ডেটা ফেচ করার জন্য কাস্টম হুক (<code>useFetch</code>) এর উদাহরণ দেওয়া হলো:</p>
<pre><code>import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// How to use it in a component
function MyComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error!&lt;/p&gt;;

  return &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;;
}</code></pre>
<p>এই <code>useFetch</code> হুকটি এখন যেকোনো কম্পোনেন্টে ডেটা ফেচ করার জন্য ব্যবহার করা যাবে, যা কোডকে DRY (Don't Repeat Yourself) নীতি মেনে চলতে সাহায্য করে।</p>`,
    imageUrl: getPlaceholder('blog-custom-hooks').imageUrl,
    imageHint: getPlaceholder('blog-custom-hooks').imageHint,
    publishedAt: new Date('2023-10-15T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['React', 'Hooks', 'Custom Hooks'],
  },
];

export const messages: Message[] = [];

export const resume = {
  url: 'https://drive.google.com/file/d/1OxXkJIPi13NBX3EhLkrjbKrdeMgxSYpw/view?usp=drive_link'
};

    