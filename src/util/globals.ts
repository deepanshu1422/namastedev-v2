import { Topics } from "@/app/(guide)/interview/[topic]/page";

export const mentorship = {
  price: 8999,
  ogPrice: 16999,
  discount: 60,
  link: "https://rzp.io/l/kZPObNXZ",
};

export const dsa = {
  price: 999,
  ogPrice: 2999,
  discount: 40,
  link: "https://rzp.io/l/SyV8Ft2WF",
};

export const community = {
  price: 149,
  ogPrice: 599,
  discount: 70,
  link: "https://nas.io/30dc-challenges-n-hackathons/home",
};

export const interviewQuestions = [
  {
    title: "JavaScript",
    slug: "javascript",
    description:
      "Crack your JavaScript interview with ease! Explore our curated list of JavaScript interview questions covering ES6+, DOM manipulation, async programming, and more, with detailed answers.",
    imgSrc: "https://img.icons8.com/?size=500&id=PXTY4q2Sq2lG&format=png&color=000000",
    interviewQuestions: [
      {
        question:
          "What is the difference between '==' and '===' in JavaScript?",
        answer:
          "'==' is the equality operator that compares values after performing type coercion if necessary. '===' is the strict equality operator that compares both value and type without performing type coercion.",
      },
      {
        "question": "What is the difference between `let` and `const`?",
        "answer": "`let` allows you to declare variables that can be reassigned, while `const` is used for variables that cannot be reassigned after initialization. Both are block-scoped."
      },
      {
        "question": "What is the purpose of the `Array.prototype.reduce()` method?",
        "answer": "The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value. It is often used to accumulate values or transform arrays."
      },
      {
        "question": "What is the difference between `null` and `undefined`?",
        "answer": "`undefined` means a variable has been declared but not assigned a value, while `null` is an intentional absence of any object value."
      },
      {
        "question": "What is the difference between `call()`, `apply()`, and `bind()`?",
        "answer": "`call()` and `apply()` invoke a function immediately with a specified `this` value and arguments. `call()` takes arguments individually, while `apply()` takes them as an array. `bind()` returns a new function with a bound `this` value, but does not invoke it immediately."
      },
      {
        "question": "What is the difference between `slice()` and `splice()`?",
        "answer": "`slice()` returns a shallow copy of a portion of an array without modifying the original array. `splice()` changes the contents of an array by removing, replacing, or adding elements."
      },
      {
        "question": "What is the purpose of the `new` keyword?",
        "answer": "The `new` keyword creates an instance of a user-defined object type or a built-in constructor function (e.g., `Array`, `Date`). It creates a new object and sets the prototype of the object to the constructor's prototype."
      },
      {
        "question": "What is the difference between `Object.keys()` and `Object.getOwnPropertyNames()`?",
        "answer": "`Object.keys()` returns an array of an object's own enumerable property names. `Object.getOwnPropertyNames()` returns an array of all own property names, including non-enumerable ones."
      },
      {
        "question": "What is the difference between `==` and `Object.is()`?",
        "answer": "`==` performs type coercion before comparison, while `Object.is()` does not. `Object.is()` also treats `NaN` and `-0` differently (`Object.is(NaN, NaN)` is `true`, and `Object.is(-0, 0)` is `false`)."
      },
      {
        "question": "What is the purpose of the `Symbol` data type?",
        "answer": "`Symbol` is a primitive data type used to create unique and immutable identifiers. It is often used as object property keys to avoid naming collisions."
      },
      {
        "question": "What is the difference between `async/await` and Promises?",
        "answer": "`async/await` is syntactic sugar built on top of Promises, making asynchronous code look more like synchronous code. It simplifies error handling and chaining compared to raw Promises."
      },
      {
        "question": "What is the difference between `for...in` and `for...of` loops?",
        "answer": "`for...in` iterates over enumerable property names of an object, including inherited ones. `for...of` iterates over iterable objects (e.g., arrays, strings) and provides their values."
      },
      {
        "question": "What is the purpose of the `Proxy` object?",
        "answer": "The `Proxy` object allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration) on an object. It is often used for validation, logging, or interception."
      },
      {
        "question": "What is the difference between `setTimeout()` and `setInterval()`?",
        "answer": "`setTimeout()` executes a function once after a specified delay. `setInterval()` repeatedly executes a function at specified intervals until it is cleared."
      },
      {
        "question": "What is the purpose of the `WeakMap` and `WeakSet` objects?",
        "answer": "`WeakMap` and `WeakSet` are collections that hold weak references to their keys or values. They allow garbage collection of unused objects, preventing memory leaks."
      },
      {
        "question": "What is the difference between `JSON.stringify()` and `JSON.parse()`?",
        "answer": "`JSON.stringify()` converts a JavaScript object or value to a JSON string. `JSON.parse()` converts a JSON string back into a JavaScript object or value."
      },
      {
        "question": "What is the purpose of the `Array.prototype.flat()` method?",
        "answer": "The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It is useful for flattening nested arrays."
      },
      {
        "question": "What is the difference between `localStorage` and `sessionStorage`?",
        "answer": "`localStorage` stores data with no expiration time, persisting even after the browser is closed. `sessionStorage` stores data only for the duration of the page session, clearing when the tab or browser is closed."
      },
      {
        "question": "What is the purpose of the `fetch()` API?",
        "answer": "The `fetch()` API is used to make network requests (e.g., HTTP requests) and handle responses. It returns a Promise that resolves to the `Response` object representing the response to the request."
      },
      {
        "question": "What is the difference between `class` and `prototype` in JavaScript?",
        "answer": "`class` is syntactic sugar for creating constructor functions and managing inheritance in a more intuitive way. `prototype` is the underlying mechanism for inheritance in JavaScript, where objects inherit properties and methods from their prototype."
      },
      {
        "question": "What is the purpose of the `Intl` object?",
        "answer": "The `Intl` object provides language-sensitive string comparison, number formatting, and date and time formatting. It is used for internationalization and localization in JavaScript."
      },
      {
        "question": "Explain closures in JavaScript.",
        "answer":
          "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. It allows for data privacy and the creation of function factories.",
      },
      {
        "question": "How does prototypal inheritance work?",
        "answer":
          "Prototypal inheritance is a method by which an object can inherit properties and methods from another object. Objects have an internal link to another object called its prototype. When trying to access a property that does not exist in an object, JavaScript will look for it in the prototype chain.",
      },
      {
        "question": "What is the event loop in JavaScript?",
        "answer":
          "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and callback queue, pushing callbacks from the queue to the stack when it's empty.",
      },
      {
        "question": "Explain the concept of hoisting.",
        "answer":
          "Hoisting is JavaScript's default behavior of moving declarations to the top of their respective scopes during compilation. This means variable and function declarations are processed before any code is executed, allowing them to be used before they are declared in the source code.",
      },
      {
        "question": "What are the differences between var, let, and const?",
        "answer":
          "var is function-scoped and can be redeclared and updated. let is block-scoped, can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared.",
      },
      {
        "question": "How does the 'this' keyword work in JavaScript?",
        "answer":
          "The value of 'this' depends on how a function is called. In a method, 'this' refers to the object. In a regular function, it refers to the global object (or undefined in strict mode). In an arrow function, it retains the 'this' value of the enclosing lexical scope.",
      },
      {
        "question": "What is the purpose of the 'use strict' directive?",
        "answer":
          "'use strict' enables strict mode in JavaScript, which catches common coding errors and prevents the use of certain error-prone features. It helps write cleaner and more secure code.",
      },
      {
        "question":
          "Explain the difference between synchronous and asynchronous code in JavaScript.",
        "answer":
          "Synchronous code executes sequentially, blocking further execution until the current operation completes. Asynchronous code allows operations to run in the background without blocking the main thread, using callbacks, Promises, or async/await to handle results.",
      },
      {
        "question": "What are Promises and how do they work?",
        "answer":
          "Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner way to handle asynchronous operations compared to callbacks. Promises have three states: pending, fulfilled, or rejected.",
      },
      {
        "question": "How does the async/await syntax work?",
        "answer":
          "async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. An async function always returns a Promise, and the await keyword can be used inside it to wait for a Promise to resolve before continuing execution.",
      },
      {
        "question": "Explain the concept of callback functions.",
        "answer":
          "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. They are often used to continue code execution after an asynchronous operation has completed.",
      },
      {
        "question": "What is the difference between forEach() and map()?",
        "answer":
          "forEach() iterates over an array and executes a provided function for each element, but it doesn't return anything. map() creates a new array with the results of calling a provided function on every element in the calling array.",
      },
      {
        "question": "How do you handle errors in JavaScript?",
        "answer":
          "Errors can be handled using try...catch blocks. The try block contains the code that might throw an error, and the catch block handles the error. Finally block can be used to execute code regardless of the result. Custom errors can be created using the Error constructor.",
      },
      {
        "question": "What is the purpose of the bind() method?",
        "answer":
          "The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value. It's often used to maintain the correct context for 'this' when methods are passed as callbacks.",
      },
      {
        "question": "Explain the concept of event bubbling and capturing.",
        "answer":
          "Event bubbling is the process where an event triggers on the deepest target element, then bubbles up through its ancestors. Event capturing is the opposite, where the event is first captured by the outermost element and propagated to the inner elements.",
      },
      {
        "question":
          "What is memoization and how can it be implemented in JavaScript?",
        "answer":
          "Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It can be implemented using closures and objects to cache results.",
      },
      {
        "question":
          "What are arrow functions and how do they differ from regular functions?",
        "answer":
          "Arrow functions provide a concise syntax for writing function expressions. They don't have their own 'this', arguments, super, or new.target. They are always anonymous and can't be used as constructors.",
      },
      {
        "question": "Explain the concept of debouncing and throttling.",
        "answer":
          "Debouncing and throttling are techniques to control how many times we allow a function to be executed over time. Debouncing ensures that a function is only executed after a certain amount of time has passed since its last invocation. Throttling ensures that a function is called at most once in a specified time period.",
      },
      {
        "question":
          "What is the difference between Object.create() and the constructor pattern?",
        "answer":
          "Object.create() creates a new object with the specified prototype object and properties. The constructor pattern uses a function as a blueprint to create objects with the same properties and methods.",
      },
      {
        "question": "How does the module pattern work in JavaScript?",
        "answer":
          "The module pattern uses closures to create private and public methods and variables, providing a way of encapsulating functionality to protect it from the global scope. It helps in organizing code and creating self-contained, reusable pieces of code.",
      },
      {
        "question": "What are generator functions and how are they used?",
        "answer":
          "Generator functions allow you to define an iterative algorithm by writing a single function whose execution is not continuous. They are written using the function* syntax and use yield to pause and resume execution. They're useful for working with iterators and implementing asynchronous programming patterns.",
      },
      {
        "question": "Explain the concept of currying in JavaScript.",
        "answer":
          "Currying is the technique of translating a function that takes multiple arguments into a sequence of functions, each with a single argument. It allows you to partially apply a function, creating new functions with some of the arguments already set.",
      },
      {
        "question": "What is the difference between `deep copy` and `shallow copy` in JavaScript?",
        "answer": "A shallow copy creates a new object but copies only the references to nested objects, meaning changes to nested objects affect both the original and the copy. A deep copy creates a completely independent copy of the original object and all nested objects, ensuring no shared references."
      },
      {
        "question": "What is the purpose of the `void` operator in JavaScript?",
        "answer": "The `void` operator evaluates an expression and returns `undefined`. It is often used to prevent navigation when clicking on links (e.g., `javascript:void(0)`) or to ensure an expression has no return value."
      },
      {
        "question": "What is the difference between `Object.freeze()` and `Object.seal()`?",
        "answer": "`Object.freeze()` makes an object immutable, preventing new properties from being added, existing properties from being removed, or existing properties from being modified. `Object.seal()` prevents new properties from being added and existing properties from being removed, but allows modification of existing properties."
      },
      {
        "question": "What is the purpose of the `Array.prototype.some()` method?",
        "answer": "The `some()` method tests whether at least one element in the array passes the provided test function. It returns `true` if any element satisfies the condition, otherwise `false`."
      },
      {
        "question": "What is the difference between `Event.preventDefault()` and `Event.stopPropagation()`?",
        "answer": "`Event.preventDefault()` prevents the default behavior of an event (e.g., preventing a form submission). `Event.stopPropagation()` stops the event from bubbling up the DOM tree, preventing parent elements from handling the event."
      },
      {
        "question": "What is the purpose of the `Array.prototype.every()` method?",
        "answer": "The `every()` method tests whether all elements in the array pass the provided test function. It returns `true` if all elements satisfy the condition, otherwise `false`."
      },
      {
        "question": "What is the difference between `Map` and `Object` in JavaScript?",
        "answer": "`Map` allows keys of any type (including objects), maintains insertion order, and provides methods like `set()`, `get()`, and `delete()`. `Object` only allows string or symbol keys, does not guarantee order, and lacks built-in methods for iteration and size tracking."
      },
      {
        "question": "What is the purpose of the `Array.prototype.find()` method?",
        "answer": "The `find()` method returns the first element in the array that satisfies the provided test function. If no element satisfies the condition, it returns `undefined`."
      },
      {
        "question": "What is the difference between `async` functions and generator functions?",
        "answer": "`async` functions are used to handle asynchronous operations and always return a Promise. Generator functions (`function*`) use `yield` to pause and resume execution, allowing for custom iteration and asynchronous patterns, but they do not return Promises by default."
      },
      {
        "question": "What is the purpose of the `Array.prototype.includes()` method?",
        "answer": "The `includes()` method checks if an array contains a specific value and returns `true` if the value is found, otherwise `false`. It is case-sensitive and uses the SameValueZero algorithm for comparison."
      }
    ],
    takeHomeProjects: [
      {
        question: "Build a task management application with local storage",
        answer:
          "Create a web app that allows users to add, edit, and delete tasks. Use local storage to persist data between sessions. Focus on UI/UX and efficient state management.",
      },
      {
        "question": "Create a weather app using a public API",
        "answer":
          "Use a public API to fetch weather data and display it on a web page. Focus on handling asynchronous operations, error handling, and presenting data in a user-friendly manner.",
      },
      {
        "question":
          "Develop a simple e-commerce product page with a shopping cart",
        "answer":
          "Build a simple e-commerce product page with a shopping cart. Focus on handling product variations, cart functionality, and state management.",
      },
      {
        "question": "Implement a chat application using WebSockets",
        "answer":
          "Create a real-time chat application using WebSockets. Focus on handling real-time communication, user authentication, and message persistence.",
      },
      {
        "question": "Build a markdown editor with preview",
        "answer":
          "Develop a markdown editor that allows users to write markdown and see a live preview. Focus on parsing markdown and updating the preview in real-time.",
      },
      {
        "question": "Create a kanban board for project management",
        "answer":
          "Build a kanban board application for managing projects. Include features like drag and drop, task creation, and board customization.",
      },
      {
        "question": "Develop a recipe management application",
        "answer":
          "Create an app for managing recipes, including features like recipe creation, categorization, and search functionality.",
      },
      {
        "question": "Build a personal finance tracker",
        "answer":
          "Develop an application for tracking personal finances, including income, expenses, and budget planning.",
      },
      {
        "question": "Create a social media dashboard",
        "answer":
          "Build a dashboard that aggregates data from various social media platforms using their APIs. Focus on data visualization and real-time updates.",
      },
      {
        "question": "Implement a URL shortener service",
        "answer":
          "Develop a service that shortens long URLs and redirects users. Include features like custom short URLs and click tracking.",
      },
      {
        "question": "Build a collaborative drawing application",
        "answer":
          "Create a web-based drawing application that allows multiple users to draw on the same canvas in real-time.",
      },
      {
        "question": "Develop a podcast player application",
        "answer":
          "Build a podcast player that allows users to subscribe to podcasts, download episodes, and track listening progress.",
      },
      {
        "question": "Create a habit tracker application",
        "answer":
          "Develop an application for tracking daily habits, including streak counting and progress visualization.",
      },
      {
        "question": "Implement a file sharing service",
        "answer":
          "Build a service that allows users to upload and share files securely. Include features like file encryption and expiring links.",
      },
      {
        "question": "Develop a code snippet manager",
        "answer":
          "Create an application for developers to store and organize code snippets. Include features like syntax highlighting and tagging.",
      },
      {
        "question": "Build a multiplayer game",
        "answer":
          "Develop a simple multiplayer game (like Tic Tac Toe or Snake) using real-time communication technologies.",
      },
      {
        "question": "Create a data visualization dashboard",
        "answer":
          "Build a dashboard that visualizes complex datasets using various chart types. Focus on interactivity and performance with large datasets.",
      },
      {
        "question": "Implement a note-taking application with rich text editing",
        "answer":
          "Develop a note-taking app with features like rich text editing, note organization, and search functionality.",
      },
      {
        "question": "Build a job board application",
        "answer":
          "Create a job board where companies can post jobs and job seekers can apply. Include features like job search and application tracking.",
      },
      {
        "question": "Develop a personal portfolio website builder",
        "answer":
          "Build a tool that allows users to create and customize their own portfolio websites without coding knowledge.",
      },
      {
        "question": "Create a music streaming service frontend",
        "answer":
          "Develop the frontend for a music streaming service. Focus on playlist management, search functionality, and audio playback.",
      },
      {
        "question": "Implement a booking system for a small business",
        "answer":
          "Build a booking system suitable for a small business like a hair salon or a gym. Include features like appointment scheduling and reminders.",
      },
      {
        "question": "Develop a personal knowledge base application",
        "answer":
          "Create an application for organizing personal knowledge, including features like note-taking, linking between notes, and visualization of connections.",
      },
      {
        "question": "Build a cryptocurrency portfolio tracker",
        "answer":
          "Develop an application that allows users to track their cryptocurrency investments, including real-time price updates and portfolio analysis.",
      },
      {
        "question": "Create a language learning application",
        "answer":
          "Build an application to help users learn a new language, including features like flashcards, quizzes, and progress tracking.",
      },
      {
        "question": "Build a memory card matching game",
        "answer": "Create a memory game where users flip cards to find matching pairs. Use JavaScript to handle game logic, card flipping, and win conditions."
      },
      {
        "question": "Develop a typing speed test application",
        "answer": "Build an app that tests a user's typing speed by displaying a random text and calculating words per minute (WPM). Use JavaScript to track keystrokes and time."
      },
      {
        "question": "Create a Pomodoro timer",
        "answer": "Develop a Pomodoro timer that alternates between work and break intervals. Use JavaScript to handle the timer logic and notifications."
      },
      {
        "question": "Build a random color generator",
        "answer": "Create an app that generates random colors and displays their HEX or RGB values. Use JavaScript to dynamically update the background color."
      },
      {
        "question": "Develop a simple dice roller",
        "answer": "Build an app that simulates rolling dice. Use JavaScript to generate random numbers and display the result visually."
      },
      {
        "question": "Create a word counter tool",
        "answer": "Develop a tool that counts the number of words and characters in a given text. Use JavaScript to process the input in real-time."
      },
      {
        "question": "Build a simple image gallery with lightbox",
        "answer": "Create an image gallery where users can click on thumbnails to view larger images in a lightbox. Use JavaScript to handle the lightbox functionality."
      },
      {
        "question": "Develop a basic quiz app with a timer",
        "answer": "Build a quiz app where users answer questions within a time limit. Use JavaScript to handle the timer, score calculation, and question transitions."
      },
      {
        "question": "Create a simple password strength checker",
        "answer": "Develop a tool that checks the strength of a password based on criteria like length, special characters, and numbers. Use JavaScript to evaluate the password."
      },
      {
        "question": "Build a basic analog clock",
        "answer": "Create an analog clock that displays the current time using hour, minute, and second hands. Use JavaScript to update the clock in real-time."
      },
      {
        "question": "Develop a simple to-do list with drag-and-drop functionality",
        "answer": "Build a to-do list where users can reorder tasks using drag-and-drop. Use JavaScript to handle the drag-and-drop interactions."
      },
      {
        "question": "Create a random meal generator",
        "answer": "Develop an app that suggests random meals or recipes. Use JavaScript to fetch data from an API or a static list."
      },
      {
        "question": "Build a simple expense splitter",
        "answer": "Create a tool that helps users split expenses among friends. Use JavaScript to calculate each person's share based on the total amount."
      },
      {
        "question": "Develop a basic music player",
        "answer": "Build a simple music player with play, pause, and skip functionality. Use JavaScript to control audio playback."
      },
      {
        "question": "Create a simple count-up timer",
        "answer": "Develop a timer that starts counting up from zero when activated. Use JavaScript to handle the timer logic and display."
      },
      {
        "question": "Build a basic form validator",
        "answer": "Create a form validator that checks for required fields, valid email formats, and password matching. Use JavaScript to provide real-time feedback."
      },
      {
        "question": "Develop a simple currency converter with dropdowns",
        "answer": "Build a currency converter that allows users to select currencies from dropdowns and convert amounts. Use JavaScript to handle the conversion logic."
      },
      {
        "question": "Create a random number generator with range selection",
        "answer": "Develop a tool that generates random numbers within a user-specified range. Use JavaScript to handle the range input and random number generation."
      },
      {
        "question": "Build a simple text-to-speech app",
        "answer": "Create an app that converts text to speech using the Web Speech API. Use JavaScript to handle the text input and speech synthesis."
      },
      {
        "question": "Develop a basic age calculator",
        "answer": "Build a tool that calculates a user's age based on their birthdate. Use JavaScript to handle the date calculation and display the result."
      },
      {
        "question": "Create a simple dark mode toggle",
        "answer": "Develop a feature that allows users to toggle between light and dark modes. Use JavaScript to switch CSS styles dynamically."
      },
      {
        "question": "Build a basic infinite scroll page",
        "answer": "Create a webpage that loads more content as the user scrolls down. Use JavaScript to fetch and append new data dynamically."
      },
      {
        "question": "Develop a simple progress bar",
        "answer": "Build a progress bar that updates based on user input or a timer. Use JavaScript to handle the progress updates and animations."
      },
      {
        "question": "Create a basic emoji picker",
        "answer": "Develop a tool that allows users to select and insert emojis into a text field. Use JavaScript to handle the emoji selection and insertion."
      },
      {
        "question": "Build a simple sticky notes app",
        "answer": "Create an app where users can add, edit, and delete sticky notes. Use JavaScript to handle the notes' CRUD operations and local storage for persistence."
      }
    ],
    bigCompanyQuestions: [
      {
        question: "Implement a debounce function in JavaScript.",
        answer:
          "A debounce function limits the rate at which a function can fire. Here's a simple implementation: function debounce(func, delay) { let timeoutId; return function(...args) { clearTimeout(timeoutId); timeoutId = setTimeout(() => func.apply(this, args), delay); }; }",
      },
      {
        question:
          "Explain the concept of prototypal inheritance in JavaScript.",
        answer:
          "Prototypal inheritance is a method by which an object can inherit properties and methods from another object. Each object has an internal link to another object called its prototype. When trying to access a property of an object, JavaScript will first look for it on the object itself, then on its prototype, then on the prototype's prototype, and so on up the chain until it finds it or reaches an object with a null prototype.",
      },
      {
        question: "Implement a deep clone function in JavaScript.",
        answer:
          "A deep clone function creates a copy of an object including nested objects. Here's a simple implementation: function deepClone(obj) { if (typeof obj !== 'object' || obj === null) return obj; const newObj = Array.isArray(obj) ? [] : {}; for (let key in obj) { newObj[key] = deepClone(obj[key]); } return newObj; }",
      },
      {
        question: "Explain the concept of event delegation and its benefits.",
        answer:
          "Event delegation is a technique where you add a single event listener to a parent element instead of adding event listeners to multiple child elements. It takes advantage of event bubbling. Benefits include improved performance (fewer event listeners) and the ability to handle dynamically added elements.",
      },
      {
        question:
          "Implement a function to flatten a nested array in JavaScript.",
        answer:
          "A flatten function converts a nested array into a single-level array. Here's an implementation: function flatten(arr) { return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []); }",
      },
      {
        question:
          "Explain the concept of memoization and implement a memoize function.",
        answer:
          "Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Here's a simple memoize function: function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (key in cache) return cache[key]; const result = fn.apply(this, args); cache[key] = result; return result; }; }",
      },
      {
        question:
          "Explain the difference between classical inheritance and prototypal inheritance.",
        answer:
          "Classical inheritance is based on classes, which are blueprints for objects. Prototypal inheritance is based on prototypes, where objects inherit directly from other objects. JavaScript uses prototypal inheritance, which is more flexible and dynamic.",
      },
      {
        question: "Implement a throttle function in JavaScript.",
        answer:
          "A throttle function ensures that a function is called at most once in a specified time period. Here's an implementation: function throttle(func, limit) { let inThrottle; return function(...args) { if (!inThrottle) { func.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; }",
      },
      {
        question: "Explain the concept of closure and provide an example.",
        answer:
          "A closure is a function bundled with its lexical environment. It allows a function to access variables from its outer scope even after the outer function has returned. Example: function outerFunc(x) { return function(y) { return x + y; }; } const addFive = outerFunc(5); console.log(addFive(3)); // Outputs 8",
      },
      {
        question:
          "Implement a function to check if a given string is a palindrome.",
        answer:
          "A palindrome reads the same backward as forward. Here's a function to check: function isPalindrome(str) { str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); return str === str.split('').reverse().join(''); }",
      },
      {
        question: "Explain the differences between var, let, and const.",
        answer:
          "var is function-scoped and can be redeclared and updated. let is block-scoped and can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared. const also creates a read-only reference to a value.",
      },
      {
        question:
          "Implement a function to find the longest substring without repeating characters.",
        answer:
          "Here's an implementation: function longestSubstring(s) { let longest = ''; let current = ''; let seen = {}; for (let char of s) { if (seen[char]) { current = current.slice(current.indexOf(seen[char]) + 1); } current += char; seen[char] = char; if (current.length > longest.length) longest = current; } return longest; }",
      },
      {
        question:
          "Explain the event loop in JavaScript and how it handles asynchronous operations.",
        answer:
          "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and callback queue. When the stack is empty, it takes the first task from the queue and pushes it onto the stack to be executed. This allows asynchronous operations to be performed without blocking the main thread.",
      },
      {
        question:
          "Implement a basic pub/sub (publish/subscribe) pattern in JavaScript.",
        answer:
          "Here's a simple implementation: const pubSub = { events: {}, subscribe(event, callback) { if (!this.events[event]) this.events[event] = []; this.events[event].push(callback); }, publish(event, data) { if (this.events[event]) this.events[event].forEach(callback => callback(data)); } };",
      },
      {
        question:
          "Explain the concept of 'this' in JavaScript and how it behaves in different contexts.",
        answer:
          "In JavaScript, 'this' refers to the object that is executing the current function. Its value depends on how the function is called: In a method, 'this' refers to the object. In a regular function, it refers to the global object (or undefined in strict mode). In an arrow function, it retains the 'this' value of the enclosing lexical scope.",
      },
      {
        question:
          "Implement a function to perform a binary search on a sorted array.",
        answer:
          "Here's an implementation: function binarySearch(arr, target) { let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }",
      },
      {
        "question": "Explain the difference between `==` and `===` with examples.",
        "answer": "`==` performs type coercion before comparison, while `===` checks both value and type. Example: `5 == '5'` (true) vs `5 === '5'` (false). Always prefer `===` for predictable comparisons."
      },
      {
        "question": "Implement a function to reverse a linked list.",
        "answer": "function reverseLinkedList(head) {\n  let prev = null;\n  while(head) {\n    const next = head.next;\n    head.next = prev;\n    prev = head;\n    head = next;\n  }\n  return prev;\n}"
      },
      {
        "question": "Explain how `this` works in arrow functions compared to regular functions.",
        "answer": "Arrow functions don't have their own `this` binding. They inherit `this` from the enclosing lexical context, unlike regular functions which determine `this` based on how they're called."
      },
      {
        "question": "Implement a polyfill for `Promise.all`.",
        "answer": "Promise.all = function(promises) {\n  return new Promise((resolve, reject) => {\n    const results = [];\n    let completed = 0;\n    promises.forEach((promise, i) => {\n      Promise.resolve(promise)\n        .then(res => {\n          results[i] = res;\n          if(++completed === promises.length) resolve(results);\n        })\n        .catch(reject);\n    });\n  });\n};"
      },
      {
        "question": "Explain the Web Workers API and its limitations.",
        "answer": "Web Workers enable multithreading in JavaScript by running scripts in background threads. Limitations: No DOM access, limited communication via postMessage, and same-origin policy restrictions."
      },
      {
        "question": "Implement a function to detect a cycle in a linked list.",
        "answer": "function hasCycle(head) {\n  let slow = head, fast = head;\n  while(fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if(slow === fast) return true;\n  }\n  return false;\n}"
      },
      {
        "question": "Explain the difference between `Object.freeze()` and `Object.seal()`.",
        "answer": "`Object.seal()` prevents adding/removing properties but allows modifying existing ones. `Object.freeze()` prevents any changes to the object (including property values). Both prevent prototype changes."
      },
      {
        "question": "Implement a function to find the first non-repeating character in a string.",
        "answer": "function firstNonRepeatingChar(str) {\n  const count = {};\n  for(const char of str) count[char] = (count[char] || 0) + 1;\n  for(const char of str) if(count[char] === 1) return char;\n  return null;\n}"
      },
      {
        "question": "Explain the phases of the Event Loop in Node.js.",
        "answer": "1. Timers (executes setTimeout/setInterval callbacks)\n2. Pending callbacks (executes I/O callbacks)\n3. Poll (retrieve new I/O events)\n4. Check (execute setImmediate callbacks)\n5. Close callbacks (execute close event callbacks)"
      },
      {
        "question": "Implement a currying function that supports both `sum(a,b,c)` and `sum(a)(b)(c)` syntax.",
        "answer": "function curry(fn) {\n  return function curried(...args) {\n    if(args.length >= fn.length) return fn.apply(this, args);\n    return (...args2) => curried.apply(this, args.concat(args2));\n  };\n}"
      },
      {
        "question": "Explain the difference between `null` and `undefined` in JavaScript.",
        "answer": "`undefined` means a variable has been declared but not assigned a value. `null` is an assignment value representing intentional absence of any object value. typeof null => 'object', typeof undefined => 'undefined'."
      },
      {
        "question": "Implement a Singleton pattern in JavaScript.",
        "answer": "class Singleton {\n  constructor() {\n    if(!Singleton.instance) {\n      Singleton.instance = this;\n    }\n    return Singleton.instance;\n  }\n}\n// Usage: const instance = new Singleton();"
      },
      {
        "question": "Explain the Temporal Dead Zone (TDZ) in ES6.",
        "answer": "The TDZ is the period between entering scope and variable declaration where accessing a let/const variable throws a ReferenceError. Variables are in TDZ from the start of the block until declaration is executed."
      },
      {
        "question": "Implement a polyfill for `Function.prototype.bind`.",
        "answer": "Function.prototype.bind = function(context, ...args) {\n  const fn = this;\n  return function(...innerArgs) {\n    return fn.apply(context, args.concat(innerArgs));\n  };\n};"
      },
      {
        "question": "Explain how async/await works under the hood with generators.",
        "answer": "Async/await is syntactic sugar over generators and promises. The async function returns a promise, and await pauses execution similar to yield. A generator function with yield statements is automatically wrapped in a promise chain."
      },
      {
        "question": "Implement a function to check if two objects are deep equal.",
        "answer": "function deepEqual(a, b) {\n  if(a === b) return true;\n  if(typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;\n  const keysA = Object.keys(a), keysB = Object.keys(b);\n  if(keysA.length !== keysB.length) return false;\n  return keysA.every(key => deepEqual(a[key], b[key]));\n}"
      },
      {
        "question": "Explain the difference between `for...in` and `for...of` loops.",
        "answer": "`for...in` iterates over enumerable properties (including prototype chain), best for objects. `for...of` iterates over iterable values (arrays, strings, maps), using the [Symbol.iterator] method."
      },
      {
        "question": "Implement a memoized Fibonacci function.",
        "answer": "const memoFib = (() => {\n  const cache = {};\n  return function fib(n) {\n    if(n in cache) return cache[n];\n    if(n <= 1) return n;\n    return cache[n] = fib(n-1) + fib(n-2);\n  };\n})();"
      },
      {
        "question": "Explain the difference between microtasks and macrotasks in the event loop.",
        "answer": "Microtasks (Promise callbacks, queueMicrotask) execute immediately after current task, before rendering. Macrotasks (setTimeout, I/O) execute in next event loop iteration. Microtasks have higher priority."
      },
      {
        "question": "Implement a function to detect if CSS is being injected at runtime (CSS-in-JS pattern).",
        "answer": "function isRuntimeCSS() {\n  const style = document.createElement('style');\n  document.head.appendChild(style);\n  const injected = style.sheet.cssRules.length > 0;\n  document.head.removeChild(style);\n  return injected;\n}"
      },
      {
        "question": "Explain how to handle memory leaks in JavaScript applications.",
        "answer": "1. Remove event listeners\n2. Clear timers/intervals\n3. Avoid global variables\n4. Use WeakMap/WeakSet\n5. Nullify DOM references\n6. Use Chrome DevTools Memory Profiler\n7. Avoid circular references"
      },
      {
        "question": "Implement a function to check if an object is empty.",
        "answer": "function isEmpty(obj) {\n  return Object.keys(obj).length === 0 && obj.constructor === Object;\n}"
      },
      {
        "question": "Explain the concept of property descriptors in JavaScript.",
        "answer": "Property descriptors define attributes of object properties:\n- value: The property's value\n- writable: Can be changed\n- enumerable: Shows up in for...in\n- configurable: Can be deleted or modified\nAccessed via Object.getOwnPropertyDescriptor()"
      },
      {
        "question": "Implement a function to handle circular references in JSON.stringify.",
        "answer": "function safeStringify(obj) {\n  const seen = new WeakSet();\n  return JSON.stringify(obj, (key, value) => {\n    if(typeof value === 'object' && value !== null) {\n      if(seen.has(value)) return '[Circular]';\n      seen.add(value);\n    }\n    return value;\n  });\n}"
      },
      {
        "question": "Explain the use cases for ES6 Proxy.",
        "answer": "Proxies enable:\n1. Validation/formatting of property values\n2. Observable patterns\n3. Virtual properties\n4. Operation logging\n5. Access control\n6. Caching/memoization\n7. Revocable references"
      }
    ],
    simpleProjects: [
      {
        question: "Create a to-do list application",
        answer:
          "Build a simple to-do list app with features like adding tasks, marking them as complete, and deleting tasks. Use vanilla JavaScript or a framework of your choice.",
      },
      {
        question: "Build a calculator with basic arithmetic operations",
        answer:
          "Implement basic arithmetic operations like addition, subtraction, multiplication, and division. Use a simple UI to display results and handle user input.",
      },
      {
        question: "Develop a countdown timer",
        answer:
          "Build a countdown timer that takes a user-inputted time and counts down to zero. Use setInterval or setTimeout to update the display, and implement start, pause, and reset functionality.",
      },
      {
        question: "Create a simple quiz game",
        answer:
          "Develop a quiz game with multiple-choice questions. Keep track of the score and display the final result at the end of the quiz.",
      },
      {
        question: "Build a basic weather app",
        answer:
          "Create a simple weather app that fetches data from a weather API and displays the current weather for a given location.",
      },
      {
        question: "Implement a color picker",
        answer:
          "Build a color picker that allows users to select colors using sliders for RGB values and displays the selected color.",
      },
      {
        question: "Create a basic form validation",
        answer:
          "Implement client-side form validation for a simple registration form, checking for things like required fields, email format, and password strength.",
      },
      {
        question: "Develop a simple notes app",
        answer:
          "Build a notes app that allows users to create, edit, and delete notes. Use local storage to persist the notes between sessions.",
      },
      {
        question: "Build a basic image slider",
        answer:
          "Create an image slider that cycles through a set of images, with next and previous buttons for navigation.",
      },
      {
        question: "Implement a simple drawing app",
        answer:
          "Develop a basic drawing application using the HTML5 canvas, allowing users to draw freehand with different colors and brush sizes.",
      },
      {
        question: "Create a basic calculator",
        answer:
          "Build a calculator that can perform basic arithmetic operations (addition, subtraction, multiplication, division) with a user interface.",
      },
      {
        question: "Develop a simple Pomodoro timer",
        answer:
          "Create a Pomodoro timer that alternates between work and break periods, with customizable durations.",
      },
      {
        question: "Build a basic currency converter",
        answer:
          "Implement a simple currency converter that allows users to convert between different currencies using current exchange rates.",
      },
      {
        question: "Create a simple memory game",
        answer:
          "Develop a memory game where players need to match pairs of cards, keeping track of moves and time taken.",
      },
      {
        question: "Implement a basic chat application",
        answer:
          "Build a simple chat application using WebSockets or a real-time database like Firebase, allowing users to send and receive messages.",
      },
      {
        question: "Develop a basic music player",
        answer:
          "Create a simple music player with play, pause, and skip functionality, using a predefined list of songs.",
      },
      {
        question: "Build a simple recipe finder",
        answer:
          "Implement a recipe finder that allows users to search for recipes based on ingredients or cuisine type, using a recipe API.",
      },
      {
        question: "Create a basic expense tracker",
        answer:
          "Develop a simple expense tracker that allows users to add, categorize, and visualize their expenses.",
      },
      {
        question: "Implement a simple markdown previewer",
        answer:
          "Build a markdown previewer that converts user-input markdown text into formatted HTML in real-time.",
      },
      {
        question: "Develop a basic typing speed test",
        answer:
          "Create a typing speed test that measures words per minute (WPM) and accuracy as users type a given text.",
      },
      {
        question: "Build a simple password generator",
        answer:
          "Implement a password generator that creates strong passwords based on user-specified criteria (length, inclusion of numbers, special characters, etc.).",
      },
      {
        question: "Create a basic kanban board",
        answer:
          "Develop a simple kanban board with columns for 'To Do', 'In Progress', and 'Done', allowing users to add and move tasks between columns.",
      },
      {
        question: "Implement a simple URL shortener",
        answer:
          "Build a basic URL shortener that takes long URLs and generates shorter, shareable links.",
      },
      {
        question: "Develop a basic chess game",
        answer:
          "Create a simple chess game that enforces basic rules and allows two players to make moves on a chess board.",
      },
      {
        question: "Build a simple calendar application",
        answer:
          "Implement a basic calendar application that allows users to view dates, add events, and navigate between months.",
      },
      {
        "question": "Build a random quote generator",
        "answer": "Create an app that displays random inspirational quotes. Use a free quotes API or a local array of quotes. Include a button to generate new quotes."
      },
      {
        "question": "Create a BMI calculator",
        "answer": "Develop a tool that calculates Body Mass Index (BMI) based on user-input height and weight. Display the result with a simple interpretation (underweight, normal, etc.)."
      },
      {
        "question": "Develop a unit converter for measurements",
        "answer": "Build a converter that converts between units like kilometers/miles, kilograms/pounds, or liters/gallons. Use dropdowns for unit selection."
      },
      {
        "question": "Create an age calculator",
        "answer": "Build a tool that calculates a user's exact age in years, months, and days based on their birthdate input."
      },
      {
        "question": "Implement a tip calculator",
        "answer": "Develop an app that calculates tip amounts based on bill total and percentage. Include options to split the bill among multiple people."
      },
      {
        "question": "Build a digital clock",
        "answer": "Create a real-time digital clock that displays hours, minutes, and seconds. Update the time every second using JavaScript."
      },
      {
        "question": "Develop a simple to-do list with drag-and-drop",
        "answer": "Enhance a basic to-do list by allowing users to reorder tasks via drag-and-drop functionality using HTML5 Drag and Drop API."
      },
      {
        "question": "Create a hangman game",
        "answer": "Build a word-guessing game where players guess letters to complete a hidden word. Track remaining attempts and display guessed letters."
      },
      {
        "question": "Implement a random number generator",
        "answer": "Create a tool that generates random numbers within a user-specified range. Include copy-to-clipboard functionality for the result."
      },
      {
        "question": "Develop a recipe book app",
        "answer": "Build an app to store and organize favorite recipes. Include features to add recipes with ingredients/instructions and filter by category."
      }
    ],
  },
  {
    title: "React",
    slug: "react",
    description:
      "Excel in your React interview with our in-depth collection of React interview questions. Learn about hooks, state management, lifecycle methods, and advanced concepts with expert solutions.",
    imgSrc: "https://img.icons8.com/?size=500&id=wPohyHO_qO1a&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is React and what are its main features?",
        answer:
          "React is a JavaScript library for building user interfaces. Its main features include: Virtual DOM for efficient updates, component-based architecture, unidirectional data flow, JSX syntax, and React Hooks for state management in functional components.",
      },
      {
        question:
          "Explain the difference between functional and class components.",
        answer:
          "Functional components are JavaScript functions that take props and return JSX. They're simpler and can use Hooks for state and lifecycle features. Class components are ES6 classes that extend React.Component, have their own state, lifecycle methods, and render method.",
      },
      {
        question: "What is JSX?",
        answer:
          "JSX is a syntax extension for JavaScript used in React. It allows you to write HTML-like code in your JavaScript files. JSX gets transformed into JavaScript objects representing React elements.",
      },
      {
        question: "What are props in React?",
        answer:
          "Props (short for properties) are a way of passing data from parent to child components in React. They are read-only and help make components reusable and dynamic.",
      },
      {
        question: "Explain the concept of state in React.",
        answer:
          "State is a JavaScript object that holds dynamic data in a component. When state changes, React re-renders the component. In class components, state is managed via this.state and this.setState(). In functional components, state is managed using the useState hook.",
      },
      {
        question: "What is the virtual DOM and how does it work?",
        answer:
          "The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance. When state changes, React creates a new virtual DOM, compares it with the previous one, and only updates the real DOM where necessary, reducing expensive DOM operations.",
      },
      {
        question: "What are React hooks? Name a few commonly used hooks.",
        answer:
          "Hooks are functions that let you use state and other React features in functional components. Common hooks include: useState for state management, useEffect for side effects, useContext for context consumption, useRef for creating mutable references, and useCallback and useMemo for performance optimization.",
      },
      {
        question: "Explain the lifecycle methods in class components.",
        answer:
          "Lifecycle methods are special methods that run at different stages of a component's life. Key methods include: componentDidMount (after first render), componentDidUpdate (after updates), componentWillUnmount (before removal), and render (returns JSX to be rendered).",
      },
      {
        question: "How do you handle events in React?",
        answer:
          "React events are named using camelCase and passed as functions. For example: onClick={handleClick}. In class components, you typically bind methods in the constructor. In functional components, you can define event handlers as regular functions or arrow functions.",
      },
      {
        question: "What is the significance of keys in React lists?",
        answer:
          "Keys help React identify which items in a list have changed, been added, or been removed. They should be unique among siblings. Keys help in efficient updating of the UI, especially in dynamic lists.",
      },
      {
        question: "What is the purpose of React.Fragment?",
        answer:
          "React.Fragment allows you to group multiple elements without adding an extra DOM node. It's useful when you need to return multiple elements from a component's render method without wrapping them in a div or other container element.",
      },
      {
        question: "Explain the concept of conditional rendering in React.",
        answer:
          "Conditional rendering in React allows you to render different UI based on certain conditions. This can be done using if statements, ternary operators, or logical && operator in JSX.",
      },
      {
        question:
          "What is the difference between controlled and uncontrolled components?",
        answer:
          "In controlled components, form data is handled by React state. The value of the input is controlled by React. In uncontrolled components, form data is handled by the DOM itself. Refs are used to get form values from the DOM.",
      },
      {
        question: "How do you pass data between components in React?",
        answer:
          "Data can be passed from parent to child via props, from child to parent via callbacks, between siblings through a common parent (lifting state up), or using context for deeply nested components. For complex applications, state management libraries like Redux or MobX can be used.",
      },
      {
        question: "What is context in React and when would you use it?",
        answer:
          "Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for sharing 'global' data like themes, user authentication status, or language preferences.",
      },
      {
        question: "Explain the concept of higher-order components (HOCs).",
        answer:
          "A higher-order component is a function that takes a component and returns a new component with some added functionality. HOCs are used for code reuse, logic abstraction, and state manipulation. They're a pattern derived from React's compositional nature.",
      },
      {
        question: "What is the purpose of the useEffect hook?",
        answer:
          "useEffect is used for side effects in functional components. It serves similar purposes to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. It's used for data fetching, subscriptions, or manually changing the DOM.",
      },
      {
        question: "How do you optimize performance in a React application?",
        answer:
          "Performance can be optimized by: using React.memo for functional components or PureComponent for class components to prevent unnecessary re-renders, using useMemo and useCallback hooks to memoize values and functions, code-splitting with React.lazy and Suspense, virtualizing long lists, and minimizing state updates.",
      },
      {
        question: "What is code-splitting in React and why is it useful?",
        answer:
          "Code-splitting is a technique to split your code into small chunks which can then be loaded on demand. It's useful for improving the performance of large React applications by reducing the size of the initial bundle that needs to be downloaded.",
      },
      {
        question: "Explain the concept of lifting state up.",
        answer:
          "Lifting state up is a pattern used when several components need to share the same changing data. Instead of keeping the state in child components, you lift it up to their closest common ancestor. This makes the state shareable between components and keeps it in sync.",
      },
      {
        question: "What are error boundaries in React?",
        answer:
          "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.",
      },
      {
        question: "How does React handle forms?",
        answer:
          "React can handle forms using controlled components where form data is controlled by React state, or uncontrolled components where form data is handled by the DOM. For controlled components, you use state to store input values and update them on change events.",
      },
      {
        question:
          "What is the difference between Element and Component in React?",
        answer:
          "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. A Component is a function or class that accepts input and returns a React element.",
      },
      {
        question: "Explain the concept of reconciliation in React.",
        answer:
          "Reconciliation is the process React uses to efficiently update the DOM. When a component's state changes, React creates a new virtual DOM tree, diffs it with the previous one, and calculates the most efficient way to update the actual DOM. This process is also known as diffing.",
      },
      {
        question: "What are pure components in React?",
        answer:
          "Pure Components in React are similar to regular components, except they automatically implement shouldComponentUpdate() with a shallow prop and state comparison. This can provide a performance boost in some cases by reducing the number of renders.",
      },
      {
        "question": "What is React Fiber and how does it improve rendering performance?",
        "answer": "React Fiber is a complete reimplementation of React's reconciliation algorithm. It breaks the rendering work into small, incremental units, allowing React to pause, resume, or abandon work based on priority. This results in smoother animations, better responsiveness, and improved handling of asynchronous rendering."
      },
      {
        "question": "Explain the useCallback hook and its role in optimizing React applications.",
        "answer": "The useCallback hook returns a memoized version of a callback function that only changes if one of its dependencies changes. This prevents unnecessary re-creation of functions during re-renders, reducing wasted processing and helping child components avoid unnecessary re-rendering."
      },
      {
        "question": "What is the useMemo hook and how does it reduce unnecessary re-renders?",
        "answer": "useMemo memoizes the result of an expensive calculation and only recomputes it when its dependencies change. This helps in reducing the computations during re-renders by caching values, so that components do not need to recalculate values unnecessarily."
      },
      {
        "question": "What are custom hooks in React and how do you create one?",
        "answer": "Custom hooks are functions that start with the prefix 'use' and allow you to extract and reuse stateful logic across multiple components. They are created by combining other hooks (like useState, useEffect) into a reusable function that encapsulates specific behavior."
      },
      {
        "question": "How do you implement error boundaries in React, and why are they important?",
        "answer": "Error boundaries are implemented using class components that define the static method getDerivedStateFromError and the lifecycle method componentDidCatch. They catch JavaScript errors anywhere in their child component tree, log the errors, and display a fallback UI, preventing the entire app from crashing."
      },
      {
        "question": "What is React Suspense and how does it work with code splitting?",
        "answer": "React Suspense is a component that lets you delay rendering part of your component tree until some condition, like data fetching or code loading, is met. It works with code splitting by displaying a fallback UI while components loaded via React.lazy are being fetched asynchronously."
      },
      {
        "question": "How does React.lazy facilitate dynamic importing of components?",
        "answer": "React.lazy allows you to define a component that is loaded asynchronously with a dynamic import(). When paired with Suspense, React.lazy splits your code into separate bundles, loading the component only when it is needed, thereby reducing the initial load time."
      },
      {
        "question": "How does the forwardRef API work in React and when would you use it?",
        "answer": "forwardRef is used to pass a ref through a component to one of its children. It allows parent components to reference a child’s DOM node or component instance directly, which is useful for accessing imperative methods or managing focus."
      },
      {
        "question": "Explain the concept of render props and how it differs from higher-order components.",
        "answer": "Render props is a pattern where a component accepts a function as a prop to determine what to render, thus allowing dynamic sharing of code. Unlike higher-order components that wrap and enhance existing components by injecting props, render props provide flexible composition by letting the child decide how to render content based on the provided function."
      },
      {
        "question": "How does React's synthetic event system work and what are its advantages over native DOM events?",
        "answer": "React’s synthetic event system is a cross-browser wrapper around the browser's native event system. It provides a consistent API for events across different browsers and leverages event pooling to improve performance by reducing memory overhead."
      },
      {
        "question": "What is concurrent mode in React and what problems does it solve?",
        "answer": "Concurrent mode is an experimental set of features in React that makes rendering interruptible. It allows React to prioritize urgent updates, pause work in progress, and work on multiple tasks concurrently, leading to a more responsive UI during heavy computational or rendering tasks."
      },
      {
        "question": "How do you optimize rendering performance in React lists, such as using virtualization?",
        "answer": "Performance in large lists can be optimized by using windowing or virtualization techniques. Libraries like react-window or react-virtualized render only the visible portion of the list in the viewport, significantly reducing the number of DOM nodes and improving performance."
      },
      {
        "question": "What strategies do you use to avoid unnecessary re-renders in React components?",
        "answer": "Strategies include using React.memo for functional components, implementing shouldComponentUpdate in class components, and leveraging hooks like useCallback and useMemo to memoize functions and computed values. Additionally, keeping state minimal and structuring components to isolate frequently changing data helps prevent unnecessary re-renders."
      },
      {
        "question": "How can you migrate from class components to functional components with hooks?",
        "answer": "Migrating involves replacing class-based lifecycle methods with hooks such as useState, useEffect, and others. You refactor lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount into useEffect, and replace state management using this.state and this.setState with useState, often simplifying and streamlining the component’s logic."
      },
      {
        "question": "What approaches can be used for handling side effects in React, particularly with asynchronous operations?",
        "answer": "Side effects in React, such as data fetching and subscriptions, are managed using the useEffect hook in functional components. For complex asynchronous operations, you can use middleware solutions in state management libraries or incorporate async/await patterns within useEffect along with proper cleanup functions."
      },
      {
        "question": "How do you implement programmatic navigation in a React application using React Router?",
        "answer": "Programmatic navigation is achieved by accessing the history object. In React Router v5, you can use the useHistory hook to push or replace routes; in React Router v6, the useNavigate hook serves the same purpose, enabling you to navigate to different routes without relying on link clicks."
      },
      {
        "question": "What is the significance of React Portal and when should it be used?",
        "answer": "React Portal provides a way to render children into a DOM node outside the parent component's hierarchy. This is useful for UI elements like modals, tooltips, or overlays that require a different stacking context or need to bypass CSS overflow rules in their parent containers."
      },
      {
        "question": "How do you test React components effectively, and what testing tools are commonly used?",
        "answer": "Effective testing of React components typically involves using Jest for unit tests and the React Testing Library for integration and behavior tests, which focus on how users interact with components. Tools like Enzyme are also used for component-level testing by rendering components and inspecting their output."
      },
      {
        "question": "What is the Context API in React, and what are its benefits and limitations compared to Redux?",
        "answer": "The Context API allows you to share state across a component tree without passing props manually at every level. It simplifies the sharing of 'global' data like themes or user settings. However, for large-scale state management and complex data flows, Redux offers more structure, middleware support, and debugging tools, albeit with additional overhead."
      },
      {
        "question": "How can you integrate TypeScript in a React project, and what benefits does it provide?",
        "answer": "TypeScript can be integrated into a React project by setting up the TypeScript compiler, typically using Create React App with a TypeScript template or configuring webpack manually. It provides static type checking, improved IDE support, and early detection of bugs, thus leading to more maintainable and robust code."
      }

    ],
    takeHomeProjects: [
      {
        question: "Build a task management application with React",
        answer:
          "Create a task management app with features like adding tasks, marking them as complete, filtering tasks, and persisting data in local storage. Use React hooks for state management and side effects.",
      },
      {
        question: "Develop a weather dashboard using a public API",
        answer:
          "Build a weather dashboard that fetches data from a public weather API. Include features like searching for locations, displaying current weather, and showing a 5-day forecast. Use React Router for navigation between pages.",
      },
      {
        question: "Create a blog platform with React and a headless CMS",
        answer:
          "Develop a blog platform using React for the frontend and a headless CMS like Contentful or Strapi for content management. Implement features like listing posts, individual post pages, and categories.",
      },
      {
        question:
          "Build an e-commerce product page with shopping cart functionality",
        answer:
          "Create a product page for an e-commerce site. Include features like product variants, add to cart functionality, and a mini cart display. Use Context API or Redux for state management.",
      },
      {
        question: "Develop a movie database application using The Movie DB API",
        answer:
          "Build a movie database app that allows users to search for movies, view details, and save favorites. Implement infinite scrolling for movie lists and use React Router for navigation.",
      },
      {
        question: "Create a real-time chat application with React and Firebase",
        answer:
          "Develop a real-time chat application using React for the frontend and Firebase for backend services. Include features like user authentication, real-time messaging, and online status indicators.",
      },
      {
        question: "Build a quiz application with multiple choice questions",
        answer:
          "Create a quiz app that presents users with multiple-choice questions, tracks their score, and shows results at the end. Implement a timer for each question and use React's state management for handling user responses.",
      },
      {
        question: "Develop a personal finance tracker",
        answer:
          "Build a finance tracker that allows users to input income and expenses, categorize transactions, and view spending trends. Use charts for data visualization and implement drag-and-drop functionality for categorizing transactions.",
      },
      {
        question: "Create a recipe management application",
        answer:
          "Develop a recipe management app where users can add, edit, and delete recipes. Include features like ingredient scaling, meal planning, and a shopping list generator. Use local storage or a backend API for data persistence.",
      },
      {
        question: "Build a social media dashboard",
        answer:
          "Create a dashboard that aggregates data from various social media platforms using their APIs. Implement data visualization using charts and graphs, and include features like scheduling posts and analyzing engagement metrics.",
      },
      {
        question: "Develop a markdown editor with live preview",
        answer:
          "Build a markdown editor that allows users to write markdown and see a live preview. Include features like syntax highlighting, custom toolbar, and the ability to save and load documents.",
      },
      {
        question: "Create a job board application",
        answer:
          "Develop a job board where companies can post jobs and job seekers can apply. Implement features like job search, filtering, and application tracking. Use a backend API for data management.",
      },
      {
        question: "Build a workout tracker application",
        answer:
          "Create an app for tracking workouts, including features like creating custom workouts, logging exercises, and visualizing progress over time. Implement user authentication and data persistence.",
      },
      {
        question: "Develop a language learning application",
        answer:
          "Build an application to help users learn a new language. Include features like flashcards, quizzes, and progress tracking. Use spaced repetition algorithms for efficient learning.",
      },
      {
        question: "Create a collaborative drawing application",
        answer:
          "Develop a web-based drawing application that allows multiple users to draw on the same canvas in real-time. Implement features like different brush sizes, colors, and the ability to save and share drawings.",
      },
      {
        question: "Build a podcast player application",
        answer:
          "Create a podcast player that allows users to search for podcasts, subscribe to shows, download episodes, and track listening progress. Implement audio playback controls and a responsive design for mobile use.",
      },
      {
        question: "Develop a personal portfolio website builder",
        answer:
          "Build a tool that allows users to create and customize their own portfolio websites without coding knowledge. Include features like drag-and-drop layout editing, theme customization, and project showcases.",
      },
      {
        question: "Create a habit tracker application",
        answer:
          "Develop an application for tracking daily habits. Include features like streak counting, progress visualization, and reminder notifications. Use local storage or a backend API for data persistence.",
      },
      {
        question: "Build a note-taking application with rich text editing",
        answer:
          "Create a note-taking app with features like rich text editing, note organization (folders/tags), and search functionality. Implement sync across devices using a backend API.",
      },
      {
        question: "Develop a project management tool",
        answer:
          "Build a project management application with features like task assignment, progress tracking, and team collaboration. Implement a kanban board interface and use websockets for real-time updates.",
      },
      {
        question: "Create a music streaming service frontend",
        answer:
          "Develop the frontend for a music streaming service. Focus on features like playlist management, search functionality, and audio playback. Use a public music API for song data.",
      },
      {
        question: "Build a data visualization dashboard",
        answer:
          "Create a dashboard that visualizes complex datasets using various chart types. Focus on interactivity and performance with large datasets. Use a library like D3.js or recharts for advanced visualizations.",
      },
      {
        question: "Develop a personal knowledge base application",
        answer:
          "Build an application for organizing personal knowledge, including features like note-taking, linking between notes, and visualization of connections. Implement a graph-based data structure for representing knowledge.",
      },
      {
        question: "Create a cryptocurrency portfolio tracker",
        answer:
          "Develop an application that allows users to track their cryptocurrency investments. Include features like real-time price updates, portfolio analysis, and historical performance charts.",
      },
      {
        question: "Build an online code editor and compiler",
        answer:
          "Create a web-based code editor that supports multiple programming languages. Implement features like syntax highlighting, code execution, and the ability to save and share code snippets.",
      },
      {
        "question": "Develop an interactive data grid with inline editing",
        "answer": "Create a data grid component that allows users to view, sort, and edit rows directly in the table. Use React hooks for state management and implement features like inline validation and dynamic updates."
      },
      {
        "question": "Build a calendar scheduling application with drag-and-drop events",
        "answer": "Develop a scheduling app that displays events in a calendar view. Integrate drag-and-drop functionality to allow users to reschedule events and implement real-time updates using React state."
      },
      {
        "question": "Create a multiplayer game lobby with real-time interactions",
        "answer": "Build a lobby system using React and Socket.io that allows multiple users to join, chat, and prepare for multiplayer gaming sessions. Focus on real-time communication and dynamic user lists."
      },
      {
        "question": "Develop a forum application with nested commenting and thread discussions",
        "answer": "Design a forum app where users can create posts, start threads, and comment in nested structures. Implement features like voting, pagination, and dynamic content loading."
      },
      {
        "question": "Build a file upload and management application integrated with cloud storage",
        "answer": "Create an app that enables users to upload, view, and manage files. Integrate with cloud storage services such as AWS S3 or Firebase Storage to handle file persistence."
      },
      {
        "question": "Create a contact management system with advanced search and filtering",
        "answer": "Develop a contacts app where users can add, update, and delete contacts. Implement search, filtering, and sorting features along with persistent storage using a backend API or local storage."
      },
      {
        "question": "Build a virtual whiteboard for real-time collaborative drawing",
        "answer": "Develop a whiteboard application that supports multi-user real-time drawing. Integrate a canvas element with drawing tools and use websockets to synchronize changes across clients."
      },
      {
        "question": "Develop a customizable dashboard with widgets and user-defined layouts",
        "answer": "Create a dashboard that allows users to add, remove, and rearrange widgets. Use a drag-and-drop library to support layout customization and persist user settings locally or via an API."
      },
      {
        "question": "Create a booking system for appointments or reservations",
        "answer": "Build a booking app where users can schedule appointments. Include features like calendar integration, time slot selection, and real-time availability checks."
      },
      {
        "question": "Develop an expense sharing and bill splitting application",
        "answer": "Create an app that helps users split bills and track shared expenses. Implement calculations for individual contributions and provide visual summaries of all expenses."
      },
      {
        "question": "Build an RSS feed aggregator with subscription and filtering capabilities",
        "answer": "Develop a web app that aggregates RSS feeds from various sources. Allow users to subscribe to feeds, filter content by tags or keywords, and display articles with pagination."
      },
      {
        "question": "Create a media gallery with image and video upload, editing, and tagging",
        "answer": "Develop a media gallery app that supports uploading images and videos. Add features such as live editing, tagging, and categorization to enhance media organization."
      },
      {
        "question": "Develop an interactive e-learning platform with video lessons and quizzes",
        "answer": "Build an education platform where users can watch video lessons, participate in quizzes, and track their progress. Implement features for user authentication and content protection."
      },
      {
        "question": "Build a sentiment analysis dashboard integrating a sentiment analysis API",
        "answer": "Create a dashboard that fetches data from a sentiment analysis API to display moods or opinions on topics. Use various charts and graphs to visualize trends over time."
      },
      {
        "question": "Create a blockchain explorer interface using public blockchain APIs",
        "answer": "Develop a UI to explore blockchain data, such as transactions and addresses. Integrate with public APIs to fetch real-time blockchain information and present it in an interactive format."
      },
      {
        "question": "Develop a live sports score and statistics dashboard",
        "answer": "Build an application that displays live scores, player statistics, and match updates. Use sports APIs for data and focus on real-time updates and data visualization."
      },
      {
        "question": "Create an online survey and polling application",
        "answer": "Develop a survey tool that allows users to create polls, collect responses, and display results in real time. Implement features like different question types and dynamic result charts."
      },
      {
        "question": "Build a CRM dashboard for customer relationship management",
        "answer": "Design a CRM system that tracks customer interactions, sales data, and support tickets. Integrate filtering and search capabilities, along with dynamic charts for data analysis."
      },
      {
        "question": "Develop a live code collaboration tool with real-time editing",
        "answer": "Create a web-based code editor where multiple users can collaborate simultaneously. Use websockets to enable real-time editing and implement features like syntax highlighting and version control."
      },
      {
        "question": "Build a virtualized infinite scroll product listing application",
        "answer": "Design a product listing app that handles large datasets efficiently with infinite scroll and virtualization techniques. Focus on performance optimization and smooth user experience."
      },
      {
        "question": "Create an AI-powered chatbot interface",
        "answer": "Develop a chatbot UI using React that interacts with an AI backend via APIs. Implement message handling, user session management, and natural language processing for improved conversations."
      },
      {
        "question": "Build a secure password manager UI with local encryption",
        "answer": "Develop a password manager that lets users store and retrieve credentials securely. Use encryption libraries to encrypt data locally and design a clean, intuitive interface."
      },
      {
        "question": "Develop a dynamic form builder with drag-and-drop and conditional logic",
        "answer": "Create an application that allows users to build custom forms by dragging and dropping form elements. Implement conditional display logic and enable saving/loading of form configurations."
      }
    ],
    bigCompanyQuestions: [
      {
        question: "Implement a custom hook for handling form state in React.",
        answer:
          "Here's a basic implementation of a useForm hook: const useForm = (initialState = {}) => { const [values, setValues] = useState(initialState); const handleChange = (e) => { setValues({ ...values, [e.target.name]: e.target.value }); }; const resetForm = () => setValues(initialState); return [values, handleChange, resetForm]; };",
      },
      {
        question:
          "Explain how you would optimize a React application that's rendering a large list of items.",
        answer:
          "To optimize rendering of large lists: 1) Use virtualization (react-window or react-virtualized) to render only visible items. 2) Implement pagination or infinite scrolling. 3) Use React.memo to prevent unnecessary re-renders of list items. 4) Use the useCallback hook for event handlers passed to list items. 5) Consider using a web worker for heavy computations.",
      },
      {
        question:
          "Implement a higher-order component (HOC) that adds loading functionality to any component.",
        answer:
          "Here's a simple HOC for adding loading functionality: const withLoading = (WrappedComponent) => { return function WithLoading(props) { const [isLoading, setIsLoading] = useState(true); useEffect(() => { setTimeout(() => setIsLoading(false), 2000); }, []); return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />; }; };",
      },
      {
        question:
          "Implement a custom hook for handling API calls with loading and error states.",
        answer:
          "Here's a custom hook for API calls: const useApi = (url) => { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(null); useEffect(() => { const fetchData = async () => { try { const response = await fetch(url); const json = await response.json(); setData(json); setLoading(false); } catch (error) { setError(error); setLoading(false); } }; fetchData(); }, [url]); return { data, loading, error }; };",
      },
      {
        question:
          "Explain the concept of code splitting in React and how to implement it.",
        answer:
          "Code splitting is a technique to split your code into small chunks which can then be loaded on demand. In React, it's implemented using dynamic import() syntax along with React.lazy and Suspense. Example: const OtherComponent = React.lazy(() => import('./OtherComponent')); function MyComponent() { return ( <React.Suspense fallback={<div>Loading...</div>}> <OtherComponent /> </React.Suspense> ); }",
      },
      {
        question:
          "Implement a custom hook for managing local storage in React.",
        answer:
          "Here's a custom hook for local storage: const useLocalStorage = (key, initialValue) => { const [storedValue, setStoredValue] = useState(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue; } catch (error) { console.log(error); return initialValue; } }); const setValue = (value) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key, JSON.stringify(valueToStore)); } catch (error) { console.log(error); } }; return [storedValue, setValue]; };",
      },
      {
        question:
          "Explain the concept of context in React and how to use it effectively.",
        answer:
          "Context provides a way to pass data through the component tree without having to pass props down manually at every level. To use it effectively: 1) Create a context using React.createContext(). 2) Provide the context value at a high level in your app using Context.Provider. 3) Consume the context in nested components using useContext hook or Context.Consumer. Use context for global data like themes, user info, or language preferences.",
      },
      {
        question: "Implement a custom hook for managing pagination in React.",
        answer:
          "Here's a custom pagination hook: const usePagination = (data, itemsPerPage) => { const [currentPage, setCurrentPage] = useState(1); const maxPage = Math.ceil(data.length / itemsPerPage); const currentData = () => { const begin = (currentPage - 1) * itemsPerPage; const end = begin + itemsPerPage; return data.slice(begin, end); }; const next = () => { setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage)); }; const prev = () => { setCurrentPage((currentPage) => Math.max(currentPage - 1, 1)); }; const jump = (page) => { const pageNumber = Math.max(1, page); setCurrentPage((currentPage) => Math.min(pageNumber, maxPage)); }; return { next, prev, jump, currentData, currentPage, maxPage }; };",
      },
      {
        question:
          "Explain the differences between useMemo and useCallback hooks.",
        answer:
          "useMemo is used to memoize expensive computations. It takes a function and an array of dependencies, and only recomputes the memoized value when one of the dependencies has changed. useCallback is similar, but it's used to memoize functions instead of values. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
      },
      {
        question:
          "Implement a custom hook for managing forms with validation in React.",
        answer:
          "Here's a basic form hook with validation: const useForm = (initialState, validate) => { const [values, setValues] = useState(initialState); const [errors, setErrors] = useState({}); const [isSubmitting, setIsSubmitting] = useState(false); useEffect(() => { if (isSubmitting) { const noErrors = Object.keys(errors).length === 0; if (noErrors) { console.log('Form is valid! Submitting...'); setIsSubmitting(false); } else { setIsSubmitting(false); } } }, [errors]); const handleChange = (event) => { setValues({ ...values, [event.target.name]: event.target.value }); }; const handleSubmit = (event) => { event.preventDefault(); setErrors(validate(values)); setIsSubmitting(true); }; return { handleChange, handleSubmit, values, errors, isSubmitting }; };",
      },
      {
        question:
          "Explain the concept of render props and how it compares to higher-order components.",
        answer:
          "Render props is a technique where a component receives a function prop that it uses to render its content. HOCs are functions that take a component and return a new component with additional props or behavior. Render props are more flexible and avoid naming collisions, while HOCs are easier to debug and can be composed. Hooks have largely replaced both patterns for many use cases.",
      },
      {
        question: "Implement a custom hook for managing a modal in React.",
        answer:
          "Here's a custom modal hook: const useModal = () => { const [isOpen, setIsOpen] = useState(false); const toggle = () => setIsOpen(!isOpen); return { isOpen, toggle }; }; // Usage: const Modal = ({ children, isOpen, toggle }) => { if (!isOpen) return null; return ( <div className='modal'> <div className='modal-content'> {children} <button onClick={toggle}>Close</button> </div> </div> ); };",
      },
      {
        "question": "Implement a Higher-Order Component (HOC) for Error Boundaries in React.",
        "answer": "Create an HOC that wraps any component and catches JavaScript errors in its child component tree. Inside the HOC, use componentDidCatch (or getDerivedStateFromError in class components) to log errors and display a fallback UI. This pattern prevents the entire app from crashing due to an error in a single component."
      },
      {
        "question": "Integrate React Profiler to Measure Component Performance.",
        "answer": "Utilize React's built-in Profiler component to wrap parts of your application. Provide an onRender callback to log render timings, the actual time spent rendering, and notify when re-renders are expensive. This helps identify components that need optimization."
      },
      {
        "question": "Implement useTransition for Concurrent UI Updates in React.",
        "answer": "Use the useTransition hook to mark state updates as non-urgent—enabling smoother and more responsive UIs during heavy updates. Wrap state updates that are not critical with startTransition, and display fallback UI components if needed while the transition is pending."
      },
      {
        "question": "Implement a Custom Hook to Debounce Input Values.",
        "answer": "Build a hook called useDebounce that takes an input value and a delay as parameters. Use useState to store the debounced value and useEffect to update the state only after the delay has elapsed. This minimizes expensive operations (like API calls) triggered by rapid input changes."
      },
      {
        "question": "Implement React Suspense for Handling Asynchronous Data Fetching.",
        "answer": "Wrap components that rely on asynchronous data with React.Suspense. Create a resource that throws a promise until data is ready. Once the promise resolves, React renders the component tree. This results in a more declarative data fetching mechanism where a fallback UI is automatically displayed while loading."
      },
      {
        "question": "Develop a Custom Hook for Managing WebSocket Connections.",
        "answer": "Design a hook (e.g., useWebSocket) that establishes a WebSocket connection on mount, manages event listeners (for open, message, error, and close events) via useEffect, and provides functions to send messages and disconnect. This encapsulates real-time communication logic cleanly."
      },
      {
        "question": "Implement a Custom Hook to Throttle Event Handler Calls in React.",
        "answer": "Build a hook called useThrottle that takes a callback and a delay. Use useRef to store the last execution time and useCallback to wrap the original function so that it executes at most once per specified delay period. This prevents performance issues with rapidly firing events."
      },
      {
        "question": "Develop a Custom Hook for Toggling Dark Mode in a React Application.",
        "answer": "Create a hook (e.g., useDarkMode) that manages a theme state and toggles between dark and light modes. Synchronize the theme with local storage so that the user's preference persists across sessions. Use useEffect to add or remove CSS class names to the document body based on the theme state."
      },
      {
        "question": "Implement a Custom Hook for Undo/Redo Functionality in State Management.",
        "answer": "Design a hook (e.g., useUndoRedo) that maintains a history stack of state values. Provide functions to set new state, undo to a previous state, and redo to a later state. Manage two stacks (past and future) so that users can navigate backward and forward through state changes."
      },
      {
        "question": "Develop a Custom Hook to Synchronize State Across Multiple Browser Tabs.",
        "answer": "Create a hook (e.g., useSyncedState) that uses localStorage as the source of truth. Listen for the storage event on window to update the component state whenever the value changes in another tab. This ensures that state (such as theme or user session) remains consistent across tabs."
      },
      {
        "question": "Implement a Simple Internationalization (i18n) Mechanism Using React Context.",
        "answer": "Set up a Context to hold the current language and its translation messages. Create a provider component that wraps your app and passes down functions to switch languages. Build a custom hook (e.g., useTranslation) to retrieve translated strings based on keys, allowing components to render localized content."
      },
      {
        "question": "Describe Strategies for Testing React Components Using Jest and React Testing Library.",
        "answer": "Focus on testing component behavior rather than implementation details. Use React Testing Library to render components and emulate user interactions. Validate that the UI updates correctly based on state changes or mock API calls. Combine with Jest for assertions and snapshot tests."
      },
      {
        "question": "Explain How to Design a Plugin Architecture in a React Application Using Dynamic Imports.",
        "answer": "Architect your application to load feature modules on demand via dynamic import() calls. Combine React.lazy with Suspense to load plugins asynchronously. Design a registration mechanism—possibly via context—to allow plugins to register components, routes, or additional functionality without modifying the core app."
      },
      {
        "question": "Implement a Custom Hook to Manage Focus for Accessibility in React Components.",
        "answer": "Develop a hook (e.g., useFocus) that uses useRef to reference a DOM element alongside useEffect to focus the element when certain conditions are met. This hook can improve accessibility by managing focus transitions for modals, dialogs, or dynamic content areas."
      },
      {
        "question": "Explain Strategies to Optimize Re-Rendering in React Components Using Memoization Techniques.",
        "answer": "Discuss methods such as using React.memo to prevent re-rendering of functional components when props haven't changed, utilizing useMemo to cache expensive computations, and useCallback to memoize functions passed as props. These techniques collectively reduce unnecessary renders and enhance performance in large-scale applications."
      }

    ],
    simpleProjects: [
      {
        question: "Create a simple counter application",
        answer:
          "Build a counter app with increment, decrement, and reset functionality using useState hook.",
      },
      {
        question: "Develop a to-do list application",
        answer:
          "Create a to-do list where users can add, delete, and mark tasks as complete. Use useState for state management.",
      },
      {
        question: "Build a basic calculator",
        answer:
          "Implement a calculator with basic arithmetic operations. Use state to manage the display and calculations.",
      },
      {
        question: "Create a weather app using a public API",
        answer:
          "Build a simple weather app that fetches data from a public weather API and displays current weather for a given location.",
      },
      {
        question: "Develop a simple quiz application",
        answer:
          "Create a quiz app with multiple-choice questions. Keep track of the score and display results at the end.",
      },
      {
        question: "Build a basic form with validation",
        answer:
          "Implement a form (e.g., signup form) with client-side validation for fields like email, password, etc.",
      },
      {
        question: "Create a simple movie search application",
        answer:
          "Build an app that allows users to search for movies using a public movie API. Display results in a list or grid.",
      },
      {
        question: "Develop a basic e-commerce product list",
        answer:
          "Create a page that displays a list of products. Include features like filtering and sorting.",
      },
      {
        question: "Build a timer/stopwatch application",
        answer:
          "Implement a timer or stopwatch with start, pause, and reset functionality.",
      },
      {
        question: "Create a simple blog post viewer",
        answer:
          "Build a basic blog application that displays a list of posts and allows users to view individual posts.",
      },
      {
        question: "Develop a basic image gallery",
        answer:
          "Create an image gallery with thumbnail views and the ability to view images in a larger size.",
      },
      {
        question: "Build a simple chat UI",
        answer:
          "Implement the UI for a chat application. Focus on the layout and message display (actual messaging functionality not required).",
      },
      {
        question: "Create a basic calendar component",
        answer:
          "Develop a calendar component that displays days of the month and allows navigation between months.",
      },
      {
        question: "Build a simple music player UI",
        answer:
          "Create the UI for a music player with play, pause, skip, and volume control (actual audio playback not required).",
      },
      {
        question: "Develop a basic cryptocurrency price tracker",
        answer:
          "Build an app that displays current prices of popular cryptocurrencies using a public API.",
      },
      {
        question: "Create a simple recipe finder",
        answer:
          "Implement a recipe finder that allows users to search for recipes based on ingredients using a recipe API.",
      },
      {
        question: "Build a basic note-taking application",
        answer:
          "Create a simple note-taking app where users can add, edit, and delete notes. Use local storage for persistence.",
      },
      {
        question: "Develop a simple drawing app",
        answer:
          "Implement a basic drawing application using HTML canvas and React.",
      },
      {
        question: "Create a basic bookmarking tool",
        answer:
          "Build a simple bookmarking application where users can save and categorize website URLs.",
      },
      {
        question: "Build a simple expense tracker",
        answer:
          "Implement a basic expense tracker where users can add and categorize expenses.",
      },
      {
        question: "Develop a basic pomodoro timer",
        answer:
          "Create a pomodoro timer application with work and break intervals.",
      },
      {
        question: "Build a simple color picker",
        answer:
          "Implement a color picker that allows users to select colors and displays the corresponding hex and RGB values.",
      },
      {
        question: "Create a basic markdown previewer",
        answer:
          "Develop a simple markdown editor with a live preview of the formatted text.",
      },
      {
        question: "Build a simple kanban board",
        answer:
          "Implement a basic kanban board with columns for 'To Do', 'In Progress', and 'Done'. Allow adding and moving tasks between columns.",
      },
      {
        question: "Develop a basic file explorer UI",
        answer:
          "Create a simple file explorer interface with a tree view of folders and files.",
      },
      {
        "question": "Build a basic currency converter",
        "answer": "Create an app that fetches exchange rates from a public API and converts an amount from one currency to another. Use state and effects to manage API data and input changes."
      },
      {
        "question": "Develop a simple tip calculator",
        "answer": "Implement a tip calculator that allows users to input a bill amount and tip percentage, then calculates the tip and total amount. Use state to capture and update the values."
      },
      {
        "question": "Create a basic BMI calculator",
        "answer": "Build a BMI calculator where users can input their weight and height. Compute the Body Mass Index and display the result along with a category (underweight, normal, overweight)."
      },
      {
        "question": "Build a random quote generator",
        "answer": "Develop a simple app that randomly displays quotes from a predefined list or fetched from an API. Allow users to click a button to see a new quote."
      },
      {
        "question": "Develop an image slider carousel",
        "answer": "Create a responsive image carousel that cycles through a set of images. Implement navigation buttons to move between slides and use state to track the current image index."
      },
      {
        "question": "Create a text-to-speech converter",
        "answer": "Utilize the Web Speech API to build an app that converts written text into spoken words. Include input for text and controls to play, pause, or stop the speech."
      },
      {
        "question": "Build a password strength checker",
        "answer": "Implement a tool that evaluates the strength of a user-entered password. Provide real-time feedback on password quality based on length, character variety, and common patterns."
      },
      {
        "question": "Develop an accessibility color contrast checker",
        "answer": "Build an app where users can input foreground and background colors (or select them using a color picker) and receive feedback on the contrast ratio to meet accessibility standards."
      },
      {
        "question": "Create a user profile card component",
        "answer": "Design a simple static user profile card that displays a photo, name, and brief bio. Include props to make the component reusable with different user data."
      },
      {
        "question": "Build a digital clock with alarm functionality",
        "answer": "Implement a digital clock that shows the current time and allows users to set an alarm. Use state to manage time updates and trigger an alert or sound when the alarm time is reached."
      },
      {
        "question": "Develop a minimal productivity dashboard",
        "answer": "Create a small dashboard that aggregates widgets like a clock, weather summary, and a task counter. Use simple components and state to display dynamic data."
      },
      {
        "question": "Create a search autocomplete component",
        "answer": "Build an autocomplete input field that suggests possible matches as a user types. Use a static list or fetch suggestions from an API and update the display dynamically."
      },
      {
        "question": "Develop a drag-and-drop file uploader UI",
        "answer": "Implement a simple interface that allows users to drag files into a drop zone. Display the list of selected files and simulate upload progress without actual backend integration."
      },
      {
        "question": "Build a GIF search application using the Giphy API",
        "answer": "Create an app that fetches and displays GIFs based on the user's search query from the Giphy API. Manage input state and render the resulting GIFs in a grid layout."
      },
      {
        "question": "Create a basic character counter for text inputs",
        "answer": "Develop a component that counts and displays the number of characters entered into a textarea or input field. Update the counter in real time as the user types."
      },
      {
        "question": "Build a modal dialog showcase app",
        "answer": "Implement a reusable modal component that can be triggered by a button. Focus on styling and simple open/close state management to display content in an overlay."
      },
      {
        "question": "Develop a multi-step form wizard",
        "answer": "Create a form that is divided into several steps. Use state to manage the current step and form data, and include navigation buttons to move forward and backward through the form."
      },
      {
        "question": "Create a responsive sidebar navigation menu",
        "answer": "Build a sidebar menu that collapses on smaller screens and expands on larger ones. Use CSS media queries and React state to toggle the menu's visibility."
      },
      {
        "question": "Build a mouse tracking visualizer",
        "answer": "Develop an app that tracks the user's mouse movements within a specified area. Display the coordinates or a visual trail using state updates and event listeners."
      },
      {
        "question": "Develop a responsive grid layout visualizer",
        "answer": "Implement a tool that displays a grid overlay on a webpage to help visualize responsive design. Provide toggles to adjust grid size and spacing using CSS and state management."
      }
    ],
  },
  {
    title: "Python",
    slug: "python",
    description:
      "Python is a versatile and beginner-friendly programming language widely used for web development, data analysis, AI, and more.",
    imgSrc: "https://img.icons8.com/?size=500&id=13441&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What are Python's key features?",
        answer:
          "Python is interpreted, high-level, dynamically-typed, and supports object-oriented, procedural, and functional programming.",
      },
      {
        question: "What is a Python decorator?",
        answer:
          "A decorator is a function that modifies the behavior of another function or method without changing its structure.",
      },
      {
        question:
          "What is the difference between shallow copy and deep copy in Python?",
        answer:
          "A shallow copy copies the object but not the objects it references, while a deep copy copies the object and all objects it references.",
      },
      {
        question: "What is Python's Global Interpreter Lock (GIL)?",
        answer:
          "The GIL is a mutex that prevents multiple native threads from executing Python bytecode simultaneously, ensuring thread safety.",
      },
      {
        question: "How is memory managed in Python?",
        answer:
          "Python uses automatic memory management with garbage collection to reclaim unused memory.",
      },
      {
        question: "What are Python's built-in data types?",
        answer:
          "Common types include `int`, `float`, `str`, `list`, `tuple`, `dict`, `set`, and `bool`.",
      },
      {
        question: "What is the difference between `is` and `==` in Python?",
        answer:
          "`is` checks for object identity, while `==` checks for value equality.",
      },
      {
        question: "What are Python's comprehensions?",
        answer:
          "Comprehensions are concise ways to create lists, dictionaries, and sets using a single line of code.",
      },
      {
        question: "What is the purpose of Python's `with` statement?",
        answer:
          "The `with` statement is used for resource management, ensuring proper acquisition and release of resources like files.",
      },
      {
        question: "What are Python's lambda functions?",
        answer:
          "Lambda functions are anonymous functions defined using the `lambda` keyword for short, single-expression functions.",
      },
      {
        "question": "What is the difference between a list and a tuple in Python?",
        "answer": "Lists are mutable and defined using square brackets, allowing modifications such as adding or removing elements. Tuples, on the other hand, are immutable and defined using parentheses, ensuring that their content remains constant after creation."
      },
      {
        "question": "What are pickling and unpickling in Python?",
        "answer": "Pickling is the process of serializing a Python object into a byte stream, while unpickling is the inverse process—converting the byte stream back into a Python object. This is useful for saving objects to files or sending them over a network."
      },
      {
        "question": "What is PEP 8 and why is it important?",
        "answer": "PEP 8 is the Python Enhancement Proposal that provides guidelines and best practices for writing Python code. It ensures code readability, consistency, and helps developers maintain a common coding style."
      },
      {
        "question": "Explain Python's exception handling mechanism.",
        "answer": "Python uses try, except, else, and finally blocks for exception handling. The try block contains code that might raise an exception, the except block catches and handles the error, else executes if no errors occur, and finally runs regardless of whether an exception was raised."
      },
      {
        "question": "What is a generator in Python and how does it work?",
        "answer": "A generator is a special type of iterator that yields items one at a time using the 'yield' keyword instead of returning them all at once. It enables efficient memory usage when iterating over large datasets by generating values on the fly."
      },
      {
        "question": "Explain the concept of closures in Python.",
        "answer": "A closure occurs when a nested function captures variables from its enclosing scope, allowing the function to access these variables even after the outer function has finished executing. This is useful for creating function factories or maintaining state."
      },
      {
        "question": "What are *args and **kwargs in Python?",
        "answer": "The *args and **kwargs syntax allows a function to accept an arbitrary number of positional and keyword arguments respectively. *args collects extra positional arguments as a tuple, while **kwargs collects extra keyword arguments as a dictionary."
      },
      {
        "question": "What is a metaclass in Python?",
        "answer": "A metaclass is a class of a class that defines how a class behaves. In Python, metaclasses allow you to modify class creation, typically by overriding the __new__ or __init__ methods of the metaclass. They are used for advanced object-oriented programming and framework design."
      },
      {
        "question": "How do you handle file I/O in Python?",
        "answer": "File I/O in Python is commonly managed using the built-in open() function to read or write files. It's best practice to use the 'with' statement to open files, ensuring proper resource management and automatic file closure after operations are completed."
      },
      {
        "question": "What is the purpose of the __init__ method in Python classes?",
        "answer": "The __init__ method is a constructor used to initialize a newly created object's attributes. It is automatically invoked when an instance of the class is created, setting up the initial state of the object."
      },
      {
        "question": "How does Python's garbage collection work?",
        "answer": "Python primarily uses reference counting to keep track of objects in memory and automatically deallocates memory when an object's reference count reaches zero. It also employs a cyclic garbage collector to detect and break reference cycles that reference counting alone cannot handle."
      },
      {
        "question": "How do you create and manage virtual environments in Python?",
        "answer": "Virtual environments are created using tools like venv or virtualenv. They allow you to isolate project-specific dependencies and Python interpreter settings, ensuring that projects do not interfere with each other and work with defined package versions."
      },
      {
        "question": "What is the difference between modules and packages in Python?",
        "answer": "A module is a single Python file containing code, while a package is a collection of modules organized within a directory that contains an __init__.py file. Packages allow for a hierarchical structuring of the module namespace."
      },
      {
        "question": "What is monkey patching in Python and when is it used?",
        "answer": "Monkey patching refers to the dynamic modification of a module, class, or method at runtime. It is often used in testing scenarios or to modify third-party libraries temporarily, but it should be used with caution as it can lead to code that is hard to maintain."
      },
      {
        "question": "How do you differentiate between Python 2 and Python 3?",
        "answer": "Key differences include the treatment of the print statement (Python 2 uses print without parentheses while Python 3 uses print() as a function), integer division behavior, improved Unicode support in Python 3, and various syntax changes that make Python 3 more consistent and easier to use."
      },
      {
        "question": "What does the slice notation [::-1] do in Python?",
        "answer": "The slicing notation [::-1] reverses a sequence, such as a list or string. It works by creating a slice that starts from the end of the sequence and steps backwards by one, effectively reversing the order of the elements."
      },
      {
        "question": "What is the use of the pass statement in Python?",
        "answer": "The pass statement is a null operation used as a placeholder in code blocks where a statement is syntactically required but no action is needed. It allows developers to write minimal code that compiles without errors while leaving the block for future implementation."
      },
      {
        "question": "Explain the concept of recursion with an example in Python.",
        "answer": "Recursion is a programming technique where a function calls itself to solve a smaller instance of a problem. A common example is the calculation of a factorial, where the factorial of n is defined as n multiplied by the factorial of n-1, with a base case of factorial(0) = 1."
      },
      {
        "question": "How can you merge two dictionaries in Python?",
        "answer": "In Python 3.5 and later, you can merge two dictionaries using the unpacking operator: merged_dict = {**dict1, **dict2}. Alternatively, you can use dict.update() to update one dictionary with key-value pairs from another."
      },
      {
        "question": "What is the meaning of __name__ == '__main__' in Python?",
        "answer": "The __name__ == '__main__' condition checks if a Python script is being run directly, rather than being imported as a module into another script. Code within this condition is executed only when the script is run directly."
      },
      {
        "question": "What are iterators in Python and how are they implemented?",
        "answer": "Iterators are objects that allow traversal through all elements of a collection one at a time. They are implemented using the __iter__() method to return an iterator and the __next__() method to fetch the next element in the sequence. When there are no more elements, __next__() raises a StopIteration exception."
      },
      {
        "question": "What is the purpose of the zip() function in Python?",
        "answer": "The zip() function aggregates elements from multiple iterables (like lists or tuples) into tuples. It pairs elements based on their positions, and is useful for iterating over multiple sequences in parallel."
      }

    ],
    takeHomeProjects: [
      {
        "question": "Build a simple web scraper.",
        "answer": "Use Python's `requests` and `BeautifulSoup` libraries to extract data from a website."
      },
      {
        "question": "Create a basic chatbot.",
        "answer": "Use Python's string manipulation and conditional logic to simulate a chatbot."
      },
      {
        "question": "Develop a personal finance tracker.",
        "answer": "Build a command-line application to track expenses and generate summaries using Python."
      },
      {
        "question": "Build a Number Guessing Game.",
        "answer": "Implement a command-line game where the program randomly selects a number within a range and the user tries to guess it with hints provided after each attempt."
      },
      {
        "question": "Develop a Rock, Paper, Scissors Game.",
        "answer": "Create a simple game where the user plays against the computer using random choices and conditional logic to determine the winner."
      },
      {
        "question": "Create a Hangman Game.",
        "answer": "Develop a command-line Hangman game that selects a random word and allows the user to guess letters within a limited number of incorrect attempts."
      },
      {
        "question": "Build a Password Generator.",
        "answer": "Construct a tool that takes user input for desired length and character types, then outputs a random, secure password."
      },
      {
        "question": "Create a QR Code Encoder/Decoder.",
        "answer": "Use libraries like `qrcode` and `Pillow` (for encoding) and `OpenCV` (for decoding) to generate and interpret QR codes."
      },
      {
        "question": "Develop a Tic-Tac-Toe Game.",
        "answer": "Implement the classic Tic-Tac-Toe game in either a command-line interface or a basic GUI, with options for player vs. player or player vs. computer."
      },
      {
        "question": "Build a Minesweeper Game.",
        "answer": "Develop a simplified version of Minesweeper that includes grid generation, mine placement, and interactive cell revealing or flagging."
      },
      {
        "question": "Develop a Countdown Timer.",
        "answer": "Create an app that allows users to set a countdown duration, displaying the remaining time and notifying the user when time is up."
      },
      {
        "question": "Build a Pomodoro Timer.",
        "answer": "Design a timer that adheres to the Pomodoro Technique by alternating work and break intervals, complete with notifications."
      },
      {
        "question": "Create a GIF Creator.",
        "answer": "Allow users to select multiple images and compile them into an animated GIF using libraries like `MoviePy`."
      },
      {
        "question": "Develop a Currency Converter.",
        "answer": "Build an application that fetches live exchange rates from a public API and converts amounts between different currencies."
      },
      {
        "question": "Create a Weather Application.",
        "answer": "Fetch current and forecast weather data from a public API based on user input for location, then display the results in a user-friendly format."
      },
      {
        "question": "Build a Twitter Bot.",
        "answer": "Utilize the `Tweepy` library to create a bot that automates tweeting, retweeting, or responding based on defined criteria."
      },
      {
        "question": "Create a Reddit Bot.",
        "answer": "Develop a bot using the `PRAW` library that can comment on posts, moderate content, or interact with users on Reddit."
      },
      {
        "question": "Develop a URL Shortener.",
        "answer": "Construct a web application using Flask that accepts long URLs and returns a shortened version, storing mappings in a database."
      },
      {
        "question": "Build a File Renamer Utility.",
        "answer": "Create a script that renames multiple files in a directory based on user-defined patterns or naming conventions."
      },
      {
        "question": "Develop a Text Encryption/Decryption Tool.",
        "answer": "Implement a utility that encrypts and decrypts text using algorithms like the Caesar cipher, allowing user-defined keys."
      },
      {
        "question": "Create a Stock Price Tracker.",
        "answer": "Design an application that retrieves and displays real-time stock data from an API, along with trends and alerts."
      },
      {
        "question": "Build a News Aggregator.",
        "answer": "Use web scraping or news APIs to collect headlines from multiple sources and present them in a consolidated, organized format."
      },
      {
        "question": "Develop a Discord Bot.",
        "answer": "Utilize the `discord.py` library to create a bot that can manage server tasks, respond to commands, or interact with users."
      },
      {
        "question": "Create an Automated Email Sender.",
        "answer": "Using Python's `smtplib` and `email` libraries, build a script that sends emails automatically based on user-defined triggers."
      }
    ],
    bigCompanyQuestions: [
      {
        "question": "Explain Python's `asyncio` module.",
        "answer": "The `asyncio` module provides tools for asynchronous programming, enabling concurrency without multi-threading."
      },
      {
        "question": "How would you optimize a Python program for performance?",
        "answer": "Use techniques like profiling, algorithm optimization, leveraging libraries such as NumPy for heavy computations, and using built-in functions to reduce overhead."
      },
      {
        "question": "What is the difference between mutable and immutable objects in Python?",
        "answer": "Mutable objects can be changed after creation (e.g., lists, dictionaries) while immutable objects (e.g., tuples, strings) cannot be altered once created."
      },
      {
        "question": "Explain the Global Interpreter Lock (GIL) and its impact on multi-threading in Python.",
        "answer": "The GIL is a mutex that allows only one native thread to execute Python bytecode at a time, which can limit parallel execution in CPU-bound programs but does not affect I/O-bound tasks."
      },
      {
        "question": "How is memory managed in Python?",
        "answer": "Python manages memory through an automatic garbage collection system that uses reference counting and cyclic garbage collectors to reclaim unused memory."
      },
      {
        "question": "What is a Python decorator and how is it used?",
        "answer": "A decorator is a design pattern in Python that allows you to modify the behavior of functions or classes without changing their code by wrapping them in another function."
      },
      {
        "question": "Explain Python's list and dictionary comprehensions.",
        "answer": "Comprehensions provide a concise way to create lists, dictionaries, or sets using a single readable expression, often involving an iterable and optional conditional logic."
      },
      {
        "question": "What is type hinting in Python and how does it improve code quality?",
        "answer": "Type hinting allows developers to annotate variables and function signatures with expected data types, aiding in code readability, maintainability, and enabling static type checking with tools like MyPy."
      },
      {
        "question": "How does exception handling work in Python?",
        "answer": "Python uses try-except blocks to catch and handle exceptions, with optional else and finally clauses to manage code that should run when no exceptions occur or regardless of exceptions."
      },
      {
        "question": "Explain the concept of context managers and how to create one.",
        "answer": "Context managers in Python manage resource allocation and release using the `with` statement. They are created by implementing the `__enter__` and `__exit__` methods in a class."
      },
      {
        "question": "What is monkey patching in Python and when might it be used?",
        "answer": "Monkey patching is the dynamic modification of a class or module at runtime, often used in testing or to temporarily alter behaviors in third-party libraries."
      },
      {
        "question": "How do you handle concurrency in Python beyond threading?",
        "answer": "Concurrency can be managed with multi-processing, asynchronous programming with `asyncio`, or using libraries such as concurrent.futures to run tasks in parallel."
      },
      {
        "question": "What are generators in Python and how do they differ from iterators?",
        "answer": "Generators are a type of iterator that yield items one at a time using the `yield` keyword, allowing lazy evaluation and reduced memory usage compared to generating all items at once."
      },
      {
        "question": "Explain the difference between shallow copy and deep copy in Python.",
        "answer": "A shallow copy creates a new object but does not create copies of nested objects, whereas a deep copy recursively copies all nested objects, resulting in completely independent objects."
      },
      {
        "question": "How do you implement unit testing in Python?",
        "answer": "Unit testing is typically implemented using frameworks such as unittest, pytest, or nose, which help in writing test cases that validate individual units of code to ensure they work as expected."
      },
      {
        "question": "What are some key differences between Python 2 and Python 3?",
        "answer": "Python 3 introduced changes such as the print() function, division behavior, Unicode support, and improvements to standard libraries, making it more consistent and forward-looking compared to Python 2."
      },
      {
        "question": "Describe how metaclasses work in Python.",
        "answer": "Metaclasses are 'classes of classes' that define how classes are created. They allow developers to customize class instantiation and behavior by overriding methods like __new__ or __init__ in a metaclass."
      },
      {
        "question": "How do decorators modify function behavior in Python?",
        "answer": "Decorators wrap a function and allow modification of its behavior before or after the execution of the function, without permanently modifying the original function's code."
      },
      {
        "question": "How does Python's garbage collection mechanism work?",
        "answer": "Python uses reference counting for immediate deallocation of objects and a cyclic garbage collector to handle reference cycles that cannot be cleaned up by reference counting alone."
      },
      {
        "question": "What are lambda functions and when should you use them?",
        "answer": "Lambda functions are small anonymous functions defined with the lambda keyword, suitable for short, throwaway functions or as arguments to higher-order functions."
      },
      {
        "question": "How do you achieve dependency injection in Python?",
        "answer": "Dependency injection in Python can be achieved by passing dependencies as parameters to functions or constructors, or by using frameworks that support inversion of control."
      },
      {
        "question": "Describe how you would create a RESTful API using Flask or Django.",
        "answer": "Using Flask, you can define routes with decorators to handle HTTP methods and use JSON for data exchange. Django offers Django REST Framework which provides serializers, viewsets, and routers to efficiently build RESTful APIs."
      },
      {
        "question": "What is the significance of PEP 8 in Python development?",
        "answer": "PEP 8 is the Python style guide that promotes code readability and consistency across Python codebases, helping developers write clean and standardized code."
      },
      {
        "question": "How can static type checking be used to minimize errors in Python code?",
        "answer": "Static type checking can be performed using type hints along with tools such as MyPy, which analyze the code for type inconsistencies before runtime, reducing bugs and improving code clarity."
      },
      {
        "question": "What are the advantages of using virtual environments in Python?",
        "answer": "Virtual environments isolate project dependencies, ensuring that different projects do not conflict with each other and allowing for reproducible builds with specific package versions."
      },
      {
        "question": "What is the role of the __init__ method in Python classes?",
        "answer": "The __init__ method is a constructor that initializes a new object's attributes when a class instance is created, setting up its initial state."
      },
      {
        "question": "How do you work with file I/O in Python and what best practices should you follow?",
        "answer": "File I/O in Python is handled with the open() function and typically managed using context managers (the with statement) to ensure files are properly closed after operations."
      },
      {
        "question": "What are modules and packages in Python, and how do you structure a large codebase?",
        "answer": "Modules are individual Python files and packages are collections of modules within a directory containing an __init__.py file. Structuring a large codebase involves organizing code into logical packages and modules to improve maintainability and reusability."
      },
      {
        "question": "How do you implement data serialization in Python?",
        "answer": "Data serialization in Python can be achieved using libraries such as pickle for Python objects, json for JSON data, or more specialized formats like XML or YAML depending on application needs."
      },
      {
        "question": "How would you handle API rate limiting in a Python application?",
        "answer": "API rate limiting can be managed by implementing exponential backoff, using third-party libraries like 'ratelimit', or managing requests with a queue system to ensure compliance with API usage policies."
      },
      {
        "question": "Explain the concept of immutability and its importance in concurrent programming.",
        "answer": "Immutability means that once an object is created, it cannot be altered. This is important in concurrent programming because immutable objects can be shared freely between threads without the need for locks or synchronization."
      },
      {
        "question": "How do you debug and profile a Python application?",
        "answer": "Debugging can be done using tools like pdb, IDE debuggers, or logging, while profiling can be achieved with cProfile, line_profiler, or memory_profiler to diagnose performance bottlenecks."
      },
      {
        "question": "What are effective ways to secure a Python web application?",
        "answer": "Securing a Python web application involves practices like input validation, using HTTPS, proper error handling, securing dependencies, and employing frameworks’ security features to prevent common vulnerabilities such as SQL injection and XSS."
      },
      {
        "question": "Explain the differences between multi-threading and multi-processing in Python.",
        "answer": "Multi-threading involves running multiple threads within a single process, which can be limited by the GIL for CPU-bound tasks, whereas multi-processing runs separate processes that can utilize multiple CPU cores fully, bypassing the GIL."
      },
      {
        "question": "How can decorators be used to enforce access control in Python?",
        "answer": "Decorators can wrap functions or methods to check user credentials or permissions before execution, thereby enforcing access control policies without modifying the underlying business logic."
      },
      {
        "question": "What techniques would you use to handle logging in a production-level Python application?",
        "answer": "Effective logging can be implemented using Python's built-in logging module, configuring handlers, formatters, and log levels for different environments, and integrating with centralized logging systems for monitoring and analysis."
      }
    ],
    simpleProjects: [
      {
        "question": "Create a number guessing game.",
        "answer": "Python script where the user guesses a randomly generated number."
      },
      {
        "question": "Develop a basic calculator.",
        "answer": "Build a command-line calculator that performs addition, subtraction, multiplication, and division."
      },
      {
        "question": "Create a text-based adventure game.",
        "answer": "Use Python to build a simple game with choices leading to different outcomes."
      },
      {
        "question": "Build a command-line to-do list application.",
        "answer": "Create an app that allows users to add, view, and delete tasks, storing them in a file or in memory."
      },
      {
        "question": "Design a simple address book.",
        "answer": "Develop a program to store, search, and update contact information using dictionaries or files."
      },
      {
        "question": "Develop a basic quiz game.",
        "answer": "Create a quiz game that asks multiple-choice questions and tracks the user's score."
      },
      {
        "question": "Create a countdown timer.",
        "answer": "Build a simple countdown timer that accepts a duration and displays the remaining time."
      },
      {
        "question": "Develop a digital clock.",
        "answer": "Write a program that displays the current time in real-time using Python's time module."
      },
      {
        "question": "Make a currency converter.",
        "answer": "Build a converter that transforms amounts between different currencies using fixed or API-fetched exchange rates."
      },
      {
        "question": "Create a simple password generator.",
        "answer": "Develop a tool that generates random passwords based on user-specified criteria like length and character types."
      },
      {
        "question": "Build a palindrome checker.",
        "answer": "Write a program to check if a given string is a palindrome, ignoring spaces and punctuation."
      },
      {
        "question": "Develop a word frequency counter.",
        "answer": "Create a script that reads a text file and counts the occurrence of each word."
      },
      {
        "question": "Build a file organizer.",
        "answer": "Develop a utility to group and move files into directories based on their file extensions."
      },
      {
        "question": "Create a Hangman game.",
        "answer": "Implement the classic Hangman game where the user guesses letters to identify a hidden word."
      },
      {
        "question": "Develop a simple stopwatch.",
        "answer": "Build an application that allows users to start, pause, and reset a stopwatch."
      },
      {
        "question": "Build a factorial calculator.",
        "answer": "Write a program that computes the factorial of a given number using recursion or iteration."
      },
      {
        "question": "Create a Fibonacci sequence generator.",
        "answer": "Develop a script that prints out the Fibonacci sequence up to a specified number of terms."
      },
      {
        "question": "Develop a simple interest calculator.",
        "answer": "Create a tool that computes simple interest based on principal, rate, and time inputs."
      },
      {
        "question": "Create a BMI calculator.",
        "answer": "Build an application that calculates Body Mass Index from height and weight inputs and categorizes the result."
      },
      {
        "question": "Develop a basic contact manager.",
        "answer": "Build a command-line application to add, update, delete, and search for contacts."
      },
      {
        "question": "Implement a maze generator.",
        "answer": "Write a program that generates a simple maze using random algorithms and displays it in the console."
      },
      {
        "question": "Build a Rock, Paper, Scissors game.",
        "answer": "Create a simple game where a user plays Rock, Paper, Scissors against the computer using random choices."
      },
      {
        "question": "Create a simple web request tester.",
        "answer": "Develop a program that sends HTTP requests using the requests library and displays the responses."
      },
      {
        "question": "Build a command-line diary application.",
        "answer": "Write an app that lets users add daily journal entries and saves them to a text file."
      },
      {
        "question": "Develop an encryption/decryption tool using a Caesar cipher.",
        "answer": "Implement a script that shifts characters in a string to encode and decode messages."
      },
      {
        "question": "Create a prime number checker.",
        "answer": "Write a program that tests if a given number is prime and returns the result."
      },
      {
        "question": "Build a matrix calculator.",
        "answer": "Develop a utility that performs addition, subtraction, and multiplication of matrices input by the user."
      },
      {
        "question": "Implement a unit conversion tool.",
        "answer": "Create a program to convert between various units (e.g., temperature, length, weight) based on user input."
      },
      {
        "question": "Develop a server ping tool.",
        "answer": "Write a script that uses the os or subprocess module to ping a server and report the response time."
      },
      {
        "question": "Create a password strength checker.",
        "answer": "Build a tool that evaluates a password's strength based on length, complexity, and character variety."
      },
      {
        "question": "Develop a recipe finder using a text dataset.",
        "answer": "Write a program that searches a collection of recipes stored in a file or list based on ingredient keywords."
      },
      {
        "question": "Build a text file merger.",
        "answer": "Create a utility that concatenates multiple text files into one, with options to add separators between contents."
      },
      {
        "question": "Implement a basic data visualizer for CSV files.",
        "answer": "Develop a script that reads CSV data and generates simple plots using libraries like matplotlib."
      },
      {
        "question": "Create a simple log file analyzer.",
        "answer": "Build a program that reads log files, extracts useful information, and presents summary statistics."
      },
      {
        "question": "Develop a random joke generator.",
        "answer": "Write a script that selects and displays a random joke from a predefined list each time it is run."
      }
    ]
  },
  {
    title: "Data Structures",
    slug: "data-structures",
    description:
      "Data structures are essential tools in computer science for organizing, managing, and storing data efficiently to enable effective algorithm implementation.",
    imgSrc: "https://img.icons8.com/?size=500&id=33149&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What are the main types of data structures?",
        answer:
          "The main types include arrays, linked lists, stacks, queues, trees, graphs, hash tables, and heaps.",
      },
      {
        question: "What is the difference between an array and a linked list?",
        answer:
          "An array stores elements in contiguous memory locations, while a linked list stores elements as nodes connected via pointers.",
      },
      {
        question: "What is a stack, and where is it used?",
        answer:
          "A stack is a LIFO (Last In, First Out) data structure used in recursion, expression evaluation, and undo operations in editors.",
      },
      {
        question: "What is a queue, and what are its types?",
        answer:
          "A queue is a FIFO (First In, First Out) data structure. Types include simple queues, circular queues, and priority queues.",
      },
      {
        question: "What is a binary search tree (BST)?",
        answer:
          "A BST is a tree where each node has at most two children, and the left child is less than the parent, while the right child is greater.",
      },
      {
        question:
          "What is the difference between BFS and DFS in graph traversal?",
        answer:
          "BFS (Breadth-First Search) explores level by level, while DFS (Depth-First Search) explores as deep as possible along branches.",
      },
      {
        question: "What is a hash table, and how does it work?",
        answer:
          "A hash table is a data structure that maps keys to values using a hash function for fast lookups, insertions, and deletions.",
      },
      {
        question:
          "What is the time complexity of searching in a balanced binary search tree?",
        answer:
          "The time complexity is O(log n) in a balanced binary search tree.",
      },
      {
        question: "What are the advantages of using a heap?",
        answer:
          "Heaps provide efficient access to the smallest or largest element in O(1) time and are used in priority queues and heap sort.",
      },
      {
        question: "What is a trie, and where is it used?",
        answer:
          "A trie is a tree-like data structure used for efficient retrieval of strings, commonly used in autocomplete and spell-checking.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Implement a stack and queue using arrays.",
        answer:
          "Write code to simulate stack and queue operations using arrays for storage.",
      },
      {
        question: "Build a binary search tree.",
        answer:
          "Create a BST with insertion, deletion, and search functionalities.",
      },
      {
        question: "Develop a graph traversal algorithm.",
        answer:
          "Implement BFS and DFS for a graph represented using an adjacency list.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "Explain the difference between a min-heap and a max-heap.",
        answer:
          "A min-heap ensures the smallest element is at the root, while a max-heap ensures the largest element is at the root.",
      },
      {
        question: "How would you detect a cycle in a graph?",
        answer:
          "Use algorithms like DFS with a visited set or Union-Find to detect cycles in a graph.",
      },
      {
        question: "What is the time complexity of inserting into a hash table?",
        answer:
          "The average time complexity is O(1), but it can degrade to O(n) in case of hash collisions.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a program to reverse a linked list.",
        answer:
          "Write a function to reverse the elements of a singly linked list.",
      },
      {
        question:
          "Develop a program to check if a string has balanced parentheses.",
        answer:
          "Use a stack to verify if parentheses in a string are balanced.",
      },
      {
        question: "Build a program to find the shortest path in a graph.",
        answer:
          "Implement Dijkstra's algorithm to find the shortest path between nodes in a weighted graph.",
      },
    ],
  },
  {
    title: "Algorithms",
    slug: "algorithms",
    description:
      "Algorithms are step-by-step procedures or formulas for solving problems efficiently, forming the backbone of computer programming and data processing.",
    imgSrc: "https://img.icons8.com/?size=500&id=uZt9I5L9rHsu&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What are the characteristics of a good algorithm?",
        answer:
          "A good algorithm is correct, efficient, clear, and has a well-defined input and output.",
      },
      {
        question:
          "What is the difference between divide and conquer and dynamic programming?",
        answer:
          "Divide and conquer solves problems by dividing them into sub-problems, solving each independently. Dynamic programming solves overlapping sub-problems by storing results for reuse.",
      },
      {
        question: "What is the time complexity of binary search?",
        answer: "The time complexity of binary search is O(log n).",
      },
      {
        question: "What is a greedy algorithm?",
        answer:
          "A greedy algorithm makes the locally optimal choice at each step with the hope of finding a global optimum.",
      },
      {
        question:
          "What is the difference between an algorithm's worst-case and average-case complexity?",
        answer:
          "Worst-case complexity represents the maximum time or space required, while average-case complexity is the expected time or space for typical inputs.",
      },
      {
        question: "What is the purpose of sorting algorithms?",
        answer:
          "Sorting algorithms arrange elements in a specific order, such as ascending or descending, to optimize data retrieval and processing.",
      },
      {
        question: "What is the difference between BFS and DFS?",
        answer:
          "BFS explores nodes level by level, while DFS explores as deep as possible along each branch before backtracking.",
      },
      {
        question: "What is memoization in algorithms?",
        answer:
          "Memoization is an optimization technique that stores the results of expensive function calls for reuse to avoid redundant calculations.",
      },
      {
        question:
          "What is the difference between a stable and an unstable sorting algorithm?",
        answer:
          "A stable sorting algorithm maintains the relative order of equal elements, while an unstable one does not.",
      },
      {
        question: "What is the purpose of the Knapsack problem?",
        answer:
          "The Knapsack problem is a combinatorial optimization problem that aims to maximize the total value of items in a knapsack without exceeding its weight limit.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Implement a sorting algorithm.",
        answer:
          "Write code for bubble sort, merge sort, or quicksort and compare their performance.",
      },
      {
        question: "Build a pathfinding algorithm.",
        answer:
          "Implement Dijkstra's or A* algorithm to find the shortest path in a weighted graph.",
      },
      {
        question: "Develop a dynamic programming solution.",
        answer:
          "Solve the Fibonacci sequence or the Knapsack problem using dynamic programming.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "Explain the difference between quicksort and merge sort.",
        answer:
          "Quicksort is an in-place, divide-and-conquer algorithm, while merge sort requires additional space but guarantees O(n log n) performance.",
      },
      {
        question: "How would you optimize a brute-force algorithm?",
        answer:
          "Use techniques like memoization, pruning, or dynamic programming to reduce redundant computations and improve efficiency.",
      },
      {
        question: "What is the purpose of the traveling salesman problem?",
        answer:
          "It aims to find the shortest possible route that visits each city once and returns to the starting point, optimizing for cost or distance.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a program to find the greatest common divisor (GCD).",
        answer:
          "Implement the Euclidean algorithm to calculate the GCD of two numbers.",
      },
      {
        question: "Develop a prime number checker.",
        answer:
          "Write a program to check if a number is prime using an efficient algorithm.",
      },
      {
        question: "Build a program to find all permutations of a string.",
        answer:
          "Use recursion to generate all possible arrangements of characters in a string.",
      },
    ],
  },
  {
    title: "Node.js",
    slug: "nodejs",
    description:
      "Node.js is a runtime environment that enables JavaScript to run on the server side, widely used for building scalable and efficient web applications.",
    imgSrc: "https://img.icons8.com/?size=500&id=hsPbhkOH4FMe&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is the purpose of the `process` object in Node.js?",
        answer: "The `process` object provides information about the current Node.js process and allows you to interact with it, such as reading environment variables and handling signals.",
      },
      {
        question: "What are the different types of streams in Node.js?",
        answer: "The different types of streams include Readable, Writable, Duplex, and Transform streams, each serving specific purposes for data handling.",
      },
      {
        question: "How do you handle errors in Node.js?",
        answer: "Errors in Node.js can be handled using try-catch blocks for synchronous code and error-first callbacks or promises for asynchronous operations.",
      },
      {
        question: "What is the purpose of the `npm` command?",
        answer: "The `npm` command is used to manage packages in Node.js applications, allowing developers to install, update, and manage dependencies easily.",
      },
      {
        question: "What are Promises in Node.js?",
        answer: "Promises are objects that represent the eventual completion (or failure) of an asynchronous operation, providing a cleaner alternative to callback functions.",
      },
      {
        question: "Explain the concept of middleware in Express.js.",
        answer: "Middleware functions in Express.js are functions that have access to the request object, response object, and next middleware function, allowing for request processing and response handling.",
      },
      {
        question: "What is a callback hell and how can it be avoided?",
        answer: "Callback hell refers to deeply nested callbacks that make code hard to read; it can be avoided using Promises or async/await syntax.",
      },
      {
        question: "What is the role of the `EventEmitter` class in Node.js?",
        answer: "The `EventEmitter` class allows objects to emit events and register listeners for those events, facilitating an event-driven architecture.",
      },
      {
        question: "How can you create a simple HTTP server in Node.js?",
        answer: "A simple HTTP server can be created using the `http` module with `http.createServer()` method to handle incoming requests.",
      },
      {
        question: "What is the difference between synchronous and asynchronous programming?",
        answer: "Synchronous programming executes tasks sequentially while asynchronous programming allows tasks to run concurrently without blocking execution.",
      },
      {
        question: "How do you implement routing in Express.js?",
        answer: "Routing in Express.js is implemented by defining routes using methods like `app.get()`, `app.post()`, etc., to handle different HTTP requests.",
      },
      {
        question: "What is CORS and how can it be enabled in a Node.js application?",
        answer: "CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to a different domain; it can be enabled using middleware like `cors`.",
      },
      {
        question: "What are environment variables and how are they used in Node.js?",
        answer: "Environment variables store configuration settings outside of code; they can be accessed in Node.js using `process.env`.",
      },
      {
        question: "Explain what clustering is in Node.js.",
        answer: "Clustering allows multiple instances of a Node.js application to run on different CPU cores, improving performance by handling more requests simultaneously.",
      },
      {
        question: "What is the purpose of the `package-lock.json` file?",
        answer: "The `package-lock.json` file locks down the versions of dependencies installed, ensuring consistent installations across environments.",
      },
      {
        question: "How does Node.js handle child processes?",
        answer: "Node.js uses the `child_process` module to spawn child processes that can run concurrently with the main process.",
      },
      {
        question: "What is a buffer in Node.js?",
        answer: "A buffer is a temporary storage area for binary data; it allows manipulation of raw binary data directly.",
      },
      {
        question: "How do you manage sessions in a Node.js application?",
        answer: "Sessions can be managed using middleware like `express-session`, which stores session data on the server side.",
      },
      {
        question: "What is the role of `async/await` in Node.js?",
        answer: "`async/await` provides a way to write asynchronous code that looks synchronous, improving readability and error handling.",
      },
      {
        question: "Explain what WebSockets are and their use case with Node.js.",
        answer: "WebSockets provide full-duplex communication channels over a single TCP connection, commonly used for real-time applications like chat apps or live notifications.",
      },
      {
        question: "How does garbage collection work in Node.js?",
        answer: "Garbage collection automatically frees up memory by removing objects that are no longer referenced by the application.",
      },
      {
        question: "What are template engines and how are they used with Node.js?",
        answer: "Template engines like EJS or Pug allow dynamic generation of HTML pages by embedding JavaScript code within HTML templates.",
      },
      {
        question: "What is rate limiting and how can it be implemented in a Node.js app?",
        answer: "Rate limiting restricts the number of requests a user can make within a certain timeframe; it can be implemented using middleware like `express-rate-limit`.",
      },
      {
        question: "How do you set up HTTPS in a Node.js server?",
        answer: "HTTPS can be set up by creating an HTTPS server using the `https` module along with SSL certificates for secure communication.",
      },
      {
        question: "What are some common security practices for a Node.js application?",
        answer: "Common security practices include validating user input, sanitizing data, using HTTPS, implementing authentication mechanisms, and keeping dependencies updated.",
      },
      {
        question: "Explain what JSON Web Tokens (JWT) are and their purpose.",
        answer: "JWTs are compact tokens used for securely transmitting information between parties as JSON objects; they are commonly used for authentication.",
      },
      {
        question: "How do you connect to a MongoDB database from a Node.js application?",
        answer: "Connection to MongoDB can be established using libraries like Mongoose or MongoDB native driver with connection strings specifying database details.",
      },
      {
        question: "What is dotenv and how does it work with Node.js applications?",
        answer: "Dotenv is a module that loads environment variables from a `.env` file into `process.env`, simplifying configuration management.",
      },
      {
        question: "Explain what API versioning is and why it's important.",
        answer: "API versioning allows developers to make changes to an API without breaking existing clients; it's important for maintaining backward compatibility.",
      },
      {
        question: "How do you implement pagination in an API built with Express.js?",
        answer: "Pagination can be implemented by accepting query parameters for page number and limit, then querying databases accordingly to return subsets of data.",
      },
      {
        question: "What role does TypeScript play in enhancing JavaScript development within Node.js applications?",
        answer: "TypeScript adds static typing to JavaScript which helps catch errors at compile time rather than runtime, improving code quality and maintainability."
      },
      {
        question: "Describe how you would set up continuous integration/continuous deployment (CI/CD) for a Node.js application.",
        answer: "CI/CD can be set up using tools like Jenkins or GitHub Actions that automate testing, building, and deploying applications whenever changes are made to the codebase."
      },
      {
        "question": "What is the difference between `setImmediate()` and `process.nextTick()` in Node.js?",
        "answer": "`setImmediate()` executes a callback after I/O events in the next event loop iteration, while `process.nextTick()` executes callbacks immediately after the current operation completes, before the event loop continues."
      },
      {
        "question": "How does the event loop work in Node.js?",
        "answer": "The event loop in Node.js handles asynchronous operations by executing tasks in phases such as timers, I/O callbacks, idle/prepare, poll, check, and close callbacks."
      },
      {
        "question": "What is the difference between `fs.readFile()` and `fs.createReadStream()`?",
        "answer": "`fs.readFile()` reads the entire file into memory before processing, whereas `fs.createReadStream()` reads the file in chunks, making it more memory-efficient for large files."
      },
      {
        "question": "How do you handle file uploads in a Node.js application?",
        "answer": "File uploads can be handled using middleware like `multer` in Express.js, which processes multipart form data and stores uploaded files on the server."
      },
      {
        "question": "What is the difference between `require` and `import` in Node.js?",
        "answer": "`require` is used in CommonJS modules, while `import` is used in ES Modules (ESM). ES Modules provide better static analysis and tree shaking."
      },
      {
        "question": "How does the `cluster` module improve Node.js performance?",
        "answer": "The `cluster` module enables multi-core utilization by forking multiple worker processes that share the same server port, improving application scalability."
      },
      {
        "question": "What is an example of using WebSockets in a Node.js application?",
        "answer": "A WebSocket server can be created using the `ws` package in Node.js, enabling real-time communication for applications like chat apps and live updates."
      },
      {
        "question": "What are some common memory leaks in Node.js and how do you prevent them?",
        "answer": "Common memory leaks include global variable usage, unclosed database connections, event listener leaks, and large objects stored in memory. They can be prevented using proper resource cleanup, weak references, and monitoring tools."
      },
      {
        "question": "What is the difference between `app.use()` and route-specific methods in Express.js?",
        "answer": "`app.use()` is used for applying middleware globally, while route-specific methods (`app.get()`, `app.post()`) handle specific HTTP methods and endpoints."
      },
      {
        "question": "How does Node.js handle concurrency?",
        "answer": "Node.js handles concurrency through its event-driven, non-blocking I/O model, utilizing the event loop and worker threads when necessary."
      },
      {
        "question": "What is the purpose of the `crypto` module in Node.js?",
        "answer": "The `crypto` module provides cryptographic functionality like hashing, encryption, and key generation to enhance security in Node.js applications."
      },
      {
        "question": "What is the difference between blocking and non-blocking code in Node.js?",
        "answer": "Blocking code stops further execution until a task completes, while non-blocking code allows other operations to continue while a task is being processed."
      },
      {
        "question": "What is the role of middleware in Express.js?",
        "answer": "Middleware functions process requests before they reach the final route handler, enabling logging, authentication, and request modifications."
      },
      {
        "question": "How do you implement authentication in a Node.js application?",
        "answer": "Authentication can be implemented using libraries like `passport.js` for session-based authentication or `jsonwebtoken` (JWT) for token-based authentication."
      },
      {
        "question": "What are the benefits of using TypeScript with Node.js?",
        "answer": "TypeScript provides static typing, better code maintainability, and improved developer tooling, reducing runtime errors in Node.js applications."
      },
      {
        "question": "How does Node.js integrate with Redis?",
        "answer": "Node.js integrates with Redis using the `ioredis` or `redis` package to perform caching, session storage, and pub/sub messaging."
      },
      {
        "question": "How do you optimize a Node.js application for performance?",
        "answer": "Optimizations include using asynchronous operations, caching, clustering, load balancing, and profiling with tools like `node --prof`."
      },
      {
        "question": "What is `Helmet.js` and how does it improve security?",
        "answer": "`Helmet.js` is a middleware for Express.js that enhances security by setting various HTTP headers to prevent common vulnerabilities."
      },
      {
        "question": "What is the purpose of `compression` middleware in Express.js?",
        "answer": "The `compression` middleware reduces the size of response bodies using Gzip or Brotli, improving performance by minimizing data transfer."
      },
      {
        "question": "What are sticky sessions in Node.js?",
        "answer": "Sticky sessions ensure that requests from the same client are routed to the same server instance, often used in load-balanced environments."
      },
      {
        "question": "How do you deploy a Node.js application?",
        "answer": "Node.js applications can be deployed using cloud platforms like AWS, Heroku, or DigitalOcean, often managed with process managers like PM2 or Docker."
      },
      {
        "question": "What is the purpose of the `worker_threads` module?",
        "answer": "The `worker_threads` module enables multithreading in Node.js by running JavaScript code in parallel across multiple threads."
      },
      {
        "question": "What is the difference between `sessionStorage`, `localStorage`, and cookies?",
        "answer": "`sessionStorage` stores data for a session, `localStorage` persists data indefinitely, and cookies store small amounts of data sent with HTTP requests."
      },
      {
        "question": "How do you monitor and debug a Node.js application in production?",
        "answer": "Monitoring tools like PM2, New Relic, and Datadog help track performance and logs, while `node --inspect` enables debugging."
      },
      {
        "question": "How does `stream.pipe()` work in Node.js?",
        "answer": "`stream.pipe()` automatically manages the flow of data from a readable stream to a writable stream, preventing memory overload."
      },
      {
        "question": "What is the purpose of the `morgan` middleware in Express.js?",
        "answer": "`morgan` logs HTTP requests in Express.js applications, helping with debugging and monitoring request activity."
      },
      {
        "question": "How do you handle large file uploads efficiently in Node.js?",
        "answer": "Large file uploads can be handled efficiently using streaming, chunked uploads, and libraries like `busboy` or `multer`."
      },
      {
        "question": "What is an example of using the `os` module in Node.js?",
        "answer": "The `os` module provides system-related utilities like retrieving CPU information, memory usage, and platform details."
      },
      {
        "question": "How do you implement request validation in an Express.js API?",
        "answer": "Request validation can be implemented using libraries like `express-validator` or `joi` to ensure proper request formats."
      },
      {
        "question": "What are some best practices for writing scalable Node.js applications?",
        "answer": "Best practices include modularizing code, using async patterns, caching, optimizing database queries, and leveraging microservices where necessary."
      },
      {
        "question": "How can you implement WebRTC in a Node.js application?",
        "answer": "WebRTC can be implemented using libraries like `socket.io` and `simple-peer` for real-time peer-to-peer communication in web applications."
      }
    ],
    takeHomeProjects: [
      {
        "question": "Build a URL shortener.",
        "answer": "Develop a service that shortens long URLs and redirects users when they visit the shortened link."
      },
      {
        "question": "Create a notes-taking application.",
        "answer": "Build a full-stack app with Node.js and a database to allow users to create, edit, and delete notes."
      },
      {
        "question": "Develop a weather API.",
        "answer": "Fetch real-time weather data from an external API and serve it through an Express.js API."
      },
      {
        "question": "Build a task manager.",
        "answer": "Develop a task management system with user authentication and the ability to add, edit, and delete tasks."
      },
      {
        "question": "Implement a JWT-based authentication system.",
        "answer": "Create a secure authentication system using JSON Web Tokens (JWT) for user login and authorization."
      },
      {
        "question": "Create a blog platform.",
        "answer": "Develop a blogging system with user authentication, post creation, comments, and categories."
      },
      {
        "question": "Build a simple e-commerce backend.",
        "answer": "Implement product listing, cart management, and order processing using Node.js and a database."
      },
      {
        "question": "Develop a cryptocurrency price tracker.",
        "answer": "Fetch live cryptocurrency prices from an API and display them using a Node.js backend."
      },
      {
        "question": "Create a REST API for a movie database.",
        "answer": "Develop an API to manage movies, directors, and ratings using Node.js and MongoDB."
      },
      {
        "question": "Build a polling application.",
        "answer": "Create an app where users can create polls, vote, and view poll results in real time."
      },
      {
        "question": "Develop a URL monitoring service.",
        "answer": "Build a system to check the uptime of websites and notify users if a site is down."
      },
      {
        "question": "Implement role-based access control (RBAC).",
        "answer": "Create a user management system where different roles have different levels of access."
      },
      {
        "question": "Create an email sending service.",
        "answer": "Develop an API to send emails using a service like SendGrid, Resend, or Nodemailer."
      },
      {
        "question": "Build a stock market dashboard.",
        "answer": "Fetch and display real-time stock market prices using an external financial API."
      },
      {
        "question": "Develop a booking system.",
        "answer": "Implement a reservation system for appointments, hotels, or events with scheduling features."
      },
      {
        "question": "Create a social media API.",
        "answer": "Develop an API with features like user profiles, posts, likes, and comments."
      },
      {
        "question": "Build an expense tracker.",
        "answer": "Develop a system for users to track their income and expenses, with categories and reports."
      },
      {
        "question": "Develop a quiz application.",
        "answer": "Create an interactive quiz system with multiple-choice questions and a scoring mechanism."
      },
      {
        "question": "Build a podcast streaming service.",
        "answer": "Develop an API that allows users to upload, stream, and manage podcasts."
      },
      {
        "question": "Implement a two-factor authentication (2FA) system.",
        "answer": "Add 2FA to a login system using an OTP sent via email or SMS."
      },
      {
        "question": "Create a job board API.",
        "answer": "Build an API where users can post jobs, apply, and search for job listings."
      },
      {
        "question": "Develop a PDF generation service.",
        "answer": "Create a Node.js service that generates PDFs from HTML templates using a library like Puppeteer."
      },
      {
        "question": "Build a web scraping tool.",
        "answer": "Use Puppeteer or Cheerio to scrape data from websites and store it in a database."
      },
      {
        "question": "Develop a live sports score tracker.",
        "answer": "Fetch live sports scores from an API and display them in real time."
      },
      {
        "question": "Create a news aggregator API.",
        "answer": "Fetch news articles from various sources and serve them through an API."
      },
      {
        "question": "Build a translation API.",
        "answer": "Use a translation service like Google Translate to provide multi-language text translation."
      },
      {
        "question": "Develop a habit tracking application.",
        "answer": "Allow users to track their daily habits, set goals, and view progress over time."
      },
      {
        "question": "Create a collaborative document editing tool.",
        "answer": "Implement a real-time document editor using WebSockets or Firebase."
      },
      {
        "question": "Build an AI chatbot.",
        "answer": "Develop a chatbot that responds to user queries using OpenAI's API or a custom NLP model."
      },
      {
        "question": "Implement a GraphQL API.",
        "answer": "Build a GraphQL API as an alternative to REST, allowing flexible data fetching."
      }
    ],
    bigCompanyQuestions: [
      {
        "question": "How do you prevent memory leaks in a Node.js application?",
        "answer": "Avoid global variables, use proper event listener management, employ weak maps for caching, and utilize memory profiling tools like Chrome DevTools or Node.js heap snapshots."
      },
      {
        "question": "What are the key differences between cluster mode and worker threads in Node.js?",
        "answer": "Cluster mode creates multiple child processes to share server load, while worker threads run lightweight parallel tasks within the same process."
      },
      {
        "question": "How would you debug performance bottlenecks in a Node.js application?",
        "answer": "Use tools like Node.js Profiler, Chrome DevTools, `clinic.js`, or `0x` to analyze CPU usage, memory leaks, and event loop delays."
      },
      {
        "question": "How does the event loop work internally in Node.js?",
        "answer": "The event loop processes phases (timers, I/O callbacks, idle, poll, check, close), handling asynchronous operations using a single-threaded, non-blocking architecture."
      },
      {
        "question": "What are the trade-offs between using Redis and in-memory caching in a Node.js app?",
        "answer": "Redis provides persistent, distributed caching, while in-memory caching (e.g., LRU cache) is faster but limited to a single instance and lost on restart."
      },
      {
        "question": "How does Node.js handle backpressure in streams?",
        "answer": "Node.js manages backpressure by using the `highWaterMark` option, the `pause()` and `resume()` methods, and piping data efficiently between readable and writable streams."
      },
      {
        "question": "Explain the importance of process.nextTick() and setImmediate().",
        "answer": "`process.nextTick()` schedules callbacks at the end of the current event loop iteration, while `setImmediate()` executes in the check phase of the next cycle."
      },
      {
        "question": "How would you design a rate limiter for an API in Node.js?",
        "answer": "Use `express-rate-limit` middleware or implement Redis-based counters to track request counts per user/IP and enforce limits within a given timeframe."
      },
      {
        "question": "What is a worker pool, and how does it help in Node.js performance?",
        "answer": "A worker pool allows CPU-intensive tasks to be offloaded to separate threads using the Worker Threads API, improving performance for computational tasks."
      },
      {
        "question": "How does Node.js handle SSL termination and security best practices?",
        "answer": "Use a reverse proxy like Nginx for SSL termination, enforce HTTPS with `helmet`, and manage secure headers and TLS configurations."
      },
      {
        "question": "What are the differences between HTTP/1.1, HTTP/2, and HTTP/3 in the context of Node.js?",
        "answer": "HTTP/2 enables multiplexing and server push, HTTP/3 introduces QUIC for lower latency, while HTTP/1.1 relies on persistent connections and request queuing."
      },
      {
        "question": "How do you prevent SQL injection and NoSQL injection in a Node.js app?",
        "answer": "Use parameterized queries with SQL databases, sanitize inputs for NoSQL databases, and apply security libraries like `express-validator`."
      },
      {
        "question": "How would you optimize database queries in a large-scale Node.js application?",
        "answer": "Use indexing, query optimization techniques, connection pooling, caching strategies, and monitoring tools like New Relic or PM2."
      },
      {
        "question": "What is the role of a reverse proxy in a microservices architecture?",
        "answer": "A reverse proxy handles load balancing, request routing, SSL termination, and security filtering for microservices-based applications."
      },
      {
        "question": "How do you ensure zero downtime deployments in a Node.js application?",
        "answer": "Use blue-green deployments, rolling updates, feature flags, and load balancers to gradually shift traffic between old and new versions."
      },
      {
        "question": "Explain the differences between synchronous and asynchronous logging in Node.js.",
        "answer": "Synchronous logging blocks execution, while asynchronous logging (e.g., using `pino` or `winston`) buffers logs and writes them efficiently to storage."
      },
      {
        "question": "What strategies would you use to handle high traffic in a Node.js application?",
        "answer": "Implement caching, load balancing, horizontal scaling, microservices architecture, and efficient database indexing."
      },
      {
        "question": "How does Node.js handle long-running tasks, and what are the best practices?",
        "answer": "Offload heavy computations to worker threads, background queues (e.g., BullMQ), or microservices instead of blocking the event loop."
      },
      {
        "question": "What are the security risks of using third-party packages in a Node.js application?",
        "answer": "Risks include supply chain attacks, vulnerabilities in dependencies, and outdated packages; mitigate by using `npm audit`, `snyk`, and regular updates."
      },
      {
        "question": "How would you handle millions of concurrent WebSocket connections in a Node.js server?",
        "answer": "Use horizontal scaling with multiple WebSocket servers, Redis Pub/Sub for message broadcasting, and optimized event-driven architecture."
      },
      {
        "question": "What are the differences between monolithic and microservices architectures?",
        "answer": "Monolithic applications are a single codebase, while microservices break functionality into independent services communicating over APIs."
      },
      {
        "question": "How does service discovery work in a microservices-based Node.js system?",
        "answer": "Service discovery uses tools like Consul, Eureka, or Kubernetes to dynamically locate and route requests to available services."
      },
      {
        "question": "What is gRPC, and how does it compare to REST in Node.js?",
        "answer": "gRPC is a high-performance RPC framework using Protocol Buffers, offering better efficiency and streaming capabilities than REST-based APIs."
      },
      {
        "question": "How do you handle distributed logging in a multi-service Node.js application?",
        "answer": "Use centralized logging solutions like ELK Stack, Loki, or CloudWatch, along with structured logs and correlation IDs."
      },
      {
        "question": "What is GraphQL, and how does it improve over REST?",
        "answer": "GraphQL allows clients to query only the needed data, reducing over-fetching and under-fetching issues common in REST APIs."
      },
      {
        "question": "How do you handle API versioning in large-scale applications?",
        "answer": "Use URL versioning (`/v1/`), request header versioning, or GraphQL schema versioning strategies to maintain backward compatibility."
      },
      {
        "question": "What are the benefits and drawbacks of using Serverless with Node.js?",
        "answer": "Serverless reduces infrastructure management but introduces cold start latency and vendor lock-in; best suited for event-driven workloads."
      },
      {
        "question": "How do you implement feature toggles in a Node.js application?",
        "answer": "Use tools like LaunchDarkly or build a toggle system using environment variables and a database for dynamic feature flagging."
      },
      {
        "question": "What are the key principles of event-driven architecture in Node.js?",
        "answer": "Event-driven architecture enables decoupled services using message brokers like Kafka, RabbitMQ, or AWS SNS/SQS for asynchronous processing."
      }
    ],
    simpleProjects: [
      {
        "question": "Create a simple HTTP server.",
        "answer": "Use Node.js's `http` module to create a basic server that responds to client requests."
      },
      {
        "question": "Build a command-line tool.",
        "answer": "Develop a CLI tool using Node.js to perform tasks like file conversion or text manipulation."
      },
      {
        "question": "Develop a JSON file reader.",
        "answer": "Write a Node.js script to read and parse a JSON file, displaying its contents in the console."
      },
      {
        "question": "Create a basic REST API.",
        "answer": "Use Express.js to build a simple API with endpoints for handling GET and POST requests."
      },
      {
        "question": "Build a URL shortener.",
        "answer": "Use Express and a database (like MongoDB) to create a simple URL shortening service."
      },
      {
        "question": "Create a to-do list application.",
        "answer": "Develop a simple app using Node.js and a database to store tasks with CRUD functionality."
      },
      {
        "question": "Develop a weather information fetcher.",
        "answer": "Use an external API (like OpenWeatherMap) to fetch and display weather data based on user input."
      },
      {
        "question": "Build a file system explorer.",
        "answer": "Use Node.js's `fs` module to list and navigate through directories and files in the system."
      },
      {
        "question": "Create a basic chatbot.",
        "answer": "Develop a simple chatbot using Node.js and an AI API like OpenAI or Dialogflow."
      },
      {
        "question": "Build a Markdown converter.",
        "answer": "Use the `marked` package to convert Markdown files into HTML and display them."
      },
      {
        "question": "Develop a simple web scraper.",
        "answer": "Use `cheerio` or `puppeteer` to scrape content from a website and display it in JSON format."
      },
      {
        "question": "Create a random password generator.",
        "answer": "Build a CLI tool that generates secure random passwords of various lengths."
      },
      {
        "question": "Build an email sender.",
        "answer": "Use `nodemailer` to send emails from a Node.js application with SMTP settings."
      },
      {
        "question": "Develop a JSON formatter.",
        "answer": "Write a CLI tool that formats and pretty-prints JSON data from a file or API."
      },
      {
        "question": "Create a stock price tracker.",
        "answer": "Use an API like Alpha Vantage to fetch and display real-time stock prices."
      },
      {
        "question": "Build a currency converter.",
        "answer": "Fetch exchange rates from an API like ExchangeRate-API and convert currencies."
      },
      {
        "question": "Create a simple polling app.",
        "answer": "Develop an app where users can create and vote on polls with real-time results."
      },
      {
        "question": "Build a text-to-speech tool.",
        "answer": "Use the `say` package or an external API to convert text input into speech."
      },
      {
        "question": "Develop a notes-taking app.",
        "answer": "Build a simple app where users can create, update, and delete text notes."
      },
      {
        "question": "Create a CLI-based calculator.",
        "answer": "Write a command-line tool that performs basic arithmetic operations."
      },
      {
        "question": "Build an image resizer.",
        "answer": "Use the `sharp` package to resize and optimize images in various formats."
      },
      {
        "question": "Develop a countdown timer.",
        "answer": "Create a CLI tool that takes user input and counts down to zero with alerts."
      },
      {
        "question": "Create a basic file encryption tool.",
        "answer": "Use Node.js's `crypto` module to encrypt and decrypt files with a password."
      },
      {
        "question": "Build a local storage key-value store.",
        "answer": "Develop a simple key-value database using JSON files for storage."
      },
      {
        "question": "Create a terminal-based dictionary.",
        "answer": "Fetch word definitions from an API and display them in the terminal."
      },
      {
        "question": "Build a simple portfolio website generator.",
        "answer": "Use Node.js and EJS to generate a static portfolio website from user input."
      }
]

  },
  {
    title: "HTML",
    slug: "html",
    description:
      "HTML (HyperText Markup Language) is the standard language for creating web pages and structuring content on the web.",
    imgSrc: "https://img.icons8.com/?size=500&id=20909&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is HTML?",
        answer:
          "HTML stands for HyperText Markup Language, used to structure and present content on the web.",
      },
      {
        question: "What are semantic HTML elements?",
        answer:
          "Semantic elements clearly describe their purpose, such as `<header>`, `<footer>`, `<article>`, and `<section>`.",
      },
      {
        question:
          "What is the difference between block-level and inline elements?",
        answer:
          "Block-level elements start on a new line and take up the full width, while inline elements flow with the text and only take up as much width as needed.",
      },
      {
        question: "What is the purpose of the `<DOCTYPE>` declaration?",
        answer:
          "The `<DOCTYPE>` declaration specifies the HTML version and ensures the browser renders the page correctly.",
      },
      {
        question: "What are the differences between `<div>` and `<span>`?",
        answer:
          "`<div>` is a block-level element used for grouping content, while `<span>` is an inline element used for styling or marking up parts of text.",
      },
      {
        question: "What is the difference between `<script>` and `<noscript>`?",
        answer:
          "`<script>` is used to embed or reference JavaScript, while `<noscript>` provides fallback content for browsers that don't support JavaScript.",
      },
      {
        question:
          "What is the difference between the `<meta>` tag and `<title>` tag?",
        answer:
          "The `<meta>` tag provides metadata like description and keywords, while the `<title>` tag specifies the page title shown in the browser tab.",
      },
      {
        question: "What is the purpose of the `<alt>` attribute in images?",
        answer:
          "The `<alt>` attribute provides alternative text for images, improving accessibility and aiding search engines.",
      },
      {
        question: "What are forms in HTML, and how are they used?",
        answer:
          "Forms collect user input using elements like `<input>`, `<textarea>`, `<select>`, and `<button>`.",
      },
      {
        question: "What is the purpose of the `<link>` tag?",
        answer:
          "The `<link>` tag is used to link external resources, such as stylesheets, to the HTML document.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a portfolio webpage.",
        answer:
          "Use HTML to structure sections like About, Projects, and Contact, with proper semantic elements.",
      },
      {
        question: "Create a login form.",
        answer:
          "Design a login form with fields for username, password, and a submit button.",
      },
      {
        question: "Develop a responsive webpage.",
        answer:
          "Use HTML with media queries to create a webpage that adapts to different screen sizes.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How would you ensure accessibility in an HTML document?",
        answer:
          "Use semantic HTML, provide descriptive `<alt>` text for images, and ensure proper tab order and ARIA roles.",
      },
      {
        question: "What are meta tags, and why are they important?",
        answer:
          "Meta tags provide metadata about a webpage, like description, keywords, and viewport settings, which are essential for SEO and responsive design.",
      },
      {
        question: "What is the purpose of the `<picture>` element?",
        answer:
          "The `<picture>` element allows specifying multiple image sources for responsive or art-directed images.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a static webpage.",
        answer:
          "Design a simple webpage with a header, footer, and content sections using HTML.",
      },
      {
        question: "Build a table with data.",
        answer:
          "Use the `<table>` element to create a table displaying data like student grades or product prices.",
      },
      {
        question: "Design a navigation bar.",
        answer:
          "Create a navigation bar with links using `<nav>` and `<ul>` elements.",
      },
    ],
  },
  {
    title: "CSS",
    slug: "css",
    description:
      "CSS (Cascading Style Sheets) is used to style and layout web pages, controlling the appearance of elements like fonts, colors, and spacing.",
    imgSrc: "https://img.icons8.com/?size=500&id=21278&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is CSS?",
        answer:
          "CSS is a style sheet language used to describe the presentation of a document written in HTML or XML, including layout, colors, and fonts.",
      },
      {
        question: "What are the different ways to apply CSS to a webpage?",
        answer:
          "CSS can be applied inline, in the `<head>` section using `<style>`, or through an external stylesheet using the `<link>` tag.",
      },
      {
        question: "What is the box model in CSS?",
        answer:
          "The box model describes the rectangular boxes generated for elements, consisting of content, padding, border, and margin.",
      },
      {
        question: "What is the difference between `class` and `id` selectors?",
        answer:
          "`class` selectors can be applied to multiple elements, while `id` selectors are unique and can only be applied to one element.",
      },
      {
        question: "What are pseudo-classes in CSS?",
        answer:
          "Pseudo-classes are keywords added to selectors that define a special state of an element, such as `:hover`, `:focus`, and `:nth-child()`.",
      },
      {
        question:
          "What is the difference between `position: relative` and `position: absolute`?",
        answer:
          "`relative` positions an element relative to its normal position, while `absolute` positions an element relative to its closest positioned ancestor.",
      },
      {
        question: "What is the purpose of the `z-index` property?",
        answer:
          "The `z-index` property controls the stacking order of elements, with higher values placed on top of lower values.",
      },
      {
        question: "What is Flexbox, and how is it used?",
        answer:
          "Flexbox is a layout model that allows elements to align and distribute space within a container, using properties like `justify-content`, `align-items`, and `flex-direction`.",
      },
      {
        question:
          "What is the difference between `display: block` and `display: inline`?",
        answer:
          "`block` elements take up the full width of their container and start on a new line, while `inline` elements only take up as much width as needed and flow with the text.",
      },
      {
        question: "What are media queries in CSS?",
        answer:
          "Media queries are used to apply different styles based on the characteristics of the device or viewport, such as screen size or resolution.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Create a responsive webpage.",
        answer:
          "Design a webpage that adjusts its layout using CSS Grid or Flexbox for different screen sizes.",
      },
      {
        question: "Build a CSS-only navigation menu.",
        answer:
          "Create a vertical or horizontal navigation bar with hover effects using only CSS.",
      },
      {
        question: "Design a card component.",
        answer:
          "Create a card layout using CSS, including an image, text, and buttons, with hover effects for interactivity.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you optimize CSS for performance?",
        answer:
          "To optimize CSS, minimize file size, avoid redundant selectors, and use tools like CSS minifiers and critical CSS to load styles faster.",
      },
      {
        question: "What is the difference between `inline-block` and `block`?",
        answer:
          "`inline-block` allows elements to sit next to each other while maintaining block-level styling, whereas `block` elements take up the full width and start on a new line.",
      },
      {
        question: "What are CSS preprocessors, and how do they work?",
        answer:
          "CSS preprocessors like Sass or LESS extend CSS by adding variables, mixins, and functions, which are then compiled into standard CSS.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple webpage layout.",
        answer:
          "Design a basic layout with a header, content section, and footer using CSS for styling.",
      },
      {
        question: "Build a form with styled input fields.",
        answer:
          "Create a form with input fields, labels, and buttons, applying CSS for spacing, borders, and hover effects.",
      },
      {
        question: "Design a responsive grid layout.",
        answer:
          "Use CSS Grid or Flexbox to create a responsive grid layout that adapts to different screen sizes.",
      },
    ],
  },
  {
    title: "SQL",
    slug: "sql",
    description:
      "SQL (Structured Query Language) is used for managing and manipulating relational databases, including querying, inserting, updating, and deleting data.",
    imgSrc: "https://img.icons8.com/?size=500&id=UFF3hmipmJ2V&format=png&color=000000",
    
    interviewQuestions: [
      {
        "question": "What is SQL?",
        "answer": "SQL is a domain-specific language used for managing and querying relational databases."
      },
      {
        "question": "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
        "answer": "`INNER JOIN` returns only matching rows from both tables, while `LEFT JOIN` returns all rows from the left table and matching rows from the right table."
      },
      {
        "question": "What are primary keys and foreign keys?",
        "answer": "A primary key uniquely identifies each record in a table, while a foreign key is a field in one table that links to the primary key of another table."
      },
      {
        "question": "What is normalization?",
        "answer": "Normalization is the process of organizing database tables to reduce redundancy and dependency by dividing large tables into smaller, related tables."
      },
      {
        "question": "What is a subquery in SQL?",
        "answer": "A subquery is a query nested inside another query, often used to retrieve data for comparison or filtering."
      },
      {
        "question": "What is the difference between `GROUP BY` and `ORDER BY`?",
        "answer": "`GROUP BY` groups rows that have the same values into summary rows, while `ORDER BY` sorts the result set based on one or more columns."
      },
      {
        "question": "What is a `JOIN` operation in SQL?",
        "answer": "A `JOIN` operation combines rows from two or more tables based on a related column, such as a primary and foreign key."
      },
      {
        "question": "What is an index in SQL?",
        "answer": "An index is a database object that improves the speed of data retrieval operations on a table by creating a structured reference to the data."
      },
      {
        "question": "What is the difference between `WHERE` and `HAVING`?",
        "answer": "`WHERE` is used to filter rows before aggregation, while `HAVING` is used to filter groups after aggregation."
      },
      {
        "question": "What are the ACID properties in SQL?",
        "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability, which ensure reliable processing of database transactions."
      },
      {
        "question": "What is the difference between `DELETE`, `TRUNCATE`, and `DROP`?",
        "answer": "`DELETE` removes specific rows, `TRUNCATE` removes all rows but keeps the structure, and `DROP` deletes the table completely."
      },
      {
        "question": "What is a stored procedure?",
        "answer": "A stored procedure is a precompiled SQL code that can be executed multiple times to perform a specific task."
      },
      {
        "question": "What is a trigger in SQL?",
        "answer": "A trigger is a stored procedure that automatically executes when a specified event occurs in the database."
      },
      {
        "question": "What is the difference between `UNION` and `UNION ALL`?",
        "answer": "`UNION` combines result sets and removes duplicates, whereas `UNION ALL` includes all records, including duplicates."
      },
      {
        "question": "What is a composite key?",
        "answer": "A composite key is a primary key made up of two or more columns to uniquely identify a record."
      },
      {
        "question": "What are views in SQL?",
        "answer": "A view is a virtual table that is based on the result of a SELECT query and does not store data permanently."
      },
      {
        "question": "What is the difference between `CHAR` and `VARCHAR`?",
        "answer": "`CHAR` is a fixed-length data type, while `VARCHAR` is a variable-length data type that saves storage."
      },
      {
        "question": "What is a cursor in SQL?",
        "answer": "A cursor is a database object used to retrieve and manipulate data row by row."
      },
      {
        "question": "What is database denormalization?",
        "answer": "Denormalization is the process of adding redundancy to improve read performance by reducing joins."
      },
      {
        "question": "What is a self-join?",
        "answer": "A self-join is a join where a table is joined with itself to compare rows within the same table."
      },
      {
        "question": "What is a correlated subquery?",
        "answer": "A correlated subquery depends on the outer query and is executed once for each row processed by the outer query."
      },
      {
        "question": "What is the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()`?",
        "answer": "`RANK()` assigns rankings with gaps, `DENSE_RANK()` assigns rankings without gaps, and `ROW_NUMBER()` assigns a unique number to each row."
      },
      {
        "question": "What are common table expressions (CTEs)?",
        "answer": "A CTE is a temporary result set defined within the execution of a `WITH` clause for easier readability and recursion."
      },
      {
        "question": "What is a clustered index?",
        "answer": "A clustered index determines the physical order of data in a table, meaning there can be only one per table."
      },
      {
        "question": "What is a non-clustered index?",
        "answer": "A non-clustered index does not affect the physical order of data but maintains a separate structure for faster lookups."
      },
      {
        "question": "What is a foreign key constraint?",
        "answer": "A foreign key constraint ensures that a value in one table references an existing value in another table."
      },
      {
        "question": "What is the difference between `ANY` and `ALL` operators?",
        "answer": "`ANY` returns true if any condition matches, while `ALL` requires all conditions to match."
      },
      {
        "question": "What is the purpose of the `COALESCE()` function?",
        "answer": "`COALESCE()` returns the first non-null value from a list of arguments."
      },
      {
        "question": "What is the `CASE` statement in SQL?",
        "answer": "The `CASE` statement is used to perform conditional logic in SQL queries."
      },
      {
        "question": "What is the difference between `EXISTS` and `IN`?",
        "answer": "`EXISTS` returns true if a subquery returns any rows, while `IN` checks if a value matches a list of values."
      },
      {
        "question": "What is an SQL injection?",
        "answer": "SQL injection is a security vulnerability that allows attackers to execute malicious SQL statements by manipulating user inputs."
      },
      {
        "question": "How can SQL injection be prevented?",
        "answer": "Use prepared statements, parameterized queries, input validation, and proper access controls."
      },
      {
        "question": "What is a materialized view?",
        "answer": "A materialized view stores the results of a query physically for faster retrieval and can be refreshed periodically."
      },
      {
        "question": "What is sharding in databases?",
        "answer": "Sharding is a technique that splits large databases into smaller, faster, and more manageable parts across multiple servers."
      },
      {
        "question": "What is the difference between OLAP and OLTP?",
        "answer": "OLTP (Online Transaction Processing) is optimized for transaction speed, while OLAP (Online Analytical Processing) is designed for complex queries and reporting."
      },
      {
        "question": "What is the `LAG()` and `LEAD()` function?",
        "answer": "`LAG()` fetches the previous row's value, while `LEAD()` fetches the next row's value."
      },
      {
        "question": "What is a deadlock in SQL?",
        "answer": "A deadlock occurs when two transactions wait indefinitely for each other to release locks."
      },
      {
        "question": "What is partitioning in SQL databases?",
        "answer": "Partitioning is the process of dividing a table into smaller parts to improve query performance and manageability."
      }
],
takeHomeProjects: [
  {
    "question": "Design a simple employee database.",
    "answer": "Create tables for employees, departments, and salaries with appropriate primary and foreign keys."
  },
  {
    "question": "Build a student management system.",
    "answer": "Design tables for students, courses, enrollments, and grades, and write queries to retrieve student performance data."
  },
  {
    "question": "Create a library management system.",
    "answer": "Develop tables for books, authors, members, and transactions to track book checkouts and returns."
  },
  {
    "question": "Design a hotel booking system.",
    "answer": "Create tables for rooms, customers, reservations, and payments, and write queries to check room availability."
  },
  {
    "question": "Implement a banking system database.",
    "answer": "Design tables for customers, accounts, transactions, and loans, and write queries to calculate account balances."
  },
  {
    "question": "Develop an e-commerce database.",
    "answer": "Create tables for users, products, orders, payments, and reviews, and write queries to retrieve purchase history."
  },
  {
    "question": "Create an online food ordering system database.",
    "answer": "Design tables for customers, restaurants, menus, orders, and deliveries, and implement queries to track orders."
  },
  {
    "question": "Build a social media platform database.",
    "answer": "Create tables for users, posts, comments, likes, and friendships, and write queries to get a user's activity feed."
  },
  {
    "question": "Implement an inventory management system.",
    "answer": "Develop tables for products, suppliers, stock levels, and transactions, and write queries for restocking alerts."
  },
  {
    "question": "Create a movie rental system.",
    "answer": "Design tables for movies, customers, rentals, and payments, and implement queries to check rental history."
  },
  {
    "question": "Develop a hospital management system.",
    "answer": "Create tables for patients, doctors, appointments, treatments, and bills, and write queries to retrieve patient records."
  },
  {
    "question": "Build a transport management system.",
    "answer": "Design tables for vehicles, drivers, trips, passengers, and payments, and implement queries for route analysis."
  },
  {
    "question": "Create a job portal database.",
    "answer": "Develop tables for employers, job seekers, job postings, applications, and interviews, and write queries for job matching."
  },
  {
    "question": "Design a subscription-based service database.",
    "answer": "Create tables for users, plans, subscriptions, and payments, and implement queries to track renewals and cancellations."
  },
  {
    "question": "Build an event management system.",
    "answer": "Develop tables for events, attendees, tickets, and venues, and write queries to check seat availability."
  },
  {
    "question": "Implement a vehicle parking system.",
    "answer": "Create tables for parking slots, vehicles, customers, and payments, and implement queries to track available slots."
  },
  {
    "question": "Develop a flight booking system.",
    "answer": "Design tables for flights, passengers, bookings, and payments, and implement queries to check seat availability."
  },
  {
    "question": "Create a university course management system.",
    "answer": "Develop tables for professors, students, courses, enrollments, and grades, and write queries for GPA calculations."
  },
  {
    "question": "Build a digital wallet system.",
    "answer": "Create tables for users, transactions, and balances, and implement queries to track spending habits."
  },
  {
    "question": "Develop a real estate listing system.",
    "answer": "Design tables for properties, agents, buyers, and transactions, and write queries to find properties within a budget."
  },
  {
    "question": "Create a music streaming service database.",
    "answer": "Develop tables for users, songs, playlists, and artists, and write queries to track top trending songs."
  },
  {
    "question": "Implement a crowdfunding platform database.",
    "answer": "Create tables for projects, users, pledges, and rewards, and write queries to track funding progress."
  },
  {
    "question": "Build a weather data tracking system.",
    "answer": "Develop tables for locations, temperature records, and forecasts, and implement queries to analyze trends."
  },
  {
    "question": "Create a messaging application database.",
    "answer": "Design tables for users, messages, conversations, and attachments, and write queries to retrieve chat history."
  },
  {
    "question": "Develop a quiz application database.",
    "answer": "Create tables for quizzes, questions, answers, and users, and write queries to track scores and performance."
  },
  {
    "question": "Build a hotel feedback and rating system.",
    "answer": "Develop tables for hotels, users, reviews, and ratings, and implement queries to find top-rated hotels."
  },
  {
    "question": "Implement a bus ticket booking system.",
    "answer": "Create tables for buses, routes, schedules, passengers, and payments, and write queries to check seat availability."
  },
  {
    "question": "Design a pharmacy inventory and sales system.",
    "answer": "Develop tables for medicines, suppliers, customers, and sales, and implement queries to track stock levels."
  },
  {
    "question": "Create a personal finance tracking system.",
    "answer": "Build tables for users, income, expenses, categories, and budgets, and implement queries to generate financial reports."
  },
  {
    "question": "Develop an AI chatbot conversation storage database.",
    "answer": "Create tables for users, messages, timestamps, and chatbot responses, and implement queries to analyze interactions."
  },
  {
    "question": "Build a document management system.",
    "answer": "Design tables for users, documents, versions, and permissions, and write queries to manage access control."
  },
  {
    "question": "Create a smart home automation system database.",
    "answer": "Develop tables for devices, users, schedules, and logs, and write queries to analyze device usage."
  },
  {
    "question": "Develop a fitness tracking system.",
    "answer": "Create tables for users, workouts, goals, and progress, and implement queries to analyze fitness trends."
  },
  {
    "question": "Build an online auction platform.",
    "answer": "Design tables for users, items, bids, and transactions, and write queries to track auction winners."
  },
  {
    "question": "Implement a loyalty rewards program database.",
    "answer": "Create tables for customers, purchases, points, and redemptions, and implement queries to track customer rewards."
  }
]
,
bigCompanyQuestions: [
  {
    "question": "What are Common Table Expressions (CTEs), and how do they differ from subqueries?",
    "answer": "CTEs provide a temporary named result set that improves readability and maintainability, whereas subqueries are nested within a query and do not persist beyond execution."
  },
  {
    "question": "Explain the differences between OLTP and OLAP databases.",
    "answer": "OLTP (Online Transaction Processing) is optimized for fast transactions, while OLAP (Online Analytical Processing) is optimized for complex queries and reporting."
  },
  {
    "question": "How would you optimize a slow SQL query?",
    "answer": "Techniques include using indexes, avoiding SELECT *, optimizing joins, partitioning large tables, and using EXPLAIN plans to analyze performance."
  },
  {
    "question": "What is database partitioning, and when should it be used?",
    "answer": "Partitioning splits a table into smaller parts to improve performance and manageability, useful for handling large datasets and improving query efficiency."
  },
  {
    "question": "Explain the concept of sharding in databases.",
    "answer": "Sharding is a horizontal partitioning method that distributes data across multiple databases or servers to improve scalability and performance."
  },
  {
    "question": "What are the different types of indexes in SQL?",
    "answer": "Common types include clustered, non-clustered, unique, full-text, and composite indexes, each serving different optimization purposes."
  },
  {
    "question": "How does indexing improve query performance?",
    "answer": "Indexes store sorted references to data, reducing the number of rows scanned and improving lookup speed, especially for large tables."
  },
  {
    "question": "What is a covering index?",
    "answer": "A covering index contains all columns required by a query, allowing it to be resolved entirely from the index without accessing the main table."
  },
  {
    "question": "How do you handle deadlocks in SQL databases?",
    "answer": "Use techniques like proper indexing, shorter transactions, lock timeouts, and deadlock detection to minimize conflicts and improve concurrency."
  },
  {
    "question": "What is database normalization, and what are the different normal forms?",
    "answer": "Normalization organizes data to reduce redundancy. Normal forms include 1NF (atomic columns), 2NF (removing partial dependencies), 3NF (removing transitive dependencies), and beyond."
  },
  {
    "question": "When would you denormalize a database?",
    "answer": "Denormalization is used to improve read performance by reducing joins, often in analytics, reporting, or high-read applications."
  },
  {
    "question": "What is the difference between a clustered and a non-clustered index?",
    "answer": "A clustered index sorts and stores rows in a table physically, while a non-clustered index creates a separate structure pointing to the rows."
  },
  {
    "question": "Explain the differences between a primary key, unique key, and foreign key.",
    "answer": "A primary key uniquely identifies each row, a unique key ensures unique values in a column, and a foreign key enforces referential integrity between tables."
  },
  {
    "question": "What is a materialized view, and how is it different from a regular view?",
    "answer": "A materialized view stores query results physically and needs to be refreshed, while a regular view is a virtual table that retrieves data dynamically."
  },
  {
    "question": "How do you optimize complex joins in SQL?",
    "answer": "Use proper indexing, optimize join order, filter early, use hash or merge joins, and avoid unnecessary joins."
  },
  {
    "question": "What are window functions in SQL, and when should they be used?",
    "answer": "Window functions perform calculations across a set of rows related to the current row, useful for ranking, running totals, and moving averages."
  },
  {
    "question": "What is an execution plan, and how do you analyze it?",
    "answer": "An execution plan shows how SQL queries are executed, helping identify performance bottlenecks like full table scans or missing indexes."
  },
  {
    "question": "What is a recursive CTE, and when is it useful?",
    "answer": "A recursive CTE allows self-referencing queries, useful for hierarchical data like organization charts or category trees."
  },
  {
    "question": "What are the differences between stored procedures and functions?",
    "answer": "Stored procedures can perform multiple operations and modify data, while functions return a single value or table and cannot modify data."
  },
  {
    "question": "What is the difference between `HAVING` and `WHERE`?",
    "answer": "`WHERE` filters rows before aggregation, while `HAVING` filters aggregated results after `GROUP BY`."
  },
  {
    "question": "How do you implement soft deletes in SQL?",
    "answer": "Use a `deleted_at` timestamp column instead of deleting records, allowing data recovery and historical tracking."
  },
  {
    "question": "What is row-level security in SQL databases?",
    "answer": "Row-level security restricts access to specific rows in a table based on user roles or conditions."
  },
  {
    "question": "What are database transactions, and what are their properties?",
    "answer": "A transaction is a sequence of operations treated as a single unit. Transactions follow ACID properties: Atomicity, Consistency, Isolation, and Durability."
  },
  {
    "question": "What is a phantom read in SQL, and how can you prevent it?",
    "answer": "A phantom read occurs when new rows appear during a transaction. Use `SERIALIZABLE` isolation level to prevent it."
  },
  {
    "question": "Explain the difference between UNION and UNION ALL.",
    "answer": "`UNION` removes duplicates, while `UNION ALL` includes all rows, including duplicates, improving performance."
  },
  {
    "question": "What is a surrogate key, and why is it used?",
    "answer": "A surrogate key is an artificial unique identifier (like an auto-incremented ID) used instead of a natural key to simplify joins and indexing."
  },
  {
    "question": "How do you optimize queries for large datasets?",
    "answer": "Use indexing, partitioning, query caching, avoiding unnecessary columns, and using proper data types to improve performance."
  },
  {
    "question": "What are lateral joins in SQL, and when should they be used?",
    "answer": "LATERAL joins allow subqueries to reference columns from preceding tables, useful for complex filtering and aggregation."
  },
  {
    "question": "How do you handle NULL values in SQL queries?",
    "answer": "Use functions like `COALESCE()`, `ISNULL()`, or `NULLIF()` to handle NULL values properly in calculations and conditions."
  }
]
,
simpleProjects: [
  {
    "question": "Create a database for a library management system.",
    "answer": "Design tables for books, authors, members, and transactions with appropriate relationships."
  },
  {
    "question": "Write a query to find employees earning above the average salary.",
    "answer": "Use `AVG()` to calculate the average salary and `WHERE` to filter employees earning above it."
  },
  {
    "question": "Build a table for student records.",
    "answer": "Include columns for student ID, name, age, class, and GPA, and write queries to insert and retrieve data."
  },
  {
    "question": "Write a query to fetch the top 5 customers by order value.",
    "answer": "Use `ORDER BY` with `SUM(order_amount)` and `LIMIT` to get the top customers."
  },
  {
    "question": "Create a query to list all products without orders.",
    "answer": "Use a `LEFT JOIN` between the `products` and `orders` tables and filter with `IS NULL`."
  },
  {
    "question": "Write a query to update a customer’s address.",
    "answer": "Use the `UPDATE` statement with `WHERE` to modify the address for a specific customer."
  },
  {
    "question": "Create a database for a hospital management system.",
    "answer": "Design tables for patients, doctors, appointments, and treatments with relationships."
  },
  {
    "question": "Write a query to delete customers with no orders.",
    "answer": "Use `DELETE` with a subquery or `LEFT JOIN` to remove customers without order history."
  },
  {
    "question": "Create a sales report showing total sales by month.",
    "answer": "Use `GROUP BY` with the `MONTH()` function on the order date column."
  },
  {
    "question": "Find duplicate email addresses in a user table.",
    "answer": "Use `GROUP BY email HAVING COUNT(email) > 1` to identify duplicates."
  },
  {
    "question": "Design a movie database.",
    "answer": "Create tables for movies, actors, genres, and ratings with appropriate foreign keys."
  },
  {
    "question": "Write a query to calculate the age of each customer.",
    "answer": "Use the `DATEDIFF()` or `TIMESTAMPDIFF()` function to compute age from birthdate."
  },
  {
    "question": "List all employees who have not been assigned a department.",
    "answer": "Use `LEFT JOIN` between employees and departments and filter with `IS NULL`."
  },
  {
    "question": "Create a trigger to log deleted records.",
    "answer": "Write an `AFTER DELETE` trigger to insert deleted row data into a log table."
  },
  {
    "question": "Write a stored procedure to get customer details by ID.",
    "answer": "Create a procedure with a parameter for customer ID and use `SELECT` to fetch details."
  },
  {
    "question": "Find the total revenue generated by each product.",
    "answer": "Use `SUM(price * quantity)` with `GROUP BY product_id`."
  },
  {
    "question": "Retrieve the most recent orders for each customer.",
    "answer": "Use `ORDER BY order_date DESC` with `LIMIT 1` in a subquery."
  },
  {
    "question": "List employees hired in the last 6 months.",
    "answer": "Use `WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)`."
  },
  {
    "question": "Create a bank transactions table.",
    "answer": "Include columns for transaction ID, account number, amount, type (credit/debit), and date."
  },
  {
    "question": "Find customers who have placed orders in both 2023 and 2024.",
    "answer": "Use `INTERSECT` or a `HAVING COUNT(DISTINCT year(order_date)) = 2` query."
  },
  {
    "question": "Create a shopping cart schema.",
    "answer": "Design tables for users, products, carts, and cart items with relationships."
  },
  {
    "question": "Write a query to get the first and last orders of each customer.",
    "answer": "Use `MIN(order_date)` and `MAX(order_date)` with `GROUP BY customer_id`."
  },
  {
    "question": "Create a hotel booking database.",
    "answer": "Include tables for guests, rooms, reservations, and payments."
  },
  {
    "question": "Write a query to get the top-selling product category.",
    "answer": "Use `SUM(sales_amount)` with `GROUP BY category_id` and `ORDER BY DESC`."
  },
  {
    "question": "Find employees with salaries in the top 10%.",
    "answer": "Use a subquery with `PERCENT_RANK()` or `WHERE salary > (SELECT PERCENTILE_CONT(0.9) FROM employees).`"
  },
  {
    "question": "Write a query to check if a given username already exists.",
    "answer": "Use `SELECT COUNT(*)` with a `WHERE` clause to check for the username."
  },
  {
    "question": "Create a product inventory system.",
    "answer": "Design tables for products, stock levels, suppliers, and purchases."
  },
  {
    "question": "Retrieve all employees who have worked on more than 3 projects.",
    "answer": "Use `COUNT(project_id) > 3` with `GROUP BY employee_id`."
  },
  {
    "question": "List customers who have not placed an order in the last year.",
    "answer": "Use `WHERE last_order_date < DATE_SUB(CURDATE(), INTERVAL 1 YEAR).`"
  },
  {
    "question": "Create a social media database structure.",
    "answer": "Include tables for users, posts, likes, comments, and friendships."
  }
]
  },
  {
    title: "MongoDB",
    slug: "mongodb",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to scale and handle large amounts of unstructured data.",
    imgSrc: "https://img.icons8.com/?size=500&id=74402&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is MongoDB?",
        answer:
          "MongoDB is a NoSQL database that uses a document-oriented data model, storing data in BSON (Binary JSON) format, allowing for flexible and scalable data storage.",
      },
      {
        question:
          "What are the advantages of using MongoDB over relational databases?",
        answer:
          "MongoDB offers flexible schema design, scalability, high availability, and performance, making it ideal for handling large amounts of unstructured or semi-structured data.",
      },
      {
        question: "What is a document in MongoDB?",
        answer:
          "A document is a basic unit of data in MongoDB, represented as a BSON object (similar to JSON) that contains key-value pairs.",
      },
      {
        question: "What is a collection in MongoDB?",
        answer:
          "A collection is a group of MongoDB documents, similar to a table in relational databases. It holds multiple documents and can be schema-less.",
      },
      {
        question:
          "What is the difference between `find()` and `findOne()` in MongoDB?",
        answer:
          "`find()` returns all documents that match the query, while `findOne()` returns the first document that matches the query.",
      },
      {
        question: "What are indexes in MongoDB?",
        answer:
          "Indexes in MongoDB improve the speed of query operations by creating a data structure that allows for faster searching of documents.",
      },
      {
        question: "What is the purpose of the `_id` field in MongoDB?",
        answer:
          "The `_id` field is a unique identifier automatically created for each document in MongoDB. It ensures that each document in a collection is distinct.",
      },
      {
        question: "What is the aggregation framework in MongoDB?",
        answer:
          "The aggregation framework is a set of operations that process data records and return computed results, often used for complex queries, filtering, and transformations.",
      },
      {
        question: "What is sharding in MongoDB?",
        answer:
          "Sharding is a method used to distribute data across multiple servers to ensure scalability and handle large datasets by splitting the data into smaller chunks.",
      },
      {
        question:
          "What is the difference between `update()` and `updateOne()`?",
        answer:
          "`update()` updates all documents that match the query, while `updateOne()` only updates the first document that matches the query.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Design a blog system using MongoDB.",
        answer:
          "Create collections for users, posts, and comments, and implement CRUD operations for managing blog posts and comments.",
      },
      {
        question: "Build a user authentication system.",
        answer:
          "Design a MongoDB schema for storing user credentials and implement functionality for user registration, login, and password reset.",
      },
      {
        question: "Develop a product catalog system.",
        answer:
          "Create collections for products, categories, and reviews, and implement queries for searching and filtering products.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you optimize queries in MongoDB?",
        answer:
          "To optimize queries in MongoDB, you can create indexes, avoid using `$where` and `$regex` queries, and analyze query performance with the `explain()` method.",
      },
      {
        question: "What is replica set in MongoDB?",
        answer:
          "A replica set in MongoDB is a group of MongoDB servers that maintain the same data set, providing redundancy and high availability.",
      },
      {
        question:
          "What is the difference between `find()` and `aggregate()` in MongoDB?",
        answer:
          "`find()` is used to retrieve documents based on specific conditions, while `aggregate()` is used for more complex queries and transformations using multiple stages.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple user database.",
        answer:
          "Design a MongoDB collection for storing user data, including name, email, and password, and implement basic CRUD operations.",
      },
      {
        question: "Build a task management system.",
        answer:
          "Create a collection for tasks, with fields for title, description, due date, and status, and implement functionality to add, update, and delete tasks.",
      },
      {
        question: "Develop a product inventory system.",
        answer:
          "Create a MongoDB collection for products, including name, category, price, and stock quantity, and implement queries for adding and updating product details.",
      },
    ],
  },
  {
    title: "Redux",
    slug: "redux",
    description:
      "Redux is a state management library for JavaScript applications, often used with React to manage the global state in a predictable way.",
    imgSrc: "https://img.icons8.com/?size=500&id=jD-fJzVguBmw&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is Redux?",
        answer:
          "Redux is a state management library that helps manage the state of an application in a predictable way using a single store and actions.",
      },
      {
        question: "What are the core principles of Redux?",
        answer:
          "The three core principles of Redux are: 1) Single source of truth, 2) State is read-only, and 3) Changes are made with pure functions (reducers).",
      },
      {
        question: "What is an action in Redux?",
        answer:
          "An action is a plain JavaScript object that describes a change or event that should happen in the application state. It must have a `type` property.",
      },
      {
        question: "What is a reducer in Redux?",
        answer:
          "A reducer is a pure function that takes the current state and an action, and returns a new state based on the action type.",
      },
      {
        question: "What is the store in Redux?",
        answer:
          "The store is the central place where the entire state of the application is stored. It provides methods to access, update, and subscribe to the state.",
      },
      {
        question:
          "What is the difference between `useState` and `useReducer` in React?",
        answer:
          "`useState` is used for local component state, while `useReducer` is used for more complex state logic, often in conjunction with Redux for global state management.",
      },
      {
        question: "What is middleware in Redux?",
        answer:
          "Middleware in Redux is a way to extend Redux's capabilities by intercepting actions before they reach the reducer. Common middleware includes `redux-thunk` for asynchronous actions.",
      },
      {
        question: "What is the purpose of `dispatch` in Redux?",
        answer:
          "`dispatch` is used to send actions to the Redux store to update the state. It triggers the reducer function to process the action.",
      },
      {
        question: "What is the purpose of `mapStateToProps` in Redux?",
        answer:
          "`mapStateToProps` is used to map the state from the Redux store to the props of a React component, allowing the component to access and display the state.",
      },
      {
        question: "What is the purpose of `mapDispatchToProps` in Redux?",
        answer:
          "`mapDispatchToProps` is used to bind action creators to the `dispatch` function, allowing components to dispatch actions to the Redux store.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a simple to-do list app using Redux.",
        answer:
          "Create a to-do list app where tasks can be added, removed, and marked as complete, with the state managed by Redux.",
      },
      {
        question: "Create a shopping cart app with Redux.",
        answer:
          "Design a shopping cart app where products can be added and removed from the cart, and the cart's total price is calculated using Redux.",
      },
      {
        question: "Build a counter app with Redux.",
        answer:
          "Create a simple counter app where the count can be incremented, decremented, and reset, with the state managed by Redux.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How would you optimize Redux performance?",
        answer:
          "To optimize Redux performance, you can use techniques like memoization, reselect for selectors, and ensuring that components only re-render when necessary by using `shouldComponentUpdate` or `React.memo`.",
      },
      {
        question: "What is the difference between Redux and Context API?",
        answer:
          "Redux is designed for complex state management with a global store, while the Context API is a simpler solution for passing state through the component tree without prop drilling.",
      },
      {
        question: "How do you handle asynchronous actions in Redux?",
        answer:
          "Asynchronous actions in Redux are typically handled using middleware like `redux-thunk` or `redux-saga`, which allow actions to return functions or promises instead of plain objects.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple counter with Redux.",
        answer:
          "Build a counter app that can increment and decrement the count using Redux for state management.",
      },
      {
        question: "Build a form with Redux.",
        answer:
          "Create a form with fields for name, email, and message, and use Redux to manage the form state and handle form submission.",
      },
      {
        question: "Create a login system with Redux.",
        answer:
          "Design a login system where the user’s authentication state is managed globally using Redux, and the login status is displayed in different parts of the app.",
      },
    ],
  },
  {
    title: "Next.js",
    slug: "nextjs",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and easy routing, making it ideal for building fast and scalable web applications.",
    imgSrc: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    interviewQuestions: [
      {
        question: "What is Next.js?",
        answer:
          "Next.js is a React framework that allows for server-side rendering, static site generation, and easy routing to build fast and scalable web applications.",
      },
      {
        question:
          "What is the difference between server-side rendering (SSR) and static site generation (SSG) in Next.js?",
        answer:
          "SSR renders the page on the server for each request, while SSG pre-renders pages at build time, serving static content.",
      },
      {
        question: "How does dynamic routing work in Next.js?",
        answer:
          "Dynamic routing in Next.js is achieved by creating files with dynamic segments, such as `[id].js`, to capture dynamic values from the URL.",
      },
      {
        question: "What is the `getServerSideProps` function in Next.js?",
        answer:
          "`getServerSideProps` is a Next.js function that runs on the server before the page is rendered, fetching data that will be passed as props to the component.",
      },
      {
        question: "What is `getStaticProps` in Next.js?",
        answer:
          "`getStaticProps` is a Next.js function that fetches data at build time for static site generation, ensuring the page is pre-rendered with data.",
      },
      {
        question: "What is `getInitialProps` in Next.js?",
        answer:
          "`getInitialProps` is a Next.js function used to fetch data before rendering the page, but it is considered legacy and replaced by `getStaticProps` and `getServerSideProps`.",
      },
      {
        question: "What is the purpose of `next/link`?",
        answer:
          "`next/link` is a component in Next.js used to create client-side navigation between pages, enabling fast, optimized routing.",
      },
      {
        question: "What is `next/image`?",
        answer:
          "`next/image` is a component in Next.js used to optimize images by automatically resizing, serving images in modern formats, and lazy-loading them for better performance.",
      },
      {
        question: "What is the `next/head` component used for?",
        answer:
          "`next/head` is used to modify the `<head>` section of a page, allowing you to add meta tags, titles, and other elements for SEO and performance.",
      },
      {
        question: "What is API routing in Next.js?",
        answer:
          "API routing in Next.js allows you to create API endpoints within the `pages/api` directory, where each file corresponds to an API route.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a personal blog using Next.js.",
        answer:
          "Create a blog with server-side rendering to fetch blog posts dynamically and use static site generation for static content like the homepage.",
      },
      {
        question: "Create a product catalog with Next.js.",
        answer:
          "Design a product catalog where product data is fetched using `getStaticProps` and displayed with optimized images using `next/image`.",
      },
      {
        question: "Build a real-time chat app with Next.js.",
        answer:
          "Use Next.js to create a chat app with dynamic routing, real-time updates using WebSockets, and optimized rendering for performance.",
      },
    ],
    bigCompanyQuestions: [
      {
        question:
          "How do you optimize the performance of a Next.js application?",
        answer:
          "To optimize Next.js performance, you can use static site generation (SSG) and server-side rendering (SSR), lazy load components, optimize images with `next/image`, and implement code splitting.",
      },
      {
        question: "What are the benefits of using Next.js for SEO?",
        answer:
          "Next.js improves SEO by enabling server-side rendering (SSR) and static site generation (SSG), which ensures that search engines can crawl and index content efficiently.",
      },
      {
        question: "How does Next.js handle code splitting?",
        answer:
          "Next.js automatically splits the code into smaller bundles, loading only the necessary code for each page to reduce the initial load time and improve performance.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple portfolio website using Next.js.",
        answer:
          "Design a portfolio site with multiple pages (about, projects, contact), using static site generation for optimized performance.",
      },
      {
        question: "Build a simple blog with static pages.",
        answer:
          "Create a blog with posts fetched from local markdown files, and use `getStaticProps` to pre-render the posts for improved performance.",
      },
      {
        question: "Create a simple contact form with Next.js.",
        answer:
          "Build a contact form with client-side validation and send the form data to an API route in the `pages/api` directory for processing.",
      },
    ],
  },
  {
    title: "TypeScript",
    slug: "typescript",
    description:
      "TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development and improve code maintainability.",
    imgSrc: "https://img.icons8.com/?size=500&id=uJM6fQYqDaZK&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is TypeScript?",
        answer:
          "TypeScript is a superset of JavaScript that introduces optional static typing, interfaces, and other features to improve code quality and maintainability.",
      },
      {
        question: "What are the benefits of using TypeScript over JavaScript?",
        answer:
          "TypeScript provides static typing, which helps catch errors at compile time, improves code readability, and offers better tooling with features like autocompletion and refactoring.",
      },
      {
        question:
          "What is the difference between `any` and `unknown` in TypeScript?",
        answer:
          "`any` allows any type to be assigned to a variable, while `unknown` requires type checking before performing operations on it, providing a safer alternative to `any`.",
      },
      {
        question: "What is an interface in TypeScript?",
        answer:
          "An interface in TypeScript defines the shape of an object, specifying the properties and their types that an object must have.",
      },
      {
        question: "What is the `never` type in TypeScript?",
        answer:
          "`never` represents values that never occur, such as a function that always throws an error or a function that never returns.",
      },
      {
        question: "What is a tuple in TypeScript?",
        answer:
          "A tuple in TypeScript is an ordered collection of elements where each element can have a different type, and the types are defined at the time of declaration.",
      },
      {
        question: "What is the purpose of `as` keyword in TypeScript?",
        answer:
          "`as` is used for type assertions in TypeScript, allowing the developer to specify a more specific type for a variable or expression.",
      },
      {
        question:
          "What is the difference between `interface` and `type` in TypeScript?",
        answer:
          "`interface` is used to define the structure of an object, while `type` can define any type, including primitive types, unions, and intersections.",
      },
      {
        question: "What is the `strict` mode in TypeScript?",
        answer:
          "The `strict` mode in TypeScript enables a set of compiler options that make TypeScript more rigorous, such as strict null checks and stricter type inference.",
      },
      {
        question: "What are generics in TypeScript?",
        answer:
          "Generics allow functions, classes, and interfaces to work with any data type while preserving type safety, providing flexibility and reusability.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a type-safe to-do list app using TypeScript.",
        answer:
          "Create a to-do list app with TypeScript where tasks are added, edited, and deleted, and the types of task properties are strictly defined.",
      },
      {
        question: "Create a form validation system using TypeScript.",
        answer:
          "Design a form with fields for user input, and use TypeScript to enforce type safety and validate the form data before submission.",
      },
      {
        question: "Build a calculator app using TypeScript.",
        answer:
          "Create a simple calculator app that performs basic arithmetic operations and uses TypeScript to define types for inputs and outputs.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you handle null and undefined in TypeScript?",
        answer:
          "In TypeScript, `null` and `undefined` are considered distinct types. The `strictNullChecks` option ensures that variables cannot be assigned `null` or `undefined` unless explicitly allowed.",
      },
      {
        question: "How do you make a class in TypeScript?",
        answer:
          "In TypeScript, a class is defined using the `class` keyword, and it can include constructors, methods, and properties with types defined for each.",
      },
      {
        question: "What is the `Readonly` utility type in TypeScript?",
        answer:
          "`Readonly` is a utility type in TypeScript that makes all properties of an object immutable, preventing modifications to the object's properties.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple counter app using TypeScript.",
        answer:
          "Build a counter app where the count can be incremented, decremented, and reset, with all values typed in TypeScript.",
      },
      {
        question: "Build a user registration form with TypeScript.",
        answer:
          "Create a form for user registration with fields like name, email, and password, and use TypeScript to enforce type safety for the form data.",
      },
      {
        question: "Create a simple contact manager app with TypeScript.",
        answer:
          "Build a contact manager where users can add, edit, and delete contacts, with TypeScript ensuring type safety for contact details.",
      },
    ],
  },
  {
    title: "Machine Learning",
    slug: "machine-learning",
    description:
      "Machine Learning is a subset of artificial intelligence that enables systems to learn from data, improve over time, and make decisions without explicit programming.",
    imgSrc: "https://img.icons8.com/?size=500&id=VL9fDzni6aE5&format=png&color=ffffff",
    interviewQuestions: [
      {
        question: "What is machine learning?",
        answer:
          "Machine learning is a field of artificial intelligence that focuses on building algorithms that can learn from and make predictions or decisions based on data.",
      },
      {
        question: "What are the types of machine learning?",
        answer:
          "The three main types of machine learning are supervised learning, unsupervised learning, and reinforcement learning.",
      },
      {
        question:
          "What is the difference between supervised and unsupervised learning?",
        answer:
          "In supervised learning, the model is trained on labeled data, while in unsupervised learning, the model is trained on unlabeled data and must find patterns or structures on its own.",
      },
      {
        question: "What is overfitting in machine learning?",
        answer:
          "Overfitting occurs when a model learns not only the underlying patterns in the training data but also the noise, resulting in poor generalization to new data.",
      },
      {
        question: "What is underfitting in machine learning?",
        answer:
          "Underfitting happens when a model is too simple and fails to capture the underlying patterns in the data, leading to poor performance on both training and testing data.",
      },
      {
        question: "What is a confusion matrix?",
        answer:
          "A confusion matrix is a table used to evaluate the performance of a classification model by showing the true positive, true negative, false positive, and false negative predictions.",
      },
      {
        question:
          "What is the difference between classification and regression?",
        answer:
          "Classification is used for predicting categorical labels, while regression is used for predicting continuous values.",
      },
      {
        question: "What is a decision tree?",
        answer:
          "A decision tree is a supervised learning algorithm that splits data into subsets based on feature values, creating a tree-like structure for decision making.",
      },
      {
        question: "What is the bias-variance tradeoff?",
        answer:
          "The bias-variance tradeoff is the balance between a model's ability to generalize (low bias) and its sensitivity to the training data (low variance). A model with high bias and low variance underperforms, while high variance and low bias can lead to overfitting.",
      },
      {
        question: "What is gradient descent?",
        answer:
          "Gradient descent is an optimization algorithm used to minimize the cost function by iteratively adjusting the model's parameters in the direction of the steepest decrease in error.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a spam email classifier.",
        answer:
          "Create a machine learning model that classifies emails as spam or not using supervised learning and a dataset of labeled emails.",
      },
      {
        question: "Create a movie recommendation system.",
        answer:
          "Develop a recommendation system using collaborative filtering or content-based filtering to suggest movies based on user preferences.",
      },
      {
        question: "Build a house price prediction model.",
        answer:
          "Create a regression model to predict house prices based on features like square footage, number of rooms, and location using a dataset of historical house sales.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you handle missing data in machine learning?",
        answer:
          "Missing data can be handled by techniques such as imputation (filling missing values with the mean, median, or mode), removing rows or columns with missing data, or using algorithms that can handle missing data directly.",
      },
      {
        question: "What is cross-validation, and why is it important?",
        answer:
          "Cross-validation is a technique used to assess the performance of a model by splitting the data into multiple subsets and training the model on different combinations of these subsets to ensure the model generalizes well.",
      },
      {
        question: "What is the curse of dimensionality?",
        answer:
          "The curse of dimensionality refers to the challenges that arise when the feature space of a dataset becomes too large, making it harder for models to find meaningful patterns and leading to overfitting.",
      },
    ],
    simpleProjects: [
      {
        question: "Build a simple linear regression model.",
        answer:
          "Create a linear regression model to predict a continuous variable, such as predicting the price of a product based on its features.",
      },
      {
        question:
          "Create a simple classification model using logistic regression.",
        answer:
          "Develop a logistic regression model to classify data into two categories, such as predicting whether a customer will buy a product or not based on their features.",
      },
      {
        question: "Build a k-means clustering model.",
        answer:
          "Create a k-means clustering model to group data points into clusters based on their features, such as grouping customers by purchasing behavior.",
      },
    ],
  },
  {
    title: "Blockchain",
    slug: "blockchain",
    description:
      "Blockchain is a decentralized, distributed ledger technology that ensures secure and transparent record-keeping, primarily used in cryptocurrencies, smart contracts, and decentralized applications.",
    imgSrc: "https://img.icons8.com/?size=500&id=63192&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is blockchain?",
        answer:
          "Blockchain is a distributed ledger technology that stores data in blocks, which are linked together in a chain. It is decentralized and ensures transparency, security, and immutability.",
      },
      {
        question: "How does a blockchain work?",
        answer:
          "A blockchain works by storing data in blocks, which are linked in chronological order. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data, ensuring data integrity and security.",
      },
      {
        question: "What is a smart contract?",
        answer:
          "A smart contract is a self-executing contract with the terms of the agreement directly written into code. It runs on a blockchain and automatically enforces and executes the contract when predefined conditions are met.",
      },
      {
        question:
          "What is the difference between proof of work and proof of stake?",
        answer:
          "Proof of work requires miners to solve complex mathematical puzzles to validate transactions, while proof of stake allows validators to create new blocks based on the amount of cryptocurrency they hold and are willing to 'stake'.",
      },
      {
        question: "What is a decentralized application (DApp)?",
        answer:
          "A decentralized application (DApp) is an application that runs on a blockchain or a peer-to-peer network, using smart contracts to ensure transparency, security, and decentralization.",
      },
      {
        question: "What is a consensus mechanism?",
        answer:
          "A consensus mechanism is a protocol used in blockchain to achieve agreement on the validity of transactions. Examples include proof of work (PoW), proof of stake (PoS), and practical Byzantine fault tolerance (PBFT).",
      },
      {
        question: "What is a cryptocurrency?",
        answer:
          "A cryptocurrency is a digital or virtual currency that uses cryptography for security and operates on a blockchain, making it decentralized and resistant to counterfeiting.",
      },
      {
        question: "What is a hash function in blockchain?",
        answer:
          "A hash function is a cryptographic algorithm that takes an input (or 'message') and returns a fixed-size string of characters, which is typically a hash value. In blockchain, it ensures data integrity and security.",
      },
      {
        question: "What is a blockchain node?",
        answer:
          "A blockchain node is a computer that participates in the blockchain network, maintaining a copy of the blockchain and helping to validate transactions and create new blocks.",
      },
      {
        question: "What is the role of miners in blockchain?",
        answer:
          "Miners validate and verify transactions by solving complex cryptographic puzzles in proof of work systems. They are rewarded with cryptocurrency for their work in maintaining the network.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a simple cryptocurrency wallet.",
        answer:
          "Create a wallet that can store, send, and receive cryptocurrency. Use blockchain technology to ensure secure transactions and a decentralized ledger.",
      },
      {
        question: "Create a basic blockchain from scratch.",
        answer:
          "Develop a simple blockchain in a programming language of your choice. Implement basic features like block creation, hashing, and chain linking to understand the fundamentals of blockchain.",
      },
      {
        question: "Build a decentralized voting system using smart contracts.",
        answer:
          "Develop a voting system where votes are stored on a blockchain, ensuring transparency, security, and immutability of the results.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you ensure the security of a blockchain network?",
        answer:
          "Security in a blockchain is ensured through cryptographic hashing, consensus mechanisms, and decentralization. Each block is linked to the previous one, making it tamper-proof.",
      },
      {
        question:
          "What is the difference between a public and a private blockchain?",
        answer:
          "A public blockchain is open to anyone and is decentralized, while a private blockchain is restricted to a specific group of participants and may have centralized control.",
      },
      {
        question: "How do you scale a blockchain network?",
        answer:
          "Scaling a blockchain can be achieved through solutions like sharding, layer 2 protocols (e.g., Lightning Network), and optimizing consensus mechanisms to handle more transactions per second.",
      },
    ],
    simpleProjects: [
      {
        question: "Build a simple blockchain explorer.",
        answer:
          "Create a basic blockchain explorer that allows users to view blocks, transactions, and hashes, providing insights into the blockchain's structure and operation.",
      },
      {
        question: "Create a simple token on Ethereum.",
        answer:
          "Use Solidity to create a basic ERC-20 token on the Ethereum blockchain, allowing users to send and receive tokens.",
      },
      {
        question: "Build a basic smart contract.",
        answer:
          "Write and deploy a simple smart contract on a blockchain platform like Ethereum. The contract could handle basic operations like transferring ownership of assets.",
      },
    ],
  },
  {
    title: "Git",
    slug: "git",
    description:
      "Git is a distributed version control system that tracks changes in source code during software development, enabling collaboration and version management.",
    imgSrc: "https://img.icons8.com/?size=500&id=20906&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is Git?",
        answer:
          "Git is a distributed version control system that helps developers track changes in their codebase, collaborate with others, and manage different versions of their code.",
      },
      {
        question: "What is the difference between Git and GitHub?",
        answer:
          "Git is a version control system that tracks changes in files, while GitHub is a cloud-based platform that hosts Git repositories and provides collaboration features such as pull requests and issue tracking.",
      },
      {
        question: "What is a commit in Git?",
        answer:
          "A commit in Git is a snapshot of the changes made to files in the repository. It records the state of the repository at a particular point in time.",
      },
      {
        question: "What is the difference between `git pull` and `git fetch`?",
        answer:
          "`git fetch` downloads the latest changes from a remote repository but does not merge them, while `git pull` fetches and automatically merges the changes into the current branch.",
      },
      {
        question: "What is a branch in Git?",
        answer:
          "A branch in Git is a separate line of development that allows you to work on different features or bug fixes without affecting the main codebase.",
      },
      {
        question: "What is a merge conflict?",
        answer:
          "A merge conflict occurs when Git is unable to automatically merge changes from different branches due to conflicting modifications in the same part of a file.",
      },
      {
        question:
          "What is the difference between `git reset` and `git revert`?",
        answer:
          "`git reset` is used to undo commits and changes in the working directory, while `git revert` creates a new commit that undoes the changes made by a previous commit.",
      },
      {
        question: "What is a Git tag?",
        answer:
          "A Git tag is a reference to a specific point in Git history, often used to mark release versions of the software.",
      },
      {
        question: "What is a `git stash`?",
        answer:
          "`git stash` temporarily saves changes that are not yet ready to be committed, allowing you to switch branches or perform other tasks without losing your uncommitted work.",
      },
      {
        question: "What is the purpose of `.gitignore`?",
        answer:
          "The `.gitignore` file specifies which files and directories should be ignored by Git, typically used for files that are not relevant to version control, such as temporary files or build artifacts.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Create a Git repository for a new project.",
        answer:
          "Initialize a new Git repository for a project, add files, commit changes, and push the repository to a remote platform like GitHub.",
      },
      {
        question: "Set up a collaborative Git workflow.",
        answer:
          "Create a Git repository, add collaborators, and demonstrate branching, pull requests, and merging to show a collaborative workflow.",
      },
      {
        question: "Create a Git-based version control system for a website.",
        answer:
          "Set up a Git repository to manage the source code for a website, demonstrating the use of branches for feature development and versioning for releases.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you handle merge conflicts in Git?",
        answer:
          "Merge conflicts are resolved by manually editing the conflicting files to integrate changes from both branches, and then committing the resolved files.",
      },
      {
        question: "What is rebasing in Git, and when would you use it?",
        answer:
          "Rebasing in Git is the process of integrating changes from one branch into another by reapplying commits on top of the target branch. It is used to maintain a clean and linear project history.",
      },
      {
        question:
          "What is the difference between `git pull --rebase` and `git pull`?",
        answer:
          "`git pull --rebase` fetches the changes and applies your local commits on top of the incoming changes, while `git pull` merges the incoming changes with your local commits, potentially creating a merge commit.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a basic Git repository and make your first commit.",
        answer:
          "Initialize a new Git repository, create a file, add it to staging, commit the changes, and push the repository to GitHub.",
      },
      {
        question: "Demonstrate branching and merging in Git.",
        answer:
          "Create a branch, make changes to a file, commit the changes, and merge the branch back into the main branch.",
      },
      {
        question: "Create a `.gitignore` file for a project.",
        answer:
          "Create a `.gitignore` file to exclude unnecessary files, such as log files, temporary files, or build directories, from being tracked by Git.",
      },
    ],
  },
  {
    title: "REST APIs",
    slug: "rest-apis",
    description:
      "REST (Representational State Transfer) APIs are a set of rules for building web services that allow communication between different systems over HTTP, using standard methods like GET, POST, PUT, and DELETE.",
    imgSrc: "https://img.icons8.com/?size=500&id=21888&format=png&color=ffffff",
    interviewQuestions: [
      {
        question: "What is a REST API?",
        answer:
          "A REST API is an architectural style for designing networked applications. It uses HTTP methods and stateless communication to allow different systems to interact and exchange data.",
      },
      {
        question: "What are the key principles of REST?",
        answer:
          "The key principles of REST include statelessness, client-server architecture, uniform interface, and the use of standard HTTP methods (GET, POST, PUT, DELETE).",
      },
      {
        question: "What is the difference between REST and SOAP?",
        answer:
          "REST is lightweight, uses HTTP methods, and is stateless, while SOAP is a protocol that uses XML messages and can operate over different protocols like HTTP, SMTP, and more.",
      },
      {
        question: "What is an endpoint in REST?",
        answer:
          "An endpoint is a specific URL where an API can be accessed, and it represents a resource or a collection of resources that can be manipulated through HTTP methods.",
      },
      {
        question: "What are HTTP methods used in REST?",
        answer:
          "The common HTTP methods used in REST are GET (retrieve data), POST (create data), PUT (update data), DELETE (remove data), and PATCH (partially update data).",
      },
      {
        question: "What is the difference between PUT and PATCH?",
        answer:
          "PUT is used to update or replace an entire resource, while PATCH is used to update part of a resource.",
      },
      {
        question: "What is statelessness in REST?",
        answer:
          "Statelessness means that each request from the client to the server must contain all the information needed to understand and process the request, without relying on previous interactions.",
      },
      {
        question: "What are the advantages of using REST?",
        answer:
          "REST is simple, flexible, and scalable. It uses standard HTTP methods, is stateless, and allows clients and servers to evolve independently.",
      },
      {
        question: "What is an HTTP status code?",
        answer:
          "HTTP status codes are three-digit codes returned by the server to indicate the result of the HTTP request, such as 200 (OK), 404 (Not Found), and 500 (Internal Server Error).",
      },
      {
        question: "What is JSON and why is it commonly used in REST APIs?",
        answer:
          "JSON (JavaScript Object Notation) is a lightweight data format that is easy to read and write. It is commonly used in REST APIs because of its simplicity and compatibility with most programming languages.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a simple REST API for a To-Do list.",
        answer:
          "Create a REST API that allows users to add, update, delete, and retrieve tasks in a To-Do list application using HTTP methods.",
      },
      {
        question: "Create a REST API for a user authentication system.",
        answer:
          "Develop a REST API that allows users to register, log in, and manage their sessions, using token-based authentication (e.g., JWT).",
      },
      {
        question: "Build a REST API for a blog platform.",
        answer:
          "Create a REST API that allows users to create, read, update, and delete blog posts, as well as view comments and categories.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you ensure security in a REST API?",
        answer:
          "Security in a REST API can be ensured through methods like authentication (e.g., OAuth, JWT), authorization, input validation, rate limiting, and using HTTPS for encrypted communication.",
      },
      {
        question: "What is CORS, and how do you handle it in REST APIs?",
        answer:
          "CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to a domain different from the one that served the web page. It can be handled by setting appropriate HTTP headers on the server to allow specific domains to access the API.",
      },
      {
        question: "What are the best practices for designing RESTful APIs?",
        answer:
          "Best practices include using clear and consistent naming conventions for endpoints, using HTTP methods appropriately, implementing pagination for large data sets, and returning meaningful HTTP status codes.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple REST API with CRUD operations.",
        answer:
          "Build a REST API that performs basic CRUD (Create, Read, Update, Delete) operations on a resource, such as users or products.",
      },
      {
        question: "Build a weather information API.",
        answer:
          "Create a REST API that fetches weather data from a public weather service and returns the information in a user-friendly format.",
      },
      {
        question: "Create a REST API for a book library.",
        answer:
          "Develop a REST API that allows users to add, update, retrieve, and delete books in a library system, with the ability to search by title or author.",
      },
    ],
  },
  {
    title: "GraphQL",
    slug: "graphql",
    description:
      "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data, enabling more efficient and flexible data fetching compared to REST APIs.",
    imgSrc: "https://img.icons8.com/?size=500&id=KRA1PoZgRrca&format=png&color=000000",
    interviewQuestions: [
      {
        question: "What is GraphQL?",
        answer:
          "GraphQL is a query language for APIs and a runtime for executing those queries. It allows clients to request exactly the data they need and nothing more, offering more flexibility than REST APIs.",
      },
      {
        question: "What are the key differences between GraphQL and REST?",
        answer:
          "In GraphQL, the client specifies exactly what data it needs, whereas in REST, the server defines the data structure. GraphQL uses a single endpoint, while REST typically uses multiple endpoints.",
      },
      {
        question: "What is a resolver in GraphQL?",
        answer:
          "A resolver is a function that is responsible for fetching the data for a specific field in a GraphQL query. It acts as a bridge between the GraphQL schema and the data source.",
      },
      {
        question: "What is a schema in GraphQL?",
        answer:
          "A schema in GraphQL defines the types of data that can be queried and how those types are related. It is a contract between the client and the server.",
      },
      {
        question: "What are queries, mutations, and subscriptions in GraphQL?",
        answer:
          "Queries are used to fetch data, mutations are used to modify data, and subscriptions allow the client to receive real-time updates when data changes.",
      },
      {
        question: "What is the purpose of a GraphQL type system?",
        answer:
          "The type system in GraphQL defines the shape of the data that can be queried, ensuring that the client and server have a shared understanding of the data structure.",
      },
      {
        question: "What is a query in GraphQL?",
        answer:
          "A query in GraphQL is a request for data. It specifies the fields that the client wants to retrieve, and the server responds with the requested data.",
      },
      {
        question: "What is a mutation in GraphQL?",
        answer:
          "A mutation in GraphQL is used to modify or create data on the server, such as adding, updating, or deleting records.",
      },
      {
        question: "What is a subscription in GraphQL?",
        answer:
          "A subscription in GraphQL allows the client to receive real-time updates from the server whenever data changes, typically used for applications like chat or live feeds.",
      },
      {
        question: "What are some advantages of using GraphQL?",
        answer:
          "GraphQL allows clients to request exactly the data they need, reduces over-fetching and under-fetching of data, and provides a more flexible and efficient approach to working with APIs.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a simple GraphQL API for a blog.",
        answer:
          "Create a GraphQL API that allows users to query, create, update, and delete blog posts. Include features such as pagination and filtering.",
      },
      {
        question: "Create a GraphQL API for a movie database.",
        answer:
          "Develop a GraphQL API that allows users to search for movies, view details, and create new movie records.",
      },
      {
        question: "Build a GraphQL API for a user authentication system.",
        answer:
          "Create a GraphQL API that handles user registration, login, and authentication using JWT tokens, with secure password hashing and token-based sessions.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "How do you handle authentication in a GraphQL API?",
        answer:
          "Authentication in a GraphQL API can be handled using techniques like JWT (JSON Web Tokens) or OAuth. The authentication token is typically passed in the request headers, and resolvers check for the token to validate the user's identity.",
      },
      {
        question: "How do you handle error handling in GraphQL?",
        answer:
          "Error handling in GraphQL can be done by returning an `errors` array in the response. The error messages can be customized and structured to provide meaningful feedback to the client.",
      },
      {
        question:
          "What are some best practices for optimizing GraphQL performance?",
        answer:
          "Best practices for optimizing GraphQL performance include using batching and caching, limiting query depth, using persisted queries, and applying rate limiting to avoid expensive queries.",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple GraphQL query to fetch a list of users.",
        answer:
          "Write a GraphQL query to fetch a list of users with their name and email. Use a simple resolver to return the data.",
      },
      {
        question: "Build a GraphQL mutation to create a new user.",
        answer:
          "Create a GraphQL mutation that accepts user data (name, email, password) and stores it in a database.",
      },
      {
        question: "Create a GraphQL subscription for real-time data.",
        answer:
          "Develop a GraphQL subscription that notifies clients when a new comment is added to a blog post, enabling real-time updates.",
      },
    ],
  },
];

export const interviewQuestionsOld: Topics = {
  javascript: {
    title: "JavaScript Inteview Questions",
    description:
      "Crack your JavaScript interview with ease! Explore our curated list of JavaScript covering ES6+, DOM manipulation, async programming, and more, with detailed answers.",
    interviewQuestions: [
      {
        question:
          "What is the difference between '==' and '===' in JavaScript?",
        answer:
          "'==' is the equality operator that compares values after performing type coercion if necessary. '===' is the strict equality operator that compares both value and type without performing type coercion.",
      },
      {
        question: "Explain closures in JavaScript.",
        answer:
          "A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. It allows for data privacy and the creation of function factories.",
      },
      {
        question: "How does prototypal inheritance work?",
        answer:
          "Prototypal inheritance is a method by which an object can inherit properties and methods from another object. Objects have an internal link to another object called its prototype. When trying to access a property that does not exist in an object, JavaScript will look for it in the prototype chain.",
      },
      {
        question: "What is the event loop in JavaScript?",
        answer:
          "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and callback queue, pushing callbacks from the queue to the stack when it's empty.",
      },
      {
        question: "Explain the concept of hoisting.",
        answer:
          "Hoisting is JavaScript's default behavior of moving declarations to the top of their respective scopes during compilation. This means variable and function declarations are processed before any code is executed, allowing them to be used before they are declared in the source code.",
      },
      {
        question: "What are the differences between var, let, and const?",
        answer:
          "var is function-scoped and can be redeclared and updated. let is block-scoped, can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared.",
      },
      {
        question: "How does the 'this' keyword work in JavaScript?",
        answer:
          "The value of 'this' depends on how a function is called. In a method, 'this' refers to the object. In a regular function, it refers to the global object (or undefined in strict mode). In an arrow function, it retains the 'this' value of the enclosing lexical scope.",
      },
      {
        question: "What is the purpose of the 'use strict' directive?",
        answer:
          "'use strict' enables strict mode in JavaScript, which catches common coding errors and prevents the use of certain error-prone features. It helps write cleaner and more secure code.",
      },
      {
        question:
          "Explain the difference between synchronous and asynchronous code in JavaScript.",
        answer:
          "Synchronous code executes sequentially, blocking further execution until the current operation completes. Asynchronous code allows operations to run in the background without blocking the main thread, using callbacks, Promises, or async/await to handle results.",
      },
      {
        question: "What are Promises and how do they work?",
        answer:
          "Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner way to handle asynchronous operations compared to callbacks. Promises have three states: pending, fulfilled, or rejected.",
      },
      {
        question: "How does the async/await syntax work?",
        answer:
          "async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. An async function always returns a Promise, and the await keyword can be used inside it to wait for a Promise to resolve before continuing execution.",
      },
      {
        question: "What is the difference between null and undefined?",
        answer:
          "undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value that represents a deliberate non-value or absence of any object value.",
      },
      {
        question: "Explain the concept of callback functions.",
        answer:
          "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. They are often used to continue code execution after an asynchronous operation has completed.",
      },
      {
        question: "What is the difference between forEach() and map()?",
        answer:
          "forEach() iterates over an array and executes a provided function for each element, but it doesn't return anything. map() creates a new array with the results of calling a provided function on every element in the calling array.",
      },
      {
        question: "How do you handle errors in JavaScript?",
        answer:
          "Errors can be handled using try...catch blocks. The try block contains the code that might throw an error, and the catch block handles the error. Finally block can be used to execute code regardless of the result. Custom errors can be created using the Error constructor.",
      },
      {
        question: "What is the purpose of the bind() method?",
        answer:
          "The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value. It's often used to maintain the correct context for 'this' when methods are passed as callbacks.",
      },
      {
        question: "Explain the concept of event bubbling and capturing.",
        answer:
          "Event bubbling is the process where an event triggers on the deepest target element, then bubbles up through its ancestors. Event capturing is the opposite, where the event is first captured by the outermost element and propagated to the inner elements.",
      },
      {
        question:
          "What is memoization and how can it be implemented in JavaScript?",
        answer:
          "Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It can be implemented using closures and objects to cache results.",
      },
      {
        question:
          "What are arrow functions and how do they differ from regular functions?",
        answer:
          "Arrow functions provide a concise syntax for writing function expressions. They don't have their own 'this', arguments, super, or new.target. They are always anonymous and can't be used as constructors.",
      },
      {
        question: "Explain the concept of debouncing and throttling.",
        answer:
          "Debouncing and throttling are techniques to control how many times we allow a function to be executed over time. Debouncing ensures that a function is only executed after a certain amount of time has passed since its last invocation. Throttling ensures that a function is called at most once in a specified time period.",
      },
      {
        question:
          "What is the difference between Object.create() and the constructor pattern?",
        answer:
          "Object.create() creates a new object with the specified prototype object and properties. The constructor pattern uses a function as a blueprint to create objects with the same properties and methods.",
      },
      {
        question: "How does the module pattern work in JavaScript?",
        answer:
          "The module pattern uses closures to create private and public methods and variables, providing a way of encapsulating functionality to protect it from the global scope. It helps in organizing code and creating self-contained, reusable pieces of code.",
      },
      {
        question: "What are generator functions and how are they used?",
        answer:
          "Generator functions allow you to define an iterative algorithm by writing a single function whose execution is not continuous. They are written using the function* syntax and use yield to pause and resume execution. They're useful for working with iterators and implementing asynchronous programming patterns.",
      },
      {
        question: "Explain the concept of currying in JavaScript.",
        answer:
          "Currying is the technique of translating a function that takes multiple arguments into a sequence of functions, each with a single argument. It allows you to partially apply a function, creating new functions with some of the arguments already set.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a task management application with local storage",
        answer:
          "Create a web app that allows users to add, edit, and delete tasks. Use local storage to persist data between sessions. Focus on UI/UX and efficient state management.",
      },
      {
        question: "Create a weather app using a public API",
        answer:
          "Use a public API to fetch weather data and display it on a web page. Focus on handling asynchronous operations, error handling, and presenting data in a user-friendly manner.",
      },
      {
        question:
          "Develop a simple e-commerce product page with a shopping cart",
        answer:
          "Build a simple e-commerce product page with a shopping cart. Focus on handling product variations, cart functionality, and state management.",
      },
      {
        question: "Implement a chat application using WebSockets",
        answer:
          "Create a real-time chat application using WebSockets. Focus on handling real-time communication, user authentication, and message persistence.",
      },
      {
        question: "Build a markdown editor with preview",
        answer:
          "Develop a markdown editor that allows users to write markdown and see a live preview. Focus on parsing markdown and updating the preview in real-time.",
      },
      {
        question: "Create a kanban board for project management",
        answer:
          "Build a kanban board application for managing projects. Include features like drag and drop, task creation, and board customization.",
      },
      {
        question: "Develop a recipe management application",
        answer:
          "Create an app for managing recipes, including features like recipe creation, categorization, and search functionality.",
      },
      {
        question: "Build a personal finance tracker",
        answer:
          "Develop an application for tracking personal finances, including income, expenses, and budget planning.",
      },
      {
        question: "Create a social media dashboard",
        answer:
          "Build a dashboard that aggregates data from various social media platforms using their APIs. Focus on data visualization and real-time updates.",
      },
      {
        question: "Implement a URL shortener service",
        answer:
          "Develop a service that shortens long URLs and redirects users. Include features like custom short URLs and click tracking.",
      },
      {
        question: "Build a collaborative drawing application",
        answer:
          "Create a web-based drawing application that allows multiple users to draw on the same canvas in real-time.",
      },
      {
        question: "Develop a podcast player application",
        answer:
          "Build a podcast player that allows users to subscribe to podcasts, download episodes, and track listening progress.",
      },
      {
        question: "Create a habit tracker application",
        answer:
          "Develop an application for tracking daily habits, including streak counting and progress visualization.",
      },
      {
        question: "Implement a file sharing service",
        answer:
          "Build a service that allows users to upload and share files securely. Include features like file encryption and expiring links.",
      },
      {
        question: "Develop a code snippet manager",
        answer:
          "Create an application for developers to store and organize code snippets. Include features like syntax highlighting and tagging.",
      },
      {
        question: "Build a multiplayer game",
        answer:
          "Develop a simple multiplayer game (like Tic Tac Toe or Snake) using real-time communication technologies.",
      },
      {
        question: "Create a data visualization dashboard",
        answer:
          "Build a dashboard that visualizes complex datasets using various chart types. Focus on interactivity and performance with large datasets.",
      },
      {
        question: "Implement a note-taking application with rich text editing",
        answer:
          "Develop a note-taking app with features like rich text editing, note organization, and search functionality.",
      },
      {
        question: "Build a job board application",
        answer:
          "Create a job board where companies can post jobs and job seekers can apply. Include features like job search and application tracking.",
      },
      {
        question: "Develop a personal portfolio website builder",
        answer:
          "Build a tool that allows users to create and customize their own portfolio websites without coding knowledge.",
      },
      {
        question: "Create a music streaming service frontend",
        answer:
          "Develop the frontend for a music streaming service. Focus on playlist management, search functionality, and audio playback.",
      },
      {
        question: "Implement a booking system for a small business",
        answer:
          "Build a booking system suitable for a small business like a hair salon or a gym. Include features like appointment scheduling and reminders.",
      },
      {
        question: "Develop a personal knowledge base application",
        answer:
          "Create an application for organizing personal knowledge, including features like note-taking, linking between notes, and visualization of connections.",
      },
      {
        question: "Build a cryptocurrency portfolio tracker",
        answer:
          "Develop an application that allows users to track their cryptocurrency investments, including real-time price updates and portfolio analysis.",
      },
      {
        question: "Create a language learning application",
        answer:
          "Build an application to help users learn a new language, including features like flashcards, quizzes, and progress tracking.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "Implement a debounce function in JavaScript.",
        answer:
          "A debounce function limits the rate at which a function can fire. Here's a simple implementation: function debounce(func, delay) { let timeoutId; return function(...args) { clearTimeout(timeoutId); timeoutId = setTimeout(() => func.apply(this, args), delay); }; }",
      },
      {
        question:
          "Explain the concept of prototypal inheritance in JavaScript.",
        answer:
          "Prototypal inheritance is a method by which an object can inherit properties and methods from another object. Each object has an internal link to another object called its prototype. When trying to access a property of an object, JavaScript will first look for it on the object itself, then on its prototype, then on the prototype's prototype, and so on up the chain until it finds it or reaches an object with a null prototype.",
      },
      {
        question: "Implement a deep clone function in JavaScript.",
        answer:
          "A deep clone function creates a copy of an object including nested objects. Here's a simple implementation: function deepClone(obj) { if (typeof obj !== 'object' || obj === null) return obj; const newObj = Array.isArray(obj) ? [] : {}; for (let key in obj) { newObj[key] = deepClone(obj[key]); } return newObj; }",
      },
      {
        question: "Explain the concept of event delegation and its benefits.",
        answer:
          "Event delegation is a technique where you add a single event listener to a parent element instead of adding event listeners to multiple child elements. It takes advantage of event bubbling. Benefits include improved performance (fewer event listeners) and the ability to handle dynamically added elements.",
      },
      {
        question:
          "Implement a function to flatten a nested array in JavaScript.",
        answer:
          "A flatten function converts a nested array into a single-level array. Here's an implementation: function flatten(arr) { return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []); }",
      },
      {
        question:
          "Explain the concept of memoization and implement a memoize function.",
        answer:
          "Memoization is an optimization technique that speeds up applications by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Here's a simple memoize function: function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (key in cache) return cache[key]; const result = fn.apply(this, args); cache[key] = result; return result; }; }",
      },
      {
        question:
          "Explain the difference between classical inheritance and prototypal inheritance.",
        answer:
          "Classical inheritance is based on classes, which are blueprints for objects. Prototypal inheritance is based on prototypes, where objects inherit directly from other objects. JavaScript uses prototypal inheritance, which is more flexible and dynamic.",
      },
      {
        question: "Implement a throttle function in JavaScript.",
        answer:
          "A throttle function ensures that a function is called at most once in a specified time period. Here's an implementation: function throttle(func, limit) { let inThrottle; return function(...args) { if (!inThrottle) { func.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } }; }",
      },
      {
        question: "Explain the concept of closure and provide an example.",
        answer:
          "A closure is a function bundled with its lexical environment. It allows a function to access variables from its outer scope even after the outer function has returned. Example: function outerFunc(x) { return function(y) { return x + y; }; } const addFive = outerFunc(5); console.log(addFive(3)); // Outputs 8",
      },
      {
        question:
          "Implement a function to check if a given string is a palindrome.",
        answer:
          "A palindrome reads the same backward as forward. Here's a function to check: function isPalindrome(str) { str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); return str === str.split('').reverse().join(''); }",
      },
      {
        question: "Explain the differences between var, let, and const.",
        answer:
          "var is function-scoped and can be redeclared and updated. let is block-scoped and can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared. const also creates a read-only reference to a value.",
      },
      {
        question:
          "Implement a function to find the longest substring without repeating characters.",
        answer:
          "Here's an implementation: function longestSubstring(s) { let longest = ''; let current = ''; let seen = {}; for (let char of s) { if (seen[char]) { current = current.slice(current.indexOf(seen[char]) + 1); } current += char; seen[char] = char; if (current.length > longest.length) longest = current; } return longest; }",
      },
      {
        question:
          "Explain the event loop in JavaScript and how it handles asynchronous operations.",
        answer:
          "The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and callback queue. When the stack is empty, it takes the first task from the queue and pushes it onto the stack to be executed. This allows asynchronous operations to be performed without blocking the main thread.",
      },
      {
        question:
          "Implement a basic pub/sub (publish/subscribe) pattern in JavaScript.",
        answer:
          "Here's a simple implementation: const pubSub = { events: {}, subscribe(event, callback) { if (!this.events[event]) this.events[event] = []; this.events[event].push(callback); }, publish(event, data) { if (this.events[event]) this.events[event].forEach(callback => callback(data)); } };",
      },
      {
        question:
          "Explain the concept of 'this' in JavaScript and how it behaves in different contexts.",
        answer:
          "In JavaScript, 'this' refers to the object that is executing the current function. Its value depends on how the function is called: In a method, 'this' refers to the object. In a regular function, it refers to the global object (or undefined in strict mode). In an arrow function, it retains the 'this' value of the enclosing lexical scope.",
      },
      {
        question:
          "Implement a function to perform a binary search on a sorted array.",
        answer:
          "Here's an implementation: function binarySearch(arr, target) { let left = 0, right = arr.length - 1; while (left <= right) { let mid = Math.floor((left + right) / 2); if (arr[mid] === target) return mid; if (arr[mid] < target) left = mid + 1; else right = mid - 1; } return -1; }",
      },
    ],
    simpleProjects: [
      {
        question: "Create a to-do list application",
        answer:
          "Build a simple to-do list app with features like adding tasks, marking them as complete, and deleting tasks. Use vanilla JavaScript or a framework of your choice.",
      },
      {
        question: "Build a calculator with basic arithmetic operations",
        answer:
          "Implement basic arithmetic operations like addition, subtraction, multiplication, and division. Use a simple UI to display results and handle user input.",
      },
      {
        question: "Develop a countdown timer",
        answer:
          "Build a countdown timer that takes a user-inputted time and counts down to zero. Use setInterval or setTimeout to update the display, and implement start, pause, and reset functionality.",
      },
      {
        question: "Create a simple quiz game",
        answer:
          "Develop a quiz game with multiple-choice questions. Keep track of the score and display the final result at the end of the quiz.",
      },
      {
        question: "Build a basic weather app",
        answer:
          "Create a simple weather app that fetches data from a weather API and displays the current weather for a given location.",
      },
      {
        question: "Implement a color picker",
        answer:
          "Build a color picker that allows users to select colors using sliders for RGB values and displays the selected color.",
      },
      {
        question: "Create a basic form validation",
        answer:
          "Implement client-side form validation for a simple registration form, checking for things like required fields, email format, and password strength.",
      },
      {
        question: "Develop a simple notes app",
        answer:
          "Build a notes app that allows users to create, edit, and delete notes. Use local storage to persist the notes between sessions.",
      },
      {
        question: "Build a basic image slider",
        answer:
          "Create an image slider that cycles through a set of images, with next and previous buttons for navigation.",
      },
      {
        question: "Implement a simple drawing app",
        answer:
          "Develop a basic drawing application using the HTML5 canvas, allowing users to draw freehand with different colors and brush sizes.",
      },
      {
        question: "Create a basic calculator",
        answer:
          "Build a calculator that can perform basic arithmetic operations (addition, subtraction, multiplication, division) with a user interface.",
      },
      {
        question: "Develop a simple Pomodoro timer",
        answer:
          "Create a Pomodoro timer that alternates between work and break periods, with customizable durations.",
      },
      {
        question: "Build a basic currency converter",
        answer:
          "Implement a simple currency converter that allows users to convert between different currencies using current exchange rates.",
      },
      {
        question: "Create a simple memory game",
        answer:
          "Develop a memory game where players need to match pairs of cards, keeping track of moves and time taken.",
      },
      {
        question: "Implement a basic chat application",
        answer:
          "Build a simple chat application using WebSockets or a real-time database like Firebase, allowing users to send and receive messages.",
      },
      {
        question: "Develop a basic music player",
        answer:
          "Create a simple music player with play, pause, and skip functionality, using a predefined list of songs.",
      },
      {
        question: "Build a simple recipe finder",
        answer:
          "Implement a recipe finder that allows users to search for recipes based on ingredients or cuisine type, using a recipe API.",
      },
      {
        question: "Create a basic expense tracker",
        answer:
          "Develop a simple expense tracker that allows users to add, categorize, and visualize their expenses.",
      },
      {
        question: "Implement a simple markdown previewer",
        answer:
          "Build a markdown previewer that converts user-input markdown text into formatted HTML in real-time.",
      },
      {
        question: "Develop a basic typing speed test",
        answer:
          "Create a typing speed test that measures words per minute (WPM) and accuracy as users type a given text.",
      },
      {
        question: "Build a simple password generator",
        answer:
          "Implement a password generator that creates strong passwords based on user-specified criteria (length, inclusion of numbers, special characters, etc.).",
      },
      {
        question: "Create a basic kanban board",
        answer:
          "Develop a simple kanban board with columns for 'To Do', 'In Progress', and 'Done', allowing users to add and move tasks between columns.",
      },
      {
        question: "Implement a simple URL shortener",
        answer:
          "Build a basic URL shortener that takes long URLs and generates shorter, shareable links.",
      },
      {
        question: "Develop a basic chess game",
        answer:
          "Create a simple chess game that enforces basic rules and allows two players to make moves on a chess board.",
      },
      {
        question: "Build a simple calendar application",
        answer:
          "Implement a basic calendar application that allows users to view dates, add events, and navigate between months.",
      },
    ],
  },
  react: {
    title: "React Inteview Questions",
    description:
      "Excel in your React interview with our in-depth collection of React interview questions. Learn about hooks, state management, lifecycle methods, and advanced concepts with expert solutions.",
    interviewQuestions: [
      {
        question: "What is React and what are its main features?",
        answer:
          "React is a JavaScript library for building user interfaces. Its main features include: Virtual DOM for efficient updates, component-based architecture, unidirectional data flow, JSX syntax, and React Hooks for state management in functional components.",
      },
      {
        question:
          "Explain the difference between functional and class components.",
        answer:
          "Functional components are JavaScript functions that take props and return JSX. They're simpler and can use Hooks for state and lifecycle features. Class components are ES6 classes that extend React.Component, have their own state, lifecycle methods, and render method.",
      },
      {
        question: "What is JSX?",
        answer:
          "JSX is a syntax extension for JavaScript used in React. It allows you to write HTML-like code in your JavaScript files. JSX gets transformed into JavaScript objects representing React elements.",
      },
      {
        question: "What are props in React?",
        answer:
          "Props (short for properties) are a way of passing data from parent to child components in React. They are read-only and help make components reusable and dynamic.",
      },
      {
        question: "Explain the concept of state in React.",
        answer:
          "State is a JavaScript object that holds dynamic data in a component. When state changes, React re-renders the component. In class components, state is managed via this.state and this.setState(). In functional components, state is managed using the useState hook.",
      },
      {
        question: "What is the virtual DOM and how does it work?",
        answer:
          "The virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance. When state changes, React creates a new virtual DOM, compares it with the previous one, and only updates the real DOM where necessary, reducing expensive DOM operations.",
      },
      {
        question: "What are React hooks? Name a few commonly used hooks.",
        answer:
          "Hooks are functions that let you use state and other React features in functional components. Common hooks include: useState for state management, useEffect for side effects, useContext for context consumption, useRef for creating mutable references, and useCallback and useMemo for performance optimization.",
      },
      {
        question: "Explain the lifecycle methods in class components.",
        answer:
          "Lifecycle methods are special methods that run at different stages of a component's life. Key methods include: componentDidMount (after first render), componentDidUpdate (after updates), componentWillUnmount (before removal), and render (returns JSX to be rendered).",
      },
      {
        question: "How do you handle events in React?",
        answer:
          "React events are named using camelCase and passed as functions. For example: onClick={handleClick}. In class components, you typically bind methods in the constructor. In functional components, you can define event handlers as regular functions or arrow functions.",
      },
      {
        question: "What is the significance of keys in React lists?",
        answer:
          "Keys help React identify which items in a list have changed, been added, or been removed. They should be unique among siblings. Keys help in efficient updating of the UI, especially in dynamic lists.",
      },
      {
        question: "What is the purpose of React.Fragment?",
        answer:
          "React.Fragment allows you to group multiple elements without adding an extra DOM node. It's useful when you need to return multiple elements from a component's render method without wrapping them in a div or other container element.",
      },
      {
        question: "Explain the concept of conditional rendering in React.",
        answer:
          "Conditional rendering in React allows you to render different UI based on certain conditions. This can be done using if statements, ternary operators, or logical && operator in JSX.",
      },
      {
        question:
          "What is the difference between controlled and uncontrolled components?",
        answer:
          "In controlled components, form data is handled by React state. The value of the input is controlled by React. In uncontrolled components, form data is handled by the DOM itself. Refs are used to get form values from the DOM.",
      },
      {
        question: "How do you pass data between components in React?",
        answer:
          "Data can be passed from parent to child via props, from child to parent via callbacks, between siblings through a common parent (lifting state up), or using context for deeply nested components. For complex applications, state management libraries like Redux or MobX can be used.",
      },
      {
        question: "What is context in React and when would you use it?",
        answer:
          "Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for sharing 'global' data like themes, user authentication status, or language preferences.",
      },
      {
        question: "Explain the concept of higher-order components (HOCs).",
        answer:
          "A higher-order component is a function that takes a component and returns a new component with some added functionality. HOCs are used for code reuse, logic abstraction, and state manipulation. They're a pattern derived from React's compositional nature.",
      },
      {
        question: "What is the purpose of the useEffect hook?",
        answer:
          "useEffect is used for side effects in functional components. It serves similar purposes to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. It's used for data fetching, subscriptions, or manually changing the DOM.",
      },
      {
        question: "How do you optimize performance in a React application?",
        answer:
          "Performance can be optimized by: using React.memo for functional components or PureComponent for class components to prevent unnecessary re-renders, using useMemo and useCallback hooks to memoize values and functions, code-splitting with React.lazy and Suspense, virtualizing long lists, and minimizing state updates.",
      },
      {
        question: "What is code-splitting in React and why is it useful?",
        answer:
          "Code-splitting is a technique to split your code into small chunks which can then be loaded on demand. It's useful for improving the performance of large React applications by reducing the size of the initial bundle that needs to be downloaded.",
      },
      {
        question: "Explain the concept of lifting state up.",
        answer:
          "Lifting state up is a pattern used when several components need to share the same changing data. Instead of keeping the state in child components, you lift it up to their closest common ancestor. This makes the state shareable between components and keeps it in sync.",
      },
      {
        question: "What are error boundaries in React?",
        answer:
          "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.",
      },
      {
        question: "How does React handle forms?",
        answer:
          "React can handle forms using controlled components where form data is controlled by React state, or uncontrolled components where form data is handled by the DOM. For controlled components, you use state to store input values and update them on change events.",
      },
      {
        question:
          "What is the difference between Element and Component in React?",
        answer:
          "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. A Component is a function or class that accepts input and returns a React element.",
      },
      {
        question: "Explain the concept of reconciliation in React.",
        answer:
          "Reconciliation is the process React uses to efficiently update the DOM. When a component's state changes, React creates a new virtual DOM tree, diffs it with the previous one, and calculates the most efficient way to update the actual DOM. This process is also known as diffing.",
      },
      {
        question: "What are pure components in React?",
        answer:
          "Pure Components in React are similar to regular components, except they automatically implement shouldComponentUpdate() with a shallow prop and state comparison. This can provide a performance boost in some cases by reducing the number of renders.",
      },
    ],
    takeHomeProjects: [
      {
        question: "Build a task management application with React",
        answer:
          "Create a task management app with features like adding tasks, marking them as complete, filtering tasks, and persisting data in local storage. Use React hooks for state management and side effects.",
      },
      {
        question: "Develop a weather dashboard using a public API",
        answer:
          "Build a weather dashboard that fetches data from a public weather API. Include features like searching for locations, displaying current weather, and showing a 5-day forecast. Use React Router for navigation between pages.",
      },
      {
        question: "Create a blog platform with React and a headless CMS",
        answer:
          "Develop a blog platform using React for the frontend and a headless CMS like Contentful or Strapi for content management. Implement features like listing posts, individual post pages, and categories.",
      },
      {
        question:
          "Build an e-commerce product page with shopping cart functionality",
        answer:
          "Create a product page for an e-commerce site. Include features like product variants, add to cart functionality, and a mini cart display. Use Context API or Redux for state management.",
      },
      {
        question: "Develop a movie database application using The Movie DB API",
        answer:
          "Build a movie database app that allows users to search for movies, view details, and save favorites. Implement infinite scrolling for movie lists and use React Router for navigation.",
      },
      {
        question: "Create a real-time chat application with React and Firebase",
        answer:
          "Develop a real-time chat application using React for the frontend and Firebase for backend services. Include features like user authentication, real-time messaging, and online status indicators.",
      },
      {
        question: "Build a quiz application with multiple choice questions",
        answer:
          "Create a quiz app that presents users with multiple-choice questions, tracks their score, and shows results at the end. Implement a timer for each question and use React's state management for handling user responses.",
      },
      {
        question: "Develop a personal finance tracker",
        answer:
          "Build a finance tracker that allows users to input income and expenses, categorize transactions, and view spending trends. Use charts for data visualization and implement drag-and-drop functionality for categorizing transactions.",
      },
      {
        question: "Create a recipe management application",
        answer:
          "Develop a recipe management app where users can add, edit, and delete recipes. Include features like ingredient scaling, meal planning, and a shopping list generator. Use local storage or a backend API for data persistence.",
      },
      {
        question: "Build a social media dashboard",
        answer:
          "Create a dashboard that aggregates data from various social media platforms using their APIs. Implement data visualization using charts and graphs, and include features like scheduling posts and analyzing engagement metrics.",
      },
      {
        question: "Develop a markdown editor with live preview",
        answer:
          "Build a markdown editor that allows users to write markdown and see a live preview. Include features like syntax highlighting, custom toolbar, and the ability to save and load documents.",
      },
      {
        question: "Create a job board application",
        answer:
          "Develop a job board where companies can post jobs and job seekers can apply. Implement features like job search, filtering, and application tracking. Use a backend API for data management.",
      },
      {
        question: "Build a workout tracker application",
        answer:
          "Create an app for tracking workouts, including features like creating custom workouts, logging exercises, and visualizing progress over time. Implement user authentication and data persistence.",
      },
      {
        question: "Develop a language learning application",
        answer:
          "Build an application to help users learn a new language. Include features like flashcards, quizzes, and progress tracking. Use spaced repetition algorithms for efficient learning.",
      },
      {
        question: "Create a collaborative drawing application",
        answer:
          "Develop a web-based drawing application that allows multiple users to draw on the same canvas in real-time. Implement features like different brush sizes, colors, and the ability to save and share drawings.",
      },
      {
        question: "Build a podcast player application",
        answer:
          "Create a podcast player that allows users to search for podcasts, subscribe to shows, download episodes, and track listening progress. Implement audio playback controls and a responsive design for mobile use.",
      },
      {
        question: "Develop a personal portfolio website builder",
        answer:
          "Build a tool that allows users to create and customize their own portfolio websites without coding knowledge. Include features like drag-and-drop layout editing, theme customization, and project showcases.",
      },
      {
        question: "Create a habit tracker application",
        answer:
          "Develop an application for tracking daily habits. Include features like streak counting, progress visualization, and reminder notifications. Use local storage or a backend API for data persistence.",
      },
      {
        question: "Build a note-taking application with rich text editing",
        answer:
          "Create a note-taking app with features like rich text editing, note organization (folders/tags), and search functionality. Implement sync across devices using a backend API.",
      },
      {
        question: "Develop a project management tool",
        answer:
          "Build a project management application with features like task assignment, progress tracking, and team collaboration. Implement a kanban board interface and use websockets for real-time updates.",
      },
      {
        question: "Create a music streaming service frontend",
        answer:
          "Develop the frontend for a music streaming service. Focus on features like playlist management, search functionality, and audio playback. Use a public music API for song data.",
      },
      {
        question: "Build a data visualization dashboard",
        answer:
          "Create a dashboard that visualizes complex datasets using various chart types. Focus on interactivity and performance with large datasets. Use a library like D3.js or recharts for advanced visualizations.",
      },
      {
        question: "Develop a personal knowledge base application",
        answer:
          "Build an application for organizing personal knowledge, including features like note-taking, linking between notes, and visualization of connections. Implement a graph-based data structure for representing knowledge.",
      },
      {
        question: "Create a cryptocurrency portfolio tracker",
        answer:
          "Develop an application that allows users to track their cryptocurrency investments. Include features like real-time price updates, portfolio analysis, and historical performance charts.",
      },
      {
        question: "Build an online code editor and compiler",
        answer:
          "Create a web-based code editor that supports multiple programming languages. Implement features like syntax highlighting, code execution, and the ability to save and share code snippets.",
      },
    ],
    bigCompanyQuestions: [
      {
        question: "Implement a custom hook for handling form state in React.",
        answer:
          "Here's a basic implementation of a useForm hook: const useForm = (initialState = {}) => { const [values, setValues] = useState(initialState); const handleChange = (e) => { setValues({ ...values, [e.target.name]: e.target.value }); }; const resetForm = () => setValues(initialState); return [values, handleChange, resetForm]; };",
      },
      {
        question:
          "Explain how you would optimize a React application that's rendering a large list of items.",
        answer:
          "To optimize rendering of large lists: 1) Use virtualization (react-window or react-virtualized) to render only visible items. 2) Implement pagination or infinite scrolling. 3) Use React.memo to prevent unnecessary re-renders of list items. 4) Use the useCallback hook for event handlers passed to list items. 5) Consider using a web worker for heavy computations.",
      },
      {
        question:
          "Implement a higher-order component (HOC) that adds loading functionality to any component.",
        answer:
          "Here's a simple HOC for adding loading functionality: const withLoading = (WrappedComponent) => { return function WithLoading(props) { const [isLoading, setIsLoading] = useState(true); useEffect(() => { setTimeout(() => setIsLoading(false), 2000); }, []); return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />; }; };",
      },
      {
        question:
          "Implement a custom hook for handling API calls with loading and error states.",
        answer:
          "Here's a custom hook for API calls: const useApi = (url) => { const [data, setData] = useState(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(null); useEffect(() => { const fetchData = async () => { try { const response = await fetch(url); const json = await response.json(); setData(json); setLoading(false); } catch (error) { setError(error); setLoading(false); } }; fetchData(); }, [url]); return { data, loading, error }; };",
      },
      {
        question:
          "Explain the concept of code splitting in React and how to implement it.",
        answer:
          "Code splitting is a technique to split your code into small chunks which can then be loaded on demand. In React, it's implemented using dynamic import() syntax along with React.lazy and Suspense. Example: const OtherComponent = React.lazy(() => import('./OtherComponent')); function MyComponent() { return ( <React.Suspense fallback={<div>Loading...</div>}> <OtherComponent /> </React.Suspense> ); }",
      },
      {
        question:
          "Implement a custom hook for managing local storage in React.",
        answer:
          "Here's a custom hook for local storage: const useLocalStorage = (key, initialValue) => { const [storedValue, setStoredValue] = useState(() => { try { const item = window.localStorage.getItem(key); return item ? JSON.parse(item) : initialValue; } catch (error) { console.log(error); return initialValue; } }); const setValue = (value) => { try { const valueToStore = value instanceof Function ? value(storedValue) : value; setStoredValue(valueToStore); window.localStorage.setItem(key, JSON.stringify(valueToStore)); } catch (error) { console.log(error); } }; return [storedValue, setValue]; };",
      },
      {
        question:
          "Explain the concept of context in React and how to use it effectively.",
        answer:
          "Context provides a way to pass data through the component tree without having to pass props down manually at every level. To use it effectively: 1) Create a context using React.createContext(). 2) Provide the context value at a high level in your app using Context.Provider. 3) Consume the context in nested components using useContext hook or Context.Consumer. Use context for global data like themes, user info, or language preferences.",
      },
      {
        question: "Implement a custom hook for managing pagination in React.",
        answer:
          "Here's a custom pagination hook: const usePagination = (data, itemsPerPage) => { const [currentPage, setCurrentPage] = useState(1); const maxPage = Math.ceil(data.length / itemsPerPage); const currentData = () => { const begin = (currentPage - 1) * itemsPerPage; const end = begin + itemsPerPage; return data.slice(begin, end); }; const next = () => { setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage)); }; const prev = () => { setCurrentPage((currentPage) => Math.max(currentPage - 1, 1)); }; const jump = (page) => { const pageNumber = Math.max(1, page); setCurrentPage((currentPage) => Math.min(pageNumber, maxPage)); }; return { next, prev, jump, currentData, currentPage, maxPage }; };",
      },
      {
        question:
          "Explain the differences between useMemo and useCallback hooks.",
        answer:
          "useMemo is used to memoize expensive computations. It takes a function and an array of dependencies, and only recomputes the memoized value when one of the dependencies has changed. useCallback is similar, but it's used to memoize functions instead of values. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.",
      },
      {
        question:
          "Implement a custom hook for managing forms with validation in React.",
        answer:
          "Here's a basic form hook with validation: const useForm = (initialState, validate) => { const [values, setValues] = useState(initialState); const [errors, setErrors] = useState({}); const [isSubmitting, setIsSubmitting] = useState(false); useEffect(() => { if (isSubmitting) { const noErrors = Object.keys(errors).length === 0; if (noErrors) { console.log('Form is valid! Submitting...'); setIsSubmitting(false); } else { setIsSubmitting(false); } } }, [errors]); const handleChange = (event) => { setValues({ ...values, [event.target.name]: event.target.value }); }; const handleSubmit = (event) => { event.preventDefault(); setErrors(validate(values)); setIsSubmitting(true); }; return { handleChange, handleSubmit, values, errors, isSubmitting }; };",
      },
      {
        question:
          "Explain the concept of render props and how it compares to higher-order components.",
        answer:
          "Render props is a technique where a component receives a function prop that it uses to render its content. HOCs are functions that take a component and return a new component with additional props or behavior. Render props are more flexible and avoid naming collisions, while HOCs are easier to debug and can be composed. Hooks have largely replaced both patterns for many use cases.",
      },
      {
        question: "Implement a custom hook for managing a modal in React.",
        answer:
          "Here's a custom modal hook: const useModal = () => { const [isOpen, setIsOpen] = useState(false); const toggle = () => setIsOpen(!isOpen); return { isOpen, toggle }; }; // Usage: const Modal = ({ children, isOpen, toggle }) => { if (!isOpen) return null; return ( <div className='modal'> <div className='modal-content'> {children} <button onClick={toggle}>Close</button> </div> </div> ); };",
      },
    ],
    simpleProjects: [
      {
        question: "Create a simple counter application",
        answer:
          "Build a counter app with increment, decrement, and reset functionality using useState hook.",
      },
      {
        question: "Develop a to-do list application",
        answer:
          "Create a to-do list where users can add, delete, and mark tasks as complete. Use useState for state management.",
      },
      {
        question: "Build a basic calculator",
        answer:
          "Implement a calculator with basic arithmetic operations. Use state to manage the display and calculations.",
      },
      {
        question: "Create a weather app using a public API",
        answer:
          "Build a simple weather app that fetches data from a public weather API and displays current weather for a given location.",
      },
      {
        question: "Develop a simple quiz application",
        answer:
          "Create a quiz app with multiple-choice questions. Keep track of the score and display results at the end.",
      },
      {
        question: "Build a basic form with validation",
        answer:
          "Implement a form (e.g., signup form) with client-side validation for fields like email, password, etc.",
      },
      {
        question: "Create a simple movie search application",
        answer:
          "Build an app that allows users to search for movies using a public movie API. Display results in a list or grid.",
      },
      {
        question: "Develop a basic e-commerce product list",
        answer:
          "Create a page that displays a list of products. Include features like filtering and sorting.",
      },
      {
        question: "Build a timer/stopwatch application",
        answer:
          "Implement a timer or stopwatch with start, pause, and reset functionality.",
      },
      {
        question: "Create a simple blog post viewer",
        answer:
          "Build a basic blog application that displays a list of posts and allows users to view individual posts.",
      },
      {
        question: "Develop a basic image gallery",
        answer:
          "Create an image gallery with thumbnail views and the ability to view images in a larger size.",
      },
      {
        question: "Build a simple chat UI",
        answer:
          "Implement the UI for a chat application. Focus on the layout and message display (actual messaging functionality not required).",
      },
      {
        question: "Create a basic calendar component",
        answer:
          "Develop a calendar component that displays days of the month and allows navigation between months.",
      },
      {
        question: "Build a simple music player UI",
        answer:
          "Create the UI for a music player with play, pause, skip, and volume control (actual audio playback not required).",
      },
      {
        question: "Develop a basic cryptocurrency price tracker",
        answer:
          "Build an app that displays current prices of popular cryptocurrencies using a public API.",
      },
      {
        question: "Create a simple recipe finder",
        answer:
          "Implement a recipe finder that allows users to search for recipes based on ingredients using a recipe API.",
      },
      {
        question: "Build a basic note-taking application",
        answer:
          "Create a simple note-taking app where users can add, edit, and delete notes. Use local storage for persistence.",
      },
      {
        question: "Develop a simple drawing app",
        answer:
          "Implement a basic drawing application using HTML canvas and React.",
      },
      {
        question: "Create a basic bookmarking tool",
        answer:
          "Build a simple bookmarking application where users can save and categorize website URLs.",
      },
      {
        question: "Build a simple expense tracker",
        answer:
          "Implement a basic expense tracker where users can add and categorize expenses.",
      },
      {
        question: "Develop a basic pomodoro timer",
        answer:
          "Create a pomodoro timer application with work and break intervals.",
      },
      {
        question: "Build a simple color picker",
        answer:
          "Implement a color picker that allows users to select colors and displays the corresponding hex and RGB values.",
      },
      {
        question: "Create a basic markdown previewer",
        answer:
          "Develop a simple markdown editor with a live preview of the formatted text.",
      },
      {
        question: "Build a simple kanban board",
        answer:
          "Implement a basic kanban board with columns for 'To Do', 'In Progress', and 'Done'. Allow adding and moving tasks between columns.",
      },
      {
        question: "Develop a basic file explorer UI",
        answer:
          "Create a simple file explorer interface with a tree view of folders and files.",
      },
    ],
  },
};

export const projectsData = [
  {
    id: 205,
    type: "video",
    title: "Build Reddit 2.0 clone with NextJS",
    category: ["web-dev"],
    tech: [
      "React",
      "SQL",
      "Supabase",
      "Next.js",
      "GraphQL",
      "TypeScript",
      "Tailwind",
    ],
    datePublished: "May 18, 2022",
    projectURL: "https://youtu.be/O0AhmAVzOo4",
    image:
      "https://images.unsplash.com/photo-1616509091215-57bbece93654?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 204,
    type: "video",
    title: "Build an Uber Eats Clone with React Native",
    category: ["mob-dev"],
    tech: ["React Native", "Javascript", "Android", "iOS"],
    datePublished: "Sep 19, 2021",
    projectURL: "https://youtu.be/jmvbhuJXFow",
    image:
      "https://images.unsplash.com/photo-1616696269042-7a27b57a6808?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHViZXIlMjBlYXRzfGVufDB8fDB8fHww",
  },
  {
    id: 203,
    type: "video",
    title: "Build an Uber Clone with React Native",
    category: ["mob-dev"],
    tech: ["React Native", "Javascript", "Android", "iOS"],
    datePublished: "Jul 30, 2021",
    projectURL: "https://youtu.be/bvn_HYpix6s",
    image:
      "https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWJlciUyMGVhdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 202,
    type: "article",
    title: "Build a Web Scraper using BeautifulSoup",
    category: ["ml-ai"],
    tech: ["Python", "BeautifulSoup"],
    datePublished: "Aug 11, 2019",
    projectURL:
      "https://medium.com/@dev.sb18/web-scrapping-ipl-stats-493e3344d741",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 201,
    type: "article",
    title: "Build Super Mario Bros, Zelda, and Space Invaders with Kaboom.js",
    category: ["game-dev"],
    tech: ["JavaScript", "Kaboom"],
    datePublished: "May 10, 2021",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-mario-zelda-and-space-invaders-with-kaboom-js/",
    image:
      "https://images.unsplash.com/photo-1593789382576-54f489574d26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwZXIlMjBtYXJpb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 200,
    type: "article",
    title: "Build a YouTube Clone with React",
    category: ["web-dev"],
    tech: ["Express", "Node", "JavaScript", "HTML", "CSS", "React"],
    datePublished: "February 10, 2021",
    projectURL: "https://www.freecodecamp.org/news/build-youtube-with-react/",
  },
  {
    id: 199,
    type: "article",
    title: "Build a Chat App with Stories Using the Flutter SDK",
    category: ["mob-dev"],
    tech: ["Flutter", "Dart"],
    datePublished: "February 10, 2021",
    projectURL: "https://www.freecodecamp.org/news/flutter-messenger-clone/",
  },
  {
    id: 198,
    type: "video",
    title: "Build a Robinhood Style App to Track COVID-19 Cases",
    category: ["mob-dev"],
    tech: ["Kotlin", "Android"],
    datePublished: "February 17, 2021",
    projectURL: "https://www.youtube.com/watch?v=4gMDR69DB6A",
  },
  {
    id: 197,
    type: "article",
    title: "Create a Diverging Bar Chart with a JavaScript Charting Library",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML", "CSS"],
    datePublished: "February 24, 2021",
    projectURL:
      "https://www.freecodecamp.org/news/diverging-bar-chart-javascript/",
  },
  {
    id: 196,
    type: "article",
    title: "Learn CSS Basics by Building a Card Component",
    category: ["web-dev"],
    tech: ["HTML", "CSS"],
    datePublished: "February 25, 2021",
    projectURL:
      "https://www.freecodecamp.org/news/learn-css-basics-by-building-a-card-component/",
  },
  {
    id: 195,
    type: "video",
    title: "Create an Arkanoid Game with TypeScript",
    category: ["game-dev"],
    tech: ["TypeScript", "HTML", "CSS", "JavaScript"],
    datePublished: "February 25, 2021",
    projectURL: "https://www.youtube.com/watch?v=7bejSTim38A",
  },
  {
    id: 194,
    type: "article",
    title: "Create a Serverless Meme as a Service",
    category: ["web-dev"],
    tech: ["JavaScript", "Rust", "CSS", "HTML"],
    datePublished: "February 25, 2021",
    projectURL:
      "https://www.freecodecamp.org/news/create-a-serverless-meme-as-a-service/",
  },
  {
    id: 193,
    type: "article",
    title: "Weather Forecast Website",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML", "CSS", "React"],
    datePublished: "November 20, 2020",
    projectURL:
      "https://www.codementor.io/projects/web/weather-forecast-website-atx32lz7zb",
  },
  {
    id: 192,
    type: "article",
    title: "Link Shortener Website",
    category: ["web-dev"],
    tech: ["JavaScript", "Vue", "HTML", "CSS", "React", "Angular"],
    datePublished: "April 15, 2021",
    projectURL:
      "https://www.codementor.io/projects/web/link-shortener-website-brqjanf6zq",
  },
  {
    id: 189,
    type: "article",
    title: "Plagiarism Checker Website",
    category: ["web-dev"],
    tech: ["Python", "Bootstrap"],
    datePublished: "December 20, 2020",
    projectURL:
      "https://www.codementor.io/projects/web/plagiarism-checker-website-atx32nf0oa",
  },
  {
    id: 187,
    type: "article",
    title: "Build a Custom Google Maps Theme",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML", "CSS"],
    datePublished: "February 24, 2021",
    projectURL:
      "https://www.codementor.io/projects/web/build-a-custom-google-maps-theme-bf8levr6eg",
  },
  {
    id: 186,
    type: "article",
    title: "Tinder style Swipe Mobile App",
    category: ["mob-dev"],
    tech: ["Kotlin", "Java", "Swift"],
    datePublished: "April 09, 2021",
    projectURL:
      "https://www.codementor.io/projects/mobile/tinder-style-swipe-mechanism-for-an-ios-app-bh9ph8n1co",
  },
  {
    id: 185,
    type: "article",
    title: "Cryptocurrency Price Listing Mobile App",
    category: ["mob-dev"],
    tech: ["React Native", "Swift", "Flutter", "Dart"],
    datePublished: "December 01, 2021",
    projectURL:
      "https://www.codementor.io/projects/mobile/cryptocurrency-price-listing-mobile-app-atx32meo88",
  },
  {
    id: 184,
    type: "article",
    title: "Restaurants Social Mobile App",
    category: ["mob-dev"],
    tech: ["React Native", "Swift", "Flutter", "Dart"],
    datePublished: "December 01, 2021",
    projectURL:
      "https://www.codementor.io/projects/mobile/restaurants-social-mobile-app-atx32rvbqo",
  },
  {
    id: 183,
    type: "article",
    title: "Break Time Reminder Mobile App",
    category: ["mob-dev"],
    tech: ["React Native", "Kotlin", "Java", "Swift"],
    datePublished: "March 15, 2021",
    projectURL:
      "https://www.codementor.io/projects/mobile/break-time-reminder-mobile-app-bjzm27c836",
  },
  {
    id: 182,
    type: "article",
    title: "Invoicing and Payment Reminder Mobile App",
    category: ["mob-dev"],
    tech: ["React", "Node", "Express", "MongoDB"],
    datePublished: "December 10, 2020",
    projectURL:
      "https://www.codementor.io/projects/mobile/invoicing-and-payment-reminder-mobile-app-atx32o85yj",
  },
  {
    id: 181,
    type: "article",
    title: "Countdown Mobile App",
    category: ["mob-dev"],
    tech: ["Swift", "Java", "React Native"],
    datePublished: "March 02, 2021",
    projectURL:
      "https://www.codementor.io/projects/mobile/countdown-mobile-app-bjzn08zcon",
  },
  {
    id: 180,
    type: "video",
    title: "Build a Super Mario themed Google map with JavaScript",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "March 01, 2021",
    projectURL: "https://www.youtube.com/watch?v=CdDXbvBFXLY",
  },
  {
    id: 179,
    type: "article",
    title: "Simple Games",
    category: ["game-dev"],
    tech: ["Lua", "LÖVE", "Python", "Pygame Zero"],
    datePublished: "Nov 26, 2020",
    projectURL: "https://simplegametutorials.github.io/",
  },
  {
    id: 176,
    type: "article",
    title: "Build a community-driven delivery application",
    category: ["web-dev"],
    tech: ["Python", "Django", "PostgreSQL", "JavaScript", "Mapbox"],
    datePublished: "Dec 09, 2020",
    projectURL:
      "https://medium.com/egen/thinking-of-building-a-contact-tracing-application-heres-what-you-can-do-instead-part-2-d391e143fe67",
  },
  {
    id: 175,
    type: "article",
    title: "Build a local Store search-and-discovery application",
    category: ["web-dev"],
    tech: ["Python", "Django", "PostgreSQL", "JavaScript", "Mapbox"],
    datePublished: "Nov 04, 2020",
    projectURL:
      "https://medium.com/egen/thinking-of-building-a-contact-tracing-application-heres-what-you-can-do-instead-4522e1d98739",
  },
  {
    id: 174,
    type: "article",
    title: "Medium Clone using React.js and Node.js",
    category: ["web-dev"],
    tech: ["React", "Node", "CSS3", "JavaScript", "HTML5"],
    datePublished: "Mar 31, 2018",
    projectURL:
      "https://codeburst.io/build-simple-medium-com-on-node-js-and-react-js-a278c5192f47",
  },
  {
    id: 173,
    type: "video",
    title: "Python Online Multiplayer Game",
    category: ["game-dev"],
    tech: ["Python"],
    datePublished: "Mar 26, 2019",
    projectURL: "https://youtu.be/McoDjOCb2Zo",
  },
  {
    id: 172,
    type: "video",
    title: "Beat Em Up Fight Game",
    category: ["game-dev"],
    tech: ["Unity", "C#"],
    datePublished: "Feb 29, 2019",
    projectURL: "https://youtu.be/gcF66q-UPCs",
  },
  {
    id: 171,
    type: "video",
    title: "Facebook Clone with React JS",
    category: ["web-dev"],
    tech: ["React", "Firebase", "CSS3", "JavaScript", "HTML5"],
    datePublished: "Aug 27, 2020",
    projectURL: "https://www.youtube.com/watch?v=B-kxUMHBxNo&t=1s",
  },
  {
    id: 170,
    type: "video",
    title: "JavaScript30 - 30 Day Vanilla JS Coding Challenge",
    category: ["web-dev"],
    tech: ["JavaScript"],
    datePublished: "Oct 2, 2020",
    projectURL: "https://javascript30.com/",
  },
  {
    id: 169,
    type: "article",
    title: "CNN that Detects Pneumonia from Chest X-Rays",
    category: ["ml-ai"],
    tech: ["CNN", "Python"],
    datePublished: "Jun 29, 2020",
    projectURL:
      "https://towardsdatascience.com/pneumonia-detection-pushing-the-boundaries-of-human-ability-with-deep-learning-ce08dbd0dc20",
  },
  {
    id: 168,
    type: "article",
    title: "Travel Bucket List Map with Gatsby and GraphCMS",
    category: ["web-dev"],
    tech: ["Gatsby", "Leaflet", "GraphCMS", "HTML", "CSS"],
    datePublished: "Jun 23, 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-create-a-travel-bucket-list-map-with-gatsby-react-leaflet-graphcms/",
  },
  {
    id: 167,
    type: "article",
    title: "Memory Card Game with Vue.js",
    category: ["web-dev"],
    tech: ["Vue", "JavaScript", "HTML", "CSS"],
    datePublished: "Jun 24, 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-memory-card-game-with-vuejs/",
  },
  {
    id: 166,
    type: "video",
    title: "Strapi and GatsbyJS Course - Portfolio Project",
    category: ["web-dev"],
    tech: ["Strapi", "Gatsby", "JavaScript", "HTML", "CSS"],
    datePublished: "Jun 25, 2020",
    projectURL: "https://www.youtube.com/watch?v=Oc_ITwxiG-Y",
  },
  {
    id: 165,
    type: "video",
    title: "Storybook - Node, Express, MongoDB and Google OAuth",
    category: ["web-dev"],
    tech: ["MongoDB", "Node", "JavaScript", "HTML", "CSS"],
    datePublished: "Jun 19, 2020",
    projectURL: "https://www.youtube.com/watch?v=SBvmnHTQIPY",
  },
  {
    id: 164,
    type: "video",
    title: "Breathe and Relax App - JavaScript and CSS Animations",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML", "CSS"],
    datePublished: "jun 7, 2020",
    projectURL: "https://www.youtube.com/watch?v=l-1ZrU6avzI",
  },
  {
    id: 163,
    type: "video",
    title: "Node.js CLI For Cryptocurrency Prices",
    category: ["web-dev"],
    tech: ["Node", "JavaScript"],
    datePublished: "Apr 3, 2020",
    projectURL: "https://www.youtube.com/watch?v=-6OAHsde15E",
  },
  {
    id: 162,
    type: "video",
    title: "React and Tailwind CSS Image Gallery",
    category: ["web-dev"],
    tech: ["React", "Tailwind", "JavaScript", "HTML", "CSS"],
    datePublished: "Apr 9, 2020",
    projectURL: "https://www.youtube.com/watch?v=FiGmAI5e91M",
  },
  {
    id: 161,
    type: "video",
    title: "Pomodoro Clock using React",
    category: ["web-dev"],
    tech: ["React", "JavaScript", "HTML", "CSS"],
    datePublished: "Mar 28, 2020",
    projectURL:
      "https://www.youtube.com/watch?v=VPrmzk-1Gps&list=PL3cz80ehFCalRswkbzwTJ-zdZxu3iBjkJ",
  },
  {
    id: 160,
    type: "article",
    title: "Keyword Density Tool with Laravel from Scratch",
    category: ["web-dev"],
    tech: ["Laravel", "PHP", "JQuery", "AJAX", "SEO"],
    datePublished: "Apr 28, 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-keyword-density-tool-with-laravel/",
  },
  {
    id: 159,
    type: "video",
    title: "YouTube Clone using Yii2 PHP Framework",
    category: ["web-dev"],
    tech: ["Yii2", "PHP"],
    datePublished: "Apr 28, 2020",
    projectURL: "https://www.youtube.com/watch?v=whuIf33v2Ug",
  },
  {
    id: 158,
    type: "article",
    title: "Auto-Updating Data Visualizations in Python with AWS",
    category: ["ml-ai"],
    tech: ["Python", "AWS", "Matplotlib"],
    datePublished: "3 MAY 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-create-auto-updating-data-visualizations-in-python-with-matplotlib-and-aws/",
  },
  {
    id: 157,
    type: "article",
    title: "Reddit Clone with React, GraphQL and Amplify",
    category: ["web-dev"],
    tech: ["React", "Amplify", "AWS", "GraphQL", "Node", "JavaScript"],
    datePublished: "4 MAY 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-full-stack-serverless-application-with-react-and-amplify/",
  },
  {
    id: 156,
    type: "article",
    title: "Twitter Sentiment Analysis Tool using GCP and Node",
    category: ["ml-ai"],
    tech: ["API", "GCP", "Node", "JavaScript"],
    datePublished: "4 MAY 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-twitter-sentiment-analysis-tool/",
  },
  {
    id: 155,
    type: "article",
    title: "Full-Stack Yelp Clone with React and GraphQL",
    category: ["web-dev"],
    tech: ["React", "GraphQL", "HTML", "CSS", "JavaScript"],
    datePublished: "5 MAY 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-create-a-full-stack-yelp-clone-with-react-graphql/",
  },
  {
    id: 154,
    type: "article",
    title: "Pokémon Web App with React Hooks and Context API",
    category: ["web-dev"],
    tech: ["React", "HTML", "CSS", "JavaScript"],
    datePublished: "Apr 24, 2020",
    projectURL:
      "https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/",
  },
  {
    id: 153,
    type: "article",
    title: "Watershed Monitor using JavaScript and Rails",
    category: ["web-dev"],
    tech: ["Ruby", "Rails", "JavaScript"],
    datePublished: "Apr 28, 2020",
    projectURL:
      "https://dev.to/jessesbyers/watershed-monitor-javascript-and-rails-project-576c",
  },
  {
    id: 152,
    type: "article",
    title: "Climate Data Dashboard using React and Redux",
    category: ["web-dev"],
    tech: ["React", "Redux", "HTML", "CSS", "JavaScript"],
    datePublished: "Apr 28, 2020",
    projectURL:
      "https://dev.to/jessesbyers/climate-data-dashboard-react-redux-project-1ilb",
  },
  {
    id: 151,
    type: "article",
    title: "Flipping UNO Cards using only CSS",
    category: ["web-dev"],
    tech: ["HTML", "CSS"],
    datePublished: "Apr 28, 2020",
    projectURL:
      "https://dev.to/comscience/flipping-uno-cards-using-only-css-4jb9",
  },
  {
    id: 150,
    type: "video",
    title: "Simple 3D Game using Godot 3.1",
    category: ["game-dev"],
    tech: ["Godot", "C#", "3D"],
    datePublished: "Jul 26, 2019",
    projectURL:
      "https://www.youtube.com/watch?v=VeCrE-ge8xM&list=PLda3VoSoc_TSBBOBYwcmlamF1UrjVtccZ",
  },
  {
    id: 149,
    type: "video",
    title: "Simple Puzzle Game in Godot - Box and Switch",
    category: ["game-dev"],
    tech: ["Godot", "C#", "2D"],
    datePublished: "Feb 7, 2019",
    projectURL: "https://www.youtube.com/watch?v=l2wF2gj_hlA",
  },
  {
    id: 148,
    type: "video",
    title: "Game Interface From Scratch in Godot 3",
    category: ["game-dev"],
    tech: ["Godot", "C#", "2D"],
    datePublished: "May 16, 2018",
    projectURL: "https://www.youtube.com/watch?v=y1E_y9AIqow",
  },
  {
    id: 147,
    type: "video",
    title: "2D Game with Godot: Player and Enemy",
    category: ["game-dev"],
    tech: ["Godot", "C#", "2D"],
    datePublished: "Oct 2, 2019",
    projectURL: "https://www.youtube.com/watch?v=Mc13Z2gboEk",
  },
  {
    id: 146,
    type: "article",
    title: "Chat App with Redis, WebSocket and Go",
    category: ["web-dev"],
    tech: ["Redis", "Web Socket", "Go", "Azure"],
    datePublished: "Apr 13, 2020",
    projectURL:
      "https://dev.to/azure/let-s-learn-how-to-to-build-a-chat-application-with-redis-websocket-and-go-5cck",
  },
  {
    id: 145,
    type: "article",
    title: "Spotify Login Animation With React Navigation",
    category: ["web-dev"],
    tech: ["React", "HTML", "CSS", "JavaScript"],
    datePublished: "Apr 22, 2020",
    projectURL:
      "https://dev.to/elaziziyoussouf/spotify-login-animation-with-react-navigation-v5-4od7",
  },
  {
    id: 144,
    type: "article",
    title: "Dynamic Weather Interface with just CSS",
    category: ["web-dev"],
    tech: ["HTML", "CSS"],
    datePublished: "Apr 22, 2020",
    projectURL:
      "https://dev.to/comscience/dynamic-weather-app-using-just-css-cp2",
  },
  {
    id: 143,
    type: "article",
    title: "Simple CRUD App with Airtable and Vue",
    category: ["web-dev"],
    tech: ["Airtable", "Vue", "Vuetify", "API", "HTML", "CSS", "JavaScript"],
    datePublished: "Apr 22, 2020",
    projectURL:
      "https://dev.to/codeply/build-a-simple-crud-app-with-airtable-api-vue-vuetify-5565",
  },
  {
    id: 142,
    type: "article",
    title: "Full Stack RPG Character Generator with MEVN stack",
    category: ["web-dev"],
    tech: ["MongoDB", "Express", "Vue", "Node", "HTML", "CSS", "JavaScript"],
    datePublished: "9 MARCH 2020",
    projectURL:
      "https://www.freecodecamp.org/news/build-a-full-stack-mevn-app/",
  },
  {
    id: 141,
    type: "article",
    title: "Todo App with the PERN stack",
    category: ["web-dev"],
    tech: [
      "PostgreSQL",
      "Express",
      "React",
      "Node",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    datePublished: "20 MARCH 2020",
    projectURL:
      "https://www.freecodecamp.org/news/learn-the-pern-stack-full-course/",
  },
  {
    id: 140,
    type: "article",
    title: "Summer Road Trip Mapping App with Gatsby",
    category: ["web-dev"],
    tech: ["React", "Gatsby", "Leaflet"],
    datePublished: "24 MARCH 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet/",
  },
  {
    id: 139,
    type: "article",
    title: "Multiplayer Card Game with Socket.io",
    category: ["game-dev", "web-dev"],
    tech: ["Phaser 3", "Express", "Socket.io", "JavaScript"],
    datePublished: "25 MARCH 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-multiplayer-card-game-with-phaser-3-express-and-socket-io/",
  },
  {
    id: 138,
    type: "article",
    title: "COVID-19 Dashboard and Map App with Gatsby",
    category: ["web-dev"],
    tech: ["React", "Gatsby", "Leaflet"],
    datePublished: "31 MARCH 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/",
  },
  {
    id: 137,
    type: "article",
    title: "Multiplayer Card Game with Unity 2D and Mirror",
    category: ["game-dev"],
    tech: ["C#", "Unity", "2D", "Mirror"],
    datePublished: "2 APRIL 2020",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-multiplayer-card-game-with-unity-2d-and-mirror/",
  },
  {
    id: 136,
    type: "article",
    title: "Roguelike Tutorial in Rust",
    category: ["game-dev"],
    tech: ["Rust", "2D"],
    datePublished: "Feb 16, 2017",
    projectURL: "https://tomassedovic.github.io/roguelike-tutorial/",
  },
  {
    id: 135,
    type: "article",
    title: "Adventures in Rust - A Basic 2D Game",
    category: ["game-dev"],
    tech: ["Rust", "2D"],
    datePublished: "Apr 14, 2020",
    projectURL: "https://a5huynh.github.io/posts/2018/adventures-in-rust/",
  },
  {
    id: 134,
    type: "article",
    title: "Terminal Snake Game with Ruby",
    category: ["game-dev"],
    tech: ["Ruby", "2D"],
    datePublished: "Mar 2, 2017",
    projectURL: "https://diatomenterprises.com/gamedev-on-ruby-why-not/",
  },
  {
    id: 133,
    type: "article",
    title: "Space Invaders using OpenGL",
    category: ["game-dev"],
    tech: ["OpenGL", "C/C++", "2D"],
    datePublished: "Mar 20, 2018",
    projectURL:
      "http://nicktasios.nl/posts/space-invaders-from-scratch-part-1.html",
  },
  {
    id: 132,
    type: "video",
    title: "Sudoku Solver in C",
    category: ["game-dev"],
    tech: ["C/C++", "2D"],
    datePublished: "Mar 28, 2015",
    projectURL:
      "https://www.youtube.com/watch?v=9aMUyoYDI-0&list=PLkTXsX7igf8edTYU92nU-f5Ntzuf-RKvW",
  },
  {
    id: 131,
    type: "video",
    title: "Chess Engine In C",
    category: ["game-dev"],
    tech: ["C/C++", "2D"],
    datePublished: "Sep 9, 2019",
    projectURL:
      "https://www.youtube.com/watch?v=bGAfaepBco4&list=PLZ1QII7yudbc-Ky058TEaOstZHVbT-2hg&index=1&t=0s",
  },
  {
    id: 130,
    type: "video",
    title: "Flappy Bird iOS Game using Swift",
    category: ["mob-dev", "game-dev"],
    tech: ["Swift", "XCode", "iOS"],
    datePublished: "Mar 14 2017",
    projectURL:
      "https://www.raywenderlich.com/3875-how-to-make-a-game-like-flappy-bird",
  },
  {
    id: 129,
    type: "video",
    title: "Bull's Eye iOS Game using Swift",
    category: ["mob-dev", "game-dev"],
    tech: ["Swift", "XCode", "iOS"],
    datePublished: "Sep 3 2019",
    projectURL:
      "https://www.raywenderlich.com/4919757-your-first-ios-and-swiftui-app",
  },
  {
    id: 128,
    type: "video",
    title: "Task List iOS App using SwiftUI",
    category: ["mob-dev"],
    tech: ["Swift", "XCode", "iOS"],
    datePublished: "Oct 8 2019",
    projectURL:
      "https://www.raywenderlich.com/5662524-your-second-ios-and-swiftui-app",
  },
  {
    id: 127,
    type: "article",
    title: "Restaurant iOS App using SwiftUI",
    category: ["mob-dev"],
    tech: ["Swift", "XCode", "iOS"],
    datePublished: "September 18 2019",
    projectURL:
      "https://www.hackingwithswift.com/quick-start/swiftui/swiftui-tutorial-building-a-complete-project",
  },
  {
    id: 126,
    type: "article",
    title: "Dice iOS App with Swift",
    category: ["mob-dev"],
    tech: ["Swift", "XCode", "iOS"],
    datePublished: "February 13, 2020",
    projectURL:
      "https://www.ralfebert.de/ios/beginner-tutorials/iphone-app-xcode/",
  },
  {
    id: 125,
    type: "video",
    title: "Flashcard Quiz With React",
    category: ["web-dev"],
    tech: ["React", "API", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Apr 11, 2020",
    projectURL: "https://www.youtube.com/watch?v=hEtZ040fsD8",
  },
  {
    id: 124,
    type: "video",
    title: "Whack-a-Mole with pure JavaScript",
    category: ["web-dev", "game-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Feb 5, 2020",
    projectURL: "https://www.youtube.com/watch?v=o93jem7oPnA",
  },
  {
    id: 123,
    type: "video",
    title: "NOKIA 3310 Snake Game using JavaScript",
    category: ["web-dev", "game-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Jan 26, 2020",
    projectURL: "https://www.youtube.com/watch?v=rui2tRRVtc0",
  },
  {
    id: 122,
    type: "video",
    title: "Rock Paper Scissors in vanilla JavaScript",
    category: ["web-dev", "game-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Nov 15, 2019",
    projectURL: "https://www.youtube.com/watch?v=mXrTIpYoCPE",
  },
  {
    id: 120,
    type: "article",
    title: "Twitter Sentiment Analysis using CNN",
    category: ["ml-ai"],
    tech: ["Python", "Matplotlib", "Numpy", "Pandas"],
    datePublished: "Dec 8, 2017",
    projectURL:
      "https://towardsdatascience.com/another-twitter-sentiment-analysis-bb5b01ebad90",
  },
  {
    id: 119,
    type: "article",
    title: "Meme Maker with React",
    category: ["web-dev"],
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Dec 24, 2018",
    projectURL:
      "https://medium.com/free-code-camp/react-for-beginners-building-a-meme-maker-with-react-7164d3d3e55f",
  },
  {
    id: 118,
    type: "video",
    title: "Evernote Clone with React",
    category: ["web-dev"],
    tech: ["React", "Firebase", "Node", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Jul 15, 2019",
    projectURL: "https://www.youtube.com/watch?v=I250xdtUvy8",
  },
  {
    id: 117,
    type: "video",
    title: "Developer Meetup App with Vue",
    category: ["web-dev"],
    tech: ["Vue", "Firebase", "Vuetify", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Mar 4, 2020",
    projectURL:
      "https://www.youtube.com/watch?v=FXY1UyQfSFw&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt&index=2&t=32s",
  },
  {
    id: 116,
    type: "article",
    title: "Real-Time Chat App with Vue",
    category: ["web-dev"],
    tech: ["Vue", "Firebase", "Vuex", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Oct 16, 2017",
    projectURL: "https://vuejsdevelopers.com/2017/10/16/vue-js-firestore/",
  },
  {
    id: 115,
    type: "article",
    title: "Cryptocurrency Tracker with Vue",
    category: ["web-dev"],
    tech: ["Vue", "Vuetify", "API", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Feb 15, 2018",
    projectURL:
      "https://medium.com/eliteng/build-a-cryptocurrency-tracker-with-vue-js-c0efd4c0139e",
  },
  {
    id: 114,
    type: "article",
    title: "Multiplayer Quiz Game with Vue",
    category: ["game-dev", "web-dev"],
    tech: ["Vue", "Pusher", "Node", "Express", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Apr 8, 2018",
    projectURL:
      "https://medium.com/front-end-weekly/build-a-multiplayer-quiz-game-with-vue-js-ca22bad8fb52",
  },
  {
    id: 113,
    type: "article",
    title: "Minesweeper Game with Vue",
    category: ["game-dev", "web-dev"],
    tech: ["Vue", "Vuex", "Vuetify", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Sep 2, 2019",
    projectURL:
      "https://medium.com/javascript-in-plain-english/minesweeper-rebuild-with-vue-vuex-and-vuetify-ab1921e5258e",
  },
  {
    id: 112,
    type: "article",
    title: "Instagram Clone with Vue",
    category: ["web-dev"],
    tech: ["Vue", "CSSGram", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Dec 19, 2019",
    projectURL:
      "https://medium.com/fullstackio/tutorial-build-an-instagram-clone-with-vue-js-and-cssgram-24a9f3de0408",
  },
  {
    id: 111,
    type: "article",
    title: "Hacker News Clone with Angular",
    category: ["web-dev"],
    tech: ["Angular", "Lighthouse", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Oct 24, 2018",
    projectURL:
      "https://medium.com/crowdbotics/learn-to-build-a-simple-progressive-web-app-pwa-with-angular-and-lighthouse-hacker-news-clone-51aca763032f",
  },
  {
    id: 110,
    type: "article",
    title: "Chat Interface",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3"],
    datePublished: "Dec 19, 2019",
    projectURL: "https://www.florin-pop.com/blog/2019/04/chat-interface/",
  },
  {
    id: 109,
    type: "article",
    title: "Pure CSS3 Tooltip",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3"],
    datePublished: "Dec 18, 2019",
    projectURL: "https://www.florin-pop.com/blog/2019/05/pure-css-tooltip/",
  },
  {
    id: 108,
    type: "article",
    title: "Social Media Buttons",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3"],
    datePublished: "Jul 11, 2019",
    projectURL: "https://www.florin-pop.com/blog/2019/07/social-media-buttons/",
  },
  {
    id: 107,
    type: "article",
    title: "Testimonial Card",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3"],
    datePublished: "Jul 17, 2019",
    projectURL: "https://www.florin-pop.com/blog/2019/07/testimonial-card/",
  },
  {
    id: 106,
    type: "article",
    title: "Navigation Bar with CSS3 Flexbox",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3"],
    datePublished: "Jul 9, 2019",
    projectURL: "https://freshman.tech/flexbox-navbar/",
  },
  {
    id: 105,
    type: "article",
    title: "Mobile App Layout with CSS3 Flexbox",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3"],
    datePublished: "Oct 23, 2019",
    projectURL: "https://freshman.tech/flexbox-mobile-app/",
  },
  {
    id: 104,
    type: "article",
    title: "Reddit-inspired Loading Spinner",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3"],
    datePublished: "Feb 19, 2019",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-reddit-inspired-loading-spinner-with-only-html-and-css-5b2fca3fdca/",
  },
  {
    id: 103,
    type: "article",
    title: "Calendar with CSS3 Grid",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Jul 16, 2019",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-calendar-with-css-grid/",
  },
  {
    id: 102,
    type: "video",
    title: "Tetris Game in React",
    category: ["game-dev", "web-dev"],
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Aug 14, 2019",
    projectURL: "https://www.youtube.com/watch?v=ZGOaCxX8HIU",
  },
  {
    id: 101,
    type: "article",
    title: "2D Breakout Game",
    category: ["game-dev", "web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Oct 26, 2016",
    projectURL:
      "https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript",
  },
  {
    id: 100,
    type: "article",
    title: "Sprite Animation",
    category: ["game-dev", "web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Jan 13, 2018",
    projectURL:
      "https://medium.com/dailyjs/how-to-build-a-simple-sprite-animation-in-javascript-b764644244aa",
  },
  {
    id: 99,
    type: "article",
    title: "Snake Game",
    category: ["game-dev", "web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Jul 5, 2018",
    projectURL:
      "https://www.freecodecamp.org/news/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e/",
  },
  {
    id: 98,
    type: "article",
    title: "Memory Game",
    category: ["game-dev", "web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Aug 28, 2018",
    projectURL:
      "https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae",
  },
  {
    id: 97,
    type: "article",
    title: "Simple Authentication and Authorization",
    category: ["web-dev"],
    tech: ["GraphQL", "Apollo", "Node", "JavaScript", "HTML5", "CSS3"],
    datePublished: "Mar 27, 2020",
    projectURL:
      "https://medium.com/javascript-in-plain-english/simple-authentication-and-authorization-in-graphql-5293c0458fc",
  },
  {
    id: 96,
    type: "article",
    title: "Cryptocurrency Tracker",
    category: ["web-dev"],
    tech: [
      "NextJS",
      "GraphQL",
      "Apollo",
      "Node",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    datePublished: "Mar 24, 2020",
    projectURL:
      "https://medium.com/javascript-in-plain-english/build-a-cryptocurrency-tracker-with-next-js-and-apollo-graphql-c776cff6b8bf",
  },
  {
    id: 95,
    type: "article",
    title: "Instant Search With Vanilla Javascript",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Jun 21, 2019",
    projectURL:
      "https://www.florin-pop.com/blog/2019/06/vanilla-javascript-instant-search/",
  },
  {
    id: 94,
    type: "article",
    title: "Calculator App",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "Mar 21, 2018",
    projectURL: "https://zellwk.com/blog/calculator-part-1",
  },
  {
    id: 93,
    type: "video",
    title: "Tanks Shooter",
    category: ["game-dev"],
    tech: ["3D", "Unity", "C#"],
    datePublished: "Jul 24, 2019",
    projectURL: "https://learn.unity.com/project/tanks-tutorial",
  },
  {
    id: 92,
    type: "video",
    title: "2D Roguelike",
    category: ["game-dev"],
    tech: ["2D", "Unity", "C#"],
    datePublished: "May 22, 2019",
    projectURL: "https://learn.unity.com/project/2d-roguelike-tutorial",
  },
  {
    id: 91,
    type: "video",
    title: "John Lemon's Haunted Jaunt 3D",
    category: ["game-dev"],
    tech: ["3D", "Unity", "C#"],
    datePublished: "Apr 12, 2019",
    projectURL:
      "https://learn.unity.com/project/john-lemon-s-haunted-jaunt-3d-beginner",
  },
  {
    id: 90,
    type: "video",
    title: "VR Beginner: The Escape Room",
    category: ["game-dev"],
    tech: ["VR", "Unity", "C#"],
    datePublished: "Feb 24, 2020",
    projectURL: "https://learn.unity.com/project/vr-beginner-the-escape-room",
  },
  {
    id: 89,
    type: "video",
    title: "Ruby's Adventure",
    category: ["game-dev"],
    tech: ["2D", "Unity", "C#"],
    datePublished: "March 2, 2019",
    projectURL: "https://learn.unity.com/project/ruby-s-2d-rpg",
  },
  {
    id: 88,
    type: "video",
    title: "RPG Game",
    category: ["game-dev"],
    tech: ["2D", "Unity", "C#"],
    datePublished: "Jun 11, 2019",
    projectURL: "https://learn.unity.com/project/creator-kit-rpg",
  },
  {
    id: 87,
    type: "video",
    title: "Roll-a-ball",
    category: ["game-dev"],
    tech: ["3D", "Unity", "C#"],
    datePublished: "Mar 2, 2019",
    projectURL: "https://learn.unity.com/project/roll-a-ball-tutorial",
  },
  {
    id: 86,
    type: "video",
    title: "FPS Microgame",
    category: ["game-dev"],
    tech: ["Unity", "C#"],
    datePublished: "Oct 24, 2019",
    projectURL:
      "https://learn.unity.com/project/fps-template?courseId=5c59cf22edbc2a001f59aa5d",
  },
  {
    id: 85,
    type: "video",
    title: "Platformer Microgame",
    category: ["game-dev"],
    tech: ["Unity", "C#", "2D"],
    datePublished: "Apr 12, 2019",
    projectURL:
      "https://learn.unity.com/project/2d-platformer-template?courseId=5c59cf22edbc2a001f59aa5d",
  },
  {
    id: 84,
    type: "video",
    title: "Karting Microgame",
    category: ["game-dev"],
    tech: ["Unity", "C#"],
    datePublished: "Mar 20, 2019",
    projectURL:
      "https://learn.unity.com/project/karting-template?courseId=5c59cf22edbc2a001f59aa5d",
  },
  {
    id: 83,
    type: "video",
    title: "TrueCaller Clone",
    category: ["mob-dev"],
    tech: ["Java", "MySQL", "XAMPP", "Android"],
    datePublished: "Jun 15, 2015",
    projectURL: "https://www.youtube.com/watch?v=mlEdGe4vui4",
  },
  {
    id: 82,
    type: "video",
    title: "Weather App",
    category: ["mob-dev"],
    tech: ["Java", "API", "Android"],
    datePublished: "Oct 4, 2016",
    projectURL: "https://www.youtube.com/watch?v=wAV2Uqv9KLo",
  },
  {
    id: 81,
    type: "video",
    title: "E-Commerce App",
    category: ["mob-dev"],
    tech: ["Java", "Firebase", "Android"],
    datePublished: "Oct 11, 2018",
    projectURL:
      "https://www.youtube.com/watch?v=6keVIot98QU&list=PLxefhmF0pcPlqmH_VfWneUjfuqhreUz-O&index=1",
  },
  {
    id: 80,
    type: "video",
    title: "Chat App",
    category: ["mob-dev"],
    tech: ["Java", "Firebase", "Android"],
    datePublished: "Aug 18, 2018",
    projectURL:
      "https://www.youtube.com/watch?v=fJWFeW09qeE&list=PLzLFqCABnRQftQQETzoVMuteXzNiXmnj8&index=1",
  },
  {
    id: 79,
    type: "article",
    title: "Todo App",
    category: ["mob-dev"],
    tech: ["Flutter", "Dart", "Android", "iOS"],
    datePublished: "Jun 7, 2018",
    projectURL:
      "https://medium.com/the-web-tub/making-a-todo-app-with-flutter-5c63dab88190",
  },
  {
    id: 78,
    type: "video",
    title: "Travel App UI",
    category: ["mob-dev"],
    tech: ["Flutter", "Dart", "Android", "iOS"],
    datePublished: "Oct 23, 2019",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=CSa6Ocyog4U",
  },
  {
    id: 77,
    type: "article",
    title: "Taylor Swift Lyrics Generator",
    category: ["ml-ai"],
    tech: ["Python", "Keras", "Numpy", "Pandas"],
    datePublished: "Apr 19, 2018",
    projectURL:
      "https://towardsdatascience.com/ai-generates-taylor-swifts-song-lyrics-6fd92a03ef7e",
  },
  {
    id: 76,
    type: "article",
    title: "MNIST Digit Recognizer",
    category: ["ml-ai"],
    tech: [
      "Python",
      "Keras",
      "TensorFlow",
      "Numpy",
      "SciKit",
      "Pandas",
      "Matplotlib",
    ],
    datePublished: "Apr 19, 2018",
    projectURL:
      "https://medium.com/@lvarruda/how-to-get-top-2-position-on-kaggles-mnist-digit-recognizer-48185d80a2d4",
  },
  {
    id: 75,
    type: "article",
    title: "Train a Model to Generate Colors",
    category: ["ml-ai"],
    tech: ["Python", "Keras", "TensorFlow", "Numpy"],
    datePublished: "May 3, 2018",
    projectURL:
      "https://heartbeat.fritz.ai/how-to-train-a-keras-model-to-generate-colors-3bc79e54971b",
  },

  {
    id: 74,
    type: "article",
    title: "Image Caption Generator",
    category: ["ml-ai"],
    tech: ["Python", "TensorFlow", "Numpy"],
    datePublished: "11 APRIL 2018",
    projectURL:
      "https://medium.freecodecamp.org/building-an-image-caption-generator-with-deep-learning-in-tensorflow-a142722e9b1f",
  },
  {
    id: 73,
    type: "article",
    title: "Break a Captcha System using CNN",
    category: ["ml-ai"],
    tech: ["Python", "Keras", "TensorFlow", "OpenCV", "Numpy"],
    datePublished: "Dec 13, 2017",
    projectURL:
      "https://medium.com/@ageitgey/how-to-break-a-captcha-system-in-15-minutes-with-machine-learning-dbebb035a710",
  },
  {
    id: 72,
    type: "article",
    title: "Generate an Average Face",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy", "C/C++"],
    datePublished: "MAY 7, 2016",
    projectURL:
      "https://www.learnopencv.com/average-face-opencv-c-python-tutorial/",
  },
  {
    id: 71,
    type: "article",
    title: "Image Stitching",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "December 17, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/12/17/image-stitching-with-opencv-and-python/",
  },
  {
    id: 70,
    type: "article",
    title: "Hand Keypoint Detection",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy", "C/C++"],
    datePublished: "OCTOBER 8, 2018",
    projectURL:
      "https://www.learnopencv.com/hand-keypoint-detection-using-deep-learning-and-opencv/",
  },
  {
    id: 69,
    type: "article",
    title: "Eigenface",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy", "C/C++"],
    datePublished: "JANUARY 18, 2018",
    projectURL: "https://www.learnopencv.com/eigenface-using-opencv-c-python/",
  },
  {
    id: 68,
    type: "article",
    title: "Drone Target Detection",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "May 4, 2015",
    projectURL:
      "https://www.pyimagesearch.com/2015/05/04/target-acquired-finding-targets-in-drone-and-quadcopter-video-streams-using-python-and-opencv/",
  },
  {
    id: 67,
    type: "article",
    title: "Object Detection using Mask R-CNN",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "OCTOBER 1, 2018",
    projectURL:
      "https://www.learnopencv.com/deep-learning-based-object-detection-and-instance-segmentation-using-mask-r-cnn-in-opencv-python-c/",
  },
  {
    id: 66,
    type: "article",
    title: "Facial Landmark Detection",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "DLib", "Numpy"],
    datePublished: "April 3, 2017",
    projectURL:
      "https://www.pyimagesearch.com/2017/04/03/facial-landmarks-dlib-opencv-python/",
  },
  {
    id: 65,
    type: "article",
    title: "Text Skew Correction",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "February 20, 2017",
    projectURL:
      "https://www.pyimagesearch.com/2017/02/20/text-skew-correction-opencv-python/",
  },
  {
    id: 64,
    type: "article",
    title: "OCR and Text Recognition",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Tesseract", "Numpy"],
    datePublished: "September 17, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/09/17/opencv-ocr-and-text-recognition-with-tesseract/",
  },
  {
    id: 63,
    type: "article",
    title: "People Counter",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "August 13, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/08/13/opencv-people-counter/",
  },
  {
    id: 62,
    type: "article",
    title: "Text Detection",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "August 20, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/08/20/opencv-text-detection-east-text-detector/",
  },
  {
    id: 61,
    type: "article",
    title: "Semantic Segmentation",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "September 3, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/09/03/semantic-segmentation-with-opencv-and-deep-learning/",
  },

  {
    id: 60,
    type: "article",
    title: "Object Tracking",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy", "CamShift"],
    datePublished: "July 2018",
    projectURL:
      "https://www.pyimagesearch.com/wp-content/uploads/2014/11/opencv_crash_course_camshift.pdf",
  },
  {
    id: 59,
    type: "article",
    title: "Face Clustering",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "July 9, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/07/09/face-clustering-with-python/",
  },
  {
    id: 58,
    type: "article",
    title: "Barcode Scanner",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "ZBar", "Numpy"],
    datePublished: "May 21, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/05/21/an-opencv-barcode-and-qr-code-scanner-with-zbar/",
  },
  {
    id: 57,
    type: "article",
    title: "Saliency Detection",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "July 16, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/07/16/opencv-saliency-detection/",
  },
  {
    id: 56,
    type: "article",
    title: "Face Detection",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy"],
    datePublished: "February 26, 2018",
    projectURL:
      "https://www.pyimagesearch.com/2018/02/26/face-detection-with-opencv-and-deep-learning/",
  },
  {
    id: 55,
    type: "article",
    title: "Document Scanner",
    category: ["ml-ai"],
    tech: ["Python", "OpenCV", "Numpy", "SciKit"],
    datePublished: "September 1, 2014",
    projectURL:
      "https://www.pyimagesearch.com/2014/09/01/build-kick-ass-mobile-document-scanner-just-5-minutes/",
  },
  {
    id: 54,
    type: "article",
    title: "Music Recommender",
    category: ["ml-ai"],
    tech: ["Python", "SciKit", "Numpy", "Pandas"],
    datePublished: "Apr 24, 2017",
    projectURL:
      "https://towardsdatascience.com/how-to-build-a-simple-song-recommender-296fcbc8c85",
  },
  {
    id: 53,
    type: "article",
    title: "Predict Quality of Wine",
    category: ["ml-ai"],
    tech: ["Python", "Matplotlib", "Numpy", "Pandas"],
    datePublished: "7 FEBRUARY 2018",
    souce: "freeCodeCamp",
    projectURL:
      "https://www.freecodecamp.org/news/using-data-science-to-understand-what-makes-wine-taste-good-669b496c67ee/",
  },
  {
    id: 52,
    type: "video",
    title: "Genetic Algorithms",
    category: ["ml-ai"],
    tech: ["Python", "SciKit", "Numpy", "Pandas"],
    datePublished: "Nov 11, 2016",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=dSofAXnnFrY",
  },
  {
    id: 51,
    type: "video",
    title: "DeepDream",
    category: ["ml-ai"],
    tech: ["Python", "TensorFlow", "Visualization"],
    datePublished: "Nov 5, 2016",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=MrBzgvUNr4w",
  },
  {
    id: 50,
    type: "video",
    title: "Stock Price Prediction",
    category: ["ml-ai"],
    tech: ["Python", "SciKit", "Matplotlib"],
    datePublished: "Oct 29, 2016",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=SSu00IRRraY",
  },
  {
    id: 49,
    type: "video",
    title: "Movie Recommendation Systems",
    category: ["ml-ai"],
    tech: ["Python", "LightFM"],
    datePublished: "Oct 21, 2016",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=9gBC9R-msAk",
  },
  {
    id: 48,
    type: "video",
    title: "Twitter Sentiment Analysis",
    category: ["ml-ai"],
    tech: ["Python", "API"],
    datePublished: "Oct 14, 2016",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=o_OZdbCzHUA",
  },
  {
    id: 47,
    type: "article",
    title: "Arcade Shooter",
    category: ["game-dev"],
    tech: ["Lua", "LÖVE"],
    datePublished: "Feb 14, 2018",
    projectURL: "https://github.com/adnzzzzZ/blog/issues/30",
  },
  {
    id: 46,
    type: "article",
    title: "Reddit Client",
    category: ["mob-dev"],
    tech: ["Android", "Kotlin"],
    datePublished: "Jan 27, 2016",
    projectURL:
      "https://android.jlelse.eu/learn-kotlin-while-developing-an-android-app-introduction-567e21ff9664",
  },
  {
    id: 45,
    type: "video",
    title: "Todo App",
    category: ["web-dev"],
    tech: ["Vue", "JavaScript", "CSS3", "HTML5"],
    datePublished: "Feb 13, 2018",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=78tNYZUS-ps",
  },
  {
    id: 44,
    type: "article",
    title: "Blog App",
    category: ["web-dev"],
    tech: ["Vue", "GraphQL", "Apollo", "JavaScript", "CSS3", "HTML5"],
    datePublished: "February 22, 2018",
    projectURL:
      "https://scotch.io/tutorials/build-a-blog-with-vue-graphql-and-apollo-client",
  },
  {
    id: 43,
    type: "article",
    title: "Simple Budgeting App",
    category: ["web-dev"],
    tech: ["Vue", "Bulma", "JavaScript", "CSS3", "HTML5"],
    datePublished: "Mar 21, 2017",
    projectURL: "https://matthiashager.com/complete-vuejs-application-tutorial",
  },
  {
    id: 42,
    type: "article",
    title: "Search Bot",
    category: ["web-dev"],
    tech: ["Node", "Twilio", "Cheerio", "API", "Automation", "JavaScript"],
    datePublished: "3 JUNE 2018",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-simple-search-bot-in-30-minutes-eb56fcedcdb1/",
  },
  {
    id: 41,
    type: "article",
    title: "Twitter Bot",
    category: ["web-dev"],
    tech: ["Node", "JavaScript", "API", "Automation"],
    datePublished: "May 30, 2017",
    projectURL:
      "https://codeburst.io/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078",
  },
  {
    id: 40,
    type: "article",
    title: "Real-Time Markdown Editor",
    category: ["web-dev"],
    tech: ["Node", "JavaScript", "Express", "Redis", "HTML5", "CSS3"],
    datePublished: "July 01, 2015",
    projectURL:
      "https://scotch.io/tutorials/building-a-real-time-markdown-viewer",
  },
  {
    id: 39,
    type: "article",
    title: "Todo App",
    category: ["web-dev"],
    tech: ["Angular", "TypeScript", "RxJS", "HTML5", "CSS3"],
    datePublished: "2/2/2018",
    projectURL:
      "http://www.discoversdk.com/blog/intro-to-angular-and-the-evolution-of-the-web",
  },
  {
    id: 38,
    type: "article",
    title: "Hacker News Client",
    category: ["web-dev"],
    tech: ["Angular", "RxJS", "Webpack", "HTML5", "CSS3", "JavaScript"],
    datePublished: "September 16, 2016",
    projectURL: "https://houssein.me/angular2-hacker-news",
  },
  {
    id: 37,
    type: "video",
    title: "Random Quote Machine",
    category: ["web-dev"],
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    datePublished: "2018-10-02",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=3QngsWA9IEE",
  },
  {
    id: 36,
    type: "video",
    title: "Todoist Clone",
    category: ["web-dev"],
    tech: ["React", "Firebase", "JavaScript", "Testing", "HTML5", "CSS3"],
    datePublished: "2019-08-27",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=hT3j87FMR6M",
  },
  {
    id: 35,
    type: "article",
    title: "Chat App with Sentiment Analysis",
    category: ["web-dev", "ml-ai"],
    tech: [
      "NextJS",
      "Pusher",
      "Sentiment",
      "Node",
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    datePublished: "2021-06-21",
    projectURL:
      "https://towardsdatascience.com/building-a-real-time-chat-application-with-nlp-super-powers-ce800e19cb2b?gi=861a5f1bd6be",
  },
  {
    id: 34,
    type: "article",
    title: "Appointment Scheduler",
    category: ["web-dev"],
    tech: [
      "React",
      "Twilio",
      "CosmicJS",
      "Material-UI",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    datePublished: "2020-03-13",
    source: "Hackernoon",
    projectURL:
      "https://hackernoon.com/build-an-appointment-scheduler-using-react-twilio-and-cosmic-js-95377f6d1040",
  },
  {
    id: 33,
    type: "article",
    title: "Game of Life",
    category: ["web-dev", "game-dev"],
    tech: ["React", "2D", "JavaScript", "HTML5", "CSS3"],
    datePublished: "2018-05-03",
    source: "freeCodeCamp",
    projectURL:
      "https://www.freecodecamp.org/news/create-gameoflife-with-react-in-one-hour-8e686a410174",
  },
  {
    id: 32,
    type: "article",
    title: "News App",
    category: ["web-dev"],
    tech: [
      "React Native",
      "Node",
      "API",
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    datePublished: "2018-04-21",
    source: "freeCodeCamp",
    projectURL:
      "https://www.freecodecamp.org/news/create-a-news-app-using-react-native-ced249263627",
  },
  {
    id: 31,
    type: "article",
    title: "Chat App",
    category: ["web-dev"],
    tech: [
      "React",
      "Redux",
      "Redux Saga",
      "Web Sockets",
      "Node",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    datePublished: "2017-12-07",
    source: "freeCodeCamp",
    projectURL:
      "https://www.freecodecamp.org/news/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a/",
  },
  {
    id: 30,
    type: "article",
    title: "Todo App",
    category: ["web-dev"],
    tech: [
      "React Native",
      "GraphQL",
      "Apollo",
      "API",
      "Hasura",
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    datePublished: "2018-04-13",
    projectURL:
      "https://hasura.io/blog/tutorial-fullstack-react-native-with-graphql-and-authentication-18183d13373a",
  },
  {
    id: 29,
    type: "article",
    title: "Chrome Extension",
    category: ["web-dev"],
    tech: ["React", "Parcel", "JavaScript", "HTML5", "CSS3"],
    datePublished: "2018-03-25",
    projectURL:
      "https://www.freecodecamp.org/news/building-chrome-extensions-in-react-parcel-79d0240dd58f/",
  },
  {
    id: 27,
    type: "article",
    title: "Movie Voting App",
    category: ["web-dev"],
    tech: ["React", "Redux", "API", "Immutable", "JavaScript", "HTML5", "CSS3"],
    datePublished: "2016-02-24",
    projectURL:
      "https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html",
  },
  {
    id: 25,
    type: "article",
    title: "Trello Clone",
    category: ["web-dev"],
    tech: ["React", "Elixir", "Phoenix", "JWT", "JavaScript", "HTML5", "CSS3"],
    datePublished: "2016-01-04",
    projectURL:
      "http://codeloveandboards.com/blog/2016/01/04/trello-tribute-with-phoenix-and-react-pt-1",
  },
  {
    id: 24,
    type: "article",
    title: "Todo App",
    category: ["mob-dev"],
    tech: ["React Native", "Android", "iOS", "JavaScript"],
    datePublished: "2016-11-15",
    projectURL:
      "https://egghead.io/courses/build-a-react-native-todo-application",
  },
  {
    id: 23,
    type: "video",
    title: "Handmade Hero",
    category: ["game-dev"],
    tech: ["C/C++", "OpenGL", "2D"],
    datePublished: "2014-11-17",
    projectURL: "https://handmadehero.org/watch",
  },
  {
    id: 22,
    type: "article",
    title: "Breakout",
    category: ["game-dev"],
    tech: ["C/C++", "OpenGL", "2D"],
    datePublished: "2008-12-14",
    projectURL: "https://learnopengl.com/In-Practice/2D-Game/Breakout",
  },
  {
    id: 21,
    type: "article",
    title: "Tetris",
    category: ["game-dev"],
    tech: ["C/C++", "2D"],
    datePublished: "2008-12-14",
    projectURL:
      "http://javilop.com/gamedev/tetris-tutorial-in-c-platform-independent-focused-in-game-logic-for-beginners/",
  },
  {
    id: 20,
    type: "article",
    title: "NES game",
    category: ["game-dev"],
    tech: ["C/C++", "Python", "2D"],
    datePublished: "2018-09-05",
    projectURL: "https://nesdoug.com/",
  },
  {
    id: 19,
    type: "article",
    title: "Photo Library Viewer",
    category: ["mob-dev"],
    tech: ["C#", "iOS", "Xamarin", "Visual Studio", "Android", ".NET"],
    datePublished: "2016-07-21",
    projectURL:
      "https://www.raywenderlich.com/1044-building-ios-apps-with-xamarin-and-visual-studio",
  },
  {
    id: 18,
    type: "video",
    title: "Wiki-Style CMS",
    category: ["web-dev"],
    tech: ["C#", ".NET", "Razor Pages"],
    datePublished: "2018-11-11",
    projectURL:
      "https://www.youtube.com/playlist?list=PLVMqA0_8O85yC78I4Xj7z48ES48IQBa7p",
  },
  {
    id: 17,
    type: "article",
    title: "Roguelike Game",
    category: ["game-dev"],
    tech: ["C#", ".NET", "RogueSharp", "MonoGame", "RLNet", "SadConsole", "2D"],
    datePublished: "2015-01-09",
    projectURL: "https://roguesharp.wordpress.com/",
  },
  {
    id: 15,
    type: "video",
    title: "Spotify Clone with ReactJS",
    category: ["web-dev"],
    tech: ["React", "HTML5", "CSS3"],
    source: "YouTube",
    datePublished: "2020-08-03",
    projectURL: "https://www.youtube.com/watch?v=pnkuI8KXW_8",
  },
  {
    id: 16,
    type: "article",
    title: "Simple RPG Game",
    category: ["game-dev"],
    tech: ["C#", "SQL", "2D"],
    datePublished: "2014-05-17",
    projectURL: "http://scottlilly.com/learn-c-by-building-a-simple-rpg-index",
  },
  {
    id: 14,
    type: "video",
    title: "Microsoft Homepage Clone",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    source: "YouTube",
    datePublished: "2020-02-11",
    projectURL: "https://www.youtube.com/watch?v=uKgn-To1C4Q",
  },
  {
    id: 13,
    type: "article",
    title: "Simple Gantt Chart",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    datePublished: "2019-09-26",
    projectURL:
      "https://webdesign.tutsplus.com/tutorials/build-a-simple-gantt-chart-with-css-and-javascript--cms-33813",
  },
  {
    id: 12,
    type: "article",
    title: "Job Scraping App",
    category: ["web-dev"],
    tech: [
      "Node",
      "JavaScript",
      "REST",
      "API",
      "Express",
      "Handlebars",
      "Material Design Lite",
    ],
    source: "freeCodeCamp",
    datePublished: "2018-07-11",
    projectURL:
      "https://www.freecodecamp.org/news/how-i-built-a-job-scraping-web-app-using-node-js-and-indreed-7fbba124bbdc/",
  },
  {
    id: 11,
    type: "video",
    title: "E-Commerce App",
    category: ["web-dev"],
    tech: [
      "React",
      "Bootstrap",
      "JavaScript",
      "HTML5",
      "CSS3",
      "JQuery",
      "Context API",
    ],
    source: "YouTube",
    datePublished: "2018-12-22",
    projectURL: "https://www.youtube.com/watch?v=wPQ1-33teR4",
  },
  {
    id: 10,
    type: "video",
    title: "Netflix Landing Page",
    category: ["web-dev"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    source: "YouTube",
    datePublished: "2019-05-21",
    projectURL: "https://www.youtube.com/watch?v=P7t13SGytRk",
  },
  {
    id: 9,
    type: "article",
    title: "AI Chatbot",
    category: ["web-dev"],
    tech: [
      "Web Speech API",
      "Node",
      "JavaScript",
      "Express",
      "Socket.io",
      "Artificial Intelligence",
    ],
    datePublished: "2017-08-07",
    projectURL:
      "https://www.smashingmagazine.com/2017/08/ai-chatbot-web-speech-api-node-js",
  },
  {
    id: 8,
    type: "video",
    title: "Social Networking App",
    category: ["web-dev"],
    tech: [
      "React",
      "Node",
      "Redux",
      "Firebase",
      "REST",
      "API",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Express",
      "Material-UI",
    ],
    source: "YouTube",
    datePublished: "2019-06-24",
    projectURL: "https://www.youtube.com/watch?v=m_u6P5k0vP0",
  },
  {
    id: 7,
    type: "article",
    title: "Build A Simple Cryptocurrency Blockchain In Node.js",
    category: ["web-dev"],
    tech: ["Node", "JavaScript", "Cryptography", "Blockchain"],
    datePublished: "2020-02-20",
    projectURL:
      "https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/",
  },
  {
    id: 6,
    type: "article",
    title: "BitTorrent Client",
    category: ["web-dev"],
    tech: ["Node", "JavaScript", "TCP", "Computer Networks"],
    datePublished: "2016-05-04",
    projectURL:
      "https://allenkim67.github.io/programming/2016/05/04/how-to-make-your-own-bittorrent-client.html",
  },
  {
    id: 4,
    type: "article",
    title: "Todo List App with JavaScript",
    category: ["web-dev"],
    tech: ["JavaScript", "HTML5", "CSS3"],
    datePublished: "2019-10-23",
    projectURL: "https://freshman.tech/todo-list",
  },
  {
    id: 3,
    type: "article",
    title: "JavaScript Animations with Anime.js",
    category: ["web-dev"],
    tech: ["JavaScript", "CSS3", "Library", "HTML5", "API"],
    datePublished: "2018-08-23",
    source: "Medium",
    projectURL:
      "https://medium.com/@ajmeyghani/creating-javascript-animations-with-anime-js-f2b14716cdc6",
  },
  {
    id: 2,
    type: "article",
    title: "WhatsApp Clone with React Native",
    category: ["mob-dev"],
    tech: [
      "React Native",
      "Node",
      "GraphQL",
      "Apollo",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Express",
      "API",
      "SQLite",
      "Android",
      "iOS",
    ],
    datePublished: "2017-04-9",
    source: "Medium",
    projectURL:
      "https://medium.com/react-native-training/building-chatty-a-whatsapp-clone-with-react-native-and-apollo-part-1-setup-68a02f7e11",
  },
  {
    id: 1,
    type: "video",
    title: "Job Board App with React",
    category: ["web-dev"],
    tech: [
      "React",
      "Node",
      "Cron",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Express",
      "REST",
      "API",
      "Redis",
    ],
    datePublished: "11-26-2019",
    source: "YouTube",
    projectURL: "https://www.youtube.com/watch?v=lauywdXKEXI",
  },
];

export const guidesData = [
  {
    title: "Codedex - start your coding adventure",
    description:
      "Gamify your learning experience and have fun learning how to code!",
    image: "",
    url: "https://www.codedex.io",
  },
  {
    title: "freeCodeCamp",
    description:
      "Learn to code and build projects for nonprofits. Build your full stack web development portfolio today",
    image: "",
    url: "https://www.freecodecamp.com",
  },
  {
    title: "Blackbird School",
    description: "Learn to code online with our beginner-friendly platform.",
    image: "",
    url: "https://blackbird.school",
  },
  {
    title: "Glitch",
    description:
      "Great place to play around with code in an easy-to-set-up environment.",
    image: "",
    url: "https://glitch.com/",
  },
  {
    title: "Reddit.com/r/dailyprogrammer",
    description:
      "interesting programming challenges where you can learn from looking at other's code, even if you are not able to solve code you can look at how others solved.",
    image: "",
    url: "https://www.reddit.com/r/dailyprogrammer/",
  },
  {
    title: "Programming by Doing",
    description:
      "very good site for those who want to start with absolute basics",
    image: "",
    url: "http://programmingbydoing.com",
  },
  {
    title: "CodeAbbey - a place where everyone can master programming",
    description:
      "Best place to begin with problems that start at the easiest and gradually increase difficulty with each problem.",
    image: "",
    url: "http://www.codeabbey.com",
  },
  {
    title: "Exercism.io",
    description:
      "download and solve practice problems in over 50 different languages, and share your solution with others.",
    image: "",
    url: "http://exercism.io",
  },
  {
    title: "InterviewBit/Coding Interview Questions",
    description:
      "Gamifies the experience of practicing for your interview and includes lots of sample problems to solve.",
    image: "",
    url: "https://www.interviewbit.com",
  },
  {
    title: "karan/Projects-Solutions",
    description: "Solutions to most of the problems in the link above",
    image: "",
    url: "https://github.com/karan/Projects-Solutions",
  },
  {
    title: "Lod - Cloud",
    description: "The Linking Open Data cloud diagram",
    image: "",
    url: "http://lod-cloud.net",
  },
  {
    title: "Cave of programming",
    description: "Learn to program, Upgrade your skills.",
    image: "",
    url: "https://caveofprogramming.com",
  },
  {
    title: "Vim adventures",
    description: "Learn VIM by playing",
    image: "",
    url: "https://vim-adventures.com/",
  },
  {
    title: "Learn Vimscript the Hard Way",
    description: "Learn Vim Script from beginning to expert.",
    image: "",
    url: "http://learnvimscriptthehardway.stevelosh.com",
  },
  {
    title: "Programming Tasks",
    description: "large collection of small programs",
    image: "",
    url: "http://rosettacode.org/wiki/Category:Programming_Tasks",
  },
  {
    title: "Pramp",
    description:
      "It's your turn to be the interviewer. when done, click on the swap roles button on the left",
    image: "",
    url: "https://www.pramp.com",
  },
  {
    title: "Paqmind",
    description: "Guides and challenges to learn programming",
    image: "",
    url: "http://paqmind.com",
  },
  {
    title: "Codecademy",
    description: "Learn to code interactively, for free.",
    image: "",
    url: "https://www.codecademy.com",
  },
  {
    title: "Codegym",
    description: "It contains a Java tutorial with 1200 Java practise tasks.",
    image: "",
    url: "https://codegym.cc/",
  },
  {
    title: "treehouse",
    description: "The fast, easy, and affordable way to build your skills.",
    image: "",
    url: "https://teamtreehouse.com",
  },
  {
    title: "GeeksforGeeks",
    description: "Learn to code, Study for placement, Do competitive coding.",
    image: "",
    url: "https://practice.geeksforgeeks.org",
  },
  {
    title: "edabit",
    description: "Practice coding via various small challenges.",
    image: "",
    url: "https://edabit.com/challenges",
  },
  {
    title: "Learn Git Branching",
    description: "Learn and practice git commands in an interactive way",
    image: "",
    url: "https://learngitbranching.js.org",
  },
  {
    title: "Oh Shit, Git!?!",
    description: "Cheat sheet to get yourself out of bad git situations",
    image: "",
    url: "https://ohshitgit.com/",
  },
  {
    title: "The Odin Project",
    description:
      "The Odin Project provides a free open source coding curriculum that can be taken entirely online.",
    image: "",
    url: "https://www.theodinproject.com/home",
  },
  {
    title: "Udemy",
    description:
      "Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.",
    image: "",
    url: "https://www.udemy.com/",
  },
  {
    title: "Scaler",
    description:
      "A curated interactive space for aspiring programmers to learn and master their coding skills. Also help in job interview.",
    image: "",
    url: "https://www.scaler.com/topics/",
  },
  {
    title: "SQL Zoo",
    description:
      "Learn SQL interactively in stages, from basic queries to complex operations.",
    image: "",
    url: "https://sqlzoo.net/",
  },
];

export const roadmapsData = [
  {
    name: "MERN FullStack roadmap",
    description:
      "Dive into the world of React, a JavaScript library for building user interfaces, and learn to create interactive and dynamic web applications efficiently.",
    slug: "mern-react",
    cover: "/courses/mern.jpg",
    image: "/roadmaps/1.webp",
    url: "https://courses.30dayscoding.com/courses/MERN-full-stack-web-development-64eebdb8e4b0a14befedc15d",
    course: [
      "Introduction to our MERN Stack course ",
      "Setup, Git, GitHub, Pages, Deploy ",
      "[Interview help] Guides - resume, full stack, JS, React, etc",
      "Everything about HTML ",
      "CSS and Tailwind [with projects] - Everything about Styling ",
      "[5+ Projects] - HTML, CSS complete projects ",
      "Everything in JavaScript part 1 ",
      "Everything in JavaScript - part 2 ",
      "Everything in JavaScript - part 3 ",
      "Everything in JavaScript - part 4 ",
      "Everything in Javascript - part 5 - DOM ",
      "5 JavaScript projects ",
      "[New] - Build logical games with HTML, CSS, JS ",
      "[Bonus projects] 3 Complete HTML, CSS, JS (with JavaScript) projects ",
      "React JS in detail - part 1 - Complete run through ",
      "React JS in detail - part 2 - hooks ",
      "[Bonus projects] 6 React JS projects ",
      "[Bonus project] - Build an AI traveling app ",
      "[Full stack project] - Build a complete Youtube clone ",
      "[Additional] React and JS projects ",
      "[Interview help] React + JS Interview exercises ",
      "Node JS speed run (quick revision) ",
      "Complete Node JS ",
      "Node JS + Express JS speed run ",
      "Databases - MongoDB speed run ",
      "Complete Backend development in detail - Node, Express, Mongo DB ",
      "[#1 MERN project] - Signup, Login, User authentication ",
      "[#2 MERN project] - Build a full stack E-Commerce App (MERN stack) ",
      "[#3 MERN project] - Book my show app in MERN stack ",
      "[#4 MERN project] - Social media complete app",
      "[#5 - Next JS projects] - Additional full stack web development ",
      "[#6 Additional MERN project] - ECommerce simple, Login, Social media apps ",
      "Firebase: auth, db, functions ",
      "Deploy your projects ",
    ],
  },
  {
    name: "Blockchain Development roadmap",
    description:
      "Explore the technology behind decentralized systems and cryptocurrencies, and learn to develop decentralized applications (DApps) and smart contracts.",
    slug: "blockchain-development",
    url: "https://courses.30dayscoding.com/courses/Blockchain-developer-course-64eec408e4b002b964b568be",
    cover: "/courses/blockchain.jpg",
    image: "/roadmaps/2.webp",
    course: [
      "[New] - Welcome to the blockchain world!",
      "Overview of Blockchain concepts - part 1",
      "Overview of Blockchain concepts - part 2",
      "Complete Solidity, Smart contracts topics",
      "Introduction to NFTs",
      "Build NFT Projects - mint, airdrop, marketplace",
      "Introduction to Full stack x Blockchain dev",
      "Defi complete course - theory",
      "Additional Blockchain topics - DAO, super fluid, neon, etc",
      "Build these full stack blockchain projects",
      "Find a job in Web3 world",
      "Use Chat GPT to learn blockchain",
    ],
  },
  {
    name: "Data Structures and Algorithms roadmap",
    description:
      "Discover the techniques and tools used to analyze and interpret complex data sets, extract meaningful insights algoeithms, and make data-driven decisions.",
    slug: "data-structures-algorithm",
    cover: "/courses/dsa.jpg",
    image: "/roadmaps/3.webp",
    url: "https://courses.30dayscoding.com/courses/DSA-revision-placement-course-64f93394e4b0e75ce98af312",
    course: [
      "Introduction to DSA course - Welcome! ",
      "[Interview help] guides, links, questions, resources ",
      "[NEW] - DSA - 150 - zip solutions",
      "[NEW] - 150 DSA solutions - part 1 ",
      "[NEW] - 150 DSA solutions - part 2 ",
      "[NEW] - 150 DSA solutions - part 3 ",
      "Time complexity, Big-O notation ",
      "Arrays, Hashmaps - Introduction and Questions ",
      "Arrays, Pointers, Sliding window revision ",
      "Binary search ",
      "Linked lists ",
      "Recursion, Backtracking ",
      "Dynamic programming ",
      "Stacks, Queues ",
      "Graphs - Introduction ",
      "Graphs - algorithms and questions ",
      "Trees - Binary, BST, BFS, DFS ",
      "Tries, Priority Queue ",
      "Sorting ",
      "Revising DSA using Chat GPT ",
    ],
  },
  {
    name: "Next JS roadmap",
    description:
      "Explore Next JS framework for building web applications, and learn to create scalable and efficient single-page applications (SPAs).",
    slug: "next-js",
    cover: "/courses/nextjs.jpg",
    image: "/roadmaps/4.webp",
    url: "/courses",
    course: [
      "Introduction to NEXT JS",
      "Setup, Git, GiHub, Deploying",
      "Everything about HTML,CSS",
      "CSS and Tailwind - everything about Styling",
      "[Bonus] HTML, CSS projects",
      "Everything about JavaScript - theory",
      "Everything about JavaScript - DOM",
      "[Bonus] - Build JavaScript Projects",
      "[NEW] Build games with HTML, CSS, JS",
      "Everything about React JS part 1 - Theory",
      "Everything about React JS part 2 - hooks",
      "[Additional] JS and React mini projects",
      "[React JS project] - Build a Youtube clone app",
      "[Bonus projects] React JS projects",
      "Frontend Development with NEXT JS",
      "Backend Development with NEXT JS",
      "[#1 Next JS project] - Authentication with Next JS",
      "[#2 Next JS project] - Build a Next JS 14 Dashboard : Frontend + Backend + Next Auth + Server Action",
      "[#3 Next JS project] - Build a Trello clone with Next JS",
      "[#4 Next JS project] - Build AI full stack apps with Next JS",
      "[#5 Next JS project] - Additional React and Next JS projects",
      "[#6 Next JS project] - Build a Job portal using Next JS",
      "[#7 Next JS project] - Build quick projects with Free Next JS Templates",
      "[#8 Next JS project] - Build an AI traveling app",
      "[#9 Next JS project] - Build a link in bio (linktree) app with Next JS",
      "[#10 Next JS project] - Build a code to image converting app like carbon",
      "Everything about Firebase",
      "Deploying full stack apps",
      "[Bonus] Open source mini series - Next JS version",
    ],
  },
  {
    name: "Prompt Engineer roadmap",
    description:
      "Develop skills in leveraging prompt engineering techniques to enhance creativity, productivity, and problem-solving abilities in various domains.",
    slug: "prompt-engineer",
    image: "/roadmaps/5.webp",
    cover: "/courses/ai.jpg",
    url: "https://courses.30dayscoding.com/courses/AI-full-stack-project-development-course-64eebe76e4b002b964b5645d",
    course: [
      "Introduction to AI and Full Stack Development",
      "[NEW Bonus] AI updates, projects, guides, resources, source code",
      "[NEW Updated] - Explore AI with us (updated every 2 weeks)",
      "AI dev part 1: Open AI, Chat GPT, Whisper",
      "Chat GPT + Prompt engineering guide for developers",
      "AI dev part 2: Leap, Langchain, Replicate, etc",
      "Explore these AI tools - mini series",
      "Build AI projects part 1 - QR, poem, logo, etc",
      "Build AI projects part 2 - music, anime, tweet, etc",
      "Build creative projects with Chat GPT",
    ],
  },
  {
    name: "FullStack Development",
    description:
      "Focus on building engaging user interfaces and experiences using a combination of frontend and backend technologies, along with popular libraries and frameworks.",
    slug: "fullstack-development",
    image: "/roadmaps/6.webp",
    cover: "/courses/cohort.jpg",
    url: "https://courses.30dayscoding.com/courses/Idea-to-MVP-full-stack-project-course-6525cb14e4b07ef99d14b75b",
    course: [
      "Introduction, MVP, Full stack, Ideas",
      "Project ideas and basic implementations - mini series",
      "MVP building series - No code, Next JS, landing pages",
      "[Full stack project 1] - HTML, CSS, JS, React mini projects",
      "[Full stack project 2] - Build a signature app",
      "[Full stack project 3] - Build a youtube clone",
      "[Full stack project 4] - Ecommerce app in MERN stack",
      "[Full stack project 5] - Build MVPs and apps quickly with Firebase",
      "[Full stack project 6] - Build a Next JS dashboard",
      "[Full stack project 7] - Supabase projects",
      "[Full stack project 8] - Build a Trello clone using Next JS",
      "[Full stack project 9] - Social media MERN app",
      "[Full stack project 10] - Job portal with Next JS",
      "[Full stack project 11] - Traveling AI app",
      "[Full stack project 12] - Link in bio app in Next JS",
      "[Full stack project 13] - Book my show app in MERN stack",
      "Building a SaaS product part 1 - Introduction",
      "Building a SaaS part 2 - planning, finding, marketing",
      "Building a SaaS part 3 - building the app",
      "Building a SaaS part 4 - running Ads",
      "Build these AI and Blockchain projects",
      "Build MVPs and full projects with Chat GPT",
      "Building in public mini short - series",
      "Explore AI tools for marketing",
      "Indie hackers, Products, Stories",
    ],
  },
  {
    name: "Java",
    description:
      "Master Java for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    slug: "java-roadmap",
    image: "/roadmaps/7.webp",
    cover: "/courses/java.jpg",
    url: "https://courses.30dayscoding.com/courses/Complete-Java-course-659ef388e4b0f601f93531b8",
    course: [
      "Java - Installation and Basics",
      "Variables and Data Types",
      "Operators and Math Methods",
      "String and its methods",
      "Loop and Array",
      "Classes and objects",
      "Methods and functions",
      "Constructor",
      "Nested class and Class name",
      "Packages, Access modifiers, Private, Public, Getter, and Setter",
      "this, inheritance and its types, super keyword",
      "Abstraction, Polymorphism, and Method overriding",
    ],
  },
  {
    name: "Python",
    description:
      "Master the skills required to develop the server-side logic and databases that power web applications, focusing on languages like Python",
    slug: "python-roadmap",
    image: "/roadmaps/8.webp",
    cover: "/courses/python.jpg",
    url: "https://courses.30dayscoding.com/courses/Complete-Python-course-for-developers-652da4c5e4b010a575e0254b",
    course: [
      "Installation, First Program, and Variables",
      "Operators and Data Types - int, float, complex, str, bool",
      "String, Lists, and Escape Seq",
      "Conditions - If, if else, elif, and ternary",
      "Tuple, more methods, and Unpacking",
      "Sets and Dictionary",
      "Looping - While and For",
      "Functions",
      "Higher order Function, recursion, and lambda",
      "Class, objects, and Inheritance",
      "Complete Python general guide (48 pages)",
      "Complete Flask general guide (21 pages)",
      "Introduction to Flask",
      "Flask + Mongo DB",
      "Python projects overview (video)",
      "Explore Python with Chat GPT",
      "Open AI projects",
      "Streamlit apps with Python",
      "DSA Python github repository",
      "Screenshots with Python",
      "Video cutter with Python",
      "Video downloader with Python",
      "Send emails with Python",
      "Simple web scraping with Python",
      "FFMPEG python projects",
      "Redis with python",
      "Deploying Python projects",
      "Streamlit part 1: Build Python and AI applications",
      "Streamlit part 2: Basic AI app",
      "Build AI apps with llama index, llama hub, streamlit",
      "Build full stack projects with Chat GPT part 1",
      "Build full stack projects with Chat GPT part 2",
      "Full stack projects with chat GPT part 3",
      "Build full stack projects with Chat GPT part 4",
      "Build creative projects with Chat GPT part 5",
    ],
  },
  {
    name: "JavaScript",
    description:
      "Learn the fundamentals and advanced techniques of JavaScript to craete new web based applications and logics.",
    slug: "javascript-roadmap",
    image: "/roadmaps/9.webp",
    cover: "/courses/javascript.jpg",
    url: "https://courses.30dayscoding.com/courses/Complete-Javascript-course-for-developers-652da487e4b0dce56ddde296",
    course: [
      "JavaScript - Introduction and Basics",
      "JavaScript - Conditional Statements and Loop",
      "JavaScript - Variables, Data Types , Type Conversions and Operators",
      "JavaScript - Functions, Arrays ,For in For of , Spread, Copy, Methods and Array destructuring",
      "JavaScript - Objects, Object inside Array, Function inside Function, Lexical Scope, This keyword , New and Symbol",
      "JavaScript - Proto and prototype",
      "JavaScript - Asynchronous, Set Timeout , Callback, Callback Hell, Promise and Async_Await",
      "JavaScript - DOM manipulation and apps",
      "JavaScript - interview - questions and tips",
      "Full stack interview questions (bonus) (1 pages)",
      "All our courses - MERN, Next JS, DSA, Blockchain, AI",
      "DOM in JS - Working with forms",
      "DOM in JS - Window location",
      "[Project] - DOM in JS - Todo project",
      "DOM in JS - Styling",
      "DOM in JS - Siblings",
      "DOM in JS - Selectors in dom",
      "DOM in JS - Replace child",
      "DOM in JS - Pop ups",
      "DOM in JS - Parent node",
      "DOM in JS - Onclick",
      "DOM in JS - Mouse over & out",
      "DOM in JS - Mouse down & Up",
      "DOM in JS - More siblings",
      "[Project] - DOM in JS - Key logger small project",
      "DOM in JS - Inner text & text content",
      "DOM in JS - Inner & outer html",
      "DOM in JS - Get & set attributes",
      "DOM in JS - First And last child",
      "DOM in JS - Event delegation",
      "DOM in JS - Event delegation",
      "DOM in JS - Dom traversal",
      "DOM in JS - Animation",
      "DOM in JS - Bubbling",
      "DOM in JS - Dimension",
      "DOM in JS - Append child",
      "DOM in JS - Add listener event",
      "JavaScript 5 Beginners Project in One Video",
      "JavaScript 5 Intermediate Project in One Video",
      "Portfolio project with JavaScript",
      "Tailwind CSS with Project",
      "Form Validation project in JS",
      "BMI Calculator project with React JS",
      "[Game 2] - Card matching game with HTML, CSS, JS",
      "[Game 1] - Tic tac toe game with HTML, CSS, JS",
      "[HTML, CSS project 5] Image resizing application",
      "[HTML, CSS, JS Project] Basic TODO app",
      "[HTML, CSS, JS Project] - Typing Speed Test",
      "[HTML, CSS, JS Project] - Quick Sign",
      "[HTML, CSS, JS Project] - Portfolio Site",
      "[HTML, CSS project 1] - Planet Selling - E commerce - HTML,CSS - complete app",
      "[HTML, CSS project 2] - Build a complete Signature app with HTML, CSS, JS",
      "[HTML, CSS project 3] - Tailwind CSS introduction and complete project",
      "React JS overview and speedrun",
      "What is React and  its Folder structure",
      "Introduction to React Components",
      "Introduction to JSX",
      "BMI Calculator with React JS",
      "Weather App - React JS",
      "50+ JavaScript Practice Exercises - Beginners to Advanced",
      "Build full stack projects with Chat GPT part 1",
      "Build full stack projects with Chat GPT part 2",
      "Full stack projects with chat GPT part 3",
      "Build full stack projects with Chat GPT part 4",
      "Build creative projects with Chat GPT part 5",
      "Build JS projects with Chat GPT",
      "Intro to Chat GPT API with React",
    ],
  },
];
