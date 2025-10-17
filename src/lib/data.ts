
import type { Project, Experience, Skill, Blog, Message, Education, Achievement } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { assets } from '@/assets/assets';

export const getPlaceholder = (id: string) => {
    return PlaceHolderImages.find((p) => p.id === id) || { imageUrl: 'https://placehold.co/600x400', imageHint: 'placeholder' };
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Bonnek',
        description: 'A comprehensive inventory management system for a modern fashion brand, designed to streamline stock tracking and order fulfillment with a clean, intuitive UI.',
        techStack: ['React.js', 'TypeScript', 'REST APIs', 'axios', 'Tailwind CSS', 'Git', 'GitHub', 'JSON', 'Redux.js'],
        imageUrl: assets.Bonnek,
        imageHint: "fashion e-commerce",
        liveUrl: 'https://51.stepupdesign.xyz/',
        repoUrl: 'https://github.com/muradmy00/bonnek',
    },
    {
        id: '2',
        title: 'CareSched',
        description: 'A healthcare scheduling application designed to streamline appointment booking and management for patients and doctors.',
        techStack: ['Tailwind CSS', 'React.js', 'JavaScript', 'Node.js', 'Express Js', 'MongoDB', 'REST APIs'],
        imageUrl: assets.careshced,
        imageHint: "healthcare scheduling app",
        liveUrl: 'https://care-sched-frontend.onrender.com/',
        repoUrl: 'https://github.com/muradmy00/caresched-hospital-management',
    },
    {
        id: '3',
        title: 'E-commerce Platform',
        description: 'A comprehensive e-commerce solution with product catalogs, shopping cart, and secure checkout functionalities.',
        techStack: ['Tailwind CSS', 'React.js', 'JavaScript', 'Node.js', 'Express Js', 'MongoDB', 'REST APIs'],
        imageUrl: assets.ecommerce,
        imageHint: "e-commerce platform",
        liveUrl: 'https://ecommerce-website-using-re-git-8e9aed-mohiuddin-murads-projects.vercel.app/',
        repoUrl: 'https://github.com/muradmy00/Full-Stack-E-commerce',
    },
    {
        id: '4',
        title: 'Food Delivery App',
        description: 'A vibrant and user-friendly food delivery application that allows users to order from local restaurants.',
        techStack: ['HTML5', 'JavaScript', 'Postman API', 'React.js', 'Tailwind CSS'],
        imageUrl: assets.food_delivery,
        imageHint: "food delivery app",
        liveUrl: 'https://food-delivery-app-git-main-mohiuddin-murads-projects.vercel.app/',
        repoUrl: 'https://github.com/muradmy00/Food-Delivery-App',
    },
    {
        id: '5',
        title: 'Gemini Clone',
        description: 'A functional clone of the Gemini conversational AI, built to explore and replicate generative AI features.',
        techStack: ['React', 'Genkit', 'Tailwind CSS'],
        imageUrl: assets.gemini_clone,
        imageHint: "AI chat interface",
        liveUrl: 'https://gemini-clone-app-git-main-mohiuddin-murads-projects.vercel.app/',
        repoUrl: 'https://github.com/muradmy00/Gemini-Clone',
    },
    {
        id: '6',
        title: 'University Website',
        description: 'A modern and responsive website for an educational institution, providing information for students and faculty.',
        techStack: ['React', 'React Router', 'CSS'],
        imageUrl: assets.university,
        imageHint: "university website",
        liveUrl: 'https://my-university-git-main-mohiuddin-murads-projects.vercel.app/',
        repoUrl: 'https://github.com/muradmy00/University-Website',
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
    { id: '23', name: 'Java', category: 'Languages', proficiency: 75, imageUrl: assets.java },
    { id: '24', name: 'Zustand', category: 'Frontend', proficiency: 80, imageUrl: assets.zustand },
    { id: '25', name: 'Quill', category: 'Frontend', proficiency: 82, imageUrl: assets.quill_icon },
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
    title: 'How the JavaScript Event Loop Works',
    content: `
      <p>JavaScript is a single-threaded language, meaning it can only perform one task at a time. However, it handles asynchronous operations like <code>setTimeout</code> or API calls through the Event Loop mechanism.</p>
      <p>The Event Loop, in conjunction with the Call Stack, Web APIs, Callback Queue (Macrotask Queue), and Microtask Queue, enables non-blocking, asynchronous behavior in JavaScript.</p>
      
      <h4>Core Components:</h4>
      <ol>
        <li><strong>Call Stack:</strong> When a function is invoked, it's pushed onto the Call Stack. When it completes, it's popped off. This follows a Last-In, First-Out (LIFO) principle.</li>
        <li><strong>Web APIs:</strong> Asynchronous functions like <code>setTimeout</code>, DOM events, or <code>fetch</code> are not handled by the JavaScript engine directly. The browser manages them via Web APIs. The Call Stack offloads these tasks to the Web API and proceeds with other synchronous code.</li>
        <li><strong>Callback Queue (Macrotask Queue):</strong> Once an asynchronous operation in the Web API is complete (e.g., the timer for <code>setTimeout</code> expires), its callback function is placed in the Callback Queue.</li>
        <li><strong>Microtask Queue:</strong> Callbacks from Promises (<code>.then()</code>, <code>.catch()</code>, <code>.finally()</code>) and <code>async/await</code> are placed in the Microtask Queue. This queue has a higher priority than the Callback Queue.</li>
        <li><strong>Event Loop:</strong> The Event Loop's primary job is to monitor the Call Stack. When the Call Stack is empty, it first processes all tasks in the Microtask Queue, moving them one by one to the Call Stack for execution. Only after the Microtask Queue is completely empty does it take the first task from the Callback Queue (Macrotask) and push it to the Call Stack.</li>
      </ol>
      
      <h4>Example:</h4>
      <p>Consider the output of the following code snippet:</p>
      <pre><code>console.log('Start');

setTimeout(() => {
  console.log('Timeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise (Microtask)');
});

console.log('End');</code></pre>
      
      <h4>Output:</h4>
      <pre><code>Start
End
Promise (Microtask)
Timeout (Macrotask)</code></pre>

      <h4>Explanation:</h4>
      <ol>
          <li><code>console.log('Start')</code> is pushed to the Call Stack and executed immediately.</li>
          <li><code>setTimeout</code> is sent to the Web API. Its callback is moved to the Callback Queue after 0 milliseconds.</li>
          <li>The <code>.then()</code> callback from <code>Promise.resolve()</code> is moved to the Microtask Queue.</li>
          <li><code>console.log('End')</code> is pushed to the Call Stack and executed.</li>
          <li>Once the Call Stack is empty, the Event Loop processes the Microtask Queue, executing 'Promise (Microtask)'.</li>
          <li>After the Microtask Queue is empty, the Event Loop processes the Callback Queue, executing 'Timeout (Macrotask)'.</li>
      </ol>
      <p>This mechanism allows JavaScript to handle asynchronous operations efficiently without blocking the main thread.</p>
    `,
    imageUrl: assets.event_loop,
    imageHint: 'event loop diagram',
    publishedAt: new Date('2023-10-18T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'Event Loop', 'Async', 'Microtask', 'Macrotask'],
  },
  {
    id: '2',
    slug: 'javascript-execution-context',
    title: 'JavaScript Execution Context: How Code Runs',
    content: `
      <p>The Execution Context is the environment in which JavaScript code is evaluated and executed. Every Execution Context has two main components: the Variable Environment (which stores variables, function declarations, and arguments) and the Thread of Execution (which executes the code line by line).</p>
      
      <h4>Types of Execution Context:</h4>
      <ol>
          <li><strong>Global Execution Context (GEC):</strong> When the JavaScript engine starts running code, it creates a Global Execution Context. This is the default context. The GEC establishes two key things: a global object (<code>window</code> in browsers, <code>global</code> in Node.js) and the <code>this</code> keyword, which initially points to the global object.</li>
          <li><strong>Function Execution Context (FEC):</strong> Whenever a function is called, a new Function Execution Context is created and placed on top of the Call Stack. Each function call gets its own separate context.</li>
      </ol>
      
      <h4>Phases of Execution Context Creation:</h4>
      <p>An Execution Context is created in two distinct phases:</p>
      <ol>
          <li><strong>Creation Phase (Memory Allocation):</strong> In this phase, the engine allocates memory for variable and function declarations before executing any code. Variables declared with <code>var</code> are initialized with <code>undefined</code>, while function declarations are stored in memory in their entirety. This behavior is known as Hoisting. Variables declared with <code>let</code> and <code>const</code> are also hoisted but remain in a "temporal dead zone" and are not initialized.</li>
          <li><strong>Execution Phase (Code Execution):</strong> During this phase, the code is executed sequentially. The engine assigns the actual values to variables. When a function is called, a new Execution Context is created and pushed onto the Call Stack, and this two-phase process repeats for the function's code.</li>
      </ol>
      
      <h4>How the Call Stack Works:</h4>
      <p>The Call Stack is a LIFO (Last-In, First-Out) data structure that manages and tracks Execution Contexts.</p>
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
      
      <h4>State of the Call Stack:</h4>
      <ol>
        <li>When <code>first()</code> is invoked, its FEC is pushed onto the stack.</li>
        <li>Inside <code>first</code>, <code>second()</code> is called, and its FEC is pushed on top.</li>
        <li>Inside <code>second</code>, <code>third()</code> is called, and its FEC is pushed on top.</li>
        <li>Once <code>third</code> finishes, its context is popped off the stack.</li>
        <li>Execution returns to <code>second</code>, which then finishes and is popped off.</li>
        <li>Finally, <code>first</code> finishes and is popped off, leaving the stack empty.</li>
      </ol>
      <p>This stack-based approach is fundamental to controlling the execution flow of all JavaScript code.</p>
    `,
    imageUrl: assets.execution_context,
    imageHint: 'javascript execution context diagram',
    publishedAt: new Date('2023-10-17T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'Execution Context', 'Hoisting', 'Call Stack'],
  },
  {
    id: '3',
    slug: 'javascript-vs-typescript',
    title: 'JavaScript vs. TypeScript: Which to Choose and Why?',
    content: `
      <p>TypeScript is a statically typed superset of JavaScript, developed and maintained by Microsoft. It enhances JavaScript by adding optional static types, classes, interfaces, and other modern features, which are invaluable for building robust, large-scale applications.</p>
      
      <h4>Key Differences:</h4>
      <ol>
        <li>
          <strong>Typing System:</strong>
          <ul>
              <li><strong>JavaScript:</strong> Employs dynamic typing, where a variable's type is determined at runtime. This allows for rapid development but can lead to elusive type-related bugs, especially in large codebases.</li>
              <li><strong>TypeScript:</strong> Utilizes static typing, allowing you to explicitly define a variable's type during development. This enables the compiler to catch a wide range of errors before the code is ever run.</li>
          </ul>
          <pre><code>// TypeScript Example
let framework: string = "React";
let version: number = 18;

// framework = 18; // This would cause a compile-time error: Type 'number' is not assignable to type 'string'.</code></pre>
        </li>
        <li>
          <strong>Error Checking & Tooling:</strong>
          <ul>
              <li><strong>TypeScript:</strong> Its primary advantage is compile-time error checking. This identifies bugs early in the development cycle. Modern IDEs like VS Code provide superior IntelliSense, autocompletion, and refactoring capabilities for TypeScript.</li>
              <li><strong>JavaScript:</strong> Errors are typically discovered only at runtime, which can make debugging more complex and time-consuming.</li>
          </ul>
        </li>
        <li>
          <strong>Object-Oriented Programming (OOP) Features:</strong>
          <ul>
            <li>TypeScript offers robust support for OOP concepts like Interfaces, Enums, Generics, and Access Modifiers (e.g., public, private, protected), which are not native to standard JavaScript (though ES6 did introduce classes).</li>
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
            <li>TypeScript code requires a compilation (or transpilation) step to convert it into standard JavaScript that browsers can execute.</li>
            <li>JavaScript can be executed directly by browsers without any prior compilation.</li>
          </ul>
        </li>
      </ol>

      <h4>When to Use Which?</h4>
      <p>Choose <strong>JavaScript</strong> for:</p>
      <ul>
          <li>Small to medium-sized projects or scripts.</li>
          <li>Rapid prototyping and proof-of-concepts.</li>
          <li>Teams that are not yet familiar with static typing.</li>
      </ul>
      <p>Choose <strong>TypeScript</strong> for:</p>
      <ul>
          <li>Large, complex, and long-term applications.</li>
          <li>Collaborative projects with multiple developers.</li>
          <li>When code safety, maintainability, and scalability are top priorities.</li>
      </ul>
      <p>In summary, TypeScript is a powerful tool that significantly improves code quality and developer experience in modern web development, making it an excellent choice for serious projects.</p>
    `,
    imageUrl: assets.typescript_javascript,
    imageHint: 'javascript vs typescript logos',
    publishedAt: new Date('2023-10-16T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['JavaScript', 'TypeScript', 'Programming', 'Web Development'],
  },
  {
    id: '4',
    slug: 'react-custom-hooks',
    title: 'React Custom Hooks: The Best Way to Share Logic',
    content: `
      <p>React Custom Hooks are reusable JavaScript functions whose names begin with "use" and that can call other Hooks (such as <code>useState</code>, <code>useEffect</code>). They provide a powerful way to extract and share stateful logic between components without altering the component hierarchy.</p>
      
      <h4>Why Use Custom Hooks?</h4>
      <ul>
          <li><strong>Reusability:</strong> They allow you to reuse logic across multiple components, adhering to the DRY (Don't Repeat Yourself) principle.</li>
          <li><strong>Clean Code & Separation of Concerns:</strong> Custom Hooks help separate complex business logic from the UI rendering logic of a component, making the code cleaner, more readable, and easier to reason about.</li>
          <li><strong>Maintainability:</strong> With the logic centralized in one place, it becomes much easier to update, debug, and maintain.</li>
      </ul>
      
      <h4>Example 1: <code>useFetch</code> for Data Fetching</h4>
      <p>A common use case is creating a custom hook to handle data fetching, loading states, and errors.</p>
      <pre><code>import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    
    const fetchData = async () => {
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
    };

    fetchData();
  }, [url]); // Reruns the effect if the URL changes

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
      
      <h4>Example 2: <code>useLocalStorage</code> for Persistent State</h4>
      <p>This hook simplifies the process of synchronizing component state with the browser's local storage.</p>
      <pre><code>import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// How to use it in a component
function ThemeSwitcher() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        &lt;button onClick={toggleTheme}&gt;
            Current theme: {theme}
        &lt;/button&gt;
    );
}
</code></pre>
      <p>Custom Hooks are a fundamental pattern in modern React development, promoting cleaner, more modular, and highly maintainable codebases.</p>
    `,
    imageUrl: assets.React_custom_hook,
    imageHint: 'react custom hooks code',
    publishedAt: new Date('2023-10-15T10:00:00Z'),
    author: 'Mohiuddin Murad',
    tags: ['React', 'Hooks', 'Custom Hooks', 'State Management'],
  },
];


export const messages: Message[] = [];

export const resume = {
  url: 'https://drive.google.com/file/d/1OxXkJIPi13NBX3EhLkrjbKrdeMgxSYpw/view?usp=drive_link'
};

    
    

    


