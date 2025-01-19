"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"


import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
const chartData = [
	{ year: "2013", jrf: 2, srf: 1, others: 5 },
	{ year: "2014", jrf: 4, srf: 1, others: 0 },
	{ year: "2015", jrf: 8, srf: 1, others: 3 },
	{ year: "2016", jrf: 2, srf: 0, others: 1 },
	{ year: "2017", jrf: 3, srf: 1, others: 1 },
	{ year: "2018", jrf: 3, srf: 4, others: 1 },
	{ year: "2019", jrf: 7, srf: 9, others: 3 },
	{ year: "2020", jrf: 5, srf: 3, others: 2 },
	{ year: "2021", jrf: 7, srf: 1, others: 2 },
	{ year: "2022", jrf: 23, srf: 3, others: 11 },
	{ year: "2023", jrf: 18, srf: 4, others: 9 },
	{ year: "2024", jrf: 8, srf: 2, others: 5 },
]

const chartConfig = {
	jrf: {
		label: "Junior Research Fellow",
		color: "var(--chart-1)"
	},
	srf: {
		label: "Senior Research Fellow",
		color: "var(--chart-2)"
	},
    others: {
        label: "Others",
        color: "var(--chart-3)"
    }
}

export default function Component() {
	return (
		<div className="w-full max-w-[700px]">
            <ChartContainer config={chartConfig} height={280}>
                <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="year"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                    />
                    <ChartTooltip
                        cursor={false}
                        wrapperStyle={{ width: "200px" }}
                        content={<ChartTooltipContent indicator="dot" className="bg-white" />}
                    />
                    <Area
                        dataKey="jrf"
                        type="natural"
                        fill="var(--color-jrf)"
                        fillOpacity={0.4}
                        stroke="var(--color-jrf)"
                        stackId="a"
                    />
                    <Area
                        dataKey="srf"
                        type="natural"
                        fill="var(--color-srf)"
                        fillOpacity={0.4}
                        stroke="var(--color-srf)"
                        stackId="a"
                    />
                    <Area
                        dataKey="others"
                        type="natural"
                        fill="var(--color-others)"
                        fillOpacity={0.4}
                        stroke="var(--color-others)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
            <h1 className="text-lg font-semibold mt-2 text-sky-900">Our Staff Over the Years</h1>
        </div>
	)
}
