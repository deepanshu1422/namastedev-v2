import Reveal from "../framer/reveal";
import { CarouselHorizontail } from "./carousel-horizontal";

export default function Mid({
  blogs,
}: {
  blogs: {
    title: string;
    slug: string;
    description: string;
    heroImage: {
      url: string;
      alt: string;
    } | null;
  }[];
}) {
  return (
    <div className="m-auto px-5">
      <Reveal>
        <CarouselHorizontail blogs={blogs} />
      </Reveal>
    </div>
  );
}
