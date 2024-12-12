import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Play } from "lucide-react";
import { YTModal } from "@/app/(guide)/testimonials/slider";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
  return (
    <div
      className={`relative flex-1 overflow-hidden aspect-video bg-background/20 max-w-[700px] w-full rounded-xl shadow-inner transition-all duration-500 mt-7`}
    >
      <iframe
        className="h-full w-full left-0 top-0 absolute"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export function VideoModal({
  yt,
  children,
}: {
  yt: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      onClick={() => setOpen(true)}
      className="relative group cursor-pointer mx-auto w-full"
    >
      {/* <AspectRatio ratio={16 / 9} className="group bg-muted"> */}
        {children}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/40 p-0.5 rounded-full shadow-2xl shadow-black group-active:-translate-y-[58%] group-hover:-translate-y-2/3 transition-transform">
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-full">
            <Play className="w-8 h-8 stroke-[3] fill-white" />
          </div>
        </div>
      {/* </AspectRatio> */}
      <YTModal url={yt} open={open} setOpen={setOpen} />
    </div>
  );
}

export default YoutubeEmbed;
