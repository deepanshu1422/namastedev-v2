"use client";

import Script from "next/script";
import React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'df-messenger': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export default function Dialogflow() {
    return (
        <>
            <Script

                src='//in.fw-cdn.com/32051950/1092317.js'

            />

        </>
    );
}