
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
    title: 'How the JavaScript Event Loop Works',
    content: `
      <p>JavaScript is a single-threaded language, which means it can only do one thing at a time. But we often use asynchronous operations like <code>setTimeout</code> or API calls. This is where the Event Loop plays a crucial role.</p>
      <p>The Event Loop, along with the Call Stack, Web APIs, Callback Queue (Macrotask Queue), and Microtask Queue, makes asynchronous JavaScript possible.</p>
      
      <h4>Core Components:</h4>
      <ol>
        <li><strong>Call Stack:</strong> When a function is called, it's added to the Call Stack. When the function finishes, it's removed from the stack. It follows a LIFO (Last-In, First-Out) structure.</li>
        <li><strong>Web APIs:</strong> Asynchronous operations like <code>setTimeout</code>, DOM events, or <code>fetch</code> don't run directly in the JavaScript engine. The browser handles them through Web APIs. The Call Stack sends these tasks to the Web API and continues its own work.</li>
        <li><strong>Callback Queue (Macrotask Queue):</strong> When an asynchronous operation in the Web API finishes (e.g., the time for <code>setTimeout</code> is up), its associated callback function waits in the Callback Queue.</li>
        <li><strong>Microtask Queue:</strong> Callbacks from Promises (like <code>.then()</code>, <code>.catch()</code>, <code>.finally()</code>) and <code>async/await</code> go into the Microtask Queue. This queue has a higher priority than the Callback Queue.</li>
        <li><strong>Event Loop:</strong> The Event Loop constantly checks if the Call Stack is empty. As soon as it's empty, the Event Loop first checks the Microtask Queue. If there are any tasks, it moves them one by one to the Call Stack until the Microtask Queue is empty. Only then does it take the first item from the Callback Queue (Macrotask) and move it to the Call Stack.</li>
      </ol>
      
      <h4>Example:</h4>
      <p>What will be the output of the following code?</p>
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
          <li><code>console.log('Start')</code> goes to the Call Stack and runs.</li>
          <li><code>setTimeout</code> is sent to the Web API. After 0 milliseconds, its callback moves to the Callback Queue.</li>
          <li>The callback from <code>Promise.resolve().then()</code> moves to the Microtask Queue.</li>
          <li><code>console.log('End')</code> goes to the Call Stack and runs.</li>
          <li>After the Call Stack becomes empty, the Event Loop first checks the Microtask Queue and runs 'Promise (Microtask)'.</li>
          <li>Once the Microtask Queue is empty, the Event Loop runs 'Timeout (Macrotask)' from the Callback Queue.</li>
      </ol>
      <p>This is how the Event Loop makes JavaScript non-blocking and efficient.</p>
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
    title: 'JavaScript Execution Context: How Code Runs',
    content: `
      <p>The Execution Context is the environment where JavaScript code is executed. Each Execution Context has two main parts: the Variable Environment (where variables, functions, and arguments are stored) and the Thread of Execution (where code is executed line by line).</p>
      
      <h4>Types of Execution Context:</h4>
      <ol>
          <li><strong>Global Execution Context (GEC):</strong> When the JavaScript engine first runs the code, it creates a Global Execution Context. This is the default context. The GEC creates two things: a global object (<code>window</code> in browsers, <code>global</code> in Node.js) and <code>this</code>, which by default points to the global object.</li>
          <li><strong>Function Execution Context (FEC):</strong> When a function is called, a new Function Execution Context is created and added to the top of the Call Stack. Each function has its own Execution Context.</li>
      </ol>
      
      <h4>Phases of Execution Context Creation:</h4>
      <p>An Execution Context is created in two phases:</p>
      <ol>
          <li><strong>Creation Phase (Memory Allocation):</strong> In this phase, the engine allocates memory for variables and function declarations without executing the code. Variables declared with <code>var</code> are initialized with <code>undefined</code>, and function declarations are stored completely in memory. This process is called Hoisting. <code>let</code> and <code>const</code> are also hoisted but remain uninitialized.</li>
          <li><strong>Execution Phase (Code Execution):</strong> In this phase, the code is executed line by line, and variables are assigned their actual values. When a function is called, a new Execution Context is created and pushed onto the Call Stack.</li>
      </ol>
      
      <h4>How the Call Stack Works:</h4>
      <p>The Call Stack is a LIFO (Last-In, First-Out) data structure that tracks Execution Contexts.</p>
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
        <li>When <code>first()</code> is called, its FEC is pushed to the top of the stack.</li>
        <li>From <code>first</code>, <code>second()</code> is called, and its FEC is pushed to the top.</li>
        <li>From <code>second</code>, <code>third()</code> is called, and its FEC is pushed to the top.</li>
        <li>When <code>third</code> finishes, it's popped off the stack.</li>
        <li>Then, when <code>second</code> finishes, it's also popped off.</li>
        <li>Finally, when <code>first</code> finishes, it's popped off the stack.</li>
      </ol>
      <p>This process controls the execution flow of JavaScript code.</p>
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
    title: 'JavaScript vs. TypeScript: Which to Choose and Why?',
    content: `
      <p>TypeScript is a superset of JavaScript, created and maintained by Microsoft. It adds static typing, classes, interfaces, and other modern features to JavaScript, which helps in building large-scale applications.</p>
      
      <h4>Key Differences:</h4>
      <ol>
        <li>
          <strong>Typing System:</strong>
          <ul>
              <li><strong>JavaScript:</strong> Uses dynamic typing, meaning a variable's type is determined at runtime. This can make coding faster but may lead to type-related bugs in large projects.</li>
              <li><strong>TypeScript:</strong> Uses static typing, where you define a variable's type when you write the code. This helps catch many errors during development and makes the code more predictable.</li>
          </ul>
          <pre><code>// TypeScript Example
let framework: string = "React";
let version: number = 18;

// framework = 18; // Error: Type 'number' is not assignable to type 'string'.</code></pre>
        </li>
        <li>
          <strong>Error Checking & Tooling:</strong>
          <ul>
              <li><strong>TypeScript:</strong> Provides compile-time error checking, which finds errors before the code runs. IDEs (like VS Code) are deeply integrated with TypeScript, offering better IntelliSense, autocompletion, and refactoring support.</li>
              <li><strong>JavaScript:</strong> Errors are only caught at runtime, which can make debugging time-consuming and difficult.</li>
          </ul>
        </li>
        <li>
          <strong>OOP Features (Interfaces, Enums, Generics):</strong>
          <ul>
            <li>TypeScript includes features like Interfaces, Enums, Generics, and Access Modifiers (public, private, protected) that are not in standard JavaScript (though ES6 introduced classes). These features make object-oriented programming easier.</li>
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
            <li>TypeScript code must first be compiled into JavaScript because browsers only understand JavaScript. This requires a build step.</li>
            <li>JavaScript can run directly in the browser.</li>
          </ul>
        </li>
      </ol>

      <h4>When to Use Which?</h4>
      <p>Use <strong>JavaScript</strong> when:</p>
      <ul>
          <li>The project is small or medium-sized.</li>
          <li>Rapid prototyping is needed.</li>
          <li>Your team lacks experience with TypeScript.</li>
      </ul>
      <p>Use <strong>TypeScript</strong> when:</p>
      <ul>
          <li>The project is large, complex, and long-term.</li>
          <li>Multiple developers are working in a team.</li>
          <li>Code safety, maintainability, and scalability are critical.</li>
      </ul>
      <p>Overall, TypeScript is a powerful tool that helps improve code quality in modern web development.</p>
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
    title: 'React Custom Hooks: The Best Way to Share Logic',
    content: `
      <p>React Custom Hooks are JavaScript functions whose names start with "use" and that can call other Hooks (like <code>useState</code>, <code>useEffect</code>). Custom Hooks allow you to reuse stateful logic between components.</p>
      <p>When multiple components need the same kind of logic (like fetching data, using local storage, or managing authentication state), we can extract that logic into a custom Hook.</p>
      
      <h4>Why Use Custom Hooks?</h4>
      <ul>
          <li><strong>Reusability:</strong> The same logic can be used in multiple components without copy-pasting. This helps follow the DRY (Don't Repeat Yourself) principle.</li>
          <li><strong>Clean Code & Separation of Concerns:</strong> Business logic can be separated from the component's UI logic. This makes the code cleaner and easier to understand.</li>
          <li><strong>Maintainability:</strong> Since the logic is in one place, it's much easier to modify or debug.</li>
      </ul>
      
      <h4>Example 1: <code>useFetch</code></h4>
      <p>Here is an example of a custom hook (<code>useFetch</code>) for fetching data:</p>
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
      
      <h4>Example 2: <code>useLocalStorage</code></h4>
      <p>This hook simplifies the task of saving and reading data from local storage.</p>
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
      <p>Custom Hooks are a powerful feature of React that make code more modular, readable, and maintainable.</p>
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

    
    