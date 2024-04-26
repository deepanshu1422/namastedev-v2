import MobileMenu from "@/components/mobile-menu";
import Navbar from "@/components/home-components/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <MobileMenu /> */}
      <Navbar />
      {children}
    </>
  );
}
