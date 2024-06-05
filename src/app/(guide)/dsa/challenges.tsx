'use client'

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
import { Dispatch, SetStateAction, useState } from "react"

type Props = {
  state: {
    invoice: string;
    paymentStatus: string;
    paymentMethod: string;
    select: boolean;
  }[],
  setState: Dispatch<SetStateAction<{
    invoice: string;
    paymentStatus: string;
    paymentMethod: string;
    select: boolean;
  }[]>>
}

export function TableDemo({ state, setState }: Props) {

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
        {state.map((invoice, index) => (
          <TableRow data-state={invoice.select && "selected"} className="hover:bg-slate-600/30 border-slate-600" key={invoice.invoice}>
            <TableCell className="font-medium flex items-center justify-center w-[50px]"><Checkbox checked={invoice.select} onCheckedChange={(e) => { setState(state.map((ele, i) => index === i ? { ...ele, select: Boolean(e) } : ele)) }} /></TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell className="text-right">{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right w-[120px] text-primary"><Link href={"#"}>View Code</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function AccordionDemo({ state, setState }: Props) {
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
          <TableDemo state={state} setState={setState} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default function ChallengesTabs() {

  const [invoices, setInvoices] = useState([
    {
      invoice: "INV001",
      paymentStatus: "Problem Statement",
      paymentMethod: "Easy",
      select: false
    },
    {
      invoice: "INV002",
      paymentStatus: "Problem Statement",
      paymentMethod: "Easy",
      select: false
    },
    {
      invoice: "INV003",
      paymentStatus: "Problem Statement",
      paymentMethod: "Easy",
      select: false
    },
    {
      invoice: "INV004",
      paymentStatus: "Problem Statement",
      paymentMethod: "Easy",
      select: false
    },
    {
      invoice: "INV005",
      paymentStatus: "Problem Statement",
      paymentMethod: "Easy",
      select: false
    },
    {
      invoice: "INV006",
      paymentStatus: "Problem Statement",
      paymentMethod: "Easy",
      select: false
    },
    {
      invoice: "INV007",
      paymentStatus: "Problem Statement",
      paymentMethod: "Easy",
      select: false
    },
  ])

  return (
    <Tabs defaultValue="blind" className="pt-10">
      <TabsList className="flex gap-2 w-full max-w-3xl mx-auto bg-card">
        <TabsTrigger className="flex-1" value="blind">🧠 Blind 75</TabsTrigger>
        <TabsTrigger className="flex-1" value="150">🚀 30DC 150</TabsTrigger>
        <TabsTrigger className="flex-1" value="all">🌍 30DC All</TabsTrigger>
      </TabsList>
      <TabsContent value="blind">
        <AccordionDemo state={invoices} setState={setInvoices} />
      </TabsContent>
      {/* <TabsContent value="150">
        <AccordionDemo />
      </TabsContent>
      <TabsContent value="all">
        <AccordionDemo />
      </TabsContent> */}
    </Tabs>
  )
}
