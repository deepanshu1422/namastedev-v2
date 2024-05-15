import { Metadata } from "next";
import Jobs from "./jobs";
import { DataTableDemo, Payment } from "@/components/jobs-comp/data-table-ex";
import prisma from "@/util/prismaClient";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { unstable_cache } from "next/cache";
import Hero from "./hero";

export const metadata: Metadata = {
  title: "30DC Job Platform | 30dayscoding",
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

// const fetchJobs = unstable_cache(
//   async () => {
//     const item = await prisma.job.findMany({
//       select: {
//         title: true,
//         category: true,
//         company: true,
//         location: true,
//         jobId: true,
//         link: true,
//       },
//     });
//     // if (!item) throw { error: "Not found" };
//     return item;
//   },
//   ["latest-jobs"],
//   {
//     revalidate: 3600,
//   }
// );

export type Jobs = {
  id: number;
  title: string;
  created_at: string;
  logoURL: string;
  company: string;
  link: string;
  max_payout_usd: number;
  job_type: string;
  skill_level: string;
  technologies: string;
  primary_technology: string;
  payout_type: string;
  collected_from: string;
};

async function fetchJobs(): Promise<Jobs[]> {
  const res = await fetch(
    "https://ymvrvflqdntrjzeartqh.supabase.co/rest/v1/jobs?select=id%2Ctitle%2Ccreated_at%2ClogoURL%2Ccompany%2Clink%2Cmax_payout_usd%2Csticky%2Ccountry_iso%2Cviews%2Cjob_type%2Cskill_level%2Ctechnologies%2Cprimary_technology%2Cpayout_type%2Ccollected_from%2Cdescription%2Cslug&order=created_at.desc&title=neq.test&offset=0&limit=20&remote=eq.true&published=eq.true",
    {
      headers: {
        "accept-profile": "public",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdnJ2ZmxxZG50cmp6ZWFydHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3OTEyOTUsImV4cCI6MjAxNTM2NzI5NX0.YaInQcmHDqg-6q-dv1NLS-G_Wg2K1LZL26GS3sFSPYI",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdnJ2ZmxxZG50cmp6ZWFydHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3OTEyOTUsImV4cCI6MjAxNTM2NzI5NX0.YaInQcmHDqg-6q-dv1NLS-G_Wg2K1LZL26GS3sFSPYI",
        origin: "https://crackeddevs.com",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await fetchJobs();

  if (!data) return <></>;

  // if (data instanceof PrismaClientKnownRequestError) return <></>;

  // const newData = data.map((e) => ({ ...e, status: "applied", id: e.jobId }));

  return (
    <main className="w-full flex flex-col">
      <Hero />
      <div className="mx-auto w-full max-w-[90rem] px-4 lg:px-8 py-8">
        <DataTableDemo data={data} />
      </div>
    </main>
  );
}
