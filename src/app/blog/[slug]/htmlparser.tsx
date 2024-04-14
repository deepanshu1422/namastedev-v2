import parse from "html-react-parser";

export default function HtmlParser({ body }: { body: string }) {
  return parse(body);
}
