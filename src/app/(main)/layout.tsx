import MobileMenu from "@/components/mobile-menu";
import Navbar from "@/components/home-components/navbar";
import Footer from "@/components/new-cohort/footer";
import { Toaster } from "sonner";

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
      <Footer />
    </>
  );
}
