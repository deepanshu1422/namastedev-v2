"use client";

import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { githubLight } from '@uiw/codemirror-theme-github';
import type { Database } from 'sql.js';
import { Play, Database as DatabaseIcon, ChevronDown, BookOpen } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Script from 'next/script';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Add type for SQL.js
declare const initSqlJs: (config: {
  locateFile: (file: string) => string;
}) => Promise<{
  Database: new (data?: Uint8Array) => Database;
}>;

// Sample questions organized by difficulty
const sqlQuestions = {
  beginner: [
    {
      id: 1,
      title: "Select All Employees",
      description: "Retrieve all employees from the employees table",
      initialQuery: "SELECT * FROM employees;",
      hint: "Use SELECT * to get all columns"
    },
    {
      id: 2,
      title: "Filter by Department",
      description: "Find all employees in the IT department",
      initialQuery: "SELECT * FROM employees WHERE department = 'IT';",
      hint: "Use WHERE clause to filter records"
    },
    {
      id: 3,
      title: "Sort by Salary",
      description: "Get all employees sorted by salary in descending order",
      initialQuery: "SELECT name, salary FROM employees ORDER BY salary DESC;",
      hint: "Use ORDER BY with DESC"
    },
    {
      id: 4,
      title: "Count Employees",
      description: "Count the total number of employees",
      initialQuery: "SELECT COUNT(*) as total_employees FROM employees;",
      hint: "Use COUNT aggregate function"
    },
    {
      id: 5,
      title: "Recent Hires",
      description: "Find employees hired in 2022",
      initialQuery: "SELECT * FROM employees WHERE hire_date LIKE '2022%';",
      hint: "Use WHERE with LIKE for date matching"
    },
    {
      id: 6,
      title: "Salary Range",
      description: "Find employees with salary between 70000 and 80000",
      initialQuery: "SELECT * FROM employees WHERE salary BETWEEN 70000 AND 80000;",
      hint: "Use BETWEEN operator"
    },
    {
      id: 7,
      title: "Department List",
      description: "Get a list of unique departments",
      initialQuery: "SELECT DISTINCT department FROM employees;",
      hint: "Use DISTINCT keyword"
    },
    {
      id: 8,
      title: "Name Search",
      description: "Find employees whose names start with 'J'",
      initialQuery: "SELECT * FROM employees WHERE name LIKE 'J%';",
      hint: "Use LIKE with wildcard"
    },
    {
      id: 9,
      title: "Minimum Salary",
      description: "Find the lowest salary in the company",
      initialQuery: "SELECT MIN(salary) as min_salary FROM employees;",
      hint: "Use MIN aggregate function"
    },
    {
      id: 10,
      title: "Department Locations",
      description: "List all departments and their locations",
      initialQuery: "SELECT department_name, location FROM departments;",
      hint: "Basic SELECT from departments table"
    }
  ],
  intermediate: [
    {
      id: 11,
      title: "Department Statistics",
      description: "Calculate average salary by department",
      initialQuery: "SELECT department, AVG(salary) as avg_salary, COUNT(*) as employee_count\nFROM employees\nGROUP BY department;",
      hint: "Use GROUP BY with multiple aggregates"
    },
    {
      id: 12,
      title: "Employee Details",
      description: "Join employees with their department details",
      initialQuery: "SELECT e.name, e.salary, d.department_name, d.location\nFROM employees e\nJOIN departments d ON e.department = d.department_name;",
      hint: "Use JOIN to combine tables"
    },
    {
      id: 13,
      title: "Salary Comparison",
      description: "Find employees with above-average salary",
      initialQuery: "SELECT name, salary\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);",
      hint: "Use subquery for comparison"
    },
    {
      id: 14,
      title: "Department Size",
      description: "Count employees in each department, ordered by size",
      initialQuery: "SELECT department, COUNT(*) as dept_size\nFROM employees\nGROUP BY department\nORDER BY dept_size DESC;",
      hint: "Use GROUP BY with ORDER BY"
    },
    {
      id: 15,
      title: "Recent Hires by Department",
      description: "Find the most recent hire in each department",
      initialQuery: "SELECT department, MAX(hire_date) as latest_hire\nFROM employees\nGROUP BY department;",
      hint: "Use GROUP BY with MAX"
    },
    {
      id: 16,
      title: "Salary Range by Department",
      description: "Find salary range (min, max) for each department",
      initialQuery: "SELECT department, MIN(salary) as min_salary, MAX(salary) as max_salary\nFROM employees\nGROUP BY department;",
      hint: "Use multiple aggregate functions"
    },
    {
      id: 17,
      title: "Department Summary",
      description: "Get department details with employee count",
      initialQuery: "SELECT d.department_name, d.location, COUNT(e.id) as employee_count\nFROM departments d\nLEFT JOIN employees e ON d.department_name = e.department\nGROUP BY d.department_name, d.location;",
      hint: "Use LEFT JOIN with GROUP BY"
    },
    {
      id: 18,
      title: "Salary Bands",
      description: "Group employees by salary ranges",
      initialQuery: "SELECT \n  CASE \n    WHEN salary <= 60000 THEN 'Low'\n    WHEN salary <= 80000 THEN 'Medium'\n    ELSE 'High'\n  END as salary_band,\n  COUNT(*) as employee_count\nFROM employees\nGROUP BY salary_band;",
      hint: "Use CASE with GROUP BY"
    },
    {
      id: 19,
      title: "Department Hierarchy",
      description: "List departments with employee and salary details",
      initialQuery: "SELECT \n  department,\n  COUNT(*) as employee_count,\n  ROUND(AVG(salary), 2) as avg_salary,\n  MAX(salary) as highest_salary\nFROM employees\nGROUP BY department\nHAVING employee_count > 1;",
      hint: "Use GROUP BY with HAVING"
    },
    {
      id: 20,
      title: "Employee Rankings",
      description: "Rank employees by salary within their department",
      initialQuery: "SELECT name, department, salary,\n  RANK() OVER (PARTITION BY department ORDER BY salary DESC) as dept_rank\nFROM employees;",
      hint: "Use window functions"
    }
  ],
  advanced: [
    {
      id: 21,
      title: "Salary Percentiles",
      description: "Calculate salary percentiles across company",
      initialQuery: "SELECT name, salary,\n  NTILE(4) OVER (ORDER BY salary) as salary_quartile\nFROM employees;",
      hint: "Use NTILE window function"
    },
    {
      id: 22,
      title: "Running Totals",
      description: "Calculate running total of salaries by department",
      initialQuery: "SELECT department, name, salary,\n  SUM(salary) OVER (PARTITION BY department ORDER BY salary) as running_total\nFROM employees;",
      hint: "Use SUM as window function"
    },
    {
      id: 23,
      title: "Salary Gaps",
      description: "Find salary difference between employees",
      initialQuery: "SELECT name, salary,\n  salary - LAG(salary) OVER (ORDER BY salary) as salary_gap\nFROM employees;",
      hint: "Use LAG window function"
    },
    {
      id: 24,
      title: "Department Statistics",
      description: "Complex department analysis with multiple metrics",
      initialQuery: "SELECT \n  department,\n  COUNT(*) as employee_count,\n  ROUND(AVG(salary), 2) as avg_salary,\n  MAX(salary) as max_salary,\n  MIN(salary) as min_salary,\n  MAX(salary) - MIN(salary) as salary_range\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 1\nORDER BY avg_salary DESC;",
      hint: "Use multiple aggregates with HAVING"
    },
    {
      id: 25,
      title: "Salary Bands Distribution",
      description: "Analyze salary distribution across departments",
      initialQuery: "WITH salary_bands AS (\n  SELECT *,\n    CASE \n      WHEN salary <= 60000 THEN 'Low'\n      WHEN salary <= 80000 THEN 'Medium'\n      ELSE 'High'\n    END as salary_band\n  FROM employees\n)\nSELECT \n  department,\n  salary_band,\n  COUNT(*) as count,\n  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (PARTITION BY department), 2) as percentage\nFROM salary_bands\nGROUP BY department, salary_band\nORDER BY department, salary_band;",
      hint: "Use CTEs and window functions"
    },
    {
      id: 26,
      title: "Tenure Analysis",
      description: "Analyze employee tenure by department",
      initialQuery: "SELECT \n  department,\n  name,\n  hire_date,\n  ROUND(JULIANDAY('now') - JULIANDAY(hire_date)) as days_employed,\n  ROUND((JULIANDAY('now') - JULIANDAY(hire_date))/365.25, 2) as years_employed\nFROM employees\nORDER BY days_employed DESC;",
      hint: "Use date functions"
    },
    {
      id: 27,
      title: "Department Retention",
      description: "Analyze department retention rates",
      initialQuery: "WITH dept_stats AS (\n  SELECT \n    department,\n    COUNT(*) as total_employees,\n    SUM(CASE WHEN JULIANDAY('now') - JULIANDAY(hire_date) > 365.25 * 2 THEN 1 ELSE 0 END) as retained\n  FROM employees\n  GROUP BY department\n)\nSELECT \n  department,\n  total_employees,\n  retained,\n  ROUND(retained * 100.0 / total_employees, 2) as retention_rate\nFROM dept_stats\nORDER BY retention_rate DESC;",
      hint: "Use CTEs with conditional aggregation"
    },
    {
      id: 28,
      title: "Salary Movements",
      description: "Analyze salary movements within departments",
      initialQuery: "SELECT \n  department,\n  name,\n  salary,\n  LAG(salary) OVER (PARTITION BY department ORDER BY salary) as prev_salary,\n  LEAD(salary) OVER (PARTITION BY department ORDER BY salary) as next_salary,\n  ROUND((salary - LAG(salary) OVER (PARTITION BY department ORDER BY salary)) * 100.0 / \n    LAG(salary) OVER (PARTITION BY department ORDER BY salary), 2) as salary_increase_percent\nFROM employees\nORDER BY department, salary;",
      hint: "Use multiple window functions"
    },
    {
      id: 29,
      title: "Department Efficiency",
      description: "Calculate department efficiency metrics",
      initialQuery: "WITH dept_metrics AS (\n  SELECT \n    department,\n    COUNT(*) as headcount,\n    SUM(salary) as total_cost,\n    AVG(salary) as avg_salary,\n    MAX(salary) as max_salary\n  FROM employees\n  GROUP BY department\n)\nSELECT \n  department,\n  headcount,\n  total_cost,\n  ROUND(total_cost/headcount, 2) as cost_per_employee,\n  ROUND(max_salary/avg_salary, 2) as salary_efficiency_ratio\nFROM dept_metrics\nORDER BY cost_per_employee DESC;",
      hint: "Use CTEs with derived metrics"
    },
    {
      id: 30,
      title: "Cross-Department Analysis",
      description: "Compare metrics across departments",
      initialQuery: "WITH dept_stats AS (\n  SELECT \n    department,\n    COUNT(*) as emp_count,\n    AVG(salary) as avg_salary,\n    MAX(salary) as max_salary,\n    MIN(salary) as min_salary\n  FROM employees\n  GROUP BY department\n)\nSELECT \n  d1.department,\n  d1.emp_count,\n  d1.avg_salary,\n  ROUND(d1.avg_salary * 100.0 / (SELECT AVG(avg_salary) FROM dept_stats), 2) as salary_percentile,\n  ROUND(d1.emp_count * 100.0 / (SELECT SUM(emp_count) FROM dept_stats), 2) as workforce_percentage\nFROM dept_stats d1\nORDER BY salary_percentile DESC;",
      hint: "Use CTEs with subqueries"
    }
  ]
};

// Sample data initialization query
const initializationQuery = `
  CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    salary INTEGER,
    hire_date TEXT
  );

  INSERT INTO employees VALUES
    (1, 'John Doe', 'IT', 75000, '2020-01-15'),
    (2, 'Jane Smith', 'HR', 65000, '2019-03-20'),
    (3, 'Bob Johnson', 'IT', 80000, '2018-11-05'),
    (4, 'Alice Brown', 'Finance', 70000, '2021-02-10'),
    (5, 'Charlie Wilson', 'IT', 85000, '2017-09-30'),
    (6, 'Diana Miller', 'HR', 62000, '2022-04-25');

  CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    department_name TEXT NOT NULL,
    location TEXT
  );

  INSERT INTO departments VALUES
    (1, 'IT', 'Building A'),
    (2, 'HR', 'Building B'),
    (3, 'Finance', 'Building A');
`;

// Add this component for displaying table data
function TableStructure({ name, columns, data }: { 
  name: string; 
  columns: string[]; 
  data: any[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <DatabaseIcon className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column, i) => (
                <th key={i} className="text-left p-2 border-b bg-muted/50">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((cell, j) => (
                  <td key={j} className="p-2 border-b">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Add this sample data object
const sampleData = {
  employees: {
    columns: ['id', 'name', 'department', 'salary', 'hire_date'],
    data: [
      { id: 1, name: 'John Doe', department: 'IT', salary: 75000, hire_date: '2020-01-15' },
      { id: 2, name: 'Jane Smith', department: 'HR', salary: 65000, hire_date: '2019-03-20' },
      { id: 3, name: 'Bob Johnson', department: 'IT', salary: 80000, hire_date: '2018-11-05' },
      { id: 4, name: 'Alice Brown', department: 'Finance', salary: 70000, hire_date: '2021-02-10' },
      { id: 5, name: 'Charlie Wilson', department: 'IT', salary: 85000, hire_date: '2017-09-30' },
      { id: 6, name: 'Diana Miller', department: 'HR', salary: 62000, hire_date: '2022-04-25' }
    ]
  },
  departments: {
    columns: ['id', 'department_name', 'location'],
    data: [
      { id: 1, department_name: 'IT', location: 'Building A' },
      { id: 2, department_name: 'HR', location: 'Building B' },
      { id: 3, department_name: 'Finance', location: 'Building A' }
    ]
  }
};

export default function Main() {
  const [db, setDb] = useState<Database | null>(null);
  const [currentQuery, setCurrentQuery] = useState("");
  const [queryResult, setQueryResult] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("beginner");
  const [selectedQuestion, setSelectedQuestion] = useState(sqlQuestions.beginner[0]);
  const [sqlJsInitialized, setSqlJsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !sqlJsInitialized) {
      // Load SQL.js script
      const script = document.createElement('script');
      script.src = 'https://sql.js.org/dist/sql-wasm.js';
      script.async = true;
      script.onload = () => {
        setSqlJsInitialized(true);
      };
      document.body.appendChild(script);
    }
  }, [sqlJsInitialized]);

  useEffect(() => {
    if (sqlJsInitialized && typeof initSqlJs !== 'undefined') {
      initSqlJs({
        locateFile: file => `https://sql.js.org/dist/${file}`
      }).then(SQL => {
        const db = new SQL.Database();
        // Initialize database with sample data
        db.run(initializationQuery);
        setDb(db);
        setCurrentQuery(sqlQuestions.beginner[0].initialQuery);
      }).catch(err => {
        setError('Failed to initialize SQL.js: ' + err.message);
      });
    }
  }, [sqlJsInitialized]);

  const executeQuery = () => {
    if (!db) return;
    
    try {
      const results = db.exec(currentQuery);
      setQueryResult(results);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setQueryResult(null);
    }
  };

  const handleQuestionSelect = (question: any) => {
    setSelectedQuestion(question);
    setCurrentQuery(question.initialQuery);
    setQueryResult(null);
    setError(null);
  };

  return (
    <>
      <Script 
        src="https://sql.js.org/dist/sql-wasm.js"
        strategy="beforeInteractive"
        onLoad={() => setSqlJsInitialized(true)}
      />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">SQL Playground</h1>
            <p className="text-muted-foreground">
              Practice SQL queries with interactive examples and real-time feedback
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <DatabaseIcon className="h-4 w-4" />
                View Sample Data
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Sample Database Structure</DialogTitle>
                <DialogDescription>
                  Available tables and their sample data
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="employees" className="mt-4">
                <TabsList>
                  <TabsTrigger value="employees">Employees Table</TabsTrigger>
                  <TabsTrigger value="departments">Departments Table</TabsTrigger>
                </TabsList>
                <TabsContent value="employees" className="mt-4">
                  <TableStructure 
                    name="employees" 
                    columns={sampleData.employees.columns}
                    data={sampleData.employees.data}
                  />
                </TabsContent>
                <TabsContent value="departments" className="mt-4">
                  <TableStructure 
                    name="departments" 
                    columns={sampleData.departments.columns}
                    data={sampleData.departments.data}
                  />
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="beginner">
              {Object.entries(sqlQuestions).map(([difficulty, questions]) => (
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
                  value={currentQuery}
                  height="200px"
                  theme={githubLight}
                  extensions={[sql()]}
                  onChange={(value) => setCurrentQuery(value)}
                  className="border rounded-lg overflow-hidden"
                />
              </div>

              <div className="flex justify-between items-center">
                <Button 
                  onClick={executeQuery}
                  className="flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Run Query
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setCurrentQuery(selectedQuestion.initialQuery)}
                >
                  Reset Query
                </Button>
              </div>
            </Card>

            {/* Results */}
            {error && (
              <Card className="p-4 border-destructive">
                <div className="text-destructive">{error}</div>
              </Card>
            )}

            {queryResult && queryResult.length > 0 && (
              <Card className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        {queryResult[0].columns.map((column: string, i: number) => (
                          <th key={i} className="text-left p-2 border-b">{column}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {queryResult[0].values.map((row: any[], i: number) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j} className="p-2 border-b">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 