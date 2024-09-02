"use client";

import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { exportPaymets } from "../../../../actions/admin";

export default function ExportBTN({
  query,
}: {
  query: {
    q: string | null;
    days: string | null;
    status: string | null;
    course: string | null;
    page: string | null;
  };
}) {
  const [disable, setDisable] = useState(false);

  async function exportData() {
    setDisable(true);
    const data = await exportPaymets(query);
    new CSVDownload({
      data: data.data,
      filename: `30DC Repost ${Date.now().toLocaleString}`,
    });
    setDisable(false);
  }

  return (
    <Button
      disabled={disable}
      onClick={exportData}
      variant={"outline"}
      size={"sm"}
      className="max-sm:flex-1 gap-1 h-10"
    >
      <File className="h-4 w-4" /> Export
    </Button>
  );
}
