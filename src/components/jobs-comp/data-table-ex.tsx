"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ArrowUpRightSquare,
  CalendarDays,
  ChevronDown,
  Globe,
  GraduationCap,
  Link as Lnk,
  MapPin,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Jobs } from "@/app/(guide)/jobs/page";
import Image from "next/image";
import { Modal } from "@/app/(guide)/jobs/modal";
import AnimatedButton from "../animated-button";

export type Payment = {
  id: string;
  company: string;
  location: string;
  title: string;
  category: string;
  link: string;
};

export const columns: ColumnDef<Jobs>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          // className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Designation
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Image
          src={
            row.original?.logoURL ||
            "https://play-lh.googleusercontent.com/y4bswMT02OROjzOPa5zDGsnXX5-cBABjF93j26seJH2cEHD4PuBW1d5VvwfYleeKf4_X"
          }
          loader={() =>
            row.original?.logoURL ||
            "https://play-lh.googleusercontent.com/y4bswMT02OROjzOPa5zDGsnXX5-cBABjF93j26seJH2cEHD4PuBW1d5VvwfYleeKf4_X"
          }
          alt={row.original?.company || "Upwork"}
          height={40}
          width={40}
        />
        <span>{row.getValue("title")}</span>
      </div>
      // <div className="lowercase">{row.getValue("location") || "dsadsa"}</div>
    ),
  },
  {
    accessorKey: "job_type",
    header: () => <span className="hidden sm:table-cell">Job Type</span>,
    cell: ({ row }) => (
      <Badge
        variant={"secondary"}
        className="hidden sm:table-cell bg-prime/30 hover:bg-prime/50 capitalize"
      >
        {row.getValue("job_type") ?? "Unknow"}
      </Badge>
    ),
  },
  {
    accessorKey: "skill_level",
    header: () => <span className="hidden sm:table-cell">Job Level</span>,
    cell: ({ row }) => (
      <div className="hidden sm:flex gap-1 capitalize">
        <GraduationCap className="h-4 w-4" />
        {row.getValue("skill_level")}
      </div>
    ),
  },
  {
    accessorKey: "company",
    enableHiding: true,
    header: ({ column }) => {
      return (
        <Button
          className="hidden sm:flex"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="hidden sm:flex gap-1 items-center">
        <Globe className=" h-4 w-4" />
        <div className="capitalize">{row.getValue("company") ?? "Upwork"}</div>
      </div>
    ),
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-left hidden sm:table-cell">Date</div>,
    // ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       Location
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
    cell: ({ row }) => (
      <div className="hidden sm:flex gap-1 items-center">
        <CalendarDays className="-translate-y-0.5 h-4 w-4" />
        {new Date(row.getValue("created_at")).toLocaleDateString()}
      </div>
      // <div className="lowercase">{row.getValue("location") || "dsadsa"}</div>
    ),
  },
  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"));

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);

  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const link = row.original;

      return (
        <Link href={link.link} target="_blank">
          <Button
            variant="link"
            className="h-8 w-8 p-0 rounded-full bg-head/20 hover:scale-105 transition-all"
          >
            {/* <span className="sr-only">Open menu</span> */}
            <ArrowUpRightSquare className="h-5 w-5" />
          </Button>
        </Link>
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuItem
        //       onClick={() => navigator.clipboard.writeText(payment.id)}
        //     >
        //       Copy Job ID
        //     </DropdownMenuItem>
        //     {/* <DropdownMenuSeparator />
        //     <DropdownMenuItem>View customer</DropdownMenuItem>
        //     <DropdownMenuItem>View payment details</DropdownMenuItem> */}
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo({ data }: { data: Jobs[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full pb-10 shrink">
      <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-2 py-4">
        <Input
          placeholder="Filter designation..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="sm:max-w-sm ring-prime"
        />
        <Link href={"https://forms.zohopublic.in/projectsnightlight/form/JobApplication/formperma/MWL5md1g-C2xr4RuhPFkIj8DUy9h04g9Kv16x8ZySIQ"} target={"_blank"} className="max-sm:w-full">
          <div className="group relative w-full">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-[200%_auto] animate-[gradient_2s_linear_infinite] opacity-75 blur group-hover:opacity-100"></div>
            <Button
              variant={"outline"}
              className={`font-semibold text-foreground/80 hover:text-foreground relative w-full text-sm px-3 py-2`}
            >Get Hired with Us
            </Button>
          </div>
        </Link>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto bg-prime/50 hover:bg-prime/70"
            >
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: any) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="rounded-md border border-prime/40">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        {/* <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div> */}
      </div>
    </div>
  );
}
