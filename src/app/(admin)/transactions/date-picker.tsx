"use client";

import * as React from "react";
import { addDays, format, subDays } from "date-fns";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DatePicker({
  createQueryString,
}: {
  createQueryString: (name: string, value: string) => string;
}) {
  //   const [date, setDate] = useState<DateRange | undefined>({
  //     from: new Date(),
  //     to: addDays(new Date(), 5),
  //   });

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();

  // return (
  //   <div className="sm:w-60 w-full">
  //     <Select
  //       value={params.get("days") ?? "1"}
  //       onValueChange={(value) => {
  //         if (value)
  //           router.push(pathName + "?" + createQueryString("days", value));
  //       }}
  //     >
  //       <SelectTrigger className="bg-card">
  //         <SelectValue placeholder="Select Days" />
  //       </SelectTrigger>
  //       <SelectContent position="popper">
  //         <SelectItem value="1">Today</SelectItem>
  //         <SelectItem value="7">Last 7 Days</SelectItem>
  //         <SelectItem value="30">Last 30 Days</SelectItem>
  //         <SelectItem value="90">Last 90 days</SelectItem>
  //         <SelectItem value="360">Last Year</SelectItem>
  //       </SelectContent>
  //     </Select>
  //   </div>
  // );

  return (
    <div className={cn("grid gap-2 w-full")}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="w-full" asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full sm:w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {/* {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )} */}
            <ChevronDown className="ml-auto h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="flex w-auto flex-col space-y-2 p-2"
          align="start"
        >
          <div className="rounded-md border">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
            />
          </div>
          <Button
            onClick={() => {
              setDateRange({
                from: date?.from,
                to: date?.to,
              });
              setOpen(false);
            }}
            size={"sm"}
            variant={"outline"}
          >
            Apply Dates
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}