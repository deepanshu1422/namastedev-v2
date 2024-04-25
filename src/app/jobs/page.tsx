import { DataTableDemo, Payment } from "@/components/jobs-comp/data-table-ex";
import Hero from "@/components/jobs-comp/hero";
import prisma from "@/util/prismaClient";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Metadata } from "next";
import { unstable_cache } from "next/cache";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "Job Platform | 30dayscoding",
//     description:
//       "Welcome to Real Work From Anywhere.The only fully location independent job board. We hand pick every job on this site. Live and work anywhere.",
//   };
// }

export const metadata: Metadata = {
  title: "Job Platform | 30dayscoding",
  description:
    "Welcome to Real Work From Anywhere. The only fully location independent job board. We hand pick every job on this site. Live and work anywhere.",
  openGraph: {
    images: "https://i.ibb.co/f2v6nCj/job.webp",
    title: "Job Platform | 30dayscoding",
    description:
      "Welcome to Real Work From Anywhere.The only fully location independent job board. We hand pick every job on this site. Live and work anywhere.",
    url: "https://30dayscoding.com",
    type: "website",
  },
  keywords: ["30 days coding, coding, coding challenges"],
  twitter: {
    card: "summary_large_image",
    images: "https://i.ibb.co/f2v6nCj/job.webp",
    title: "Job Platform | 30dayscoding",
    description:
      "Welcome to Real Work From Anywhere.The only fully location independent job board. We hand pick every job on this site. Live and work anywhere.",
    site: "https://30dayscoding.com",
  },
};

const fetchJobs = unstable_cache(
  async () => {
    const item = await prisma.job.findMany({
      select: {
        title: true,
        category: true,
        company: true,
        location: true,
        jobId: true,
        link: true,
      },
    });
    // if (!item) throw { error: "Not found" };
    return item;
  },
  ["latest-jobs"],
  {
    revalidate: 3600,
  }
);

export default async function Home() {
  const data = await fetchJobs();

  if (!data) return <></>;

  if (data instanceof PrismaClientKnownRequestError) return <></>;

  const newData = data.map((e) => ({ ...e, status: "applied", id: e.jobId }));

  return (
    <main className="mx-auto max-w-[90rem] px-5 md:px-10 lg:px-20 flex flex-col min-h-svh">
      <Hero />
      <DataTableDemo data={newData} />
    </main>
  );
}
