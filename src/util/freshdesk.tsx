"use client";

import Script from "next/script";

export default function Freshdesk() {
    return (
        <Script
            src="//in.fw-cdn.com/32051950/1092317.js"
            strategy="afterInteractive"
            data-chat="true"
        />
    );
}
