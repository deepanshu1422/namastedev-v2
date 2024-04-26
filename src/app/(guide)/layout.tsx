import Menu from "./menu";

export default function GuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Menu /> */}
      {children}
    </div>
  );
}
