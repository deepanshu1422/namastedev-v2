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
import DatePickerWithRange from "./date-picker";
import { addDays } from "date-fns";

const chartConfig = {
  views: {
    label: "Amount Views",
  },
  desktop: {
    label: "Transactions",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "New Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TransactionChart() {
  const [chartData, setChartData] = React.useState<
    {
      date: string | Date;
      desktop: number;
      mobile: number;
    }[]
  >([
    { date: "2024-04-01", desktop: 222, mobile: 150 },
    { date: "2024-04-02", desktop: 97, mobile: 180 },
    { date: "2024-04-03", desktop: 167, mobile: 120 },
    { date: "2024-04-04", desktop: 242, mobile: 260 },
    { date: "2024-04-05", desktop: 373, mobile: 290 },
    { date: "2024-04-06", desktop: 301, mobile: 340 },
    { date: "2024-04-07", desktop: 245, mobile: 180 },
    { date: "2024-04-08", desktop: 409, mobile: 320 },
    { date: "2024-04-09", desktop: 59, mobile: 110 },
    { date: "2024-04-10", desktop: 261, mobile: 190 },
    { date: "2024-04-11", desktop: 327, mobile: 350 },
  ]);

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop");

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    [chartData]
  );

  function generateDataArray(num: number) {
    // Get current date
    const currentDate = new Date();

    // Generate array of objects
    const dataArray: {
      date: Date;
      desktop: number; // Random number for desktop
      mobile: number;
    }[] = [];

    for (let i = 0; i < num; i++) {
      dataArray.push({
        date: addDays(currentDate, i),
        desktop: Math.floor(Math.random() * 500), // Random number for desktop
        mobile: Math.floor(Math.random() * 500), // Random number for mobile
      });
    }

    setChartData(dataArray);
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-8">
      <section className="flex max-sm:flex-col justify-between gap-4 pt-16">
        <h2 className="text-3xl md:text-4xl font-semibold">
          <span className="text-muted-foreground text-2xl">#</span>Overview
        </h2>
        <div className="flex gap-2 max-sm:w-full">
          <DatePickerWithRange generateDataArray={generateDataArray} />
        </div>
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
            {["desktop", "mobile"].map((key) => {
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
