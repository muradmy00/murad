
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
    content: `
      <p>জাভাস্ক্রিপ্ট একটি সিঙ্গেল-থ্রেডেড ল্যাঙ্গুয়েজ, যার মানে এটি একবারে শুধুমাত্র একটি কাজ করতে পারে। কিন্তু আমরা প্রায়ই <code>setTimeout</code> বা API কলের মতো অ্যাসিনক্রোনাস অপারেশন ব্যবহার করি। Event Loop এখানেই একটি গুরুত্বপূর্ণ ভূমিকা পালন করে।</p>
      <p>Event Loop, Call Stack, Web API, এবং Callback Queue (Macrotask Queue) ও Microtask Queue—এই কয়েকটি অংশ মিলে অ্যাসিনক্রোনাস জাভাস্ক্রিপ্টকে সম্ভব করে তোলে।</p>
      
      <h4>মূল অংশগুলো:</h4>
      <ol>
        <li><strong>Call Stack:</strong> যখন কোনো ফাংশন কল করা হয়, তখন সেটি Call Stack-এ যুক্ত হয়। ফাংশনটির কাজ শেষ হলে এটি Stack থেকে বেরিয়ে যায়। এটি একটি LIFO (Last-In, First-Out) 구조 অনুসরণ করে।</li>
        <li><strong>Web APIs:</strong> <code>setTimeout</code>, DOM events, বা <code>fetch</code> এর মতো অ্যাসিনক্রোনাস অপারেশনগুলো সরাসরি জাভাস্ক্রিপ্ট ইঞ্জিনে রান হয় না। ব্রাউজার এগুলোকে Web API-এর মাধ্যমে হ্যান্ডেল করে। Call Stack এই কাজগুলোকে Web API-তে পাঠিয়ে দেয় এবং নিজের কাজ চালিয়ে যায়।</li>
        <li><strong>Callback Queue (Macrotask Queue):</strong> Web API-তে অ্যাসিনক্রোনাস অপারেশনের কাজ (যেমন <code>setTimeout</code>-এর সময় পূরণ হলে) শেষ হলে, তার সাথে যুক্ত কলব্যাক ফাংশনটি Callback Queue-তে অপেক্ষা করে।</li>
        <li><strong>Microtask Queue:</strong> Promises (যেমন <code>.then()</code>, <code>.catch()</code>, <code>.finally()</code>) এবং <code>async/await</code>-এর কলব্যাকগুলো Microtask Queue-তে যায়। এই Queue-এর Priority Callback Queue-এর চেয়ে বেশি।</li>
        <li><strong>Event Loop:</strong> Event Loop sürekli Call Stack খালি আছে কিনা তা तपास করে। Call Stack খালি হলেই, Event Loop প্রথমে Microtask Queue চেক করে। যদি Microtask Queue-তে কোনো কাজ থাকে, তাহলে সবগুলো কাজ শেষ না হওয়া পর্যন্ত সেগুলোকে一つ করে Call Stack-এ পাঠায়। Microtask Queue খালি হয়ে গেলে, Event Loop Callback Queue (Macrotask) থেকে প্রথম আইটেমটিকে Call Stack-এ পাঠিয়ে দেয়।</li>
      </ol>
      
      <h4>উদাহরণ:</h4>
      <p>নিচের কোডটির আউটপুট কী হবে?</p>
      <pre><code>console.log('Start');

setTimeout(() => {
  console.log('Timeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise (Microtask)');
});

console.log('End');</code></pre>
      
      <h4>আউটপুট:</h4>
      <pre><code>Start
End
Promise (Microtask)
Timeout (Macrotask)</code></pre>

      <h4>ব্যাখ্যা:</h4>
      <ol>
          <li><code>console.log('Start')</code> Call Stack-এ যায় এবং রান হয়।</li>
          <li><code>setTimeout</code> Web API-তে পাঠানো হয়। ০ মিলিসেকেন্ড পর এর কলব্যাকটি Callback Queue-তে যায়।</li>
          <li><code>Promise.resolve().then()</code>-এর কলব্যাকটি Microtask Queue-তে যায়।</li>
          <li><code>console.log('End')</code> Call Stack-এ যায় এবং রান হয়।</li>
          <li>Call Stack খালি হওয়ার পর Event Loop প্রথমে Microtask Queue চেক করে এবং 'Promise (Microtask)' রান করে।</li>
          <li>Microtask Queue খালি হয়ে গেলে, Event Loop Callback Queue থেকে 'Timeout (Macrotask)' রান করে।</li>
      </ol>
      <p>এভাবেই Event Loop জাভাস্ক্রিপ্টকে নন-ব্লকিং এবং কার্যকর করে তোলে।</p>
    `,
    imageUrl: getPlaceholder('blog-event-loop').imageUrl,
    imageHint: getPlaceholder('blog-event-loop').imageHint,
    publishedAt: new Date('2023-10-18T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'Event Loop', 'Async', 'Microtask', 'Macrotask'],
  },
  {
    id: '2',
    slug: 'javascript-execution-context',
    title: 'JavaScript Execution Context: কোড যেভাবে রান হয়',
    content: `
      <p>Execution Context হলো সেই পরিবেশ যেখানে জাভাস্ক্রিপ্ট কোড এক্সিকিউট বা রান হয়। প্রতিটি Execution Context-এর দুটি প্রধান অংশ থাকে: ভেরিয়েবল এনভায়রনমেন্ট (যেখানে ভেরিয়েবল, ফাংশন ও আর্গুমেন্টস স্টোর করা হয়) এবং থ্রেড অফ এক্সিকিউশন (যেখানে কোড লাইন বাই লাইন এক্সিকিউট হয়)।</p>
      
      <h4>Execution Context-এর প্রকারভেদ:</h4>
      <ol>
          <li><strong>Global Execution Context (GEC):</strong> যখন জাভাস্ক্রিপ্ট ইঞ্জিন প্রথমবার কোড রান করে, তখন এটি Global Execution Context তৈরি করে। এটিই ডিফল্ট কনটেক্সট। GEC-তে দুটি জিনিস তৈরি হয়: একটি গ্লোবাল অবজেক্ট (ব্রাউজারে <code>window</code>, Node.js-এ <code>global</code>) এবং <code>this</code>, যা ডিফল্টভাবে গ্লোবাল অবজেক্টকে নির্দেশ করে।</li>
          <li><strong>Function Execution Context (FEC):</strong> যখন কোনো ফাংশন কল করা হয়, তখন একটি নতুন Function Execution Context তৈরি হয় এবং এটি Call Stack-এর শীর্ষে যুক্ত হয়। প্রতিটি ফাংশনের জন্য নিজস্ব Execution Context থাকে।</li>
      </ol>
      
      <h4>Execution Context তৈরির ধাপ:</h4>
      <p>Execution Context দুটি ধাপে তৈরি হয়:</p>
      <ol>
          <li><strong>Creation Phase (Memory Allocation):</strong> এই ধাপে ইঞ্জিন কোড রান না করে ভেরিয়েবল এবং ফাংশন ডিক্লারেশনের জন্য মেমরি বরাদ্দ করে। <code>var</code> দিয়ে ডিক্লেয়ার করা ভেরিয়েবলগুলোকে <code>undefined</code> দিয়ে مقدار দেওয়া হয় এবং ফাংশন ডিক্লারেশনগুলোকে সম্পূর্ণরূপে মেমরিতে স্টোর করা হয়। এই প্রক্রিয়াকেই Hoisting বলা হয়। <code>let</code> এবং <code>const</code>-এর ক্ষেত্রেও হোয়েস্টিং হয়, কিন্তু সেগুলো uninitialized থাকে।</li>
          <li><strong>Execution Phase (Code Execution):</strong> এই ধাপে কোড লাইন বাই লাইন এক্সিকিউট হয় এবং ভেরিয়েবলে আসল মান असाइन করা হয়। ফাংশন কল হলে নতুন একটি Execution Context তৈরি হয় এবং Call Stack-এ যুক্ত হয়।</li>
      </ol>
      
      <h4>Call Stack যেভাবে কাজ করে:</h4>
      <p>Call Stack হলো একটি LIFO (Last-In, First-Out) ডেটা স্ট্রাকচার যা Execution Context-গুলোকে ট্র্যাক করে।</p>
      <pre><code>function third() {
  console.log("Inside third");
}

function second() {
  third();
  console.log("Inside second");
}

function first() {
  second();
  console.log("Inside first");
}

first();</code></pre>
      
      <h4>Call Stack-এর অবস্থা:</h4>
      <ol>
        <li><code>first()</code> কল হলে, <code>first</code>-এর FEC স্ট্যাকের শীর্ষে যায়।</li>
        <li><code>first</code> থেকে <code>second()</code> কল হলে, <code>second</code>-এর FEC স্ট্যাকের শীর্ষে যায়।</li>
        <li><code>second</code> থেকে <code>third()</code> কল হলে, <code>third</code>-এর FEC স্ট্যাকের শীর্ষে যায়।</li>
        <li><code>third</code>-এর কাজ শেষ হলে এটি স্ট্যাক থেকে বেরিয়ে যায়।</li>
        <li>এরপর <code>second</code>-এর কাজ শেষ হলে এটিও বেরিয়ে যায়।</li>
        <li>সবশেষে <code>first</code>-এর কাজ শেষ হলে এটিও বেরিয়ে যায়।</li>
      </ol>
      <p>এই প্রক্রিয়াটি জাভাস্ক্রিপ্ট কোডের এক্সিকিউশন ফ্লো নিয়ন্ত্রণ করে।</p>
    `,
    imageUrl: getPlaceholder('blog-execution-context').imageUrl,
    imageHint: getPlaceholder('blog-execution-context').imageHint,
    publishedAt: new Date('2023-10-17T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'Execution Context', 'Hoisting', 'Call Stack'],
  },
  {
    id: '3',
    slug: 'javascript-vs-typescript',
    title: 'JavaScript vs. TypeScript: কোনটি এবং কেন?',
    content: `
      <p>TypeScript হলো জাভাস্ക്രിপ্টের একটি সুপারসেট, যা Microsoft দ্বারা তৈরি এবং মেইনটেইন করা হয়। এটি জাভাস্ക്രിপ্টে স্ট্যাটিক টাইপিং, ক্লাস, ইন্টারফেস এবং অন্যান্য আধুনিক ফিচার যুক্ত করে, যা বড় আকারের অ্যাপ্লিকেশন তৈরিতে সাহায্য করে।</p>
      
      <h4>প্রধান পার্থক্যগুলো:</h4>
      <ol>
        <li>
          <strong>Typing System:</strong>
          <ul>
              <li><strong>JavaScript:</strong> ডাইনামিক টাইপিং ব্যবহার করে। এর মানে ভেরিয়েবলের টাইপ রানটাইমে নির্ধারিত হয়। এটি কোড লেখাকে দ্রুত করলেও বড় প্রজেক্টে টাইপ-সম্পর্কিত বাগ তৈরি করতে পারে।</li>
              <li><strong>TypeScript:</strong> স্ট্যাটিক টাইপিং ব্যবহার করে, যেখানে কোড লেখার সময়ই ভেরিয়েবলের টাইপ নির্ধারণ করে দিতে হয়। এটি ডেভেলপমেন্ট পর্যায়েই অনেক ভুল ধরতে সাহায্য করে এবং কোডকে আরও অনুমানযোগ্য (predictable) করে তোলে।</li>
          </ul>
          <pre><code>// TypeScript Example
let framework: string = "React";
let version: number = 18;

// framework = 18; // Error: Type 'number' is not assignable to type 'string'.</code></pre>
        </li>
        <li>
          <strong>Error Checking & Tooling:</strong>
          <ul>
              <li><strong>TypeScript:</strong> কম্পাইল-টাইম error checking প্রদান করে, যা কোড রান করার আগেই ভুল খুঁজে বের করে। IDE (যেমন VS Code) TypeScript-এর সাথে দারুণভাবে ইন্টিগ্রেটেড, যা আরও ভালো IntelliSense, autocompletion, এবং refactoring সাপোর্ট দেয়।</li>
              <li><strong>JavaScript:</strong> ভুলগুলো শুধুমাত্র রানটাইমে ধরা পড়ে, যা ডিবাগিংকে সময়সাপেক্ষ এবং কঠিন করে তুলতে পারে।</li>
          </ul>
        </li>
        <li>
          <strong>OOP Features (Interfaces, Enums, Generics):</strong>
          <ul>
            <li>TypeScript-এ Interface, Enum, Generics, Access Modifiers (public, private, protected)-এর মতো ফিচার আছে যা স্ট্যান্ডার্ড JavaScript-এ নেই (যদিও ES6 کلاس নিয়ে এসেছে)। এগুলো অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংকে আরও সহজ করে তোলে।</li>
          </ul>
          <pre><code>// TypeScript Interface
interface User {
  name: string;
  id: number;
}

const user: User = { name: "John", id: 1 };

// TypeScript Enum
enum Role { ADMIN, USER, GUEST };
let userRole: Role = Role.ADMIN;</code></pre>
        </li>
        <li>
          <strong>Development Process:</strong>
          <ul>
            <li>TypeScript কোডকে প্রথমে জাভাস্ക്രിপ্টে কম্পাইল করতে হয়, কারণ ব্রাউজার শুধুমাত্র জাভাস্ക്രിপ্ট বোঝে। এর জন্য একটি বিল্ড স্টেপ প্রয়োজন।</li>
            <li>JavaScript সরাসরি ব্রাউজারে রান হতে পারে।</li>
          </ul>
        </li>
      </ol>

      <h4>কখন কোনটি ব্যবহার করবেন?</h4>
      <p><strong>JavaScript</strong> ব্যবহার করুন যখন:</p>
      <ul>
          <li>প্রজেক্টটি ছোট বা মাঝারি আকারের।</li>
          <li>দ্রুত প্রোটোটাইপিং প্রয়োজন।</li>
          <li>আপনার দলে TypeScript-এর অভিজ্ঞতা নেই।</li>
      </ul>
      <p><strong>TypeScript</strong> ব্যবহার করুন যখন:</p>
      <ul>
          <li>প্রজেক্টটি বড়, জটিল এবং দীর্ঘমেয়াদী।</li>
          <li>একাধিক ডেভেলপার একটি দলে কাজ করছে।</li>
          <li>কোডের নিরাপত্তা, রক্ষণাবেক্ষণযোগ্যতা এবং স্কেলেবিলিটি অত্যন্ত গুরুত্বপূর্ণ।</li>
      </ul>
      <p>সামগ্রিকভাবে, TypeScript একটি শক্তিশালী টুল যা আধুনিক ওয়েব ডেভেলপমেন্টে কোডের গুণগত মান বাড়াতে সাহায্য করে।</p>
    `,
    imageUrl: getPlaceholder('blog-js-vs-ts').imageUrl,
    imageHint: getPlaceholder('blog-js-vs-ts').imageHint,
    publishedAt: new Date('2023-10-16T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'TypeScript', 'Programming', 'Web Development'],
  },
  {
    id: '4',
    slug: 'react-custom-hooks',
    title: 'React Custom Hooks: লজিক শেয়ারের সেরা উপায়',
    content: `
      <p>React Custom Hooks হলো এমন জাভাস্ক্রিপ্ট ফাংশن যার নাম "use" দিয়ে শুরু হয় এবং যা অন্য হুক (যেমন <code>useState</code>, <code>useEffect</code>) কল করতে পারে। কাস্টম হুক आपल्याला কম্পোনেন্টের মধ্যে stateful লজিক পুনরায় ব্যবহার (reuse) করার সুযোগ দেয়।</p>
      <p>যখন একাধিক কম্পোনেন্টে একই ধরনের লজিক (যেমন ডেটা ফেচ করা, লোকাল স্টোরেজ ব্যবহার করা, বা অথেনটিকেশন স্টেট পরিচালনা করা) প্রয়োজন হয়, তখন আমরা সেই লজিককে একটি কাস্টম হুকে আলাদা করে ফেলতে পারি।</p>
      
      <h4>কেন কাস্টম হুক ব্যবহার করবেন?</h4>
      <ul>
          <li><strong>Reusability:</strong> একই লজিক কপি-পেস্ট না করে একাধিক কম্পোনেন্টে ব্যবহার করা যায়। এটি DRY (Don't Repeat Yourself) নীতি মেনে চলতে সাহায্য করে।</li>
          <li><strong>Clean Code & Separation of Concerns:</strong> কম্পোনেন্টের UI লজিক থেকে business লজিককে আলাদা করা যায়। এর ফলে কোড পরিষ্কার ও বোঝা সহজ হয়।</li>
          <li><strong>Maintainability:</strong> লজিক এক জায়গায় থাকায় পরিবর্তন বা ডিবাগ করা অনেক সহজ হয়।</li>
      </ul>
      
      <h4>উদাহরণ ১: <code>useFetch</code></h4>
      <p>নিচে একটি ডেটা ফেچ করার জন্য কাস্টম হুক (<code>useFetch</code>) এর উদাহরণ দেওয়া হলো:</p>
      <pre><code>import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]); // Dependency array ensures it re-fetches if URL changes

  return { data, loading, error };
}

// How to use it in a component
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`https://api.example.com/users/\${userId}\`);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;p&gt;Email: {user.email}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h4>উদাহরণ ২: <code>useLocalStorage</code></h4>
      <p>এই হুকটি লোকাল স্টোরেজে ডেটা সংরক্ষণ এবং পড়ার কাজকে সহজ করে।</p>
      <pre><code>import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// How to use it in a component
function ThemeSwitcher() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        &lt;button onClick={toggleTheme}&gt;
            Current theme: {theme}
        &lt;/button&gt;
    );
}
</code></pre>
      <p>কাস্টম হুক React-এর একটি শক্তিশালী ফিচার যা কোডকে আরও মডুলার, readable এবং maintainable করে তোলে।</p>
    `,
    imageUrl: getPlaceholder('blog-custom-hooks').imageUrl,
    imageHint: getPlaceholder('blog-custom-hooks').imageHint,
    publishedAt: new Date('2023-10-15T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['React', 'Hooks', 'Custom Hooks', 'State Management'],
  },
];

export const messages: Message[] = [];

export const resume = {
  url: 'https://drive.google.com/file/d/1OxXkJIPi13NBX3EhLkrjbKrdeMgxSYpw/view?usp=drive_link'
};

    