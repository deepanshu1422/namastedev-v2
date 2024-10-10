import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InfoForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData.get(""));
      }}
      className="w-full min-h-96 rounded-2xl bg-second p-3 md:p-6 flex flex-col gap-3"
    >
      <div className="flex max-md:flex-col gap-3">
        <InputFields
          title="First Name"
          placeholder="Enter your first name"
          required={true}
        />
        <InputFields
          title="Last Name"
          placeholder="Enter your last name"
          required={true}
        />
      </div>

      <InputFields
        title="Email"
        placeholder="Enter your email address"
        required={true}
      />

      <InputFields
        title="Phone Number"
        placeholder="Enter your phone number"
        required={true}
      />

      <div className="flex max-md:flex-col gap-3">
        <SelectField
          title="Field of Study"
          options={[
            "Computer Science",
            "Information Technology",
            "Data Science",
            "MBA",
            "Engineering",
            "Nursing",
            "Business Administration",
            "Healthcare Management",
            "Accounting",
            "Other"
          ]}
          placeholder="Select Degree Qualification"
          required={true}
        />
        <SelectField
          title="Graduation Year"
          options={[
            "2026",
            "2025",
            "2024",
            "2023",
            "2022",
            "2021",
            "2020",
            "2019",
            "2018",
            "2017",
            "2016",
          ]}
          placeholder="Select Year of Graduation"
          required={true}
        />
      </div>

      <div className="flex max-md:flex-col gap-3">
        <SelectField
          title="Work Experience"
          options={[
            "Fresher",
            "1 Years",
            "2 Years",
            "3 Years",
            "4 Years",
            "5 Years",
            "6+ Years",
          ]}
          placeholder="Select Experience"
          required={true}
        />
        <SelectField
          title="Programming Knowledge"
          options={["Beginner", "Intermediate", "Advanced", "No Knowledge"]}
          placeholder="Select Levels"
          required={true}
        />
      </div>

      <div className="flex flex-col items-center gap-1.5 mt-auto mb-0">
        <button
          type="submit"
          className="bg-prime/20 border border-prime my-3 rounded-lg px-4 text-center py-2 max-w-3xl mx-auto w-full text-2xl sm:text-3xl font-extrabold flex items-center gap-3 justify-center hover:opacity-80 transition-all duration-200 uppercase mt-4 mb-0"
        >
          <CreditCard className="h-10 w-10" />
          Submit Details
        </button>
        <p className="text-xs text-center">
          By submitting this form, you agree to the &quot;Terms and Conditions&quot; and
          &quot;Privacy Policy&quot;
        </p>
      </div>
    </form>
  );
}

function InputFields({
  title,
  placeholder,
  required,
}: {
  title: string;
  placeholder: string;
  required: boolean;
}) {
  return (
    <div className="flex-1 flex flex-col gap-1.5">
      <span className="text-sm font-semibold flex">
        <span>{title}</span>
        {required && <span className="text-red-500">*</span>}
      </span>
      <Input
        required={required}
        className="px-4 py-3 h-12"
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectField({
  title,
  options,
  placeholder,
  required,
}: {
  title: string;
  options: string[];
  placeholder: string;
  required: boolean;
}) {
  return (
    <div className="flex-1 flex flex-col gap-1.5">
      <span className="text-sm font-semibold flex">
        <span>{title}</span>
        {required && <span className="text-red-500">*</span>}
      </span>
      <Select>
        <SelectTrigger className="border-prime/40 bg-bg">
          <SelectValue className="px-3 py-4" placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((e, i) => (
            <SelectItem key={i} value={e.split(" ").join("_").toLowerCase()}>
              {e}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
