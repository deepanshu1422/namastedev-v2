import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DropDown({
  id,
  children,
}: {
  id: number;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem value={id.toString()}>
      <AccordionTrigger>{children}</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  );
}
