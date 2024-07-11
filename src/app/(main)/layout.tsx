import MobileMenu from "@/components/mobile-menu";
import Navbar from "@/components/home-components/navbar";
import { Toaster } from "sonner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <MobileMenu /> */}
      <Toaster richColors />
      <Navbar />
      {children}
    </>
  );
}
