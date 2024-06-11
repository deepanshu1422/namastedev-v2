'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useAtom } from "jotai"
import { dsaProblems, modalSchema, modalState, requestCode, solved, urlAtom } from "@/lib/jotai"
import { Badge } from "@/components/ui/badge"

type Props = {
  state: {
    title: string;
    problems: ({
      title: string;
      // select: boolean;
      difficulty: string;
      code: string;
      link: string;
      neetcode150?: boolean;
      blind75?: boolean;
      lang: string[];
    })[];
  }[],
  mode: number,
  // setState: any
}

export function ProblemTable({ problems, state, index, mode }: {
  problems: {
    title: string;
    // select: boolean;
    difficulty: string;
    code: string;
    link: string;
    neetcode150?: boolean;
    blind75?: boolean;
    lang: string[];
  }[],
  state: {
    title: string;
    problems: ({
      title: string;
      // select: boolean;
      difficulty: string;
      code: string;
      link: string;
      neetcode150?: boolean;
      blind75?: boolean;
      lang: string[];
    })[];
  }[],
  index: number
  mode: number
}) {

  const [data, setData] = useAtom(solved)
  const [open, setOpen] = useAtom(modalState)
  const [code, setCode] = useAtom(modalSchema)
  const [url, setUrl] = useAtom(urlAtom)

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="hover:bg-slate-600/30 border-slate-600">
          <TableHead className="w-[40px]">Done</TableHead>
          <TableHead>Problems</TableHead>
          <TableHead className="text-right">Difficulty</TableHead>
          <TableHead className="text-right w-[120px]">View Code</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {problems.filter(e => (mode > 1 ? true : e?.neetcode150 === true) && (mode > 0 ? true : e.blind75 === true)).map(({ difficulty, title, link, code, lang }, i) => (
          <TableRow data-state={data.includes(code) && "selected"} className="hover:bg-slate-600/30 border-slate-600" key={i}>
            <TableCell className="font-medium flex items-center justify-center w-[50px]"><Checkbox checked={data.includes(code)} onCheckedChange={(e) => {
              if (data.includes(code)) return setData(data.filter((e) => e !== code))
              setData([...data, code])
            }} /></TableCell>
            <TableCell><Link className="hover:text-primary hover:underline" target="_blank" href={"https://leetcode.com/problems/" + link}>{title}</Link></TableCell>
            <TableCell className="text-right"><Badge className={`uppercase rounded ${difficulty === "easy" && "bg-green-600/50"} ${difficulty === "medium" && "bg-yellow-600/50"} ${difficulty === "hard" && "bg-red-600/50"} `} variant={"secondary"}>{difficulty}</Badge></TableCell>
            <TableCell className="text-right w-[80px]">
              <span className="cursor-pointer text-primary/80 hover:text-primary" onClick={() => {
                setOpen(true)
                setCode({ question: title, languageArray: lang })
                setUrl({
                  code,
                  language: "python",
                  ext: "py"
                })
              }}>
                View Code
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function Problem({ state, mode }: Props) {

  const [data] = useAtom(solved)

  return (
    <Accordion type="single" collapsible className="w-full pt-5 gap-1 flex flex-col">
      {state.map(({ problems, title }, i) => (<AccordionItem key={i} className="bg-card/70" value={`item-${i}`}>
        <AccordionTrigger className="bg-card px-4 flex justify-between w-full rounded-md">
          <span className="flex-1 shrink-0 text-nowrap font-bold">{title}</span>
          <div className="flex gap-2 items-center justify-end w-full mr-2">
            <span>{problems.filter(e => (mode > 1 ? true : e?.neetcode150 === true) && (mode > 0 ? true : e.blind75 === true)).map((e) => e.code).filter(element => data.includes(element)).length}/{problems.filter(e => (mode > 1 ? true : e?.neetcode150 === true) && (mode > 0 ? true : e.blind75 === true)).length}</span>
            <Progress value={((problems.filter(e => (mode > 1 ? true : e?.neetcode150 === true) && (mode > 0 ? true : e.blind75 === true)).map((e) => e.code).filter(element => data.includes(element)).length) / problems.filter(e => (mode > 1 ? true : e?.neetcode150 === true) && (mode > 0 ? true : e.blind75 === true)).length) * 100} className="w-[40%] max-sm:hidden" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="">
          <ProblemTable problems={problems} state={state} index={i} mode={mode} />
        </AccordionContent>
      </AccordionItem>))}
    </Accordion>
  )
}

export default function ChallengesTabs() {

  const dsa = dsaProblems
  const [tab, setTab] = useState(0)

  return (
    <div className="flex flex-col">
      <ul className="flex gap-1 mx-auto bg-muted p-1 rounded-md">
        <li>
          <label onClick={() => setTab(0)} htmlFor="hosting-small" className={`inline-flex items-center justify-between w-fit p-2 max-sm:text-xs sm:px-7 rounded cursor-pointer bg-card transition-all duration-200 ${tab === 0 ? "bg-second text-white" : "text-gray-500"}`}>
            <div className="block">
              <div className="w-full md:text-lg font-semibold">🧠 Blind 75</div>
            </div>
          </label>
        </li>
        <li>
          <label onClick={() => setTab(1)} htmlFor="hosting" className={`inline-flex items-center justify-between w-fit p-2 max-sm:text-xs sm:px-7 rounded cursor-pointer bg-card transition-all duration-200 ${tab === 1 ? "bg-second text-white" : "text-gray-500"}`}>
            <div className="block">
              <div className="w-full md:text-lg font-semibold">🚀 30DC 150</div>
            </div>
          </label>
        </li>
        <li>
          <label onClick={() => setTab(2)} htmlFor="hosting-big" className={`inline-flex items-center justify-between w-fit p-2 max-sm:text-xs sm:px-7 rounded cursor-pointer bg-card transition-all duration-200 ${tab === 2 ? "bg-second text-white" : "text-gray-500"}`}>
            <div className="block">
              <div className="w-full md:text-lg font-semibold">🌍 30DC All</div>
            </div>
          </label>
        </li>
      </ul>
      <Problem state={dsa} mode={tab} />
    </div>
  )
}
