"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  PlayCircle,
  Server,
  Database,
  Shield,
  Router as RouterIcon,
  FileJson,
  Workflow,
  MessageSquare,
  Layers,
  Gauge,
  Cloud,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import React from 'react';
import { cn } from "@/lib/utils";

const lessons = [
  {
    id: "express-basics",
    title: "Express Basics",
    icon: Server,
    description: "Setting up Express server and routing",
    interactive: {
      code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
      visualization: {
        steps: [
          "Initialize Express app",
          "Define route handler",
          "Start server",
          "Handle incoming request"
        ]
      }
    }
  },
  {
    id: "middleware",
    title: "Middleware",
    icon: Layers,
    description: "Understanding Express middleware",
    interactive: {
      code: `app.use(express.json());

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

app.use('/api', authMiddleware);`,
      visualization: {
        flow: ["Request", "→", "Middleware 1", "→", "Middleware 2", "→", "Route Handler"]
      }
    }
  },
  {
    id: "routing",
    title: "Advanced Routing",
    icon: RouterIcon,
    description: "Route parameters and handlers",
    interactive: {
      code: `const router = express.Router();

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Fetch user logic
});

app.use('/api', router);`,
      visualization: {
        routes: [
          { path: "/api/users/:id", method: "GET" },
          { path: "/api/users", method: "POST" }
        ]
      }
    }
  },
  {
    id: "database",
    title: "Database Integration",
    icon: Database,
    description: "MongoDB with Mongoose",
    interactive: {
      code: `const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }
});

const User = mongoose.model('User', userSchema);`,
      visualization: {
        schema: {
          collection: "users",
          fields: ["name", "email"],
          indexes: ["email"]
        }
      }
    }
  },
  {
    id: "auth",
    title: "Authentication",
    icon: Shield,
    description: "JWT authentication implementation",
    interactive: {
      code: `const jwt = require('jsonwebtoken');

const createToken = (user) => {
  return jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};`,
      visualization: {
        jwt: {
          header: { alg: "HS256", typ: "JWT" },
          payload: { id: "user123", exp: 1234567890 }
        }
      }
    }
  },
  {
    id: "validation",
    title: "Input Validation",
    icon: FileJson,
    description: "Request validation with Joi",
    interactive: {
      code: `const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});`,
      visualization: {
        validation: {
          input: { email: "test@example.com", password: "123" },
          errors: ["password must be at least 6 characters"]
        }
      }
    }
  },
  {
    id: "error-handling",
    title: "Error Handling",
    icon: Workflow,
    description: "Global error handling middleware",
    interactive: {
      code: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something broke!'
  });
});`,
      visualization: {
        errorFlow: ["Error Occurs", "→", "Error Middleware", "→", "Client Response"]
      }
    }
  },
  {
    id: "websockets",
    title: "WebSocket Integration",
    icon: MessageSquare,
    description: "Real-time communication with Socket.io",
    interactive: {
      code: `const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('message', data);
  });
});`,
      visualization: {
        sockets: {
          connections: 3,
          events: ["connect", "message", "disconnect"]
        }
      }
    }
  },
  {
    id: "caching",
    title: "Caching Strategies",
    icon: Gauge,
    description: "Redis caching implementation",
    interactive: {
      code: `const redis = require('redis');
const client = redis.createClient();

async function getCachedData(key) {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);
  // Fetch and cache data
}`,
      visualization: {
        cache: {
          hits: 85,
          misses: 15,
          keys: ["users:1", "posts:recent"]
        }
      }
    }
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: Cloud,
    description: "Deployment best practices",
    interactive: {
      code: `require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
      visualization: {
        deployment: {
          environment: "production",
          services: ["Node.js", "MongoDB", "Redis"]
        }
      }
    }
  }
];

export default function Main() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [isRunning, setIsRunning] = useState(false);

  const runVisualization = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* New notification banner */}
      <div className="bg-muted/50 border rounded-lg p-3 mb-6 text-sm text-muted-foreground flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <p>We're constantly adding new lessons and updating existing ones to keep you up to date with the latest practices.</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <Link href="/interactive">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold mb-2">Node.js & Express Interactive Learning</h1>
          <p className="text-muted-foreground">
            Master backend development with Node.js and Express
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-2">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLesson(lesson)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg transition-colors",
                activeLesson.id === lesson.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <lesson.icon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">{lesson.title}</div>
                <div className="text-sm text-muted-foreground">
                  {lesson.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <activeLesson.icon className="h-6 w-6" />
              {activeLesson.title}
            </h2>
            
            {/* Code Example */}
            <div className="bg-muted p-4 rounded-lg mb-6">
              <pre className="text-sm">
                <code>{activeLesson.interactive.code}</code>
              </pre>
            </div>

            {/* Visualization */}
            <div className="border rounded-lg p-6">
              {/* Visualization logic based on activeLesson.id */}
              <Button
                className="w-full mt-4"
                onClick={runVisualization}
                disabled={isRunning}
              >
                <PlayCircle className="h-4 w-4 mr-2" />
                Run Example
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 