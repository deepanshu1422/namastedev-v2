import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const CodeSnippet = ({ children }: { children: string }) => (
  <div className="md:max-w-full horizontal-scroll w-full bg-slate-500 max-sm:w-[90dvw] font-semibold shrink mt-5">
    <SyntaxHighlighter style={gruvboxDark}>{children}</SyntaxHighlighter>
  </div>
);
