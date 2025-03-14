export default function Video({
  title,
  desc,
  youtubeId,
}: {
  title: string;
  desc: string;
  youtubeId: string;
}) {
  return (
    <div className="m-auto flex max-lg:flex-col items-start justify-between p-10 lg:p-20 lg:pb-5 pb-5 gap-5 lg:gap-10 max-w-[75rem]">
      <div className="lg:w-2/4 grid gap-3 lg:gap-5 shrink">
        <span className="text-prime font-semibold uppercase"></span>
        <span className="text-3xl lg:text-4xl font-bold">{title}</span>
        <p className="text-lg max-tab:text-[1.05rem]">{desc}</p>
      </div>
      <div className="lg:w-2/4 w-full shrink-0 flex-1">
        <div
          className={`relative overflow-hidden max-md:min-h-20 max-lg:min-h-80 lg:min-h-64 bg-background/20 rounded-md shadow-inner transition-all duration-500 aspect-video`}
        >
          <iframe
            className="h-full w-full left-0 top-0 absolute"
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
}
