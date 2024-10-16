import { VideoModal } from "@/components/yotube-embed";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

export default function TestimonyVideo() {
  return (
    <section className="flex flex-col gap-4">
      {/* <div className="flex flex-col gap-1">
        <h2 className="font-bold text-xl tab:text-2xl">
          What you&apos;ll make
        </h2>
        <p className="text-sm text-pretty text-muted-foreground">
          Add more creative value to your portfolio💡
        </p>
      </div> */}
      {/* {projectsCollection.items.map(({ content, coverImage, title }, i) => ( */}
      <div className="grid tab:grid-cols-2 gap-4 tab:gap-3 bg-second/50 rounded-lg py-4 tab:py-6 px-4 tab:pl-6">
        <div className="max-tab:order-last flex flex-col gap-3">
          <h3 className="drop-shadow-[0px_0px_15px_#07928170] [text-shadow:_3px_3px_#031211] text-center m-auto font-bold text-xl tab:text-2xl">
            &lsquo;The best investment you can make today.&rsquo;
          </h3>
          <div className="flex flex-col gap-1 pr-5">
            {/* {content.map((e, i) => (
              <span key={i} className="flex gap-2 items-center text-sm">
                <CheckCheck className="h-5 w-5 text-prime shrink-0" />
                {e}
              </span>
            ))} */}
          </div>
        </div>
        <div className="my-auto">
          <VideoModal yt="UFMiRRNd1FI">
            <Image
              src={"/mentorship.jpg"}
              alt={"30DC Project Preview"}
              height={600}
              width={900}
              className="rounded-s-lg w-full tab:h-4/5 my-auto shadow-xl shadow-black/50 object-cover"
            />
          </VideoModal>
        </div>
      </div>
      {/* ))} */}
    </section>
  );
}
