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
                src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
            />
            <df-messenger
                chat-title="30DaysCoding-Whatsapp"
                agent-id="9188433f-f330-4953-801d-893c5f83f68d"
                language-code="en"
            ></df-messenger>
        </>
    );
}
