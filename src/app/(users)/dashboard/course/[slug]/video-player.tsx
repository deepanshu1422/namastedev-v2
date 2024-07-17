'use client'

import React from "react"

import dynamic from 'next/dynamic'
import "plyr-react/plyr.css";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

export default function Player({ src }: { src: string }) {

    return <Plyr
        // ref={ref}
        source={{
            type: "video",
            sources: [{ src, provider: "youtube", }],
        }}
    />

}