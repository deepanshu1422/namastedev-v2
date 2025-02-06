"use client";

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubLight } from '@uiw/codemirror-theme-github';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Play, FileCode, Terminal } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const jsQuestions = {
  beginner: [
    {
      id: 1,
      title: "Variables and Data Types",
      description: "Learn about different variable declarations and data types",
      initialCode: `// Let's explore variables and data types
let name = "John";
const age = 25;
var isStudent = true;

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof isStudent); // boolean

// Try changing the values and types`,
      hint: "Use let for changeable values, const for constants"
    },
    {
      id: 2,
      title: "Arrays and Methods",
      description: "Work with arrays and common array methods",
      initialCode: `const fruits = ['apple', 'banana', 'orange'];

// Adding elements
fruits.push('mango');
console.log(fruits);

// Mapping
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// Filtering
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);`,
      hint: "Try other array methods like reduce, find, some"
    },
    {
      id: 3,
      title: "Objects and Properties",
      description: "Create and manipulate JavaScript objects",
      initialCode: `const person = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'music'],
  greet: function() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
};

person.greet();
console.log(person.hobbies);

// Add a new property
person.location = 'New York';
console.log(person);`,
      hint: "Try accessing properties with dot and bracket notation"
    },
    {
      id: 8,
      title: "Conditional Statements",
      description: "Learn how to use if, else if, and else statements",
      initialCode: `let age = 18;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}`,
      hint: "Try changing the value of age to see different outputs"
    },
    {
      id: 9,
      title: "Loops",
      description: "Understand how to use for and while loops",
      initialCode: `// For Loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i}\`);
}

// While Loop
let count = 0;
while (count < 3) {
  console.log(\`Count: \${count}\`);
  count++;
}`,
      hint: "Try modifying the loop conditions"
    },
    {
      id: 10,
      title: "Switch Statements",
      description: "Use switch statements for multiple conditions",
      initialCode: `let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("It's a regular day.");
}`,
      hint: "Try adding more cases and changing the value of 'day'"
    },
    {
      id: 11,
      title: "Template Literals",
      description: "Learn how to use template literals for string interpolation",
      initialCode: `const name = "Alice";
const age = 30;

console.log(\`My name is \${name} and I am \${age} years old.\`);

// Multi-line strings
const message = \`
  Hello,
  Welcome to JavaScript!
\`;
console.log(message);`,
      hint: "Try embedding expressions inside template literals"
    },
    {
      id: 12,
      title: "Math Operations",
      description: "Perform basic math operations in JavaScript",
      initialCode: `const num1 = 10;
const num2 = 5;

console.log(\`Addition: \${num1 + num2}\`);
console.log(\`Subtraction: \${num1 - num2}\`);
console.log(\`Multiplication: \${num1 * num2}\`);
console.log(\`Division: \${num1 / num2}\`);
console.log(\`Modulus: \${num1 % num2}\`);`,
      hint: "Try using Math functions like Math.pow() or Math.sqrt()"
    },
    {
      id: 13,
      title: "String Methods",
      description: "Explore common string manipulation methods",
      initialCode: `const text = "Hello, World!";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("World"));
console.log(text.replace("World", "JavaScript"));
console.log(text.slice(0, 5));`,
      hint: "Try other string methods like split(), trim(), or charAt()"
    },
    {
      id: 14,
      title: "Date and Time",
      description: "Work with JavaScript Date objects",
      initialCode: `const now = new Date();

console.log(\`Current Date: \${now.toDateString()}\`);
console.log(\`Current Time: \${now.toTimeString()}\`);
console.log(\`Year: \${now.getFullYear()}\`);
console.log(\`Month: \${now.getMonth() + 1}\`); // Months are 0-indexed
console.log(\`Day: \${now.getDay()}\`);`,
      hint: "Try formatting the date or calculating differences between dates"
    },
    {
      id: 15,
      title: "Type Conversion",
      description: "Learn how to convert between data types",
      initialCode: `const numStr = "42";
const num = Number(numStr);
console.log(\`Type of num: \${typeof num}\`);

const boolStr = "true";
const bool = Boolean(boolStr);
console.log(\`Type of bool: \${typeof bool}\`);

const strNum = 123;
const str = String(strNum);
console.log(\`Type of str: \${typeof str}\`);`,
      hint: "Try converting other data types like arrays or objects"
    },
    {
      id: 16,
      title: "Logical Operators",
      description: "Understand AND, OR, and NOT operators",
      initialCode: `const age = 20;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive!");
} else {
  console.log("You cannot drive.");
}`,
      hint: "Try combining multiple logical operators"
    },
    {
      id: 17,
      title: "Ternary Operator",
      description: "Use the ternary operator for concise conditionals",
      initialCode: `const age = 20;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message);`,
      hint: "Try nesting ternary operators"
    },
    {
      id: 18,
      title: "Array Destructuring",
      description: "Extract values from arrays into variables",
      initialCode: `const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(\`First: \${first}, Second: \${second}, Third: \${third}\`);`,
      hint: "Try destructuring nested arrays"
    },
    {
      id: 19,
      title: "Object Destructuring",
      description: "Extract values from objects into variables",
      initialCode: `const user = { name: "Alice", age: 25 };
const { name, age } = user;

console.log(\`Name: \${name}, Age: \${age}\`);`,
      hint: "Try destructuring nested objects"
    },
    {
      id: 20,
      title: "Rest and Spread Operators",
      description: "Use rest and spread operators with arrays and objects",
      initialCode: `// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// Rest Operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));`,
      hint: "Try using spread with objects"
    },
    {
      id: 21,
      title: "Default Parameters",
      description: "Set default values for function parameters",
      initialCode: `function greet(name = "Guest") {
  console.log(\`Hello, \${name}!\`);
}

greet(); // Hello, Guest!
greet("Alice"); // Hello, Alice!`,
      hint: "Try using default parameters with objects"
    },
    {
      id: 22,
      title: "Error Handling",
      description: "Handle errors using try-catch blocks",
      initialCode: `try {
  const result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("Division by zero");
  }
  console.log(result);
} catch (error) {
  console.error(\`Caught an error: \${error.message}\`);
} finally {
  console.log("Execution complete.");
}`,
      hint: "Try throwing custom errors"
    },
    {
      id: 23,
      title: "Map and Set",
      description: "Work with Map and Set data structures",
      initialCode: `// Map
const userMap = new Map();
userMap.set('name', 'Alice');
userMap.set('age', 25);
console.log(userMap.get('name'));

// Set
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
console.log([...uniqueNumbers]);`,
      hint: "Try iterating over Map and Set"
    },
    {
      id: 24,
      title: "JSON",
      description: "Convert between JSON and JavaScript objects",
      initialCode: `const user = { name: "Alice", age: 25 };
const jsonStr = JSON.stringify(user);
console.log(jsonStr);

const parsedUser = JSON.parse(jsonStr);
console.log(parsedUser);`,
      hint: "Try parsing nested JSON"
    }
  ],
  intermediate: [
    {
      id: 4,
      title: "Functions and Scope",
      description: "Understand function declarations and scope",
      initialCode: `// Function Declaration
function multiply(a, b) {
  return a * b;
}

// Arrow Function
const add = (a, b) => a + b;

// Closure Example
function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const myCounter = counter();
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.getCount());`,
      hint: "Explore closures and function scope"
    },
    {
      id: 5,
      title: "Promises and Async",
      description: "Work with asynchronous JavaScript",
      initialCode: `// Creating a Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchData() {
  console.log('Starting...');
  
  try {
    await delay(1000);
    console.log('Data fetched!');
    
    await delay(500);
    console.log('Processing complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();`,
      hint: "Try adding multiple async operations"
    },
    {
      "id": 6,
      "title": "Array Methods",
      "description": "Practice higher-order functions on arrays",
      "initialCode": `const numbers = [1, 2, 3, 4, 5];
  
  // Use map to create a new array with each number doubled
  const doubled = numbers.map(num => num * 2);
  
  // Use filter to get only even numbers
  const evens = numbers.filter(num => num % 2 === 0);
  
  // Use reduce to get the sum of all numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  
  console.log(doubled, evens, sum);`,
      "hint": "Use map, filter, and reduce"
    },
    {
      "id": 7,
      "title": "Destructuring and Spread",
      "description": "Work with object and array destructuring",
      "initialCode": `const user = { name: 'Alice', age: 25, location: 'NY' };
  
  // Destructure the object
  const { name, age } = user;
  console.log(name, age);
  
  const numbers = [1, 2, 3, 4, 5];
  
  // Use spread to create a new array
  const newNumbers = [...numbers, 6, 7];
  
  console.log(newNumbers);`,
      "hint": "Use object and array destructuring"
    },
    {
      "id": 8,
      "title": "Callback Functions",
      "description": "Understand how callbacks work",
      "initialCode": `function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  greet('Alice', sayGoodbye);`,
      "hint": "Pass a function as an argument"
    },
    {
      "id": 9,
      "title": "Async/Await Error Handling",
      "description": "Handle errors in async/await functions",
      "initialCode": `async function fetchData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();`,
      "hint": "Wrap await calls inside try/catch"
    },
    {
      "id": 10,
      "title": "Event Loop and Callbacks",
      "description": "Understand how JavaScript handles asynchronous code",
      "initialCode": `console.log('Start');
  
  setTimeout(() => console.log('Timeout'), 0);
  
  Promise.resolve().then(() => console.log('Promise resolved'));
  
  console.log('End');`,
      "hint": "Think about the event loop order"
    },
    {
      "id": 11,
      "title": "Object Methods",
      "description": "Use object methods like keys, values, and entries",
      "initialCode": `const user = { name: 'Alice', age: 25, location: 'NY' };
  
  // Get object keys
  console.log(Object.keys(user));
  
  // Get object values
  console.log(Object.values(user));
  
  // Get object entries
  console.log(Object.entries(user));`,
      "hint": "Use Object.keys(), Object.values(), and Object.entries()"
    },
    {
      "id": 12,
      "title": "Set and Map",
      "description": "Work with JavaScript's Set and Map objects",
      "initialCode": `const mySet = new Set([1, 2, 3, 3, 4]);
  console.log(mySet.has(2)); // true
  console.log(mySet.size); // 4
  
  const myMap = new Map();
  myMap.set('name', 'Alice');
  myMap.set('age', 25);
  console.log(myMap.get('name')); // Alice`,
      "hint": "Use Set for unique values and Map for key-value pairs"
    },
    {
      "id": 13,
      "title": "Prototype and Inheritance",
      "description": "Understand JavaScript prototypes",
      "initialCode": `function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
  };
  
  const person1 = new Person('Alice');
  person1.greet();`,
      "hint": "Use prototypes to define methods"
    },
    {
      "id": 14,
      "title": "Class Syntax",
      "description": "Convert prototype-based inheritance to ES6 classes",
      "initialCode": `class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log('Hello, ' + this.name);
    }
  }
  
  const person1 = new Person('Alice');
  person1.greet();`,
      "hint": "Use class and constructor"
    },
    {
      "id": 15,
      "title": "Generators",
      "description": "Use generator functions for lazy evaluation",
      "initialCode": `function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = numberGenerator();
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);`,
      "hint": "Use function* and yield"
    },
    {
      "id": 16,
      "title": "Debouncing",
      "description": "Implement a debounce function",
      "initialCode": `function debounce(func, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
  
  const log = debounce(() => console.log('Debounced!'), 1000);
  log();
  log();
  log();`,
      "hint": "Use setTimeout and clearTimeout"
    },
    {
      "id": 17,
      "title": "Throttling",
      "description": "Implement a throttle function",
      "initialCode": `function throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func(...args);
      }
    };
  }
  
  const log = throttle(() => console.log('Throttled!'), 1000);
  log();
  log();
  log();`,
      "hint": "Use Date.now() to limit execution"
    },
    {
      "id": 18,
      "title": "Modules (ES6 Import/Export)",
      "description": "Work with ES6 modules",
      "initialCode": `// In math.js
  export function add(a, b) {
    return a + b;
  }
  
  // In main.js
  import { add } from './math.js';
  console.log(add(2, 3));`,
      "hint": "Use export and import"
    },
    {
      "id": 19,
      "title": "Optional Chaining",
      "description": "Handle nested objects safely",
      "initialCode": `const user = { profile: { name: 'Alice' } };
  
  // Using optional chaining
  console.log(user.profile?.name); // Alice
  console.log(user.profile?.age);  // undefined
  console.log(user.address?.street); // undefined`,
      "hint": "Use ?. to avoid errors on missing properties"
    },
    {
      "id": 20,
      "title": "Nullish Coalescing Operator",
      "description": "Handle default values with ??",
      "initialCode": `const value = null;
  const defaultValue = value ?? 'Default Value';
  
  console.log(defaultValue); // Default Value`,
      "hint": "Use ?? to check for null or undefined"
    },
    {
      "id": 21,
      "title": "Deep Cloning Objects",
      "description": "Clone nested objects properly",
      "initialCode": `const obj = { a: 1, b: { c: 2 } };
  
  // Shallow copy
  const shallowCopy = { ...obj };
  shallowCopy.b.c = 42;
  console.log(obj.b.c); // 42 (unexpected change)
  
  // Deep copy
  const deepCopy = JSON.parse(JSON.stringify(obj));
  deepCopy.b.c = 99;
  console.log(obj.b.c); // 42 (original remains unchanged)`,
      "hint": "Use JSON.parse(JSON.stringify(obj)) or structuredClone()"
    },
    {
      "id": 22,
      "title": "Currying",
      "description": "Transform a function into a sequence of nested functions",
      "initialCode": `function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return (...nextArgs) => curried(...args, ...nextArgs);
      }
    };
  }
  
  const sum = (a, b, c) => a + b + c;
  const curriedSum = curry(sum);
  console.log(curriedSum(1)(2)(3)); // 6`,
      "hint": "Return a function that remembers arguments"
    },
    {
      "id": 23,
      "title": "Flat and FlatMap",
      "description": "Flatten nested arrays",
      "initialCode": `const arr = [1, [2, [3, 4]], 5];
  
  // Flatten to one level
  console.log(arr.flat()); // [1, 2, [3, 4], 5]
  
  // Flatten deeply
  console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5]
  
  // Using flatMap
  const words = ['hello world', 'JavaScript'];
  console.log(words.flatMap(word => word.split(' ')));`,
      "hint": "Use flat() or flatMap() for arrays"
    },
    {
      "id": 24,
      "title": "Hoisting",
      "description": "Understand how JavaScript hoists variables and functions",
      "initialCode": `console.log(foo); // undefined
  var foo = 'Hello';
  
  console.log(bar); // ReferenceError
  let bar = 'World';
  
  greet(); // Works because of hoisting
  function greet() {
    console.log('Hello!');
  }`,
      "hint": "Var is hoisted with undefined, let & const are not"
    },
    {
      "id": 25,
      "title": "WeakMap and WeakSet",
      "description": "Understand WeakMap and WeakSet for memory optimization",
      "initialCode": `const weakMap = new WeakMap();
  let obj = { name: 'Alice' };
  
  weakMap.set(obj, 'some value');
  console.log(weakMap.get(obj)); // 'some value'
  
  obj = null; // Now weakMap removes the entry automatically`,
      "hint": "WeakMap/WeakSet hold weak references"
    },
    {
      "id": 26,
      "title": "Object.freeze vs Object.seal",
      "description": "Prevent modifications to objects",
      "initialCode": `const obj = { a: 1 };
  
  // Freeze: Prevents adding, modifying, deleting properties
  Object.freeze(obj);
  obj.a = 10; // No effect
  console.log(obj.a); // 1
  
  // Seal: Prevents adding/deleting, but allows modification
  const obj2 = { b: 2 };
  Object.seal(obj2);
  obj2.b = 10;
  console.log(obj2.b); // 10`,
      "hint": "Freeze prevents all changes; seal allows modifications"
    },
    {
      "id": 27,
      "title": "Promise.all vs Promise.race",
      "description": "Understand Promise.all, Promise.race, and Promise.allSettled",
      "initialCode": `const p1 = new Promise(resolve => setTimeout(() => resolve('P1'), 1000));
  const p2 = new Promise(resolve => setTimeout(() => resolve('P2'), 2000));
  const p3 = new Promise(resolve => setTimeout(() => resolve('P3'), 1500));
  
  // Promise.all waits for all to resolve
  Promise.all([p1, p2, p3]).then(console.log);
  
  // Promise.race resolves as soon as the first one resolves
  Promise.race([p1, p2, p3]).then(console.log);`,
      "hint": "All waits for all, race resolves first one"
    },
    {
      "id": 28,
      "title": "Tail Call Optimization",
      "description": "Optimize recursive functions",
      "initialCode": `function factorial(n, acc = 1) {
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
  }
  
  console.log(factorial(5)); // 120`,
      "hint": "Use accumulator in recursive calls"
    },
    {
      "id": 29,
      "title": "Intl API for Localization",
      "description": "Use JavaScript's Intl API for formatting numbers and dates",
      "initialCode": `const number = 1234567.89;
  console.log(new Intl.NumberFormat('en-US').format(number)); // 1,234,567.89
  
  const date = new Date();
  console.log(new Intl.DateTimeFormat('de-DE').format(date));`,
      "hint": "Use Intl.NumberFormat and Intl.DateTimeFormat"
    },
    {
      "id": 30,
      "title": "Functional Composition",
      "description": "Combine multiple functions",
      "initialCode": `const add = x => x + 2;
  const multiply = x => x * 3;
  
  const compose = (f, g) => x => f(g(x));
  const composedFunction = compose(add, multiply);
  
  console.log(composedFunction(4)); // (4 * 3) + 2 = 14`,
      "hint": "Use function composition to combine logic"
    }
  ],
  advanced: [
    {
      "id": 8,
      "title": "Proxy and Reflect",
      "description": "Intercept object operations using Proxy and Reflect",
      "initialCode": `const handler = {
    get: (target, prop) => {
      console.log(\`Accessing property: \${prop}\`);
      return prop in target ? target[prop] : 'Not Found';
    }
  };
  
  const obj = new Proxy({ name: 'Alice', age: 30 }, handler);
  
  console.log(obj.name);
  console.log(obj.address);`,
      "hint": "Use Proxy to control object access"
    },
    {
      "id": 9,
      "title": "Custom Iterable Objects",
      "description": "Make an object iterable using Symbol.iterator",
      "initialCode": `const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
      let current = this.from;
      let last = this.to;
      return {
        next() {
          return current <= last ? { value: current++, done: false } : { done: true };
        }
      };
    }
  };
  
  for (let num of range) {
    console.log(num);
  }`,
      "hint": "Implement the Symbol.iterator method"
    },
    {
      "id": 10,
      "title": "WeakRef and FinalizationRegistry",
      "description": "Manage memory with weak references",
      "initialCode": `let obj = { data: 'Important' };
  const registry = new FinalizationRegistry(() => console.log('Object cleaned up'));
  
  let weakRef = new WeakRef(obj);
  registry.register(obj, 'Object Reference');
  
  obj = null;
  console.log(weakRef.deref()); // May return undefined if garbage collected`,
      "hint": "Use WeakRef for objects that may be garbage collected"
    },
    {
      "id": 11,
      "title": "Decorator Pattern",
      "description": "Use decorators to enhance functionality",
      "initialCode": `function logExecution(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      console.log(\`Executing \${key} with args:\`, args);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  }
  
  class Calculator {
    @logExecution
    add(a, b) {
      return a + b;
    }
  }
  
  const calc = new Calculator();
  console.log(calc.add(2, 3));`,
      "hint": "Use decorators to wrap function logic"
    },
    {
      "id": 12,
      "title": "Module Pattern",
      "description": "Encapsulate private data using closures",
      "initialCode": `const Counter = (function() {
    let count = 0;
    return {
      increment() {
        count++;
        console.log(count);
      },
      decrement() {
        count--;
        console.log(count);
      }
    };
  })();
  
  Counter.increment();
  Counter.increment();
  Counter.decrement();`,
      "hint": "Use IIFE to create private variables"
    },
    {
      "id": 13,
      "title": "Memoization",
      "description": "Optimize function calls by caching results",
      "initialCode": `function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        console.log('Fetching from cache:', key);
        return cache[key];
      }
      console.log('Calculating result for:', key);
      return (cache[key] = fn(...args));
    };
  }
  
  const fib = memoize(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
  
  console.log(fib(10));`,
      "hint": "Store computed results in a cache object"
    },
    {
      "id": 14,
      "title": "Throttle Implementation",
      "description": "Limit function execution rate",
      "initialCode": `function throttle(func, limit) {
    let lastCall = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func(...args);
      }
    };
  }
  
  const log = throttle(() => console.log('Throttled!'), 1000);
  log();
  log();
  log();`,
      "hint": "Use timestamps to limit execution frequency"
    },
    {
      "id": 15,
      "title": "Debounce Implementation",
      "description": "Ensure function runs only after delay",
      "initialCode": `function debounce(func, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
  
  const log = debounce(() => console.log('Debounced!'), 1000);
  log();
  log();
  log();`,
      "hint": "Use setTimeout to delay execution"
    },
    {
      "id": 16,
      "title": "Custom Event Emitter",
      "description": "Build a custom event-driven system",
      "initialCode": `class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(event, listener) {
      if (!this.events[event]) this.events[event] = [];
      this.events[event].push(listener);
    }
  
    emit(event, ...args) {
      if (this.events[event]) this.events[event].forEach(listener => listener(...args));
    }
  }
  
  const emitter = new EventEmitter();
  emitter.on('sayHello', name => console.log(\`Hello, \${name}!\`));
  emitter.emit('sayHello', 'Alice');`,
      "hint": "Use an object to store event listeners"
    },
    {
      "id": 17,
      "title": "Observer Pattern",
      "description": "Implement the observer pattern",
      "initialCode": `class Subject {
    constructor() {
      this.observers = [];
    }
    
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  class Observer {
    update(data) {
      console.log('Received update:', data);
    }
  }
  
  const subject = new Subject();
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  subject.subscribe(observer1);
  subject.subscribe(observer2);
  
  subject.notify('New Event!');`,
      "hint": "Use subscribe and notify methods"
    },
    {
      "id": 18,
      "title": "Promise Chaining",
      "description": "Handle multiple async operations sequentially",
      "initialCode": `function asyncTask(value, delay) {
    return new Promise(resolve => setTimeout(() => resolve(value), delay));
  }
  
  asyncTask('Step 1', 1000)
    .then(result => {
      console.log(result);
      return asyncTask('Step 2', 1000);
    })
    .then(result => {
      console.log(result);
      return asyncTask('Step 3', 1000);
    })
    .then(console.log);`,
      "hint": "Return a promise inside .then() to chain"
    },
    {
      "id": 19,
      "title": "Factory Pattern",
      "description": "Create objects dynamically using a factory function",
      "initialCode": `function createUser(name, role) {
    return {
      name,
      role,
      describe() {
        console.log(\`\${name} is a \${role}.\`);
      }
    };
  }
  
  const user1 = createUser('Alice', 'Admin');
  user1.describe();`,
      "hint": "Return an object with methods"
    },
    {
      "id": 20,
      "title": "Currying",
      "description": "Convert a function into a sequence of functions",
      "initialCode": `function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return (...nextArgs) => curried(...args, ...nextArgs);
      }
    };
  }
  
  const sum = (a, b, c) => a + b + c;
  const curriedSum = curry(sum);
  
  console.log(curriedSum(1)(2)(3));`,
      "hint": "Return functions that collect arguments until all are provided"
    },
    {
      "id": 21,
      "title": "Functional Composition",
      "description": "Combine multiple functions into one",
      "initialCode": `const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);
  
  const double = x => x * 2;
  const square = x => x * x;
  
  const composedFunction = compose(square, double);
  console.log(composedFunction(3));`,
      "hint": "Use reduceRight to chain function executions"
    },
    {
      "id": 22,
      "title": "Rate Limiting with Token Bucket Algorithm",
      "description": "Implement a rate limiter",
      "initialCode": `class RateLimiter {
    constructor(limit, interval) {
      this.tokens = limit;
      this.limit = limit;
      setInterval(() => this.tokens = this.limit, interval);
    }
  
    allow() {
      if (this.tokens > 0) {
        this.tokens--;
        return true;
      }
      return false;
    }
  }
  
  const limiter = new RateLimiter(3, 5000);
  console.log(limiter.allow()); // true
  console.log(limiter.allow()); // true
  console.log(limiter.allow()); // true
  console.log(limiter.allow()); // false`,
      "hint": "Replenish tokens at a fixed interval"
    },
    {
      "id": 23,
      "title": "Singleton Pattern",
      "description": "Ensure only one instance of a class exists",
      "initialCode": `class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  }
  
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // true`,
      "hint": "Store the instance in a static property"
    },
    {
      "id": 24,
      "title": "Deep Cloning Objects",
      "description": "Clone an object without reference issues",
      "initialCode": `function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  const original = { a: 1, b: { c: 2 } };
  const copy = deepClone(original);
  copy.b.c = 42;
  
  console.log(original.b.c); // 2`,
      "hint": "Use JSON methods or recursion for deep copy"
    },
    {
      "id": 25,
      "title": "Multithreading with Web Workers",
      "description": "Run JavaScript in a separate thread",
      "initialCode": `// Worker.js
  onmessage = function(event) {
    const result = event.data.num * 2;
    postMessage(result);
  };
  
  // Main.js
  const worker = new Worker('worker.js');
  worker.onmessage = event => console.log('Result:', event.data);
  worker.postMessage({ num: 5 });`,
      "hint": "Use Web Workers to offload computations"
    },
    {
      "id": 26,
      "title": "Async/Await Error Handling",
      "description": "Handle errors in async functions properly",
      "initialCode": `async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error('Network error');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  }
  
  fetchData();`,
      "hint": "Use try-catch to handle async errors"
    },
    {
      "id": 27,
      "title": "Using Map and Set",
      "description": "Use Map and Set for better performance",
      "initialCode": `const map = new Map();
  map.set('name', 'Alice');
  map.set('age', 30);
  console.log(map.get('name'));
  
  const set = new Set([1, 2, 3, 1, 2]);
  console.log(set.has(2)); // true`,
      "hint": "Use Map for key-value pairs and Set for unique values"
    },
    {
      "id": 28,
      "title": "Handling Circular References in JSON",
      "description": "Serialize objects with circular references",
      "initialCode": `const obj = { name: 'Alice' };
  obj.self = obj; // Circular reference
  
  function safeStringify(obj) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) return '[Circular]';
        seen.add(value);
      }
      return value;
    });
  }
  
  console.log(safeStringify(obj));`,
      "hint": "Use WeakSet to track seen objects"
    },
    {
      "id": 29,
      "title": "Lazy Loading Data",
      "description": "Load data only when needed",
      "initialCode": `function lazyLoadData() {
    let data;
    return function() {
      if (!data) {
        console.log('Fetching data...');
        data = { value: 'Loaded Data' };
      }
      return data;
    };
  }
  
  const getData = lazyLoadData();
  console.log(getData());
  console.log(getData());`,
      "hint": "Store loaded data in a closure to prevent re-fetching"
    },
    {
      "id": 30,
      "title": "Handling Large Data with Streams",
      "description": "Process large data efficiently with streams",
      "initialCode": `const { Readable } = require('stream');
  
  const stream = new Readable({
    read() {
      for (let i = 0; i < 5; i++) {
        this.push(\`Chunk \${i}\\n\`);
      }
      this.push(null);
    }
  });
  
  stream.pipe(process.stdout);`,
      "hint": "Use Node.js streams to process large data chunks"
    }
  
  ]
};

export default function Main() {
  const [currentCode, setCurrentCode] = useState(jsQuestions.beginner[0].initialCode);
  const [selectedQuestion, setSelectedQuestion] = useState(jsQuestions.beginner[0]);
  const [output, setOutput] = useState<string[]>([]);

  const handleQuestionSelect = (question: any) => {
    setSelectedQuestion(question);
    setCurrentCode(question.initialCode);
    setOutput([]);
  };

  const runCode = () => {
    setOutput([]);
    const logs: string[] = [];
    const originalConsoleLog = console.log;

    try {
      // Override console.log
      (console as any).log = (...args: any[]) => {
        logs.push(args.map(arg =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
      };

      // Run the code
      eval(currentCode);

      // Set output
      setOutput(logs);
    } catch (error: any) {
      setOutput([`Error: ${error.message}`]);
    } finally {
      // Restore console.log
      console.log = originalConsoleLog;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">JavaScript Playground</h1>
        <p className="text-muted-foreground">
          Practice JavaScript with interactive examples and live console output
        </p>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-4">
          <Accordion type="single" collapsible defaultValue="beginner">
            {Object.entries(jsQuestions).map(([difficulty, questions]) => (
              <AccordionItem key={difficulty} value={difficulty}>
                <AccordionTrigger className="text-lg font-semibold capitalize">
                  {difficulty}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    {questions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => handleQuestionSelect(question)}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-colors",
                          selectedQuestion.id === question.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        <div className="font-medium">{question.title}</div>
                        <div className="text-sm">
                          {question.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <Card className="p-4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">{selectedQuestion.title}</h2>
              <p className="text-muted-foreground">{selectedQuestion.description}</p>
            </div>

            <div className="mb-4">
              <CodeMirror
                value={currentCode}
                height="200px"
                theme={githubLight}
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setCurrentCode(value)}
                className="border rounded-lg overflow-hidden"
              />
            </div>

            <div className="flex justify-between items-center">
              <Button
                onClick={runCode}
                className="flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Run Code
              </Button>

              <Button
                variant="outline"
                onClick={() => setCurrentCode(selectedQuestion.initialCode)}
              >
                Reset Code
              </Button>
            </div>
          </Card>

          {/* Console Output */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Console Output</h3>
            </div>
            <div className="bg-zinc-950 text-zinc-50 rounded-lg p-4 font-mono text-sm">
              {output.length > 0 ? (
                output.map((line, i) => (
                  <div key={i} className="whitespace-pre-wrap">{line}</div>
                ))
              ) : (
                <div className="text-zinc-400">Run code to see output...</div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 