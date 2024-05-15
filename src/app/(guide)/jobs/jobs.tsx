import { DataTableDemo, Payment } from "@/components/jobs-comp/data-table-ex";
import Hero from "@/components/jobs-comp/hero";

export default async function Jobs({ data }: { data: any }) {
  return (
    <main className="mx-auto max-w-[90rem] px-5 md:px-10 lg:px-20 flex flex-col min-h-svh">
      <Hero />
      <DataTableDemo data={data} />
    </main>
  );
}
