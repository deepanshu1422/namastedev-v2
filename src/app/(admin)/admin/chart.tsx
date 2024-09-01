"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { addDays, format, subDays } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import revalidatePages from "../../../../actions/revalidate-pages";

const chartConfig = {
  views: {
    label: "Amount Views",
  },
  transactions: {
    label: "Transactions",
    color: "hsl(var(--chart-1))",
  },
  users: {
    label: "New Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TransactionChart() {
  const { data, isPending } = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const data = await (await fetch("/api/payments")).json();
      return data;
    },
  });

  const [chartData, setChartData] = React.useState<
    {
      date: string | Date;
      transactions: number;
      users: number;
    }[]
  >([
    { date: "2024-07-01", transactions: 0, users: 0 },
    { date: "2024-07-02", transactions: 0, users: 0 },
    { date: "2024-07-03", transactions: 0, users: 0 },
    { date: "2024-07-04", transactions: 0, users: 0 },
    { date: "2024-07-05", transactions: 0, users: 0 },
    { date: "2024-07-06", transactions: 0, users: 0 },
    { date: "2024-07-07", transactions: 0, users: 0 },
    { date: "2024-07-08", transactions: 0, users: 0 },
    { date: "2024-07-09", transactions: 0, users: 0 },
    { date: "2024-07-10", transactions: 0, users: 0 },
    { date: "2024-07-11", transactions: 0, users: 0 },
  ]);

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("transactions");

  const total = React.useMemo(
    () => ({
      transactions: chartData.reduce((acc, curr) => acc + curr.transactions, 0),
      users: chartData.reduce((acc, curr) => acc + curr.users, 0),
    }),
    [chartData]
  );

  React.useEffect(() => {
    if (!isPending) {
      const currentDate = new Date();

      const dataArray: {
        date: string | Date;
        transactions: number;
        users: number;
      }[] = [];

      // console.log(data);

      for (let i = 30; i > -1; i--) {
        let formattedDate = format(subDays(currentDate, i), "yyyy-MM-dd");
        dataArray.push({
          date: formattedDate,
          transactions: data.resultPayments[formattedDate] ?? 0, // Random number for transactions
          users: data.resultUsers[formattedDate] ?? 0, // Random number for users
        });
      }

      setChartData(dataArray);
    }
  }, [data]);

  // function generateDataArray(num: number) {
  //   // Get current date
  //   const currentDate = new Date();

  //   // Generate array of objects
  //   const dataArray: {
  //     date: Date;
  //     transactions: number; // Random number for transactions
  //     users: number;
  //   }[] = [];

  //   for (let i = 0; i < num; i++) {
  //     dataArray.push({
  //       date: addDays(currentDate, i),
  //       transactions: Math.floor(Math.random() * 500), // Random number for transactions
  //       users: Math.floor(Math.random() * 500), // Random number for users
  //     });
  //   }

  //   setChartData(dataArray);
  // }

  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <section className="flex justify-between gap-4 pt-16">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-muted-foreground text-2xl">#</span>Overview
        </h2>
        <Button
          onClick={() => revalidatePages()}
          size={"sm"}
          variant={"destructive"}
        >
          Revalidate Pages
        </Button>
        {/* <div className="flex gap-2 max-sm:w-full">
          <DatePickerWithRange generateDataArray={generateDataArray} />
        </div> */}
      </section>
      <Card>
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>{chartConfig[activeChart].label} Chart</CardTitle>
            <CardDescription>
              Showing total {chartConfig[activeChart].label.toLocaleLowerCase()}{" "}
              for the last {chartData.length} days
            </CardDescription>
          </div>
          <div className="flex">
            {["transactions", "users"].map((key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-xs text-muted-foreground">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </CardHeader>
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={true}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <YAxis />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="views"
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });
                    }}
                  />
                }
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
