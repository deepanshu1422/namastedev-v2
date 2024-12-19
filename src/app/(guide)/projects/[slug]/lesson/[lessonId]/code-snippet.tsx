"use client";
import React, { useState } from "react";
import { Check, Copy, CopyCheck } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime, nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MDXClient } from "next-mdx-remote-client/csr";
// import { MDXClient } from "next-mdx-remote-client/csr";

export default function CodeSnippet({ children, language }: { children: string, language: string }) {
  const [copy, setCopy] = useState(false);

  function copyCode() {
    setCopy(true);
    navigator.clipboard.writeText(children);
    setTimeout(() => setCopy(false), 2000);
  }

  return (
    <div className="relative">
      <SyntaxHighlighter
        wrapLines={true}
        wrapLongLines={true}
        style={nightOwl}
        language={language}
        PreTag="div"
      >
        {children}
      </SyntaxHighlighter>
      <button
        disabled={copy}
        onClick={copyCode}
        className="p-2 rounded-md bg-black/30 hover:bg-black/50 transition-all border border-white/30 text-xs absolute top-2 right-2"
      >
        {copy ? (
          <Check className="w-5 h-5 text-prime" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export function Markdown({ content }: { content: string }) {
  return <MDXClient compiledSource={content} />;
}
