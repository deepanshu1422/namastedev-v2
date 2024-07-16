'use client'

import { usePlyr } from "plyr-react"
import React from "react"

import dynamic from 'next/dynamic'
import "plyr-react/plyr.css";
import { useRef } from 'react';

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

export default function Player({ src }: { src: string }) {

    const ref = useRef()
    // const plyrRef = usePlyr(ref, {
    //     source: {
    //         type: "video"
    //     }
    // })

    return <Plyr
        // ref={ref}
        style={{height: "130px"}}
        source={{
            type: "video",
            sources: [{ src, provider: "youtube" }],
        }}
    />

}

// const Plyr = React.forwardRef((props, ref: Ref<APITypes>) => {
//     // const { source, options = null, ...rest } = props
//     const raptorRef = usePlyr(ref, {
//         source: {}
//     })
//     return <video ref={raptorRef} className="plyr-react plyr" />
// })

// export default Plyr