import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function CourseList() {
  const modules = [
    {
      title: "Course Introduction",
      chapters: [
        "Introdction",
        "Download Postman",
        "Setting and Preferences",
        "Postman Interface",
      ],
    },
    {
      title: "Basics of Blender 3D",
      chapters: [
        "Introdction",
        "Download Postman",
        "Setting and Preferences",
        "Postman Interface",
      ],
    },
    {
      title: "Mesh Modeling",
      chapters: [
        "Introdction",
        "Download Postman",
        "Setting and Preferences",
        "Postman Interface",
      ],
    },
  ];
  return (
    <Accordion
      defaultValue="module-0"
      type="single"
      collapsible
      className="flex flex-col w-full gap-2"
    >
      {modules.map(({ chapters, title }, i) => (
        <AccordionItem key={i} value={`module-${i}`}>
          <AccordionTrigger className="text-white/70 transition-all duration-300 py-2 text-xs [&[data-state=open]>span]:text-white">
            <span>{title}</span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3 text-xs py-2">
            {chapters.map((chapterTitle, i) => (
              <button
                key={i}
                className="flex gap-2 items-center justify-between"
              >
                <div className="flex gap-2 items-center">
                  <div className="h-6 w-6 border-[1.5px] border-white/40 rounded-full grid place-items-center">
                    {i + 1}
                  </div>
                  {chapterTitle}
                </div>
                {i === 0 && (
                  <Badge className="px-2 text-xs font-normal text-white w-fit bg-prime/40 hover:bg-prime/60 rounded">
                    Free
                  </Badge>
                )}
              </button>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
