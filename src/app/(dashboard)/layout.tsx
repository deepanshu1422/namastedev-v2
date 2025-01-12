import { SessionProvider } from "next-auth/react";
import Menu from "./menu";
import { auth } from "@/auth";
import Footer from "@/components/new-cohort/footer";

export default async function GuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div>{children}</div>
      <Footer />
    </SessionProvider>
  );
}
