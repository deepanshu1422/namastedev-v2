import Reveal from "../framer/reveal";
import { CarouselHorizontail } from "./carousel-horizontal";

export default function Mid({
  blogs,
}: {
  blogs: {
    title: string;
    slug: string;
    metaDescription: string;
    heroImage: {
      title: string;
      description: string;
      url: string;
      height: number;
      width: number;
    };
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
