"use client";
import Intercom from "@intercom/messenger-js-sdk";
import Script from "next/script";

export default function IntercomBTN() {
  return (
    <Script
    id="intercom"
      dangerouslySetInnerHTML={{
        // @ts-ignore
        __html: Intercom({
          app_id: "tyqouhrx",
        }),
      }}
    />
  );
}
