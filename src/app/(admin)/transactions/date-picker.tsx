"use client";
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

  const router = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();

  return (
    <div className="sm:w-60 w-full">
      <Select
        value={params.get("days") ?? "1"}
        onValueChange={(value) => {
          if (value)
            router.push(pathName + "?" + createQueryString("days", value));
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Days" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="1">Today</SelectItem>
          <SelectItem value="7">Last 7 Days</SelectItem>
          <SelectItem value="30">Last 30 Days</SelectItem>
          <SelectItem value="90">Last 90 days</SelectItem>
          <SelectItem value="360">Last Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
