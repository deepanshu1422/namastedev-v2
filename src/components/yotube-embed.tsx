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

export default YoutubeEmbed;