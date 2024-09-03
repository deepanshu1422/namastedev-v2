import Script from "next/script";

export default function AdSense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4345704029198953"
    />
  );
}

export function SquareAD() {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4345704029198953"
        data-ad-slot="9034714151"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script
        dangerouslySetInnerHTML={{
          __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
    </>
  );
}

export function FooterAD() {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-4345704029198953"
        data-ad-slot="6408550814"
      ></ins>
      <Script
        dangerouslySetInnerHTML={{
          __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
    </>
  );
}
