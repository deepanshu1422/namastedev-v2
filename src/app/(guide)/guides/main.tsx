'use client'

import { useState } from "react"
import Hero from "./hero"
import Products from "./products"
import { templates } from "@/util/constants"

export default function Main() {

    const [state, setState] = useState("")

    return (
        <main className="bg-background bg-bg min-h-svh transition-all">
            <Hero
                title="Affordable Pre-built Next.js Web Templates"
                desc="Discover top-notch web design services and premium pre-built Next.js templates. Elevate your online presence with our customizable solutions."
                heroImage="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                search={state}
                setSearch={setState}
            />
            <Products state={state} />
        </main>
    )
}
