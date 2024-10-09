'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RESET } from "jotai/utils";
import { Binary, Search, Trash } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { solved, searchProblems, modalState, modalSchema, urlAtom } from "@/lib/jotai";
import { useAtom } from "jotai";
import { useState } from "react";
import Link from "next/link";

export function ClearAll({ children }: { children: React.ReactNode }) {

  const [sol, setSol] = useAtom(solved)
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Really, you wanna do this?</AlertDialogTitle>
          <AlertDialogDescription>
            There is no turning back from this, if you proceed furthur then you will for sure losse your progress track.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setSol(RESET)} className="bg-red-600 text-white hover:bg-red-700">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}


export default function Hero() {

  const [search, setSearch] = useState("")
  const [open, setOpen] = useAtom(modalState)
  const [code, setCode] = useAtom(modalSchema)
  const [url, setUrl] = useAtom(urlAtom)

  return (
    <div className="w-full bg-bg bg-dot-white/[0.3] relative flex items-center px-4 pt-14 pb-5 lg:px-8">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col items-center gap-3 relative z-10 w-full max-w-6xl mx-auto text-center">
        <h1 className="font-bric text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 max-w-2xl">
          Revise Data Structures and Algorithms
        </h1>
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          <p className="max-w-xl md:max-w-3xl max-sm:text-sm sm:text-lg text-muted-foreground">
            Practice, revise, and ace your interviews with our comprehensive DSA tracking sheet.
          </p>
          <div className="flex-1 w-full flex gap-2 justify-center relative">
            <div className="relative w-full md:w-2/3 max-w-lg h-fit">
              <Search className="absolute left-2.5 top-[30%] h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                value={search}
                placeholder="Search problems..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {search && <div className="max-w-[41rem] w-full min-h-10 absolute top-11 bg-background rounded-md flex flex-col gap-1.5 p-2">{searchProblems.filter(problem =>
              problem.title.toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ).slice(0, 5).map(({ title, problemType, link, code, langs }, i) => <div key={i} className="flex justify-between bg-muted/40 rounded-md">
              <Link target="_blank" href={"https://leetcode.com/problems/" + link} className="flex flex-1 flex-col items-start text-start group p-2">
                <span className="text-muted-foreground font-bold text-xs">{problemType}</span>
                <span className="text-foreground font-semibold text-sm group-hover:text-primary transition-all duration-300">{title}</span>
              </Link>
              <button onClick={() => {
                setOpen(true)
                setCode({ question: title, languageArray: langs })
                setUrl({
                  code,
                  language: "python",
                  ext: "py"
                })
              }} className="p-2 bg-second/40 rounded-md group">
                <Binary className="h-6 w-6 text-primary group-hover:scale-125 transition-all duration-300" />
              </button>
            </div>)}</div>}
            <ClearAll>
              <Button variant={"destructive"} className="px-2" ><Trash className="h-4 w-4 mr-2" />Clear Progress</Button>
            </ClearAll>
          </div>
        </div>
      </div>
    </div>
  );
}
