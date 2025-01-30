"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  PlayCircle,
  Boxes,
  CircleDot,
  RefreshCcw,
  Globe,
  SplitSquareHorizontal,
  Navigation,
  LayoutGrid,
  Server,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const lessons = [
  {
    id: "components",
    title: "Components & Props",
    icon: Boxes,
    description: "Building blocks of React applications",
    interactive: {
      code: `function Greeting({ name, role }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Role: {role}</p>
    </div>
  );
}

// Usage
<Greeting name="John" role="Developer" />`,
      visualization: {
        props: { name: "John", role: "Developer" },
        output: `<div>
  <h1>Hello, John!</h1>
  <p>Role: Developer</p>
</div>`
      }
    }
  },
  {
    id: "hooks",
    title: "useState Hook",
    icon: CircleDot,
    description: "Managing component state",
    interactive: {
      code: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
      visualization: {
        state: { count: 0 },
        actions: ["increment"]
      }
    }
  },
  {
    id: "lifecycle",
    title: "useEffect Hook",
    icon: RefreshCcw,
    description: "Side effects and lifecycle",
    interactive: {
      code: `function UserStatus({ id }) {
  const [status, setStatus] = useState('offline');

  useEffect(() => {
    // Simulating API call
    fetchUserStatus(id)
      .then(status => setStatus(status));
  }, [id]);

  return <div>Status: {status}</div>;
}`,
      visualization: {
        steps: [
          "Component mounts",
          "Effect runs",
          "API call starts",
          "State updates",
          "Component re-renders"
        ]
      }
    }
  },
  {
    id: "context",
    title: "Context API",
    icon: Globe,
    description: "Global state management",
    interactive: {
      code: `const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}`,
      visualization: {
        tree: {
          name: "App",
          theme: "dark",
          children: ["Navbar", "ThemedButton", "Footer"]
        }
      }
    }
  },
  {
    id: "refs",
    title: "useRef Hook",
    icon: SplitSquareHorizontal,
    description: "Direct DOM access and mutable values",
    interactive: {
      code: `function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}`,
      visualization: {
        dom: {
          element: "input",
          focused: true,
          ref: "inputRef"
        }
      }
    }
  },
  {
    id: "routing",
    title: "React Router",
    icon: Navigation,
    description: "Client-side routing",
    interactive: {
      code: `function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}`,
      visualization: {
        routes: [
          { path: "/", component: "Home" },
          { path: "/about", component: "About" }
        ],
        currentPath: "/"
      }
    }
  },
  {
    id: "forms",
    title: "Form Handling",
    icon: LayoutGrid,
    description: "Controlled components and form validation",
    interactive: {
      code: `function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.email}
        onChange={e => setFormData({
          ...formData,
          email: e.target.value
        })}
      />
    </form>
  );
}`,
      visualization: {
        formState: {
          email: "",
          password: "",
          touched: false,
          errors: {}
        }
      }
    }
  },
  {
    id: "data-fetching",
    title: "Data Fetching",
    icon: Server,
    description: "API integration with React",
    interactive: {
      code: `function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  return <ul>{users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}</ul>;
}`,
      visualization: {
        states: ["loading", "success", "error"],
        currentState: "loading"
      }
    }
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    icon: Workflow,
    description: "Memoization and render optimization",
    interactive: {
      code: `const MemoizedComponent = React.memo(function({ data }) {
  return <div>{data.map(item => (
    <Item key={item.id} {...item} />
  ))}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => 
    processData(count), [count]
  );

  return <MemoizedComponent data={data} />;
}`,
      visualization: {
        renders: {
          parent: 2,
          memoized: 1,
          explanation: "Prevented unnecessary re-render"
        }
      }
    }
  },
  {
    id: "custom-hooks",
    title: "Custom Hooks",
    icon: CircleDot,
    description: "Creating reusable logic",
    interactive: {
      code: `function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`,
      visualization: {
        hook: {
          input: "window resize event",
          output: { width: 1920, height: 1080 },
          subscriptions: ["resize"]
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
      <div className="flex items-center gap-4 mb-8">
        <Link href="/interactive" className="hover:text-primary">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold mb-2">React Interactive Learning</h1>
          <p className="text-muted-foreground">
            Master React concepts through visual examples
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