import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookmarkIcon,
  Clock3,
  CodeSquare,
  DownloadCloud,
  FileText,
  Laptop2,
  Link2,
  PlaySquare,
  TimerIcon,
} from "lucide-react";

const icons = {
  video: <PlaySquare className="h-6 w-6 shrink-0 stroke-[1.5]" />,
  file: <FileText className="h-6 w-6 shrink-0 stroke-[1.5]" />,
  cloud: <DownloadCloud className="h-6 w-6 shrink-0 stroke-[1.5]" />,
  code: <CodeSquare className="h-6 w-6 shrink-0 stroke-[1.5]" />,
  link: <Link2 className="h-6 w-6 shrink-0 stroke-[1.5]" />,
};

export function SubCourse({
  title,
  time,
  type,
  preview=null
}: {
  title: string;
  time?: string;
  type: "video" | "file" | "cloud" | "code" | "link";
  preview?: string | null
}) {
  return (
    <div className="flex lg:items-center max-lg:flex-col justify-between transition-all bg-white/5 gap-3 px-4 py-1 text-foreground/70">
      <div className="flex items-center gap-2">
        {icons[type ?? "video"]} <h3 className="text-sm">{title}</h3>
      </div>
      {time && (
        <section className="flex gap-2 items-end">
          {preview && <button className="text-prime hover:underline font-medium">Preview</button>}
          <span className="flex items-center gap-1.5 lg:mr-10 max-lg:px-2 max-lg:py-1 max-lg:bg-slate-300/30 rounded-lg">
            <Clock3 className="h-4 w-4" />
            {time}
          </span>
        </section>
      )}
    </div>
  );
}

export function Collapsible({
  title,
  session = 0,
  time,
  children,
}: {
  title: string;
  session?: number;
  time?: string;
  children: React.ReactNode;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="bg-white/5 lg:hover:opacity-70 px-1 py-2 border border-gray-300/30 rounded-lg data-[state=open]:border-b-0 data-[state=open]:rounded-b-none">
          {/* <BookmarkIcon className="h-8 w-8 stroke-1" /> */}
          <div className="flex items-center justify-between w-full gap-1 px-2">
            <span className={"font-jakarta text-start"}>
              {title}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 h-fit shrink-0 text-sm">
              {session} Lessons
            </span>
            {/* <div className="flex gap-2 font-semibold text-foreground/70 text-sm items-center">
                <span className="flex items-center gap-1.5">
                  <Laptop2 className="h-5 w-5" />
                  {session}
                </span>
                {time && (
                  <>
                    <hr className="rotate-90 w-3 border border-foreground/70" />
                    <span className="flex items-center gap-1.5">
                      <TimerIcon className="h-5 w-5" />
                      {time}
                    </span>
                  </>
                )}
              </div> */}
          </div>
        </AccordionTrigger>
        <AccordionContent className="dark:bg-transparent bg-transparent border border-b-gray-300/30 border-x-gray-300/30 rounded-b-lg pb-0">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
