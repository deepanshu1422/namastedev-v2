import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const commonSkills = [
  "JavaScript", "React", "Node.js", "Python", "Java", "C++",
  "SQL", "Git", "Docker", "AWS", "TypeScript", "GraphQL"
];

const steps = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "skills", label: "Skills", type: "checkbox" },
  { id: "otherSkills", label: "Other Skills" },
  { id: "experience", label: "Experience" },
  {
    id: "projects",
    label: "Top 3 Projects",
    subfields: [
      { id: "project1", label: "Project 1" },
      { id: "project2", label: "Project 2" },
      { id: "project3", label: "Project 3" },
    ],
  },
  { id: "resumeUrl", label: "Resume URL", type: "url" },
];

export function JobApplicationDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form
      console.log("Form submitted:", formData);
      setIsOpen(false);
      setCurrentStep(0);
      setFormData({});
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="font-semibold text-foreground/80 hover:text-foreground relative w-full text-sm px-3 py-2"
        >
          Apply for remote jobs
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Job Application - Step {currentStep + 1}</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={steps[currentStep].id} className="text-right">
              {steps[currentStep].label}
            </Label>
            <Input
              id={steps[currentStep].id}
              type={steps[currentStep].type || "text"}
              className="col-span-3"
              value={formData[steps[currentStep].id as keyof typeof formData] || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button type="button" onClick={handleNext}>
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}