"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Code2, 
  Layout, 
  Server, 
  Sparkles,
  Copy,
  Search,
  Braces,
  Globe,
  Cpu,
  Shield,
  Database,
  Gauge,
  FileJson,
  Workflow
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "ai-integration",
    title: "AI Integration",
    icon: Bot,
    examples: [
      {
        title: "OpenAI Chat Completion",
        description: "Integrate ChatGPT into your application",
        code: `import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getChatCompletion(prompt: string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}`,
        tags: ["OpenAI", "ChatGPT", "API"]
      },
      {
        title: "AI Prompt Engineering",
        description: "Effective prompts for coding assistance",
        code: `// Example prompts for different coding tasks:

1. Code Review:
"Review this code for potential issues and suggest improvements:
\`\`\`
[paste code here]
\`\`\`"

2. Algorithm Design:
"Design an algorithm to [specific task] with these requirements:
- Time complexity: O(n)
- Space complexity: O(1)
- Handle edge cases: [list cases]"

3. Architecture Planning:
"Help design a system architecture for [project type] that:
- Scales to [number] users
- Handles [specific requirements]
- Uses [technology stack]"`,
        tags: ["Prompts", "Best Practices", "AI"]
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Patterns",
    icon: Layout,
    examples: [
      {
        title: "React Custom Hooks",
        description: "Useful custom hooks for common scenarios",
        code: `import { useState, useEffect } from 'react';

// Local Storage Hook
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;
    
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Debounce Hook
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`,
        tags: ["React", "Hooks", "TypeScript"]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Patterns",
    icon: Server,
    examples: [
      {
        title: "API Rate Limiting",
        description: "Implement rate limiting in Express",
        code: `import rateLimit from 'express-rate-limit';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

const limiter = rateLimit({
  store: new RedisStore({
    client: redis,
    prefix: 'rate-limit:',
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});

app.use('/api/', limiter);`,
        tags: ["Express", "Redis", "Security"]
      }
    ]
  },
  {
    id: "testing",
    title: "Testing Patterns",
    icon: Braces,
    examples: [
      {
        title: "React Testing Library",
        description: "Common testing patterns for React components",
        code: `import { render, screen, fireEvent } from '@testing-library/react';

test('button click increments counter', () => {
  render(<Counter />);
  
  const button = screen.getByRole('button');
  const counter = screen.getByText(/count:/i);
  
  expect(counter).toHaveTextContent('Count: 0');
  
  fireEvent.click(button);
  
  expect(counter).toHaveTextContent('Count: 1');
});`,
        tags: ["Testing", "React", "Jest"]
      }
    ]
  },
  {
    id: "nextjs",
    title: "Next.js Patterns",
    icon: Globe,
    examples: [
      {
        title: "Server Actions",
        description: "Next.js 14 server actions implementation",
        code: `'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title')
  const content = formData.get('content')
  
  await db.post.create({
    data: { title, content }
  })
  
  revalidatePath('/posts')
}

// Usage in Client Component
<form action={createPost}>
  <input name="title" />
  <textarea name="content" />
  <button type="submit">Create Post</button>
</form>`,
        tags: ["Next.js", "Server Actions", "React"]
      },
      {
        title: "Metadata API",
        description: "Dynamic metadata in Next.js",
        code: `import { Metadata } from 'next'
 
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const product = await getProduct(params.id)
 
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  }
}`,
        tags: ["Next.js", "SEO", "Metadata"]
      }
    ]
  },
  {
    id: "authentication",
    title: "Authentication",
    icon: Shield,
    examples: [
      {
        title: "Next-Auth Setup",
        description: "Implement authentication with Next-Auth",
        code: `import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
 
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub
      return session
    },
  },
}

export const handler = NextAuth(authOptions)`,
        tags: ["Next-Auth", "OAuth", "Authentication"]
      }
    ]
  },
  {
    id: "database",
    title: "Database Patterns",
    icon: Database,
    examples: [
      {
        title: "Prisma Transactions",
        description: "Handle complex database operations",
        code: `import { prisma } from '@/lib/prisma'

async function transferPoints(
  fromUserId: string,
  toUserId: string,
  points: number
) {
  return await prisma.$transaction(async (tx) => {
    // Deduct points from sender
    const sender = await tx.user.update({
      where: { id: fromUserId },
      data: { points: { decrement: points } },
    })

    if (sender.points < 0) {
      throw new Error('Insufficient points')
    }

    // Add points to receiver
    await tx.user.update({
      where: { id: toUserId },
      data: { points: { increment: points } },
    })

    // Create transaction record
    await tx.pointsTransaction.create({
      data: {
        fromUserId,
        toUserId,
        points,
      },
    })
  })
}`,
        tags: ["Prisma", "Transactions", "Database"]
      }
    ]
  },
  {
    id: "performance",
    title: "Performance",
    icon: Gauge,
    examples: [
      {
        title: "Image Optimization",
        description: "Next.js Image component best practices",
        code: `import Image from 'next/image'

function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Image
        src="/hero.jpg"
        alt="Hero image"
        width={800}
        height={400}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j..."
        priority // For LCP images
      />
      
      {/* Lazy loaded images */}
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.alt}
          width={300}
          height={200}
          className="object-cover"
          loading="lazy"
        />
      ))}
    </div>
  )
}`,
        tags: ["Next.js", "Images", "Performance"]
      }
    ]
  },
  {
    id: "forms",
    title: "Form Patterns",
    icon: FileJson,
    examples: [
      {
        title: "React Hook Form + Zod",
        description: "Type-safe form validation",
        code: `import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export function SignupForm() {
  const form = useForm({
    resolver: zodResolver(schema)
  })

  return (
    <form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <input {...form.register("email")} />
      {form.formState.errors.email?.message}
      
      <input type="password" {...form.register("password")} />
      {form.formState.errors.password?.message}
      
      <input type="password" {...form.register("confirmPassword")} />
      {form.formState.errors.confirmPassword?.message}
      
      <button type="submit">Sign Up</button>
    </form>
  )
}`,
        tags: ["React Hook Form", "Zod", "Validation"]
      }
    ]
  },
  {
    id: "state-management",
    title: "State Management",
    icon: Workflow,
    examples: [
      {
        title: "Zustand Store",
        description: "Simple state management with Zustand",
        code: `import create from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
)`,
        tags: ["Zustand", "State Management", "TypeScript"]
      }
    ]
  }
];

export default function Main() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeExample, setActiveExample] = useState(categories[0].examples[0]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* New notification banner */}
      <div className="bg-muted/50 border rounded-lg p-3 mb-6 text-sm text-muted-foreground flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <p>We're constantly adding new examples and updating existing ones to keep you up to date with the latest practices.</p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Code Examples & Snippets</h1>
        <p className="text-muted-foreground">
          Learn from practical examples and copy-paste ready code snippets
        </p>
      </div>

      <div className="grid lg:grid-cols-[250px_1fr] gap-6">
        {/* Categories Sidebar */}
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category);
                setActiveExample(category.examples[0]);
              }}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg transition-colors",
                activeCategory.id === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Examples List */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {activeCategory.examples.map((example) => (
              <Card
                key={example.title}
                className={cn(
                  "p-4 cursor-pointer hover:shadow-md transition-shadow",
                  activeExample.title === example.title && "border-primary"
                )}
                onClick={() => setActiveExample(example)}
              >
                <h3 className="font-semibold mb-2">{example.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {example.description}
                </p>
                <div className="flex gap-2 mt-3">
                  {example.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Code Display */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{activeExample.title}</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(activeExample.code)}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{activeExample.code}</code>
              </pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 