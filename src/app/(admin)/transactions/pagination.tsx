"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function TablePagination({
  total,
  createQueryString,
}: {
  total: number;
  createQueryString: (name: string, value: string) => string;
}) {
  const params = useSearchParams();
  const pages = Math.ceil(total / 10);
  const pathName = usePathname();

  const pageNumber = parseInt(params.get("page") ?? "1");

  return (
    <div className="flex mx-auto gap-2">
      {!!(pageNumber - 1) && (
        <Link
          href={
            pathName + "?" + createQueryString("page", String(pageNumber - 1))
          }
        >
          <Button className="w-fit" variant={"ghost"}>
            {pageNumber - 1}
          </Button>
        </Link>
      )}
      {pageNumber && pages === 1 ? (
        <Badge variant={"secondary"} className="mt-2 rounded">
          No More Pages
        </Badge>
      ) : (
        <Button variant={"outline"}>{pageNumber}</Button>
      )}

      {pageNumber + 1 <= pages && (
        <Link
          href={
            pathName + "?" + createQueryString("page", String(pageNumber + 1))
          }
        >
          <Button className="w-fit" variant={"ghost"}>
            {pageNumber + 1}
          </Button>
        </Link>
      )}

      {/* {pageNumber + 1 <= pages && (
        <PaginationItem>
          <PaginationLink
            href={
              pathName + "?" + createQueryString("page", String(pageNumber + 1))
            }
          >
            {pageNumber + 1}
          </PaginationLink>
        </PaginationItem>
      )} */}
    </div>
  );
}
