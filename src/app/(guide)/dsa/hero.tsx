'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RESET } from "jotai/utils";
import { Search, Trash } from "lucide-react";

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
import { solved } from "@/lib/jotai";
import { useAtom } from "jotai";

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
  return (
    <div className="w-full bg-bg bg-dot-white/[0.3] relative flex items-center px-4 pt-14 pb-5 lg:px-8">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-col items-center gap-3 relative z-10 w-full max-w-6xl mx-auto text-center">
        <h1 className="font-bric text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-800 max-w-2xl">
          The only DSA tracking sheet you NEED!
        </h1>
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          <p className="max-w-xl md:max-w-3xl max-sm:text-sm sm:text-lg text-muted-foreground">
            Explore our DSA code platform for mastering Data Structures and Algorithms. Access a wide range of DSA tutorials, practice problems, and coding challenges.
          </p>
          <div className="flex-1 w-full flex gap-2 justify-center">
            <div className="relative w-full md:w-2/3 max-w-lg">
              <Search className="absolute left-2.5 top-[30%] h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search problems..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
            <ClearAll>
              <Button variant={"destructive"} className="px-2" ><Trash className="h-4 w-4 mr-2" />Clear Progress</Button>
            </ClearAll>
          </div>
        </div>
      </div>
    </div>
  );
}
