import MobileMenu from "@/components/mobile-menu";
import BundleNavbar from "@/components/BundleNavbar";
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
      <BundleNavbar />
      {children}
      <Footer />
    </>
  );
}
