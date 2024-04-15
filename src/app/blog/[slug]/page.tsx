import type { Metadata, ResolvingMetadata } from "next";
import Hero from "./hero";
import HtmlParser from "./htmlparser";
import { notFound } from "next/navigation";
import Link from "next/link";

export const dynamicParams = false;

type PageProps = {
  params: {
    slug: string;
  };
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type BlogData = {
  title: string;
  description: string;
  slug: string;
  focusKeywords: string[];
  heroImage: {
    aiPrompt: string;
  };
  body: string;
  relatedBlogs: string[];
};

const arr = [
  {
    title: "Cracking the Python Interview: Essential Tips for Freshers",
    description:
      "Preparing for a Python interview as a fresher can be daunting. This comprehensive guide provides essential tips, common questions, and valuable resources to help you ace your Python interview and land your dream job.",
    slug: "python-interview-preparation-tips-for-freshers",
    focusKeywords: [
      "Python interview questions",
      "Python interview preparation",
      "Python fresher interview",
      "Python interview tips",
    ],
    heroImage: {
      aiPrompt:
        "A confident young professional holding a laptop with Python code on the screen, surrounded by Python programming books and resources, with a city skyline in the background.",
    },
    body: "<h1>Cracking the Python Interview: Essential Tips for Freshers</h1><p>As a fresher in the world of Python programming, preparing for your first interview can be an overwhelming experience. However, with the right approach and preparation, you can confidently showcase your skills and knowledge to potential employers. In this blog post, we'll provide you with essential tips and common questions to help you ace your Python interview and land your dream job.</p><h2>1. Master the Fundamentals</h2><p>To succeed in a Python interview, you must have a solid grasp of the language's fundamentals. Make sure you understand the following concepts:</p><ul><li>Data types (e.g., strings, integers, lists, dictionaries)</li><li>Control structures (e.g., if-else, loops)</li><li>Functions and modules</li><li>Object-oriented programming (OOP) principles</li><li>Exception handling</li></ul><p>Practice coding exercises and solve problems related to these topics to reinforce your understanding.</p><h2>2. Familiarize Yourself with Common Python Libraries</h2><p>Python boasts an extensive collection of libraries that simplify various tasks. Familiarize yourself with popular libraries such as:</p><ul><li>NumPy and Pandas for data manipulation and analysis</li><li>Matplotlib and Seaborn for data visualization</li><li>Flask and Django for web development</li><li>Scikit-learn for machine learning</li></ul><p>Having a basic understanding of these libraries and their use cases will demonstrate your practical knowledge of Python.</p><h2>3. Practice Coding Challenges</h2><p>Interviewers often assess your problem-solving skills by presenting coding challenges. To prepare, practice solving a variety of Python coding problems on platforms like:</p><ul><li>LeetCode</li><li>HackerRank</li><li>Project Euler</li></ul><p>Focus on understanding algorithms, data structures, and optimizing your code for efficiency and readability.</p><h2>4. Showcase Your Projects</h2><p>Demonstrating your hands-on experience with Python projects can set you apart from other candidates. Create a portfolio of your projects, including:</p><ul><li>Personal projects that showcase your creativity and initiative</li><li>Contributions to open-source projects</li><li>Academic projects or coursework</li></ul><p>Be prepared to discuss the challenges you faced, the solutions you implemented, and the lessons you learned during these projects.</p><h2>5. Prepare for Common Interview Questions</h2><p>While interview questions may vary, here are some common ones you can expect:</p><ul><li>What are the differences between Python 2 and Python 3?</li><li>Explain the concept of mutable and immutable objects in Python.</li><li>How do you handle exceptions in Python?</li><li>What is the purpose of the self keyword in Python?</li><li>Describe the difference between lists and tuples.</li></ul><p>Practice articulating your answers to these questions concisely and with relevant examples.</p><h2>6. Explore Python-Specific Interview Resources</h2><p>Take advantage of the numerous online resources available for Python interview preparation:</p><ul><li>Python-specific interview question repositories on GitHub</li><li>Online courses and tutorials focused on Python interviews</li><li>Books like 'Cracking the Coding Interview' and 'Elements of Programming Interviews in Python'</li></ul><p>Leverage these resources to expand your knowledge and gain insight into the interview process.</p><h2>7. Stay Up-to-Date with Python Trends</h2><p>Demonstrate your enthusiasm for Python by staying updated on the latest trends and developments in the Python community:</p><ul><li>Follow prominent Python blogs and newsletters</li><li>Attend Python conferences, meetups, or webinars</li><li>Engage with the Python community on forums and social media platforms</li></ul><p>Showing your active participation in the Python ecosystem can leave a positive impression on interviewers.</p><h2>Conclusion</h2><p>Preparing for a Python interview as a fresher requires dedication, practice, and a comprehensive understanding of the language's fundamentals. By mastering core concepts, familiarizing yourself with common libraries, practicing coding challenges, showcasing your projects, and staying updated with Python trends, you'll be well-equipped to impress interviewers and secure your desired Python role.</p><p>Remember, confidence is key. Trust in your abilities, communicate clearly, and don't hesitate to ask for clarification when needed. With the right preparation and mindset, you'll be ready to tackle any Python interview that comes your way. Good luck!</p>",
    relatedBlogs: [
      "10 Essential Python Libraries Every Developer Should Know",
      "Python vs. Java: Which Language Should You Learn First?",
      "Building a Portfolio of Python Projects to Impress Employers",
      "The Future of Python: Emerging Trends and Opportunities",
    ],
  },
  {
    title:
      "Mastering the JavaScript Interview: Tips and Strategies for Success",
    description:
      "Ace your next JavaScript interview with these essential tips and strategies. Learn how to prepare, showcase your skills, and impress potential employers as a fresher in the field.",
    slug: "mastering-the-javascript-interview-tips-and-strategies-for-success",
    focusKeywords: [
      "JavaScript interview",
      "interview tips",
      "interview strategies",
      "fresher interview",
      "web development interview",
    ],
    heroImage: {
      aiPrompt:
        "A confident young professional in an interview setting, with JavaScript code snippets and web development icons in the background.",
    },
    body: "<h1>Mastering the JavaScript Interview: Tips and Strategies for Success</h1><p>As a fresher in the world of web development, preparing for a JavaScript interview can be a daunting task. However, with the right strategies and preparation, you can showcase your skills and impress potential employers. In this blog post, we'll explore essential tips and techniques to help you ace your next JavaScript interview.</p><h2>1. Know the Fundamentals</h2><p>To succeed in a JavaScript interview, you must have a solid grasp of the language's fundamentals. Make sure you understand the following concepts:</p><ul><li>Variables and data types</li><li>Functions and scope</li><li>Objects and arrays</li><li>Control structures (if/else, loops)</li><li>DOM manipulation</li><li>Event handling</li></ul><p>Practice coding exercises and review documentation to reinforce your understanding of these core concepts.</p><h2>2. Familiarize Yourself with ES6+ Features</h2><p>JavaScript has evolved significantly with the introduction of ES6 (ECMAScript 2015) and subsequent updates. Familiarize yourself with the latest features and syntax, such as:</p><ul><li>Arrow functions</li><li>Template literals</li><li>Destructuring</li><li>Spread and rest operators</li><li>Promises and async/await</li><li>Modules (import/export)</li></ul><p>Demonstrating knowledge of these modern features will showcase your ability to write clean, efficient, and up-to-date code.</p><h2>3. Practice Problem-Solving</h2><p>Interviewers often present coding challenges to assess your problem-solving skills. To prepare, practice solving a variety of JavaScript problems, ranging from basic algorithms to more complex scenarios. Websites like LeetCode, HackerRank, and CodeWars offer a wide range of coding exercises to help you hone your skills.</p><p>When faced with a problem during the interview, take the time to understand the requirements, ask clarifying questions if needed, and break down the problem into smaller, manageable steps. Think out loud and explain your thought process to the interviewer.</p><h2>4. Showcase Your Projects</h2><p>As a fresher, you may not have extensive professional experience, but you can still impress interviewers with your personal projects. Build a portfolio of JavaScript projects that demonstrate your skills and creativity. Consider creating projects that showcase your understanding of:</p><ul><li>Front-end frameworks (e.g., React, Angular, Vue.js)</li><li>Server-side JavaScript (Node.js)</li><li>API integration</li><li>Responsive design</li><li>Web performance optimization</li></ul><p>Be prepared to discuss your projects in detail, explaining your design choices, challenges faced, and how you overcame them.</p><h2>5. Understand JavaScript's Quirks</h2><p>JavaScript has its fair share of quirks and gotchas. Familiarize yourself with concepts like hoisting, closures, and the 'this' keyword. Understand how JavaScript's asynchronous nature works, including callbacks, promises, and async/await.</p><p>Interviewers may ask questions to test your understanding of these concepts, so be prepared to explain them clearly and provide examples of how you've used them in your projects.</p><h2>6. Stay Up-to-Date with Industry Trends</h2><p>The JavaScript ecosystem is constantly evolving, with new frameworks, libraries, and tools emerging regularly. Stay informed about the latest trends and best practices in the industry. Follow popular JavaScript blogs, attend webinars, and participate in online communities to expand your knowledge.</p><p>Demonstrating awareness of current trends and expressing enthusiasm for learning new technologies will show interviewers that you are proactive and passionate about your craft.</p><h2>7. Practice Communication Skills</h2><p>In addition to technical skills, interviewers also assess your ability to communicate effectively. Practice explaining technical concepts in a clear and concise manner. Be prepared to discuss your thought process, design decisions, and problem-solving approach.</p><p>If you're interviewing remotely, ensure that you have a stable internet connection, a quiet environment, and a professional setup. Test your audio and video settings beforehand to avoid technical issues during the interview.</p><h2>8. Ask Thoughtful Questions</h2><p>At the end of the interview, you'll often have the opportunity to ask questions. Use this chance to demonstrate your interest in the company and the role. Prepare thoughtful questions about the team's projects, the company's technology stack, and opportunities for growth and learning.</p><p>Asking insightful questions not only shows your enthusiasm but also helps you determine if the company is a good fit for your career goals.</p><h2>Conclusion</h2><p>Mastering the JavaScript interview as a fresher requires a combination of technical knowledge, problem-solving skills, and effective communication. By focusing on the fundamentals, staying up-to-date with industry trends, and showcasing your projects, you can demonstrate your potential and stand out from other candidates.</p><p>Remember, the interview process is not just about impressing the employer; it's also an opportunity for you to assess if the company aligns with your values and career aspirations. Approach the interview with confidence, enthusiasm, and a willingness to learn, and you'll be well on your way to landing your dream JavaScript developer role.</p>",
    relatedBlogs: [
      "10 Essential JavaScript Concepts Every Developer Should Know",
      "Building an Impressive Portfolio as a Fresher Web Developer",
      "The Future of JavaScript: Trends and Predictions",
      "Navigating the Job Market as a Fresher JavaScript Developer",
      "JavaScript Frameworks: Choosing the Right One for Your Project",
    ],
  },
  {
    title: "Acing Your Technical Interview as a Fresher: Tips and Strategies",
    description:
      "Preparing for a technical interview as a fresher can be daunting. This blog post provides actionable tips and strategies to help you succeed, including what to study, practice problems, mock interviews, and more. Boost your confidence and land your dream job!",
    slug: "acing-technical-interviews-for-freshers",
    focusKeywords: [
      "technical interview",
      "fresher",
      "interview preparation",
      "coding interview",
      "interview tips",
    ],
    heroImage: {
      aiPrompt:
        "A confident young professional in business attire shaking hands with an interviewer, with a whiteboard showing code snippets in the background.",
    },
    body: "<h1>Acing Your Technical Interview as a Fresher: Tips and Strategies</h1><p>As a fresher entering the job market, preparing for technical interviews can feel overwhelming. However, with the right strategies and mindset, you can boost your confidence and increase your chances of landing your dream job. In this blog post, we'll cover essential tips to help you succeed in your technical interviews.</p><h2>1. Know What to Expect</h2><p>Technical interviews for freshers typically focus on these areas:</p><ul><li>Computer Science Fundamentals (Data Structures, Algorithms, etc.)</li><li>Coding Skills (Problem-Solving, Code Quality, etc.)</li><li>Specific Programming Languages/Technologies Relevant to the Role</li><li>Analytical and Logical Thinking Abilities</li><li>Communication Skills and Culture Fit</li></ul><p>Understanding the interview format and topics allows you to prepare effectively.</p><h2>2. Brush Up on CS Fundamentals</h2><p>A strong grasp of computer science fundamentals is crucial. Review key topics such as:</p><ul><li>Data Structures (Arrays, Linked Lists, Trees, Graphs, etc.)</li><li>Algorithms (Searching, Sorting, Dynamic Programming, etc.)</li><li>Time and Space Complexity (Big O Notation)</li><li>Object-Oriented Programming Concepts</li><li>Databases and SQL</li></ul><p>Use resources like textbooks, online courses, and coding platforms to refresh your knowledge.</p><h2>3. Practice, Practice, Practice</h2><p>The best way to prepare for coding interviews is through deliberate practice. Solve a wide variety of problems on platforms like LeetCode, HackerRank, or CodeChef. Start with easy problems and gradually tackle medium and hard ones. Focus on:</p><ul><li>Understanding the problem statement clearly</li><li>Developing a logical approach before coding</li><li>Writing clean, efficient, and well-commented code</li><li>Testing your solution with sample inputs</li><li>Analyzing time and space complexity</li></ul><p>Consistent practice will sharpen your problem-solving skills and help you think like a programmer.</p><h2>4. Familiarize Yourself with Your Language/Technology Stack</h2><p>Gain an in-depth understanding of the programming languages and technologies required for the role. Practice coding in those languages, understand their syntax, built-in functions, and best practices. Explore commonly used libraries or frameworks.</p><p>If you have projects or coursework in those technologies, review them thoroughly. Be prepared to discuss your experience and knowledge confidently.</p><h2>5. Utilize Mock Interviews</h2><p>Mock interviews are a valuable tool to get comfortable with the interview process. Practice solving problems while explaining your thought process out loud. You can:</p><ul><li>Find a coding buddy and take turns interviewing each other</li><li>Use online mock interview platforms like Pramp or InterviewBit</li><li>Record yourself solving problems and analyze your performance</li></ul><p>Mock interviews help you identify areas for improvement and build confidence.</p><h2>6. Communicate Your Thought Process</h2><p>Interviewers are interested not just in your solution, but how you approach the problem. Communicate your thought process clearly:</p><ul><li>Think out loud as you analyze the problem</li><li>Discuss potential approaches and their trade-offs</li><li>Explain your chosen approach step-by-step</li><li>Seek clarification if needed</li></ul><p>Clear communication demonstrates your analytical thinking and problem-solving abilities.</p><h2>7. Prepare for Behavioral Questions</h2><p>In addition to technical skills, interviewers assess your soft skills and culture fit. Prepare for common behavioral questions about your:</p><ul><li>Background and interests</li><li>Projects or internships</li><li>Teamwork and leadership experiences</li><li>Approach to challenges or failures</li></ul><p>Use the STAR (Situation, Task, Action, Result) method to structure your responses. Highlight your strengths, enthusiasm, and willingness to learn.</p><h2>8. Take Care of Yourself</h2><p>Interview preparation can be stressful, so prioritize your well-being:</p><ul><li>Get sufficient sleep to stay sharp and focused</li><li>Exercise regularly to manage stress and boost energy levels</li><li>Practice relaxation techniques like deep breathing or meditation</li><li>Maintain a balanced schedule with breaks and leisure activities</li></ul><p>Remember, a positive and calm mindset can make a significant difference in your performance.</p><h2>9. Embrace the Learning Experience</h2><p>Approach interviews as learning opportunities rather than high-stakes evaluations. Each interview, whether successful or not, provides valuable lessons and feedback. Embrace the process as a chance to grow, both technically and professionally.</p><p>Celebrate your progress and maintain a growth mindset. With consistent effort and the right strategies, you'll be well-prepared to ace your technical interviews and launch your career as a fresher.</p><h3>Conclusion</h3><p>Technical interviews may seem challenging, but with focused preparation and the right approach, you can set yourself up for success. Brush up on fundamentals, practice regularly, communicate effectively, and take care of yourself. Embrace the learning experience, stay positive, and let your skills and enthusiasm shine through. Good luck with your interviews!</p>",
    relatedBlogs: [
      "The Ultimate Guide to Cracking Coding Interviews",
      "Top 10 Algorithm Concepts for Coding Interviews",
      "How to Showcase Your Projects in Technical Interviews",
      "Mastering the Art of Whiteboard Coding",
      "Common Mistakes to Avoid in Technical Interviews",
    ],
  },
  {
    title:
      "The Ultimate Guide to Preparing for a Python Programming Interview as a Fresher",
    description:
      "Learn how to ace your Python programming interview as a fresher with these essential tips, resources, and practice problems. Boost your confidence and land your dream job!",
    slug: "python-programming-interview-guide-for-freshers",
    focusKeywords: [
      "Python programming interview",
      "Python interview questions",
      "Python interview preparation",
      "Python fresher interview",
      "Python coding interview",
    ],
    heroImage: {
      aiPrompt:
        "A confident young professional holding a laptop with Python code on the screen, surrounded by Python programming books and resources, with a city skyline in the background.",
    },
    body: "<h1>The Ultimate Guide to Preparing for a Python Programming Interview as a Fresher</h1><p>As a fresher in the world of Python programming, preparing for your first interview can be a daunting task. However, with the right approach and resources, you can boost your confidence and increase your chances of landing your dream job. In this comprehensive guide, we'll walk you through the essential steps to ace your Python programming interview.</p><h2>1. Master the Fundamentals</h2><p>To excel in your Python programming interview, you must have a solid grasp of the language's fundamentals. Ensure that you understand the following concepts:</p><ul><li>Data types (integers, floats, strings, lists, tuples, dictionaries, sets)</li><li>Control structures (if-else, for loops, while loops)</li><li>Functions and modules</li><li>Object-oriented programming (classes, objects, inheritance, polymorphism)</li><li>Exception handling</li><li>File handling</li></ul><p>Practice coding exercises that cover these fundamental concepts to reinforce your understanding.</p><h2>2. Familiarize Yourself with Common Python Libraries</h2><p>Python boasts an extensive collection of libraries that simplify complex tasks. Familiarize yourself with the following commonly used libraries:</p><ul><li>NumPy: For numerical computing</li><li>Pandas: For data manipulation and analysis</li><li>Matplotlib: For data visualization</li><li>Scikit-learn: For machine learning</li><li>Django and Flask: For web development</li></ul><p>Having a basic understanding of these libraries will demonstrate your versatility and adaptability to the interviewer.</p><h2>3. Practice Coding Problems</h2><p>The best way to prepare for a Python programming interview is by solving coding problems. Websites like LeetCode, HackerRank, and Project Euler offer a wide range of problems that test your problem-solving skills and Python proficiency. Start with easy problems and gradually progress to more challenging ones. Focus on understanding the problem statement, developing an efficient algorithm, and writing clean, readable code.</p><h2>4. Understand Data Structures and Algorithms</h2><p>Data structures and algorithms form the backbone of programming. As a fresher, you should have a good understanding of the following data structures:</p><ul><li>Arrays</li><li>Linked Lists</li><li>Stacks and Queues</li><li>Trees (Binary Trees, Binary Search Trees)</li><li>Graphs</li><li>Hash Tables</li></ul><p>Additionally, familiarize yourself with common algorithms such as:</p><ul><li>Searching (Linear Search, Binary Search)</li><li>Sorting (Bubble Sort, Insertion Sort, Merge Sort, Quick Sort)</li><li>Recursion</li><li>Dynamic Programming</li></ul><p>Practice implementing these data structures and algorithms in Python to solidify your understanding.</p><h2>5. Review Python-Specific Interview Questions</h2><p>Apart from coding problems, interviewers may ask Python-specific questions to gauge your knowledge of the language. Some common topics include:</p><ul><li>What are the differences between Python 2 and Python 3?</li><li>Explain the concept of list comprehension in Python.</li><li>What is the purpose of the `self` keyword in Python?</li><li>How does Python manage memory?</li><li>What are decorators in Python, and how do they work?</li></ul><p>Research and prepare concise, clear answers to these questions to demonstrate your Python expertise.</p><h2>6. Work on Projects</h2><p>Practical experience is highly valued by employers. Develop a few Python projects that showcase your skills and creativity. Consider building a web scraper, a simple game, a data analysis tool, or a machine learning model. These projects will give you talking points during your interview and demonstrate your ability to apply your knowledge to real-world scenarios.</p><h2>7. Prepare for Behavioral Questions</h2><p>In addition to technical skills, interviewers also assess your soft skills and personality. Prepare for common behavioral questions such as:</p><ul><li>Tell me about yourself.</li><li>What are your strengths and weaknesses?</li><li>Why do you want to work for our company?</li><li>Describe a time when you faced a challenge and how you overcame it.</li><li>How do you handle stress and tight deadlines?</li></ul><p>Practice answering these questions concisely and confidently, highlighting your relevant experiences and skills.</p><h2>8. Stay Calm and Confident</h2><p>During the interview, stay calm and composed. Remember that the interviewer wants you to succeed. If you encounter a challenging question, take a moment to think and break down the problem into smaller parts. Communicate your thought process clearly, and don't hesitate to ask for clarification if needed. Maintain a positive attitude and show enthusiasm for the opportunity to learn and grow.</p><h2>Conclusion</h2><p>Preparing for a Python programming interview as a fresher requires dedication, practice, and a systematic approach. By mastering the fundamentals, familiarizing yourself with common libraries, practicing coding problems, understanding data structures and algorithms, reviewing Python-specific questions, working on projects, and preparing for behavioral questions, you'll be well-equipped to ace your interview. Remember to stay calm, confident, and enthusiastic throughout the process. Good luck with your Python programming interview!</p>",
    relatedBlogs: [
      "10 JavaScript Coding Challenges for Interview Prep",
      "Understanding Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
      "5 JavaScript Best Practices for Writing Clean and Maintainable Code",
      "Mastering the JavaScript Interview: Tips and Strategies for Success",
      "The Evolution of JavaScript: From ES6 to ESNext",
    ],
  },
  {
    title:
      "7 Essential Technical Interview Questions on JavaScript for Freshers",
    description:
      "Ace your next JavaScript technical interview with these 7 essential questions covering core concepts like hoisting, closures, 'this' keyword, and more. Perfect prep for freshers and early-career developers.",
    slug: "7-essential-javascript-interview-questions-for-freshers",
    focusKeywords: [
      "JavaScript interview questions",
      "JavaScript technical interview",
      "JavaScript questions for freshers",
      "JavaScript core concepts",
      "JavaScript interview prep",
    ],
    heroImage: {
      aiPrompt:
        "Create an image featuring JavaScript code snippets and interview-related icons or graphics. Use a color scheme of yellows and blues. Include the title '7 Essential JavaScript Interview Questions for Freshers'.",
    },
    body: "<h1>7 Essential Technical Interview Questions on JavaScript for Freshers</h1><p>As a fresher or early-career developer, preparing for technical interviews can be daunting, especially when it comes to JavaScript. To help you ace your next interview, we've compiled a list of 7 essential JavaScript questions that cover core concepts and are commonly asked in interviews.</p><h2>1. Explain hoisting in JavaScript</h2><p>Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that regardless of where variables and functions are declared in the code, they are treated as if they are declared at the beginning of their scope.</p><p>However, it's important to note that only the declarations are hoisted, not the initializations. Let's look at an example:</p><code>console.log(x); // Output: undefined var x = 5; console.log(x); // Output: 5</code><p>In this case, the variable <code>x</code> is hoisted to the top of its scope, but its initialization <code>x = 5</code> is not. Therefore, when we try to log <code>x</code> before its initialization, we get <code>undefined</code>.</p><h2>2. What are closures in JavaScript?</h2><p>A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. In other words, a closure allows a function to access variables from an outer function that has already executed.</p><p>Here's an example:</p><code>function outerFunc(x) {   return function innerFunc(y) {     return x + y;   }; }  const closure = outerFunc(5); console.log(closure(3)); // Output: 8</code><p>In this example, <code>innerFunc</code> has access to the <code>x</code> variable from <code>outerFunc</code>, even after <code>outerFunc</code> has finished executing. The combination of <code>innerFunc</code> and its access to <code>x</code> forms a closure.</p><h2>3. What is the difference between <code>==</code> and <code>===</code> in JavaScript?</h2><p>Both <code>==</code> and <code>===</code> are comparison operators in JavaScript, but they behave differently:</p><ul><li><code>==</code> (loose equality): Compares values for equality after performing type coercion if necessary. For example, <code>5 == '5'</code> evaluates to <code>true</code> because the string <code>'5'</code> is coerced to a number before the comparison.</li><li><code>===</code> (strict equality): Compares both values and types for equality without performing type coercion. For example, <code>5 === '5'</code> evaluates to <code>false</code> because the types (number and string) are different.</li></ul><p>It's generally recommended to use <code>===</code> for comparisons to avoid unexpected type coercion behavior.</p><h2>4. Explain the <code>this</code> keyword in JavaScript</h2><p>The <code>this</code> keyword in JavaScript refers to the object that is currently executing the code. The value of <code>this</code> depends on how a function is called or how it is defined.</p><p>Here are some common scenarios:</p><ul><li>In global scope or a regular function call, <code>this</code> refers to the global object (e.g., <code>window</code> in browsers).</li><li>In a method call, <code>this</code> refers to the object that the method is called on.</li><li>In a constructor function, <code>this</code> refers to the newly created instance.</li><li>When using <code>call</code>, <code>apply</code>, or <code>bind</code>, <code>this</code> is explicitly set to the provided object.</li></ul><p>Understanding how <code>this</code> behaves in different contexts is crucial for writing correct and maintainable JavaScript code.</p><h2>5. What is the purpose of the <code>let</code> and <code>const</code> keywords in JavaScript?</h2><p>The <code>let</code> and <code>const</code> keywords were introduced in ES6 (ECMAScript 2015) to provide block-scoped variable declarations.</p><ul><li><code>let</code>: Declares a block-scoped variable that can be reassigned. It is useful when you need to reassign a variable within a specific block.</li><li><code>const</code>: Declares a block-scoped variable that cannot be reassigned. It is used for variables that should remain constant throughout their lifetime.</li></ul><p>Both <code>let</code> and <code>const</code> provide better scoping and help avoid common pitfalls associated with the <code>var</code> keyword, such as hoisting and global scope pollution.</p><h2>6. Explain the concept of prototype inheritance in JavaScript</h2><p>In JavaScript, objects can inherit properties and methods from other objects through the prototype chain. Each object has an internal <code>[[Prototype]]</code> property that points to its prototype object.</p><p>When you access a property or method on an object, JavaScript first looks for it on the object itself. If it's not found, it looks for it on the object's prototype, then the prototype's prototype, and so on, until it reaches the end of the prototype chain (usually the <code>Object.prototype</code>).</p><p>Here's an example of prototype inheritance:</p><code>function Animal(name) {   this.name = name; }  Animal.prototype.sayHello = function() {   console.log('Hello, my name is ' + this.name); };  function Dog(name) {   Animal.call(this, name); }  Dog.prototype = Object.create(Animal.prototype); Dog.prototype.constructor = Dog;  const dog = new Dog('Buddy'); dog.sayHello(); // Output: Hello, my name is Buddy</code><p>In this example, the <code>Dog</code> constructor inherits from the <code>Animal</code> constructor using <code>Object.create()</code>. The <code>dog</code> instance can access the <code>sayHello</code> method defined on <code>Animal.prototype</code> through the prototype chain.</p><h2>7. What is the event loop in JavaScript?</h2><p>The event loop is a mechanism in JavaScript that handles the execution of code, collection and processing of events, and execution of queued sub-tasks. It allows JavaScript to perform non-blocking I/O operations despite being single-threaded.</p><p>Here's a simplified explanation of how the event loop works:</p><ol><li>The JavaScript engine executes the code in the call stack synchronously, one task at a time.</li><li>When an asynchronous operation is encountered (e.g., a timer, an HTTP request), it is offloaded to the browser's Web API.</li><li>The Web API handles the asynchronous operation and registers a callback function to be executed when the operation is completed.</li><li>The callback function is then pushed into the callback queue (also known as the task queue).</li><li>The event loop continuously checks if the call stack is empty. If it is, it takes the first callback function from the callback queue and pushes it onto the call stack for execution.</li><li>The process repeats, ensuring that the JavaScript engine is never blocked and can handle asynchronous operations efficiently.</li></ol><p>Understanding the event loop is essential for writing efficient and non-blocking JavaScript code, especially when dealing with asynchronous operations like timers, promises, and network requests.</p><h2>Conclusion</h2><p>These 7 essential JavaScript interview questions cover a range of core concepts that every fresher or early-career developer should be familiar with. By understanding hoisting, closures, the <code>this</code> keyword, comparison operators, block-scoped variables, prototype inheritance, and the event loop, you'll be well-prepared to tackle technical interviews and demonstrate your JavaScript knowledge.</p><p>Remember, practice is key to mastering these concepts. Keep coding, exploring, and learning to deepen your understanding of JavaScript and its intricacies. Good luck with your interviews!</p>",
    relatedBlogs: [
      "10 JavaScript Coding Challenges for Interview Prep",
      "Understanding Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
      "5 JavaScript Best Practices for Writing Clean and Maintainable Code",
      "Mastering the JavaScript Interview: Tips and Strategies for Success",
      "The Evolution of JavaScript: From ES6 to ESNext",
    ],
  },
];

// export async function generateStaticParams() {
//   const slugs = await fetch(
//     "https://graphql.contentful.com/content/v1/spaces/f7l5sefbt57k/environments/master",
//     {
//       method: "POST",
//       headers: contentfulHeaders,
//       body: JSON.stringify({
//         query: `query {
//           blogPageTemplateCollection{
//             items{
//               slug
//             }
//           }
//         }`,
//       }),
//       next: {
//         revalidate: 60 * 60,
//       },
//     }
//   ).then((res) => res.json());

//   return slugs.data.blogPageTemplateCollection.items.map((slug: any) => ({
//     slug: slug.slug,
//   }));
// }

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const response = await fetch(
  //   "https://graphql.contentful.com/content/v1/spaces/f7l5sefbt57k/environments/master",
  //   {
  //     method: "POST",
  //     headers: contentfulHeaders,
  //     body: JSON.stringify({
  //       query: `query {
  //         blogPageTemplateCollection(where: {
  //           slug: "${params.slug}" }){
  //           items{
  //             metaTitle
  //             metaDescription
  //             author
  //             publishedDate
  //             keywords
  //             heroImage{
  //               height
  //               width
  //               url
  //             }
  //           }
  //         }
  //       }`,
  //     }),
  //   }
  // ).then((res) => res.json());

  const result = arr.find((e) => e.slug === params.slug) || null;

  return {
    title: result?.title,
    description: result?.description,
    openGraph: {
      publishedTime: "2024-04-06T00:00:00.000Z",
      type: "article",
    },
    keywords: result?.focusKeywords,
    // authors: {
    //   name: result.,
    // },
  };
}

export async function getBlogData(slug: string) {
  const result = arr.find((e) => e.slug === slug);

  return result;
}

export default async function Home({ params: { slug } }: PageProps) {
  const item = await getBlogData(slug);

  if (!item) return notFound();

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title={item.title}
        desc={item.description}
        heroImage={{
          url: "https://i.ibb.co/dWZMSKJ/dsa.webp",
          description: item.heroImage.aiPrompt,
        }}
      />

      <div className="max-w-lg md:max-w-3xl m-auto px-8 lg:px-5 body">
        <HtmlParser body={item.body} />
      </div>

      <div className="py-10 m-auto px-8 lg:px-5 grid gap-4 max-w-lg md:max-w-3xl">
        <span className="text-2xl max-md:text-xl font-bold break-words">
          Share Article
        </span>
        <section className="md:py-2 flex gap-5">
          <Link
            target="_blank"
            href={
              "https://api.whatsapp.com/send?text=Exploring the coding kingdom - 30DC Blog https://30dayscoding.com/  "
            }
            title={"Share via Whatsapp"}
          >
            <svg
              className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </Link>

          <Link
            href={
              "mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.website.com."
            }
            title={"Share via Mail"}
          >
            <svg
              className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </Link>

          <Link
            href={"https://www.youtube.com/channel/UCdu8HnchmMbDqbbC4GdPrjw"}
            title={"Copy Link"}
          >
            <svg
              className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
            </svg>
          </Link>

          <Link href={"https://twitter.com/30dayscoding"} title={"Share via X"}>
            <svg
              className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Link>
        </section>
        <hr className="border-gray-500 my-3" />
        <span className="text-2xl max-md:text-xl font-bold break-words">
          Latest Blogs
        </span>
        <div className="flex flex-col gap-3">
          {arr.map(({ title, slug }, i) => (
            <Link
              key={i}
              href={`/blog/${slug}`}
              className="flex items-center gap-2"
            >
              <div className="bg-second rounded-xl w-32 h-20 shrink-0"></div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase text-muted-foreground font-bold">
                  Press Release
                </span>
                <span className="line-clamp-3">{title}</span>
                <span className="text-xs uppercase text-muted-foreground font-bold">
                  26 March 2024
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
