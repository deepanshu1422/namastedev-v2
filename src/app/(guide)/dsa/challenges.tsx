import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// "use client"

// import * as React from "react"

import { Progress } from "@/components/ui/progress"

// export function ProgressDemo() {
//   const [progress, setProgress] = React.useState(13)

//   React.useEffect(() => {
//     const timer = setTimeout(() => setProgress(66), 500)
//     return () => clearTimeout(timer)
//   }, [])

//   return <Progress value={progress} className="w-[60%]" />
// }

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Problem Statement",
    paymentMethod: "Easy",
  },
  {
    invoice: "INV002",
    paymentStatus: "Problem Statement",
    paymentMethod: "Easy"
  },
  {
    invoice: "INV003",
    paymentStatus: "Problem Statement",
    paymentMethod: "Easy",
  },
  {
    invoice: "INV004",
    paymentStatus: "Problem Statement",
    paymentMethod: "Easy",
  },
  {
    invoice: "INV005",
    paymentStatus: "Problem Statement",
    paymentMethod: "Easy"
  },
  {
    invoice: "INV006",
    paymentStatus: "Problem Statement",
    paymentMethod: "Easy",
  },
  {
    invoice: "INV007",
    paymentStatus: "Problem Statement",
    paymentMethod: "Easy",
  },
]

export function TableDemo() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="hover:bg-slate-600/30 border-slate-600">
          <TableHead className="w-[40px]">Done</TableHead>
          <TableHead>Problem</TableHead>
          <TableHead className="text-right">Difficulty</TableHead>
          <TableHead className="text-right w-[120px]">View Code</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow className="hover:bg-slate-600/30 border-slate-600" key={invoice.invoice}>
            <TableCell className="font-medium flex items-center justify-center w-[50px]"><Checkbox /></TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell className="text-right">{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right w-[120px] text-primary"><Link href={"#"}>View Code</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full pt-5">
      <AccordionItem className="bg-muted/50" value="item-1">
        <AccordionTrigger className="bg-card px-4 flex justify-between w-full">
          <span className="flex-1 shrink-0 text-nowrap font-extrabold font-bric">Arrays & Hashing</span>
          <div className="flex gap-2 items-center justify-end w-full">
            <span>60/100</span>
            <Progress value={60} className="w-[40%]" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4">
          <TableDemo />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-muted/50" value="item-2">
        <AccordionTrigger className="bg-card px-4 flex justify-between w-full">
          <span className="flex-1 shrink-0 text-nowrap font-extrabold font-bric">Two Pointers</span>
          <div className="flex gap-2 items-center justify-end w-full">
            <span>12/20</span>
            <Progress value={60} className="w-[40%]" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4">
          <TableDemo />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="bg-muted/50" value="item-3">
        <AccordionTrigger className="bg-card px-4 flex justify-between w-full">
          <span className="flex-1 shrink-0 text-nowrap font-extrabold font-bric">Slider Window</span>
          <div className="flex gap-2 items-center justify-end w-full">
            <span>6/10</span>
            <Progress value={60} className="w-[40%]" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-4">
          <TableDemo />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function ChallengesTabs() {
  return (
    <Tabs defaultValue="blind" className="pt-10">
      <TabsList className="flex gap-2 w-full max-w-3xl mx-auto bg-card">
        <TabsTrigger className="flex-1" value="blind">🧠 Blind 75</TabsTrigger>
        <TabsTrigger className="flex-1" value="150">🚀 30DC 150</TabsTrigger>
        <TabsTrigger className="flex-1" value="all">🌍 30DC All</TabsTrigger>
      </TabsList>
      <TabsContent value="blind">
        <AccordionDemo />
      </TabsContent>
      <TabsContent value="150">
        <AccordionDemo />
      </TabsContent>
      <TabsContent value="all">
        <AccordionDemo />
      </TabsContent>
    </Tabs>
  )
}
