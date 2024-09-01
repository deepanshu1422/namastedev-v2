"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { getHourlyRevenue } from "../../../../actions/admin";

const chartConfig = {
  time: {
    label: "Amount Views",
  },
  success: {
    label: "Success",
    color: "hsl(var(--chart-1))",
  },
  initiated: {
    label: "Initated",
    color: "hsl(var(--chart-2))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function TxnChart() {
  const { data, isPending } = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const data = await getHourlyRevenue();
      return data;
    },
  });

  const [chartData, setChartData] = React.useState<
    {
      time: string | Date;
      success: number;
      initiated: number;
      revenue: number;
    }[]
  >([
    { time: "00:00", success: 0, initiated: 0, revenue: 0 },
    { time: "00:01", success: 0, initiated: 0, revenue: 0 },
    { time: "00:02", success: 0, initiated: 0, revenue: 0 },
    { time: "00:03", success: 0, initiated: 0, revenue: 0 },
    { time: "00:04", success: 0, initiated: 0, revenue: 0 },
    { time: "00:05", success: 0, initiated: 0, revenue: 0 },
    { time: "00:06", success: 0, initiated: 0, revenue: 0 },
    { time: "00:07", success: 0, initiated: 0, revenue: 0 },
    { time: "00:08", success: 0, initiated: 0, revenue: 0 },
    { time: "00:09", success: 0, initiated: 0, revenue: 0 },
    { time: "00:10", success: 0, initiated: 0, revenue: 0 },
    { time: "00:11", success: 0, initiated: 0, revenue: 0 },
    { time: "00:12", success: 0, initiated: 0, revenue: 0 },
    { time: "00:13", success: 0, initiated: 0, revenue: 0 },
    { time: "00:14", success: 0, initiated: 0, revenue: 0 },
    { time: "00:15", success: 0, initiated: 0, revenue: 0 },
    { time: "00:16", success: 0, initiated: 0, revenue: 0 },
    { time: "00:17", success: 0, initiated: 0, revenue: 0 },
    { time: "00:18", success: 0, initiated: 0, revenue: 0 },
    { time: "00:19", success: 0, initiated: 0, revenue: 0 },
    { time: "00:20", success: 0, initiated: 0, revenue: 0 },
    { time: "00:21", success: 0, initiated: 0, revenue: 0 },
    { time: "00:22", success: 0, initiated: 0, revenue: 0 },
    { time: "00:23", success: 0, initiated: 0, revenue: 0 },
  ]);

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("success");

  const total = React.useMemo(
    () => ({
      success: chartData.reduce((acc, curr) => acc + curr.success, 0),
      initiated: chartData.reduce((acc, curr) => acc + curr.initiated, 0),
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
    }),
    [chartData]
  );

  React.useEffect(() => {
    if (!isPending) {
      if (data) setChartData(data?.sortedArray);
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
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
        <CardDescription>
          {new Date(Date.now()).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart accessibilityLayer barGap={0} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              yAxisId={"count"}
              tickFormatter={(value) => `${value} Txn`}
            />
            <YAxis
              yAxisId={"sum"}
              orientation="right"
              tickFormatter={(value) => `₹${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name) => (
                    <div className="flex min-w-[130px] items-center text-xs text-muted-foreground">
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {name === "revenue" && (
                          <span className="font-normal text-muted-foreground">
                            ₹
                          </span>
                        )}
                        {value}
                      </div>
                    </div>
                  )}
                />
              }
            />
            <Bar
              yAxisId={"count"}
              dataKey="success"
              fill="var(--color-success)"
            />
            <Bar
              yAxisId={"count"}
              dataKey="initiated"
              fill="var(--color-initiated)"
            />
            <Bar
              yAxisId={"sum"}
              dataKey="revenue"
              fill="var(--color-revenue)"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col gap-4 sm:gap-8">
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
            {["success", "initiated"].map((key) => {
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
                dataKey="time"
                tickLine={false}
                axisLine={true}
                tickMargin={8}
                minTickGap={22}
                // tickFormatter={(value) => {
                //   const date = new Date(value);
                //   return date.toLocaleDateString("en-US", {
                //     month: "short",
                //     day: "numeric",
                //   });
                // }}
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
