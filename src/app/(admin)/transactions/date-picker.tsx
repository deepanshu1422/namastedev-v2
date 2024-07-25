'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addDays, subDays } from "date-fns"
import { useState } from "react"
import { DateRange } from "react-day-picker"

export default function DatePicker() {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 5),
    })

    return (
        <div className="sm:w-60 w-full">
            <Select
            defaultValue="7"
                onValueChange={(value) =>
                    setDate({
                        from: subDays(new Date(), parseInt(value)),
                        to: new Date(),
                    })
                }
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="7">Last 7 Days</SelectItem>
                    <SelectItem value="30">Last 30 Days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="360">Last Year</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
