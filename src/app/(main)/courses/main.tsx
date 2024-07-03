'use client'

import { Suspense, useState } from "react"
import Hero from "./hero"
import Courses, { CourseSkeleton } from "./courses"
import type { CoursesType } from "./page"

export default function Main({ courses }: { courses: CoursesType }) {

    const [state, setState] = useState("")

    return (
        <main className="bg-background bg-bg min-h-svh transition-all">
            <Hero
                title="Online 30DC Courses | MERN, Blockchain, DSA, AI & More"
                desc="Advance your development skills with our comprehensive online courses. Learn MERN Stack, Blockchain, Data Structures & Algorithms, AI, and more from industry experts."
                heroImage="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                search={state}
                setSearch={setState}
            />
            <Suspense fallback={<CourseSkeleton />}>
                <Courses state={state} courses={courses} />
            </Suspense>
        </main>
    )
}
