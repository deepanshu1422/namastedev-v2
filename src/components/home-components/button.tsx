type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button
      className={`font-jakarta flex items-center font-semibold gap-1 hover:bg-prime/80 bg-prime/60 transition-all px-4 sm:px-16 py-2.5 rounded-md sm:w-full`}
    >
      <span className="text-sm">{children}</span>
    </button>
  );
}
