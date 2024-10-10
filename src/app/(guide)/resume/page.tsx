'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, Trash2, Wand2, Download, CreditCard } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import jsPDF from 'jspdf'

// Define types for resume sections
type Education = {
  school: string;
  degree: string;
  location: string;
  date: string;
}

type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  details: string[];
}

type Project = {
  name: string;
  technologies: string;
  date: string;
  details: string[];
}

type Skills = {
  languages: string;
  frameworks: string;
  developerTools: string;
  libraries: string;
}

type Resume = {
  name: string;
  contact: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
}

// Simulated OpenAI API call
// const generateAIContent = async (prompt: string): Promise<string> => {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   return `AI-generated content for: ${prompt}`;
// }

// Update the generatePDF function
const generatePDF = (resumeData: Resume): string => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 10;
    let yPos = margin;
  
    // Set font
    doc.setFont("times", "normal");
  
    // Helper function to add text
    const addText = (text: string, x: number, y: number, options: any = {}) => {
      const defaultOptions = { align: 'left', maxWidth: pageWidth - 2 * margin };
      doc.text(text, x, y, { ...defaultOptions, ...options });
    };
  
    // Add horizontal line
    const addLine = (y: number) => {
      doc.setLineWidth(0.5);
      doc.line(margin, y, pageWidth - margin, y);
    };
  
    // Name
    doc.setFontSize(18);
    doc.setFont("times", "bold");
    addText(resumeData.name, pageWidth / 2, yPos, { align: 'center' });
    yPos += 7;
  
    // Contact info
    doc.setFontSize(10);
    doc.setFont("times", "normal");
    addText(resumeData.contact, pageWidth / 2, yPos, { align: 'center' });
    yPos += 7;
  
    // Sections
    const addSection = (title: string, content: () => void) => {
      doc.setFontSize(12);
      doc.setFont("times", "bold");
      addText(title.toUpperCase(), margin, yPos);
      yPos += 1;
      addLine(yPos);
      yPos += 5;
      doc.setFont("times", "normal");
      content();
      yPos += 5;
    };
  
    // Education
    addSection('Education', () => {
      resumeData.education.forEach(edu => {
        doc.setFontSize(11);
        doc.setFont("times", "bold");
        addText(edu.school, margin, yPos);
        addText(edu.location, pageWidth - margin, yPos, { align: 'right' });
        yPos += 4;
        doc.setFont("times", "italic");
        addText(edu.degree, margin, yPos);
        doc.setFont("times", "normal");
        addText(edu.date, pageWidth - margin, yPos, { align: 'right' });
        yPos += 5;
      });
    });
  
    // Experience
    addSection('Experience', () => {
      resumeData.experience.forEach(exp => {
        doc.setFontSize(11);
        doc.setFont("times", "bold");
        addText(exp.title, margin, yPos);
        addText(exp.date, pageWidth - margin, yPos, { align: 'right' });
        yPos += 4;
        doc.setFont("times", "italic");
        addText(exp.company, margin, yPos);
        doc.setFont("times", "normal");
        addText(exp.location, pageWidth - margin, yPos, { align: 'right' });
        yPos += 4;
        doc.setFontSize(10);
        exp.details.forEach(detail => {
          addText(`• ${detail}`, margin + 5, yPos, { maxWidth: pageWidth - 2 * margin - 5 });
          yPos += doc.getTextDimensions(detail, { maxWidth: pageWidth - 2 * margin - 5 }).h + 1;
        });
        yPos += 2;
      });
    });
  
    // Projects
    addSection('Projects', () => {
      resumeData.projects.forEach(project => {
        doc.setFontSize(11);
        doc.setFont("times", "bold");
        addText(`${project.name} | ${project.technologies}`, margin, yPos);
        addText(project.date, pageWidth - margin, yPos, { align: 'right' });
        yPos += 4;
        doc.setFontSize(10);
        doc.setFont("times", "normal");
        project.details.forEach(detail => {
          addText(`• ${detail}`, margin + 5, yPos, { maxWidth: pageWidth - 2 * margin - 5 });
          yPos += doc.getTextDimensions(detail, { maxWidth: pageWidth - 2 * margin - 5 }).h + 1;
        });
        yPos += 2;
      });
    });
  
    // Technical Skills
    addSection('Technical Skills', () => {
      doc.setFontSize(10);
      const skills = [
        { title: 'Languages', content: resumeData.skills.languages },
        { title: 'Frameworks', content: resumeData.skills.frameworks },
        { title: 'Dev Tools', content: resumeData.skills.developerTools },
        { title: 'Libraries', content: resumeData.skills.libraries }
      ];
      skills.forEach(skill => {
        doc.setFont("times", "bold");
        addText(`${skill.title}:`, margin, yPos);
        doc.setFont("times", "normal");
        addText(skill.content, margin + 25, yPos, { maxWidth: pageWidth - 2 * margin - 25 });
        yPos += doc.getTextDimensions(skill.content, { maxWidth: pageWidth - 2 * margin - 25 }).h + 2;
      });
    });
  
    return doc.output('datauristring');
  };

export default function ResumeBuilder() {
    
  const [isGeneratingPDF, setIsGeneratingPDF] = useState<boolean>(false)

// Update the handleDownloadPDF function
    const handleDownloadPDF = () => {
        setIsGeneratingPDF(true);
        try {
        const pdfDataUri = generatePDF(resume);
        const link = document.createElement('a');
        link.href = pdfDataUri;
        link.download = `${resume.name.replace(' ', '_')}_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        } catch (error) {
        console.error('Error generating PDF:', error);
        // Here you would typically show an error message to the user
        } finally {
        setIsGeneratingPDF(false);
        }
    };
    
  const [resume, setResume] = useState<Resume>({
    name: 'Jake Ryan',
    contact: '123-456-7890 | jake@su.edu | linkedin.com/in/jake | github.com/jake',
    education: [
      {
        school: 'Southwestern University',
        degree: 'Bachelor of Arts in Computer Science, Minor in Business',
        location: 'Georgetown, TX',
        date: 'Aug. 2018 - May 2021'
      },
      {
        school: 'Blinn College',
        degree: 'Associate\'s in Liberal Arts',
        location: 'Bryan, TX',
        date: 'Aug. 2014 - May 2018'
      }
    ],
    experience: [
      {
        title: 'Undergraduate Research Assistant',
        company: 'Texas A&M University',
        location: 'College Station, TX',
        date: 'June 2020 - Present',
        details: [
          'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
          'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
          'Explored ways to visualize GitHub collaboration in a classroom setting'
        ]
      },
      {
        title: 'Information Technology Support Specialist',
        company: 'Southwestern University',
        location: 'Georgetown, TX',
        date: 'Sep. 2018 - Present',
        details: [
          'Communicate with managers to set up campus computers used on campus',
          'Assess and troubleshoot computer problems brought by students, faculty and staff',
          'Maintain upkeep of computers, classroom equipment, and 200 printers across campus'
        ]
      },
      {
        title: 'Artificial Intelligence Research Assistant',
        company: 'Southwestern University',
        location: 'Georgetown, TX',
        date: 'May 2019 - July 2019',
        details: [
          'Explored methods to generate video game dungeons based off of The Legend of Zelda',
          'Developed a game in Java to test the generated dungeons',
          'Contributed 50K+ lines of code to an established codebase via Git',
          'Conducted a human subject study to determine which video game dungeon generation technique is enjoyable',
          'Wrote an 8-page paper and gave multiple presentations on-campus',
          'Presented virtually to the World Conference on Computational Intelligence'
        ]
      }
    ],
    projects: [
      {
        name: 'Gitlytics',
        technologies: 'Python, Flask, React, PostgreSQL, Docker',
        date: 'June 2020 - Present',
        details: [
          'Developed a full-stack web application using with Flask serving a REST API with React as the frontend',
          'Implemented GitHub OAuth to get data from user\'s repositories',
          'Visualized GitHub data to show collaboration',
          'Used Celery and Redis for asynchronous tasks'
        ]
      },
      {
        name: 'Simple Paintball',
        technologies: 'Spigot API, Java, Maven, TravisCI, Git',
        date: 'May 2018 - May 2020',
        details: [
          'Developed a Minecraft server plugin to entertain kids during free time for a previous job',
          'Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review',
          'Implemented continuous delivery using TravisCI to build the plugin upon new a release',
          'Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin'
        ]
      }
    ],
    skills: {
      languages: 'Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R',
      frameworks: 'React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI',
      developerTools: 'Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse',
      libraries: 'pandas, NumPy, Matplotlib'
    }
  })


  const updateResume = (field: keyof Resume, value: any) => {
    setResume(prev => ({ ...prev, [field]: value }))
  }

  const updateNestedField = (section: keyof Resume, index: number, field: string, value: string) => {
    setResume(prev => {
      const newSection = [...prev[section as keyof Pick<Resume, 'education' | 'experience' | 'projects'>]]
      newSection[index] = { ...newSection[index], [field]: value }
      return { ...prev, [section]: newSection }
    })
  }

  const addItem = (section: keyof Pick<Resume, 'education' | 'experience' | 'projects'>, item: Education | Experience | Project) => {
    setResume(prev => ({ ...prev, [section]: [...prev[section], item] }))
  }

  const removeItem = (section: keyof Pick<Resume, 'education' | 'experience' | 'projects'>, index: number) => {
    setResume(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }))
  }

  const updateDetail = (section: 'experience' | 'projects', itemIndex: number, detailIndex: number, value: string) => {
    setResume(prev => {
      const newSection = [...prev[section]]
      newSection[itemIndex] = {
        ...newSection[itemIndex],
        details: newSection[itemIndex].details.map((detail, i) =>
          i === detailIndex ? value : detail
        )
      }
      return { ...prev, [section]: newSection }
    })
  }

  const addDetail = (section: 'experience' | 'projects', itemIndex: number) => {
    setResume(prev => {
      const newSection = [...prev[section]]
      newSection[itemIndex] = {
        ...newSection[itemIndex],
        details: [...newSection[itemIndex].details, '']
      }
      return { ...prev, [section]: newSection }
    })
  }

  const removeDetail = (section: 'experience' | 'projects', itemIndex: number, detailIndex: number) => {
    setResume(prev => {
      const newSection = [...prev[section]]
      newSection[itemIndex] = {
        ...newSection[itemIndex],
        details: newSection[itemIndex].details.filter((_, i) => i !== detailIndex)
      }
      return { ...prev, [section]: newSection }
    })
  }

  const generateAIDetail = async (section: 'experience' | 'projects', itemIndex: number, detailIndex: number) => {
    const item = resume[section][itemIndex];
    const prompt = `Generate a bullet point for a resume ${section} section. 
                    Role: ${item.title || item.name}. 
                    Company/Project: ${item.company || item.technologies}. 
                    Current detail: ${item.details[detailIndex]}`;
    
    // const aiContent = await generateAIContent(prompt);
    
    // updateDetail(section, itemIndex, detailIndex, aiContent);
  }

  const handleAddAICredits = () => {
    // Implement the logic to add AI credits
    console.log('Adding AI credits')
  }

  return (
    <div className="flex flex-col h-screen">

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 p-4 overflow-y-auto">
          <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Build the perfect resume</h2>
              <Button 
                onClick={handleDownloadPDF} 
                className="mr-4 border-white border-2 text-white bg-second"
              >
                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                <Download className="ml-2 h-4 w-4" />
              </Button>
          </div>
          <p className="mb-4">
            Check out the  
            <a 
              href="https://bit.ly/30dc-resume" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 underline ml-1"
            >
              resume guide
            </a> 
           <span> and our </span><a 
              href="https://30dayscoding.com/bundle/complete-package-all-course-bundle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 underline ml-1"
            >
            upskilling courses
            </a>
          </p>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={resume.name}
                onChange={(e) => updateResume('name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="contact">Contact Information</Label>
              <Input
                id="contact"
                value={resume.contact}
                onChange={(e) => updateResume('contact', e.target.value)}
              />
            </div>
            
            <h3 className="text-xl font-semibold mt-4">Education</h3>
            {resume.education.map((edu, index) => (
              <div key={index} className="space-y-2 p-2 border rounded">
                <Input
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => updateNestedField('education', index, 'school', e.target.value)}
                />
                <Input
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={(e) => updateNestedField('education', index, 'degree', e.target.value)}
                />
                <Input
                  placeholder="Location"
                  value={edu.location}
                  onChange={(e) => updateNestedField('education', index, 'location', e.target.value)}
                />
                <Input
                  placeholder="Date"
                  value={edu.date}
                  onChange={(e) => updateNestedField('education', index, 'date', e.target.value)}
                />
                <Button variant="destructive" onClick={() => removeItem('education', index)}>Remove</Button>
              </div>
            ))}
            <Button onClick={() => addItem('education', { school: '', degree: '', location: '', date: '' })}>
              Add Education
            </Button>
            
            <h3 className="text-xl font-semibold mt-4">Experience</h3>
            {resume.experience.map((exp, index) => (
              <div key={index} className="space-y-2 p-2 border rounded">
                <Input
                  placeholder="Title"
                  value={exp.title}
                  onChange={(e) => updateNestedField('experience', index, 'title', e.target.value)}
                />
                <Input
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => updateNestedField('experience', index, 'company', e.target.value)}
                />
                <Input
                  placeholder="Location"
                  value={exp.location}
                  onChange={(e) => updateNestedField('experience', index, 'location', e.target.value)}
                />
                <Input
                  placeholder="Date"
                  value={exp.date}
                  onChange={(e) => updateNestedField('experience', index, 'date', e.target.value)}
                />
                {exp.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <Input
                      placeholder="Detail"
                      value={detail}
                      onChange={(e) => updateDetail('experience', index, detailIndex, e.target.value)}
                    />
                    {/* <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => generateAIDetail('experience', index, detailIndex)}>
                            <Wand2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Generate AI content</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider> */}
                    <Button variant="destructive" size="icon" onClick={() => removeDetail('experience', index, detailIndex)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={() => addDetail('experience', index)}>Add Detail</Button>
                <Button variant="destructive" onClick={() => removeItem('experience', index)}>Remove Experience</Button>
              </div>
            ))}
            <Button onClick={() => addItem('experience', { title: '', company: '', location: '', date: '', details: [''] })}>
              Add Experience
            </Button>
            
            <h3 className="text-xl font-semibold mt-4">Projects</h3>
            {resume.projects.map((project, index) => (
              <div key={index} className="space-y-2 p-2 border rounded">
                <Input
                  placeholder="Project Name"
                  value={project.name}
                  onChange={(e) => updateNestedField('projects', index, 'name', e.target.value)}
                />
                <Input
                  placeholder="Technologies"
                  value={project.technologies}
                  onChange={(e) => updateNestedField('projects', index, 'technologies', e.target.value)}
                />
                <Input
                  placeholder="Date"
                  value={project.date}
                  onChange={(e) => updateNestedField('projects', index, 'date', e.target.value)}
                />
                {project.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <Input
                      placeholder="Detail"
                      value={detail}
                      onChange={(e) => updateDetail('projects', index, detailIndex, e.target.value)}
                    />
                    {/* <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => generateAIDetail('projects', index, detailIndex)}>
                            <Wand2 className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Generate AI content</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider> */}
                    <Button variant="destructive" size="icon" onClick={() => removeDetail('projects', index, detailIndex)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button onClick={() => addDetail('projects', index)}>Add Detail</Button>
                <Button variant="destructive" onClick={() => removeItem('projects', index)}>Remove Project</Button>
              </div>
            ))}
            <Button onClick={() => addItem('projects', { name: '', technologies: '', date: '', details: [''] })}>
              Add Project
            </Button>
            
            <h3 className="text-xl font-semibold mt-4">Technical Skills</h3>
            <div>
              <Label htmlFor="languages">Languages</Label>
              <Input
                id="languages"
                value={resume.skills.languages}
                onChange={(e) => updateResume('skills', { ...resume.skills, languages: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="frameworks">Frameworks</Label>
              <Input
                id="frameworks"
                value={resume.skills.frameworks}
                onChange={(e) => updateResume('skills', { ...resume.skills, frameworks: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="developerTools">Dev Tools</Label>
              <Input
                id="developerTools"
                value={resume.skills.developerTools}
                onChange={(e) => updateResume('skills', { ...resume.skills, developerTools: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="libraries">Libraries</Label>
              <Input
                id="libraries"
                value={resume.skills.libraries}
                onChange={(e) => updateResume('skills', { ...resume.skills, libraries: e.target.value })}
              />
            </div>
          </div>
        </div>
        
        <div className="w-1/2 p-4 overflow-y-auto">
          <div className=" p-6 shadow-lg border border-gray-300" style={{ fontFamily: 'Times New Roman, serif' }}>
            <h1 className="text-3xl font-bold text-center mb-2">{resume.name}</h1>
            <p className="text-center mb-4">{resume.contact}</p>
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b-2 border-gray-400">EDUCATION</h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <span className="font-bold">{edu.school}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="italic">{edu.degree}</span>
                  <span>{edu.date}</span>
                </div>
              </div>
            ))}
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b-2 border-gray-400">EXPERIENCE</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-bold">{exp.title}</span>
                  <span>{exp.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="italic">{exp.company}</span>
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-inside mt-1">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b-2 border-gray-400">PROJECTS</h2>
            {resume.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <span className="font-bold">{project.name} | {project.technologies}</span>
                  <span>{project.date}</span>
                </div>
                <ul className="list-disc list-inside mt-1">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
            
            <h2 className="text-xl font-bold mt-4 mb-2 border-b-2 border-gray-400">TECHNICAL SKILLS</h2>
            <p className="text-sm"><span className="font-bold">Languages:</span> {resume.skills.languages}</p>
            <p className="text-sm"><span className="font-bold">Frameworks:</span> {resume.skills.frameworks}</p>
            <p className="text-sm"><span className="font-bold">Dev Tools:</span> {resume.skills.developerTools}</p>
            <p className="text-sm"><span className="font-bold">Libraries:</span> {resume.skills.libraries}</p>
          </div>
        </div>
      </div>
    </div>
  )
}